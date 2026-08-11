import { HouseKeepingService } from "../../../services/housekeeping.service";
import calendar_data from "../../../stores/calendar-data";
import housekeeping_store from "../../../stores/housekeeping.store";
import { isRequestPending } from "../../../stores/ir-interceptor.store";
import locales from "../../../stores/locales.store";
import { h } from "@stencil/core";
export class IrHkUnassignedUnits {
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
        return (h("div", { key: '5c9f83bce0e34b472993ac1f8e30984d2b4d2ecc', class: "sheet-container" }, h("ir-title", { key: '79676a261ce212df7bca94b9f977c7a82f949e6e', class: "title sheet-header px-1", displayContext: "sidebar", label: !this.user ? 'Assingn Units' : `Assignment for ${this.user.name}` }), h("section", { key: '7db13f604438ed6fe86a0fea2b6e4c476c2a9c23', class: "px-1 sheet-body" }, h("table", { key: '18f93113c9a052f6d030e356218766b0ab7412d1' }, h("thead", { key: '0693c55d03457119a64bf3332df4feef3adc4bf8' }, h("th", { key: '47d8e6cf7d56ea8e94946918ea23e380c5ce89c0', class: "sr-only" }, locales.entries.Lcz_RoomName), h("th", { key: '97ffd806fae4eee7747326540488422b3caa6cac', class: "sr-only" }, locales.entries.Lcz_HousekeeperName), h("th", { key: 'f345d343954a79d51a9457d38d254235638934e3', class: "sr-only" }, locales.entries.Lcz_Actions)), h("tbody", { key: '3c631c198f92f8bbc7ab19e67786435e387dacb2' }, this.renderRooms()))), h("div", { key: 'a4fd88b9deccf46a413029dcb14b3c98e0a52118', class: "sheet-footer" }, h("ir-button", { key: '4946637b4cd21cf4c08eb8cd17323bd310164b64', onClickHandler: () => this.closeSideBar.emit(null), class: "flex-fill", btn_styles: "w-100 justify-content-center align-items-center", btn_color: "secondary", text: locales.entries.Lcz_Cancel }), h("ir-button", { key: 'b9ee83a4df07471d5274cfd35e95db4dc14f7894', isLoading: isRequestPending('/Manage_Exposed_Assigned_Unit_To_HKM'), onClickHandler: this.assignUnits.bind(this), class: "flex-fill", btn_styles: "w-100  justify-content-center align-items-center", text: locales.entries.Lcz_Confirm }))));
    }
    static get is() { return "ir-hk-unassigned-units"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-hk-unassigned-units.css", "../../../common/sheet.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-hk-unassigned-units.css", "../../../common/sheet.css"]
        };
    }
    static get properties() {
        return {
            "user": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "IHouseKeepers | null",
                    "resolved": "IHouseKeepers",
                    "references": {
                        "IHouseKeepers": {
                            "location": "import",
                            "path": "@/models/housekeeping",
                            "id": "src/models/housekeeping.ts::IHouseKeepers",
                            "referenceLocation": "IHouseKeepers"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "defaultValue": "null"
            }
        };
    }
    static get states() {
        return {
            "renderAgain": {}
        };
    }
    static get events() {
        return [{
                "method": "closeSideBar",
                "name": "closeSideBar",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }, {
                "method": "resetData",
                "name": "resetData",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "null",
                    "resolved": "null",
                    "references": {}
                }
            }];
    }
}
