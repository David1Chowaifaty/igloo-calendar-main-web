import { ChannelService } from "../../../services/channel.service";
import channels_data, { onChannelChange } from "../../../stores/channel.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrChannelEditor {
    constructor() {
        var _a, _b, _c;
        this.channelService = new ChannelService();
        this.channel_status = null;
        this.ticket = undefined;
        this.selectedTab = '';
        this.isLoading = false;
        this.status = false;
        this.headerTitles = [
            {
                id: 'general_settings',
                name: (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_GeneralSettings,
                disabled: false,
            },
            { id: 'mapping', name: (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_Mapping, disabled: true },
            { id: 'channel_booking', name: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_ChannelBooking, disabled: true },
        ];
        this.selectedRoomType = [];
    }
    componentWillLoad() {
        if (this.channel_status === 'edit') {
            this.enableAllHeaders();
        }
        this.selectedTab = this.headerTitles[0].id;
        onChannelChange('isConnectedToChannel', newValue => {
            if (!!newValue) {
                this.enableAllHeaders();
            }
            else {
                this.disableNonFirstTabs();
            }
        });
    }
    handleTabChange(e) {
        e.stopPropagation();
        e.stopImmediatePropagation();
        this.selectedTab = e.detail;
    }
    renderTabScreen() {
        switch (this.selectedTab) {
            case 'general_settings':
                return h("ir-channel-general", { channel_status: this.channel_status, onConnectionStatus: e => (this.status = e.detail) });
            case 'mapping':
                return h("ir-channel-mapping", null);
            case 'channel_booking':
                return h("div", null, "channel booking");
            default:
                return null;
        }
    }
    enableAllHeaders() {
        this.headerTitles = this.headerTitles.map((title, index) => (index < this.headerTitles.length - 1 ? Object.assign(Object.assign({}, title), { disabled: false }) : title));
    }
    disableNonFirstTabs() {
        this.headerTitles = this.headerTitles.map((title, index) => (index > 0 ? Object.assign(Object.assign({}, title), { disabled: true }) : title));
    }
    async saveConnectedChannel() {
        try {
            this.isLoading = true;
            await this.channelService.saveConnectedChannel(null, false);
            this.saveChannelFinished.emit();
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a, _b;
        return (h(Host, { key: 'b4f573710dd7225a2b2eeb078b27950badf4154e', class: " d-flex flex-column h-100" }, h("nav", { key: '08bae12afa10e28f06780d9b6501de5e97078c5b', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, h("div", { key: '9849ddde40f253c5cd44f9653ab8115db1891a49', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, h("h3", { key: '42b8a3822a1b5c8d68d6e9de547174731ac4f304', class: "text-left font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_CreateChannel : (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_EditChannel), h("ir-icon", { key: 'c69b9e7163b5dcf692683d40b09cf5ec85a9c9bf', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: 'ababb4404f7c0c2ce8b633cb42ea7224e1799d98', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '991deff90756aea51a9484da12c879f310d8460c', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("ir-channel-header", { key: 'a8281e3c5efaee0abbfe4a07fe1290bc1cf9387e', class: "mt-1 px-0", headerTitles: this.headerTitles })), h("section", { key: '1682785187c16dc7c113b6b68cc918e904ecf212', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), h("ir-button", { key: '28fa26b724851bdf293f45cdcabcc2d7b34c928a', isLoading: this.isLoading, onClickHandler: () => {
                if (!channels_data.isConnectedToChannel) {
                    this.toast.emit({
                        type: 'error',
                        description: locales.entries.Lcz_InvalidCredentials,
                        title: locales.entries.Lcz_InvalidCredentials,
                    });
                    return;
                }
                this.saveConnectedChannel();
            }, class: "px-1 py-1 top-border", btn_styles: "w-100  justify-content-center align-items-center", text: locales.entries.Lcz_Save })));
    }
    static get is() { return "ir-channel-editor"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-channel-editor.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-channel-editor.css"]
        };
    }
    static get properties() {
        return {
            "channel_status": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'create' | 'edit' | null",
                    "resolved": "\"create\" | \"edit\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "channel_status",
                "reflect": false,
                "defaultValue": "null"
            },
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
                "attribute": "ticket",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "selectedTab": {},
            "isLoading": {},
            "status": {},
            "headerTitles": {},
            "selectedRoomType": {}
        };
    }
    static get events() {
        return [{
                "method": "saveChannelFinished",
                "name": "saveChannelFinished",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "closeSideBar",
                "name": "closeSideBar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "toast",
                "name": "toast",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "IToast",
                    "resolved": "ICustomToast & Partial<IToastWithButton> | IDefaultToast & Partial<IToastWithButton>",
                    "references": {
                        "IToast": {
                            "location": "import",
                            "path": "@/components/ir-toast/toast",
                            "id": "src/components/ir-toast/toast.ts::IToast"
                        }
                    }
                }
            }];
    }
    static get listeners() {
        return [{
                "name": "tabChanged",
                "method": "handleTabChange",
                "target": undefined,
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-channel-editor.js.map