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
        return (h(Host, { key: 'f50730b31274ba881cdad9dcea77cd2fe0e4d6db', class: "card p-1" }, h("ir-title", { key: 'a22b40c0e7590ca5328fc89cc88d4a7b324bb302', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'c1c5a3e7ce210338cdb1a3ac54cffe5d8de78c5c', class: "table-container" }, h("table", { key: '7f60eccaf5c0ca73b4166a54a222efe4f2bbcdeb' }, h("thead", { key: 'b8e3775d54bd4aa0c0e350b624fcba4e643d9a2c' }, h("tr", { key: 'dca5c2591c85ee525fd4d8794a484108c057e11e' }, h("th", { key: '038d77ba356b3ad302d69152f29137157276d0cc' }, locales.entries.Lcz_Status), h("th", { key: '1acabc7ac194d3e35ff9ca70b4b822bef5e5d589', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '62d99ea2cb151dd5be230b3a21359e3ea53c0622' }, locales.entries.Lcz_Action))), h("tbody", { key: '2a7cc37f2091cd0128cfa891d0295c543e5a1152' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
