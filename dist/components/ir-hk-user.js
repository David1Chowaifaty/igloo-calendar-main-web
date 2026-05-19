import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { U as UserService } from './user.service.js';
import { c as calendar_data } from './calendar-data.js';
import { g as getDefaultProperties } from './housekeeping.store.js';
import { l as locales } from './locales.store.js';
import { C as CONSTANTS } from './constants.js';
import { z, Z as ZodError } from './index2.js';
import { d as defineCustomElement$b } from './ir-button2.js';
import { d as defineCustomElement$a } from './ir-combobox2.js';
import { d as defineCustomElement$9 } from './ir-icon2.js';
import { d as defineCustomElement$8 } from './ir-icons2.js';
import { d as defineCustomElement$7 } from './ir-input-text2.js';
import { d as defineCustomElement$6 } from './ir-password-validator2.js';
import { d as defineCustomElement$5 } from './ir-phone-input2.js';
import { d as defineCustomElement$4 } from './ir-textarea2.js';
import { d as defineCustomElement$3 } from './ir-title2.js';
import { d as defineCustomElement$2 } from './requirement-check2.js';

const irHkUserCss = ".sc-ir-hk-user-h{display:block}";
const IrHkUserStyle0 = irHkUserCss;

const sheetCss = ".sc-ir-hk-user-h{height:100%}.sheet-container.sc-ir-hk-user{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-hk-user{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-hk-user{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-hk-user{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-hk-user{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-hk-user{flex-direction:row;align-items:center}}";
const IrHkUserStyle1 = sheetCss;

const IrHkUser$1 = /*@__PURE__*/ proxyCustomElement(class IrHkUser extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.resetData = createEvent(this, "resetData", 7);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
    }
    user = null;
    isEdit = false;
    isLoading = false;
    autoValidate = false;
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
    errors = null;
    showPasswordValidation = false;
    isUsernameTaken;
    resetData;
    closeSideBar;
    housekeepingService = new HouseKeepingService();
    default_properties = {
        token: '',
        language: '',
    };
    housekeeperSchema = z.object({
        name: z.string().min(2),
        mobile: z.string().min(1).max(14),
        password: z
            .string()
            .nullable()
            // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
            .refine(password => {
            if (this.user && !this.userInfo?.password) {
                return true;
            }
            return CONSTANTS.PASSWORD.test(password);
        }, { message: 'Password must be at least 8 characters long.' }),
        username: z
            .string()
            .min(3)
            .refine(async (name) => {
            if (this.user && this.user.username === name) {
                return true;
            }
            if (name.length >= 3) {
                return !(await new UserService().checkUserExistence({ UserName: name }));
            }
            return true;
        }, { message: 'Username already exists.' }),
    });
    async componentWillLoad() {
        const { token, language, property_id } = getDefaultProperties();
        this.default_properties = { token, language };
        if (!this.user) {
            this.userInfo['property_id'] = property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.autoValidate = true;
            this.userInfo = { ...this.user, password: '' };
        }
    }
    updateUserField(key, value) {
        this.userInfo = { ...this.userInfo, [key]: value };
    }
    async addUser() {
        try {
            this.isLoading = true;
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            const toValidateUserInfo = { ...this.userInfo, password: this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password };
            console.log('toValidateUserInfo', toValidateUserInfo);
            await this.housekeeperSchema.parseAsync(toValidateUserInfo);
            if (this.errors) {
                this.errors = null;
            }
            await this.housekeepingService.editExposedHKM(toValidateUserInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            const e = {};
            if (error instanceof ZodError) {
                error.issues.map(err => {
                    e[err.path[0]] = true;
                });
                this.errors = e;
            }
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    async handleBlur(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.user || !this.userInfo.name) {
            return;
        }
        const usermame = await this.housekeepingService.generateUserName(this.userInfo.name);
        this.updateUserField('username', usermame);
    }
    render() {
        return (h("div", { key: 'b16efbf2c2cdba41d030a0ceaaaaf117bb1df332', class: "sheet-container" }, h("ir-title", { key: 'e8ba2f7eb3b6c2b43f3680c0ee45ee5342a100da', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? locales.entries.Lcz_EditHousekeeperProfile : locales.entries.Lcz_CreateHousekeeperProfile }), h("section", { key: '3c6ca668a195ccfdb51faa142d9dbdc6387e5120', class: "px-1 sheet-body" }, h("ir-input-text", { key: '2fd8d140170fff21edb9ffae744a242c2bed9c3a', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: this.errors?.name, label: locales.entries.Lcz_Name, placeholder: locales.entries.Lcz_Name, onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), h("ir-phone-input", { key: '6241fc1b11aec2267dc88a1b6918353641717fd1', testId: "phone", placeholder: locales.entries.Lcz_Mobile, error: this.errors?.mobile && !this.userInfo?.mobile, language: this.default_properties.language, token: this.default_properties.token, default_country: calendar_data.country.id, phone_prefix: this.user?.phone_prefix, label: locales.entries.Lcz_Mobile, value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), h("div", { key: '173ea71440713c7f4cebefde10299daba8e38ee6', class: "mb-1" }, h("ir-textarea", { key: 'ff9e3c6aec4e0d12bfafb64927b17eda72b34e6d', testId: "note", variant: "prepend", maxLength: 250, label: locales.entries.Lcz_Note, placeholder: locales.entries.Lcz_Note, value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), h("ir-input-text", { key: '082faa94f50844ce3442466b35003a9440f26e9a', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: this.errors?.username, asyncParse: true, autoValidate: this.user ? (this.userInfo?.username !== this.user.username ? true : false) : this.autoValidate, errorMessage: this.errors?.username && this.userInfo?.username?.length >= 3 ? locales.entries.Lcz_UsernameAlreadyExists : undefined, label: locales.entries.Lcz_Username, placeholder: locales.entries.Lcz_Username, value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), h("ir-input-text", { key: '02fe376b4b9ae4c5ff50aae8b170db6ced66b43a', testId: "password", autoValidate: this.user ? (!this.userInfo?.password ? false : true) : this.autoValidate, label: locales.entries.Lcz_Password, value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: this.errors?.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { key: '653a1b18a6bc26d313f2520996082dcf3153e4f9', password: this.userInfo.password })), h("div", { key: '2dadd8db31e401928aa1bd4b980a28fb447330e1', class: "sheet-footer" }, h("ir-button", { key: 'e28c3e4565d778efb9dfa7ffacd662612bc676bd', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: '27255d696bf85c79ab599e23699055e87087d8fb', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_Save }))));
    }
    static get style() { return IrHkUserStyle0 + IrHkUserStyle1; }
}, [2, "ir-hk-user", {
        "user": [16],
        "isEdit": [4, "is-edit"],
        "isLoading": [32],
        "autoValidate": [32],
        "userInfo": [32],
        "errors": [32],
        "showPasswordValidation": [32],
        "isUsernameTaken": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-user", "ir-button", "ir-combobox", "ir-icon", "ir-icons", "ir-input-text", "ir-password-validator", "ir-phone-input", "ir-textarea", "ir-title", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-user":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkUser$1);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$b();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "requirement-check":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrHkUser = IrHkUser$1;
const defineCustomElement = defineCustomElement$1;

export { IrHkUser, defineCustomElement };

//# sourceMappingURL=ir-hk-user.js.map