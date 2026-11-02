import channels_data, { selectChannel, testConnection, updateChannelSettings } from "../../../stores/channel.store";
import { Host, h } from "@stencil/core";
import { t } from "../../../services/locale/t";
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
            : t('Lcz_IncorrectConnection');
        this.buttonClicked = false;
        this.connectionStatus.emit(this.status);
    }
    render() {
        return (h(Host, { key: 'c2817c0cae75410bba43cc0e251db7c802ac6a60', class: "px-1" }, h("section", { key: '6e16b23ec5239e67854042c7adef15e79dbfc43f', class: "ml-18" }, h("fieldset", { key: 'b1c83a194d663c9a3aee6f93e5b0e7fb112d3959', class: "d-flex align-items-center" }, h("label", { key: '71b522f96774372015937ecbf1c728415e1d3be1', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, t('Lcz_Channel')), h("ir-combobox", { key: 'a5781efaec2562d057bb2bd004cf9797fc94344c', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: '4bbb00d61ad58941acb96d20eac42e33f3cf52c4', class: "d-flex align-items-center mt-1" }, h("label", { key: '0818dde838930cbb722881c010b323d694f0bf12', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, t('Lcz_Title')), h("div", { key: '3c1d05f6e4dec4282de418efe06968f2130673a8', class: "flex-fill" }, h("input", { key: '595fe40b7e11d0fbe2151f8dc5dfa6ab6ec2e530', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: '717773df2aeb48e969eab0dcb08340e3adb07f03', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '9c6aea6bc2601107657ce44c3b6341c6de4cead7', class: "ir-text-start font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, t('Lcz_ConnectionSettings')), h("div", { key: '74f9d064755929eb911479eff08db2bb5dc00d88', class: "ml-18" }, h("fieldset", { key: '1d811f0a01080733cc10662c773d529dbb767155', class: "d-flex align-items-center my-1" }, h("label", { key: '5cfdadbcff3f218e904c25cadf041d42f00794df', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, t('Lcz_HotelID')), h("div", { key: '959816fc464ed186758a7e5aba6d2adfbc83746e', class: "flex-fill" }, h("input", { key: 'd3dde325a1b7aa0081ce2812dd143a40f0ecbdf3', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '2d3f1c588e8190119ce4245345192c6999cc0876', class: "connection-status" }, h("div", { key: 'fff53d2137c63107cab82417e5b8a82a7fc2aeed', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: '88df6d6b2fad0dcafe7937e732b295e31228416f' }, this.connection_status_message)), h("button", { key: '8cc1b6e4bb006b9c13e2e7ae3cb79d99b0ef8a27', class: "btn btn-outline-secondary btn-sm", type: "submit" }, t('Lcz_TestConnection'))))))));
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
                "reflect": false,
                "attribute": "channel_status",
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
