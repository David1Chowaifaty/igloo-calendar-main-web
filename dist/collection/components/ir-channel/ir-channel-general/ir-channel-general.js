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
        return (h(Host, { key: '609b0e2f80947c6810f01a6a69fcf9705f38d287', class: "px-1" }, h("section", { key: 'ef561cff077a24e368f1d0f90cf08c0fae4405f9', class: "ml-18" }, h("fieldset", { key: '89ac49e3d1fe6331a156fad143116ac512e7c740', class: "d-flex align-items-center" }, h("label", { key: 'f6d49c5a582786da30a94d96069bc8898b5c98f1', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, t('Lcz_Channel')), h("ir-combobox", { key: '8757044107217b80536dee2db0dd1da338d3fab9', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: '59ff1fe27c28c7abcff22045b6411b81405baf1b', class: "d-flex align-items-center mt-1" }, h("label", { key: 'f8deaa581f8d2a171e6c2ff51f67210dd355b0d5', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, t('Lcz_Title')), h("div", { key: '7304f2f67a2b1bed3f3e1a556b736059155712d4', class: "flex-fill" }, h("input", { key: 'b37e5af70fa5a153a7477f35b9be59623556304f', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: '3d1a6221ce876b8ed9ca461e98f7b5cb64668722', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '1898e43ac5e2e3d3c3dc0ea94a1caf2152a82bde', class: "ir-text-start font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, t('Lcz_ConnectionSettings')), h("div", { key: 'f11ae26ca16e2da5eab780866b9d815fe5daee4e', class: "ml-18" }, h("fieldset", { key: 'df14c15b560c40a3571424d76369318c8da4a2bb', class: "d-flex align-items-center my-1" }, h("label", { key: 'a518db224d2fda3d57eb2e5c664b7a417c2a16b9', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, t('Lcz_HotelID')), h("div", { key: '07de992b1e3b0d9259deceb22136f95800e55b87', class: "flex-fill" }, h("input", { key: 'df023cffd8e25625bacc0e8471f428a986167da4', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '2a971c6936c8612123974fae24d10b310bd0b28f', class: "connection-status" }, h("div", { key: 'ce23579b1f0ffe39b801e8ba183991b64049b3cd', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: 'a0e71e57ea22eb0bde9daa1f27f42d4a31da6f21' }, this.connection_status_message)), h("button", { key: '6163ecb185e3c69082f0c42fd57f53cef217a986', class: "btn btn-outline-secondary btn-sm", type: "submit" }, t('Lcz_TestConnection'))))))));
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
