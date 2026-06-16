import channels_data, { selectChannel, testConnection, updateChannelSettings } from "../../../stores/channel.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrChannelGeneral {
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
        return (h(Host, { key: '7e282b2d02a9ea2d71c36398c472f865ef566966', class: "px-1" }, h("section", { key: '8f47ae97ea80a38a428950194df2393b531782cc', class: "ml-18" }, h("fieldset", { key: '329ee2de41997771fd5ba6b229ad1f186ad34631', class: "d-flex align-items-center" }, h("label", { key: 'f60f87d3808aaa7e407d6ba00141624f71a73e68', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Channel), h("ir-combobox", { key: '7024710d8a242dea47a7f81b91b0262b94d51e5a', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: 'b4182eb27e8430692eeb85c50d9d555b30623df4', class: "d-flex align-items-center mt-1" }, h("label", { key: '7814f9e042f7d63ab7f48aff742487c7c0c4148f', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Title), h("div", { key: 'f0931f240767c0650cf2da46882f74baf2c08b00', class: "flex-fill" }, h("input", { key: 'bb52156944df7d365e5aec72252625f813bfb843', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: 'e36ef966fbfd07dfd51080e6364de100ef4f84e6', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '34847b417d80f33121f313a8722fbecf6c4d5c55', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, locales.entries?.Lcz_ConnectionSettings), h("div", { key: 'cbfd6a0b5cb29b402d6425c4a80ced16ef7d4e9d', class: "ml-18" }, h("fieldset", { key: 'abe723c181a80b958675676bfefa64992f88e49d', class: "d-flex align-items-center my-1" }, h("label", { key: '74d3cf5b67745040972d3f2653df1ab6056008b7', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_HotelID), h("div", { key: '26b5419754b1b3356f085c718a40c4f5fd094cfc', class: "flex-fill" }, h("input", { key: 'fcf1d2254782888a4aba6f9dac063ce0455c028d', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '1eec04eb441ac8d126ea6e89c44d54f5403806ec', class: "connection-status" }, h("div", { key: '5b2d7a55978d25ba2c68df3018e899624ad09a86', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: '5bde21a452d2094e13b10446b6c469a4ba190b8c' }, this.connection_status_message)), h("button", { key: '9880c00c7387fdae1caac946b4f772465ef66e6e', class: "btn btn-outline-secondary btn-sm", type: "submit" }, locales.entries?.Lcz_TestConnection)))))));
    }
    static get is() { return "ir-channel-general"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-channel-general.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-channel-general.css"]
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
                "attribute": "channel_status",
                "reflect": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "buttonClicked": {},
            "connection_status_message": {},
            "status": {}
        };
    }
    static get events() {
        return [{
                "method": "connectionStatus",
                "name": "connectionStatus",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-channel-general.js.map
