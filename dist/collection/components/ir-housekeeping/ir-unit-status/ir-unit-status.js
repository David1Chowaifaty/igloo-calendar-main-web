import { HouseKeepingService } from "../../../services/housekeeping.service";
import housekeeping_store from "../../../stores/housekeeping.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrUnitStatus {
    constructor() {
        this.housekeepingService = new HouseKeepingService();
    }
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
        var _a;
        return (h(Host, { key: '140f47b97ffe4d6fccb2338e17f3d90c2edde8f2', class: "card p-1" }, h("ir-title", { key: '5bc6f9ea602e00e0301faecf2cbd8f3332e8b31e', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'e2549d1ac808cc69cfd88540dbcdbd6a605f79d4', class: "table-container" }, h("table", { key: 'd2bc02d63bcdad4777f7585d261377571f3c19f9' }, h("thead", { key: '8596aecf1ef70db2802a4ffc86fe5d9dca2e90e8' }, h("tr", { key: 'c37cf13da061a938d0ef3ab19d6a4461654206ff' }, h("th", { key: '73c82ffb3e2acdb3c111aafb1485181f955cf2b6' }, locales.entries.Lcz_Status), h("th", { key: '77ab2c3b9c1c07cfeb3931c2835b6cfe77c2ae48', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '04a6c2e90994c744670f11b8ea2a9752599b341f' }, locales.entries.Lcz_Action))), h("tbody", { key: 'dabfe410c46f7a1b8a7892bde5a1ac4721d9ec5a' }, (_a = housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
            var _a;
            return (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? (_a = status.inspection_mode) === null || _a === void 0 ? void 0 : _a.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                    const text = i === 0
                        ? locales.entries.Lcz_YesOnTheSameDay
                        : i === 1
                            ? locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                            : locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                    return {
                        text,
                        value: i.toString(),
                    };
                }) })))))));
        }))))));
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
