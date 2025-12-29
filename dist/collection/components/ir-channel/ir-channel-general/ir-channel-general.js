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
        return (h(Host, { key: 'a4aeb2d0a640e3ff47d20e6bd541bf2451f7edda', class: "px-1" }, h("section", { key: 'f6f3bddc108d04d48bd9b523bfc73d0a30a9f937', class: "ml-18" }, h("fieldset", { key: 'bf874947f87f3fcae672c62ddf283005e1313666', class: "d-flex align-items-center" }, h("label", { key: '57e7bb6daabb77ef57d2c0cd9b07a0b334f2561e', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Channel), h("ir-combobox", { key: '3e3a4442fdef9bb6f70a1fe693002c62ab6e0c80', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: '3311163f87299672249222fd3edcbfa44d058941', class: "d-flex align-items-center mt-1" }, h("label", { key: 'a8263a8c55f182a1ff1901675914827abcd8a5d7', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Title), h("div", { key: 'f522198a2ef89f35b19e13ff4dff157d8d6988e1', class: "flex-fill" }, h("input", { key: '193e519bc2246ff018ec63706c0d18eb1e8a9809', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: 'fe88bd814e56f261ec722d09f148c5f16af6a9c3', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '93142be31e441082bca050cdcb26cae9ce715257', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, locales.entries?.Lcz_ConnectionSettings), h("div", { key: 'e96c736ed8ef97df9c0493ddac0097dc6a1c081e', class: "ml-18" }, h("fieldset", { key: '53fa7c97455baec0cb0d063c83de2489a8dbe304', class: "d-flex align-items-center my-1" }, h("label", { key: 'bbe235023d03c0c545bac2d2a08a7e4edd9685f5', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_HotelID), h("div", { key: 'ddf6bd1b3229d2118b3ef7b5455a2705235cb099', class: "flex-fill" }, h("input", { key: 'cc9049fdb69234bebc6df5307380ed5b1884bc9a', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '271a89381c128926773308234c0a11bc0c6e3d1f', class: "connection-status" }, h("div", { key: '8fb948e746c715dc95e78c28c71267cdac1babe5', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: 'b7753bfd3beade943ceac57a9c4ecb2feb26f7a4' }, this.connection_status_message)), h("button", { key: 'f82cfe93464ac522cfa06a298a1fa5856a01b79e', class: "btn btn-outline-secondary btn-sm", type: "submit" }, locales.entries?.Lcz_TestConnection)))))));
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
