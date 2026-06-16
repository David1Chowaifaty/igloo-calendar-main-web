import { HouseKeepingService } from "../../../services/housekeeping.service";
import housekeeping_store from "../../../stores/housekeeping.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrUnitStatus {
    housekeepingService = new HouseKeepingService();
    resetData;
    async handleSelectChange(e) {
        try {
            e.stopPropagation();
            e.stopImmediatePropagation();
            const window = e.detail;
            let mode;
            if (window === '') {
                mode = {
                    is_active: false,
                    window: -1,
                };
            }
            else {
                mode = {
                    is_active: true,
                    window: +window,
                };
            }
            await this.housekeepingService.setExposedInspectionMode(housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (h(Host, { key: 'b408696a6f2e515cfba05eebd232b2a7ad635af9', class: "card p-1" }, h("ir-title", { key: '9b961f3581069bfcb0945a95d4ba918027e65c65', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '514ad5e6701863242f46f7753932b55dbdc28bbc', class: "table-container" }, h("table", { key: 'cdd3a2e3c0e878caad32f3727c4e169831593431' }, h("thead", { key: 'cfc8ff43b6c37b56287fc24bb8ac85aab39f0d33' }, h("tr", { key: '2a93d868565f70054aab100fe1a9daf06134141a' }, h("th", { key: 'c36c1dcf3064f81d8c4c1724cf9c39c2d88f79d9' }, locales.entries.Lcz_Status), h("th", { key: 'afa9a6b51375893d4db2691fc19a5e53a7aaa3a4', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '630948a35c4876aa29a8c307bd287fb3b54fae87' }, locales.entries.Lcz_Action))), h("tbody", { key: '6d7021d0832d10cdd82133fc4849b0aeec2a8f08' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0
                    ? locales.entries.Lcz_YesOnTheSameDay
                    : i === 1
                        ? locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                        : locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                return {
                    text,
                    value: i.toString(),
                };
            }) })))))))))))));
    }
    static get is() { return "ir-unit-status"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unit-status.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unit-status.css"]
        };
    }
    static get events() {
        return [{
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
//# sourceMappingURL=ir-unit-status.js.map
