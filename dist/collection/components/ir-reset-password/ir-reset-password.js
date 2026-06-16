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
        return (h("div", { key: '36c1797ba1c52b0c04cf186fe8bd2c79134b5c61', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: '409c525f4b15e266f3ec5f6a0e1030f7f0a19cc5' }, !insideSidebar && (h(Fragment, { key: '2e034157a7f05c6936e90897e3e23e26477f1313' }, h("ir-interceptor", { key: '0b7f2662c3461dc78266d2c25fa7d6302297d60c', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: '31fdca98266e6cc5fdaf2c5d5ddda39ebadddea2' }))), h("form", { key: '399023950be747abb7724d787c678a02a3df4d03', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '8359278842ce22f529a014f14757cc96d43ee07c', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: '21a0604d67b51e0785db10363a9b478afcfeac7f', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '18e41fd104132b276616ef43e93facd062d050e5', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: 'a9bdd41b849612cec4687d6bd24e03942dbe2cc2', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '82475d270c56a9ae7edbdb011260b7e55f50c2bc', class: "text-center mb-2" }, h("h4", { key: 'bd83086e7f32586c8e265c6fec7adc66872c2d61', class: "mb-1" }, locales?.entries?.Lcz_SetNewPassword), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '8bf370a270e6b00da08b4610a0bf6c039a548a58' }, h("div", { key: 'a2e1975920cafadbf192f18d83ccdbfcfcc58da4', class: 'mb-2 d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: 'f56a7a7babe9375a67479cf010f3062d0e7085e1', class: "m-0 p-0" }, h("div", { key: '4ac54f2f7408b76711a96341b303214924a6b64a', class: 'position-relative' }, h("ir-validator", { key: '9bbb2d36f4d40de2e789e7addbd9cf1150f2c27f', schema: this.ResetPasswordSchema.shape.password, value: this.password }, h("ir-input", { key: 'c895961b1dea3ecfc490375c8059d815f5c5b83c', type: "password", passwordToggle: true, "onText-change": e => (this.password = e.detail), onInputFocus: () => (this.showValidator = true), placeholder: locales.entries?.Lcz_NewPassword, value: this.password }))), this.showValidator && h("ir-password-validator", { key: '6878b818dc0ba4e61c8b3bd167a0ee955906498e', class: "mb-1", password: this.password })), h("div", { key: '8934374f50ccfda111d3b964880d65c9d91dd162', class: 'position-relative' }, h("ir-validator", { key: 'e9d30a23a9076bdc900c65529adc68f3d006968e', schema: this.ResetPasswordSchema.shape.confirm_password, value: this.confirmPassword }, h("ir-input", { key: 'fd26bc36420a8e4baf0df577191f9fd8e05bc8ae', type: "password", passwordToggle: true, "onText-change": e => (this.confirmPassword = e.detail), placeholder: locales.entries?.Lcz_ConfirmPassword, value: this.confirmPassword })))), !insideSidebar && (h("div", { key: '947c3ba2378991d5f11d3a5deab21292216e09f6', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-custom-button", { key: 'a5606ba44a3af62083778a711ceabfb006b6912b',
            // btn_styles={'flex-fill'}
            onClickHandler: () => window.history.back(), class: "flex-fill",
            // text={locales.entries?.Lcz_Cancel}
            size: "medium", appearance: "filled", variant: "neutral" }, locales.entries?.Lcz_Cancel), h("ir-custom-button", { key: '3d178930f3825f77b8ec17cdb6cb3fc71c1ec5fe',
            // btn_styles={'flex-fill'}
            class: "flex-fill", loading: this.isLoading, type: "submit", size: "medium", variant: "brand" }, locales.entries?.Lcz_ChangePassword)))))), insideSidebar && (h("div", { key: '6857cda74dce52da89cc5be964d95226187a75ab', class: 'sheet-footer w-full' }, h("ir-custom-button", { key: '02aeb1d7437020c73de821b675889a7a8e1ee4db', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "medium" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '50579660306d7e6ef77f8b028382db27f4474e45', variant: "brand", loading: this.isLoading, class: "flex-fill", type: "submit", size: "medium" }, locales.entries.Lcz_ChangePassword)))))));
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
