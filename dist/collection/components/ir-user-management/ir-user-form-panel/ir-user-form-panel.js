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
    user;
    userTypes = (Map);
    isEdit = false;
    language = 'en';
    property_id;
    haveAdminPrivileges;
    superAdminId = '5';
    userTypeCode;
    allowedUsersTypes = [];
    baseUserTypeCode;
    isLoading = false;
    autoValidate = false;
    showFullHistory = false;
    userInfo = {
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
    errors = null;
    showPasswordValidation = false;
    isUsernameTaken;
    isOpen;
    emailErrorMessage;
    resetData;
    closeSideBar;
    housekeepingService = new HouseKeepingService();
    userService = new UserService();
    disableFields = false;
    isPropertyAdmin = false;
    token = new Token();
    mobileMask = {};
    userSchema = z.object({
        mobile: z.string().optional(),
        email: z.string().email(),
        password: z
            .string()
            .nullable()
            // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
            .refine(password => {
            if (this.user && !this.userInfo?.password) {
                return true;
            }
            return CONSTANTS.PASSWORD.test(password);
        }, { message: 'Password must be at least 8 characters long.' }),
        type: z.union([z.literal(1), z.literal(Number(this.superAdminId?.toString() ?? '5')), z.coerce.string().nonempty().min(2)]),
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
    //make user active by default
    async componentWillLoad() {
        if (!this.user) {
            this.userInfo['property_id'] = this.property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.autoValidate = true;
            this.userInfo = { ...this.user, password: '' };
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
        this.userInfo = { ...this.userInfo, [key]: value };
    }
    async createOrUpdateUser() {
        try {
            console.log('hello world');
            this.isLoading = true;
            this.emailErrorMessage = undefined;
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            const toValidateUserInfo = {
                ...this.userInfo,
                base_user_type_code: this.baseUserTypeCode,
                property_id: this.property_id,
                password: this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password,
                type: Number(this.userInfo.type),
            };
            console.log('toValidateUserInfo', { ...toValidateUserInfo, mobile: toValidateUserInfo.mobile?.split(' ')?.join('')?.replace(calendar_data.country.phone_prefix, '') ?? '' });
            await this.userSchema.parseAsync({ ...toValidateUserInfo, mobile: toValidateUserInfo.mobile?.split(' ')?.join('')?.replace(calendar_data.country.phone_prefix, '') ?? '' });
            if (this.errors) {
                this.errors = null;
            }
            await this.userService.handleExposedUser(toValidateUserInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            console.log(error);
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
        return (h("form", { key: '5d9df469e481141ce7de4735d17a14a3bf9e1563', class: "sheet-container", onSubmit: async (e) => {
                e.preventDefault();
                await this.createOrUpdateUser();
            } }, h("ir-title", { key: 'c1267cd9ebf153a331e5c83544d070716f19d874', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? this.user.username : 'Create New User' }), h("section", { key: '97c20ee756138f0fc9b5a82a3aa5e7e0a84dcc1d', class: "px-1 sheet-body" }, h("ir-input-text", { key: 'b6e36d30bcff1cf7735b272f648f39c1d5869ce1', testId: "email", zod: this.userSchema.pick({ email: true }), wrapKey: "email", autoValidate: this.autoValidate, error: this.errors?.email, label: locales.entries.Lcz_Email, placeholder: "", onTextChange: e => this.updateUserField('email', e.detail), value: this.userInfo.email, onInputBlur: this.handleBlur.bind(this), maxLength: 40, errorMessage: this.emailErrorMessage }), h("ir-input-text", { key: '89e2139f89b05475206db8fdcdc78215cd696045', testId: "mobile", disabled: this.disableFields, zod: this.userSchema.pick({ mobile: true }), wrapKey: "mobile", error: this.errors?.mobile, asyncParse: true, autoValidate: this.user ? (this.userInfo?.mobile !== this.user.mobile ? true : false) : this.autoValidate, label: locales.entries.Lcz_Mobile, mask: this.mobileMask, placeholder: '', value: this.userInfo.mobile, onTextChange: e => this.updateUserField('mobile', e.detail) }), (this.user && this.user?.type?.toString() === this.superAdminId) || this.isPropertyAdmin ? null : (h("div", { class: "mb-1" }, h("ir-select", { testId: "user_type", error: this.errors?.type && !this.userInfo.type, disabled: this.disableFields, label: "Role", data: this.allowedUsersTypes.map(t => ({
                text: t.value,
                value: t.code,
            })), firstOption: locales.entries.Lcz_Select, selectedValue: this.userInfo.type?.toString(), onSelectChange: e => this.updateUserField('type', e.detail) }))), this.user?.type?.toString() !== '5' && (h(Fragment, { key: '9f3ef9a7b34a4e66e9cc577d45ca85c20f0ab349' }, h("input", { key: '679855ac856529d440e0d9a76a1ccebf3be813ca', type: "text", name: "dummy", style: { display: 'none' } }), h("ir-input-text", { key: '69699a7135eb3f85100cf7fb71e8608635c7e75d', testId: "username", zod: this.userSchema.pick({ username: true }), wrapKey: "username", autoValidate: this.autoValidate, error: this.errors?.username, label: locales.entries.Lcz_Username, disabled: this.disableFields, placeholder: "", onTextChange: e => this.updateUserField('username', e.detail), value: this.userInfo.username,
            // onInputBlur={this.handleBlur.bind(this)}
            maxLength: 40, autoComplete: "off" }))), !this.user ? (h(Fragment, null, h("input", { type: "text", name: "dummy", style: { display: 'none' } }), h("ir-input-text", { testId: "password", autoValidate: this.user ? (!this.userInfo?.password ? false : true) : this.autoValidate, label: locales.entries.Lcz_Password, value: this.userInfo.password, autoComplete: "off", type: "password", maxLength: 16, zod: this.userSchema.pick({ password: true }), wrapKey: "password", error: this.errors?.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { class: "mb-1", password: this.userInfo.password }))) : (
        // this.haveAdminPrivileges &&
        // this.user.type.toString() !== this.superAdminId &&
        // (this.user?.type.toString() === '17' && this.userTypeCode?.toString() === '17' ? null : (
        h("div", { class: "d-flex mt-2 align-items-center justify-content-between" }, h("h4", { class: "m-0 p-0 logins-history-title" }, locales.entries.Lcz_Password), h("ir-button", { size: "sm", btn_styles: 'pr-0', onClickHandler: () => (this.isOpen = true), text: locales.entries.Lcz_ChangePassword, btn_color: "link" }))
        // ))
        ), this.user?.sign_ins?.length > 0 && (h("section", { key: 'd020ea460cd32ce7212de8a9ac80b0d495bb59e1', class: "logins-history-section mt-2" }, h("div", { key: 'fe2570db0d8bde7cb92f9abb74123731cedd912f', class: "d-flex align-items-center logins-history-title-container justify-content-between" }, h("h4", { key: 'b135d023b44533449632207f861bc14ccc3b6c57', class: "logins-history-title m-0 p-0" }, "Recent sign-ins"), this.user.sign_ins.length > 5 && (h("ir-button", { key: '8ec685e0d5c68385f7027ac3c4dcb3fc246f2bf2', btn_styles: 'pr-0', text: !this.showFullHistory ? locales.entries.Lcz_ViewAll : locales.entries.Lcz_ViewLess, btn_color: "link", size: "sm", onClickHandler: () => (this.showFullHistory = !this.showFullHistory) }))), h("ul", { key: 'ef8b47fbe371c16b40e72e18c767b0bf2ddeb563', class: "logins-history-list" }, this.user.sign_ins.slice(0, this.showFullHistory ? this.user.sign_ins.length : 5).map((s, i) => {
            const ua = UAParser(s.user_agent);
            return (h("li", { class: "login-entry", key: s.date + '_' + i }, h("div", { class: "login-meta" }, h("p", { class: "login-datetime" }, moment(s.date, 'YYYY-MM-DD').format('DD-MMM-YYYY'), " ", _formatTime(s.hour?.toString(), s.minute?.toString()), " |"), h("p", { class: "login-location" }, h("span", { class: "login-ip" }, locales.entries.Lcz_IP, ": ", s.ip), ' ', "\u00A0|\u00A0", h("span", { class: "login-country" }, locales.entries.Lcz_Location, ": ", s.country), ' ', "\u00A0|\u00A0", h("span", { class: "login-os" }, "OS: ", ua.os.name ?? 'N/A', " ", ua.os.version)))));
        })))), h("ir-sidebar", { key: '1ef7de055b966c6c85825da83946be09cbfa8731', open: this.isOpen, showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
            }, onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            } }, this.isOpen && (h("ir-reset-password", { key: 'bb5c86c04adb3f262e142c1922b7e4b368f292e1', ticket: this.token.getToken(), skip2Fa: true, username: this.user.username, onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, slot: "sidebar-body" })))), h("div", { key: '56bc0ba3fa8433cad62929d8c8fc380e89035489', class: "sheet-footer" }, h("ir-button", { key: 'b991c97c7e3ebf092ff6fc8fc52331bbbbaca3c3', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: '1090a34922dd3cde730459aa03cd0b251bb9fe3e', "data-testid": "save", isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_Save }))));
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
