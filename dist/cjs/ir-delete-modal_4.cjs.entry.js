'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const housekeeping_service = require('./housekeeping.service-ae78c8e1.js');
const locales_store = require('./locales.store-4301bbe8.js');
const calendarData = require('./calendar-data-b301c729.js');
const irInterceptor_store = require('./ir-interceptor.store-ddd4cdfb.js');
const booking_service = require('./booking.service-04d8ca45.js');
require('./index-5e99a1fe.js');
require('./axios-b86c5465.js');
require('./utils-0869c24f.js');
require('./moment-1780b03a.js');
require('./booking-12c70869.js');

const irDeleteModalCss = ".backdropModal.sc-ir-delete-modal{background-color:rgba(0, 0, 0, 0.5);z-index:1000;position:fixed;top:0;left:0;height:100vh;width:100%;opacity:0;transition:opacity 0.3s ease-in-out;pointer-events:none}.backdropModal.active.sc-ir-delete-modal{cursor:pointer;opacity:1 !important;pointer-events:all}.ir-modal[data-state='opened'].sc-ir-delete-modal{opacity:1;visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}.ir-alert-content.sc-ir-delete-modal{padding:10px;background:white;border-radius:5px}.modal.sc-ir-delete-modal{z-index:1001 !important}.modal-dialog.sc-ir-delete-modal{height:100vh;display:flex;align-items:center}.ir-alert-footer.sc-ir-delete-modal{gap:10px}.exit-icon.sc-ir-delete-modal{position:absolute;right:10px;top:5px;margin:0}.ir-modal.sc-ir-delete-modal{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);z-index:1050;width:90%;max-width:32rem;overflow:hidden;outline:0;opacity:0;transition:transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;visibility:hidden;pointer-events:none}.ir-modal.active.sc-ir-delete-modal{opacity:1;transform:translate(-50%, 0);visibility:visible;pointer-events:all;transition:all 0.3s ease-in-out}";
const IrDeleteModalStyle0 = irDeleteModalCss;

var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const IrDeleteModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.modalClosed = index.createEvent(this, "modalClosed", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.housekeepingService = new housekeeping_service.HouseKeepingService();
        this.user = undefined;
        this.isOpen = false;
        this.selectedId = '';
        this.loadingBtn = null;
    }
    async closeModal() {
        this.isOpen = false;
        this.modalClosed.emit(null);
    }
    async openModal() {
        this.isOpen = true;
    }
    async btnClickHandler(event) {
        let target = event.target;
        let name = target.name;
        try {
            if (name === 'confirm') {
                this.loadingBtn = 'confirm';
                if (this.selectedId === '') {
                    await this.housekeepingService.editExposedHKM(this.user, true);
                }
                else {
                    const newAssignedUnits = this.user.assigned_units.map(u => ({ hkm_id: +this.selectedId, is_to_assign: true, unit_id: u.id }));
                    await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_service.housekeeping_store.default_properties.property_id, newAssignedUnits);
                    const _a = this.user, user = __rest(_a, ["assigned_units", "is_soft_deleted", "is_active"]);
                    await this.housekeepingService.editExposedHKM(user, true);
                }
                this.resetData.emit(null);
            }
            if (name === 'cancel') {
                this.closeModal();
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            if (this.loadingBtn) {
                this.loadingBtn = null;
                this.closeModal();
            }
        }
    }
    render() {
        if (!this.user) {
            return null;
        }
        return [
            index.h("div", { class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.closeModal();
                } }),
            index.h("div", { "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, this.isOpen && (index.h("div", { class: `ir-alert-content p-2` }, index.h("div", { class: `ir-alert-header align-items-center border-0 py-0 m-0 ` }, index.h("p", { class: "p-0 my-0 mb-1" }, this.user.assigned_units.length > 0 ? locales_store.locales.entries.Lcz_AssignUnitsTo : locales_store.locales.entries.Lcz_ConfirmDeletion), index.h("ir-icon", { class: "exit-icon", style: { cursor: 'pointer' }, onClick: () => {
                    this.closeModal();
                } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "10.5", viewBox: "0 0 384 512" }, index.h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.user.assigned_units.length > 0 && (index.h("div", { class: "modal-body text-left p-0 mb-2" }, index.h("ir-select", { firstOption: locales_store.locales.entries.Lcz_nobody, selectedValue: this.selectedId, onSelectChange: e => (this.selectedId = e.detail), LabelAvailable: false, data: housekeeping_service.housekeeping_store.hk_criteria.housekeepers
                    .filter(hk => hk.id !== this.user.id)
                    .map(m => ({
                    value: m.id.toString(),
                    text: m.name,
                })) }))), index.h("div", { class: `ir-alert-footer border-0 d-flex justify-content-end` }, index.h("ir-button", { icon: '', btn_color: 'secondary', btn_block: true, text: locales_store.locales.entries.Lcz_Cancel, name: 'cancel' }), index.h("ir-button", { isLoading: this.loadingBtn === 'confirm', icon: '', btn_color: 'primary', btn_block: true, text: locales_store.locales.entries.Lcz_Confirm, name: 'confirm' }))))),
        ];
    }
};
IrDeleteModal.style = IrDeleteModalStyle0;

const irHkUnassignedUnitsCss = ".sc-ir-hk-unassigned-units-h{display:block;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}table.sc-ir-hk-unassigned-units{width:100%}td.sc-ir-hk-unassigned-units{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units:last-child{text-align:end}.title.sc-ir-hk-unassigned-units{min-width:230px !important}";
const IrHkUnassignedUnitsStyle0 = irHkUnassignedUnitsCss;

const IrHkUnassignedUnits = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.assignedUnits = new Map();
        this.housekeepingService = new housekeeping_service.HouseKeepingService();
        this.user = null;
        this.renderAgain = false;
    }
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
        var _a;
        if (!this.user) {
            return (_a = housekeeping_service.housekeeping_store.hk_criteria.units_assignments.unassigned_units) === null || _a === void 0 ? void 0 : _a.map(unit => (index.h("tr", { key: unit.id }, index.h("td", { class: "mr-2" }, unit.name), index.h("td", { class: "sr-only" }), index.h("td", null, index.h("ir-select", { onSelectChange: e => {
                    let hk_id = e.detail;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                }, LabelAvailable: false, data: housekeeping_service.housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })) })))));
        }
        return calendarData.calendar_data.roomsInfo.map(roomType => {
            var _a;
            if (!roomType.is_active) {
                return null;
            }
            return (_a = roomType.physicalrooms) === null || _a === void 0 ? void 0 : _a.map(physical_room => {
                var _a, _b, _c;
                let taken = !((_a = housekeeping_service.housekeeping_store.hk_criteria.units_assignments.unassigned_units) === null || _a === void 0 ? void 0 : _a.find(unit => unit.id === physical_room.id));
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
                return (index.h("tr", { key: physical_room.id }, index.h("td", null, physical_room.name), index.h("td", null, taken ? (_b = housekeeper[0]) === null || _b === void 0 ? void 0 : _b.name : ''), index.h("td", null, index.h("ir-switch", { onCheckChange: e => {
                        const checked = e.detail;
                        this.assignUnit(physical_room.id, this.user.id, checked);
                    }, checked: taken && ((_c = housekeeper[0]) === null || _c === void 0 ? void 0 : _c.id) === this.user.id }))));
            });
        });
    }
    render() {
        return (index.h(index.Host, { key: '2db5a1b04113f6725ebe308287340f4629b67039' }, index.h("ir-title", { key: 'b6e6e1088c07f6a6b7a37a543c617d839b67e5e8', class: "title px-1", displayContext: "sidebar", label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}` }), index.h("section", { key: '90ce92a336fb387a8c0825489df9ce0d81a3dd2d', class: "px-1" }, index.h("table", { key: '779d4638878c31c9d94b9ef84b540f9642f5409b' }, index.h("thead", { key: '79b57cd98e4e6b568d41415b1805c256aed002d6' }, index.h("th", { key: 'a696e8af0002eb4052beb85e4dad0a195126d68d', class: "sr-only" }, "room name"), index.h("th", { key: 'ec5b8ae007ef69199aae773b1b5c6abf06add2f0', class: "sr-only" }, "housekeeper name"), index.h("th", { key: 'e71b6dee8afb94d2d2dd774df56f843356e5c389', class: "sr-only" }, "actions")), index.h("tbody", { key: 'a03b0087362b851b09325255f85cdafd77c001cc' }, this.renderRooms())), index.h("div", { key: '9971d0189cdcd1d8cceab6ee3316d45049494bc2', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, index.h("ir-button", { key: '73e3c77d1e13c17d0f606100feb58d4dc7a92a00', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: 'Cancel' }), index.h("ir-button", { key: '43e6165d275edcb841949c47799a650d3ef255cf', isLoading: irInterceptor_store.isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHandler: this.assignUnits.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: 'Confirm' })))));
    }
};
IrHkUnassignedUnits.style = IrHkUnassignedUnitsStyle0;

function validateForm(data, rules) {
    let isValid = true;
    const errors = {};
    for (const fieldName in rules) {
        const rulesForField = rules[fieldName];
        const value = data[fieldName];
        if (!rulesForField)
            continue;
        errors[fieldName] = [];
        // Required
        if (rulesForField.required && (value === null || value === undefined || value === '')) {
            isValid = false;
            errors[fieldName].push('This field is required.');
        }
        // String Length
        if (typeof value === 'string') {
            if (rulesForField.minLength !== undefined && value.length < rulesForField.minLength) {
                isValid = false;
                errors[fieldName].push(`Minimum length is ${rulesForField.minLength}.`);
            }
            if (rulesForField.maxLength !== undefined && value.length > rulesForField.maxLength) {
                isValid = false;
                errors[fieldName].push(`Maximum length is ${rulesForField.maxLength}.`);
            }
        }
        // Numeric Range
        if (typeof value === 'number') {
            if (rulesForField.minValue !== undefined && value < rulesForField.minValue) {
                isValid = false;
                errors[fieldName].push(`Minimum value is ${rulesForField.minValue}.`);
            }
            if (rulesForField.maxValue !== undefined && value > rulesForField.maxValue) {
                isValid = false;
                errors[fieldName].push(`Maximum value is ${rulesForField.maxValue}.`);
            }
        }
        // Regular Expression
        if (rulesForField.pattern && !rulesForField.pattern.test(String(value))) {
            isValid = false;
            errors[fieldName].push('Invalid format.');
        }
        // Custom Validation
        if (rulesForField.custom && !rulesForField.custom(value)) {
            isValid = false;
            errors[fieldName].push('Custom validation failed.');
        }
    }
    return { isValid, errors };
}

const irHkUserCss = ".sc-ir-hk-user-h{display:block}";
const IrHkUserStyle0 = irHkUserCss;

const IrHkUser = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData", 7);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.housekeepingService = new housekeeping_service.HouseKeepingService();
        this.default_properties = {
            token: '',
            language: '',
        };
        this.user = null;
        this.isEdit = false;
        this.isLoading = false;
        this.userInfo = {
            id: -1,
            mobile: '',
            name: '',
            note: '',
            password: '',
            property_id: null,
            username: null,
            phone_prefix: null,
        };
        this.errors = null;
    }
    async componentWillLoad() {
        const { token, language, property_id } = housekeeping_service.getDefaultProperties();
        this.default_properties = { token, language };
        if (!this.user) {
            this.userInfo['property_id'] = property_id;
        }
        if (this.user) {
            this.userInfo = Object.assign({}, this.user);
        }
        console.log(this.userInfo);
    }
    updateUserField(key, value) {
        this.userInfo = Object.assign(Object.assign({}, this.userInfo), { [key]: value });
    }
    async addUser() {
        try {
            this.isLoading = true;
            const validationRules = {
                name: { required: true },
                mobile: { required: true },
                password: { required: true, minLength: 5 },
            };
            const validationResult = validateForm(this.userInfo, validationRules);
            if (!validationResult.isValid) {
                this.errors = validationResult.errors;
                return;
            }
            if (this.errors) {
                this.errors = null;
            }
            await this.housekeepingService.editExposedHKM(this.userInfo);
            this.resetData.emit(null);
            this.closeSideBar.emit(null);
        }
        catch (error) {
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
        var _a, _b, _c, _d, _e, _f, _g;
        return (index.h(index.Host, { key: 'caa617574dc71aa8c7d832fb5a7cb5d470fe091f' }, index.h("ir-title", { key: '493444c9167eabea9a5c8a5c159b6705c7348af8', class: "px-1", displayContext: "sidebar", label: this.isEdit ? locales_store.locales.entries.Lcz_EditHousekeeperProfile : locales_store.locales.entries.Lcz_CreateHousekeeperProfile }), index.h("section", { key: '3fd92cf7a289e06ed2b23bf3fce886d04ddd6f78', class: "px-1" }, index.h("ir-input-text", { key: '4c5f9409c8cc86266c17f24445098673c701d3aa', error: ((_b = (_a = this.errors) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) > 0, label: locales_store.locales.entries.Lcz_Name, placeholder: locales_store.locales.entries.Lcz_Name, onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this) }), index.h("ir-phone-input", { key: '5e7fae3db8a19aacbccbae9b4a8eab03088d56a9', placeholder: locales_store.locales.entries.Lcz_Mobile, error: ((_d = (_c = this.errors) === null || _c === void 0 ? void 0 : _c.mobile) === null || _d === void 0 ? void 0 : _d.length) > 0, language: this.default_properties.language, token: this.default_properties.token, default_country: calendarData.calendar_data.country.id, phone_prefix: (_e = this.user) === null || _e === void 0 ? void 0 : _e.phone_prefix, label: locales_store.locales.entries.Lcz_Mobile, value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), index.h("ir-input-text", { key: 'e31f52ad64547e10c3338dd5e27c0e76f5c3ca8e', disabled: this.user !== null, label: locales_store.locales.entries.Lcz_Username, placeholder: locales_store.locales.entries.Lcz_Username, value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), index.h("ir-input-text", { key: '466e3d4d98865e66ccce3ea2d00b116ac67e35bc', label: locales_store.locales.entries.Lcz_Password, placeholder: locales_store.locales.entries.Lcz_MinimumCharacter, value: this.userInfo.password, type: "password", error: ((_g = (_f = this.errors) === null || _f === void 0 ? void 0 : _f.password) === null || _g === void 0 ? void 0 : _g.length) > 0, onTextChange: e => this.updateUserField('password', e.detail) }), index.h("ir-input-text", { key: 'e9a808b842256e7dbfa1af7d27669f5d3dff5734', label: locales_store.locales.entries.Lcz_Note, placeholder: locales_store.locales.entries.Lcz_Note, value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) }), index.h("div", { key: '7e81d6713bcc4730e1a72e3c23bac6ef161758e4', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, index.h("ir-button", { key: 'a6e89784c30d0a6bb0a3e4bc22c7d015cef29930', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: '228c2c59392df5e8623951a11a50757ff1047983', isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: locales_store.locales.entries.Lcz_Save })))));
    }
};
IrHkUser.style = IrHkUserStyle0;

const irPhoneInputCss = ".sc-ir-phone-input-h{display:block}.input-container.sc-ir-phone-input{display:flex;align-items:center;padding:0 !important}.input-container.sc-ir-phone-input:focus-within{border-color:#1e9ff2}.border-theme.sc-ir-phone-input{border-color:#cacfe7}.input-container.sc-ir-phone-input input.sc-ir-phone-input{flex:1;border:0}.input-container.sc-ir-phone-input input.sc-ir-phone-input:focus{outline:none}.dropdown-trigger.sc-ir-phone-input{display:flex;align-items:center;gap:8px;background:white;border:0;border-right:1px solid #cacfe7}.ir-dropdown-container.sc-ir-phone-input{position:absolute;z-index:1000;bottom:-30px;width:100%;left:0;background:white}.input-container.sc-ir-phone-input label.sc-ir-phone-input{display:flex;align-items:center;justify-content:center;margin:0;padding:0 5px}.flag.sc-ir-phone-input{height:18px;width:24px;border-radius:3px}.is-invalid.sc-ir-phone-input{border-color:#ff4961}";
const IrPhoneInputStyle0 = irPhoneInputCss;

const IrPhoneInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.countries = [];
        this.bookingService = new booking_service.BookingService();
        this.label = undefined;
        this.value = '';
        this.disabled = false;
        this.error = false;
        this.token = undefined;
        this.language = undefined;
        this.default_country = null;
        this.phone_prefix = null;
        this.placeholder = undefined;
        this.inputValue = '';
        this.isDropdownVisible = false;
        this.currentCountry = undefined;
    }
    async componentWillLoad() {
        const countries = await this.bookingService.getCountries(this.language);
        this.countries = countries;
        if (this.phone_prefix) {
            this.setCountryFromPhonePrefix();
        }
        else {
            if (this.default_country) {
                this.setCurrentCountry(this.default_country);
            }
        }
        this.inputValue = this.value;
    }
    handleDocumentClick(event) {
        const target = event.target;
        if (!this.el.contains(target)) {
            this.isDropdownVisible = false;
        }
    }
    handleInputChange(e) {
        var _a;
        let inputElement = e.target;
        let inputValue = inputElement.value;
        inputValue = inputValue.replace(/[^+\d]+/g, '');
        inputElement.value = inputValue;
        this.inputValue = inputValue;
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.inputValue });
    }
    setCountryFromPhonePrefix() {
        var _a;
        const country = this.countries.find(country => country.phone_prefix === this.phone_prefix);
        if (!country) {
            throw new Error('Invalid country id');
        }
        this.currentCountry = Object.assign({}, country);
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.value });
    }
    setCurrentCountry(id) {
        var _a;
        const country = this.countries.find(country => country.id === id);
        if (!country) {
            throw new Error('Invalid country id');
        }
        this.currentCountry = Object.assign({}, country);
        this.textChange.emit({ phone_prefix: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.phone_prefix, mobile: this.value });
    }
    render() {
        var _a, _b;
        return (index.h(index.Host, { key: 'dfb03a5099f8061c31db62cf7f7f9e5c43e34782' }, index.h("div", { key: '37e1cb3d43d80f7a8e19b57bf90bacb9fd9f85c9', class: "form-group mr-0" }, index.h("div", { key: 'eda3015d8b92175ea0c14a0124b63f568d5b1b05', class: "input-group row m-0 p-0 position-relative" }, this.label && (index.h("div", { key: 'bc7ae8c0ccd5ba2212c3c4e42d9fd5c25144b246', class: `input-group-prepend col-3 p-0 text-dark border-none` }, index.h("label", { key: '8893a1fb8fac932f7c5d4639e8b6948530e93558', class: `input-group-text  border-theme flex-grow-1 text-dark  ` }, this.label))), index.h("div", { key: '11e21f4af501538d4de158f23db3d58386fc115e', class: 'form-control  input-container  flex-fill' + (this.error ? ' is-invalid' : '') }, index.h("button", { key: '7821d6e69187b333ea7664f825b2e503920bd042', onClick: () => (this.isDropdownVisible = !this.isDropdownVisible), class: "dropdown-trigger" }, index.h("img", { key: '1638f77070048f37775c5416b92e24be58483e8f', src: (_a = this.currentCountry) === null || _a === void 0 ? void 0 : _a.flag, class: "flag" }), index.h("svg", { key: '4e95739eeadd8f7dbf108d33d1d7518855c8e436', xmlns: "http://www.w3.org/2000/svg", height: "14", width: "12.25", viewBox: "0 0 448 512" }, index.h("path", { key: '4e4153ae7e3dd95b62ab853bb5b2082c9ab5d1af', d: "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" }))), index.h("label", { key: '0b68a26b0805e557a4d342f1f399ab8a8a28568a' }, (_b = this.currentCountry) === null || _b === void 0 ? void 0 : _b.phone_prefix), index.h("input", { key: '5da862bca0db18d78173dfa5a7f1d5722e738dca', type: "text", placeholder: this.placeholder, required: true, value: this.inputValue, disabled: this.disabled, onInput: e => this.handleInputChange(e) })), ' ', this.isDropdownVisible && (index.h("div", { key: '70e76dc6138ea9365bb4aac1c15f5e6880c4f983', class: "ir-dropdown-container" }, index.h("ir-combobox", { key: '717e94c61d8d1009a5e35d3ef46f113a9fc4f041', onComboboxValueChange: e => {
                this.setCurrentCountry(+e.detail.data);
                this.isDropdownVisible = false;
            }, class: "bg-white", autoFocus: true, placeholder: "Search country", data: this.countries.map(c => ({
                id: c.id.toString(),
                name: `${c.name} (${c.phone_prefix})`,
            })) })))))));
    }
    get el() { return index.getElement(this); }
};
IrPhoneInput.style = IrPhoneInputStyle0;

exports.ir_delete_modal = IrDeleteModal;
exports.ir_hk_unassigned_units = IrHkUnassignedUnits;
exports.ir_hk_user = IrHkUser;
exports.ir_phone_input = IrPhoneInput;

//# sourceMappingURL=ir-delete-modal_4.cjs.entry.js.map