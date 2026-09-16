'use strict';

var index = require('./index-CQkpA5n3.js');
var housekeeping_service = require('./housekeeping.service-cmRKpiFE.js');
var calendarData = require('./calendar-data-UPPAEVR_.js');
var t = require('./t-CyRK1btk.js');
var booking_service = require('./booking.service-Bv48F_fn.js');
var user_service = require('./user.service-CGBVHRB3.js');
var constants = require('./constants-BLID23LD.js');
var types = require('./types-BVJQZ50e.js');
require('./locales.store-BMTss6fG.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./IBooking-hDE_y33g.js');
require('./utils-oNe0zJBw.js');
require('./moment-CdViwxPQ.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./ir-date-BZLsqCOc.js');
require('./language-observer-DKp37LIu.js');
require('./booking-BRIBt8TB.js');
require('./functions-CsGCS8vQ.js');
require('./commonSchemas-rhaJ5cvr.js');

const irHkUnassignedUnitsDrawerFormCss = () => `.sc-ir-hk-unassigned-units-drawer-form-h{display:block;min-width:20rem;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2;text-align:start !important}table.sc-ir-hk-unassigned-units-drawer-form{width:100%}td.sc-ir-hk-unassigned-units-drawer-form{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units-drawer-form:last-child{text-align:end}.title.sc-ir-hk-unassigned-units-drawer-form{min-width:230px !important}.ir-ps-1.sc-ir-hk-unassigned-units-drawer-form{padding-inline-start:0.25rem}`;

const IrHkUnassignedUnitsDrawerForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar");
        this.resetData = index.createEvent(this, "resetData");
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
            return housekeeping_service.housekeeping_store.hk_criteria.units_assignments.unassigned_units?.map(unit => (index.h("tr", { key: unit.id }, index.h("td", { class: "" }, unit.name), index.h("td", { class: "sr-only" }), index.h("td", { class: "ir-ps-1" }, index.h("wa-select", { size: "s", style: { textAlign: 'start' }, placeholder: t.t('Lcz_Select', { fallback: 'Select' }), onchange: e => {
                    let hk_id = e.target.value;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                } }, housekeeping_service.housekeeping_store.hk_criteria.housekeepers.map(hk => (index.h("wa-option", { key: hk.id, value: hk.id?.toString() }, hk.name))))))));
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
        return (index.h("form", { key: '00429912cdf12f0fa80a1791a5dc4fcc63931987', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.assignUnits();
            } }, index.h("table", { key: '7f8687b80974a45d91c64cba1be4de14d5f15f99' }, index.h("thead", { key: '82a98b42bb23d5d5cf623d2e33b8727d10af9a21' }, index.h("th", { key: '6acfeb71e547121154b3a8d014fe85402e362559', class: "sr-only" }, t.t('Lcz_RoomName', { fallback: 'room name' })), index.h("th", { key: '47e473e2f411ea78fd2de13303b3dc601fbd0964', class: "sr-only" }, t.t('Lcz_HousekeeperName', { fallback: 'housekeeper name' })), index.h("th", { key: '91e8a5fe2a32336d58848de878318e07409839b5', class: "sr-only" }, t.t('Lcz_Actions', { fallback: 'Actions' }))), index.h("tbody", { key: 'b679684342462557894faf0106e0256fab0f0fbf' }, this.renderRooms()))));
    }
};
IrHkUnassignedUnitsDrawerForm.style = irHkUnassignedUnitsDrawerFormCss();

const irHkUserDrawerFormCss = () => `.sc-ir-hk-user-drawer-form-h{display:block;height:100%}.hk-user-form.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;gap:1rem}.hk-user-form--password-change.sc-ir-hk-user-drawer-form{position:relative;height:100%;justify-content:center;align-items:center}.hk-user-form__back-btn.sc-ir-hk-user-drawer-form{position:absolute;top:0;inset-inline-start:0}.hk-user-form__password-fields.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;gap:1rem;width:100%;max-width:26rem}.hk-user-form__password-header.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;align-items:center;text-align:center;gap:0.5rem;margin-bottom:0.5rem}.hk-user-form__password-icon.sc-ir-hk-user-drawer-form{font-size:2.25rem;color:var(--wa-color-text-normal)}.hk-user-form__password-title.sc-ir-hk-user-drawer-form{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.hk-user-form__password-hint.sc-ir-hk-user-drawer-form{margin:0;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-text-normal);max-width:22rem}.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form{align-self:flex-end}.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form::part(base),.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form [part~="base"]{padding:0;height:auto;width:fit-content}.ir-flip-rtl.sc-ir-hk-user-drawer-form:dir(rtl){scale:-1 1}`;

const nameSchema = types.stringType().min(2, t.t('Lcz_NameMinLength', { fallback: 'Name must be at least 2 characters.' }));
const mobileSchema = types.stringType()
    .min(1, t.t('Lcz_MobileRequired', { fallback: 'Mobile is required.' }))
    .max(14, t.t('Lcz_MobileMaxLength', { fallback: 'Mobile must be at most 14 characters.' }));
const usernameBaseSchema = types.stringType().min(3, t.t('Lcz_UsernameMinLength', { fallback: 'Username must be at least 3 characters.' }));
const IrHkUserDrawerForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData");
        this.closeSideBar = index.createEvent(this, "closeSideBar");
        this.loadingChanged = index.createEvent(this, "loadingChanged");
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
    bookingService = new booking_service.BookingService();
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
        }, { message: t.t('Lcz_UsernameAlreadyExists', { fallback: 'Username already exists.' }) });
        this.passwordSchema = types.stringType()
            .nullable()
            .refine(password => {
            if (this.user && !this.userInfo?.password)
                return true;
            return constants.CONSTANTS.PASSWORD.test(password);
        }, { message: t.t('Lcz_PasswordMinLength', { fallback: 'Password must be at least 8 characters long.' }) });
        this.fullSchema = types.objectType({
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
            } }, index.h("ir-custom-button", { type: "button", class: "hk-user-form__back-btn", appearance: "plain", variant: "neutral", size: "s", onClickHandler: () => this.cancelPasswordChange() }, index.h("wa-icon", { class: "ir-flip-rtl", name: "arrow-left", "aria-hidden": "true", style: { fontSize: '1rem' } })), index.h("div", { class: "hk-user-form__password-fields" }, index.h("div", { class: "hk-user-form__password-header" }, index.h("wa-icon", { name: "lock", class: "hk-user-form__password-icon" }), index.h("h4", { class: "hk-user-form__password-title" }, "Set New Password"), index.h("p", { class: "hk-user-form__password-hint" }, t.t('Lcz_NewPasswordMustBeDifferent', { fallback: 'Your new password must be different to previously used password' }))), index.h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, index.h("ir-input", { placeholder: t.t('Lcz_NewPassword', { fallback: 'New password' }), value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && index.h("ir-password-validator", { password: this.userInfo.password }), index.h("ir-validator", { schema: types.stringType().refine(v => v === this.userInfo.password, { message: t.t('Lcz_PasswordsDoNotMatch', { fallback: 'Passwords do not match.' }) }), value: this.confirmPassword, valueEvent: "text-change", showErrorMessage: true }, index.h("ir-input", { placeholder: t.t('Lcz_ConfirmPassword', { fallback: 'Confirm password' }), value: this.confirmPassword, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => (this.confirmPassword = e.detail) })))));
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
            } }, index.h("ir-validator", { schema: nameSchema, value: this.userInfo.name, valueEvent: "text-change", showErrorMessage: true }, index.h("ir-input", { label: t.t('Lcz_Name', { fallback: 'Name' }), value: this.userInfo.name, maxlength: 40, "onText-change": (e) => this.updateUserField('name', e.detail), "onInput-blur": this.handleNameBlur.bind(this) })), index.h("ir-validator", { schema: mobileSchema, value: this.userInfo.mobile, valueEvent: "mobile-input-change", showErrorMessage: true }, index.h("ir-mobile-input", { label: t.t('Lcz_Mobile', { fallback: 'Mobile' }), value: this.userInfo.mobile, countryCode: this.countryCode, countries: this.countries, "onMobile-input-change": e => {
                this.updateUserField('phone_prefix', e.detail.country.phone_prefix);
                this.updateUserField('mobile', e.detail.value);
            } })), index.h("wa-textarea", { "data-testid": "note", maxlength: 250, size: "s", label: t.t('Lcz_Note', { fallback: 'Note' }), value: this.userInfo.note, defaultValue: this.userInfo.note, onchange: e => this.updateUserField('note', e.target.value) }), index.h("ir-validator", { schema: this.usernameSchema, value: this.userInfo.username, valueEvent: "text-change", asyncValidation: true, showErrorMessage: true }, index.h("ir-input", { label: t.t('Lcz_Username', { fallback: 'Username' }), value: this.userInfo.username, "onText-change": (e) => this.updateUserField('username', e.detail) })), !this.user ? (index.h(index.Fragment, null, index.h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, index.h("ir-input", { label: t.t('Lcz_Password', { fallback: 'Password' }), value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && index.h("ir-password-validator", { password: this.userInfo.password }))) : (index.h("wa-button", { size: "s", appearance: "plain", variant: "brand", type: "button", class: "hk-user-form__change-password-btn", onClick: () => (this.isChangingPassword = true) }, t.t('Lcz_ChangePassword', { fallback: 'Change Password' })))));
    }
};
IrHkUserDrawerForm.style = irHkUserDrawerFormCss();

exports.ir_hk_unassigned_units_drawer_form = IrHkUnassignedUnitsDrawerForm;
exports.ir_hk_user_drawer_form = IrHkUserDrawerForm;
