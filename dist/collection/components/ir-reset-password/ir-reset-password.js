import Token from "../../models/Token";
import { AuthService } from "../../services/authenticate.service";
import { SystemService } from "../../services/system.service";
import { CONSTANTS } from "../../utils/constants";
import { Fragment, h } from "@stencil/core";
import { z, ZodError } from "zod";
export class IrResetPassword {
    constructor() {
        this.showValidator = false;
        this.autoValidate = false;
        this.error = {};
        this.submitted = false;
        this.isLoading = false;
        this.token = new Token();
        this.authService = new AuthService();
        this.systemService = new SystemService();
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
        if (this.initialized) {
            return;
        }
        await this.systemService.checkOTPNecessity({
            METHOD_NAME: 'Change_User_Pwd',
        });
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
    render() {
        var _a, _b;
        const insideSidebar = this.el.slot === 'sidebar-body';
        return (h("div", { key: '1629878a6282f2e125809630999dce442573266a', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, !insideSidebar && (h(Fragment, { key: '4579535e412e3ff1dea13a0333bed42a4b3606b0' }, h("ir-interceptor", { key: '35d836093cd9820666b3eccba07cb442d06256f8', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: 'c3f2d90f20a9b51516ad312ee7a74209df7ae943' }))), h("form", { key: 'e4bbb4439abe93ed0fc7081b504f390839bb567a', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '8cc819e032438cfaf9154cb8aa7ab521f4994a6a', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: 'c1630c79446be4a22e2b2992677b4493e94c4285', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: 'e7d7fe0eec3549d31fba41a6306f14ede753a5dc', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '24d6ea3b480b6f21d877888b5c3b212723edae5b', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '64ffc8dcbd64f295ef6c1335049c265e23d8c105', class: "text-center mb-2" }, h("h4", { key: '1cad353285f06327afba6f9133b7e43fed896aac', class: "mb-1" }, "Set New Password"), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '437e8bd8510d38e8f7563e80a910425ec7729bb2' }, h("div", { key: 'd8b1cb2402ee59442a6c47249fa8d11affb1cd12', class: 'mb-2' }, h("div", { key: '0169ce10658139c5b3bd061bafc43d4b2ddf2e27', class: "m-0 p-0" }, h("div", { key: 'd9388804ab1e393557bfcea6eb403a6dc9720fc1', class: 'position-relative' }, h("ir-input-text", { key: '014c6517d2bdf35d0bd457c853806716474ef3a6', error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: "New password", onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { key: '6fdf3a83ce50610f2bbc7cd82d353c174e5ed2cd', class: "mb-1", password: this.password })), h("div", { key: '4d17fa12efcd5da855f6b2fe8c90f0a12b96dc60', class: 'position-relative' }, h("ir-input-text", { key: '03b7ce9a26c8cfc7cbebb1c15f478a620717135c', error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: "Confirm password", type: 'password' }))), !insideSidebar && (h("div", { key: '920cd9379139e66e07206868b82620d2d3a98b66', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-button", { key: '82ef779f94f5e572a6db963ff13d2e607306d6ce', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: 'Cancel', size: "md", btn_color: "secondary" }), h("ir-button", { key: 'cd75f9268dcbad3c852fa5520cc4f6e09cc19072', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: 'Change password', size: "md" })))))), insideSidebar && (h("div", { key: 'add389b6da2e61ce1decae95310a4837d8d3c333', class: 'sheet-footer w-full' }, h("ir-button", { key: 'd869b6595d4222ac867e6cb36d5edbcca3b6821e', text: 'Cancel', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), h("ir-button", { key: '47df3b2f62c49eb9703b0ddc84db880ec1e44d7a', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: 'Change password', size: "md" }))))));
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
            "isLoading": {}
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
}
//# sourceMappingURL=ir-reset-password.js.map
