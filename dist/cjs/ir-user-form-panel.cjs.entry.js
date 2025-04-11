'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');
const locales_store = require('./locales.store-0cac7e5d.js');
const index$1 = require('./index-db8b30d9.js');
const housekeeping_service = require('./housekeeping.service-c883b967.js');
const constants = require('./constants-abd1d7db.js');
const user_service = require('./user.service-394b3c07.js');
const calendarData = require('./calendar-data-719ef4f7.js');
require('./index-467172e1.js');
require('./axios-6e678d52.js');

const irUserFormPanelCss = "";
const IrUserFormPanelStyle0 = irUserFormPanelCss;

const sheetCss = ".sc-ir-user-form-panel-h{height:100%}.sheet-container.sc-ir-user-form-panel{display:flex !important;flex-direction:column !important;background:white;height:100% !important;gap:1rem}.sheet-footer.sc-ir-user-form-panel{position:sticky;bottom:0;z-index:20;background:white;border-top:1px solid #e4e5ec;display:flex;flex-direction:column;padding:1rem;gap:0.5rem}.sheet-header.sc-ir-user-form-panel{position:sticky;top:0;z-index:10;background:white}.sheet-body.sc-ir-user-form-panel{flex:1 1 0%}@media (min-width: 768px){.sheet-footer.sc-ir-user-form-panel{flex-direction:row;align-items:center}}";
const IrUserFormPanelStyle1 = sheetCss;

const IrUserFormPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
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
        this.housekeepingService = new housekeeping_service.HouseKeepingService();
        this.disableFields = false;
        this.mobileMask = {};
        this.userSchema = index$1.z.object({
            name: index$1.z.string().min(2),
            mobile: index$1.z.string().min(1).max(14),
            email: index$1.z.string().email(),
            password: index$1.z
                .string()
                .nullable()
                // .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+]).{8,16}$/)
                .refine(password => {
                var _a;
                if (this.user && !((_a = this.userInfo) === null || _a === void 0 ? void 0 : _a.password)) {
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
            mask: `{${calendarData.calendar_data.country.phone_prefix}} 000000000000`,
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
        var _a, _b, _c, _d, _e, _f;
        return (index.h("form", { key: '9035d1488d4076345054c683358667c4c3150fec', class: "sheet-container", onSubmit: async (e) => {
                e.preventDefault();
                await this.addUser();
            } }, index.h("ir-title", { key: 'f97f030c0d1d2439808e8aa44a465fff928497e3', class: "px-1 sheet-header", displayContext: "sidebar", label: this.isEdit ? 'Edit User' : 'Create New User' }), index.h("section", { key: '8d3e1ddb132f1fb9ab120b295f6bf1ccaa04588b', class: "px-1 sheet-body" }, index.h("ir-input-text", { key: '86f0e394dad875e57a101b1513f16c8992fbad65', testId: "email", zod: this.userSchema.pick({ email: true }), wrapKey: "email", autoValidate: this.autoValidate, error: (_a = this.errors) === null || _a === void 0 ? void 0 : _a.email, label: locales_store.locales.entries.Lcz_Email, placeholder: "", onTextChange: e => this.updateUserField('email', e.detail), value: this.userInfo.email, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), index.h("ir-input-text", { key: '38e0384542f929d475637ba82cdbd2581d4aaba8', testId: "mobile", disabled: this.disableFields, zod: this.userSchema.pick({ mobile: true }), wrapKey: "mobile", error: (_b = this.errors) === null || _b === void 0 ? void 0 : _b.mobile, asyncParse: true, autoValidate: this.user ? (((_c = this.userInfo) === null || _c === void 0 ? void 0 : _c.mobile) !== this.user.mobile ? true : false) : this.autoValidate, label: "Mobile", mask: this.mobileMask, placeholder: '', value: this.userInfo.mobile, onTextChange: e => this.updateUserField('mobile', e.detail) }), index.h("div", { key: '26a146c88f773b2ad1451c487951fe82b4da37f3', class: "mb-1" }, index.h("ir-select", { key: 'caec2c5989b703c4e98a23ec90f9c15f70ac6bfa', disabled: this.disableFields, label: "Role", data: [
                { text: 'Admin', value: '1' },
                { text: 'Frontdesk', value: '2' },
            ], selectedValue: this.userInfo.role, onSelectChange: e => this.updateUserField('role', e.detail) })), index.h("ir-input-text", { key: 'b2e3b2eec7f72d3c9180f04d9a2b8a534e334edb', testId: "name", zod: this.userSchema.pick({ name: true }), wrapKey: "name", autoValidate: this.autoValidate, error: (_d = this.errors) === null || _d === void 0 ? void 0 : _d.name, label: "Username", disabled: this.disableFields, placeholder: "", onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this), maxLength: 40 }), index.h("ir-input-text", { key: '71054de9462e4a3a8cd8c21d951bfea4efeb4fe6', testId: "password", autoValidate: this.user ? (!((_e = this.userInfo) === null || _e === void 0 ? void 0 : _e.password) ? false : true) : this.autoValidate, label: 'Password', value: this.userInfo.password, type: "password", maxLength: 16, zod: this.userSchema.pick({ password: true }), wrapKey: "password", error: (_f = this.errors) === null || _f === void 0 ? void 0 : _f.password, onInputFocus: () => (this.showPasswordValidation = true), onInputBlur: () => {
                // if (this.user) this.showPasswordValidation = false;
            }, onTextChange: e => this.updateUserField('password', e.detail) }), this.showPasswordValidation && index.h("ir-password-validator", { key: '74a34e7a27dd99a641e58990bf1726e069a668c5', class: "mb-1", password: this.userInfo.password })), index.h("div", { key: '24689664b7e92565b6de6ef0478e4b7aaae3bf69', class: "sheet-footer" }, index.h("ir-button", { key: '76a5595789a2edda90f0ef6558ff9720c5024bcd', "data-testid": "cancel", onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: '767e1d96c25fcfa5ecac4c5aeee4609226ab72f6', "data-testid": "save", isLoading: this.isLoading, class: "flex-fill", btn_type: "submit", btn_styles: "w-100 justify-content-center align-items-center", text: locales_store.locales.entries.Lcz_Save }))));
    }
};
IrUserFormPanel.style = IrUserFormPanelStyle0 + IrUserFormPanelStyle1;

exports.ir_user_form_panel = IrUserFormPanel;

//# sourceMappingURL=ir-user-form-panel.cjs.entry.js.map