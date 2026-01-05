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
    }
    channel_status = null;
    buttonClicked = false;
    connection_status_message = '';
    status = false;
    connectionStatus;
    componentWillLoad() {
        if (this.channel_status === 'create' || !channels_data.isConnectedToChannel) {
            return;
        }
        this.connection_status_message = channels_data.isConnectedToChannel
            ? channels_data.selectedChannel.properties.find(property => property.id === channels_data.channel_settings.hotel_id)?.name
            : '';
        this.status = true;
    }
    handleTestConnectionClicked(e) {
        e.preventDefault();
        this.buttonClicked = true;
        if (!channels_data.channel_settings?.hotel_id) {
            return;
        }
        const status = testConnection();
        this.status = status;
        this.connection_status_message = status
            ? channels_data.selectedChannel.properties.find(property => property.id === channels_data.channel_settings.hotel_id)?.name
            : locales.entries?.Lcz_IncorrectConnection;
        this.buttonClicked = false;
        this.connectionStatus.emit(this.status);
    }
    render() {
        return (h(Host, { key: '635ea548306e14be9a7e422938c0f4663d058c0b', class: "px-1" }, h("section", { key: '26dc9317b666226fd3bbb95c1ce3b39f3a4c26be', class: "ml-18" }, h("fieldset", { key: 'c5db1f74ced6382802a417ff40c13617f735b9c5', class: "d-flex align-items-center" }, h("label", { key: '2e68b5e92095ea1fb45d7b447fe9e448dcf1ecce', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Channel), h("ir-combobox", { key: 'b85418dd88029a69aaf75179616ab8be54f8ace2', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: '62610daa8401609abace64c80b6a0dd6f11cffc3', class: "d-flex align-items-center mt-1" }, h("label", { key: '8e0c31b886fe181a3ada952776f459355ea1a80d', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Title), h("div", { key: '29fa579bdfa408ba0f8c40bc9e52e75c1e4811cb', class: "flex-fill" }, h("input", { key: '09f1193773f9dad421d98035bad7af2c33a8b369', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: '8415d8d575579577746a31c2f6d0e31a69f50b9a', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '3cedf2f8fb40b49700264ad50696e29acd1e030c', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, locales.entries?.Lcz_ConnectionSettings), h("div", { key: '9d6d1aa2a82624a9c2386efc89f2c0a6358fd382', class: "ml-18" }, h("fieldset", { key: '8a9995cde55f39e9650a36712c124abd586231e5', class: "d-flex align-items-center my-1" }, h("label", { key: '716266f0177469c6bad9b7f0fccea04c8a9a892d', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_HotelID), h("div", { key: '7b0c8d9d4619de55cb7d651f5cd4891d8b0f71ac', class: "flex-fill" }, h("input", { key: '67424ccc103a1e7a6e6950d88c093a720e2ec489', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '88c37d1a0dbf1e3a8a18d1ed84b8b01fd53745f0', class: "connection-status" }, h("div", { key: '18e53969ea6b2ebe4b01106bf76c757863bea0ea', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: '2f7cf242574a9b0b0c28bb950f125a8eed77e2be' }, this.connection_status_message)), h("button", { key: '1175755fb00923788c51b19da562e0976019b072', class: "btn btn-outline-secondary btn-sm", type: "submit" }, locales.entries?.Lcz_TestConnection)))))));
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