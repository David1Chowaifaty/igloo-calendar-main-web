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
        return (h(Host, { key: '96ccc4a179f21252466f508c2dbf56b605869d20', class: "px-1" }, h("section", { key: 'e69d338a1b7ed876ed06be19217e0830d23fc2a8', class: "ml-18" }, h("fieldset", { key: '4160a53b3405bb343adf4fd00f8ff85e4b8547af', class: "d-flex align-items-center" }, h("label", { key: '4d352488e708386873a60542e179a3c6ce8c3270', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Channel), h("ir-combobox", { key: 'bd9756ccac78ebda39d07be29b6895b19c666f9d', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: '45a0c0def244317371d60a4c19c885c068fd1d58', class: "d-flex align-items-center mt-1" }, h("label", { key: 'be17f5d3ed31dc450e299afc11678d2f82f204f2', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Title), h("div", { key: '2f2d938775e6245dbe2988ef5c0520065d32a5ea', class: "flex-fill" }, h("input", { key: '0ca0e83a648f0723ea3c0b8fc5cb2739ff60f4f4', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: 'efe1c77f11b9f1184ad644b062fdc7baa244bda0', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '4d2b5f8af76b819dee75fd706b7d50fc402f6677', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, locales.entries?.Lcz_ConnectionSettings), h("div", { key: '5a606229e5587d45e5c4232a7b957357328ed446', class: "ml-18" }, h("fieldset", { key: '6c014fd8ea0306263be4aed1f8cf9c54fb3d50ad', class: "d-flex align-items-center my-1" }, h("label", { key: '2a42de5a3f0f83f2f74ffeb41e58ba7e76fbf1dd', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_HotelID), h("div", { key: '4d059013d6c8a83af7a023c80b4a26651e2e5b95', class: "flex-fill" }, h("input", { key: '8eb64a8cdabf24422eb81d0140b8f445e2dd7ea3', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '9b8aef111727e33833a325ccfa5499b37ab792e2', class: "connection-status" }, h("div", { key: '102c51f58a49599bbbbbcb29bd9d8ea0177611cb', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: '481194814402f331b79d58808d665ff21e7ff347' }, this.connection_status_message)), h("button", { key: '8fd7dbb80345c104c204c8f8e52606a6c06659eb', class: "btn btn-outline-secondary btn-sm", type: "submit" }, locales.entries?.Lcz_TestConnection)))))));
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
