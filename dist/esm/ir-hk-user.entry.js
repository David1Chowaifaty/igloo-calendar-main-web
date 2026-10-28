import { r as registerInstance, c as createEvent, h } from './index-DKZeCK8T.js';
import { H as HouseKeepingService, g as getDefaultProperties } from './index-BCFaKeiO.js';
import { U as UserService } from './user.service-cbn8DdPC.js';
import { c as calendar_data } from './calendar-data-DWzivSW-.js';
import { C as CONSTANTS } from './constants-DI4DZmiQ.js';
import { t } from './t-Bvz1wS_D.js';
import { o as objectType, s as stringType, Z as ZodError } from './types-CB66a07H.js';
import './locale-scope-Jre4lb6k.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-Cx9w9d8l.js';
import './utils-BQHfpbFq.js';
import './moment-Mki5YqAR.js';
import './booking.dto-DGwE7ON6.js';
import './type-9FR4Ndkd.js';
import './ir-date-XXNYhmSL.js';
import './language-observer-CHgzsZkY.js';
import './calendar-dates-D3hVfsrC.js';

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
        return (h("div", { key: '8e7e4cd38fcd407c67be30c9df33adf0ee1df9f9', class: "sheet-container" }, h("ir-title", { key: '5bd5a30fcb4351aa7e6523a7c444f9980da898c5', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? t('Lcz_EditHousekeeperProfile', { fallback: 'Edit Housekeeper Profile' }) : t('Lcz_CreateHousekeeperProfile', { fallback: 'Create housekeeper profile' }) }), h("section", { key: '7e126485da7389c6faceb7caf2b261aec5402427', class: "px-1 sheet-body" }, h("ir-input-text", { key: '9888069893514655e340ebdea0a93c98cfc1edb4', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: this.errors?.name, label: t('Lcz_Name', { fallback: 'Name' }), placeholder: t('Lcz_Name', { fallback: 'Name' }), onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), h("ir-phone-input", { key: 'b2b21f6b70fe7e0e9a49f4aabcc02ccea0fee7c4', testId: "phone", placeholder: t('Lcz_Mobile', { fallback: 'Mobile' }), error: this.errors?.mobile && !this.userInfo?.mobile, language: this.default_properties.language, ApiClient: this.default_properties.ApiClient, default_country: calendar_data.country.id, phone_prefix: this.user?.phone_prefix, label: t('Lcz_Mobile', { fallback: 'Mobile' }), value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), h("div", { key: '8177506e3fef5f32f40938e44dd421c7cf5c01a8', class: "mb-1" }, h("ir-textarea", { key: 'd559c92f533e7a50e972001e7807868f2827479f', testId: "note", variant: "prepend", maxLength: 250, label: t('Lcz_Note', { fallback: 'Note' }), placeholder: t('Lcz_Note', { fallback: 'Note' }), value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), h("ir-input-text", { key: 'aea050bfce50b0125c77c9cd8b96c7e2697ee194', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: this.errors?.username, asyncParse: true, autoValidate: this.user ? (this.userInfo?.username !== this.user.username ? true : false) : this.autoValidate, errorMessage: this.errors?.username && this.userInfo?.username?.length >= 3 ? t('Lcz_UsernameAlreadyExists', { fallback: 'Username already exists.' }) : undefined, label: t('Lcz_Username', { fallback: 'Username' }), placeholder: t('Lcz_Username', { fallback: 'Username' }), value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), h("ir-input-text", { key: 'b65cb4c30a0575be192701ad3e5bac5d999c2c01', testId: "password", autoValidate: this.user ? (!this.userInfo?.password ? false : true) : this.autoValidate, label: t('Lcz_Password', { fallback: 'Password' }), value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: this.errors?.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { key: '7e6aaf6d5c51b713273d4ce381cf19c3af2f940b', password: this.userInfo.password })), h("div", { key: 'c4f68e8bfa22d2000282cb3780b27ce3fa90c112', class: "sheet-footer" }, h("ir-button", { key: '740363187654abfc30264b3cfbd51e3483860653', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: t('Lcz_Cancel', { fallback: 'Cancel' }) }), h("ir-button", { key: '41a1c6ab9448bff6e51df31d7c77fe1524804718', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", text: t('Lcz_Save', { fallback: 'Save' }) }))));
    }
};
IrHkUser.style = irHkUserCss() + sheetCss();

export { IrHkUser as ir_hk_user };
