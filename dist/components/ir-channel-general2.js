import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { c as channels_data, t as testConnection, a as selectChannel, u as updateChannelSettings } from './channel.store.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$2 } from './ir-combobox2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irChannelGeneralCss = ".sc-ir-channel-general-h{display:block}.label-style.sc-ir-channel-general{width:6.25rem;text-align:end;padding-right:0.625rem !important}.connection-status.sc-ir-channel-general{display:flex;align-items:center;justify-content:space-between;margin-top:0.625rem !important}.connection-title.sc-ir-channel-general{border-bottom:1px solid #e4e5ec}.ml-18.sc-ir-channel-general{margin-left:18% !important}.status-message.sc-ir-channel-general{display:flex;align-items:center;gap:0.3125rem;font-size:0.81rem;margin:0;padding:0}";
const IrChannelGeneralStyle0 = irChannelGeneralCss;

const IrChannelGeneral = /*@__PURE__*/ proxyCustomElement(class IrChannelGeneral extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.connectionStatus = createEvent(this, "connectionStatus", 7);
        this.channel_status = null;
        this.buttonClicked = false;
        this.connection_status_message = '';
        this.status = false;
    }
    componentWillLoad() {
        var _a;
        if (this.channel_status === 'create' || !channels_data.isConnectedToChannel) {
            return;
        }
        this.connection_status_message = channels_data.isConnectedToChannel
            ? (_a = channels_data.selectedChannel.properties.find(property => property.id === channels_data.channel_settings.hotel_id)) === null || _a === void 0 ? void 0 : _a.name
            : '';
        this.status = true;
    }
    handleTestConnectionClicked(e) {
        var _a, _b, _c;
        e.preventDefault();
        this.buttonClicked = true;
        if (!((_a = channels_data.channel_settings) === null || _a === void 0 ? void 0 : _a.hotel_id)) {
            return;
        }
        const status = testConnection();
        this.status = status;
        this.connection_status_message = status
            ? (_b = channels_data.selectedChannel.properties.find(property => property.id === channels_data.channel_settings.hotel_id)) === null || _b === void 0 ? void 0 : _b.name
            : (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_IncorrectConnection;
        this.buttonClicked = false;
        this.connectionStatus.emit(this.status);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return (h(Host, { key: '0219600de53fca596b282c6f20e033c25017e84a', class: "px-1" }, h("section", { key: '2f4649e5061fd6dbcd5c2593d595aafe6dce6fb9', class: "ml-18" }, h("fieldset", { key: 'df39186bec30b4c6dcde21eba022066b27b51aea', class: "d-flex align-items-center" }, h("label", { key: 'e0f9ac1f8575c8f5b8b174fe69921aa4c1f27856', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Channel), h("ir-combobox", { key: '88ff874539068f96bc8e22cc66c0a06cc278f91e', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: (_b = channels_data.selectedChannel) === null || _b === void 0 ? void 0 : _b.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: 'a01459218e493a3fc0a2d6c27560a697f77dd84e', class: "d-flex align-items-center mt-1" }, h("label", { key: 'd3f6897b78db00b4a548c13e579030bd2734f055', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_Title), h("div", { key: '201fc31107d68b74ae28764a5107b1066e6a4e40', class: "flex-fill" }, h("input", { key: 'e0428d82d0f24aed901b820f10fd937111070487', id: "hotel_title", value: (_d = channels_data.channel_settings) === null || _d === void 0 ? void 0 : _d.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: '367049eb2a83f9c42cdbf961f0941d0f3f624290', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: 'a681f351802e1d0fc05a057d89945aec2dc0710b', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_ConnectionSettings), h("div", { key: '1d727e8cbaea2d5a18490687b169d1c2148363c1', class: "ml-18" }, h("fieldset", { key: '16a794a715334e9340f3cb4fa4099e8f167104dd', class: "d-flex align-items-center my-1" }, h("label", { key: '6d24a2e59230543eac6389b26900b62912abdd59', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, (_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_HotelID), h("div", { key: 'a34abf1a27621e96ffec445862503138043bc3ee', class: "flex-fill" }, h("input", { key: 'e70a875fc23d220828efff6f9ee608bcbc8d8517', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !((_g = channels_data.channel_settings) === null || _g === void 0 ? void 0 : _g.hotel_id) && 'border-danger'}`, value: (_h = channels_data.channel_settings) === null || _h === void 0 ? void 0 : _h.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: 'd72b0f499617f5a3165f76d2de46cfaf3aa65196', class: "connection-status" }, h("div", { key: '8f3f411410ccfb539d4ccf331b192d0f41ebf218', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: '75cc37b1b54b41042b4f3c34ee998576d4875010' }, this.connection_status_message)), h("button", { key: '9198b24d4a42ec3f07263c5db0eef0d5417716a7', class: "btn btn-outline-secondary btn-sm", type: "submit" }, (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_TestConnection)))))));
    }
    static get style() { return IrChannelGeneralStyle0; }
}, [2, "ir-channel-general", {
        "channel_status": [1],
        "buttonClicked": [32],
        "connection_status_message": [32],
        "status": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-channel-general", "ir-combobox", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-channel-general":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrChannelGeneral);
            }
            break;
        case "ir-combobox":
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

export { IrChannelGeneral as I, defineCustomElement as d };

//# sourceMappingURL=ir-channel-general2.js.map