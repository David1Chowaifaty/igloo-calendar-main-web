import { HouseKeepingService } from "../../../services/housekeeping.service";
import { UserService } from "../../../services/user.service";
import calendar_data from "../../../stores/calendar-data";
import { getDefaultProperties } from "../../../stores/housekeeping.store";
import locales from "../../../stores/locales.store";
import { CONSTANTS } from "../../../utils/constants";
import { h } from "@stencil/core";
import { z, ZodError } from "zod";
export class IrHkUser {
    constructor() {
        this.user = null;
        this.isEdit = false;
        this.isLoading = false;
        this.autoValidate = false;
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
        this.showPasswordValidation = false;
        this.housekeepingService = new HouseKeepingService();
        this.default_properties = {
            token: '',
            language: '',
        };
        this.housekeeperSchema = z.object({
            name: z.string().min(2),
            mobile: z.string().min(1).max(14),
            password: z
                .string()
                .nullable()
                // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
                .refine(password => {
                var _a;
                if (this.user && !((_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.password)) {
                    return true;
                }
                return CONSTANTS.PASSWORD.test(password);
            }, { message: 'Password must be at least 8 characters long.' }),
            username: z
                .string()
                .min(3)
                .refine(async (name) => {
                if (this.user && this.user.username === name) {
                    return true;
                }
                if (name.length >= 3) {
                    return !(await new UserService().checkUserExistence({ UserName: name }));
                }
                return true;
            }, { message: 'Username already exists.' }),
        });
    }
    async componentWillLoad() {
        const { token, language, property_id } = getDefaultProperties();
        this.default_properties = { token, language };
        if (!this.user) {
            this.userInfo['property_id'] = property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.autoValidate = true;
            this.userInfo = Object.assign(Object.assign({}, this.user), { password: '' });
        }
    }
    updateUserField(key, value) {
        this.userInfo = Object.assign(Object.assign({}, this.userInfo), { [key]: value });
    }
    async addUser() {
        try {
            this.isLoading = true;
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            const toValidateUserInfo = Object.assign(Object.assign({}, this.userInfo), { password: this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password });
            console.log('toValidateUserInfo', toValidateUserInfo);
            await this.housekeeperSchema.parseAsync(toValidateUserInfo);
            if (this.errors) {
                this.errors = null;
            }
            await this.housekeepingService.editExposedHKM(toValidateUserInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            const e = {};
            if (error instanceof ZodError) {
                error.issues.map(err => {
                    e[err.path[0]] = true;
                });
                this.errors = e;
            }
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        return (h("div", { key: '3fdbfd3a7f8de1d8905773247b63e6be74c406a6', class: "sheet-container" }, h("ir-title", { key: 'b3f4ddc0dac996cc7a1cc9277b8a57db2d5558b5', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? locales.entries.Lcz_EditHousekeeperProfile : locales.entries.Lcz_CreateHousekeeperProfile }), h("section", { key: '4a0bcb96ed4f8fb708d52f13930a83828ed44142', class: "px-1 sheet-body" }, h("ir-input-text", { key: '2d4b127a61bb5ae0afa7e66a4cae4cd20bf93961', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: (_a = this.errors) === null || _a === void 0 ? void 0 : _a.name, label: locales.entries.Lcz_Name, placeholder: locales.entries.Lcz_Name, onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), h("ir-phone-input", { key: 'a948836c065e1072458907a7ee7b541e2a523741', testId: "phone", placeholder: locales.entries.Lcz_Mobile, error: ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.mobile) && !((_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.mobile), language: this.default_properties.language, token: this.default_properties.token, default_country: calendar_data.country.id, phone_prefix: (_d = this.user) === null || _d === void 0 ? void 0 : _d.phone_prefix, label: locales.entries.Lcz_Mobile, value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), h("div", { key: 'b109168ab333137ddff9a35ffadfac38559595be', class: "mb-1" }, h("ir-textarea", { key: 'c74d6f7a1528ebbc7e1512755932ebabab3c8b31', testId: "note", variant: "prepend", maxLength: 250, label: locales.entries.Lcz_Note, placeholder: locales.entries.Lcz_Note, value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), h("ir-input-text", { key: '3eb594e69808230026511215af4bfe45606a1fb3', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: (_e = this.errors) === null || _e === void 0 ? void 0 : _e.username, asyncParse: true, autoValidate: this.user ? (((_f = this.userInfo) === null || _f === void 0 ? void 0 : _f.username) !== this.user.username ? true : false) : this.autoValidate, errorMessage: ((_g = this.errors) === null || _g === void 0 ? void 0 : _g.username) && ((_j = (_h = this.userInfo) === null || _h === void 0 ? void 0 : _h.username) === null || _j === void 0 ? void 0 : _j.length) >= 3 ? locales.entries.Lcz_UsernameAlreadyExists : undefined, label: locales.entries.Lcz_Username, placeholder: locales.entries.Lcz_Username, value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), h("ir-input-text", { key: 'ee099c28fd3bdf6fe7cb355ae18c785650d29837', testId: "password", autoValidate: this.user ? (!((_k = this.userInfo) === null || _k === void 0 ? void 0 : _k.password) ? false : true) : this.autoValidate, label: locales.entries.Lcz_Password, value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: (_l = this.errors) === null || _l === void 0 ? void 0 : _l.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { key: '467321f734de37f211c116f4bed065743ccf227e', password: this.userInfo.password })), h("div", { key: 'de10f738087d4a39e8c1eb020ddf3c0fa865c9a9', class: "sheet-footer" }, h("ir-button", { key: '197ebbb143a917c554048cdbbb6186c8f0bb49d9', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: '98f9c21aba64bda5fef6ee0e0305a20f30eb1327', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_Save }))));
    }
    static get is() { return "ir-hk-user"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-user.css", "../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-user.css", "../../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
            "user": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "THKUser | null",
                    "resolved": "{ name: string; id: number; note: string; mobile: string; password: string; property_id: number; phone_prefix: string; username: string; }",
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
                "getter": false,
                "setter": false,
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
                "getter": false,
                "setter": false,
                "attribute": "is-edit",
                "reflect": false,
                "defaultValue": "false"
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "autoValidate": {},
            "userInfo": {},
            "errors": {},
            "showPasswordValidation": {},
            "isUsernameTaken": {}
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
