import { HouseKeepingService } from "../../../services/housekeeping.service";
import calendar_data from "../../../stores/calendar-data";
import { getDefaultProperties } from "../../../stores/housekeeping.store";
import locales from "../../../stores/locales.store";
import { validateForm } from "../../../utils/validation";
import { Host, h } from "@stencil/core";
export class IrHkUser {
    constructor() {
        this.housekeepingService = new HouseKeepingService();
        this.default_properties = {
            token: '',
            language: '',
        };
        this.user = null;
        this.isEdit = false;
        this.isLoading = false;
        this.userInfo = {
            id: -1,
            mobile: '',
            name: '',
            note: '',
            password: '',
            property_id: null,
            username: null,
            phone_prefix: null,
        };
        this.errors = null;
    }
    async componentWillLoad() {
        const { token, language, property_id } = getDefaultProperties();
        this.default_properties = { token, language };
        if (!this.user) {
            this.userInfo['property_id'] = property_id;
        }
        if (this.user) {
            this.userInfo = Object.assign({}, this.user);
        }
        console.log(this.userInfo);
    }
    updateUserField(key, value) {
        this.userInfo = Object.assign(Object.assign({}, this.userInfo), { [key]: value });
    }
    async addUser() {
        try {
            this.isLoading = true;
            const validationRules = {
                name: { required: true },
                mobile: { required: true },
                password: { required: true, minLength: 5 },
            };
            const validationResult = validateForm(this.userInfo, validationRules);
            if (!validationResult.isValid) {
                this.errors = validationResult.errors;
                return;
            }
            if (this.errors) {
                this.errors = null;
            }
            await this.housekeepingService.editExposedHKM(this.userInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleBlur(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.user || !this.userInfo.name) {
            return;
        }
        const usermame = await this.housekeepingService.generateUserName(this.userInfo.name);
        this.updateUserField('username', usermame);
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h(Host, { key: '3689889b432200713a6c3f0244101fe76f0f4d32' }, h("ir-title", { key: '7bc6f3e6655d2b2e5ce4dff2bfb61eb05e8fb0b5', class: "px-1", displayContext: "sidebar", label: this.isEdit ? locales.entries.Lcz_EditHousekeeperProfile : locales.entries.Lcz_CreateHousekeeperProfile }), h("section", { key: 'e42b3d506fef868083f0f2378b9ca8861a82c328', class: "px-1" }, h("ir-input-text", { key: 'dfe829a249acb256ff0aa1c64677947a54111368', error: ((_b = (_a = this.errors) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) > 0, label: locales.entries.Lcz_Name, placeholder: locales.entries.Lcz_Name, onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this) }), h("ir-phone-input", { key: 'c31cc7cb8c0dec40dc3966afa57ebe2451938efe', placeholder: locales.entries.Lcz_Mobile, error: ((_d = (_c = this.errors) === null || _c === void 0 ? void 0 : _c.mobile) === null || _d === void 0 ? void 0 : _d.length) > 0, language: this.default_properties.language, token: this.default_properties.token, default_country: calendar_data.country.id, phone_prefix: (_e = this.user) === null || _e === void 0 ? void 0 : _e.phone_prefix, label: locales.entries.Lcz_Mobile, value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), h("ir-input-text", { key: '3738dfd7d5d9afc48cb7bad671781927640a8a6d', disabled: this.user !== null, label: locales.entries.Lcz_Username, placeholder: locales.entries.Lcz_Username, value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), h("ir-input-text", { key: 'b8087311f8718b513e74daa96d974b76cdba58d5', label: locales.entries.Lcz_Password, placeholder: locales.entries.Lcz_MinimumCharacter, value: this.userInfo.password, type: "password", error: ((_g = (_f = this.errors) === null || _f === void 0 ? void 0 : _f.password) === null || _g === void 0 ? void 0 : _g.length) > 0, onTextChange: e => this.updateUserField('password', e.detail) }), h("ir-input-text", { key: '051c98e3e4bd204b2ee0c970d5469bfac1e61354', label: locales.entries.Lcz_Note, placeholder: locales.entries.Lcz_Note, value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) }), h("div", { key: '6805525fe324629e4cb4aeffe687ae9ed2780c45', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, h("ir-button", { key: 'fb613ceccde8a55550b84239a57d9c1973b86a17', onClickHanlder: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: '89fbacfce787f41c6b606408a535816cea41ab27', isLoading: this.isLoading, onClickHanlder: this.addUser.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: locales.entries.Lcz_Save })))));
    }
    static get is() { return "ir-hk-user"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-user.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-user.css"]
        };
    }
    static get properties() {
        return {
            "user": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "THKUser | null",
                    "resolved": "{ name: string; id: number; mobile: string; note: string; password: string; property_id: number; phone_prefix: string; username: string; }",
                    "references": {
                        "THKUser": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::THKUser"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "defaultValue": "null"
            },
            "isEdit": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "attribute": "is-edit",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "userInfo": {},
            "errors": {}
        };
    }
    static get events() {
        return [{
                "method": "resetData",
                "name": "resetData",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "closeSideBar",
                "name": "closeSideBar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
//# sourceMappingURL=ir-hk-user.js.map
