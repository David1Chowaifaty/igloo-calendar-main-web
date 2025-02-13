import { r as registerInstance, c as createEvent, h, H as Host } from './index-c553b3dc.js';
import { h as housekeeping_store, g as getDefaultProperties } from './housekeeping.store-82894713.js';
import { H as HouseKeepingService } from './housekeeping.service-2db79a51.js';
import { l as locales } from './locales.store-a1e3db22.js';
import { c as calendar_data } from './calendar-data-a75c9e95.js';
import { i as isRequestPending } from './ir-interceptor.store-651abd9c.js';
import './index-1d7b1ff2.js';
import './axios-ab377903.js';

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
        registerInstance(this, hostRef);
        this.modalClosed = createEvent(this, "modalClosed", 7);
        this.resetData = createEvent(this, "resetData", 7);
        this.housekeepingService = new HouseKeepingService();
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
                    await this.housekeepingService.manageExposedAssignedUnitToHKM(housekeeping_store.default_properties.property_id, newAssignedUnits);
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
            h("div", { class: `backdropModal ${this.isOpen ? 'active' : ''}`, onClick: () => {
                    this.closeModal();
                } }),
            h("div", { "data-state": this.isOpen ? 'opened' : 'closed', class: `ir-modal`, tabindex: "-1" }, this.isOpen && (h("div", { class: `ir-alert-content p-2` }, h("div", { class: `ir-alert-header align-items-center border-0 py-0 m-0 ` }, h("p", { class: "p-0 my-0 mb-1" }, this.user.assigned_units.length > 0 ? locales.entries.Lcz_AssignUnitsTo : locales.entries.Lcz_ConfirmDeletion), h("ir-icon", { class: "exit-icon", style: { cursor: 'pointer' }, onClick: () => {
                    this.closeModal();
                } }, h("svg", { slot: "icon", xmlns: "http://www.w3.org/2000/svg", height: "14", width: "10.5", viewBox: "0 0 384 512" }, h("path", { fill: "currentColor", d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.user.assigned_units.length > 0 && (h("div", { class: "modal-body text-left p-0 mb-2" }, h("ir-select", { firstOption: locales.entries.Lcz_nobody, selectedValue: this.selectedId, onSelectChange: e => (this.selectedId = e.detail), LabelAvailable: false, data: housekeeping_store.hk_criteria.housekeepers
                    .filter(hk => hk.id !== this.user.id)
                    .map(m => ({
                    value: m.id.toString(),
                    text: m.name,
                })) }))), h("div", { class: `ir-alert-footer border-0 d-flex justify-content-end` }, h("ir-button", { icon: '', btn_color: 'secondary', btn_block: true, text: locales.entries.Lcz_Cancel, name: 'cancel' }), h("ir-button", { isLoading: this.loadingBtn === 'confirm', icon: '', btn_color: 'primary', btn_block: true, text: locales.entries.Lcz_Confirm, name: 'confirm' }))))),
        ];
    }
};
IrDeleteModal.style = IrDeleteModalStyle0;

const irHkUnassignedUnitsCss = ".sc-ir-hk-unassigned-units-h{display:block;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}table.sc-ir-hk-unassigned-units{width:100%}td.sc-ir-hk-unassigned-units{padding-top:3px;padding-bottom:3px}td.sc-ir-hk-unassigned-units:last-child{text-align:end}.title.sc-ir-hk-unassigned-units{min-width:230px !important}";
const IrHkUnassignedUnitsStyle0 = irHkUnassignedUnitsCss;

const IrHkUnassignedUnits = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.resetData = createEvent(this, "resetData", 7);
        this.assignedUnits = new Map();
        this.housekeepingService = new HouseKeepingService();
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
        var _a;
        if (!this.user) {
            return (_a = housekeeping_store.hk_criteria.units_assignments.unassigned_units) === null || _a === void 0 ? void 0 : _a.map(unit => (h("tr", { key: unit.id }, h("td", { class: "mr-2" }, unit.name), h("td", { class: "sr-only" }), h("td", null, h("ir-select", { onSelectChange: e => {
                    let hk_id = e.detail;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                }, LabelAvailable: false, data: housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })) })))));
        }
        return calendar_data.roomsInfo.map(roomType => {
            var _a;
            if (!roomType.is_active) {
                return null;
            }
            return (_a = roomType.physicalrooms) === null || _a === void 0 ? void 0 : _a.map(physical_room => {
                var _a, _b, _c;
                let taken = !((_a = housekeeping_store.hk_criteria.units_assignments.unassigned_units) === null || _a === void 0 ? void 0 : _a.find(unit => unit.id === physical_room.id));
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
                return (h("tr", { key: physical_room.id }, h("td", null, physical_room.name), h("td", null, taken ? (_b = housekeeper[0]) === null || _b === void 0 ? void 0 : _b.name : ''), h("td", null, h("ir-switch", { onCheckChange: e => {
                        const checked = e.detail;
                        this.assignUnit(physical_room.id, this.user.id, checked);
                    }, checked: taken && ((_c = housekeeper[0]) === null || _c === void 0 ? void 0 : _c.id) === this.user.id }))));
            });
        });
    }
    render() {
        return (h(Host, { key: 'ac968f2d01908972ce7dadd6dc44946d20a4c6f3' }, h("ir-title", { key: 'bb34df911729486c76016693ab3b62276ebd43e6', class: "title px-1", displayContext: "sidebar", label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}` }), h("section", { key: '31c574415775c98f291d4032b68397d5c0306f21', class: "px-1" }, h("table", { key: 'b81c6bcfe5d3083f95ce65a75710ea0e57f5236a' }, h("thead", { key: '06457380289992a5754e3f429db4314924330bfd' }, h("th", { key: 'e4ce40231d72b1adbe0889e2b1a35f3d29ab8e12', class: "sr-only" }, "room name"), h("th", { key: '22f8c7374b8d4a06f9102c13889b98c888dd283f', class: "sr-only" }, "housekeeper name"), h("th", { key: '3ca7fb11c18ed9a4772ea73f7945d7f432f54479', class: "sr-only" }, "actions")), h("tbody", { key: 'c91c6705b5a7444f6d8f51118c0158e47c6b0b2a' }, this.renderRooms())), h("div", { key: '043cfb6c9d1d99edec183daf3eec4e5c158bd69a', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, h("ir-button", { key: '1d3cddc140cff6719865709579ed678b76a29f4f', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: 'Cancel' }), h("ir-button", { key: 'd01660df9dd02c481db7782ea3e8de6605f5fa8c', isLoading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHandler: this.assignUnits.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: 'Confirm' })))));
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
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData", 7);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.housekeepingService = new HouseKeepingService();
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
        const { token, language, property_id } = getDefaultProperties();
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
        return (h(Host, { key: 'e6061336b2cddcd731746b84366ce342a295de63' }, h("ir-title", { key: 'f924ec1720a1e43a8967f8f883e305c8ba7991eb', class: "px-1", displayContext: "sidebar", label: this.isEdit ? locales.entries.Lcz_EditHousekeeperProfile : locales.entries.Lcz_CreateHousekeeperProfile }), h("section", { key: '180013aaa664a097568c6dc595df812b2b3c61fe', class: "px-1" }, h("ir-input-text", { key: '27d36e053ca109a38641549f1ed3fd0dd110cc67', error: ((_b = (_a = this.errors) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.length) > 0, label: locales.entries.Lcz_Name, placeholder: locales.entries.Lcz_Name, onTextChange: e => this.updateUserField('name', e.detail), value: this.userInfo.name, onInputBlur: this.handleBlur.bind(this) }), h("ir-phone-input", { key: 'd0d96c9173d2bf92b06647e4f4baa4733260ec1c', placeholder: locales.entries.Lcz_Mobile, error: ((_d = (_c = this.errors) === null || _c === void 0 ? void 0 : _c.mobile) === null || _d === void 0 ? void 0 : _d.length) > 0, language: this.default_properties.language, token: this.default_properties.token, default_country: calendar_data.country.id, phone_prefix: (_e = this.user) === null || _e === void 0 ? void 0 : _e.phone_prefix, label: locales.entries.Lcz_Mobile, value: this.userInfo.mobile, onTextChange: e => {
                this.updateUserField('phone_prefix', e.detail.phone_prefix);
                this.updateUserField('mobile', e.detail.mobile);
            } }), h("ir-input-text", { key: '85995b6b9911671123b798060ec07dcf75598103', disabled: this.user !== null, label: locales.entries.Lcz_Username, placeholder: locales.entries.Lcz_Username, value: this.userInfo.username, onTextChange: e => this.updateUserField('username', e.detail) }), h("ir-input-text", { key: '2a1e0b767d041dbbaf292f940ee8b8feb9b39c4d', label: locales.entries.Lcz_Password, placeholder: locales.entries.Lcz_MinimumCharacter, value: this.userInfo.password, type: "password", error: ((_g = (_f = this.errors) === null || _f === void 0 ? void 0 : _f.password) === null || _g === void 0 ? void 0 : _g.length) > 0, onTextChange: e => this.updateUserField('password', e.detail) }), h("ir-input-text", { key: '802409c5923384e6d95ad84b2e9c81dbd04ef4e7', label: locales.entries.Lcz_Note, placeholder: locales.entries.Lcz_Note, value: this.userInfo.note, onTextChange: e => this.updateUserField('note', e.detail) }), h("div", { key: '00f27364cbd4f76a2225763064de632ab04ae9ca', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, h("ir-button", { key: '3916f55c9ce01aad5aca0ee0dabf0e666b058857', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: '909e492cfa8a1d5c2d446de392ab3da61c11437a', isLoading: this.isLoading, onClickHandler: this.addUser.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: locales.entries.Lcz_Save })))));
    }
};
IrHkUser.style = IrHkUserStyle0;

export { IrDeleteModal as ir_delete_modal, IrHkUnassignedUnits as ir_hk_unassigned_units, IrHkUser as ir_hk_user };

//# sourceMappingURL=ir-delete-modal_3.entry.js.map