import { r as registerInstance, c as createEvent, h, F as Fragment } from './index-CeHdrJeH.js';
import { H as HouseKeepingService, h as housekeeping_store, g as getDefaultProperties } from './index-UMBb8rEH.js';
import { c as calendar_data } from './calendar-data-CiYzaNK0.js';
import { t } from './t-CHjay2ar.js';
import { B as BookingService } from './booking.store--m3aK21i.js';
import { U as UserService } from './user.service-DUAoemfF.js';
import { C as CONSTANTS } from './constants-DI4DZmiQ.js';
import { s as stringType, o as objectType } from './types-BWKgfE54.js';
import './locales.store-CXJn6ls-.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-DOpzu-TI.js';
import './IBooking-BEkHqAPo.js';
import './utils-LYNfNy1h.js';
import './moment-Mki5YqAR.js';
import './booking.dto-xX-uaIxb.js';
import './type-DahsFfOq.js';
import './ir-date-tLkbTntq.js';
import './language-observer-CHgzsZkY.js';
import './booking-BCfG9kTk.js';
import './functions-BI0MgE9h.js';

const irHkUnassignedUnitsDrawerFormCss = () => `.sc-ir-hk-unassigned-units-drawer-form-h{display:block;min-width:20rem;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2;text-align:start !important}table.sc-ir-hk-unassigned-units-drawer-form{width:100%}td.sc-ir-hk-unassigned-units-drawer-form{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units-drawer-form:last-child{text-align:end}.title.sc-ir-hk-unassigned-units-drawer-form{min-width:230px !important}.ir-ps-1.sc-ir-hk-unassigned-units-drawer-form{padding-inline-start:0.25rem}`;

const IrHkUnassignedUnitsDrawerForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar");
        this.resetData = createEvent(this, "resetData");
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
            return housekeeping_store.hk_criteria.units_assignments.unassigned_units?.map(unit => (h("tr", { key: unit.id }, h("td", { class: "" }, unit.name), h("td", { class: "sr-only" }), h("td", { class: "ir-ps-1" }, h("wa-select", { size: "s", style: { textAlign: 'start' }, placeholder: t('Lcz_Select', { fallback: 'Select' }), onchange: e => {
                    let hk_id = e.target.value;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                } }, housekeeping_store.hk_criteria.housekeepers.map(hk => (h("wa-option", { key: hk.id, value: hk.id?.toString() }, hk.name))))))));
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
        return (h("form", { key: '3bebf07ac25b581a3731408b04165413033e6ab3', id: this.formId, onSubmit: e => {
                e.preventDefault();
                this.assignUnits();
            } }, h("table", { key: 'b55ae4712ed32d61150b0f0333c00d5070d0a269' }, h("thead", { key: 'ed58ff45958275f9373c3d779abaef21af45a7cf' }, h("th", { key: 'f5fcf791807b62d985d9c03aed2add8e9dc86e62', class: "sr-only" }, t('Lcz_RoomName', { fallback: 'room name' })), h("th", { key: 'b8e30217e0196d386903fcd3756caad677873f89', class: "sr-only" }, t('Lcz_HousekeeperName', { fallback: 'housekeeper name' })), h("th", { key: 'bb0499a1ba3c1b017ccfe3311ad0e72bf3f85b1f', class: "sr-only" }, t('Lcz_Actions', { fallback: 'Actions' }))), h("tbody", { key: '186864f8575914bbdcb759baf92a19cf3a455b97' }, this.renderRooms()))));
    }
};
IrHkUnassignedUnitsDrawerForm.style = irHkUnassignedUnitsDrawerFormCss();

const irHkUserDrawerFormCss = () => `.sc-ir-hk-user-drawer-form-h{display:block;height:100%}.hk-user-form.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;gap:1rem}.hk-user-form--password-change.sc-ir-hk-user-drawer-form{position:relative;height:100%;justify-content:center;align-items:center}.hk-user-form__back-btn.sc-ir-hk-user-drawer-form{position:absolute;top:0;inset-inline-start:0}.hk-user-form__password-fields.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;gap:1rem;width:100%;max-width:26rem}.hk-user-form__password-header.sc-ir-hk-user-drawer-form{display:flex;flex-direction:column;align-items:center;text-align:center;gap:0.5rem;margin-bottom:0.5rem}.hk-user-form__password-icon.sc-ir-hk-user-drawer-form{font-size:2.25rem;color:var(--wa-color-text-normal)}.hk-user-form__password-title.sc-ir-hk-user-drawer-form{margin:0;font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-l)}.hk-user-form__password-hint.sc-ir-hk-user-drawer-form{margin:0;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold);color:var(--wa-color-text-normal);max-width:22rem}.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form{align-self:flex-end}.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form::part(base),.hk-user-form__change-password-btn.sc-ir-hk-user-drawer-form [part~="base"]{padding:0;height:auto;width:fit-content}.ir-flip-rtl.sc-ir-hk-user-drawer-form:dir(rtl){scale:-1 1}`;

const nameSchema = stringType().min(2, t('Lcz_NameMinLength', { fallback: 'Name must be at least 2 characters.' }));
const mobileSchema = stringType()
    .min(1, t('Lcz_MobileRequired', { fallback: 'Mobile is required.' }))
    .max(14, t('Lcz_MobileMaxLength', { fallback: 'Mobile must be at most 14 characters.' }));
const usernameBaseSchema = stringType().min(3, t('Lcz_UsernameMinLength', { fallback: 'Username must be at least 3 characters.' }));
const IrHkUserDrawerForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData");
        this.closeSideBar = createEvent(this, "closeSideBar");
        this.loadingChanged = createEvent(this, "loadingChanged");
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
        }, { message: t('Lcz_UsernameAlreadyExists', { fallback: 'Username already exists.' }) });
        this.passwordSchema = stringType()
            .nullable()
            .refine(password => {
            if (this.user && !this.userInfo?.password)
                return true;
            return CONSTANTS.PASSWORD.test(password);
        }, { message: t('Lcz_PasswordMinLength', { fallback: 'Password must be at least 8 characters long.' }) });
        this.fullSchema = objectType({
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
            } }, h("ir-custom-button", { type: "button", class: "hk-user-form__back-btn", appearance: "plain", variant: "neutral", size: "s", onClickHandler: () => this.cancelPasswordChange() }, h("wa-icon", { class: "ir-flip-rtl", name: "arrow-left", "aria-hidden": "true", style: { fontSize: '1rem' } })), h("div", { class: "hk-user-form__password-fields" }, h("div", { class: "hk-user-form__password-header" }, h("wa-icon", { name: "lock", class: "hk-user-form__password-icon" }), h("h4", { class: "hk-user-form__password-title" }, "Set New Password"), h("p", { class: "hk-user-form__password-hint" }, t('Lcz_NewPasswordMustBeDifferent', { fallback: 'Your new password must be different to previously used password' }))), h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { placeholder: t('Lcz_NewPassword', { fallback: 'New password' }), value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && h("ir-password-validator", { password: this.userInfo.password }), h("ir-validator", { schema: stringType().refine(v => v === this.userInfo.password, { message: t('Lcz_PasswordsDoNotMatch', { fallback: 'Passwords do not match.' }) }), value: this.confirmPassword, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { placeholder: t('Lcz_ConfirmPassword', { fallback: 'Confirm password' }), value: this.confirmPassword, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => (this.confirmPassword = e.detail) })))));
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
            } }, h("ir-validator", { schema: nameSchema, value: this.userInfo.name, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { label: t('Lcz_Name', { fallback: 'Name' }), value: this.userInfo.name, maxlength: 40, "onText-change": (e) => this.updateUserField('name', e.detail), "onInput-blur": this.handleNameBlur.bind(this) })), h("ir-validator", { schema: mobileSchema, value: this.userInfo.mobile, valueEvent: "mobile-input-change", showErrorMessage: true }, h("ir-mobile-input", { label: t('Lcz_Mobile', { fallback: 'Mobile' }), value: this.userInfo.mobile, countryCode: this.countryCode, countries: this.countries, "onMobile-input-change": e => {
                this.updateUserField('phone_prefix', e.detail.country.phone_prefix);
                this.updateUserField('mobile', e.detail.value);
            } })), h("wa-textarea", { "data-testid": "note", maxlength: 250, size: "s", label: t('Lcz_Note', { fallback: 'Note' }), value: this.userInfo.note, defaultValue: this.userInfo.note, onchange: e => this.updateUserField('note', e.target.value) }), h("ir-validator", { schema: this.usernameSchema, value: this.userInfo.username, valueEvent: "text-change", asyncValidation: true, showErrorMessage: true }, h("ir-input", { label: t('Lcz_Username', { fallback: 'Username' }), value: this.userInfo.username, "onText-change": (e) => this.updateUserField('username', e.detail) })), !this.user ? (h(Fragment, null, h("ir-validator", { schema: this.passwordSchema, value: this.userInfo.password, valueEvent: "text-change", showErrorMessage: true }, h("ir-input", { label: t('Lcz_Password', { fallback: 'Password' }), value: this.userInfo.password, type: "password", maxlength: 16, passwordToggle: true, "onText-change": (e) => this.updateUserField('password', e.detail), onInputFocus: () => (this.showPasswordValidation = true) })), this.showPasswordValidation && h("ir-password-validator", { password: this.userInfo.password }))) : (h("wa-button", { size: "s", appearance: "plain", variant: "brand", type: "button", class: "hk-user-form__change-password-btn", onClick: () => (this.isChangingPassword = true) }, t('Lcz_ChangePassword', { fallback: 'Change Password' })))));
    }
};
IrHkUserDrawerForm.style = irHkUserDrawerFormCss();

export { IrHkUnassignedUnitsDrawerForm as ir_hk_unassigned_units_drawer_form, IrHkUserDrawerForm as ir_hk_user_drawer_form };
