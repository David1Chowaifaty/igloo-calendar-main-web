import Token from "../../models/Token";
import { AuthService } from "../../services/authenticate.service";
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
    handleTicketChange(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.token.setToken(this.ticket);
        }
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
        return (h("div", { key: '354678d2c20ac44b57fa3ca80a1f44ea3ef7738a', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, !insideSidebar && (h(Fragment, { key: '5a99d58779dc7428230f8e4816d2765ecc3ba5d7' }, h("ir-interceptor", { key: '0137141a104b08c2e44e90381a3d05a9df2ad1da', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: 'fa6010539bcbad1001e6ff36dfae560b6af5b032' }))), h("form", { key: 'dcc20e2b1f393df1c04ece823123058b29ce926b', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '2f21ccec470fbfeb0c13d921e8cacfaf52f85d2c', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: '2eea7ca4b4aa01f118f1de619f4708fba99e9860', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '70979ec95ee63609931a4751a4f4f3f115effed6', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: 'bbbd3eca75aaef0958fca63d0f29788921f9d5f3', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: 'e5759f2577a8aa22203dec80e78d2516cec31525', class: "text-center mb-2" }, h("h4", { key: '9b380041fc95e582cef9a7caf92304a90096dc78', class: "mb-1" }, "Set New Password"), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: 'aac6b3deeacf39ed95c5843e65a51a4c4bf30029' }, h("div", { key: 'cce32f33d930961742ec812d87bfb5c87eb28779', class: 'mb-2' }, h("div", { key: 'e0b18b1688d71f5d3018b2d8f39f4cb6f154316a', class: "m-0 p-0" }, h("div", { key: '6646492e9f720d8c3ee61c924dad079db7e7e993', class: 'position-relative' }, h("ir-input-text", { key: 'b8758bd68b4ed9b9a7d586e059e8da353b664b66', error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: "New password", onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { key: '9ae56354025369f54596cc3ce5f8a3afb854beb4', class: "mb-1", password: this.password })), h("div", { key: 'dcf79f3178d3bf144103ef9c85fad4537b304ddb', class: 'position-relative' }, h("ir-input-text", { key: '5cb8534146e431ab69761c8384fb24cacf2d8610', error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: "Confirm password", type: 'password' }))), !insideSidebar && (h("div", { key: '9013d2d396c4932323d1ef9b21ad7e738c2ddd9f', class: "d-flex flex-column mt-1 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-button", { key: 'aa559ff1f12d85eddd7c47b25564e8b699b229a2', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: 'Cancel', size: "md", btn_color: "secondary" }), h("ir-button", { key: '32b0727b3524fa279e7e06631fe8e007136db04e', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: 'Change password', size: "md" })))))), insideSidebar && (h("div", { key: '994e276f5f53d764179014d4c5a1df7d9e31ac8f', class: 'sheet-footer w-full' }, h("ir-button", { key: 'c1f2e80930ed936d3be48e5f7c8d55c984e61268', text: 'Cancel', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), h("ir-button", { key: 'dec61561b37bfc39dea506f0100a5c8329feb7bf', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: 'Change password', size: "md" }))))));
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
