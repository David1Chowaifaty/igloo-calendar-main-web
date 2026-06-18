'use strict';

var index = require('./index-CJ0kc5p1.js');
var housekeeping_service = require('./housekeeping.service-nD5aZ8sN.js');
var user_service = require('./user.service-C5wCjg1H.js');
var calendarData = require('./calendar-data-CTxCbso4.js');
var locales_store = require('./locales.store-BfrChT1G.js');
var constants = require('./constants-BLID23LD.js');
var index$1 = require('./index-CLqkDPTC.js');
require('./index-dbmC5P-h.js');
require('./axios-C-Phc0sj.js');
require('./utils-CHYeTDt_.js');
require('./moment-CdViwxPQ.js');
require('./type-Dy9pVS4V.js');

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
    housekeepingService = new housekeeping_service.HouseKeepingService();
    default_properties = {
        token: '',
        language: '',
    };
    housekeeperSchema = index$1.libExports.z.object({
        name: index$1.libExports.z.string().min(2),
        mobile: index$1.libExports.z.string().min(1).max(14),
        password: index$1.libExports.z
            .string()
            .nullable()
            // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
            .refine(password => {
            if (this.user && !this.userInfo?.password) {
                return true;
            }
            return constants.CONSTANTS.PASSWORD.test(password);
        }, { message: 'Password must be at least 8 characters long.' }),
        username: index$1.libExports.z
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
            if (error instanceof index$1.libExports.ZodError) {
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
        return (index.h("div", { key: '7667906ffa113fd5755c754f28ec66bb5091ff99', class: "sheet-container" }, index.h("ir-title", { key: '91cae8dbcb2727c6eed749dd054cae98997e4e50', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? locales_store.locales.entries.Lcz_EditHousekeeperProfile : locales_store.locales.entries.Lcz_CreateHousekeeperProfile }), index.h("section", { key: '16c918c9ffe72e7097060557090e46c5cbc9dc50', class: "px-1 sheet-body" }, index.h("ir-input-text", { key: 'f8711f314d06d47e2b8054611466387d1816d6e6', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: this.errors?.name, label: locales_store.locales.entries.Lcz_Name, placeholder: locales_store.locales.entries.Lcz_Name, onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), index.h("ir-phone-input", { key: '3e6c5e2e8988089137e0146215fcc76b17979e64', testId: "phone", placeholder: locales_store.locales.entries.Lcz_Mobile, error: this.errors?.mobile && !this.userInfo?.mobile, language: this.default_properties.language, token: this.default_properties.token, default_country: calendarData.calendar_data.country.id, phone_prefix: this.user?.phone_prefix, label: locales_store.locales.entries.Lcz_Mobile, value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), index.h("div", { key: '5dcbfdb4408dd29aabfa4da34c76b49312a41f9e', class: "mb-1" }, index.h("ir-textarea", { key: '65f9ead10c81af39d24ef786af441862f0ea0c62', testId: "note", variant: "prepend", maxLength: 250, label: locales_store.locales.entries.Lcz_Note, placeholder: locales_store.locales.entries.Lcz_Note, value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), index.h("ir-input-text", { key: 'b93d94c742e68f2924c734b18094f424d11f2ce5', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: this.errors?.username, asyncParse: true, autoValidate: this.user ? (this.userInfo?.username !== this.user.username ? true : false) : this.autoValidate, errorMessage: this.errors?.username && this.userInfo?.username?.length >= 3 ? locales_store.locales.entries.Lcz_UsernameAlreadyExists : undefined, label: locales_store.locales.entries.Lcz_Username, placeholder: locales_store.locales.entries.Lcz_Username, value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), index.h("ir-input-text", { key: '983cbe7eead2c25c8455e483ce311fdf32646963', testId: "password", autoValidate: this.user ? (!this.userInfo?.password ? false : true) : this.autoValidate, label: locales_store.locales.entries.Lcz_Password, value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: this.errors?.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && index.h("ir-password-validator", { key: '991a1899b561b53da66b7c75c702a6785fbed0c4', password: this.userInfo.password })), index.h("div", { key: '98282a07deaf608ce1cf872e0bec6769dc011363', class: "sheet-footer" }, index.h("ir-button", { key: '1244489b0488ca7d9cfdc84004e93e3ae8fa4db0', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: 'd03a6f273c645f394c68d06f222c1abb3c19eadb', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Save }))));
    }
};
IrHkUser.style = irHkUserCss() + sheetCss();

exports.ir_hk_user = IrHkUser;
