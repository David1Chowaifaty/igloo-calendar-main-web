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
        return (h(Host, { key: 'f5ebcf5ba77f64d42ea087e3e69bb2b5207a9f20', class: "card p-1" }, h("ir-title", { key: 'bf9bbe4aa1f94c722e8420343584d4fc9758b455', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'a42bc34203abb9ced035f84dcea753487fdad0b9', class: "table-container" }, h("table", { key: '50c8793384043ea40bd45e18603b0669db8ec752' }, h("thead", { key: '3062a5c177ed747af897a7905f9c0265f423f256' }, h("tr", { key: '214a1ebd08fe0a1ddc09e292d5a9428b8a71cb29' }, h("th", { key: 'b234e64a1b5133266727d77fa93adb746b261f73' }, locales.entries.Lcz_Status), h("th", { key: '2fb27d1a7ae37255ed7529f71967c325c01f3327', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '1efef1dfa4ded9b66fef156697d473dcf9aefdd4' }, locales.entries.Lcz_Action))), h("tbody", { key: 'f4481aeeca1a3c9be3e43bf07fb6291b10f3fb2c' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
