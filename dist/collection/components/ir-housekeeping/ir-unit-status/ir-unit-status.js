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
        return (h(Host, { key: 'dd52a0052cf4d89225c620480f4b55aa1a4feeae', class: "card p-1" }, h("ir-title", { key: 'a078ac8e39f99d81534a98ab8d268b78c6c955d5', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'd8f9edaa6a6354f0d736095e70ff0fa91168dc1c', class: "table-container" }, h("table", { key: '9a24c4e859b94cea8f53f36b3f6a963e3c822e4b' }, h("thead", { key: 'ed2363bdbf647612149038fa004e8dae9c81b1ce' }, h("tr", { key: 'f597afee7add79599b36f1506b410853284820a4' }, h("th", { key: '08dcc88a0d9e57f00502e386ee0744d3d047763c' }, locales.entries.Lcz_Status), h("th", { key: 'ded4e2820ce0941acd9625073db645e7fb956a63', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'f56091661ba41804edd7e2249db3b52720dad873' }, locales.entries.Lcz_Action))), h("tbody", { key: 'da2aca216cde62141b3f3cf82c625d316d0106e2' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
