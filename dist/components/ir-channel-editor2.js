import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as calendar_data } from './calendar-data.js';
import { c as channels_data, o as onChannelChange } from './channel.store.js';
import { a as axios } from './axios.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$7 } from './ir-button2.js';
import { d as defineCustomElement$6 } from './ir-channel-general2.js';
import { d as defineCustomElement$5 } from './ir-channel-header2.js';
import { d as defineCustomElement$4 } from './ir-channel-mapping2.js';
import { d as defineCustomElement$3 } from './ir-combobox2.js';
import { d as defineCustomElement$2 } from './ir-icon2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

class ChannelService {
    async getExposedChannels() {
        try {
            const { data } = await axios.post(`/Get_Exposed_Channels`, {});
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            const results = data.My_Result;
            channels_data.channels = [...results];
            return data;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async getExposedConnectedChannels(property_id) {
        try {
            const { data } = await axios.post(`/Get_Exposed_Connected_Channels`, { property_id });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            channels_data.connected_channels = [...data.My_Result];
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async saveConnectedChannel(id = null, is_remove) {
        try {
            let body = {};
            if (is_remove) {
                body = {
                    id,
                    is_remove,
                };
            }
            else {
                body = {
                    id: channels_data.channel_id,
                    title: channels_data.channel_settings.hotel_title,
                    is_active: channels_data.is_active,
                    channel: { id: channels_data.selectedChannel.id, name: channels_data.selectedChannel.name },
                    property: { id: calendar_data.id, name: calendar_data.name },
                    map: channels_data.mappedChannels,
                    is_remove,
                };
            }
            const { data } = await axios.post(`/Handle_Connected_Channel`, body);
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
}

const irChannelEditorCss = ".sc-ir-channel-editor-h{display:block;position:relative}nav.sc-ir-channel-editor{z-index:10}.top-border.sc-ir-channel-editor{border-top:1px solid #e4e5ec}.tab-container.sc-ir-channel-editor{overflow-y:auto;padding-right:0;margin-right:0}";
const IrChannelEditorStyle0 = irChannelEditorCss;

const IrChannelEditor = /*@__PURE__*/ proxyCustomElement(class IrChannelEditor extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.saveChannelFinished = createEvent(this, "saveChannelFinished", 7);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.toast = createEvent(this, "toast", 7);
        var _a, _b, _c;
        this.channel_status = null;
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
        this.channelService = new ChannelService();
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
        return (h(Host, { key: 'a580adf111a3ab15adf1a9e811b8cd5ad3a7eee3', class: " d-flex flex-column h-100" }, h("nav", { key: 'a68bc3e04ba7b2c725442b05dda761676b0ce768', class: "position-sticky sticky-top pb-1 top-0 bg-white " }, h("div", { key: '3a068933a971845868e40f47019cb00ef4862cab', class: "d-flex align-items-center px-1 py-1  justify-content-between" }, h("h3", { key: '6aea56f27ae9882c1552169d38cc49b0e3db1418', class: "text-left font-medium-2  py-0 my-0" }, this.channel_status === 'create' ? (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_CreateChannel : (_b = locales.entries) === null || _b === void 0 ? void 0 : _b.Lcz_EditChannel), h("ir-icon", { key: '6c03e8da1a48ccb5575a38c5d207f1059efbcf1a', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '63753429a22b0c3d3a4703be945336b07719e277', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '89e8fb557a1e4eb1c31c6cd4d80f51d69678ec41', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("ir-channel-header", { key: '1de958e5e628862381bb0c2922dfeb8600ec2e36', class: "mt-1 px-0", headerTitles: this.headerTitles })), h("section", { key: '98895f2faed952e90ade3a93c1e498d32b98856c', class: "flex-fill tab-container px-1" }, this.renderTabScreen()), h("ir-button", { key: '04f756c6497da2c911570a90b885eab4455d5697', isLoading: this.isLoading, onClickHandler: () => {
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
    static get style() { return IrChannelEditorStyle0; }
}, [2, "ir-channel-editor", {
        "channel_status": [1],
        "ticket": [1],
        "selectedTab": [32],
        "isLoading": [32],
        "status": [32],
        "headerTitles": [32],
        "selectedRoomType": [32]
    }, [[0, "tabChanged", "handleTabChange"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-channel-editor", "ir-button", "ir-channel-general", "ir-channel-header", "ir-channel-mapping", "ir-combobox", "ir-icon", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-channel-editor":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrChannelEditor);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-channel-general":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-channel-header":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-channel-mapping":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { ChannelService as C, IrChannelEditor as I, defineCustomElement as d };

//# sourceMappingURL=ir-channel-editor2.js.map