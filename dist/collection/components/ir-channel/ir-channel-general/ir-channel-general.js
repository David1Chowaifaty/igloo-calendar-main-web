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
        return (h(Host, { key: '79e29e3a5c300393027752b925498f0ab2e763d2', class: "px-1" }, h("section", { key: '1ce0846caf321d2a107429fa7f8e6f6042bbc29e', class: "ml-18" }, h("fieldset", { key: 'f611539e5e1c017d7d656bb68405f0ff1e7f2a76', class: "d-flex align-items-center" }, h("label", { key: '0ff900c72dfab090db72fe26e497f0697be42cd0', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Channel), h("ir-combobox", { key: 'b24f8eec848c9c95ec6b06964a269acc85f79495', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: '158b933ff747992070d7cbf24234e44b24a9bda8', class: "d-flex align-items-center mt-1" }, h("label", { key: 'b83415659f594f143266dbc12c0135854c4fb325', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Title), h("div", { key: 'fc9868bfc9d532fa507ee8aaadb4cb096b5e724a', class: "flex-fill" }, h("input", { key: '749c1767c50cf6198f6d55732ee07733a1691f72', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: 'f5cd30c4dc66d72864b31261ec4d9335f23aa829', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: 'f3de27323a7af84a56152f42af5414a6708d2019', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, locales.entries?.Lcz_ConnectionSettings), h("div", { key: '0a3d90bd7525b2b0529c0c62aa589fafef83f01b', class: "ml-18" }, h("fieldset", { key: 'f8470fa17bc4e6ed3230b960f6bb72bfce370142', class: "d-flex align-items-center my-1" }, h("label", { key: 'd7ccf5ffce703e5beb09cfdfaad2375d01ee0f8a', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_HotelID), h("div", { key: '68c8b9902dff1c90446d4254110074ba9ad33923', class: "flex-fill" }, h("input", { key: '8ef6385b773401cffb001c39df17ef9458a3981b', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '44f8fa520c7abc2d411468bdb46b72024d2f0797', class: "connection-status" }, h("div", { key: 'e10d39d969fd0649b39b4c90db124794d0dbddb7', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: '460e80d37339e52b23a6d9972ac3a5e7406e87de' }, this.connection_status_message)), h("button", { key: '8d39957f9a5ce62f9489263cbe441aff767925ae', class: "btn btn-outline-secondary btn-sm", type: "submit" }, locales.entries?.Lcz_TestConnection)))))));
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
