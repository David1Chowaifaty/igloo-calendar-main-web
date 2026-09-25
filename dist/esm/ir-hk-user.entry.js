import { r as registerInstance, c as createEvent, h } from './index-CeHdrJeH.js';
import { H as HouseKeepingService, g as getDefaultProperties } from './index-Dj3jk4LQ.js';
import { U as UserService } from './user.service-Ds-2a4pa.js';
import { c as calendar_data } from './calendar-data-CiYzaNK0.js';
import { C as CONSTANTS } from './constants-DI4DZmiQ.js';
import { t } from './t-CHjay2ar.js';
import { o as objectType, s as stringType, Z as ZodError } from './types-CB66a07H.js';
import './locales.store-CXJn6ls-.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-Cx9w9d8l.js';
import './utils-CKFOUZvS.js';
import './moment-Mki5YqAR.js';
import './booking.dto-B554ToUQ.js';
import './type-DjfVZqvs.js';
import './ir-date-tLkbTntq.js';
import './language-observer-CHgzsZkY.js';

const irHkUserCss = () => `.sc-ir-hk-user-h{display:block}`;

const sheetCss = () => `.sc-ir-hk-user-h{height:100%}.sheet-container.sc-ir-hk-user{display:flex !important;flex-direction:column !important;background:white;height:100vh;gap:1rem;z-index:1000}.sheet-container.sc-ir-hk-user{height:-webkit-fill-available;height:100vh;height:100dvh}.sheet-footer.sc-ir-hk-user{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-hk-user{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-hk-user{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-hk-user{flex-direction:row;align-items:center}}`;

const IrHkUser = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData");
        this.closeSideBar = createEvent(this, "closeSideBar");
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
        ApiClient: '',
        language: '',
    };
    housekeeperSchema = objectType({
        name: stringType().min(2),
        mobile: stringType().min(1).max(14),
        password: stringType()
            .nullable()
            // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
            .refine(password => {
            if (this.user && !this.userInfo?.password) {
                return true;
            }
            return CONSTANTS.PASSWORD.test(password);
        }, { message: t('Lcz_PasswordMinLength', { fallback: 'Password must be at least 8 characters long.' }) }),
        username: stringType()
            .min(3)
            .refine(async (name) => {
            if (this.user && this.user.username === name) {
                return true;
            }
            if (name.length >= 3) {
                return !(await new UserService().checkUserExistence({ UserName: name }));
            }
            return true;
        }, { message: t('Lcz_UsernameAlreadyExists', { fallback: 'Username already exists.' }) }),
    });
    async componentWillLoad() {
        const { ApiClient, language, property_id } = getDefaultProperties();
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
        return (h("div", { key: '746eb08b6dc340bec22f1c450d8db7f2501135e1', class: "sheet-container" }, h("ir-title", { key: '43d154f161561d4ef8d9d933c2ee539c51b7cc17', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? t('Lcz_EditHousekeeperProfile', { fallback: 'Edit Housekeeper Profile' }) : t('Lcz_CreateHousekeeperProfile', { fallback: 'Create housekeeper profile' }) }), h("section", { key: 'f7da116be35cd2c5d80eee305101df718455946c', class: "px-1 sheet-body" }, h("ir-input-text", { key: '6ca7b6408ed099f4342975b2bc3e877d507633fb', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: this.errors?.name, label: t('Lcz_Name', { fallback: 'Name' }), placeholder: t('Lcz_Name', { fallback: 'Name' }), onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), h("ir-phone-input", { key: 'd36410526054918612c7e32a8a0f61ffa4031417', testId: "phone", placeholder: t('Lcz_Mobile', { fallback: 'Mobile' }), error: this.errors?.mobile && !this.userInfo?.mobile, language: this.default_properties.language, ApiClient: this.default_properties.ApiClient, default_country: calendar_data.country.id, phone_prefix: this.user?.phone_prefix, label: t('Lcz_Mobile', { fallback: 'Mobile' }), value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), h("div", { key: '4a503d6b85b9a7a3456461e57877a7ba2c9d3c99', class: "mb-1" }, h("ir-textarea", { key: 'eb624a2aecd5bb0f75a61099daf1c7b27e4dc4cc', testId: "note", variant: "prepend", maxLength: 250, label: t('Lcz_Note', { fallback: 'Note' }), placeholder: t('Lcz_Note', { fallback: 'Note' }), value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), h("ir-input-text", { key: 'cb3cdf0d6db0c194b9b820e85697f98fbacfec58', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: this.errors?.username, asyncParse: true, autoValidate: this.user ? (this.userInfo?.username !== this.user.username ? true : false) : this.autoValidate, errorMessage: this.errors?.username && this.userInfo?.username?.length >= 3 ? t('Lcz_UsernameAlreadyExists', { fallback: 'Username already exists.' }) : undefined, label: t('Lcz_Username', { fallback: 'Username' }), placeholder: t('Lcz_Username', { fallback: 'Username' }), value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), h("ir-input-text", { key: '585550999a14c5eb56d955cd4b7aaf46cfbc9b45', testId: "password", autoValidate: this.user ? (!this.userInfo?.password ? false : true) : this.autoValidate, label: t('Lcz_Password', { fallback: 'Password' }), value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: this.errors?.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { key: '7993b82b32c5764e078287173032dad4cba0adfd', password: this.userInfo.password })), h("div", { key: 'a90ffd05c0b00bbdc01447e27cbb5c7017608c42', class: "sheet-footer" }, h("ir-button", { key: '03d4f2648dae0f5b2184acf16429d17459e6607e', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: t('Lcz_Cancel', { fallback: 'Cancel' }) }), h("ir-button", { key: 'cf9d8f094adf87d8696285fa42f11cab4c42f2cf', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", text: t('Lcz_Save', { fallback: 'Save' }) }))));
    }
};
IrHkUser.style = irHkUserCss() + sheetCss();

export { IrHkUser as ir_hk_user };
