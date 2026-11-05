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
        return (h(Host, { key: '0d178698a80e6c1d973c3e4a84cace87f40c2714', class: "px-1" }, h("section", { key: 'cf0dd529ce11ca4be8a065e8df8f8ae06d390c93', class: "ml-18" }, h("fieldset", { key: '8287b6b858cb52cc4c66e4a38d819d2e687a483f', class: "d-flex align-items-center" }, h("label", { key: 'c50d7b6df9337c7e04c30f83352ef2d00a99d448', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, t('Lcz_Channel')), h("ir-combobox", { key: 'eb1c4062679936aa8d30ce21df2552e47b274835', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: '01637c6d13289e1d66f5a86abe1d0dae360ed312', class: "d-flex align-items-center mt-1" }, h("label", { key: '442920fdd269709fd98b66dcec45075109d805d1', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, t('Lcz_Title')), h("div", { key: '1e15969587cc34bb6ef23e62f212db0b7f51cecd', class: "flex-fill" }, h("input", { key: '2e68e490bed326268c003384143360b7828b3951', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: '177e736e7eb02f417c20767f7709ff56c39e0d5a', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '5028115f1295c7217c2be2986c346375c5bb9b9c', class: "ir-text-start font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, t('Lcz_ConnectionSettings')), h("div", { key: '4dd0d5b6a5b6646df5c089a6820612491044a378', class: "ml-18" }, h("fieldset", { key: '1c9e1ee237716568b8d460f6fb9c1ca15dd00e25', class: "d-flex align-items-center my-1" }, h("label", { key: 'b4e41db24164683a3bfee93bdc3453afd482dbe4', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, t('Lcz_HotelID')), h("div", { key: 'e0ede4caf66d2a384d9d17b211a365bab4f3219b', class: "flex-fill" }, h("input", { key: 'dd2b1aa249d13f905ed3094471b4fd1b55affd27', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: 'dee99dc2d1548d4168da56e1ed673bf4699c61f5', class: "connection-status" }, h("div", { key: 'c9005665722b8f5d968cb996226bc463d8f049d4', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: '8785492171629bcd17a6367ff7e54bcfdb654fd9' }, this.connection_status_message)), h("button", { key: '5612b96c53fd21b46ea509e7bd57392649ff1e85', class: "btn btn-outline-secondary btn-sm", type: "submit" }, t('Lcz_TestConnection'))))))));
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
