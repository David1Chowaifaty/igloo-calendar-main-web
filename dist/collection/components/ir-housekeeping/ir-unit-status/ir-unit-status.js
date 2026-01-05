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
        return (h(Host, { key: 'e9eb711a8022ef560bbdf6986af85e8c36a93f62', class: "card p-1" }, h("ir-title", { key: '7de044b9285dbef18b979ceb4a08f5d4d7906e8a', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '2ea25a88bbe2348c28e84325ecba7d64b176336d', class: "table-container" }, h("table", { key: 'bd159d66cd26bdbe21c0941d99b88e68b7d7471a' }, h("thead", { key: 'd4e25886acd7834c6352d878b4ac8686c3b49a1b' }, h("tr", { key: '442140de7ea6aba91f86a1570767135ccfed7933' }, h("th", { key: '2da89435b525859c6025434bfea75bc20dca3b54' }, locales.entries.Lcz_Status), h("th", { key: '3069caf015199f2e42ae00dcc207a6e1f14a22a4', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '6fe994b6b72ad4a4ea77f5e5f77ab6d86b583b1f' }, locales.entries.Lcz_Action))), h("tbody", { key: '1bb4b334739f0228854a3c17f87deca380170849' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
