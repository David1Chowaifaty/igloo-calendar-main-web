import { r as registerInstance, c as createEvent, h } from './index-D7D7fhZS.js';
import { H as HouseKeepingService, g as getDefaultProperties } from './housekeeping.service-I641YNVz.js';
import { U as UserService } from './user.service-Bvb1PhLE.js';
import { c as calendar_data } from './calendar-data-15-64PrB.js';
import { l as locales } from './locales.store-C0aS6UDK.js';
import { C as CONSTANTS } from './constants-DI4DZmiQ.js';
import { l as libExports } from './index-DeW5X45W.js';
import './index-TzZ5wfUy.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './utils-DvzWTdKJ.js';
import './moment-Mki5YqAR.js';
import './type-D7rOPtKA.js';

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
        token: '',
        language: '',
    };
    housekeeperSchema = libExports.z.object({
        name: libExports.z.string().min(2),
        mobile: libExports.z.string().min(1).max(14),
        password: libExports.z
            .string()
            .nullable()
            // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
            .refine(password => {
            if (this.user && !this.userInfo?.password) {
                return true;
            }
            return CONSTANTS.PASSWORD.test(password);
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
        return (h("div", { key: '12d5c767424ca5a2b69a17da3a0d60cc620a53bf', class: "sheet-container" }, h("ir-title", { key: '64b3836736eada0bec9e200e848a871a59a02b06', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? locales.entries.Lcz_EditHousekeeperProfile : locales.entries.Lcz_CreateHousekeeperProfile }), h("section", { key: '406a0cad7c7d3d717d74d7d24ea74b4b682a564e', class: "px-1 sheet-body" }, h("ir-input-text", { key: 'f0ba5fc3c8a0f5a52110e2417c2d7fb62330ff26', testId: "name", zod: this.housekeeperSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: this.errors?.name, label: locales.entries.Lcz_Name, placeholder: locales.entries.Lcz_Name, onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), h("ir-phone-input", { key: '02bda3ce8b24432b7502d74c9fd479f303a85d04', testId: "phone", placeholder: locales.entries.Lcz_Mobile, error: this.errors?.mobile && !this.userInfo?.mobile, language: this.default_properties.language, token: this.default_properties.token, default_country: calendar_data.country.id, phone_prefix: this.user?.phone_prefix, label: locales.entries.Lcz_Mobile, value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), h("div", { key: '3a50cb8103a9da1cdcc53707b506b1a511149757', class: "mb-1" }, h("ir-textarea", { key: '702b042f84704564942cdc7d82588b25dee660e7', testId: "note", variant: "prepend", maxLength: 250, label: locales.entries.Lcz_Note, placeholder: locales.entries.Lcz_Note, value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) })), h("ir-input-text", { key: 'e4420ba53e39960c7c5715bc31360ea90d284aba', testId: "username", zod: this.housekeeperSchema.pick({ username: true }), wrapKey: "username", error: this.errors?.username, asyncParse: true, autoValidate: this.user ? (this.userInfo?.username !== this.user.username ? true : false) : this.autoValidate, errorMessage: this.errors?.username && this.userInfo?.username?.length >= 3 ? locales.entries.Lcz_UsernameAlreadyExists : undefined, label: locales.entries.Lcz_Username, placeholder: locales.entries.Lcz_Username, value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), h("ir-input-text", { key: '2e362e075285f20b1c5d9f6f1d837410e9583b95', testId: "password", autoValidate: this.user ? (!this.userInfo?.password ? false : true) : this.autoValidate, label: locales.entries.Lcz_Password, value: this.userInfo.password, type: "password", maxLength: 16, zod: this.housekeeperSchema.pick({ password: true }), wrapKey: "password", error: this.errors?.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { key: 'f479d18b28bcf90878d29701aac5f17a1d546a62', password: this.userInfo.password })), h("div", { key: '8edd507ced5db0cb2196f4517e3a3d10af90cd48', class: "sheet-footer" }, h("ir-button", { key: '93d12275f070f0e79357dd55c5706790d1a180e0', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: '21a5ad4845d790d3f59e888bde4a488bbc3fde10', "data-testid": "save", isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_Save }))));
    }
};
IrHkUser.style = irHkUserCss() + sheetCss();

export { IrHkUser as ir_hk_user };
