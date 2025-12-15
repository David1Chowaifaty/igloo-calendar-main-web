import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { A as AuthService } from './authenticate.service.js';
import { R as RoomService } from './room.service.js';
import { S as SystemService, d as defineCustomElement$6 } from './ir-otp-modal2.js';
import { l as locales } from './locales.store.js';
import { C as CONSTANTS } from './constants.js';
import { z, Z as ZodError } from './index3.js';
import { d as defineCustomElement$c } from './ir-button2.js';
import { d as defineCustomElement$b } from './ir-icon2.js';
import { d as defineCustomElement$a } from './ir-icons2.js';
import { d as defineCustomElement$9 } from './ir-input-text2.js';
import { d as defineCustomElement$8 } from './ir-interceptor2.js';
import { d as defineCustomElement$7 } from './ir-otp2.js';
import { d as defineCustomElement$5 } from './ir-password-validator2.js';
import { d as defineCustomElement$4 } from './ir-spinner2.js';
import { d as defineCustomElement$3 } from './ir-title2.js';
import { d as defineCustomElement$2 } from './ir-toast2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irResetPasswordCss = ".base-host.sc-ir-reset-password{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.lock-icon.sc-ir-reset-password{align-self:center}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}";
const IrResetPasswordStyle0 = irResetPasswordCss;

const sheetCss = ".sc-ir-reset-password-h{height:100%}.sheet-container.sc-ir-reset-password{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-reset-password{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-reset-password{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-reset-password{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-reset-password{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-reset-password{flex-direction:row;align-items:center}}";
const IrResetPasswordStyle1 = sheetCss;

const IrResetPassword = /*@__PURE__*/ proxyCustomElement(class IrResetPassword extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
    }
    get el() { return this; }
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
        return (h("div", { key: '952dd96693319d19fb3f6c949d156d45469d8062', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: 'ace2762998b975c456f2f203a3067cfd6e60f675' }, !insideSidebar && (h(Fragment, { key: 'fe3a37d09e9d623255edb6d56db0477e03ab6308' }, h("ir-interceptor", { key: 'dbeecffa1d74aa180b447458056c3f254fd18863', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: 'd12f729a1c746a42d1ec5351556d768bf66116ea' }))), h("form", { key: 'd57a9475dccab45698a7bb1c685741efdefe82fb', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: 'f1bc16b1fa45aaacc86d5dad4bb74a50759b6f0b', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: '165891161af78c8618b5bbb738027dcdf1ca72b6', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: 'ef2f10f5bfe49f96b856d45490276ca914812d5e', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: 'dea9955e0569255876b8b427930a2a9077536ec0', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '91e1cb15cf30f6ec614ff89a8638130a4c5aff40', class: "text-center mb-2" }, h("h4", { key: 'd6ae8b0485fc031836a3c11b0b2b7180fab4e160', class: "mb-1" }, locales?.entries?.Lcz_SetNewPassword), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '540ee0498771b0ee668930a8a72b4c527f186c68' }, h("div", { key: '3d3d3ec1e2e7164ae43ca44cdec55086e89f9342', class: 'mb-2' }, h("div", { key: '9512efcf2a41464a9e1e6c0faf3f4c7d06a36c13', class: "m-0 p-0" }, h("div", { key: 'eb90a01c133b7616901d3e6b8dac6d2b4872a805', class: 'position-relative' }, h("ir-input-text", { key: '9cccdb0e71c51dbdb08483d80079cf3583543df3', error: this.error?.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: locales.entries?.Lcz_NewPassword, onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { key: '4cae9de70568986e523757eff5d6dea2f2bf1fd0', class: "mb-1", password: this.password })), h("div", { key: '70aad06da1fdcb7107fcb5e9f00c8212fbd88aac', class: 'position-relative' }, h("ir-input-text", { key: '2dbc51ea46c8aca6d9188099ee000db88f8a9de3', error: this.error?.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: locales.entries?.Lcz_ConfirmPassword, type: 'password' }))), !insideSidebar && (h("div", { key: 'ce7f96ad1eb18a2e021fb655cb18677f8cbe5476', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-button", { key: 'f792ab7626fe9d1163cd91f2b1a83c9eedccf6bf', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: locales.entries?.Lcz_Cancel, size: "md", btn_color: "secondary" }), h("ir-button", { key: 'e46ae7dc15a9c8374ccdcad588f5d303afc48fd0', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: locales.entries?.Lcz_ChangePassword, size: "md" })))))), insideSidebar && (h("div", { key: 'd1e605bfd4acdb59a6ffaaa860b2ae6fbe132f17', class: 'sheet-footer w-full' }, h("ir-button", { key: '1b132eb3d92cd55f81b184c00676dc9bb9fb707a', text: locales.entries.Lcz_Cancel, onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), h("ir-button", { key: 'ca2a59aba14e0637af948e60ca9fccdac4c7ec86', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_ChangePassword, size: "md" })))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
    static get style() { return IrResetPasswordStyle0 + IrResetPasswordStyle1; }
}, [2, "ir-reset-password", {
        "username": [1],
        "old_pwd": [1],
        "ticket": [1],
        "skip2Fa": [4, "skip-2-fa"],
        "language": [1],
        "confirmPassword": [32],
        "password": [32],
        "showValidator": [32],
        "autoValidate": [32],
        "error": [32],
        "submitted": [32],
        "isLoading": [32],
        "isFetching": [32]
    }, [[16, "otpFinished", "handleOtpFinished"]], {
        "ticket": ["handleTicketChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-reset-password", "ir-button", "ir-icon", "ir-icons", "ir-input-text", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-password-validator", "ir-spinner", "ir-title", "ir-toast", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrResetPassword);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "requirement-check":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrResetPassword as I, defineCustomElement as d };

//# sourceMappingURL=ir-reset-password2.js.map