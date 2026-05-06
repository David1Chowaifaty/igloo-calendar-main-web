'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const housekeeping_service = require('./housekeeping.service-8d06557d.js');
const user_service = require('./user.service-567655c1.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const locales_store = require('./locales.store-32782582.js');
const constants = require('./constants-abd1d7db.js');
const index$1 = require('./index-8bb117a0.js');
require('./index-fbf1fe1d.js');
require('./axios-6e678d52.js');
require('./utils-e4cb6b2d.js');
require('./moment-1780b03a.js');
require('./type-87fd01b8.js');

const irHkUserCss = ".sc-ir-hk-user-h{display:block}";
const IrHkUserStyle0 = irHkUserCss;

const sheetCss = ".sc-ir-hk-user-h{height:100%}.sheet-container.sc-ir-hk-user{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-hk-user{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-hk-user{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-hk-user{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-hk-user{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-hk-user{flex-direction:row;align-items:center}}";
const IrHkUserStyle1 = sheetCss;

const IrHkUser = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
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
    housekeepingService = new housekeeping_service.HouseKeepingService();
    default_properties = {
        token: '',
        language: '',
    };
    housekeeperSchema = index$1.z.object({
        name: index$1.z.string().min(2),
        mobile: index$1.z.string().min(1).max(14),
        password: index$1.z
            .string()
            .nullable()
            // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
            .refine(password => {
            if (this.user && !this.userInfo?.password) {
                return true;
            }
            return constants.CONSTANTS.PASSWORD.test(password);
        }, { message: 'Password must be at least 8 characters long.' }),
        username: index$1.z
            .string()
            .min(3)
            .refine(async (name) => {
            if (this.user && this.user.username === name) {
                return true;
            }
            if (name.length >= 3) {
                return !(await new user_service.UserService().checkUserExistence({ UserName: name }));
            }
            return true;
        }, { message: 'Username already exists.' }),
    });
    async componentWillLoad() {
        const { token, language, property_id } = housekeeping_service.getDefaultProperties();
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
            if (error instanceof index$1.ZodError) {
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
        return (index.h("div", { key: 'c0c84c2b7c46886b7d2a908512b64e062e0ffaba', class: "sheet-container" }, index.h("ir-title", { key: '4d531e392da42336d6e2202bfd24411fedb1a9cc', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? locales_store.locales.entries.Lcz_EditHousekeeperProfile : locales_store.locales.entries.Lcz_CreateHousekeeperProfile }), index.h("section", { key: '8e2eaa050cf3dc89c8731110ea06d7387f45d6b9', class: "px-1 sheet-body" }, index.h("ir-input-text", { key: '26feceb643ff075c9c184ecbde95b9fda414b29d', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: this.errors?.name, label: locales_store.locales.entries.Lcz_Name, placeholder: locales_store.locales.entries.Lcz_Name, onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), index.h("ir-phone-input", { key: '80bb0227200622b9e4c84018b9259d3350046d6e', testId: "phone", placeholder: locales_store.locales.entries.Lcz_Mobile, error: this.errors?.mobile && !this.userInfo?.mobile, language: this.default_properties.language, token: this.default_properties.token, default_country: calendarData.calendar_data.country.id, phone_prefix: this.user?.phone_prefix, label: locales_store.locales.entries.Lcz_Mobile, value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), index.h("div", { key: '5cab841c3d36942ed7461adaf3686c718f81eccf', class: "mb-1" }, index.h("ir-textarea", { key: '4eda0d8a5bf08f3aff7d8733ac852c41b0301051', testId: "note", variant: "prepend", maxLength: 250, label: locales_store.locales.entries.Lcz_Note, placeholder: locales_store.locales.entries.Lcz_Note, value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), index.h("ir-input-text", { key: '6a4622aff5154adebddf854ec50a27d17edbe923', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: this.errors?.username, asyncParse: true, autoValidate: this.user ? (this.userInfo?.username !== this.user.username ? true : false) : this.autoValidate, errorMessage: this.errors?.username && this.userInfo?.username?.length >= 3 ? locales_store.locales.entries.Lcz_UsernameAlreadyExists : undefined, label: locales_store.locales.entries.Lcz_Username, placeholder: locales_store.locales.entries.Lcz_Username, value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), index.h("ir-input-text", { key: '8e2947815cef36373c4ab337948cff26a60d34a8', testId: "password", autoValidate: this.user ? (!this.userInfo?.password ? false : true) : this.autoValidate, label: locales_store.locales.entries.Lcz_Password, value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: this.errors?.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && index.h("ir-password-validator", { key: '55e8e4637dc06f312f4c47049b345b49670ab0a8', password: this.userInfo.password })), index.h("div", { key: '877c9667426bb3b4ae57c2f5e8469f10c0c101f9', class: "sheet-footer" }, index.h("ir-button", { key: 'd0908ef123f37bfd93a0f3f685fa69042a765b9b', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: 'e1b32b78b2a8c2c774aa98a99dcd2f62599eacae', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Save }))));
    }
};
IrHkUser.style = IrHkUserStyle0 + IrHkUserStyle1;

exports.ir_hk_user = IrHkUser;

//# sourceMappingURL=ir-hk-user.cjs.entry.js.map