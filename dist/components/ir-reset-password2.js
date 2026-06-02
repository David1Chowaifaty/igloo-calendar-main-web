import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { A as AuthService } from './authenticate.service.js';
import { R as RoomService } from './room.service.js';
import { S as SystemService, d as defineCustomElement$9 } from './ir-otp-modal2.js';
import { l as locales } from './locales.store.js';
import { C as CONSTANTS } from './constants.js';
import { z, Z as ZodError } from './index2.js';
import { d as defineCustomElement$g } from './ir-button2.js';
import { d as defineCustomElement$f } from './ir-custom-button2.js';
import { d as defineCustomElement$e } from './ir-icon2.js';
import { d as defineCustomElement$d } from './ir-icons2.js';
import { d as defineCustomElement$c } from './ir-input2.js';
import { d as defineCustomElement$b } from './ir-interceptor2.js';
import { d as defineCustomElement$a } from './ir-otp2.js';
import { d as defineCustomElement$8 } from './ir-password-validator2.js';
import { d as defineCustomElement$7 } from './ir-spinner2.js';
import { d as defineCustomElement$6 } from './ir-title2.js';
import { d as defineCustomElement$5 } from './ir-toast2.js';
import { d as defineCustomElement$4 } from './ir-toast-alert2.js';
import { d as defineCustomElement$3 } from './ir-toast-provider2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
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
        return (h("div", { key: 'd2ac5f670ae4483de6fb8856bfb391c07efddaac', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: '25c45278ceb0bd64bc11acdb5e3988a2595731d9' }, !insideSidebar && (h(Fragment, { key: '81080fb30aee31258f885c79c22d0182c1779135' }, h("ir-interceptor", { key: '8cc09df18906a74ef81f73a4f815cd5b5e8161bd', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: '12f555533e01448771783bb40ab081e110e1d88a' }))), h("form", { key: 'a6f6a1b8da8f5d1c2f6bde502efd3629cd68433e', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '3dd294d9165525310e6548ccd3be35a36520362b', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: '03fdc1f85ffbc6d291b531c46892044b6cfac0eb', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '1d61735d0ace0ea710af3b50c8b87bd614d1803d', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '0143d611e6e73289978efbcffb151631a5d54eb9', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '98b3edd0651817e678cb8a261db24f7d86b1b5db', class: "text-center mb-2" }, h("h4", { key: 'e718384c43f9edf034a58ccc9b7449da2f18e441', class: "mb-1" }, locales?.entries?.Lcz_SetNewPassword), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: 'fcb9338c8edba1ff150a77b415d3d635ace56010' }, h("div", { key: 'cc264b32b6dd19fc458d74b34f03844d965a6cd7', class: 'mb-2 d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: '2d8c463636147394dcbe0ba7d7b1e032eca85f08', class: "m-0 p-0" }, h("div", { key: 'e7791f53cf25ff1cca73da74d00fcb305028496c', class: 'position-relative' }, h("ir-validator", { key: '42a904dae4aac960ea5b94b66d2813ee1944df4b', schema: this.ResetPasswordSchema.shape.password, value: this.password }, h("ir-input", { key: '23e2d9b1c56f5b308711aa91ad06429bc77e1650', type: "password", passwordToggle: true, "onText-change": e => (this.password = e.detail), onInputFocus: () => (this.showValidator = true), placeholder: locales.entries?.Lcz_NewPassword, value: this.password }))), this.showValidator && h("ir-password-validator", { key: 'aa06a159f1f02a632ec35a52efa955b83df3fd35', class: "mb-1", password: this.password })), h("div", { key: '2c6e4d910e736b0a85040716740f56f357f3fec6', class: 'position-relative' }, h("ir-validator", { key: '58cb4e6fd9e116f79536a635e8b82b8d83f75de7', schema: this.ResetPasswordSchema.shape.confirm_password, value: this.confirmPassword }, h("ir-input", { key: '401774fc0d2d047e95dce8a14e5f727da6ecb481', type: "password", passwordToggle: true, "onText-change": e => (this.confirmPassword = e.detail), placeholder: locales.entries?.Lcz_ConfirmPassword, value: this.confirmPassword })))), !insideSidebar && (h("div", { key: 'a78fef4cedeb4041b62c494ae28b4d91efb8b97e', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-custom-button", { key: '734bdfa5a0ed3c8c663d9da3b9a489e0f5dcecb5',
            // btn_styles={'flex-fill'}
            onClickHandler: () => window.history.back(), class: "flex-fill",
            // text={locales.entries?.Lcz_Cancel}
            size: "medium", appearance: "filled", variant: "neutral" }, locales.entries?.Lcz_Cancel), h("ir-custom-button", { key: '9de53dcecec2179b013f180808e031c619a1ccd9',
            // btn_styles={'flex-fill'}
            class: "flex-fill", loading: this.isLoading, type: "submit", size: "medium", variant: "brand" }, locales.entries?.Lcz_ChangePassword)))))), insideSidebar && (h("div", { key: 'b78a7793af50f6778862dbcd676ff390386a2e71', class: 'sheet-footer w-full' }, h("ir-custom-button", { key: '9f6fe78ade85a362c4664b664e5eb7929beb1ba1', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "medium" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: '46a466935861995e42412e8b88cd020b6c58f268', variant: "brand", loading: this.isLoading, class: "flex-fill", type: "submit", size: "medium" }, locales.entries.Lcz_ChangePassword)))))));
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
    const components = ["ir-reset-password", "ir-button", "ir-custom-button", "ir-icon", "ir-icons", "ir-input", "ir-interceptor", "ir-otp", "ir-otp-modal", "ir-password-validator", "ir-spinner", "ir-title", "ir-toast", "ir-toast-alert", "ir-toast-provider", "ir-validator", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-reset-password":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrResetPassword);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$g();
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$f();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$e();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$d();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$c();
            }
            break;
        case "ir-interceptor":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-otp":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-otp-modal":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-toast":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-toast-alert":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-toast-provider":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-validator":
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