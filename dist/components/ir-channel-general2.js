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
        return (h(Host, { key: '9a874b2c9671cf4780afb6c6f44af18b04e6d039', class: "px-1" }, h("section", { key: '6ec3a732ccb516a2238e7b624db0dbad558c6cd6', class: "ml-18" }, h("fieldset", { key: '440cd34e263eaf97eaf92304e32fc9cefb8a9bde', class: "d-flex align-items-center" }, h("label", { key: 'aa6307395778a40982eba50a067fbe8b27091654', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Channel), h("ir-combobox", { key: '4631c2a9ed71fdb549f2c894a57f5fa98c1e9d47', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: '66b09e509be41a69d7d35107435ec55f6b325a92', class: "d-flex align-items-center mt-1" }, h("label", { key: '6ca9ea4f405f8e2980435a111ecc9bc4d520adb1', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Title), h("div", { key: 'f4e1f2c37e0488129a150b0ecbd2e5d775264385', class: "flex-fill" }, h("input", { key: 'e6feafa62fe8a622eda5eeb871e51fccb0e100e4', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: '13400476c85cb7377712dc7061f6cdf6e87c0a95', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '76f454582e7f78b3babe55eda973cf7a044b0ac1', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, locales.entries?.Lcz_ConnectionSettings), h("div", { key: 'ae98f0e70df1b23d227c0bb0eaed60fbe7596f8f', class: "ml-18" }, h("fieldset", { key: '56f6cb9afcd35c7e9f25d0c4772a505c889a2123', class: "d-flex align-items-center my-1" }, h("label", { key: 'a81c6af96af79f2ce8dff2218607a047b9ac9607', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_HotelID), h("div", { key: 'e1366294afc868e9bc62b39f46d70ee910778306', class: "flex-fill" }, h("input", { key: '0600fe8a1333dae5d4a994cc2964d0c15693d1fd', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '15ff4b33c3f775b8a8b01b68f685331c2016ac65', class: "connection-status" }, h("div", { key: '36dae22cd2bb4b4a1eb57c35adcc82306635fd52', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: 'be26b4fc8589bbca7e93d930e0e491f5b654de10' }, this.connection_status_message)), h("button", { key: '0003fd58f068b8bd90eb6b14442d143d3e968b23', class: "btn btn-outline-secondary btn-sm", type: "submit" }, locales.entries?.Lcz_TestConnection)))))));
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