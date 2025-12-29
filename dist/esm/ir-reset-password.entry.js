import { r as registerInstance, c as createEvent, g as getElement, h, F as Fragment } from './index-b3dce66a.js';
import { T as Token } from './Token-030c78a9.js';
import { A as AuthService } from './authenticate.service-45a84845.js';
import { R as RoomService } from './room.service-cbe9248d.js';
import { S as SystemService } from './system.service-35fa8e7e.js';
import { l as locales } from './locales.store-f4150353.js';
import { C as CONSTANTS } from './constants-1510e43f.js';
import { z, Z as ZodError } from './index-1e1f097b.js';
import './axios-aa1335b8.js';
import './calendar-data-8a36a1b2.js';
import './index-a124d225.js';

const irResetPasswordCss = ".base-host.sc-ir-reset-password{height:100vh;display:grid;align-content:center;padding:2rem;box-sizing:border-box;background-position:center;background-repeat:no-repeat;background-size:cover;background:white}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password{margin:0}p.sc-ir-reset-password,input.sc-ir-reset-password,button.sc-ir-reset-password,div.sc-ir-reset-password,section.sc-ir-reset-password,form.sc-ir-reset-password{box-sizing:border-box}.lock-icon.sc-ir-reset-password{align-self:center}.form-container.sc-ir-reset-password{padding:1rem;display:flex;flex-direction:column;height:100%;background:white;border-radius:0.25rem;gap:1rem;width:100%;max-width:38rem;margin-left:auto;margin-right:auto}.separator-container.sc-ir-reset-password{display:flex;align-items:center;gap:0.5rem;padding-top:1.5rem;padding-bottom:1rem}.separator-container.sc-ir-reset-password p.sc-ir-reset-password{color:#6b6f82;font-size:1rem}.separator.sc-ir-reset-password{flex:1 1 0%;height:1px;background:#dadada}.login-btn.sc-ir-reset-password{margin-top:1rem}.logo.sc-ir-reset-password{align-self:center}.app_links.sc-ir-reset-password{display:flex;align-items:center;justify-content:center;gap:1rem;padding-block:0.5rem}.app_links.sc-ir-reset-password a.sc-ir-reset-password img.sc-ir-reset-password{width:70%}.password_toggle.sc-ir-reset-password{all:unset;position:absolute;top:2px;right:1rem}";
const IrResetPasswordStyle0 = irResetPasswordCss;

const sheetCss = ".sc-ir-reset-password-h{height:100%}.sheet-container.sc-ir-reset-password{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-reset-password{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-reset-password{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-reset-password{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-reset-password{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-reset-password{flex-direction:row;align-items:center}}";
const IrResetPasswordStyle1 = sheetCss;

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
        return (h("div", { key: 'f068fd8d17c33bf5ab87e943c19527fa41dc1c28', class: { 'base-host': !insideSidebar, 'h-100': insideSidebar } }, h(Fragment, { key: 'ff110ad3495cd33cfa543109d08b815f27a5f3f0' }, !insideSidebar && (h(Fragment, { key: '89690e7ec3efbef364e35fdd1987f65e7cf93155' }, h("ir-interceptor", { key: '84e92b78a70780a28f333aba6cf517d1cdb885f7', suppressToastEndpoints: ['/Change_User_Pwd'] }), h("ir-toast", { key: '575509055b494d74d60b26fbb6812d33fb5b9f3c' }))), h("form", { key: 'b43e0d0fb2368247263ff3f045a79851ed9c35be', onSubmit: this.handleChangePassword.bind(this), class: { 'sheet-container': insideSidebar } }, insideSidebar && h("ir-title", { key: '63f91c690218846f9e93525df3f938f7638bf8e6', class: "px-1 sheet-header", displayContext: "sidebar", label: 'Change Password' }), h("div", { key: 'f3a7f2fe8a3d7e85ff0df7191b589979f5c73b83', class: { 'form-container': true, 'sheet-body px-1': insideSidebar, 'px-2': !insideSidebar } }, h("svg", { key: 'c46006c04c3e12fa8e75ad204732bff6a8675fd6', class: "lock-icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", height: 24, width: 24 }, h("path", { key: '46b2dc778832c17ffd315eb34cbc2b00219a2453', fill: "currentColor", d: "M144 144l0 48 160 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192l0-48C80 64.5 144.5 0 224 0s144 64.5 144 144l0 48 16 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 256c0-35.3 28.7-64 64-64l16 0z" })), h("div", { key: '39a5ee3f451683de31f778faa231ae3aff31e488', class: "text-center mb-2" }, h("h4", { key: '87a61120f39fe455381b8c42c5f823fab13446a6', class: "mb-1" }, locales?.entries?.Lcz_SetNewPassword), this.submitted ? (h("p", null, "An email has been sent to your address. Please check your inbox to confirm the password change.")) : (h("p", null, "Your new password must be different to previously used password"))), !this.submitted && (h("section", { key: '339cf614a7c1e909787648464b16f2c51e77df1c' }, h("div", { key: '47cbafb0dd003dfcc930a461de3c80bd70dfe995', class: 'mb-2' }, h("div", { key: '218dc6baca688d9b2d05cc76687a2667aeb48323', class: "m-0 p-0" }, h("div", { key: 'ac7e8fe81b2e679458be89c054a3e894cb0491d7', class: 'position-relative' }, h("ir-input-text", { key: 'f02f39a1ff374083e975a13716213fbed07df208', error: this.error?.password, autoValidate: this.autoValidate, value: this.password, onTextChange: e => (this.password = e.detail), label: "", class: "m-0 p-0", inputStyles: 'm-0', zod: this.ResetPasswordSchema.pick({ password: true }), wrapKey: "password", placeholder: locales.entries?.Lcz_NewPassword, onInputFocus: () => (this.showValidator = true), type: 'password' })), this.showValidator && h("ir-password-validator", { key: '979b61e8bd2098960f5c87936e23ea276d481ace', class: "mb-1", password: this.password })), h("div", { key: '7b6d8c4176ae5d13cbfd3f7b95f9bfb3439dfcd5', class: 'position-relative' }, h("ir-input-text", { key: '1248d18526f4f81a57cb47e647d98bce21ca716a', error: this.error?.confirm_password, autoValidate: this.autoValidate, zod: this.ResetPasswordSchema.pick({ confirm_password: true }), wrapKey: "confirm_password", value: this.confirmPassword, onTextChange: e => (this.confirmPassword = e.detail), label: "", placeholder: locales.entries?.Lcz_ConfirmPassword, type: 'password' }))), !insideSidebar && (h("div", { key: '4bfc4fc3230dfcda7f09aee20790c8a26045f6ad', class: "d-flex flex-column mt-2 flex-sm-row align-items-sm-center", style: { gap: '0.5rem' } }, h("ir-button", { key: 'c44517ad3504aa9648035689e353038557afa4d1', btn_styles: 'flex-fill', onClickHandler: () => window.history.back(), class: "flex-fill", text: locales.entries?.Lcz_Cancel, size: "md", btn_color: "secondary" }), h("ir-button", { key: 'b5f43bf4c54f319b989176e8ff6424c5a596327f', btn_styles: 'flex-fill', class: "flex-fill", isLoading: this.isLoading, btn_type: "submit", text: locales.entries?.Lcz_ChangePassword, size: "md" })))))), insideSidebar && (h("div", { key: '22e4bd301261a2c07999202bcc214fcb0f6d838d', class: 'sheet-footer w-full' }, h("ir-button", { key: '53f3b4fe8cac92b7842d418edeff86099d610dfc', text: locales.entries.Lcz_Cancel, onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_color: "secondary", btn_styles: "w-100 justify-content-center align-items-center", size: "md" }), h("ir-button", { key: 'a95b7bbc52cd790b4a3c3c1cde2b66f2dff3c503', isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_ChangePassword, size: "md" })))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"]
    }; }
};
IrResetPassword.style = IrResetPasswordStyle0 + IrResetPasswordStyle1;

export { IrResetPassword as ir_reset_password };

//# sourceMappingURL=ir-reset-password.entry.js.map