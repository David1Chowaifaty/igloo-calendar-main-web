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
        return (h(Host, { key: '38874a642e7628bf7bae9d15477fcb1a4c1adccf', class: "px-1" }, h("section", { key: 'aa07dd004ba9cc09a311e8ef7f1a39d22756bf8c', class: "ml-18" }, h("fieldset", { key: '68f24ce3376db6b703ddd55d954154d7d44c1cc3', class: "d-flex align-items-center" }, h("label", { key: '10cdcdae7d6ee0b87c076e4ff67b18c52bd791e8', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, t('Lcz_Channel')), h("ir-combobox", { key: '8ee11148f0734c98c3222b9c6a2cf9c25087680d', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: channels_data.selectedChannel?.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: '2cda16348176b3b5a8256ffc255586262f690213', class: "d-flex align-items-center mt-1" }, h("label", { key: 'd63c69e9400bf46ab7e44df8b67b9391081f373c', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, t('Lcz_Title')), h("div", { key: 'd64aa6b8a96cf06b1859f4bfc77eb6f39f93b673', class: "flex-fill" }, h("input", { key: '5bfc1e21ef2228c56b21fa6b0b9b5a3fa1fb490f', id: "hotel_title", value: channels_data.channel_settings?.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: 'e5b23c688828a41e5d921d1464c801bddab88b12', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: 'e8cd5fd23ab713e576be6f613b9148a3291f7233', class: "ir-text-start font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, t('Lcz_ConnectionSettings')), h("div", { key: '244b6f22c89f2643f55e63881840ef70da45b42e', class: "ml-18" }, h("fieldset", { key: '9644ba1edd01b0f653444c9b5e315eafd4aecb99', class: "d-flex align-items-center my-1" }, h("label", { key: 'f5cc59ec4ac1ee84e59e442caeb89cad532f3c13', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, t('Lcz_HotelID')), h("div", { key: '6f58a7db195859047107ded867b6b25fa7699f02', class: "flex-fill" }, h("input", { key: 'd856025276d1e43af03fb30811758ad8c8d10316', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !channels_data.channel_settings?.hotel_id && 'border-danger'}`, value: channels_data.channel_settings?.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '4c798195d1b719530bf9583870071fe50822cc9e', class: "connection-status" }, h("div", { key: '8d128812202e1f88a06418e83e736edd325c4703', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: 'c2ad90827f1b9c877a02e704afb61b471098cc76' }, this.connection_status_message)), h("button", { key: '54862987f782cfa25f906a2482e307acd0320802', class: "btn btn-outline-secondary btn-sm", type: "submit" }, t('Lcz_TestConnection'))))))));
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
