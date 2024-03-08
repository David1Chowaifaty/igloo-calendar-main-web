import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { H as HouseKeepingService, g as getDefaultProperties } from './housekeeping.service.js';
import { c as calendar_data } from './calendar-data.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-combobox2.js';
import { d as defineCustomElement$3 } from './ir-icon2.js';
import { d as defineCustomElement$2 } from './ir-input-text2.js';
import { d as defineCustomElement$1 } from './ir-phone-input2.js';

function validateForm(data, rules) {
    let isValid = true;
    const errors = {};
    for (const fieldName in rules) {
        const rulesForField = rules[fieldName];
        const value = data[fieldName];
        if (!rulesForField)
            continue;
        errors[fieldName] = [];
        // Required
        if (rulesForField.required && (value === null || value === undefined || value === '')) {
            isValid = false;
            errors[fieldName].push('This field is required.');
        }
        // String Length
        if (typeof value === 'string') {
            if (rulesForField.minLength !== undefined && value.length < rulesForField.minLength) {
                isValid = false;
                errors[fieldName].push(`Minimum length is ${rulesForField.minLength}.`);
            }
            if (rulesForField.maxLength !== undefined && value.length > rulesForField.maxLength) {
                isValid = false;
                errors[fieldName].push(`Maximum length is ${rulesForField.maxLength}.`);
            }
        }
        // Numeric Range
        if (typeof value === 'number') {
            if (rulesForField.minValue !== undefined && value < rulesForField.minValue) {
                isValid = false;
                errors[fieldName].push(`Minimum value is ${rulesForField.minValue}.`);
            }
            if (rulesForField.maxValue !== undefined && value > rulesForField.maxValue) {
                isValid = false;
                errors[fieldName].push(`Maximum value is ${rulesForField.maxValue}.`);
            }
        }
        // Regular Expression
        if (rulesForField.pattern && !rulesForField.pattern.test(String(value))) {
            isValid = false;
            errors[fieldName].push('Invalid format.');
        }
        // Custom Validation
        if (rulesForField.custom && !rulesForField.custom(value)) {
            isValid = false;
            errors[fieldName].push('Custom validation failed.');
        }
    }
    return { isValid, errors };
}

const irHkUserCss = ".sc-ir-hk-user-h{display:block}.top-border.sc-ir-hk-user{border-top:1px solid #e4e5ec}";
const IrHkUserStyle0 = irHkUserCss;

const IrHkUser = /*@__PURE__*/ proxyCustomElement(class IrHkUser extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.resetData = createEvent(this, "resetData", 7);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.housekeepingService = new HouseKeepingService();
        this.default_properties = {
            token: '',
            language: '',
        };
        this.user = null;
        this.isEdit = false;
        this.isLoading = false;
        this.userInfo = {
            id: -1,
            mobile: '',
            name: '',
            note: '',
            password: '',
            property_id: null,
            username: '',
            phone_prefix: null,
        };
        this.errors = null;
    }
    async componentWillLoad() {
        const { token, language, property_id } = getDefaultProperties();
        this.default_properties = { token, language };
        this.housekeepingService.setToken(token);
        if (!this.user) {
            this.userInfo['property_id'] = property_id;
        }
        if (this.user) {
            this.userInfo = Object.assign({}, this.user);
        }
        console.log(this.userInfo);
    }
    updateUserField(key, value) {
        this.userInfo = Object.assign(Object.assign({}, this.userInfo), { [key]: value });
    }
    async addUser() {
        try {
            this.isLoading = true;
            const validationRules = {
                name: { required: true },
                mobile: { required: true },
                password: { minLength: 5 },
            };
            const validationResult = validateForm(this.userInfo, validationRules);
            if (!validationResult.isValid) {
                this.errors = validationResult.errors;
                return;
            }
            if (this.errors) {
                this.errors = null;
            }
            await this.housekeepingService.editExposedHKM(this.userInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isLoading = false;
        }
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g;
        return (h(Host, { key: 'd8d405c2afcb942fa77823c788ea1c3d32aa1104', class: "px-1" }, h("div", { key: '9d8a4f0f680bf57f9df142f6dedc9d4d216a0c11', class: "d-flex align-items-center py-1 justify-content-between" }, h("h3", { key: '340fd8a2c124b506c2c7ae66ed06bf40faa4b26b', class: "text-left font-medium-2  py-0 my-0" }, this.isEdit ? 'Edit' : 'Create', " housekeeper profile"), h("ir-icon", { key: '43427a39fc32b1c955c8539a8ea86db8a9d5511d', class: 'm-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '10c9a0f53de986036d08e56f7546d68d752ad7c9', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'e0b726ae93fb8711784b56ad5421cb99207791ee', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("section", { key: 'c5cdec2a27d0c6dcd84eb6499c053cc5d28a70f2', class: "pt-3 border-top" }, h("ir-input-text", { key: 'f2de1428a49f736a31c56e1c343f6514fe5a13ff', error: ((_b = (_a = this.errors) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) > 0, label: "Name", placeholder: "", onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name }), h("ir-phone-input", { key: '400b1a3e2e3317de1d0803d66ef67d906109115b', error: ((_d = (_c = this.errors) === null || _c === void 0 ? void 0 : _c.mobile) === null || _d === void 0 ? void 0 : _d.length) > 0, language: this.default_properties.language, token: this.default_properties.token, default_country: calendar_data.country.id, phone_prefix: (_e = this.user) === null || _e === void 0 ? void 0 : _e.phone_prefix, label: "Mobile", value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), h("ir-input-text", { key: '3623a36572e0c287382734d4173482108d51db5f', label: "Username", placeholder: "", value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), h("ir-input-text", { key: 'c9ffffdeb24cf0f75c93f20198a85bc8104ac6ea', label: "Password", placeholder: "", value: this.userInfo.password, type: "password", error: ((_g = (_f = this.errors) === null || _f === void 0 ? void 0 : _f.password) === null || _g === void 0 ? void 0 : _g.length) > 0, onTextChange: e => this.updateUserField('password', e.detail) }), h("ir-input-text", { key: '9c3b2eb777f8601efffa3980af4d224865e7d3cf', label: "Note", placeholder: "", value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) }), h("div", { key: 'e84e9ef0e3bbdb6ab32bdd256f3274dbbe3a81fd', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, h("ir-button", { key: '1823bd8a7b6b000bcea4c6d1131e5d36f4689dc5', onClickHanlder: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: 'Cancel' }), h("ir-button", { key: 'a227180b1e00d2f53cc47e24a0620436bc187cdd', isLoading: this.isLoading, onClickHanlder: this.addUser.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: 'Save' })))));
    }
    static get style() { return IrHkUserStyle0; }
}, [2, "ir-hk-user", {
        "user": [16],
        "isEdit": [4, "is-edit"],
        "isLoading": [32],
        "userInfo": [32],
        "errors": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-user", "ir-button", "ir-combobox", "ir-icon", "ir-input-text", "ir-phone-input"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-user":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkUser);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-phone-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrHkUser as I, defineCustomElement as d };

//# sourceMappingURL=ir-hk-user2.js.map