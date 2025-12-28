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
        return (h(Host, { key: '39b9e55861dcf6d112d4d82bf80b05a6aa96e7a9', class: "card p-1" }, h("ir-title", { key: '1b3002531eaedfdf9969e60fa96609befd6f2b5b', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '080b0ccce3a9d1ce9160cc58493e3b644b7d5277', class: "table-container" }, h("table", { key: '2870a4b56a9a57b9b03aa5ba3179838b527f0b26' }, h("thead", { key: '503a25fc165476a671fff9b7868bac8c6188520c' }, h("tr", { key: 'dd9512518eba4c642f11cd9106a8d2c1bb9903ea' }, h("th", { key: 'd39441800c02c8c47fa2e9bd1d8bc2440616ff8f' }, locales.entries.Lcz_Status), h("th", { key: '4047adf3c6d199cfa8433979b6da42b4b2345e8a', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '947606130caa457a17f6ea21c5dff1cf88e3c143' }, locales.entries.Lcz_Action))), h("tbody", { key: '645fc64479b8c7fdf8f11e806234f5a4691e2201' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
