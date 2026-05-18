'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const housekeeping_service = require('./housekeeping.service-8d06557d.js');
const calendarData = require('./calendar-data-70bc3b4b.js');
const locales_store = require('./locales.store-32782582.js');
const booking_store = require('./booking.store-f9892617.js');
const user_service = require('./user.service-fc78a976.js');
const constants = require('./constants-abd1d7db.js');
const index$1 = require('./index-8bb117a0.js');
require('./index-fbf1fe1d.js');
require('./axios-6e678d52.js');
require('./utils-02561109.js');
require('./moment-1780b03a.js');
require('./type-87fd01b8.js');

const irHkUnassignedUnitsDrawerFormCss = ".sc-ir-hk-unassigned-units-drawer-form-h{display:block;min-width:20rem;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}table.sc-ir-hk-unassigned-units-drawer-form{width:100%}td.sc-ir-hk-unassigned-units-drawer-form{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units-drawer-form:last-child{text-align:end}.title.sc-ir-hk-unassigned-units-drawer-form{min-width:230px !important}";
const IrHkUnassignedUnitsDrawerFormStyle0 = irHkUnassignedUnitsDrawerFormCss;

const IrHkUnassignedUnitsDrawerForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
    }
    formId;
    user = null;
    renderAgain = false;
    closeSideBar;
    resetData;
    assignedUnits = new Map();
    housekeepingService = new housekeeping_service.HouseKeepingService();
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
            await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_service.housekeeping_store.default_properties.property_id, [...this.assignedUnits.values()]);
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
            return housekeeping_service.housekeeping_store.hk_criteria.units_assignments.unassigned_units?.map(unit => (index.h("tr", { key: unit.id }, index.h("td", { class: "" }, unit.name), index.h("td", { class: "sr-only" }), index.h("td", { class: "pl-1" }, index.h("ir-select", { onSelectChange: e => {
                    let hk_id = e.detail;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                }, data: housekeeping_service.housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })) })))));
        }
        return calendarData.calendar_data.roomsInfo.map(roomType => {
            console.log(roomType);
            if (!roomType.is_active) {
                return null;
            }
            return roomType.physicalrooms?.map(physical_room => {
                if (!physical_room['is_active']) {
                    return null;
                }
                let taken = !housekeeping_service.housekeeping_store.hk_criteria.units_assignments.unassigned_units?.find(unit => unit.id.toString() === physical_room.id.toString());
                let housekeeper = [];
                const assignedRoom = this.assignedUnits.get(physical_room.id);
                if (assignedRoom && assignedRoom.is_to_assign) {
                    housekeeper = [this.user];
                    taken = true;
                }
                else {
                    if (taken) {
                        housekeeper = housekeeping_service.housekeeping_store.hk_criteria.housekeepers.filter(hk => hk.assigned_units.find(unit => unit.id === physical_room.id));
                    }
                }
                return (index.h("tr", { key: physical_room.id }, index.h("td", null, physical_room.name), index.h("td", null, taken ? housekeeper[0]?.name : ''), index.h("td", null, index.h("wa-switch", { defaultChecked: taken && housekeeper[0]?.id === this.user.id, checked: taken && housekeeper[0]?.id === this.user.id, onchange: e => {
                        const checked = e.target.checked;
                        this.assignUnit(physical_room.id, this.user.id, checked);
                    } }))));
            });
        });
    }
    render() {
        return (index.h("form", { key: 'd601d151b32bccc68005a82d0d8a808cb8bc0c3a', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.assignUnits();
            } }, index.h("table", { key: 'f89b28efc9083b6d4a94f8d4dd4fcbbc5a64c088' }, index.h("thead", { key: '4e7c357c222df9c28419a1396696bf8a590266cf' }, index.h("th", { key: 'fdbc3054ff4ef8cd41ba3cd11c51166fd03c2daf', class: "sr-only" }, locales_store.locales.entries.Lcz_RoomName), index.h("th", { key: '55e14532bae5c2bb3fb7211570b6fd62f4c6632f', class: "sr-only" }, locales_store.locales.entries.Lcz_HousekeeperName), index.h("th", { key: 'baae8cf692aa9578d315618305e636221b04a503', class: "sr-only" }, locales_store.locales.entries.Lcz_Actions)), index.h("tbody", { key: '66d517dd554bfde076782eb37af68e122f16fbda' }, this.renderRooms()))));
    }
};
IrHkUnassignedUnitsDrawerForm.style = IrHkUnassignedUnitsDrawerFormStyle0;

const irHkUserDrawerFormCss = ".sc-ir-hk-user-drawer-form-h{display:block;height:100%}.hk-user-form.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;gap:1rem}.hk-user-form--password-change.sc-ir-hk-user-drawer-form{position:relative;height:100%;justify-content:center;align-items:center}.hk-user-form__back-btn.sc-ir-hk-user-drawer-form{position:absolute;top:0;left:0}.hk-user-form__password-fields.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;gap:1rem;width:100%;max-width:26rem}.hk-user-form__password-header.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;align-items:center;text-align:center;gap:0.5rem;margin-bottom:0.5rem}.hk-user-form__password-icon.sc-ir-hk-user-drawer-form{font-size:2.25rem;color:var(--wa-color-text-normal)}.hk-user-form__password-title.sc-ir-hk-user-drawer-form{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.hk-user-form__password-hint.sc-ir-hk-user-drawer-form{margin:0;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-text-normal);max-width:22rem}.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form{align-self:flex-end}.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form::part(base){padding:0;height:auto;width:fit-content}";
const IrHkUserDrawerFormStyle0 = irHkUserDrawerFormCss;

const nameSchema = index$1.z.string().min(2, 'Name must be at least 2 characters.');
const mobileSchema = index$1.z.string().min(1, 'Mobile is required.').max(14, 'Mobile must be at most 14 characters.');
const usernameBaseSchema = index$1.z.string().min(3, 'Username must be at least 3 characters.');
const IrHkUserDrawerForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.loadingChanged = index.createEvent(this, "loadingChanged", 7);
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
    housekeepingService = new housekeeping_service.HouseKeepingService();
    bookingService = new booking_store.BookingService();
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
            const { language, property_id } = housekeeping_service.getDefaultProperties();
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
            const propertyCountry = this.countries.find(c => c.id === calendarData.calendar_data.country.id);
            if (!this.user) {
                this.countryCode = propertyCountry?.code ?? '';
                this.updateUserField('phone_prefix', propertyCountry.phone_prefix);
            }
            else if (this.user.phone_prefix) {
                const match = countries.find(c => c.phone_prefix === this.user.phone_prefix);
                this.countryCode = match?.code ?? calendarData.calendar_data.country?.code ?? '';
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
                return !(await new user_service.UserService().checkUserExistence({ UserName: name }));
            }
            return true;
        }, { message: locales_store.locales.entries.Lcz_UsernameAlreadyExists ?? 'Username already exists.' });
        this.passwordSchema = index$1.z
            .string()
            .nullable()
            .refine(password => {
            if (this.user && !this.userInfo?.password)
                return true;
            return constants.CONSTANTS.PASSWORD.test(password);
        }, { message: 'Password must be at least 8 characters long.' });
        this.fullSchema = index$1.z.object({
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
        return (index.h("form", { id: this.formId, class: "hk-user-form hk-user-form--password-change", onSubmit: e => {
                e.preventDefault();
                this.addUser();
            } }, index.h("ir-custom-button", { type: "button", class: "hk-user-form__back-btn", appearance: "plain", variant: "neutral", size: "small", onClickHandler: () => this.cancelPasswordChange() }, index.h("wa-icon", { name: "arrow-left", "aria-hidden": "true", style: { fontSize: '1rem' } })), index.h("div", { class: "hk-user-form__password-fields" }, index.h("div", { class: "hk-user-form__password-header" }, index.h("wa-icon", { name: "lock", class: "hk-user-form__password-icon" }), index.h("h4", { class: "hk-user-form__password-title" }, "Set New Password"), index.h("p", { class: "hk-user-form__password-hint" }, "Your new password must be different to previously used password")), index.h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, index.h("ir-input", { placeholder: "New password", value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && index.h("ir-password-validator", { password: this.userInfo.password }), index.h("ir-validator", { schema: index$1.z.string().refine(v => v === this.userInfo.password, { message: 'Passwords do not match.' }), value: this.confirmPassword, valueEvent: "text-change", showErrorMessage: true }, index.h("ir-input", { placeholder: "Confirm password", value: this.confirmPassword, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => (this.confirmPassword = e.detail) })))));
    }
    render() {
        if (this.isPageLoading) {
            return (index.h("div", { class: "drawer__loader-container" }, index.h("ir-spinner", null)));
        }
        if (this.user && this.isChangingPassword) {
            return this.renderPasswordChangeView();
        }
        return (index.h("form", { id: this.formId, class: "hk-user-form", onSubmit: e => {
                e.preventDefault();
                this.addUser();
            } }, index.h("ir-validator", { schema: nameSchema, value: this.userInfo.name, valueEvent: "text-change", showErrorMessage: true }, index.h("ir-input", { label: locales_store.locales.entries.Lcz_Name, value: this.userInfo.name, maxlength: 40, "onText-change": (e) => this.updateUserField('name', e.detail), "onInput-blur": this.handleNameBlur.bind(this) })), index.h("ir-validator", { schema: mobileSchema, value: this.userInfo.mobile, valueEvent: "mobile-input-change", showErrorMessage: true }, index.h("ir-mobile-input", { label: locales_store.locales.entries.Lcz_Mobile, value: this.userInfo.mobile, countryCode: this.countryCode, countries: this.countries, "onMobile-input-change": e => {
                this.updateUserField('phone_prefix', e.detail.country.phone_prefix);
                this.updateUserField('mobile', e.detail.value);
            } })), index.h("wa-textarea", { "data-testid": "note", maxlength: 250, size: "small", label: locales_store.locales.entries.Lcz_Note, value: this.userInfo.note, defaultValue: this.userInfo.note, onchange: e => this.updateUserField('note', e.target.value) }), index.h("ir-validator", { schema: this.usernameSchema, value: this.userInfo.username, valueEvent: "text-change", asyncValidation: true, showErrorMessage: true }, index.h("ir-input", { label: locales_store.locales.entries.Lcz_Username, value: this.userInfo.username, "onText-change": (e) => this.updateUserField('username', e.detail) })), !this.user ? (index.h(index.Fragment, null, index.h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, index.h("ir-input", { label: locales_store.locales.entries.Lcz_Password, value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && index.h("ir-password-validator", { password: this.userInfo.password }))) : (index.h("wa-button", { size: "small", appearance: "plain", variant: "brand", type: "button", class: "hk-user-form__change-password-btn", onClick: () => (this.isChangingPassword = true) }, "Change Password"))));
    }
};
IrHkUserDrawerForm.style = IrHkUserDrawerFormStyle0;

exports.ir_hk_unassigned_units_drawer_form = IrHkUnassignedUnitsDrawerForm;
exports.ir_hk_user_drawer_form = IrHkUserDrawerForm;

//# sourceMappingURL=ir-hk-unassigned-units-drawer-form_2.cjs.entry.js.map