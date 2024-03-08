import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service.js';
import { c as calendar_data } from './calendar-data.js';
import { i as isRequestPending } from './ir-interceptor.store.js';
import { d as defineCustomElement$4 } from './ir-button2.js';
import { d as defineCustomElement$3 } from './ir-icon2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';
import { d as defineCustomElement$1 } from './ir-switch2.js';

const irHkUnassignedUnitsCss = ".sc-ir-hk-unassigned-units-h{display:block;--ir-root-active-color:#1e9ff2;--ir-root-inactive-color:#d2d2d2}ul.sc-ir-hk-unassigned-units{margin:0;padding:0}ul.sc-ir-hk-unassigned-units li.sc-ir-hk-unassigned-units{margin:0;padding:0;display:flex;margin-bottom:5px;justify-content:space-between}ul.sc-ir-hk-unassigned-units li.sc-ir-hk-unassigned-units p.sc-ir-hk-unassigned-units{padding:0;margin:0;width:min-content}.title.sc-ir-hk-unassigned-units{width:max-content;padding-right:10px}";
const IrHkUnassignedUnitsStyle0 = irHkUnassignedUnitsCss;

const IrHkUnassignedUnits = /*@__PURE__*/ proxyCustomElement(class IrHkUnassignedUnits extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.resetData = createEvent(this, "resetData", 7);
        this.assignedUnits = new Map();
        this.housekeepingService = new HouseKeepingService();
        this.user = null;
        this.renderAgain = false;
    }
    componentWillLoad() {
        this.housekeepingService.setToken(housekeeping_store.default_properties.token);
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
        if (!this.user) {
            return housekeeping_store.hk_criteria.units_assignments.unassigned_units.map(unit => (h("li", { key: unit.id }, h("p", { class: "mr-2" }, unit.name), h("ir-select", { class: "ml-4", onSelectChange: e => {
                    let hk_id = e.detail;
                    if (hk_id === '') {
                        hk_id = null;
                    }
                    else {
                        hk_id = +hk_id;
                    }
                    this.assignUnit(unit.id, hk_id, false);
                }, LabelAvailable: false, data: housekeeping_store.hk_criteria.housekeepers.map(hk => ({ text: hk.name, value: hk.id.toString() })) }))));
        }
        return calendar_data.roomsInfo.map(roomType => {
            var _a;
            if (!roomType.is_active) {
                return null;
            }
            return (_a = roomType.physicalrooms) === null || _a === void 0 ? void 0 : _a.map(physical_room => {
                var _a, _b;
                let taken = !housekeeping_store.hk_criteria.units_assignments.unassigned_units.find(unit => unit.id === physical_room.id);
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
                return (h("li", { key: physical_room.id }, h("div", { class: "d-flex mr-3" }, h("p", { class: "mr-2" }, physical_room.name), " ", h("span", null, taken ? (_a = housekeeper[0]) === null || _a === void 0 ? void 0 : _a.name : '')), h("ir-switch", { onCheckChange: e => {
                        const checked = e.detail;
                        this.assignUnit(physical_room.id, this.user.id, checked);
                    }, checked: taken && ((_b = housekeeper[0]) === null || _b === void 0 ? void 0 : _b.id) === this.user.id })));
            });
        });
    }
    render() {
        return (h(Host, { key: 'f307e1da45b39889eeea3cf10aeb7a2a696038ba', class: "px-1" }, h("div", { key: '8532e0a686f363f361b5e889e44b3c88794915cc', class: "d-flex align-items-center py-1 justify-content-between" }, h("h3", { key: 'dbb4719b9303fd4b144cd0abd8e9e5e6bac245f1', class: "text-left font-medium-2 title py-0 my-0" }, !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}`), h("ir-icon", { key: '4f5f120921afbccc8921d739c95aec988a55e3cd', class: 'ml-1 m-0 p-0 close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: 'f019c64d757aaa716cb46daba34774da7e66b5f3', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '85e14550fd2e939f9228cf27674091a4899b7245', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), h("section", { key: '832f7d72957e33fb2622e2c90018865f7217cb6a', class: "pt-1 pb-1 border-top" }, h("ul", { key: '87ea6bca9b779e6fa15053a4fa07658f41fa914f' }, this.renderRooms()), h("div", { key: 'c23107de6ff652f808d9011065bd10015a1a97f2', class: "d-flex flex-column flex-md-row align-items-md-center mt-2 w-100" }, h("ir-button", { key: '53b69129977abc331a99a0af0aabf50546b807d0', onClickHanlder: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", btn_color: "secondary", text: 'Cancel' }), h("ir-button", { key: 'cd58462336c67760f9a2f4856635458dcaa30d7c', isLoading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHanlder: this.assignUnits.bind(this), class: "flex-fill ml-md-1", btn_styles: "w-100  justify-content-center align-items-center mt-1 mt-md-0", text: 'Confirm' })))));
    }
    static get style() { return IrHkUnassignedUnitsStyle0; }
}, [2, "ir-hk-unassigned-units", {
        "user": [16],
        "renderAgain": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-hk-unassigned-units", "ir-button", "ir-icon", "ir-select", "ir-switch"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-hk-unassigned-units":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrHkUnassignedUnits);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-switch":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrHkUnassignedUnits as I, defineCustomElement as d };

//# sourceMappingURL=ir-hk-unassigned-units2.js.map