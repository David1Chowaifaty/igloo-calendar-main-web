import channels_data, { selectChannel, testConnection, updateChannelSettings } from "../../../stores/channel.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrChannelGeneral {
    constructor() {
        this.channel_status = null;
        this.buttonClicked = false;
        this.connection_status_message = '';
        this.status = false;
    }
    componentWillLoad() {
        var _a;
        if (this.channel_status === 'create' || !channels_data.isConnectedToChannel) {
            return;
        }
        this.connection_status_message = channels_data.isConnectedToChannel
            ? (_a = channels_data.selectedChannel.properties.find(property => property.id === channels_data.channel_settings.hotel_id)) === null || _a === void 0 ? void 0 : _a.name
            : '';
        this.status = true;
    }
    handleTestConnectionClicked(e) {
        var _a, _b, _c;
        e.preventDefault();
        this.buttonClicked = true;
        if (!((_a = channels_data.channel_settings) === null || _a === void 0 ? void 0 : _a.hotel_id)) {
            return;
        }
        const status = testConnection();
        this.status = status;
        this.connection_status_message = status
            ? (_b = channels_data.selectedChannel.properties.find(property => property.id === channels_data.channel_settings.hotel_id)) === null || _b === void 0 ? void 0 : _b.name
            : (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_IncorrectConnection;
        this.buttonClicked = false;
        this.connectionStatus.emit(this.status);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        return (h(Host, { key: 'd4c2ce86bf2d50648e842533b8047885404ff599', class: "px-1" }, h("section", { key: 'd7f9bd59abffc3db928b5fed20b54e9a6681f475', class: "ml-18" }, h("fieldset", { key: 'eab42435d131975eedbf29e67960d2ab126f0716', class: "d-flex align-items-center" }, h("label", { key: '4ffcdf3de25e9fb8c74a92786fb49519d35a3cad', htmlFor: "hotel_channels", class: "m-0 p-0 label-style" }, (_a = locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_Channel), h("ir-combobox", { key: '1d742b4c4d0dbb2197435c596e0d402f4796d4f1', input_id: "hotel_channels", disabled: channels_data.isConnectedToChannel, class: "flex-fill", value: (_b = channels_data.selectedChannel) === null || _b === void 0 ? void 0 : _b.name, onComboboxValueChange: (e) => {
                selectChannel(e.detail.data.toString());
            }, data: channels_data.channels.map(channel => ({
                id: channel.id,
                name: channel.name,
            })) })), h("fieldset", { key: '40f38a1b521dce4d77cf26d57c47665041f88d04', class: "d-flex align-items-center mt-1" }, h("label", { key: '7b595efe98529ff5ed1fdb0fecc6501c942f2b27', htmlFor: "hotel_title", class: "m-0 p-0 label-style" }, (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_Title), h("div", { key: '0edcbb3608702b9211815fd9071950d66f576194', class: "flex-fill" }, h("input", { key: '28aa611ad065bcba12985ff840c811d3c519cba3', id: "hotel_title", value: (_d = channels_data.channel_settings) === null || _d === void 0 ? void 0 : _d.hotel_title, onInput: e => updateChannelSettings('hotel_title', e.target.value), class: "form-control  flex-fill" })))), channels_data.selectedChannel && (h("form", { key: 'a864dce4a14e06c5e031e4ad49b7dab9e43a7a38', onSubmit: this.handleTestConnectionClicked.bind(this), class: "mt-3 connection-container" }, h("h3", { key: '7c6a0082b281bb6f2e6e6b780c198d29d65e3ce4', class: "text-left font-medium-2  py-0 my-0 connection-title py-1 mb-2" }, (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_ConnectionSettings), h("div", { key: 'f5852fe30a746c972b533301cd41056587ea089d', class: "ml-18" }, h("fieldset", { key: '3e5e12bc9b0956286cb69c73def6b85af1076950', class: "d-flex align-items-center my-1" }, h("label", { key: '6cf77094bab2ff371bfb0cf092ccd5720a2f2673', htmlFor: "hotel_id", class: "m-0 p-0 label-style" }, (_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_HotelID), h("div", { key: 'afb75d9d908e8599e4d20162afd1a3a25d9a7203', class: "flex-fill" }, h("input", { key: '3f6ff051e12edf3b98ad7db48a7d65591934366b', id: "hotel_id",
            // disabled={channels_data.isConnectedToChannel}
            class: `form-control  flex-fill bg-white ${this.buttonClicked && !((_g = channels_data.channel_settings) === null || _g === void 0 ? void 0 : _g.hotel_id) && 'border-danger'}`, value: (_h = channels_data.channel_settings) === null || _h === void 0 ? void 0 : _h.hotel_id, onInput: e => updateChannelSettings('hotel_id', e.target.value) }))), h("div", { key: '37b45ce9e121a2b2b40a14a7f3d11caa8e4c5369', class: "connection-status" }, h("div", { key: 'f3cb45360058ff34cf11b396dd2d9e93163b4538', class: "status-message" }, this.connection_status_message &&
            (this.status ? h("ir-icons", { name: "circle_check", style: { color: 'green' } }) : h("ir-icons", { name: "danger", style: { color: 'yellow' } })), h("span", { key: '6bedae011fa2ea625570670e183368aca14d97bd' }, this.connection_status_message)), h("button", { key: '947b7f7a40751c1c778bbe0c8a98d98a348a1945', class: "btn btn-outline-secondary btn-sm", type: "submit" }, (_j = locales.entries) === null || _j === void 0 ? void 0 : _j.Lcz_TestConnection)))))));
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
