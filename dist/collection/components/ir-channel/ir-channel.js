import { RoomService } from "../../services/room.service";
import channels_data, { resetStore, selectChannel, setChannelIdAndActiveState, testConnection, updateChannelSettings } from "../../stores/channel.store";
import { Host, h, Fragment } from "@stencil/core";
import { actions } from "./data";
import { ChannelService } from "../../services/channel.service";
import ApiClient from "../../models/ApiClient";
import { LocaleController } from "../../services/locale/locale.controller";
import { LanguageSync } from "../../services/locale/language-sync";
import { SCREEN_TABLES } from "../../services/locale/screen-tables";
import { t } from "../../services/locale/t";
export class IrChannel {
    el;
    ticket = '';
    propertyid;
    language;
    baseurl;
    p;
    channel_status = null;
    modal_cause = null;
    isLoading = false;
    roomService = new RoomService();
    channelService = new ChannelService();
    ApiClient = new ApiClient();
    irModalRef;
    propertyId;
    /** Re-runs init when the language changes so server-localized data follows. */
    languageSync = new LanguageSync(SCREEN_TABLES.channel, () => this.initializeApp());
    componentWillLoad() {
        this.isLoading = true;
        if (this.ticket !== '') {
            this.ApiClient.setApiClient(this.ticket);
            this.initializeApp();
        }
    }
    componentDidLoad() {
        this.languageSync.connect();
    }
    disconnectedCallback() {
        this.languageSync.disconnect();
    }
    languageChanged(next, previous) {
        this.languageSync.propChanged(next, previous);
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
        const [, ,] = await Promise.all([this.channelService.getExposedChannels(this.propertyId), this.channelService.getExposedConnectedChannels(this.propertyid)]);
    }
    async initializeApp() {
        if (!this.propertyid && !this.p) {
            throw new Error('Property ID or username is required');
        }
        try {
            // Started first: it seeds `LocaleController.language` from the host prop synchronously,
            // so the requests below are built with the right language on first mount.
            const localeReady = LocaleController.load({ language: this.language, tables: SCREEN_TABLES.channel });
            let propertyId = this.propertyid;
            if (!propertyId) {
                const propertyData = await this.roomService.getExposedProperty({
                    id: 0,
                    aname: this.p,
                    language: LocaleController.language,
                    is_backend: true,
                });
                propertyId = propertyData.My_Result.id;
            }
            const requests = [this.channelService.getExposedChannels(propertyId), this.channelService.getExposedConnectedChannels(propertyId), localeReady];
            if (this.propertyid) {
                requests.unshift(this.roomService.getExposedProperty({
                    id: this.propertyid,
                    language: LocaleController.language,
                    is_backend: true,
                }));
            }
            this.propertyId = propertyId;
            await Promise.all(requests);
            channels_data.property_id = this.propertyid;
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
        this.ApiClient.setApiClient(this.ticket);
        this.initializeApp();
    }
    handleCancelModal(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.modal_cause = null;
    }
    handleSidebarClose(e) {
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
                message: t('Lcz_UnSavedChangesWillBeLost'),
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
        if (this.isLoading) {
            return (h("div", { class: "h-screen bg-white d-flex flex-column align-items-center justify-content-center" }, h("ir-loading-screen", null)));
        }
        return (h(Host, { class: "h-100 " }, h("ir-toast", null), h("section", { class: "p-2 px-lg-5 py-0 h-100 d-flex flex-column" }, h("div", { class: "d-flex w-100 justify-content-between mb-2 align-items-center" }, h("h3", { class: "font-weight-bold m-0 p-0" }, t('Lcz_iSWITCH')), h("ir-button", { iconPosition: "left", icon_name: "circle_plus", text: t('Lcz_CreateChannel'), size: "sm", onClickHandler: () => (this.channel_status = 'create') })), h("div", { class: "card p-1 flex-fill m-0" }, h("table", { class: "table table-striped table-bordered no-footer dataTable" }, h("thead", null, h("tr", null, h("th", { scope: "col", class: "ir-text-start" }, t('Lcz_Channel')), h("th", { scope: "col" }, t('Lcz_Status', { fallback: 'Status' })), h("th", { scope: "col", class: "actions-theader" }, t('Lcz_Actions', { fallback: 'Actions' })))), h("tbody", { class: "" }, channels_data.connected_channels?.map(channel => (h("tr", { key: channel.channel.id }, h("td", { class: "ir-text-start" }, channel.channel.name, " ", channel.title ? `(${channel.title})` : ''), h("td", null, h("ir-switch", { checked: channel.is_active, onCheckChange: e => this.handleCheckChange(e.detail, channel) })), h("th", null, h("div", { class: "d-flex justify-content-end" }, h("div", { class: "btn-group" }, h("button", { type: "button", class: "btn  dropdown-toggle px-0", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, h("span", { class: "ir-me-1" }, " ", t('Lcz_Actions', { fallback: 'Actions' })), h("svg", { class: 'caret-icon', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 14, width: 14 }, h("path", { fill: "var(--blue)", d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), h("div", { class: "dropdown-menu dropdown-menu-right" }, actions().map((a, index) => (h(Fragment, null, h("button", { onClick: () => {
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
            }, key: a.id + '_item', class: `dropdown-item my-0 ${a.id === 'remove' ? 'danger' : ''}`, type: "button" }, a.icon(), a.name), index < actions().length - 1 && h("div", { key: a.id + '_divider', class: "dropdown-divider my-0" }))))))))))))), channels_data.connected_channels.length === 0 && h("p", { class: "text-center" }, t('Lcz_NoChannelsAreConnected')))), h("ir-sidebar", { sidebarStyles: {
                // width: '60rem',
                padding: '0',
            }, showCloseButton: false, onIrSidebarToggle: this.handleSidebarClose.bind(this), open: this.channel_status !== null }, this.channel_status && (h("ir-channel-editor", { slot: "sidebar-body", ticket: this.ticket, channel_status: this.channel_status, onCloseSideBar: this.handleSidebarClose.bind(this) }))), h("ir-modal", { modalTitle: this.modal_cause?.title, modalBody: this.modal_cause?.message, ref: el => (this.irModalRef = el), rightBtnText: t('Lcz_Confirm', { fallback: 'Confirm' }), leftBtnText: t('Lcz_Cancel', { fallback: 'Cancel' }), onCancelModal: this.handleCancelModal.bind(this), rightBtnColor: this.modal_cause?.main_color ?? 'primary', onConfirmModal: this.handleConfirmClicked.bind(this) })));
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
                "reflect": false,
                "attribute": "ticket",
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
                "reflect": false,
                "attribute": "propertyid"
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
                "reflect": false,
                "attribute": "language"
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
                "reflect": false,
                "attribute": "baseurl"
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
                "reflect": false,
                "attribute": "p"
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
                "propName": "language",
                "methodName": "languageChanged"
            }, {
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
