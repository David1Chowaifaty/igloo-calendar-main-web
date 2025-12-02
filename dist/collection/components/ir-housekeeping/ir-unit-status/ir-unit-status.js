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
        return (h(Host, { key: '623d2a376ab307e6444332cd2d859a8d3eb8dd5e', class: "card p-1" }, h("ir-title", { key: '0c88da165c84871532237af0a0ec7dfd20c51742', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'f2459d001ef7a4960859b22b63d4e797212ca678', class: "table-container" }, h("table", { key: 'd1a5d8fb46ccdd255b6a04e3cce68eca6879071a' }, h("thead", { key: '0747680fdf5185387012843526fa5beafe616211' }, h("tr", { key: 'a0fc9ce5bc7911d96e456fb2a3238587a65f63f8' }, h("th", { key: '8e63dba6ed87846a6a375840c6c627512630ef08' }, locales.entries.Lcz_Status), h("th", { key: '39f68297abae7f62d28348fb7ba69258a3c55ee1', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'be9a3b0be4df9a4c6ae0981400f85deacfa47e4a' }, locales.entries.Lcz_Action))), h("tbody", { key: '54e01216e8b4fcee0b42ead77acaa6aa0bb90ac1' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
