import { r as registerInstance, c as createEvent, h, F as Fragment, g as getElement } from './index-0a4a209a.js';
import { T as Token } from './Token-6c389e24.js';
import { A as AuthService } from './authenticate.service-b92cac55.js';
import { R as RoomService } from './room.service-7e6772a4.js';
import { S as SystemService } from './system.service-35fa8e7e.js';
import { l as locales } from './locales.store-53ec3957.js';
import { C as CONSTANTS } from './constants-1510e43f.js';
import { z, Z as ZodError } from './index-502f9842.js';
import './axios-aa1335b8.js';
import './calendar-data-20e9d53b.js';
import './index-c1c77241.js';

const irResetPasswordCss = ".base-host.sc-ir-reset-password{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.lock-icon.sc-ir-reset-password{align-self:center}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}";
const IrResetPasswordStyle0 = irResetPasswordCss;

const sheetCss = ".sc-ir-reset-password-h{height:100%}.sheet-container.sc-ir-reset-password{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-reset-password{height:-webkit-fill-available;height:100vh}@supports (height: 100svh){.sheet-container.sc-ir-reset-password{height:100svh}}.sheet-footer.sc-ir-reset-password{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-reset-password{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-reset-password{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-reset-password{flex-direction:row;align-items:center}}";
const IrResetPasswordStyle1 = sheetCss;

const IrResetPassword = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.language = 'en';
        this.showValidator = false;
        this.autoValidate = false;
        this.error = {};
        this.submitted = false;
        this.isLoading = false;
        this.token = new Token();
        this.authService = new AuthService();
        this.systemService = new SystemService();
        this.roomService = new RoomService();
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
        if (!this.ticket || this.initialized) {
            return;
        }
        await Promise.all([
            this.systemService.checkOTPNecessity({
                METHOD_NAME: 'Change_User_Pwd',
            }),
            this.roomService.fetchLanguage(this.language, ['_USER_MGT']),
        ]);
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
        var _a, _b;
        const insideSidebar = this.el.slot === 'sidebar-body';
        return (h("div", { key: 'e7d7ce81b042c3928d8da294ade509a94971a770', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, !insideSidebar && (h(Fragment, { key: '9330ea49f21ecc4169052117108a84bbb57e9792' }, h("ir-interceptor", { key: '7838ec98d94220c5bcbb354489362caf1121728c', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: 'dec570f26f87ebc42a20757c5ab01f49ab59a40b' }))), h("form", { key: '1845f80e033f9c62333104f813cddc8d8bd4793e', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: 'bb67fec8d4ca529d217f7e95470af0a7d60aef5a', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: '7004e23285daa9eaa18bc93855f629f0578d339b', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: 'fc0496c8dfa881541ce6f4c149a9565b78ba73bb', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '3dc876f5a7b9a3e95fdd52e9a4d3af01dd95821b', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: 'c366bea44a5389fee4f80ffad0047a99ce387c97', class: "text-center mb-2" }, h("h4", { key: 'b4b4f73bcab0af1fd617667be344352103e0cb79', class: "mb-1" }, locales.entries.Lcz_SetNewPassword), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '3724122ed9fd060a00cf6904a6925e5539f7a83f' }, h("div", { key: '9ea6fc957e447a5ba26a81a9502decccefedb142', class: 'mb-2' }, h("div", { key: 'ceb19d9af479402d6b9e6748195282ccda91b199', class: "m-0 p-0" }, h("div", { key: 'e152bca98bfa2f829b060a148afd4142f9091463', class: 'position-relative' }, h("ir-input-text", { key: '37ae68c26f4ace3ec0e3f72a45dedc3ebd8a23f2', error: (_a = this.error) === null || _a === void 0 ? void 0 : _a.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: locales.entries.Lcz_NewPassword, onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { key: 'e7b5c38ea433c185500d1c06ea8841bb35860498', class: "mb-1", password: this.password })), h("div", { key: '1b73cb62dfd7dc10b5d0619a2b19d8eeca8b6968', class: 'position-relative' }, h("ir-input-text", { key: '9cfb9ae65643d1f7ef28d61774549956b39de898', error: (_b = this.error) === null || _b === void 0 ? void 0 : _b.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: locales.entries.Lcz_ConfirmPassword, type: 'password' }))), !insideSidebar && (h("div", { key: '817db4b08b7fcaab7ad1b28f8ea98fadcbf9d67f', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-button", { key: 'd65010a57d93e00277e3d0f759c0ecf4a1df5e2f', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: locales.entries.Lcz_Cancel, size: "md", btn_color: "secondary" }), h("ir-button", { key: '4fa52acea8033b284a6f4256b9e7010ce172db88', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: locales.entries.Lcz_ChangePassword, size: "md" })))))), insideSidebar && (h("div", { key: 'b5c19ce4d51fd8efb86eeb87cce72cec7b5ad0e1', class: 'sheet-footer w-full' }, h("ir-button", { key: 'c4706b32fe6515af927c1789f51e2480f9c187c5', text: locales.entries.Lcz_Cancel, onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), h("ir-button", { key: '34b801faf6d83fdc49dcc70babf0ad385c247628', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_ChangePassword, size: "md" }))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrResetPassword.style = IrResetPasswordStyle0 + IrResetPasswordStyle1;

export { IrResetPassword as ir_reset_password };

//# sourceMappingURL=ir-reset-password.entry.js.map