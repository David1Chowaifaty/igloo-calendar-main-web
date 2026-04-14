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
        return (h(Host, { key: '540c3500bd36fb04b8dfd1f263f327f19969cc62', class: "card p-1" }, h("ir-title", { key: '6acbf02711f3446f9227877fdf591eb1a5e9604c', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'b4543b760cb2a680da532def361a17b384f9c14c', class: "table-container" }, h("table", { key: 'd37fbd002f546197b1a0835a7cf90ba34229e467' }, h("thead", { key: '3c3b689f033d02c0fc0d60eff7be1b7e26f35ca3' }, h("tr", { key: 'c948d863d4b0acb5b1b34e495c95ad701bfa5cc1' }, h("th", { key: '4ecba46c2d37759b5fc0a8e8ed1481398f4dba25' }, locales.entries.Lcz_Status), h("th", { key: '648fe3f06559f7d8f98299be7231be7c17e3e189', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '90ce68ecdeffff45d8275f932572f87f3c126042' }, locales.entries.Lcz_Action))), h("tbody", { key: 'b99ad7b685da708f00039287fef3ab322ce84132' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
