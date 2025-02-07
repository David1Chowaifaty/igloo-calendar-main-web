'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const housekeeping_store = require('./housekeeping.store-75064296.js');
const housekeeping_service = require('./housekeeping.service-9f410f2b.js');
const locales_store = require('./locales.store-4301bbe8.js');
const calendarData = require('./calendar-data-7e342bed.js');
const irInterceptor_store = require('./ir-interceptor.store-ddd4cdfb.js');
require('./index-5e99a1fe.js');
require('./axios-b86c5465.js');

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
                    await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_store.housekeeping_store.default_properties.property_id, newAssignedUnits);
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
                } }, index.h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "10.5", viewBox: "0 0 384 512" }, index.h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.user.assigned_units.length > 0 && (index.h("div", { class: "modal-body text-left p-0 mb-2" }, index.h("ir-select", { firstOption: locales_store.locales.entries.Lcz_nobody, selectedValue: this.selectedId, onSelectChange: e => (this.selectedId = e.detail), LabelAvailable: false, data: housekeeping_store.housekeeping_store.hk_criteria.housekeepers
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
            await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_store.housekeeping_store.default_properties.property_id, [...this.assignedUnits.values()]);
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
            return (_a = housekeeping_store.housekeeping_store.hk_criteria.units_assignments.unassigned_units) === null || _a === void 0 ? void 0 : _a.map(unit => (index.h("tr", { key: unit.id }, index.h("td", { class: "mr-2" }, unit.name), index.h("td", { class: "sr-only" }), index.h("td", null, index.h("ir-select", { onSelectChange: e => {
                    let hk_id = e.detail;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                }, LabelAvailable: false, data: housekeeping_store.housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })) })))));
        }
        return calendarData.calendar_data.roomsInfo.map(roomType => {
            var _a;
            if (!roomType.is_active) {
                return null;
            }
            return (_a = roomType.physicalrooms) === null || _a === void 0 ? void 0 : _a.map(physical_room => {
                var _a, _b, _c;
                let taken = !((_a = housekeeping_store.housekeeping_store.hk_criteria.units_assignments.unassigned_units) === null || _a === void 0 ? void 0 : _a.find(unit => unit.id === physical_room.id));
                let housekeeper = [];
                const assignedRoom = this.assignedUnits.get(physical_room.id);
                if (assignedRoom && assignedRoom.is_to_assign) {
                    housekeeper = [this.user];
                    taken = true;
                }
                else {
                    if (taken) {
                        housekeeper = housekeeping_store.housekeeping_store.hk_criteria.housekeepers.filter(hk => hk.assigned_units.find(unit => unit.id === physical_room.id));
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
        return (index.h(index.Host, { key: '28250b419e8e3449cab9cbb97651541baaca0fda' }, index.h("ir-title", { key: '0c84c9bb1d9e9fbeffecceb35e4758e3e8e22540', class: "title px-1", displayContext: "sidebar", label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}` }), index.h("section", { key: '0a70852ab99a41c636bc7d0733d9e9006ddd82fc', class: "px-1" }, index.h("table", { key: 'f184f202548872d5e24c25a3668d06b00d8567fc' }, index.h("thead", { key: '17856269b125f1368b3f283d370d86e698e30112' }, index.h("th", { key: 'fe6f73ed1367dcc76f694598d303cb98db5a9906', class: "sr-only" }, "room name"), index.h("th", { key: '509a94b39cbf8b3ddfc641a56c58103d23e2dc5e', class: "sr-only" }, "housekeeper name"), index.h("th", { key: 'ef7225dcb94e6db939b3a43525c0267ea4e3120e', class: "sr-only" }, "actions")), index.h("tbody", { key: '30f623d4c8a1e6b1043a410aea86ae051b223ca3' }, this.renderRooms())), index.h("div", { key: 'b551f5c91f5bfa50745eabe5a2e60736c6f12712', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, index.h("ir-button", { key: '4c3c1ea36364b3508da95f20e9fe0577a8e6e609', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: 'Cancel' }), index.h("ir-button", { key: '6dfbda2b6bfbc8e82f0e5b995ded885fdc6c7952', isLoading: irInterceptor_store.isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHandler: this.assignUnits.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: 'Confirm' })))));
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
        const { token, language, property_id } = housekeeping_store.getDefaultProperties();
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
        return (index.h(index.Host, { key: 'a72908fabcfe93f522df27000b28a74116d997a2' }, index.h("ir-title", { key: '9ca07ed161df806b6f64f7faf3eafe52598aca99', class: "px-1", displayContext: "sidebar", label: this.isEdit ? locales_store.locales.entries.Lcz_EditHousekeeperProfile : locales_store.locales.entries.Lcz_CreateHousekeeperProfile }), index.h("section", { key: 'da18ec28da2b18f6195e98ee0f36770a73783f1a', class: "px-1" }, index.h("ir-input-text", { key: 'be399eff667103619f510f091e6f603c1cddcb56', error: ((_b = (_a = this.errors) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) > 0, label: locales_store.locales.entries.Lcz_Name, placeholder: locales_store.locales.entries.Lcz_Name, onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this) }), index.h("ir-phone-input", { key: 'ea7a63fb4ad50dee32782367a05e356c74c72a7a', placeholder: locales_store.locales.entries.Lcz_Mobile, error: ((_d = (_c = this.errors) === null || _c === void 0 ? void 0 : _c.mobile) === null || _d === void 0 ? void 0 : _d.length) > 0, language: this.default_properties.language, token: this.default_properties.token, default_country: calendarData.calendar_data.country.id, phone_prefix: (_e = this.user) === null || _e === void 0 ? void 0 : _e.phone_prefix, label: locales_store.locales.entries.Lcz_Mobile, value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), index.h("ir-input-text", { key: '65a9c81e0cb429acb49f5de8cc87f22e97d58e1f', disabled: this.user !== null, label: locales_store.locales.entries.Lcz_Username, placeholder: locales_store.locales.entries.Lcz_Username, value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), index.h("ir-input-text", { key: '4c3c6ec8d8181297df4d02ac42ddbc9d4270191d', label: locales_store.locales.entries.Lcz_Password, placeholder: locales_store.locales.entries.Lcz_MinimumCharacter, value: this.userInfo.password, type: "password", error: ((_g = (_f = this.errors) === null || _f === void 0 ? void 0 : _f.password) === null || _g === void 0 ? void 0 : _g.length) > 0, onTextChange: e => this.updateUserField('password', e.detail) }), index.h("ir-input-text", { key: '1af613688aa4773d7380e62424ec25b020588e75', label: locales_store.locales.entries.Lcz_Note, placeholder: locales_store.locales.entries.Lcz_Note, value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) }), index.h("div", { key: 'cf61fa85c825e16fa56b54a165601cfdb3ce0ecf', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, index.h("ir-button", { key: '391293083504c8849b88080000174fb4265a163d', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: locales_store.locales.entries.Lcz_Cancel }), index.h("ir-button", { key: '4e69abdaaf9cf33249415d7fa134678494233eb8', isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: locales_store.locales.entries.Lcz_Save })))));
    }
};
IrHkUser.style = IrHkUserStyle0;

exports.ir_delete_modal = IrDeleteModal;
exports.ir_hk_unassigned_units = IrHkUnassignedUnits;
exports.ir_hk_user = IrHkUser;

//# sourceMappingURL=ir-delete-modal_3.cjs.entry.js.map