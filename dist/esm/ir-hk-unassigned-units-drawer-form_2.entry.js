import { r as registerInstance, c as createEvent, h, F as Fragment } from './index-7e96440e.js';
import { H as HouseKeepingService, h as housekeeping_store, g as getDefaultProperties } from './housekeeping.service-0e645d86.js';
import { c as calendar_data } from './calendar-data-b1f645da.js';
import { l as locales } from './locales.store-cb784e95.js';
import { B as BookingService } from './booking.store-40689a02.js';
import { U as UserService } from './user.service-3488d732.js';
import { C as CONSTANTS } from './constants-1510e43f.js';
import { z } from './index-87419685.js';
import './index-f100e9d2.js';
import './axios-aa1335b8.js';
import './utils-046c6412.js';
import './moment-ab846cee.js';
import './type-501de9b6.js';

const irHkUnassignedUnitsDrawerFormCss = ".sc-ir-hk-unassigned-units-drawer-form-h{display:block;min-width:20rem;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}table.sc-ir-hk-unassigned-units-drawer-form{width:100%}td.sc-ir-hk-unassigned-units-drawer-form{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units-drawer-form:last-child{text-align:end}.title.sc-ir-hk-unassigned-units-drawer-form{min-width:230px !important}";
const IrHkUnassignedUnitsDrawerFormStyle0 = irHkUnassignedUnitsDrawerFormCss;

const IrHkUnassignedUnitsDrawerForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.resetData = createEvent(this, "resetData", 7);
    }
    formId;
    user = null;
    renderAgain = false;
    closeSideBar;
    resetData;
    assignedUnits = new Map();
    housekeepingService = new HouseKeepingService();
    assignUnit(unit_id, hk_id, checked) {
        if (this.user) {
            const userUnit = this.user.assigned_units.find(unit => unit.id === unit_id);
            if ((checked && userUnit) || (!checked && !userUnit)) {
                this.assignedUnits.delete(unit_id);
            }
            else if (!checked && userUnit) {
                this.assignedUnits.set(unit_id, { hkm_id: hk_id, is_to_assign: false, unit_id });
            }
            else if (checked) {
                const assignment = {
                    hkm_id: hk_id,
                    is_to_assign: true,
                    unit_id,
                };
                this.assignedUnits.set(unit_id, assignment);
            }
        }
        else {
            if (this.assignedUnits.has(unit_id) && !hk_id) {
                this.assignedUnits.delete(unit_id);
                return;
            }
            else {
                this.assignedUnits.set(unit_id, {
                    hkm_id: hk_id,
                    is_to_assign: true,
                    unit_id,
                });
            }
        }
        this.renderAgain = !this.renderAgain;
    }
    async assignUnits() {
        try {
            await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_store.default_properties.property_id, [...this.assignedUnits.values()]);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.closeSideBar.emit(null);
        }
    }
    renderRooms() {
        if (!this.user) {
            return housekeeping_store.hk_criteria.units_assignments.unassigned_units?.map(unit => (h("tr", { key: unit.id }, h("td", { class: "" }, unit.name), h("td", { class: "sr-only" }), h("td", { class: "pl-1" }, h("ir-select", { onSelectChange: e => {
                    let hk_id = e.detail;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                }, data: housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })) })))));
        }
        return calendar_data.roomsInfo.map(roomType => {
            console.log(roomType);
            if (!roomType.is_active) {
                return null;
            }
            return roomType.physicalrooms?.map(physical_room => {
                if (!physical_room['is_active']) {
                    return null;
                }
                let taken = !housekeeping_store.hk_criteria.units_assignments.unassigned_units?.find(unit => unit.id.toString() === physical_room.id.toString());
                let housekeeper = [];
                const assignedRoom = this.assignedUnits.get(physical_room.id);
                if (assignedRoom && assignedRoom.is_to_assign) {
                    housekeeper = [this.user];
                    taken = true;
                }
                else {
                    if (taken) {
                        housekeeper = housekeeping_store.hk_criteria.housekeepers.filter(hk => hk.assigned_units.find(unit => unit.id === physical_room.id));
                    }
                }
                return (h("tr", { key: physical_room.id }, h("td", null, physical_room.name), h("td", null, taken ? housekeeper[0]?.name : ''), h("td", null, h("wa-switch", { defaultChecked: taken && housekeeper[0]?.id === this.user.id, checked: taken && housekeeper[0]?.id === this.user.id, onchange: e => {
                        const checked = e.target.checked;
                        this.assignUnit(physical_room.id, this.user.id, checked);
                    } }))));
            });
        });
    }
    render() {
        return (h("form", { key: '919c9fda105cc2053f745d92ea2eb47f9203c43d', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.assignUnits();
            } }, h("table", { key: 'eb42a86de6b0a527057f69b1bf4ccf23711730f0' }, h("thead", { key: '76d46de4bcc02dd8008c9c4169cb912504be2ee9' }, h("th", { key: '10ac7871ae87916433d1da117837825e5d2bb36e', class: "sr-only" }, locales.entries.Lcz_RoomName), h("th", { key: 'a2de8ee4b5c4e2ac1594d3263c88ae9d93e26160', class: "sr-only" }, locales.entries.Lcz_HousekeeperName), h("th", { key: 'ea8798f04da6b656adb6f5194dcdee346e95b052', class: "sr-only" }, locales.entries.Lcz_Actions)), h("tbody", { key: '712dab77e976b6db29c8cf5da46d6876b596692b' }, this.renderRooms()))));
    }
};
IrHkUnassignedUnitsDrawerForm.style = IrHkUnassignedUnitsDrawerFormStyle0;

const irHkUserDrawerFormCss = ".sc-ir-hk-user-drawer-form-h{display:block;height:100%}.hk-user-form.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;gap:1rem}.hk-user-form--password-change.sc-ir-hk-user-drawer-form{position:relative;height:100%;justify-content:center;align-items:center}.hk-user-form__back-btn.sc-ir-hk-user-drawer-form{position:absolute;top:0;left:0}.hk-user-form__password-fields.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;gap:1rem;width:100%;max-width:26rem}.hk-user-form__password-header.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;align-items:center;text-align:center;gap:0.5rem;margin-bottom:0.5rem}.hk-user-form__password-icon.sc-ir-hk-user-drawer-form{font-size:2.25rem;color:var(--wa-color-text-normal)}.hk-user-form__password-title.sc-ir-hk-user-drawer-form{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.hk-user-form__password-hint.sc-ir-hk-user-drawer-form{margin:0;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-text-normal);max-width:22rem}.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form{align-self:flex-end}.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form::part(base){padding:0;height:auto;width:fit-content}";
const IrHkUserDrawerFormStyle0 = irHkUserDrawerFormCss;

const nameSchema = z.string().min(2, 'Name must be at least 2 characters.');
const mobileSchema = z.string().min(1, 'Mobile is required.').max(14, 'Mobile must be at most 14 characters.');
const usernameBaseSchema = z.string().min(3, 'Username must be at least 3 characters.');
const IrHkUserDrawerForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData", 7);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.loadingChanged = createEvent(this, "loadingChanged", 7);
    }
    isEdit = false;
    user = null;
    formId;
    isPageLoading = false;
    autoValidate = false;
    showPasswordValidation = false;
    isChangingPassword = false;
    confirmPassword = '';
    countries = [];
    countryCode = '';
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
    resetData;
    closeSideBar;
    loadingChanged;
    housekeepingService = new HouseKeepingService();
    bookingService = new BookingService();
    // Stable schema references — closures read current `this` state at validation time.
    usernameSchema;
    passwordSchema;
    fullSchema;
    componentWillLoad() {
        this.init();
    }
    async init() {
        try {
            this.isPageLoading = true;
            const { language, property_id } = getDefaultProperties();
            if (!this.user) {
                this.userInfo['property_id'] = property_id;
            }
            if (this.user) {
                this.autoValidate = true;
                this.userInfo = { ...this.user, password: '' };
            }
            this.buildSchemas();
            const countries = await this.bookingService.getCountries(language);
            this.countries = countries;
            const propertyCountry = this.countries.find(c => c.id === calendar_data.country.id);
            if (!this.user) {
                this.countryCode = propertyCountry?.code ?? '';
                this.updateUserField('phone_prefix', propertyCountry.phone_prefix);
            }
            else if (this.user.phone_prefix) {
                const match = countries.find(c => c.phone_prefix === this.user.phone_prefix);
                this.countryCode = match?.code ?? calendar_data.country?.code ?? '';
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.isPageLoading = false;
        }
    }
    buildSchemas() {
        this.usernameSchema = usernameBaseSchema.refine(async (name) => {
            if (this.user && this.user.username === name)
                return true;
            if (name.length >= 3) {
                return !(await new UserService().checkUserExistence({ UserName: name }));
            }
            return true;
        }, { message: locales.entries.Lcz_UsernameAlreadyExists ?? 'Username already exists.' });
        this.passwordSchema = z
            .string()
            .nullable()
            .refine(password => {
            if (this.user && !this.userInfo?.password)
                return true;
            return CONSTANTS.PASSWORD.test(password);
        }, { message: 'Password must be at least 8 characters long.' });
        this.fullSchema = z.object({
            name: nameSchema,
            mobile: mobileSchema,
            password: this.passwordSchema,
            username: this.usernameSchema,
        });
    }
    updateUserField(key, value) {
        this.userInfo = { ...this.userInfo, [key]: value };
    }
    async addUser() {
        try {
            this.loadingChanged.emit(true);
            if (!this.autoValidate) {
                this.autoValidate = true;
            }
            if (this.isChangingPassword && this.confirmPassword !== this.userInfo.password)
                return;
            const toValidate = {
                ...this.userInfo,
                password: this.user && !this.isChangingPassword ? this.user.password : this.userInfo.password,
            };
            const result = await this.fullSchema.safeParseAsync(toValidate);
            if (!result.success)
                return;
            await this.housekeepingService.editExposedHKM(toValidate);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            this.loadingChanged.emit(false);
        }
    }
    cancelPasswordChange() {
        this.isChangingPassword = false;
        this.updateUserField('password', '');
        this.confirmPassword = '';
        this.showPasswordValidation = false;
    }
    async handleNameBlur(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (this.user || !this.userInfo.name)
            return;
        const username = await this.housekeepingService.generateUserName(this.userInfo.name);
        this.updateUserField('username', username);
    }
    renderPasswordChangeView() {
        return (h("form", { id: this.formId, class: "hk-user-form hk-user-form--password-change", onSubmit: e => {
                e.preventDefault();
                this.addUser();
            } }, h("ir-custom-button", { type: "button", class: "hk-user-form__back-btn", appearance: "plain", variant: "neutral", size: "small", onClickHandler: () => this.cancelPasswordChange() }, h("wa-icon", { name: "arrow-left", "aria-hidden": "true", style: { fontSize: '1rem' } })), h("div", { class: "hk-user-form__password-fields" }, h("div", { class: "hk-user-form__password-header" }, h("wa-icon", { name: "lock", class: "hk-user-form__password-icon" }), h("h4", { class: "hk-user-form__password-title" }, "Set New Password"), h("p", { class: "hk-user-form__password-hint" }, "Your new password must be different to previously used password")), h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { placeholder: "New password", value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && h("ir-password-validator", { password: this.userInfo.password }), h("ir-validator", { schema: z.string().refine(v => v === this.userInfo.password, { message: 'Passwords do not match.' }), value: this.confirmPassword, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { placeholder: "Confirm password", value: this.confirmPassword, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => (this.confirmPassword = e.detail) })))));
    }
    render() {
        if (this.isPageLoading) {
            return (h("div", { class: "drawer__loader-container" }, h("ir-spinner", null)));
        }
        if (this.user && this.isChangingPassword) {
            return this.renderPasswordChangeView();
        }
        return (h("form", { id: this.formId, class: "hk-user-form", onSubmit: e => {
                e.preventDefault();
                this.addUser();
            } }, h("ir-validator", { schema: nameSchema, value: this.userInfo.name, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { label: locales.entries.Lcz_Name, value: this.userInfo.name, maxlength: 40, "onText-change": (e) => this.updateUserField('name', e.detail), "onInput-blur": this.handleNameBlur.bind(this) })), h("ir-validator", { schema: mobileSchema, value: this.userInfo.mobile, valueEvent: "mobile-input-change", showErrorMessage: true }, h("ir-mobile-input", { label: locales.entries.Lcz_Mobile, value: this.userInfo.mobile, countryCode: this.countryCode, countries: this.countries, "onMobile-input-change": e => {
                this.updateUserField('phone_prefix', e.detail.country.phone_prefix);
                this.updateUserField('mobile', e.detail.value);
            } })), h("wa-textarea", { "data-testid": "note", maxlength: 250, size: "small", label: locales.entries.Lcz_Note, value: this.userInfo.note, defaultValue: this.userInfo.note, onchange: e => this.updateUserField('note', e.target.value) }), h("ir-validator", { schema: this.usernameSchema, value: this.userInfo.username, valueEvent: "text-change", asyncValidation: true, showErrorMessage: true }, h("ir-input", { label: locales.entries.Lcz_Username, value: this.userInfo.username, "onText-change": (e) => this.updateUserField('username', e.detail) })), !this.user ? (h(Fragment, null, h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { label: locales.entries.Lcz_Password, value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && h("ir-password-validator", { password: this.userInfo.password }))) : (h("wa-button", { size: "small", appearance: "plain", variant: "brand", type: "button", class: "hk-user-form__change-password-btn", onClick: () => (this.isChangingPassword = true) }, "Change Password"))));
    }
};
IrHkUserDrawerForm.style = IrHkUserDrawerFormStyle0;

export { IrHkUnassignedUnitsDrawerForm as ir_hk_unassigned_units_drawer_form, IrHkUserDrawerForm as ir_hk_user_drawer_form };

//# sourceMappingURL=ir-hk-unassigned-units-drawer-form_2.entry.js.map