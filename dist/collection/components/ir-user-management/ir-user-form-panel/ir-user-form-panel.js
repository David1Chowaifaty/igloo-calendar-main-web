import { Fragment, h } from "@stencil/core";
import locales from "../../../stores/locales.store";
import { z } from "zod";
import { CONSTANTS } from "../../../utils/constants";
import { UserService } from "../../../services/user.service";
import calendar_data from "../../../stores/calendar-data";
import { _formatTime } from "../../ir-booking-details/functions";
import moment from "moment";
import { UAParser } from "ua-parser-js";
import Token from "../../../models/Token";
export class IrUserFormPanel {
    formId;
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
    showPasswordValidation = false;
    isUsernameTaken;
    isOpen;
    resetData;
    closeSideBar;
    userService = new UserService();
    disableFields = false;
    isPropertyAdmin = false;
    token = new Token();
    mobileMask = {};
    userSchema = z.object({
        mobile: z.string().optional(),
        email: z
            .string()
            .email()
            .refine(async (email) => {
            if (this.user && this.user.email === email) {
                return true; // unchanged email
            }
            const exists = await new UserService().checkUserExistence({
                Email: email,
                UserName: '',
            });
            return !exists;
        }, { message: 'Email already exists.' }),
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
                const exists = await new UserService().checkUserExistence({
                    UserName: name,
                });
                return !exists;
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
            const resolvedPassword = this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password;
            const normalizedMobile = this.userInfo.mobile?.split(' ')?.join('')?.replace(calendar_data.country.phone_prefix, '') ?? '';
            const userPayload = {
                ...this.userInfo,
                base_user_type_code: this.baseUserTypeCode,
                property_id: this.property_id,
                password: resolvedPassword,
                type: Number(this.userInfo.type),
                mobile: normalizedMobile,
            };
            console.log('toValidateUserInfo', userPayload);
            await this.userSchema.parseAsync(userPayload);
            await this.userService.handleExposedUser(userPayload);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (h("form", { key: '3d61dd1dc9e8ec476b04d583550338d77079ad59', id: this.formId,
            // class="sheet-container"
            onSubmit: async (e) => {
                e.preventDefault();
                await this.createOrUpdateUser();
            } }, h("div", { key: '5cd73edb50ef7664d4a43c0642d31cc035407baa', class: "d-flex flex-column", style: { gap: '1rem' } }, h("ir-validator", { key: 'fcbc61d60192e1a1909aec7d1ea81095d81020b2', asyncValidation: true, showErrorMessage: true, value: this.userInfo.email, schema: this.userSchema.shape.email }, h("ir-input", { key: 'ecb4a509cad4eb1cc459a3267380ad75d3e4ea8f', maxlength: 40, "onText-change": e => this.updateUserField('email', e.detail), value: this.userInfo.email, label: locales.entries.Lcz_Email, "data-testid": "email", id: "user-email" })), h("ir-validator", { key: '256a8d69b0d8689d9529fd93ed2f43968dd02415', showErrorMessage: true, value: this.userInfo.mobile, schema: this.userSchema.shape.mobile }, h("ir-input", { key: '2479a6a0c9a2678e9e7fd166b83ce57b2abc85c8', "onText-change": e => this.updateUserField('mobile', e.detail), value: this.userInfo.mobile, label: locales.entries.Lcz_Mobile, "data-testid": "mobile", mask: this.mobileMask })), (this.user && this.user?.type?.toString() === this.superAdminId) || this.isPropertyAdmin ? null : (h("ir-validator", { value: this.userInfo.type?.toString(), schema: this.userSchema.shape.type }, h("wa-select", { "data-testId": "user_type",
            // error={this.errors?.type && !this.userInfo.type}
            disabled: this.disableFields, label: "Role", value: this.userInfo.type?.toString(), size: "s", defaultValue: this.userInfo.type?.toString(), placeholder: locales.entries.Lcz_Select, onchange: e => this.updateUserField('type', e.target.value) }, this.allowedUsersTypes.map(t => (h("wa-option", { value: t.code }, t.value)))))), this.user?.type?.toString() !== '5' && (h(Fragment, { key: '7223ccbdbb08e65a4da12a842543db7ba2fa162b' }, h("input", { key: '8906543d1ff38e4d7f45be82834367d124def5d4', type: "text", name: "dummy", style: { display: 'none' } }), h("ir-validator", { key: '9877ed1ddfc85b91c99bb1d0ffbfd48fed1fdf62', asyncValidation: true, schema: this.userSchema.shape.username, value: this.userInfo.username }, h("ir-input", { key: '9d43df905fe65fe083204877fdfbda42a427b455', "onText-change": e => this.updateUserField('username', e.detail), autocomplete: "off", maxlength: 40, value: this.userInfo.username, disabled: this.disableFields, label: locales.entries.Lcz_Username })))), !this.user ? (h(Fragment, null, h("input", { type: "text", name: "dummy", style: { display: 'none' } }), h("ir-validator", { value: this.userInfo.password, schema: this.userSchema.shape.password }, h("ir-input", { "data-testId": "password", label: locales.entries.Lcz_Password, value: this.userInfo.password, autocomplete: "off", passwordToggle: true, type: "password", id: "password", maxlength: 16, onInputFocus: () => (this.showPasswordValidation = true), "onInput-blur": () => {
                // if (this.user) this.showPasswordValidation = false;
            }, "onText-change": e => this.updateUserField('password', e.detail) })), this.showPasswordValidation && h("ir-password-validator", { class: "mb-1", password: this.userInfo.password }))) : (
        // this.haveAdminPrivileges &&
        // this.user.type.toString() !== this.superAdminId &&
        // (this.user?.type.toString() === '17' && this.userTypeCode?.toString() === '17' ? null : (
        h("div", { class: "d-flex mt-2 align-items-center justify-content-between" }, h("h4", { class: "m-0 p-0 logins-history-title" }, locales.entries.Lcz_Password), h("ir-button", { size: "sm", btn_styles: 'pr-0', onClickHandler: () => (this.isOpen = true), text: locales.entries.Lcz_ChangePassword, btn_color: "link" }))
        // ))
        )), this.user?.sign_ins?.length > 0 && (h("section", { key: 'a63c48a28dc29e3c4ff082b965623e06f369e0a7', class: "logins-history-section mt-2" }, h("div", { key: 'ed85b9257d368f17ce291f56d4884a23a0cce81e', class: "d-flex align-items-center logins-history-title-container justify-content-between" }, h("h4", { key: '6cbf8c1eb3e33310076c5cc483e76f0d3407c091', class: "logins-history-title m-0 p-0" }, "Recent sign-ins"), this.user.sign_ins.length > 5 && (h("ir-button", { key: 'aa5182ec4dffb08c67d5347d0b1142db8dff388d', btn_styles: 'pr-0', text: !this.showFullHistory ? locales.entries.Lcz_ViewAll : locales.entries.Lcz_ViewLess, btn_color: "link", size: "sm", onClickHandler: () => (this.showFullHistory = !this.showFullHistory) }))), h("ul", { key: '72a6d3d645430c38c4726eb4c8cea37ff1cec464', class: "logins-history-list" }, this.user.sign_ins.slice(0, this.showFullHistory ? this.user.sign_ins.length : 5).map((s, i) => {
            const ua = UAParser(s.user_agent);
            return (h("li", { class: "login-entry", key: s.date + '_' + i }, h("div", { class: "login-meta" }, h("p", { class: "login-datetime" }, moment(s.date, 'YYYY-MM-DD').format('DD-MMM-YYYY'), " ", _formatTime(s.hour?.toString(), s.minute?.toString()), " |"), h("p", { class: "login-location" }, h("span", { class: "login-ip" }, locales.entries.Lcz_IP, ": ", s.ip), ' ', "\u00A0|\u00A0", h("span", { class: "login-country" }, locales.entries.Lcz_Location, ": ", s.country), ' ', "\u00A0|\u00A0", h("span", { class: "login-os" }, "OS: ", ua.os.name ?? 'N/A', " ", ua.os.version)))));
        })))), h("ir-sidebar", { key: 'a4bccdac91db4ce88d451997c87ad8c9072776f6', open: this.isOpen, showCloseButton: false, style: {
                '--sidebar-block-padding': '0',
            }, onIrSidebarToggle: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            } }, this.isOpen && (h("ir-reset-password", { key: 'a9ce650ad726ad1c90d29f1da20f1703154575a8', ticket: this.token.getToken(), skip2Fa: true, username: this.user.username, onCloseSideBar: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.isOpen = false;
            }, slot: "sidebar-body" })))));
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
            "formId": {
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
                "reflect": false,
                "attribute": "form-id"
            },
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
                            "id": "src/models/Users.ts::User",
                            "referenceLocation": "User"
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
                "reflect": false,
                "attribute": "is-edit",
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
                "reflect": false,
                "attribute": "language",
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
                "reflect": false,
                "attribute": "property_id"
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
                "reflect": false,
                "attribute": "have-admin-privileges"
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
                "reflect": false,
                "attribute": "super-admin-id",
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
                "reflect": false,
                "attribute": "user-type-code"
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
                            "id": "src/components/ir-user-management/types.ts::AllowedUser",
                            "referenceLocation": "AllowedUser"
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
                "reflect": false,
                "attribute": "base-user-type-code"
            }
        };
    }
    static get states() {
        return {
            "showFullHistory": {},
            "userInfo": {},
            "showPasswordValidation": {},
            "isUsernameTaken": {},
            "isOpen": {}
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
