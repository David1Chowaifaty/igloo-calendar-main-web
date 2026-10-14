'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-BlTsK8DE.js');
var user_service = require('./user.service-RONU8RTP.js');
var calendarData = require('./calendar-data-DZk0v7WL.js');
var constants = require('./constants-BLID23LD.js');
var t = require('./t-sd8HJHNy.js');
var types = require('./types-BVJQZ50e.js');
require('./locales.store-D6DJIhoZ.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-D4iFLV5-.js');
require('./utils-CpEd8z_J.js');
require('./moment-CdViwxPQ.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./ir-date-Bjy8vNGm.js');
require('./language-observer-DKp37LIu.js');
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
        return (index.h("div", { key: 'a50848a5164c42a977e5b8a88f1b9e52d2e69f96', class: "sheet-container" }, index.h("ir-title", { key: 'fc45bbc1540d204819a04dc773f6135a1f3af090', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? t.t('Lcz_EditHousekeeperProfile', { fallback: 'Edit Housekeeper Profile' }) : t.t('Lcz_CreateHousekeeperProfile', { fallback: 'Create housekeeper profile' }) }), index.h("section", { key: '6ba380382a3b6859cb6810f786b1f9d7c85597a8', class: "px-1 sheet-body" }, index.h("ir-input-text", { key: 'e19e099e70fd30241d2447a9a686f5a8548ccf7e', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: this.errors?.name, label: t.t('Lcz_Name', { fallback: 'Name' }), placeholder: t.t('Lcz_Name', { fallback: 'Name' }), onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), index.h("ir-phone-input", { key: '9346dd07ae67d039cd5e1dbeba6f13d8aecd494c', testId: "phone", placeholder: t.t('Lcz_Mobile', { fallback: 'Mobile' }), error: this.errors?.mobile && !this.userInfo?.mobile, language: this.default_properties.language, ApiClient: this.default_properties.ApiClient, default_country: calendarData.calendar_data.country.id, phone_prefix: this.user?.phone_prefix, label: t.t('Lcz_Mobile', { fallback: 'Mobile' }), value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), index.h("div", { key: 'adf959bf72ae9b29ea5d43eb5292556b545908f3', class: "mb-1" }, index.h("ir-textarea", { key: '0cee0d3792b436b12c42433047e289dcd6da022d', testId: "note", variant: "prepend", maxLength: 250, label: t.t('Lcz_Note', { fallback: 'Note' }), placeholder: t.t('Lcz_Note', { fallback: 'Note' }), value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), index.h("ir-input-text", { key: '26cc23233c910375b296597599709115ef23959c', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: this.errors?.username, asyncParse: true, autoValidate: this.user ? (this.userInfo?.username !== this.user.username ? true : false) : this.autoValidate, errorMessage: this.errors?.username && this.userInfo?.username?.length >= 3 ? t.t('Lcz_UsernameAlreadyExists', { fallback: 'Username already exists.' }) : undefined, label: t.t('Lcz_Username', { fallback: 'Username' }), placeholder: t.t('Lcz_Username', { fallback: 'Username' }), value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), index.h("ir-input-text", { key: 'a0d17ebd883f81c8ac1f801c2a596824ad6a3d8f', testId: "password", autoValidate: this.user ? (!this.userInfo?.password ? false : true) : this.autoValidate, label: t.t('Lcz_Password', { fallback: 'Password' }), value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: this.errors?.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && index.h("ir-password-validator", { key: '776caec1d3be280504d96c7ffba2897c64ef6927', password: this.userInfo.password })), index.h("div", { key: '601a868802bf72c6160495386fe55f898aeb3e1b', class: "sheet-footer" }, index.h("ir-button", { key: '4a6e0a2dd91a60631fff707f1999ba47884e01d6', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: t.t('Lcz_Cancel', { fallback: 'Cancel' }) }), index.h("ir-button", { key: '13b79042c2f989bbf1c77297ed9d896cb22124c3', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", text: t.t('Lcz_Save', { fallback: 'Save' }) }))));
    }
};
IrHkUser.style = irHkUserCss() + sheetCss();

exports.ir_hk_user = IrHkUser;
