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
            const toValidateUserInfo = Object.assign(Object.assign({}, this.userInfo), { password: this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password, type: Number(this.userInfo.type) });
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
        return (h("form", { key: 'c620569c8cfd2670d6ee0b6777c6adc967b03d88', class: "sheet-container", onSubmit: async (e) => {
                e.preventDefault();
                await this.createOrUpdateUser();
            } }, h("ir-title", { key: '398808c8261249fd2ac603607988b5da07b501dc', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? this.user.username : 'Create New User' }), h("section", { key: '85883041c2f59971bec1c3ca70387f46f34abdf1', class: "px-1 sheet-body" }, h("ir-input-text", { key: 'dc5939afdc81e04547ee5f12fd42190c3d7a91b6', testId: "email", zod: this.userSchema.pick({ email: true }), wrapKey: "email", autoValidate: this.autoValidate, error: (_a = this.errors) === null || _a === void 0 ? void 0 : _a.email, label: locales.entries.Lcz_Email, placeholder: "", onTextChange: e => this.updateUserField('email', e.detail), value: this.userInfo.email, onInputBlur: this.handleBlur.bind(this), maxLength: 40, errorMessage: this.emailErrorMessage }), h("ir-input-text", { key: '116e279a2074e7e63b83a7b88d5dcc39a7038477', testId: "mobile", disabled: this.disableFields, zod: this.userSchema.pick({ mobile: true }), wrapKey: "mobile", error: (_b = this.errors) === null || _b === void 0 ? void 0 : _b.mobile, asyncParse: true, autoValidate: this.user ? (((_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.mobile) !== this.user.mobile ? true : false) : this.autoValidate, label: "Mobile", mask: this.mobileMask, placeholder: '', value: this.userInfo.mobile, onTextChange: e => this.updateUserField('mobile', e.detail) }), (this.user && ((_e = (_d = this.user) === null || _d === void 0 ? void 0 : _d.type) === null || _e === void 0 ? void 0 : _e.toString()) === this.superAdminId) || this.isPropertyAdmin ? null : (h("div", { class: "mb-1" }, h("ir-select", { testId: "user_type", error: ((_f = this.errors) === null || _f === void 0 ? void 0 : _f.type) && !this.userInfo.type, disabled: this.disableFields, label: "Role", data: this.allowedUsersTypes.map(t => ({
                text: t.value,
                value: t.code,
            })), selectedValue: (_g = this.userInfo.type) === null || _g === void 0 ? void 0 : _g.toString(), onSelectChange: e => this.updateUserField('type', e.detail) }))), ((_j = (_h = this.user) === null || _h === void 0 ? void 0 : _h.type) === null || _j === void 0 ? void 0 : _j.toString()) !== '5' && (h("ir-input-text", { key: '7d65a4905d9d4046133dc0c39467ef2524a9f854', testId: "username", zod: this.userSchema.pick({ username: true }), wrapKey: "username", autoValidate: this.autoValidate, error: (_k = this.errors) === null || _k === void 0 ? void 0 : _k.username, label: "Username", disabled: this.disableFields, placeholder: "", onTextChange: e => this.updateUserField('username', e.detail), value: this.userInfo.username, onInputBlur: this.handleBlur.bind(this), maxLength: 40 })), !this.user ? (h(Fragment, null, h("ir-input-text", { testId: "password", autoValidate: this.user ? (!((_l = this.userInfo) === null || _l === void 0 ? void 0 : _l.password) ? false : true) : this.autoValidate, label: 'Password', value: this.userInfo.password, type: "password", maxLength: 16, zod: this.userSchema.pick({ password: true }), wrapKey: "password", error: (_m = this.errors) === null || _m === void 0 ? void 0 : _m.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { class: "mb-1", password: this.userInfo.password }))) : (this.haveAdminPrivileges &&
            this.user.type.toString() !== this.superAdminId &&
            (((_o = this.user) === null || _o === void 0 ? void 0 : _o.type.toString()) === '17' && ((_p = this.userTypeCode) === null || _p === void 0 ? void 0 : _p.toString()) === '17' ? null : (h("div", { class: "d-flex mt-2 align-items-center justify-content-between" }, h("h4", { class: "m-0 p-0 logins-history-title" }, "Password"), h("ir-button", { size: "sm", btn_styles: 'pr-0', onClickHandler: () => (this.isOpen = true), text: "Change password", btn_color: "link" }))))), ((_r = (_q = this.user) === null || _q === void 0 ? void 0 : _q.sign_ins) === null || _r === void 0 ? void 0 : _r.length) > 0 && (h("section", { key: '1353669a97b6a2793f79f1dd503d95693b7ef662', class: "logins-history-section mt-2" }, h("div", { key: '8cc203e8aa16d7a5b54bb2c12c28c9c348a139fd', class: "d-flex align-items-center logins-history-title-container justify-content-between" }, h("h4", { key: '1ddc1eeb74b6197c97108fb3d5a0a9dec9d6258b', class: "logins-history-title m-0 p-0" }, "Recent sign-ins"), this.user.sign_ins.length > 5 && (h("ir-button", { key: '29c2baf593269d66b52db66a975533ab77482273', btn_styles: 'pr-0', text: !this.showFullHistory ? 'View all' : 'View less', btn_color: "link", size: "sm", onClickHandler: () => (this.showFullHistory = !this.showFullHistory) }))), h("ul", { key: '0b24856303c0b402e7c3220f80bf46e1b5cc81c3', class: "logins-history-list" }, this.user.sign_ins.slice(0, this.showFullHistory ? this.user.sign_ins.length : 5).map((s, i) => {
            var _a, _b, _c;
            const ua = UAParser(s.user_agent);
            return (h("li", { class: "login-entry", key: s.date + '_' + i }, h("div", { class: "login-meta" }, h("p", { class: "login-datetime" }, moment(s.date, 'YYYY-MM-DD').format('DD-MMM-YYYY'), " ", _formatTime((_a = s.hour) === null || _a === void 0 ? void 0 : _a.toString(), (_b = s.minute) === null || _b === void 0 ? void 0 : _b.toString()), " |"), h("p", { class: "login-location" }, h("span", { class: "login-ip" }, "IP: ", s.ip), " \u00A0|\u00A0", h("span", { class: "login-country" }, "Location: ", s.country), " \u00A0|\u00A0", h("span", { class: "login-os" }, "OS: ", (_c = ua.os.name) !== null && _c !== void 0 ? _c : 'N/A', " ", ua.os.version)))));
        })))), h("ir-sidebar", { key: '119a64cda2f793163a7049933860a07525faf42d', open: this.isOpen, showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
            }, onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            } }, this.isOpen && (h("ir-reset-password", { key: '4834d821553d026222161293443198767c78a25d', ticket: this.token.getToken(), skip2Fa: true, username: this.user.username, onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, slot: "sidebar-body" })))), h("div", { key: '58239adc56aa9990c7d9269afd801992772d6c6a', class: "sheet-footer" }, h("ir-button", { key: '42305a6dd516525cb337bd8018ebd30f892b453e', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: 'b9071f106da1d65c2c50594ae73ec2081063223d', "data-testid": "save", isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_Save }))));
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
