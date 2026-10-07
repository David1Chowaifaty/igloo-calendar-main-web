import ApiClient from "../../models/ApiClient";
import { AuthService } from "../../services/authenticate.service";
import { SystemService } from "../../services/system.service";
import { CONSTANTS } from "../../utils/constants";
import { Fragment, h } from "@stencil/core";
import { z, ZodError } from "zod";
import { LocaleController } from "../../services/locale/locale.controller";
import { SCREEN_TABLES } from "../../services/locale/screen-tables";
import { t } from "../../services/locale/t";
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
    ApiClient = new ApiClient();
    authService = new AuthService();
    systemService = new SystemService();
    initialized = false;
    componentWillLoad() {
        if (this.ticket) {
            this.ApiClient.setApiClient(this.ticket);
        }
    }
    componentDidLoad() {
        this.init();
    }
    handleTicketChange(oldValue, newValue) {
        if (oldValue !== newValue) {
            this.ApiClient.setApiClient(this.ticket);
            this.init();
        }
    }
    async init() {
        if (!this.ticket || this.initialized) {
            return;
        }
        await Promise.all([
            LocaleController.load({ language: this.language, tables: SCREEN_TABLES.resetPassword }),
            this.systemService.checkOTPNecessity({
                METHOD_NAME: 'Change_User_Pwd',
            }),
        ]);
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
        }, { message: t('Lcz_PasswordMinLength', { fallback: 'Password must be at least 8 characters long.' }) }),
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
        return (h("div", { key: 'a0c0e64784dbde57f32a3c2d9d49306b0e4b9c12', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: 'fc22b61ca3ab3da422e107d8cb74446435952a5c' }, !insideSidebar && (h(Fragment, { key: '0c19007e531e4daef883ec1e30dda0dddbfb5ae3' }, h("ir-interceptor", { key: '73f5d218976a4370a10721a74d14e03324dc0b3c', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: '5588564455722e34f293dba03a1c25d1a9430b05' }))), h("form", { key: 'a4e4a3c6767c1cf169cdfac8708cc34ca84b2ff9', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '26fca8989fcdba76d29dfd3bc9b2838519a703df', class: "px-1 sheet-header", displayContext: "sidebar", label: t('Lcz_ChangePassword', { fallback: 'Change Password' }) }), h("div", { key: 'd66adf6a67a286cd3e1bd22189f81fedd7756e12', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '5dcdb850f964bf299e1f4363a489806e38082a9b', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '770ad0afbff8ef58ba8f95c1bd8731b99e4bc25e', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '6628d00768523aeb97593ae71c5e3a6de803ec6e', class: "text-center mb-2" }, h("h4", { key: '15506a5f79654ba2b02bd344b261b4bf01f8944e', class: "mb-1" }, t('Lcz_SetNewPassword')), this.submitted ? (h("p", null, t('Lcz_EmailSentConfirmPasswordChange', { fallback: 'An email has been sent to your address. Please check your inbox to confirm the password change.' }))) : (h("p", null, t('Lcz_NewPasswordMustBeDifferent', { fallback: 'Your new password must be different to previously used password' })))), !this.submitted && (h("section", { key: '551693df132f9012d3f573faabfce3b2dfc7ba24' }, h("div", { key: '24c32001a0671aa659a31cdf3bb8aaaefdc1686c', class: 'mb-2 d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: 'deaa9458a798f30d683e4a6fb8a954ddcc87d41b', class: "m-0 p-0" }, h("div", { key: 'c9238c26baabfecdc2d2205f0e64d1d6f42cbb96', class: 'position-relative' }, h("ir-validator", { key: 'd056333598e1c2351a2d82459e6a3659f8614ee2', schema: this.ResetPasswordSchema.shape.password, value: this.password }, h("ir-input", { key: '9edc232a3415064342c9acdb7e72f3796b5525d7', type: "password", passwordToggle: true, "onText-change": e => (this.password = e.detail), onInputFocus: () => (this.showValidator = true), placeholder: t('Lcz_NewPassword', { fallback: 'New password' }), value: this.password }))), this.showValidator && h("ir-password-validator", { key: '2204879840a92e52b2b07673a9330dba42c5f51d', class: "mb-1", password: this.password })), h("div", { key: '19de7ffe862dd3978b2b86f653ed29dbc85ec4ee', class: 'position-relative' }, h("ir-validator", { key: '2b5075d216cb71015d789a20ceb267e8c57eb408', schema: this.ResetPasswordSchema.shape.confirm_password, value: this.confirmPassword }, h("ir-input", { key: 'f044eb97128bd9a8b4f646a4e91d778737387942', type: "password", passwordToggle: true, "onText-change": e => (this.confirmPassword = e.detail), placeholder: t('Lcz_ConfirmPassword', { fallback: 'Confirm password' }), value: this.confirmPassword })))), !insideSidebar && (h("div", { key: 'a6de3e1f392e194aeb898c1316e6c5891bf1717c', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-custom-button", { key: 'c0273a72a9569b52149ee405453a4becdaa8e06d',
            // btn_styles={'flex-fill'}
            onClickHandler: () => window.history.back(), class: "flex-fill",
            // text={t('Lcz_Cancel', { fallback: 'Cancel' })}
            size: "m", appearance: "filled", variant: "neutral" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: 'ec1811f3c26cda19149d84fa2c1f3928a016c0bc',
            // btn_styles={'flex-fill'}
            class: "flex-fill", loading: this.isLoading, type: "submit", size: "m", variant: "brand" }, t('Lcz_ChangePassword', { fallback: 'Change Password' }))))))), insideSidebar && (h("div", { key: '088b6976ceed4709202c66f5635b3180a32834e4', class: 'sheet-footer w-full' }, h("ir-custom-button", { key: 'c29a270c42300e60e67eaf2f1d02bd30e182dc7a', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "m" }, t('Lcz_Cancel', { fallback: 'Cancel' })), h("ir-custom-button", { key: '2fb854cf71f0f0d1997fcf7fd3ee11eb2f352466', variant: "brand", loading: this.isLoading, class: "flex-fill", type: "submit", size: "m" }, t('Lcz_ChangePassword', { fallback: 'Change Password' }))))))));
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
