import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { a as axios } from './axios.js';
import { c as calendar_data } from './calendar-data.js';
import { g as getDefaultProperties } from './housekeeping.store.js';
import { l as locales } from './locales.store.js';
import { l as libExports } from './index3.js';
import { d as defineCustomElement$a } from './ir-button2.js';
import { d as defineCustomElement$9 } from './ir-combobox2.js';
import { d as defineCustomElement$8 } from './ir-icon2.js';
import { d as defineCustomElement$7 } from './ir-icons2.js';
import { d as defineCustomElement$6 } from './ir-input-text2.js';
import { d as defineCustomElement$5 } from './ir-password-validator2.js';
import { d as defineCustomElement$4 } from './ir-phone-input2.js';
import { d as defineCustomElement$3 } from './ir-textarea2.js';
import { d as defineCustomElement$2 } from './ir-title2.js';
import { d as defineCustomElement$1 } from './requirement-check2.js';

class UserService {
    async checkUserExistence(params) {
        const { data } = await axios.post('/CheckUserExistence', params);
        return data.My_Result;
    }
}

const irHkUserCss = ".sc-ir-hk-user-h{display:block}";

const IrHkUser = /*@__PURE__*/ proxyCustomElement(class IrHkUser extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.resetData = createEvent(this, "resetData", 7);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.user = null;
        this.isEdit = false;
        this.isLoading = false;
        this.autoValidate = false;
        this.userInfo = {
            id: -1,
            mobile: '',
            name: '',
            note: '',
            password: '',
            property_id: null,
            username: null,
            phone_prefix: null,
        };
        this.errors = null;
        this.showPasswordValidation = false;
        this.housekeepingService = new HouseKeepingService();
        this.default_properties = {
            token: '',
            language: '',
        };
        this.housekeeperSchema = libExports.z.object({
            name: libExports.z.string().min(2),
            mobile: libExports.z.string().min(1).max(14),
            password: libExports.z
                .string()
                .nullable()
                // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
                .refine(password => {
                var _a;
                if (this.user && !((_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.password)) {
                    return true;
                }
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/.test(password);
            }, { message: 'Password must be at least 8 characters long.' }),
            username: libExports.z
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
    }
    async componentWillLoad() {
        const { token, language, property_id } = getDefaultProperties();
        this.default_properties = { token, language };
        if (!this.user) {
            this.userInfo['property_id'] = property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.autoValidate = true;
            this.userInfo = Object.assign(Object.assign({}, this.user), { password: '' });
        }
    }
    updateUserField(key, value) {
        this.userInfo = Object.assign(Object.assign({}, this.userInfo), { [key]: value });
    }
    async addUser() {
        try {
            this.isLoading = true;
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            const toValidateUserInfo = Object.assign(Object.assign({}, this.userInfo), { password: this.user && this.userInfo.password === '' ? this.user.password : this.userInfo.password });
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
            if (error instanceof libExports.ZodError) {
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        console.log(this.errors);
        return (h(Host, { key: '54430fc603cfdfcc88bf4f7eb30eb73de636d546' }, h("ir-title", { key: '3bea9fc5a13a2aba06f8f87747426536c7cf766f', class: "px-1", displayContext: "sidebar", label: this.isEdit ? locales.entries.Lcz_EditHousekeeperProfile : locales.entries.Lcz_CreateHousekeeperProfile }), h("section", { key: 'c977e31dd4c7d5e6e5b09732e2d37eecc8caba9d', class: "px-1" }, h("ir-input-text", { key: '96c4e51509f810eb9cd5f9e2bc6bde43f71df5ca', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: (_a = this.errors) === null || _a === void 0 ? void 0 : _a.name, label: locales.entries.Lcz_Name, placeholder: locales.entries.Lcz_Name, onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), h("ir-phone-input", { key: '9000c31c0fae861c8cc50b91a4638015288ad6ee', testId: "phone", placeholder: locales.entries.Lcz_Mobile, error: ((_b = this.errors) === null || _b === void 0 ? void 0 : _b.mobile) && !((_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.mobile), language: this.default_properties.language, token: this.default_properties.token, default_country: calendar_data.country.id, phone_prefix: (_d = this.user) === null || _d === void 0 ? void 0 : _d.phone_prefix, label: locales.entries.Lcz_Mobile, value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), h("div", { key: '01ece91b35031b9faecfa9cf17d6e10d42a82891', class: "mb-1" }, h("ir-textarea", { key: 'b1e9dd97ba3a34750fd2a352a5e533f9c73caaa1', testId: "note", variant: "prepend", maxLength: 250, label: locales.entries.Lcz_Note, placeholder: locales.entries.Lcz_Note, value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), h("ir-input-text", { key: '5ee9d427f49292268474f25c1a66e0257b122903', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: (_e = this.errors) === null || _e === void 0 ? void 0 : _e.username, asyncParse: true, autoValidate: this.user ? (((_f = this.userInfo) === null || _f === void 0 ? void 0 : _f.username) !== this.user.username ? true : false) : this.autoValidate, errorMessage: ((_g = this.errors) === null || _g === void 0 ? void 0 : _g.username) && ((_j = (_h = this.userInfo) === null || _h === void 0 ? void 0 : _h.username) === null || _j === void 0 ? void 0 : _j.length) >= 3 ? 'Username already exists.' : undefined, label: locales.entries.Lcz_Username, placeholder: locales.entries.Lcz_Username, value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), h("ir-input-text", { key: 'd3ae31c49b93d10964453363217d92c81240eba3', testId: "password", autoValidate: this.user ? (!((_k = this.userInfo) === null || _k === void 0 ? void 0 : _k.password) ? false : true) : this.autoValidate, label: locales.entries.Lcz_Password, value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: (_l = this.errors) === null || _l === void 0 ? void 0 : _l.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { key: 'd403cde93893a857dd555806da10ea299f09e21e', password: this.userInfo.password }), h("div", { key: 'c5a647d1076719d0151581833a64f4ba11393799', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, h("ir-button", { key: '0cc8f213d54991355d9daa2e3dae009320c8681a', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: '8bb8850db2dadd3b395e18f34e10db875afa0836', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: locales.entries.Lcz_Save })))));
    }
    static get style() { return irHkUserCss; }
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
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-user", "ir-button", "ir-combobox", "ir-icon", "ir-icons", "ir-input-text", "ir-password-validator", "ir-phone-input", "ir-textarea", "ir-title", "requirement-check"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-user":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkUser);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$a();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$9();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-password-validator":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-textarea":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-title":
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

export { IrHkUser as I, defineCustomElement as d };
//# sourceMappingURL=ir-hk-user2.js.map

//# sourceMappingURL=ir-hk-user2.js.map