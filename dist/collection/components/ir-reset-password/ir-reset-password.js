import Token from "../../models/Token";
import { AuthService } from "../../services/authenticate.service";
import { RoomService } from "../../services/room.service";
import { SystemService } from "../../services/system.service";
import locales from "../../stores/locales.store";
import { CONSTANTS } from "../../utils/constants";
import { Fragment, h } from "@stencil/core";
import { z, ZodError } from "zod";
export class IrResetPassword {
    constructor() {
        this.language = 'en';
        this.showValidator = false;
        this.autoValidate = false;
        this.error = {};
        this.submitted = false;
        this.isLoading = false;
        this.isFetching = false;
        this.token = new Token();
        this.authService = new AuthService();
        this.systemService = new SystemService();
        this.roomService = new RoomService();
        this.initialized = false;
        this.ResetPasswordSchema = z.object({
            password: z.string().regex(CONSTANTS.PASSWORD),
            confirm_password: z
                .string()
                .nullable()
                .refine(password => {
                if (!CONSTANTS.PASSWORD.test(password)) {
                    return false;
                }
                return password === this.password;
            }, { message: 'Password must be at least 8 characters long.' }),
        });
    }
    componentWillLoad() {
        if (this.ticket) {
            this.token.setToken(this.ticket);
        }
    }
    componentDidLoad() {
        this.init();
    }
    handleTicketChange(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.token.setToken(this.ticket);
            this.init();
        }
    }
    async init() {
        if (!this.ticket || this.initialized) {
            return;
        }
        const [localized_words] = await Promise.all([
            this.roomService.fetchLanguage(this.language, ['_USER_MGT']),
            this.systemService.checkOTPNecessity({
                METHOD_NAME: 'Change_User_Pwd',
            }),
        ]);
        locales.entries = localized_words.entries;
        locales.direction = localized_words.direction;
        this.initialized = false;
    }
    async handleChangePassword(e) {
        e.preventDefault();
        try {
            this.error = {};
            this.isLoading = true;
            this.autoValidate = true;
            this.ResetPasswordSchema.parse({
                password: this.password,
                confirm_password: this.confirmPassword,
            });
            await this.authService.changeUserPwd({
                username: this.username,
                new_pwd: this.password,
                old_pwd: this.old_pwd,
            });
            if (!this.skip2Fa) {
                // this.submitted = true;
                window.history.back();
            }
            if (this.el.slot === 'sidebar-body') {
                this.closeSideBar.emit();
            }
        }
        catch (error) {
            if (error instanceof ZodError) {
                let validationErrors = {};
                error.issues.map(issue => {
                    const path = issue.path[0];
                    console.log(path, issue);
                    if (path === 'password') {
                        this.showValidator = true;
                    }
                    validationErrors[path] = true;
                });
                this.error = validationErrors;
            }
        }
        finally {
            this.isLoading = false;
        }
    }
    handleOtpFinished(e) {
        if (e.detail.type === 'success') {
            return;
        }
        if (this.el.slot !== 'sidebar-body') {
            window.history.back();
        }
        else {
            this.closeSideBar.emit();
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        const insideSidebar = this.el.slot === 'sidebar-body';
        // if (!locales.entries && !insideSidebar) {
        //   return <ir-loading-screen></ir-loading-screen>;
        // }
        return (h("div", { key: 'ed45946ea39584ae48db8385342da9823ebe6b63', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: 'ec6d9cd0bd72f0b41b9487afd8c84bb41dd03196' }, !insideSidebar && (h(Fragment, { key: 'c545a822d0715eecbbceacc5051a8dad11bc8038' }, h("ir-interceptor", { key: '00dd08dbfd1998ac3ff29a830f526664e5352b84', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: 'b14e441a860b2cfb65598323da5d005a865c642e' }))), h("form", { key: '946fc80595c3030266cae90034028e5cc47a0438', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '2eced84eedb3c578fedb152542ec798150574f94', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: '419dc5afd93c9093b3848a2f1f165ab817eaadc2', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: 'fc378df0c62484ed6cd0ac5e7eb4a662da1336b0', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: 'f2936ee4d9f6610e8b10c310dca491bfb8cecd15', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: 'b25403d1a276099fcb64c28d1ccfd4f4d2ff6ae1', class: "text-center mb-2" }, h("h4", { key: '78543b5c5e2affddbb537428e2575a534e099a3e', class: "mb-1" }, (_a = locales === null || locales === void 0 ? void 0 : locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_SetNewPassword), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '1bbb9fe03d95fff1b3dd51874e3a974abd160635' }, h("div", { key: 'dfb720698efa049c6fcffaade7500b855c729bc3', class: 'mb-2' }, h("div", { key: '3c8ce86f1053bee17a7dac9b35b97bac058cc3de', class: "m-0 p-0" }, h("div", { key: 'e75c9bc22be7708f97e3859effe3858dd004663f', class: 'position-relative' }, h("ir-input-text", { key: '59031f81a7bfd65fe94a58388a180603b7d9ff37', error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: (_c = locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_NewPassword, onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { key: '3f925d830bb60642b92e7176764212feb74b5b86', class: "mb-1", password: this.password })), h("div", { key: '2cbead75eb2e0608e83e89ccb5410e8050c9596b', class: 'position-relative' }, h("ir-input-text", { key: '6144ea108b5a516bf94562601215c8f93b1ac3b1', error: (_d = this.error) === null || _d === void 0 ? void 0 : _d.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: (_e = locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_ConfirmPassword, type: 'password' }))), !insideSidebar && (h("div", { key: '6956dc8d3bf5f6da8050398d658155d8402c30a0', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-button", { key: '88562c3bc25546017886e374b5e98c860355046b', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: (_f = locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_Cancel, size: "md", btn_color: "secondary" }), h("ir-button", { key: '094e4a5fec2f852ad16394b922c875dd054e8f40', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: (_g = locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_ChangePassword, size: "md" })))))), insideSidebar && (h("div", { key: 'a70a02713e25994c7f17e54170d77701909ee2ff', class: 'sheet-footer w-full' }, h("ir-button", { key: '7d0efec0e10954294563daa8f401d8d94fdef9aa', text: locales.entries.Lcz_Cancel, onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), h("ir-button", { key: '230e31a7cfac73397444354a46531f7fe7749439', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_ChangePassword, size: "md" })))))));
    }
    static get is() { return "ir-reset-password"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-reset-password.css", "../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-reset-password.css", "../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
            "username": {
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
                "attribute": "username",
                "reflect": false
            },
            "old_pwd": {
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
                "attribute": "old_pwd",
                "reflect": false
            },
            "ticket": {
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
                "attribute": "ticket",
                "reflect": false
            },
            "skip2Fa": {
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
                "attribute": "skip-2-fa",
                "reflect": false
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
            }
        };
    }
    static get states() {
        return {
            "confirmPassword": {},
            "password": {},
            "showValidator": {},
            "autoValidate": {},
            "error": {},
            "submitted": {},
            "isLoading": {},
            "isFetching": {}
        };
    }
    static get events() {
        return [{
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
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "otpFinished",
                "method": "handleOtpFinished",
                "target": "body",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-reset-password.js.map
