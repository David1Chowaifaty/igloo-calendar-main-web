import { ChannelService } from "../../../services/channel.service";
import channels_data, { onChannelChange } from "../../../stores/channel.store";
import { Host, h } from "@stencil/core";
import { t } from "../../../services/locale/t";
export class IrChannelEditor {
    channel_status = null;
    ticket;
    selectedTab = '';
    isLoading = false;
    status = false;
    headerTitles = [
        {
            id: 'general_settings',
            name: t('Lcz_GeneralSettings'),
            disabled: false,
        },
        { id: 'mapping', name: t('Lcz_Mapping'), disabled: true },
        { id: 'channel_booking', name: t('Lcz_ChannelBooking'), disabled: true },
    ];
    selectedRoomType = [];
    saveChannelFinished;
    closeSideBar;
    toast;
    channelService = new ChannelService();
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
                return h("div", null, t('Lcz_ChannelBookingPlaceholder', { fallback: 'channel booking' }));
            default:
                return null;
        }
    }
    enableAllHeaders() {
        this.headerTitles = this.headerTitles.map((title, index) => (index < this.headerTitles.length - 1 ? { ...title, disabled: false } : title));
    }
    disableNonFirstTabs() {
        this.headerTitles = this.headerTitles.map((title, index) => (index > 0 ? { ...title, disabled: true } : title));
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
        return (h(Host, { key: 'b95ad3e8d105198d244ace2de3d7c85f126c9a11', class: " d-flex flex-column h-100" }, h("nav", { key: '6f0cb5db0380aee228df85ca82f464b6dc26e3e1', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, h("div", { key: '5cf04dabd5768f9d7730d89d8fbf03d489820a9c', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, h("h3", { key: 'dfe88f41ed4bc0d244512eb8a9891ef291ff244f', class: "ir-text-start font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? t('Lcz_CreateChannel') : t('Lcz_EditChannel')), h("ir-icon", { key: 'f4bb7ac4552a91e76f6494b8139cd1a4bacac6c4', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '087345a47eafd2cb1d85b731bf037f7b6f0e0809', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '92027a2a1faf50ed58683ce4c494047ecd1d07f6', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("ir-channel-header", { key: '28e26ff7019df984c92bed660811088be76f9e0a', class: "mt-1 px-0", headerTitles: this.headerTitles })), h("section", { key: '8a635bf27e214f6b89776d320ed0371e2ab96fcd', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), h("ir-button", { key: '96c97e86fea1e93e9b218a527862f2a4aaa5cc87', isLoading: this.isLoading, onClickHandler: () => {
                if (!channels_data.isConnectedToChannel) {
                    this.toast.emit({
                        type: 'error',
                        description: t('Lcz_InvalidCredentials'),
                        title: t('Lcz_InvalidCredentials'),
                    });
                    return;
                }
                this.saveConnectedChannel();
            }, class: "px-1 py-1 top-border", btn_styles: "w-100  justify-content-center align-items-center", text: t('Lcz_Save', { fallback: 'Save' }) })));
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "channel_status",
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
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "ticket"
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
                            "path": "@/components/ui/ir-toast/toast",
                            "id": "src/components/ui/ir-toast/toast.ts::IToast",
                            "referenceLocation": "IToast"
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
