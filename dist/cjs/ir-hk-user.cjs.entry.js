'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-9D7XLiv8.js');
var user_service = require('./user.service-DkcbZxco.js');
var calendarData = require('./calendar-data-ShS6b-Ns.js');
var constants = require('./constants-BLID23LD.js');
var t = require('./t-CqJPQrfm.js');
var types = require('./types-BVJQZ50e.js');
require('./locale-scope-Cch-vf1R.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-kIlurDum.js');
require('./locale.controller-BE9t6L_N.js');
require('./language-observer-DKp37LIu.js');
require('./utils-DaFypNtu.js');
require('./moment-CdViwxPQ.js');
require('./booking.dto-CMx8s-oW.js');
require('./type-DxODN41W.js');
require('./ir-date-CbkOKs2C.js');
require('./calendar-dates-BxDGM1ix.js');

const irHkUserCss = () => `.sc-ir-hk-user-h{display:block}`;

const sheetCss = () => `.sc-ir-hk-user-h{height:100%}.sheet-container.sc-ir-hk-user{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-hk-user{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-hk-user{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-hk-user{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-hk-user{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-hk-user{flex-direction:row;align-items:center}}`;

const IrHkUser = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData");
        this.closeSideBar = index.createEvent(this, "closeSideBar");
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
    housekeepingService = new index$1.HouseKeepingService();
    default_properties = {
        ApiClient: '',
        language: '',
    };
    housekeeperSchema = types.objectType({
        name: types.stringType().min(2),
        mobile: types.stringType().min(1).max(14),
        password: types.stringType()
            .nullable()
            // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
            .refine(password => {
            if (this.user && !this.userInfo?.password) {
                return true;
            }
            return constants.CONSTANTS.PASSWORD.test(password);
        }, { message: t.t('Lcz_PasswordMinLength', { fallback: 'Password must be at least 8 characters long.' }) }),
        username: types.stringType()
            .min(3)
            .refine(async (name) => {
            if (this.user && this.user.username === name) {
                return true;
            }
            if (name.length >= 3) {
                return !(await new user_service.UserService().checkUserExistence({ UserName: name }));
            }
            return true;
        }, { message: t.t('Lcz_UsernameAlreadyExists', { fallback: 'Username already exists.' }) }),
    });
    async componentWillLoad() {
        const { ApiClient, language, property_id } = index$1.getDefaultProperties();
        this.default_properties = { ApiClient, language };
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
            if (error instanceof types.ZodError) {
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
        return (index.h("div", { key: 'f42ee3d5f816107b73887f26660db4a093327bc8', class: "sheet-container" }, index.h("ir-title", { key: '49cea8fd48cc39e2d7498e66bd46d0c4512baf3e', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? t.t('Lcz_EditHousekeeperProfile', { fallback: 'Edit Housekeeper Profile' }) : t.t('Lcz_CreateHousekeeperProfile', { fallback: 'Create housekeeper profile' }) }), index.h("section", { key: '7cf456795b84d5e1dcf165052c03fa3e5454b2da', class: "px-1 sheet-body" }, index.h("ir-input-text", { key: '8bdc2a1a924fe8c747ada4f0458c1a572309b8ae', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: this.errors?.name, label: t.t('Lcz_Name', { fallback: 'Name' }), placeholder: t.t('Lcz_Name', { fallback: 'Name' }), onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), index.h("ir-phone-input", { key: '9413098105320572795cc37e97b3c1db771ed9e7', testId: "phone", placeholder: t.t('Lcz_Mobile', { fallback: 'Mobile' }), error: this.errors?.mobile && !this.userInfo?.mobile, language: this.default_properties.language, ApiClient: this.default_properties.ApiClient, default_country: calendarData.calendar_data.country.id, phone_prefix: this.user?.phone_prefix, label: t.t('Lcz_Mobile', { fallback: 'Mobile' }), value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), index.h("div", { key: '6d738da95a7aea990368ccdf7c5975a255d1f89e', class: "mb-1" }, index.h("ir-textarea", { key: 'a69a67d226b671dcbb066fd9a6ea8760461b5b6d', testId: "note", variant: "prepend", maxLength: 250, label: t.t('Lcz_Note', { fallback: 'Note' }), placeholder: t.t('Lcz_Note', { fallback: 'Note' }), value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), index.h("ir-input-text", { key: 'a590e8d797a5748dea121428187feec73163d77a', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: this.errors?.username, asyncParse: true, autoValidate: this.user ? (this.userInfo?.username !== this.user.username ? true : false) : this.autoValidate, errorMessage: this.errors?.username && this.userInfo?.username?.length >= 3 ? t.t('Lcz_UsernameAlreadyExists', { fallback: 'Username already exists.' }) : undefined, label: t.t('Lcz_Username', { fallback: 'Username' }), placeholder: t.t('Lcz_Username', { fallback: 'Username' }), value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), index.h("ir-input-text", { key: 'acbce0bfc044139bf756689483e709cd680b0b98', testId: "password", autoValidate: this.user ? (!this.userInfo?.password ? false : true) : this.autoValidate, label: t.t('Lcz_Password', { fallback: 'Password' }), value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: this.errors?.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && index.h("ir-password-validator", { key: '14df0cfffdc06919ac4a06f6d2dc4463b0036b89', password: this.userInfo.password })), index.h("div", { key: '149c75fc371a419d97018712a689c7446fd28478', class: "sheet-footer" }, index.h("ir-button", { key: 'ce7c11abf036ff0bc0b22eb13d0047f49ac62e6f', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: t.t('Lcz_Cancel', { fallback: 'Cancel' }) }), index.h("ir-button", { key: '6e631b41c56992589a153ac6fbf0a00488f63bf2', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", text: t.t('Lcz_Save', { fallback: 'Save' }) }))));
    }
};
IrHkUser.style = irHkUserCss() + sheetCss();

exports.ir_hk_user = IrHkUser;
