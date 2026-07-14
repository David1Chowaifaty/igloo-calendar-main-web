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
        return (h(Host, { key: 'e764685956839a20584f3a65891da80604185d27', class: "card p-1" }, h("ir-title", { key: '57b73180622e5a5bc6ca6a92a59b2f175d2c451d', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '77a8af6136bdc81caade154c1ff3ab1630f5070f', class: "table-container" }, h("table", { key: '1f9667fd8e051c35b6daa586520e7f99db273cbb' }, h("thead", { key: 'b3038fb03ee879dd97b429a48852d43c6ed9b661' }, h("tr", { key: 'f66903e6d0e522001fe93909857bf216ee303c4a' }, h("th", { key: '5ec9859829a5a90b03ade072fd965aa40b1926d0' }, locales.entries.Lcz_Status), h("th", { key: 'b42659cc25c281f4bf4890d2135c5ac7615c57de', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '4bb20f2d656dd2430c1d2193f36d7caf82dcc544' }, locales.entries.Lcz_Action))), h("tbody", { key: '9cdcc2e570363d11d899087ef6304fdb6e0570ff' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
