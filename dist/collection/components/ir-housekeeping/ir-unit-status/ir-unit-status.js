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
        return (h(Host, { key: '3efc5b14180fc17e1f236c9f94e3a0aec90278b4', class: "card p-1" }, h("ir-title", { key: 'c09898cb0611ce3a43f830cb3499b198cb0b4758', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '95a0aa26c46f1d05eb7c2f77c2e36cc6666c8bf5', class: "table-container" }, h("table", { key: 'a2c7629b13c33152ea7a72ef190bea2e3403fe3e' }, h("thead", { key: '7ab95afd2476a65a0958a967d720254dca89c88a' }, h("tr", { key: 'fcc0d8b6c3460797dfd6bbb4c8e8a01acc9d0c8b' }, h("th", { key: 'b0e4aedd07bc6215ea98a1945f05265b1df0ad17' }, locales.entries.Lcz_Status), h("th", { key: '612d24f3482fc5a4d32769dcb43b93d79e8e8df4', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '90b2691dcadb58662beca9b438d9075ec24a0246' }, locales.entries.Lcz_Action))), h("tbody", { key: 'a6b4de5b869df8f2c0f3edcff18eba3809dca0ef' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
