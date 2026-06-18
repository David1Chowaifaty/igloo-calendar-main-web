import Token from "../../models/Token";
import { AuthService } from "../../services/authenticate.service";
import { RoomService } from "../../services/room.service";
import { SystemService } from "../../services/system.service";
import locales from "../../stores/locales.store";
import { CONSTANTS } from "../../utils/constants";
import { Fragment, h } from "@stencil/core";
import { z, ZodError } from "zod";
export class IrResetPassword {
    el;
    username;
    old_pwd;
    ticket;
    skip2Fa;
    language = 'en';
    confirmPassword;
    password;
    showValidator = false;
    autoValidate = false;
    error = {};
    submitted = false;
    isLoading = false;
    isFetching = false;
    closeSideBar;
    token = new Token();
    authService = new AuthService();
    systemService = new SystemService();
    roomService = new RoomService();
    initialized = false;
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
    ResetPasswordSchema = z.object({
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
        const insideSidebar = this.el.slot === 'sidebar-body';
        // if (!locales.entries && !insideSidebar) {
        //   return <ir-loading-screen></ir-loading-screen>;
        // }
        return (h("div", { key: '6ca873bd451c83ed7f2d7ff35c7b1f62476e9c89', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: '563dd7f3849c0cd440177c4c0b54a6c23c2cdb61' }, !insideSidebar && (h(Fragment, { key: 'd202b11dae08bcc9b01f26e2618c5c11478fe7aa' }, h("ir-interceptor", { key: '52dad914075585f5107bd45db41bf274a85be400', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: 'f258e5884dc9d803ecf85ed26163be44f53fb141' }))), h("form", { key: '9c846aea4cb7bc34b5e3485bf1271f8dcf7ba0c6', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '02ef2655ed5761dda94da0d2f13e537eacb0c296', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: 'c636c5cb28412c2cc0481980f2fa362ec070d087', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '6f6b14d3a8eb4aacf06a66b4e1e597dfcbbd49b8', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '0f734c93d234dcfa58b8e4fc5f791fe5d6a38374', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '132b28a22bbec0ee0e26f99e746b60838efa0c13', class: "text-center mb-2" }, h("h4", { key: 'b0f272ce42c94651b6c993ee680a8e7ddedeedee', class: "mb-1" }, locales?.entries?.Lcz_SetNewPassword), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '0f83c36097fdba5ac7962c4cfd707553ff133ad0' }, h("div", { key: 'd66c0af28f5a4985aaa79ccdfdbed1feacfdaf4f', class: 'mb-2 d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: 'b37bc773b9a78758a4795983865ddb1bc6b2eb9a', class: "m-0 p-0" }, h("div", { key: 'da4fb7c3f9ce51c88a9f33c568f5a71a225dbb67', class: 'position-relative' }, h("ir-validator", { key: '98f114461e0cd8f251f6ad303d35456997abce09', schema: this.ResetPasswordSchema.shape.password, value: this.password }, h("ir-input", { key: 'd1ef7e3cbc4a180808c33566858577a488109341', type: "password", passwordToggle: true, "onText-change": e => (this.password = e.detail), onInputFocus: () => (this.showValidator = true), placeholder: locales.entries?.Lcz_NewPassword, value: this.password }))), this.showValidator && h("ir-password-validator", { key: '74d929cdbe304d5daf636db15c5155b550a6f022', class: "mb-1", password: this.password })), h("div", { key: '3633a19f845bfa0d8384b4f66a0099566c55288e', class: 'position-relative' }, h("ir-validator", { key: 'efedb3bafbcaf0969300b4c7c4c368bd528c7228', schema: this.ResetPasswordSchema.shape.confirm_password, value: this.confirmPassword }, h("ir-input", { key: '81798599b3e42145a6e28493c11b7262032fe04b', type: "password", passwordToggle: true, "onText-change": e => (this.confirmPassword = e.detail), placeholder: locales.entries?.Lcz_ConfirmPassword, value: this.confirmPassword })))), !insideSidebar && (h("div", { key: '6bf3e69d1420cad282a67555cb2f5a2619c163b7', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-custom-button", { key: 'a3d645e8d003d9bf94f3c4b6c5d06ebb1217e687',
            // btn_styles={'flex-fill'}
            onClickHandler: () => window.history.back(), class: "flex-fill",
            // text={locales.entries?.Lcz_Cancel}
            size: "m", appearance: "filled", variant: "neutral" }, locales.entries?.Lcz_Cancel), h("ir-custom-button", { key: 'b38579832e1e95abbef6f0884426a61786834c86',
            // btn_styles={'flex-fill'}
            class: "flex-fill", loading: this.isLoading, type: "submit", size: "m", variant: "brand" }, locales.entries?.Lcz_ChangePassword)))))), insideSidebar && (h("div", { key: 'd1705fe1bf675e0555148699eb25e02235a92f7d', class: 'sheet-footer w-full' }, h("ir-custom-button", { key: '31ad7c3f48c3dc17da6324ae25d4c07daec8b917', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "m" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '62154c0a1721543879101c9743d42eddd7062ebf', variant: "brand", loading: this.isLoading, class: "flex-fill", type: "submit", size: "m" }, locales.entries.Lcz_ChangePassword)))))));
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
                "reflect": false,
                "attribute": "username"
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
                "reflect": false,
                "attribute": "old_pwd"
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
                "reflect": false,
                "attribute": "ticket"
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
                "reflect": false,
                "attribute": "skip-2-fa"
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
