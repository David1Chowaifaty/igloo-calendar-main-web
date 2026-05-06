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
        return (h(Host, { key: '14c6e2a576e576b62dea48dd0c8e078b3a3de142', class: "px-1" }, h("section", { key: 'd0d6b652588afe1a568b3456db839c56526e07e0', class: "ml-18" }, h("fieldset", { key: '2507c97e535516b9b02defa11d87e261193a12b6', class: "d-flex align-items-center" }, h("label", { key: 'd68a63f2b6b0c88ec7d27623a619b38017864ba3', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Channel), h("ir-combobox", { key: '226639e405bf38e897f4955472a8a4c8732af173', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: 'e5dcf4b742a81f001eca53f9767acc1bbbd877af', class: "d-flex align-items-center mt-1" }, h("label", { key: '5024059385f298a21e9745cb258d8d3e1f93f929', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_Title), h("div", { key: '964bfb7221568bdaa7875b760f2d2782036f74af', class: "flex-fill" }, h("input", { key: 'eb884c0c75d050a21336e41cb48006fcb801aa3f', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: '3408f5d35b6083fc343ac8c78cdb85875d7c24af', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '86fbaf192e7bcccd3ef8562250ef8d210b4c79f7', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, locales.entries?.Lcz_ConnectionSettings), h("div", { key: '3f99e31e970ef164864031188ab7ca4e699dc93a', class: "ml-18" }, h("fieldset", { key: 'ec5bdbbceaaf1b4f867e600adf6bb39c9b63d013', class: "d-flex align-items-center my-1" }, h("label", { key: '840064cee2bf193540255ea6ca93b725a78b2962', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, locales.entries?.Lcz_HotelID), h("div", { key: '8144f945917764553c5004d0cbbc6be3e1fde226', class: "flex-fill" }, h("input", { key: '4a03493d73ca20d6e6964eea6b8f2da732e6709a', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '25bd07f7d22dd77419becccf2fce6cb84678c2e8', class: "connection-status" }, h("div", { key: 'a07bfbc631f9ccce72b38402f3ef43c085b6589b', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: 'fd194fee8d10df9c3646ef9b1a3e8937f9478587' }, this.connection_status_message)), h("button", { key: '7a8daa1daafa6fbc9d323e184c86060dc9b61633', class: "btn btn-outline-secondary btn-sm", type: "submit" }, locales.entries?.Lcz_TestConnection)))))));
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
