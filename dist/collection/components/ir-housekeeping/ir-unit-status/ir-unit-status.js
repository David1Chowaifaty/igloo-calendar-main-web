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
        return (h(Host, { key: '8b786bef88e3dcbe6eadf3963636286db9a74a9c', class: "card p-1" }, h("ir-title", { key: '5f0118c0ba2a8bba5b7d9a0627d4e5043b0f12ad', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '55c967988634225d53e7002406c47d05aa518c3a', class: "table-container" }, h("table", { key: '6c213c85a02def189b44ebcf28f9e9903021c2e1' }, h("thead", { key: '7d47633d109c706eb667cf4f0e9ddb5dc5e84254' }, h("tr", { key: '406c7a3ee916d2a7ed5c72e25730df8338dc4a6a' }, h("th", { key: '5c5952585f0c9453d01f999712d99f3caeb6be08' }, locales.entries.Lcz_Status), h("th", { key: 'e92c4d4079b40518555e01d49a62fd304f9c92f5', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'ba2fb95aa803c3f522a9125cecc4dc958b4e4eb0' }, locales.entries.Lcz_Action))), h("tbody", { key: 'b64b8ed4ffeaa12fa2d9d500b0e307c0b6620605' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
