import { proxyCustomElement, HTMLElement, createEvent, h, Fragment } from '@stencil/core/internal/client';
import { B as BookingService } from './booking.store.js';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { U as UserService } from './user.service.js';
import { c as calendar_data } from './calendar-data.js';
import { g as getDefaultProperties } from './housekeeping.store.js';
import { l as locales } from './locales.store.js';
import { C as CONSTANTS } from './constants.js';
import { z } from './index2.js';
import { d as defineCustomElement$8 } from './ir-custom-button2.js';
import { d as defineCustomElement$7 } from './ir-icons2.js';
import { d as defineCustomElement$6 } from './ir-input2.js';
import { d as defineCustomElement$5 } from './ir-mobile-input2.js';
import { d as defineCustomElement$4 } from './ir-password-validator2.js';
import { d as defineCustomElement$3 } from './ir-spinner2.js';
import { d as defineCustomElement$2 } from './ir-validator2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

const irHkUserDrawerFormCss = ".sc-ir-hk-user-drawer-form-h{display:block;height:100%}.hk-user-form.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;gap:1rem}.hk-user-form--password-change.sc-ir-hk-user-drawer-form{position:relative;height:100%;justify-content:center;align-items:center}.hk-user-form__back-btn.sc-ir-hk-user-drawer-form{position:absolute;top:0;left:0}.hk-user-form__password-fields.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;gap:1rem;width:100%;max-width:26rem}.hk-user-form__password-header.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;align-items:center;text-align:center;gap:0.5rem;margin-bottom:0.5rem}.hk-user-form__password-icon.sc-ir-hk-user-drawer-form{font-size:2.25rem;color:var(--wa-color-text-normal)}.hk-user-form__password-title.sc-ir-hk-user-drawer-form{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.hk-user-form__password-hint.sc-ir-hk-user-drawer-form{margin:0;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-text-normal);max-width:22rem}.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form{align-self:flex-end}.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form::part(base){padding:0;height:auto;width:fit-content}";
const IrHkUserDrawerFormStyle0 = irHkUserDrawerFormCss;

const nameSchema = z.string().min(2, 'Name must be at least 2 characters.');
const mobileSchema = z.string().min(1, 'Mobile is required.').max(14, 'Mobile must be at most 14 characters.');
const usernameBaseSchema = z.string().min(3, 'Username must be at least 3 characters.');
const IrHkUserDrawerForm = /*@__PURE__*/ proxyCustomElement(class IrHkUserDrawerForm extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.resetData = createEvent(this, "resetData", 7);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.loadingChanged = createEvent(this, "loadingChanged", 7);
    }
    isEdit = false;
    user = null;
    formId;
    isPageLoading = false;
    autoValidate = false;
    showPasswordValidation = false;
    isChangingPassword = false;
    confirmPassword = '';
    countries = [];
    countryCode = '';
    userInfo = {
        id: -1,
        mobile: '',
        name: '',
        note: '',
        password: '',
        property_id: null,
        username: null,
        phone_prefix: null,
    };
    resetData;
    closeSideBar;
    loadingChanged;
    housekeepingService = new HouseKeepingService();
    bookingService = new BookingService();
    // Stable schema references — closures read current `this` state at validation time.
    usernameSchema;
    passwordSchema;
    fullSchema;
    componentWillLoad() {
        this.init();
    }
    async init() {
        try {
            this.isPageLoading = true;
            const { language, property_id } = getDefaultProperties();
            if (!this.user) {
                this.userInfo['property_id'] = property_id;
            }
            if (this.user) {
                this.autoValidate = true;
                this.userInfo = { ...this.user, password: '' };
            }
            this.buildSchemas();
            const countries = await this.bookingService.getCountries(language);
            this.countries = countries;
            const propertyCountry = this.countries.find(c => c.id === calendar_data.country.id);
            if (!this.user) {
                this.countryCode = propertyCountry?.code ?? '';
                this.updateUserField('phone_prefix', propertyCountry.phone_prefix);
            }
            else if (this.user.phone_prefix) {
                const match = countries.find(c => c.phone_prefix === this.user.phone_prefix);
                this.countryCode = match?.code ?? calendar_data.country?.code ?? '';
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    buildSchemas() {
        this.usernameSchema = usernameBaseSchema.refine(async (name) => {
            if (this.user && this.user.username === name)
                return true;
            if (name.length >= 3) {
                return !(await new UserService().checkUserExistence({ UserName: name }));
            }
            return true;
        }, { message: locales.entries.Lcz_UsernameAlreadyExists ?? 'Username already exists.' });
        this.passwordSchema = z
            .string()
            .nullable()
            .refine(password => {
            if (this.user && !this.userInfo?.password)
                return true;
            return CONSTANTS.PASSWORD.test(password);
        }, { message: 'Password must be at least 8 characters long.' });
        this.fullSchema = z.object({
            name: nameSchema,
            mobile: mobileSchema,
            password: this.passwordSchema,
            username: this.usernameSchema,
        });
    }
    updateUserField(key, value) {
        this.userInfo = { ...this.userInfo, [key]: value };
    }
    async addUser() {
        try {
            this.loadingChanged.emit(true);
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            if (this.isChangingPassword && this.confirmPassword !== this.userInfo.password)
                return;
            const toValidate = {
                ...this.userInfo,
                password: this.user && !this.isChangingPassword ? this.user.password : this.userInfo.password,
            };
            const result = await this.fullSchema.safeParseAsync(toValidate);
            if (!result.success)
                return;
            await this.housekeepingService.editExposedHKM(toValidate);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.loadingChanged.emit(false);
        }
    }
    cancelPasswordChange() {
        this.isChangingPassword = false;
        this.updateUserField('password', '');
        this.confirmPassword = '';
        this.showPasswordValidation = false;
    }
    async handleNameBlur(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.user || !this.userInfo.name)
            return;
        const username = await this.housekeepingService.generateUserName(this.userInfo.name);
        this.updateUserField('username', username);
    }
    renderPasswordChangeView() {
        return (h("form", { id: this.formId, class: "hk-user-form hk-user-form--password-change", onSubmit: e => {
                e.preventDefault();
                this.addUser();
            } }, h("ir-custom-button", { type: "button", class: "hk-user-form__back-btn", appearance: "plain", variant: "neutral", size: "small", onClickHandler: () => this.cancelPasswordChange() }, h("wa-icon", { name: "arrow-left", "aria-hidden": "true", style: { fontSize: '1rem' } })), h("div", { class: "hk-user-form__password-fields" }, h("div", { class: "hk-user-form__password-header" }, h("wa-icon", { name: "lock", class: "hk-user-form__password-icon" }), h("h4", { class: "hk-user-form__password-title" }, "Set New Password"), h("p", { class: "hk-user-form__password-hint" }, "Your new password must be different to previously used password")), h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { placeholder: "New password", value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && h("ir-password-validator", { password: this.userInfo.password }), h("ir-validator", { schema: z.string().refine(v => v === this.userInfo.password, { message: 'Passwords do not match.' }), value: this.confirmPassword, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { placeholder: "Confirm password", value: this.confirmPassword, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => (this.confirmPassword = e.detail) })))));
    }
    render() {
        if (this.isPageLoading) {
            return (h("div", { class: "drawer__loader-container" }, h("ir-spinner", null)));
        }
        if (this.user && this.isChangingPassword) {
            return this.renderPasswordChangeView();
        }
        return (h("form", { id: this.formId, class: "hk-user-form", onSubmit: e => {
                e.preventDefault();
                this.addUser();
            } }, h("ir-validator", { schema: nameSchema, value: this.userInfo.name, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { label: locales.entries.Lcz_Name, value: this.userInfo.name, maxlength: 40, "onText-change": (e) => this.updateUserField('name', e.detail), "onInput-blur": this.handleNameBlur.bind(this) })), h("ir-validator", { schema: mobileSchema, value: this.userInfo.mobile, valueEvent: "mobile-input-change", showErrorMessage: true }, h("ir-mobile-input", { label: locales.entries.Lcz_Mobile, value: this.userInfo.mobile, countryCode: this.countryCode, countries: this.countries, "onMobile-input-change": e => {
                this.updateUserField('phone_prefix', e.detail.country.phone_prefix);
                this.updateUserField('mobile', e.detail.value);
            } })), h("wa-textarea", { "data-testid": "note", maxlength: 250, size: "small", label: locales.entries.Lcz_Note, value: this.userInfo.note, defaultValue: this.userInfo.note, onchange: e => this.updateUserField('note', e.target.value) }), h("ir-validator", { schema: this.usernameSchema, value: this.userInfo.username, valueEvent: "text-change", asyncValidation: true, showErrorMessage: true }, h("ir-input", { label: locales.entries.Lcz_Username, value: this.userInfo.username, "onText-change": (e) => this.updateUserField('username', e.detail) })), !this.user ? (h(Fragment, null, h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { label: locales.entries.Lcz_Password, value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && h("ir-password-validator", { password: this.userInfo.password }))) : (h("wa-button", { size: "small", appearance: "plain", variant: "brand", type: "button", class: "hk-user-form__change-password-btn", onClick: () => (this.isChangingPassword = true) }, "Change Password"))));
    }
    static get style() { return IrHkUserDrawerFormStyle0; }
}, [2, "ir-hk-user-drawer-form", {
        "isEdit": [4, "is-edit"],
        "user": [16],
        "formId": [1, "form-id"],
        "isPageLoading": [32],
        "autoValidate": [32],
        "showPasswordValidation": [32],
        "isChangingPassword": [32],
        "confirmPassword": [32],
        "countries": [32],
        "countryCode": [32],
        "userInfo": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-user-drawer-form", "ir-custom-button", "ir-icons", "ir-input", "ir-mobile-input", "ir-password-validator", "ir-spinner", "ir-validator", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-user-drawer-form":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkUserDrawerForm);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-mobile-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-spinner":
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

export { IrHkUserDrawerForm as I, defineCustomElement as d };

//# sourceMappingURL=ir-hk-user-drawer-form2.js.map