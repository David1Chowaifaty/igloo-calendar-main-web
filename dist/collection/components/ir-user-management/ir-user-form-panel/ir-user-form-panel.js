import { Fragment, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
import { z, ZodError } from "zod";
import { HouseKeepingService } from "../../../services/housekeeping.service";
import { CONSTANTS } from "../../../utils/constants";
import { UserService } from "../../../services/user.service";
import calendar_data from "../../../stores/calendar-data";
import { _formatTime } from "../../ir-booking-details/functions";
import moment from "moment";
import { UAParser } from "ua-parser-js";
import { InterceptorError } from "../../ir-interceptor/InterceptorError";
import Token from "../../../models/Token";
export class IrUserFormPanel {
    constructor() {
        var _a, _b;
        this.userTypes = (Map);
        this.isEdit = false;
        this.language = 'en';
        this.superAdminId = '5';
        this.allowedUsersTypes = [];
        this.isLoading = false;
        this.autoValidate = false;
        this.showFullHistory = false;
        this.userInfo = {
            type: '',
            id: -1,
            is_active: true,
            sign_ins: null,
            created_on: null,
            mobile: '',
            name: '',
            note: '',
            password: '',
            email: '',
            property_id: null,
            username: null,
            phone_prefix: null,
        };
        this.errors = null;
        this.showPasswordValidation = false;
        this.housekeepingService = new HouseKeepingService();
        this.userService = new UserService();
        this.disableFields = false;
        this.isPropertyAdmin = false;
        this.token = new Token();
        this.mobileMask = {};
        this.userSchema = z.object({
            mobile: z.string().min(4).max(20),
            email: z.string().email(),
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
            type: z.union([z.literal(1), z.literal(Number((_b = (_a = this.superAdminId) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '5')), z.coerce.string().nonempty().min(2)]),
            username: z
                .string()
                .min(3)
                .refine(async (name) => {
                if (this.user && this.user.username) {
                    return true;
                }
                if (name.length >= 3) {
                    return !(await new UserService().checkUserExistence({ UserName: name }));
                }
                return true;
            }, { message: 'Username already exists.' }),
        });
    }
    //make user active by default
    async componentWillLoad() {
        if (!this.user) {
            this.userInfo['property_id'] = this.property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.autoValidate = true;
            this.userInfo = Object.assign(Object.assign({}, this.user), { password: '' });
            // this.disableFields = true;
        }
        this.isPropertyAdmin = this.userTypeCode.toString() === '17';
        if (this.isPropertyAdmin) {
            this.updateUserField('type', '17');
        }
        this.mobileMask = {
            mask: `{${calendar_data.country.phone_prefix}} 000000000000`,
            lazy: false,
            autofix: true,
            placeholderChar: '\u200B',
        };
    }
    updateUserField(key, value) {
        this.userInfo = Object.assign(Object.assign({}, this.userInfo), { [key]: value });
    }
    async createOrUpdateUser() {
        try {
            this.isLoading = true;
            this.emailErrorMessage = undefined;
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            const toValidateUserInfo = Object.assign(Object.assign({}, this.userInfo), { base_user_type_code: this.baseUserTypeCode, property_id: this.property_id, password: this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password, type: Number(this.userInfo.type) });
            console.log('toValidateUserInfo', Object.assign(Object.assign({}, toValidateUserInfo), { mobile: toValidateUserInfo.mobile.split(' ').join('').replace(calendar_data.country.phone_prefix, '') }));
            await this.userSchema.parseAsync(Object.assign(Object.assign({}, toValidateUserInfo), { mobile: toValidateUserInfo.mobile.split(' ').join('').replace(calendar_data.country.phone_prefix, '') }));
            if (this.errors) {
                this.errors = null;
            }
            await this.userService.handleExposedUser(toValidateUserInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            const e = {};
            if (error instanceof ZodError) {
                console.error(error);
                error.issues.map(err => {
                    e[err.path[0]] = true;
                });
            }
            else if (error instanceof InterceptorError && error.code === 'EMAIL_EXISTS') {
                e['email'] = true;
                this.emailErrorMessage = 'This email is already in use. Please create another one.';
            }
            this.errors = e;
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        return (h("form", { key: 'daf44cd22f5b9bb14953581b0cb32828f9bf7ee6', class: "sheet-container", onSubmit: async (e) => {
                e.preventDefault();
                await this.createOrUpdateUser();
            } }, h("ir-title", { key: '1976ee555e1ac2e4fa982eecbd98057ad0342e82', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? this.user.username : 'Create New User' }), h("section", { key: '858e821aac19b85c48950137848bb5f9543cdf3c', class: "px-1 sheet-body" }, h("ir-input-text", { key: '737d10c7ad571e6d92819431c8ae8246a5d68f50', testId: "email", zod: this.userSchema.pick({ email: true }), wrapKey: "email", autoValidate: this.autoValidate, error: (_a = this.errors) === null || _a === void 0 ? void 0 : _a.email, label: locales.entries.Lcz_Email, placeholder: "", onTextChange: e => this.updateUserField('email', e.detail), value: this.userInfo.email, onInputBlur: this.handleBlur.bind(this), maxLength: 40, errorMessage: this.emailErrorMessage }), h("ir-input-text", { key: 'f7d286fc567d99d17524f87618c26eaeeed91355', testId: "mobile", disabled: this.disableFields, zod: this.userSchema.pick({ mobile: true }), wrapKey: "mobile", error: (_b = this.errors) === null || _b === void 0 ? void 0 : _b.mobile, asyncParse: true, autoValidate: this.user ? (((_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.mobile) !== this.user.mobile ? true : false) : this.autoValidate, label: locales.entries.Lcz_Mobile, mask: this.mobileMask, placeholder: '', value: this.userInfo.mobile, onTextChange: e => this.updateUserField('mobile', e.detail) }), (this.user && ((_e = (_d = this.user) === null || _d === void 0 ? void 0 : _d.type) === null || _e === void 0 ? void 0 : _e.toString()) === this.superAdminId) || this.isPropertyAdmin ? null : (h("div", { class: "mb-1" }, h("ir-select", { testId: "user_type", error: ((_f = this.errors) === null || _f === void 0 ? void 0 : _f.type) && !this.userInfo.type, disabled: this.disableFields, label: "Role", data: this.allowedUsersTypes.map(t => ({
                text: t.value,
                value: t.code,
            })), firstOption: locales.entries.Lcz_Select, selectedValue: (_g = this.userInfo.type) === null || _g === void 0 ? void 0 : _g.toString(), onSelectChange: e => this.updateUserField('type', e.detail) }))), ((_j = (_h = this.user) === null || _h === void 0 ? void 0 : _h.type) === null || _j === void 0 ? void 0 : _j.toString()) !== '5' && (h(Fragment, { key: '21b697a1834f511f311aadb35a744837c8c8b015' }, h("input", { key: '54e09d3f8f69210195905addc5942ab0ded1ceee', type: "text", name: "dummy", style: { display: 'none' } }), h("ir-input-text", { key: '75b8b7a4a825ae02093eeffea1e002cb23d0b46a', testId: "username", zod: this.userSchema.pick({ username: true }), wrapKey: "username", autoValidate: this.autoValidate, error: (_k = this.errors) === null || _k === void 0 ? void 0 : _k.username, label: locales.entries.Lcz_Username, disabled: this.disableFields, placeholder: "", onTextChange: e => this.updateUserField('username', e.detail), value: this.userInfo.username,
            // onInputBlur={this.handleBlur.bind(this)}
            maxLength: 40, autoComplete: "off" }))), !this.user ? (h(Fragment, null, h("input", { type: "text", name: "dummy", style: { display: 'none' } }), h("ir-input-text", { testId: "password", autoValidate: this.user ? (!((_l = this.userInfo) === null || _l === void 0 ? void 0 : _l.password) ? false : true) : this.autoValidate, label: locales.entries.Lcz_Password, value: this.userInfo.password, autoComplete: "off", type: "password", maxLength: 16, zod: this.userSchema.pick({ password: true }), wrapKey: "password", error: (_m = this.errors) === null || _m === void 0 ? void 0 : _m.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { class: "mb-1", password: this.userInfo.password }))) : (this.haveAdminPrivileges &&
            this.user.type.toString() !== this.superAdminId &&
            (((_o = this.user) === null || _o === void 0 ? void 0 : _o.type.toString()) === '17' && ((_p = this.userTypeCode) === null || _p === void 0 ? void 0 : _p.toString()) === '17' ? null : (h("div", { class: "d-flex mt-2 align-items-center justify-content-between" }, h("h4", { class: "m-0 p-0 logins-history-title" }, locales.entries.Lcz_Password), h("ir-button", { size: "sm", btn_styles: 'pr-0', onClickHandler: () => (this.isOpen = true), text: locales.entries.Lcz_ChangePassword, btn_color: "link" }))))), ((_r = (_q = this.user) === null || _q === void 0 ? void 0 : _q.sign_ins) === null || _r === void 0 ? void 0 : _r.length) > 0 && (h("section", { key: 'f8300636e5d5c3732ac990adc9a5d62c2f228910', class: "logins-history-section mt-2" }, h("div", { key: '7655c0a402848c2a26ed4f2fc132ecf9ff356688', class: "d-flex align-items-center logins-history-title-container justify-content-between" }, h("h4", { key: 'd51ec46c74b2fbf4fc00f6fe54c6f954a333fa40', class: "logins-history-title m-0 p-0" }, "Recent sign-ins"), this.user.sign_ins.length > 5 && (h("ir-button", { key: 'c44cde4a74041c0df6e3570bc26c0884c2aefaeb', btn_styles: 'pr-0', text: !this.showFullHistory ? locales.entries.Lcz_ViewAll : locales.entries.Lcz_ViewLess, btn_color: "link", size: "sm", onClickHandler: () => (this.showFullHistory = !this.showFullHistory) }))), h("ul", { key: '583ae3bc7a719b893d3d648d61791cbadc9d58ef', class: "logins-history-list" }, this.user.sign_ins.slice(0, this.showFullHistory ? this.user.sign_ins.length : 5).map((s, i) => {
            var _a, _b, _c;
            const ua = UAParser(s.user_agent);
            return (h("li", { class: "login-entry", key: s.date + '_' + i }, h("div", { class: "login-meta" }, h("p", { class: "login-datetime" }, moment(s.date, 'YYYY-MM-DD').format('DD-MMM-YYYY'), " ", _formatTime((_a = s.hour) === null || _a === void 0 ? void 0 : _a.toString(), (_b = s.minute) === null || _b === void 0 ? void 0 : _b.toString()), " |"), h("p", { class: "login-location" }, h("span", { class: "login-ip" }, locales.entries.Lcz_IP, ": ", s.ip), ' ', "\u00A0|\u00A0", h("span", { class: "login-country" }, locales.entries.Lcz_Location, ": ", s.country), ' ', "\u00A0|\u00A0", h("span", { class: "login-os" }, "OS: ", (_c = ua.os.name) !== null && _c !== void 0 ? _c : 'N/A', " ", ua.os.version)))));
        })))), h("ir-sidebar", { key: 'dcec2e6635f4ec7c59a5fcf32e6e31d54d7a7982', open: this.isOpen, showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
            }, onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            } }, this.isOpen && (h("ir-reset-password", { key: 'f6c84f01101631691db5afb5e0cec1e3a9cd1a9b', ticket: this.token.getToken(), skip2Fa: true, username: this.user.username, onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, slot: "sidebar-body" })))), h("div", { key: '37b4ba4a232a2cda5c3c7ee95871cd5be48d86f3', class: "sheet-footer" }, h("ir-button", { key: 'b3881f93176d1c8c21dcc4581c1e2beb88c91a90', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: '2d50c2a0ac706eba7aeda929cee703b0a01a8010', "data-testid": "save", isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_Save }))));
    }
    static get is() { return "ir-user-form-panel"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-user-form-panel.css", "../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-user-form-panel.css", "../../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
            "user": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "User",
                    "resolved": "THKUser & { type: string; is_active: boolean; sign_ins: SignIn[]; is_email_verified?: boolean; created_on: string; password: string; email: string; role?: string; }",
                    "references": {
                        "User": {
                            "location": "import",
                            "path": "@/models/Users",
                            "id": "src/models/Users.ts::User"
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
                "setter": false
            },
            "userTypes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ new (entries?: readonly (readonly [string | number, string])[]): Map<string | number, string>; new (iterable?: Iterable<readonly [string | number, string]>): Map<string | number, string>; readonly prototype: Map<any, any>; readonly [Symbol.species]: MapConstructor; }",
                    "resolved": "{ new (entries?: readonly (readonly [string | number, string])[]): Map<string | number, string>; new (iterable?: Iterable<readonly [string | number, string]>): Map<string | number, string>; readonly prototype: Map<any, any>; readonly [Symbol.species]: MapConstructor; }",
                    "references": {
                        "Map": {
                            "location": "global",
                            "id": "global::Map"
                        },
                        "Iterable": {
                            "location": "global",
                            "id": "global::Iterable"
                        },
                        "...": {
                            "location": "global",
                            "id": "global::..."
                        },
                        "MapConstructor": {
                            "location": "global",
                            "id": "global::MapConstructor"
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
                "defaultValue": "Map<number | string, string>"
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
            },
            "language": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "language",
                "reflect": false,
                "defaultValue": "'en'"
            },
            "property_id": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
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
                "attribute": "property_id",
                "reflect": false
            },
            "haveAdminPrivileges": {
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
                "attribute": "have-admin-privileges",
                "reflect": false
            },
            "superAdminId": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
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
                "attribute": "super-admin-id",
                "reflect": false,
                "defaultValue": "'5'"
            },
            "userTypeCode": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
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
                "attribute": "user-type-code",
                "reflect": false
            },
            "allowedUsersTypes": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "AllowedUser[]",
                    "resolved": "AllowedUser[]",
                    "references": {
                        "AllowedUser": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-user-management/types.ts::AllowedUser"
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
                "defaultValue": "[]"
            },
            "baseUserTypeCode": {
                "type": "any",
                "mutable": false,
                "complexType": {
                    "original": "string | number",
                    "resolved": "number | string",
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
                "attribute": "base-user-type-code",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "isLoading": {},
            "autoValidate": {},
            "showFullHistory": {},
            "userInfo": {},
            "errors": {},
            "showPasswordValidation": {},
            "isUsernameTaken": {},
            "isOpen": {},
            "emailErrorMessage": {}
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
//# sourceMappingURL=ir-user-form-panel.js.map
