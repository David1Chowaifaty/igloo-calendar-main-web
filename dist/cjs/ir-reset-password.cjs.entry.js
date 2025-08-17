'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const Token = require('./Token-3d0cc874.js');
const authenticate_service = require('./authenticate.service-eff00d14.js');
const room_service = require('./room.service-e031b11c.js');
const system_service = require('./system.service-bd8ed6a9.js');
const locales_store = require('./locales.store-a1ac5174.js');
const constants = require('./constants-abd1d7db.js');
const index$1 = require('./index-63734c32.js');
require('./axios-6e678d52.js');
require('./calendar-data-960b69ba.js');
require('./index-7564ffa1.js');

const irResetPasswordCss = ".base-host.sc-ir-reset-password{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.lock-icon.sc-ir-reset-password{align-self:center}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}";
const IrResetPasswordStyle0 = irResetPasswordCss;

const sheetCss = ".sc-ir-reset-password-h{height:100%}.sheet-container.sc-ir-reset-password{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-reset-password{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-reset-password{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-reset-password{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-reset-password{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-reset-password{flex-direction:row;align-items:center}}";
const IrResetPasswordStyle1 = sheetCss;

const IrResetPassword = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.language = 'en';
        this.showValidator = false;
        this.autoValidate = false;
        this.error = {};
        this.submitted = false;
        this.isLoading = false;
        this.isFetching = false;
        this.token = new Token.Token();
        this.authService = new authenticate_service.AuthService();
        this.systemService = new system_service.SystemService();
        this.roomService = new room_service.RoomService();
        this.initialized = false;
        this.ResetPasswordSchema = index$1.z.object({
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
        locales_store.locales.entries = localized_words.entries;
        locales_store.locales.direction = localized_words.direction;
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
        var _a, _b, _c, _d, _e, _f, _g;
        const insideSidebar = this.el.slot === 'sidebar-body';
        // if (!locales.entries && !insideSidebar) {
        //   return <ir-loading-screen></ir-loading-screen>;
        // }
        return (index.h("div", { key: 'ba823e3f824a41f981c5f9af7729dc67679c8cd9', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, index.h(index.Fragment, { key: 'c5a5f6c50e1e62dc1146aee923f08979a02154d8' }, !insideSidebar && (index.h(index.Fragment, { key: 'fb8638bff07da71a887763889a21a86bfa6da611' }, index.h("ir-interceptor", { key: '8bbbe666426ae15b81e2a1a270f30fa8eb56e77a', suppressToastEndpoints: ['/Change_User_Pwd'] }), index.h("ir-toast", { key: '9352a2381a5212f2d14442b3a9bbd81212ca5064' }))), index.h("form", { key: '09eb9b493f48f6f792cb2c39cbfc59f9f592c1f4', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && index.h("ir-title", { key: 'fb68d8ff17f286733077d9d2e877099a11a7889a', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), index.h("div", { key: '6250c45680f2dfc930b90aa680c5419bcb8e955f', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, index.h("svg", { key: '10dccf113f74aa4c3f929204ce1580f496fd6000', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, index.h("path", { key: '17d9f22c8bb8187c4532bb8c577f52db4deac80d', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), index.h("div", { key: 'aaa58e86505fc739d34dd044cb8411193c17079c', class: "text-center mb-2" }, index.h("h4", { key: '9617ebf55a1152613185294e48f70c06d795ccb3', class: "mb-1" }, (_a = locales_store.locales === null || locales_store.locales === void 0 ? void 0 : locales_store.locales.entries) === null || _a === void 0 ? void 0 : _a.Lcz_SetNewPassword), this.submitted ? (index.h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (index.h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (index.h("section", { key: '0c70a2ae8d196c8de46e21fd3df8ad6dc6765614' }, index.h("div", { key: '5410ff7aedefd0c87a812d0354bbb555b3dfe884', class: 'mb-2' }, index.h("div", { key: '1d97b73a932115abb557486b8a175b586a8984e1', class: "m-0 p-0" }, index.h("div", { key: '33f94b96c14337c026e3c48283153802c1d4a39b', class: 'position-relative' }, index.h("ir-input-text", { key: 'c1e96d0b465f35b329b14529fb82b585dc7bd73b', error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: (_c = locales_store.locales.entries) === null || _c === void 0 ? void 0 : _c.Lcz_NewPassword, onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && index.h("ir-password-validator", { key: '6b6a471fafaccb5da97f550eb5e7faa24cd26428', class: "mb-1", password: this.password })), index.h("div", { key: 'aa9093c694bc0f940b0a541f3d2540eba6ac3fd9', class: 'position-relative' }, index.h("ir-input-text", { key: '2c40006390f6115c098be48807cc697b83794926', error: (_d = this.error) === null || _d === void 0 ? void 0 : _d.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: (_e = locales_store.locales.entries) === null || _e === void 0 ? void 0 : _e.Lcz_ConfirmPassword, type: 'password' }))), !insideSidebar && (index.h("div", { key: 'dbc28c8b3606b512594231a4ede818d77dc2d33c', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, index.h("ir-button", { key: 'dcd7f16b17440cc12ae8956ff880cd077184de86', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: (_f = locales_store.locales.entries) === null || _f === void 0 ? void 0 : _f.Lcz_Cancel, size: "md", btn_color: "secondary" }), index.h("ir-button", { key: '04f6d9ce95f92193f1dd4eb24ae824ef88c91e94', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: (_g = locales_store.locales.entries) === null || _g === void 0 ? void 0 : _g.Lcz_ChangePassword, size: "md" })))))), insideSidebar && (index.h("div", { key: '20cd8b23a8e2199776691e2219cd6707af15e24a', class: 'sheet-footer w-full' }, index.h("ir-button", { key: 'd21478ddc48ecf12f230b41c78347db88dfee548', text: locales_store.locales.entries.Lcz_Cancel, onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), index.h("ir-button", { key: '1240bcd80134796f204f5889aba75bc86a8e39ff', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_ChangePassword, size: "md" })))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrResetPassword.style = IrResetPasswordStyle0 + IrResetPasswordStyle1;

exports.ir_reset_password = IrResetPassword;

//# sourceMappingURL=ir-reset-password.cjs.entry.js.map