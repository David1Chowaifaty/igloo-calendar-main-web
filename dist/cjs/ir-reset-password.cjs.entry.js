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
        return (index.h("div", { key: '077c98422b37a32e33ddf711145b0fcaf7c93808', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, index.h(index.Fragment, { key: 'da7fa14561d4fc9c890f00c78d801d4c021c2b9b' }, !insideSidebar && (index.h(index.Fragment, { key: 'cecab74d2b750d0dd575ccfd1548fb44c99a1281' }, index.h("ir-interceptor", { key: '499e48058f4b92f6a990d4c7fb7c10abe32a0266', suppressToastEndpoints: ['/Change_User_Pwd'] }), index.h("ir-toast", { key: 'c9dfeebc174acc234651ea1f721393be4a0d001b' }))), index.h("form", { key: '9ec427664bdf4e209101b64cc8d180114cdd2d02', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && index.h("ir-title", { key: 'a854c354993c6dfda1fa7fa3ba76439f4947c773', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), index.h("div", { key: '75c1193581242643a8704e63a729743164f0b5aa', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, index.h("svg", { key: '833f4c1a1513e8aac52287d479c6de2da36b1d86', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, index.h("path", { key: '69d5d4275307452baedda934d40c5f65c98ca816', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), index.h("div", { key: 'bd059dd3a0bd85bba008c27cfe160414027769b5', class: "text-center mb-2" }, index.h("h4", { key: 'c8cbc98403be1d00970ffb983292a9e983562521', class: "mb-1" }, locales_store.locales?.entries?.Lcz_SetNewPassword), this.submitted ? (index.h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (index.h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (index.h("section", { key: '3aed809cee372fbbd193bf372b81beb0ef7932af' }, index.h("div", { key: 'c2898489fbdee7a34094038983e4b8dca775fccd', class: 'mb-2' }, index.h("div", { key: 'd3e6708358b071726d259d126d00dac9cd83d7e7', class: "m-0 p-0" }, index.h("div", { key: '9a74f883c1cccd57f3f7e836fa6a13160e2cdfd2', class: 'position-relative' }, index.h("ir-input-text", { key: '564e234f0eebe232af6896f80343caa0c54bd622', error: this.error?.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: locales_store.locales.entries?.Lcz_NewPassword, onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && index.h("ir-password-validator", { key: '7fdc124625ac445a05f5c531680fb46a30d69671', class: "mb-1", password: this.password })), index.h("div", { key: '96a8c4861df588f9a079acb8eb3b11c4149cb961', class: 'position-relative' }, index.h("ir-input-text", { key: '7a96f039c6b5c2455e9c3693402d54cafa4a29f7', error: this.error?.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: locales_store.locales.entries?.Lcz_ConfirmPassword, type: 'password' }))), !insideSidebar && (index.h("div", { key: '01eccd0fd40cd8eea8fd2496444dc35a581b5eea', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, index.h("ir-button", { key: 'e49df402b0fc9ad6d38b08461c15825e74d6154b', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: locales_store.locales.entries?.Lcz_Cancel, size: "md", btn_color: "secondary" }), index.h("ir-button", { key: '314075a61cfba6b54de01dc65a6f662589dffab0', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: locales_store.locales.entries?.Lcz_ChangePassword, size: "md" })))))), insideSidebar && (index.h("div", { key: 'e853a5787c0c9e8e0b9a57a9019d3efc2294ae1a', class: 'sheet-footer w-full' }, index.h("ir-button", { key: '990ec084992d4a7e1b2da9b64f322429e5caa996', text: locales_store.locales.entries.Lcz_Cancel, onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), index.h("ir-button", { key: '96290cdade32dcbd633ac74465a6e2e52a659be5', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_ChangePassword, size: "md" })))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrResetPassword.style = IrResetPasswordStyle0 + IrResetPasswordStyle1;

exports.ir_reset_password = IrResetPassword;

//# sourceMappingURL=ir-reset-password.cjs.entry.js.map