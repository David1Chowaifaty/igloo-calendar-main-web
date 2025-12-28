'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const Token = require('./Token-8fd11984.js');
const authenticate_service = require('./authenticate.service-49259d0e.js');
const room_service = require('./room.service-edd3d27c.js');
const system_service = require('./system.service-bd8ed6a9.js');
const locales_store = require('./locales.store-4eb57996.js');
const constants = require('./constants-abd1d7db.js');
const index$1 = require('./index-8bb117a0.js');
require('./axios-6e678d52.js');
require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');

const irResetPasswordCss = ".base-host.sc-ir-reset-password{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.lock-icon.sc-ir-reset-password{align-self:center}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}";
const IrResetPasswordStyle0 = irResetPasswordCss;

const sheetCss = ".sc-ir-reset-password-h{height:100%}.sheet-container.sc-ir-reset-password{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-reset-password{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-reset-password{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-reset-password{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-reset-password{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-reset-password{flex-direction:row;align-items:center}}";
const IrResetPasswordStyle1 = sheetCss;

const IrResetPassword = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
    }
    get el() { return index.getElement(this); }
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
    token = new Token.Token();
    authService = new authenticate_service.AuthService();
    systemService = new system_service.SystemService();
    roomService = new room_service.RoomService();
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
        locales_store.locales.entries = localized_words.entries;
        locales_store.locales.direction = localized_words.direction;
        this.initialized = false;
    }
    ResetPasswordSchema = index$1.z.object({
        password: index$1.z.string().regex(constants.CONSTANTS.PASSWORD),
        confirm_password: index$1.z
            .string()
            .nullable()
            .refine(password => {
            if (!constants.CONSTANTS.PASSWORD.test(password)) {
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
            if (error instanceof index$1.ZodError) {
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
        return (index.h("div", { key: 'e702e9fc5d979ae3ebd3a635be35c2c3c18bc99d', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, index.h(index.Fragment, { key: '1df3688f618a6ed7fe58e562e08becb61f553a3d' }, !insideSidebar && (index.h(index.Fragment, { key: '3f2e08efbe4e3f2354a0e99eebca6ed84539d724' }, index.h("ir-interceptor", { key: 'fc92c4ec820370be0db1a3f5c7ab6a5538941e9c', suppressToastEndpoints: ['/Change_User_Pwd'] }), index.h("ir-toast", { key: 'ec8815e7e50335696e7caab50e81259a2b77e03e' }))), index.h("form", { key: '920e7df40269edcefa3b029b44e2b4190b963a9e', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && index.h("ir-title", { key: 'aed1cb9b809b0b5de1fcf5fd9b1c863a4cfe228d', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), index.h("div", { key: '170ca479d9955092652ffcc4a99cde6ea9f47c78', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, index.h("svg", { key: 'b1d6f5597b30a5f1fd106090d88184545f6af631', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, index.h("path", { key: '4cb53769e76f69dfed5fde933fa5aae56510b855', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), index.h("div", { key: '9157ae76b84a32bd2f4930b0f77c7d66b702eb47', class: "text-center mb-2" }, index.h("h4", { key: '4c495c2f48a240e97738fb5197decb105d877598', class: "mb-1" }, locales_store.locales?.entries?.Lcz_SetNewPassword), this.submitted ? (index.h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (index.h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (index.h("section", { key: 'e2fad14ed9b21caaa34d3d1754f6733ba07bf5ef' }, index.h("div", { key: '0531b3c776f1d5e69565e42ced962d0e85dd895b', class: 'mb-2' }, index.h("div", { key: 'f4b0252323a6f5c1c693007b067ff27d41e7d112', class: "m-0 p-0" }, index.h("div", { key: 'fbcf01146c88514a816e3a1d58c33db8bd87890a', class: 'position-relative' }, index.h("ir-input-text", { key: 'b15dabbadbf90c144ffb9aa93d7572d923af6c49', error: this.error?.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: locales_store.locales.entries?.Lcz_NewPassword, onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && index.h("ir-password-validator", { key: '4cba9be2a51ccd04db9c700bc56da1f3e5e7914f', class: "mb-1", password: this.password })), index.h("div", { key: '81b65f8dd110449e9be7ef1958f7189f36ee8e9c', class: 'position-relative' }, index.h("ir-input-text", { key: '1bebe74769c7b4ef85128aa9fde930da103b9be8', error: this.error?.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: locales_store.locales.entries?.Lcz_ConfirmPassword, type: 'password' }))), !insideSidebar && (index.h("div", { key: 'a99e061b8b3c1afdfefb6f3729aaf9aa5d055f47', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, index.h("ir-button", { key: 'bed11ffb614caed21822a41d320ab927a7e7c19e', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: locales_store.locales.entries?.Lcz_Cancel, size: "md", btn_color: "secondary" }), index.h("ir-button", { key: 'd1b748945c5cd9cdf62605e7b963ee6316b4a490', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: locales_store.locales.entries?.Lcz_ChangePassword, size: "md" })))))), insideSidebar && (index.h("div", { key: '9f72be1b1ec4d92b1bbd2929ac1d6f8ee1df377a', class: 'sheet-footer w-full' }, index.h("ir-button", { key: 'f20a6f53b1876a59ce9079a0080a06b2278cd282', text: locales_store.locales.entries.Lcz_Cancel, onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), index.h("ir-button", { key: '1c350900d4bc474c0bb76f506cf320327c7e4580', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_ChangePassword, size: "md" })))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrResetPassword.style = IrResetPasswordStyle0 + IrResetPasswordStyle1;

exports.ir_reset_password = IrResetPassword;

//# sourceMappingURL=ir-reset-password.cjs.entry.js.map