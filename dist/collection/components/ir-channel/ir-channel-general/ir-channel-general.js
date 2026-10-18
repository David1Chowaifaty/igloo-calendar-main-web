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
        return (h(Host, { key: '745b2a8d69c28bf1d8e8e15951c01e5fa9e39f67', class: "px-1" }, h("section", { key: 'bb05ace43190505be8e66ea1521b3bae389d64b9', class: "ml-18" }, h("fieldset", { key: '1d6f2888ddc90e2286e966cda932ffbc6087d7d9', class: "d-flex align-items-center" }, h("label", { key: '72e3713a4c81ab75d133400f182bb5c35e89e9f5', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, t('Lcz_Channel')), h("ir-combobox", { key: '7f868f2c8758f0a2f3bd511b0577bf57db58b528', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: 'a52db58d4ce33f3e8129bfee01da27c25d876ded', class: "d-flex align-items-center mt-1" }, h("label", { key: 'ccf478a279c298439aaaeabec3b39cf6038eda05', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, t('Lcz_Title')), h("div", { key: 'b0d25363283f827f85471f14113fe2c7fbb2dedb', class: "flex-fill" }, h("input", { key: 'afb3194236caf92aef93e647c3c28b3ae8c6dacf', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: 'eae04cccaa083d995dc2459c51d63fbfc4b61a0b', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '36641440e151e6c3d175ede3004877e60d5953ab', class: "ir-text-start font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, t('Lcz_ConnectionSettings')), h("div", { key: 'a5429fa8a13d5d07b118661e38a3936518f2cc6d', class: "ml-18" }, h("fieldset", { key: '2a5132d97a0ceb648209c078a62736d7efc7aaa8', class: "d-flex align-items-center my-1" }, h("label", { key: '8be06833058e24394b21657fad9817f7011125e7', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, t('Lcz_HotelID')), h("div", { key: 'b42e3f0899f9078517962ace475345551fe0e724', class: "flex-fill" }, h("input", { key: '4701759bfc87546d1846510dbb278829b0805878', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '28a2e0dc8cea3c2ba84b68f3d00f8e6b87d242e1', class: "connection-status" }, h("div", { key: '18da3b750c881e2ee1ed237c54f525536ad95efb', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: 'f95656439b2c65faa3c063b16736f9fe087c73ba' }, this.connection_status_message)), h("button", { key: '8219100aea4537e6b335df3e0676905a084cd750', class: "btn btn-outline-secondary btn-sm", type: "submit" }, t('Lcz_TestConnection'))))))));
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
