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
        return (h(Host, { key: 'f1a3eaab59a82d7ae83651eed690739229543536', class: "card p-1" }, h("ir-title", { key: 'e9dc92b74e93d7ba97fd18677387f709a5d2317e', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'd0ae8576107d9c6fee6452acfc2509b35d2f9a8a', class: "table-container" }, h("table", { key: '5c757f8ebc3fb1cb03d075df8d06db5733f46b84' }, h("thead", { key: 'fccb0a6aa5391c0c5ca0cfb73b85c22124c35191' }, h("tr", { key: '7be1848c3e64be7e4fbee8a2fb5f7a96ac068417' }, h("th", { key: '25c8020d4952018c81ae4b86a9552b55c27d1acb' }, locales.entries.Lcz_Status), h("th", { key: 'd5cb856fcbc41322969d82261700082c022e1cf7', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '976a3d8173a0aeb5600a48440b9e9d299ea66564' }, locales.entries.Lcz_Action))), h("tbody", { key: '9f15cf3c98b4d9410919c09211a577ca266d610b' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
