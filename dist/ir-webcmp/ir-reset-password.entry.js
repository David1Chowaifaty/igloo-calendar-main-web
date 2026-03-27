import { r as registerInstance, a as createEvent, i as getElement, h, F as Fragment } from './index-7b3961ed.js';
import { T as Token } from './Token-add81d36.js';
import { A as AuthService } from './authenticate.service-2b57afbe.js';
import { R as RoomService } from './room.service-1f08b13d.js';
import { S as SystemService } from './system.service-9e6096d6.js';
import { l as locales } from './locales.store-daef23cc.js';
import { C as CONSTANTS } from './constants-1510e43f.js';
import { z, g as ZodError } from './index-40c31d5b.js';
import './index-5ba472df.js';
import './calendar-data-cdc01d0d.js';
import './index-17663a35.js';

const irResetPasswordCss = ".base-host.sc-ir-reset-password{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.lock-icon.sc-ir-reset-password{align-self:center}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}";

const sheetCss = ".sc-ir-reset-password-h{height:100%}.sheet-container.sc-ir-reset-password{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-reset-password{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-reset-password{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-reset-password{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-reset-password{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-reset-password{flex-direction:row;align-items:center}}";

const IrResetPassword = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
    }
    get el() { return getElement(this); }
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
        return (h("div", { key: '26f0fc59d7ee18f4578bdf2d790dc0fc46a69e36', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: '4101962ac11fd56a889e1d9bce8e6448533c71a4' }, !insideSidebar && (h(Fragment, { key: 'bc54bfca62781bc3a5841a538e48dc62d91e603f' }, h("ir-interceptor", { key: '1622699caf366ecc2eda08570a397c3aa533abab', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: 'd52e366696a077c4d390f6e5d2ecd9edbcc6dada' }))), h("form", { key: 'e6f58e5efe4915d95743fe2fd2ae56e0ed6bd88d', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: 'cb662574105589bb03c969000d2346d3259eeba7', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: '12031f3bec48036ec877070ef67842a7003d9970', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: '18b2294c27dad27df0ceb194e894bf46edc94900', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: 'd8656fe7d17d8289efea8f05afe89277000544f5', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '5dbb508445836835f22dbcd740362de6db239bdf', class: "text-center mb-2" }, h("h4", { key: '090e57c40a4db0a45ff942ec1729d090d8ee2b81', class: "mb-1" }, locales?.entries?.Lcz_SetNewPassword), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: 'd7593665dcf2650f91766459bb47f3a9acebbe78' }, h("div", { key: '74149e05ed661013302fb4712e99eb13b8e9fd6d', class: 'mb-2 d-flex flex-column', style: { gap: '1rem' } }, h("div", { key: '880f5ec4376c2b8e619886484dc7270a8e0e02d0', class: "m-0 p-0" }, h("div", { key: 'c6e4bb031dcab89811527478235caf561d30dd71', class: 'position-relative' }, h("ir-validator", { key: '48b124cf8bae4b10c2aaa45797d4769cbc36693d', schema: this.ResetPasswordSchema.shape.password, value: this.password }, h("ir-input", { key: 'c180ca095147df0eaa642856dcd015a0a8e442ec', type: "password", passwordToggle: true, "onText-change": e => (this.password = e.detail), onInputFocus: () => (this.showValidator = true), placeholder: locales.entries?.Lcz_NewPassword, value: this.password }))), this.showValidator && h("ir-password-validator", { key: '2ba1a2fe2b203b399e95f14956e8aa02fa83ddb8', class: "mb-1", password: this.password })), h("div", { key: '6feda44b3332dd92d21b12fd2bc94058f24c4c72', class: 'position-relative' }, h("ir-validator", { key: 'a3c4dfb99ff078ebc9f742fc2cbbabb3bcce03d2', schema: this.ResetPasswordSchema.shape.confirm_password, value: this.confirmPassword }, h("ir-input", { key: 'c2b45e77171d7d34df9db8aac456c04172018efa', type: "password", passwordToggle: true, "onText-change": e => (this.confirmPassword = e.detail), placeholder: locales.entries?.Lcz_ConfirmPassword, value: this.confirmPassword })))), !insideSidebar && (h("div", { key: '8d1815664cc2abbb3dc82b5b173cd4cc0f5b5a15', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-custom-button", { key: 'a2cc18edb0bdfd45db311498ad3c53f84db128fc',
            // btn_styles={'flex-fill'}
            onClickHandler: () => window.history.back(), class: "flex-fill",
            // text={locales.entries?.Lcz_Cancel}
            size: "medium", appearance: "filled", variant: "neutral" }, locales.entries?.Lcz_Cancel), h("ir-custom-button", { key: 'caf336b048189c732e87b06412ac37a72ccb8463',
            // btn_styles={'flex-fill'}
            class: "flex-fill", loading: this.isLoading, type: "submit", size: "medium", variant: "brand" }, locales.entries?.Lcz_ChangePassword)))))), insideSidebar && (h("div", { key: '17b8de914ce8867b40974bc137592a7c12fe631e', class: 'sheet-footer w-full' }, h("ir-custom-button", { key: 'a5bdd5b5d6f473892135a917fc4ad2afe3fe81f5', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", appearance: "filled", variant: "neutral", size: "medium" }, locales.entries.Lcz_Cancel), h("ir-custom-button", { key: 'a6139aa975eb2bc1063c0fabce1d1845ba0b76e0', variant: "brand", loading: this.isLoading, class: "flex-fill", type: "submit", size: "medium" }, locales.entries.Lcz_ChangePassword)))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrResetPassword.style = irResetPasswordCss + sheetCss;

export { IrResetPassword as ir_reset_password };

//# sourceMappingURL=ir-reset-password.entry.js.map