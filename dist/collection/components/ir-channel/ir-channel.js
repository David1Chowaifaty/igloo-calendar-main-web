import { RoomService } from "../../services/room.service";
import channels_data, { resetStore, selectChannel, setChannelIdAndActiveState, testConnection, updateChannelSettings } from "../../stores/channel.store";
import locales from "../../stores/locales.store";
import { Host, h, Fragment } from "@stencil/core";
import { actions } from "./data";
import { ChannelService } from "../../services/channel.service";
import Token from "../../models/Token";
export class IrChannel {
    constructor() {
        this.ticket = '';
        this.channel_status = null;
        this.modal_cause = null;
        this.isLoading = false;
        this.roomService = new RoomService();
        this.channelService = new ChannelService();
        this.token = new Token();
    }
    componentWillLoad() {
        this.isLoading = true;
        if (this.ticket !== '') {
            this.token.setToken(this.ticket);
            this.initializeApp();
        }
    }
    async handleConfirmClicked(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!this.modal_cause) {
            return;
        }
        await this.modal_cause.action();
        if (this.modal_cause.cause === 'remove') {
            resetStore();
            await this.refreshChannels();
        }
        this.modal_cause = null;
    }
    openModal() {
        this.irModalRef.openModal();
    }
    async refreshChannels() {
        const [, ,] = await Promise.all([this.channelService.getExposedChannels(), this.channelService.getExposedConnectedChannels(this.propertyid)]);
    }
    async initializeApp() {
        if (!this.propertyid && !this.p) {
            throw new Error('Property ID or username is required');
        }
        try {
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: this.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            const requests = [
                this.channelService.getExposedChannels(),
                this.channelService.getExposedConnectedChannels(propertyId),
                this.roomService.fetchLanguage(this.language, ['_CHANNEL_FRONT']),
            ];
            if (this.propertyid) {
                requests.unshift(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: this.language,
                    is_backend: true,
                }));
            }
            const results = await Promise.all(requests);
            const languageTexts = results[results.length - 1];
            channels_data.property_id = this.propertyid;
            if (!locales.entries) {
                locales.entries = languageTexts.entries;
                locales.direction = languageTexts.direction;
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    ticketChanged(newValue, oldValue) {
        if (newValue === oldValue) {
            return;
        }
        this.token.setToken(this.ticket);
        this.initializeApp();
    }
    handleCancelModal(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modal_cause = null;
    }
    handleSidebarClose(e) {
        var _a;
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (channels_data.selectedChannel) {
            this.modal_cause = {
                action: () => {
                    return new Promise(reselove => {
                        this.resetSideBar();
                        reselove('');
                    });
                },
                cause: 'channel',
                main_color: 'primary',
                message: (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_UnSavedChangesWillBeLost,
                title: '',
            };
            this.openModal();
        }
        else {
            this.resetSideBar();
        }
    }
    resetSideBar() {
        this.channel_status = null;
        resetStore();
    }
    async handleSaveChange(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        await this.refreshChannels();
        this.resetSideBar();
    }
    async handleCheckChange(check, params) {
        const selectedProperty = params.map.find(m => m.type === 'property');
        setChannelIdAndActiveState(params.id, check);
        updateChannelSettings('hotel_id', selectedProperty.channel_id);
        updateChannelSettings('hotel_title', params.title);
        selectChannel(params.channel.id.toString());
        testConnection();
        await this.channelService.saveConnectedChannel(null, false);
        resetStore();
        this.refreshChannels();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        if (this.isLoading) {
            return (h("div", { class: "h-screen bg-white d-flex flex-column align-items-center justify-content-center" }, h("ir-loading-screen", null)));
        }
        return (h(Host, { class: "h-100 " }, h("ir-toast", null), h("section", { class: "p-2 px-lg-5 py-0 h-100 d-flex flex-column" }, h("div", { class: "d-flex w-100 justify-content-between mb-2 align-items-center" }, h("h3", { class: "font-weight-bold m-0 p-0" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_iSWITCH), h("ir-button", { iconPosition: "left", icon_name: "circle_plus", text: (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_CreateChannel, size: "sm", onClickHandler: () => (this.channel_status = 'create') })), h("div", { class: "card p-1 flex-fill m-0" }, h("table", { class: "table table-striped table-bordered no-footer dataTable" }, h("thead", null, h("tr", null, h("th", { scope: "col", class: "text-left" }, (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_Channel), h("th", { scope: "col" }, (_d = locales.entries) === null || _d === void 0 ? void 0 : _d.Lcz_Status), h("th", { scope: "col", class: "actions-theader" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_Actions))), h("tbody", { class: "" }, (_f = channels_data.connected_channels) === null || _f === void 0 ? void 0 : _f.map(channel => {
            var _a;
            return (h("tr", { key: channel.channel.id }, h("td", { class: "text-left" }, channel.channel.name, " ", channel.title ? `(${channel.title})` : ''), h("td", null, h("ir-switch", { checked: channel.is_active, onCheckChange: e => this.handleCheckChange(e.detail, channel) })), h("th", null, h("div", { class: "d-flex justify-content-end" }, h("div", { class: "btn-group" }, h("button", { type: "button", class: "btn  dropdown-toggle px-0", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, h("span", { class: "mr-1" }, " ", (_a = locales.entries) === null || _a === void 0 ? void 0 :
                _a.Lcz_Actions), h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, h("path", { fill: "var(--blue)", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("div", { class: "dropdown-menu dropdown-menu-right" }, actions(locales.entries).map((a, index) => (h(Fragment, null, h("button", { onClick: () => {
                    if (a.id === 'pull_future_reservation' || a.id === 'view_logs') {
                        return;
                    }
                    a.action(channel);
                    if (a.id === 'edit') {
                        setTimeout(() => {
                            this.channel_status = 'edit';
                        }, 300);
                    }
                    else {
                        this.modal_cause = a.action(channel);
                        this.openModal();
                    }
                }, key: a.id + '_item', class: `dropdown-item my-0 ${a.id === 'remove' ? 'danger' : ''}`, type: "button" }, a.icon(), a.name), index < actions(locales.entries).length - 1 && h("div", { key: a.id + '_divider', class: "dropdown-divider my-0" }))))))))));
        }))), channels_data.connected_channels.length === 0 && h("p", { class: "text-center" }, (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_NoChannelsAreConnected))), h("ir-sidebar", { sidebarStyles: {
                // width: '60rem',
                padding: '0',
            }, showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose.bind(this), open: this.channel_status !== null }, this.channel_status && (h("ir-channel-editor", { slot: "sidebar-body", ticket: this.ticket, channel_status: this.channel_status, onCloseSideBar: this.handleSidebarClose.bind(this) }))), h("ir-modal", { modalTitle: (_h = this.modal_cause) === null || _h === void 0 ? void 0 : _h.title, modalBody: (_j = this.modal_cause) === null || _j === void 0 ? void 0 : _j.message, ref: el => (this.irModalRef = el), rightBtnText: (_k = locales.entries) === null || _k === void 0 ? void 0 : _k.Lcz_Confirm, leftBtnText: (_l = locales.entries) === null || _l === void 0 ? void 0 : _l.Lcz_Cancel, onCancelModal: this.handleCancelModal.bind(this), rightBtnColor: (_o = (_m = this.modal_cause) === null || _m === void 0 ? void 0 : _m.main_color) !== null && _o !== void 0 ? _o : 'primary', onConfirmModal: this.handleConfirmClicked.bind(this) })));
    }
    static get is() { return "ir-channel"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-channel.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-channel.css"]
        };
    }
    static get properties() {
        return {
            "ticket": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "ticket",
                "reflect": false,
                "defaultValue": "''"
            },
            "propertyid": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "propertyid",
                "reflect": false
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "language",
                "reflect": false
            },
            "baseurl": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "baseurl",
                "reflect": false
            },
            "p": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "p",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "channel_status": {},
            "modal_cause": {},
            "isLoading": {}
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "ticketChanged"
            }];
    }
    static get listeners() {
        return [{
                "name": "saveChannelFinished",
                "method": "handleSaveChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-channel.js.map
