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
        return (h(Host, { key: 'a4ccf20c1dd6498af331a197e1658f132a2025fd', class: "card p-1" }, h("ir-title", { key: '2e115c14730b24b3896da1deaf224ac35ece3197', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '21620967a690841dcbca4d3c2bed89e128872d51', class: "table-container" }, h("table", { key: 'ae77191fabbc022e11610570a574ad3ea8de3ec4' }, h("thead", { key: '967a7e35e8f63a0c0fd39a6073d2274b42869c71' }, h("tr", { key: '812cd15548ecf4722fae5a804ce0dbd69295d333' }, h("th", { key: 'db5b664862e62e196581e564b3569fe655c56a6a' }, locales.entries.Lcz_Status), h("th", { key: 'c6578a76c3f90aa35e241f927884d3bf30da2bf9', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '75f2437190c04b8362bf6c2313ede5aa9cca51b6' }, locales.entries.Lcz_Action))), h("tbody", { key: 'e2bb2b66371a30e53a7fe6ddecc8c4fb48987f0e' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
