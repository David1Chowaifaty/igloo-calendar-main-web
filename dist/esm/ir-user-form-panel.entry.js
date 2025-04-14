import { r as registerInstance, c as createEvent, h } from './index-0a4a209a.js';
import { l as locales } from './locales.store-53ec3957.js';
import { z, Z as ZodError } from './index-502f9842.js';
import { H as HouseKeepingService } from './housekeeping.service-64b661f9.js';
import { C as CONSTANTS } from './constants-1510e43f.js';
import { U as UserService } from './user.service-39ab9b0c.js';
import { c as calendar_data } from './calendar-data-5d531f99.js';
import './index-c1c77241.js';
import './axios-aa1335b8.js';

const irUserFormPanelCss = "";
const IrUserFormPanelStyle0 = irUserFormPanelCss;

const sheetCss = ".sc-ir-user-form-panel-h{height:100%}.sheet-container.sc-ir-user-form-panel{display:flex !important;flex-direction:column !important;background:white;height:100% !important;gap:1rem}.sheet-footer.sc-ir-user-form-panel{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-user-form-panel{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-user-form-panel{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-user-form-panel{flex-direction:row;align-items:center}}";
const IrUserFormPanelStyle1 = sheetCss;

const IrUserFormPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData", 7);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.isEdit = false;
        this.language = 'en';
        this.isLoading = false;
        this.autoValidate = false;
        this.userInfo = {
            id: -1,
            is_active: false,
            last_signed_in: '',
            created_at: '',
            mobile: '',
            name: '',
            note: '',
            password: '',
            email: '',
            property_id: null,
            username: null,
            phone_prefix: null,
        };
        this.errors = null;
        this.showPasswordValidation = false;
        this.housekeepingService = new HouseKeepingService();
        this.disableFields = false;
        this.mobileMask = {};
        this.userSchema = z.object({
            name: z.string().min(2),
            mobile: z.string().min(1).max(14),
            email: z.string().email(),
            password: z
                .string()
                .nullable()
                // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
                .refine(password => {
                var _a;
                if (this.user && !((_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.password)) {
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
    }
    async componentWillLoad() {
        if (!this.user) {
            this.userInfo['property_id'] = this.property_id;
            // this.showPasswordValidation = true;
        }
        if (this.user) {
            this.autoValidate = true;
            this.userInfo = Object.assign(Object.assign({}, this.user), { password: '' });
            this.disableFields = this.isSuperAdmin;
        }
        this.mobileMask = {
            mask: `{${calendar_data.country.phone_prefix}} 000000000000`,
            lazy: false,
            autofix: true,
            placeholderChar: '\u200B',
        };
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
            await this.userSchema.parseAsync(toValidateUserInfo);
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
        var _a, _b, _c, _d, _e, _f;
        return (h("form", { key: 'bed2d89c26ac3fa6b61c111536550b4bd0c165ef', class: "sheet-container", onSubmit: async (e) => {
                e.preventDefault();
                await this.addUser();
            } }, h("ir-title", { key: 'bf3e0e59c6c176f28545f6469d69ee7b4f4ee792', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? 'Edit User' : 'Create New User' }), h("section", { key: '93f677fac524a4bb7acfe0c522c0290e8235ecd1', class: "px-1 sheet-body" }, h("ir-input-text", { key: 'ff871c8e6434e50d874ff9b6033ef0ff2f6578fd', testId: "email", zod: this.userSchema.pick({ email: true }), wrapKey: "email", autoValidate: this.autoValidate, error: (_a = this.errors) === null || _a === void 0 ? void 0 : _a.email, label: locales.entries.Lcz_Email, placeholder: "", onTextChange: e => this.updateUserField('email', e.detail), value: this.userInfo.email, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), h("ir-input-text", { key: 'de99b169eab8ddc38b16bc9922a9acbd36e0069f', testId: "mobile", disabled: this.disableFields, zod: this.userSchema.pick({ mobile: true }), wrapKey: "mobile", error: (_b = this.errors) === null || _b === void 0 ? void 0 : _b.mobile, asyncParse: true, autoValidate: this.user ? (((_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.mobile) !== this.user.mobile ? true : false) : this.autoValidate, label: "Mobile", mask: this.mobileMask, placeholder: '', value: this.userInfo.mobile, onTextChange: e => this.updateUserField('mobile', e.detail) }), h("div", { key: '20886defe048ece15473a64454ee2fc967c0fc35', class: "mb-1" }, h("ir-select", { key: 'fb4bce94a481f350085b4f0126debcaf5eef4145', disabled: this.disableFields, label: "Role", data: [
                { text: 'Admin', value: '1' },
                { text: 'Frontdesk', value: '2' },
            ], selectedValue: this.userInfo.role, onSelectChange: e => this.updateUserField('role', e.detail) })), h("ir-input-text", { key: 'f45daa9cc137a7806d1c1cc3df53ae0c9053bdfa', testId: "name", zod: this.userSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: (_d = this.errors) === null || _d === void 0 ? void 0 : _d.name, label: "Username", disabled: this.disableFields, placeholder: "", onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), h("ir-input-text", { key: '2117beab8544591f970806bc1f219cc930543dc7', testId: "password", autoValidate: this.user ? (!((_e = this.userInfo) === null || _e === void 0 ? void 0 : _e.password) ? false : true) : this.autoValidate, label: 'Password', value: this.userInfo.password, type: "password", maxLength: 16, zod: this.userSchema.pick({ password: true }), wrapKey: "password", error: (_f = this.errors) === null || _f === void 0 ? void 0 : _f.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && h("ir-password-validator", { key: 'bd6e3905836e643edd8645f159a9cc3fbd73e5df', class: "mb-1", password: this.userInfo.password })), h("div", { key: 'd2db6632edac9c24da4bbd56eb82221d552a700e', class: "sheet-footer" }, h("ir-button", { key: 'a9cf387ac5f0db3142d9a7b8bc40d0d3404664f1', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: 'd94e01aaa7c47e76f5016a22d3b745c08fa35650', "data-testid": "save", isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales.entries.Lcz_Save }))));
    }
};
IrUserFormPanel.style = IrUserFormPanelStyle0 + IrUserFormPanelStyle1;

export { IrUserFormPanel as ir_user_form_panel };

//# sourceMappingURL=ir-user-form-panel.entry.js.map