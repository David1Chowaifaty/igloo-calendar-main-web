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
        return (h(Host, { key: '0b9acd13f3d3503943e04234d24b04d858439866', class: "card p-1" }, h("ir-title", { key: '7d372ef90918a1528012fe76a2e643f6cb2e8304', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '52a9a7c0f8fceebc3c9ccc1844defe5ab1d3f253', class: "table-container" }, h("table", { key: 'c1dd77365df8eff41379ce50739b23c85830a101' }, h("thead", { key: '2568767c02c96ea98a881bc1c8e4140e4bf264e6' }, h("tr", { key: 'ab8eafa6a4e7c54e3d83dbe5db7551cbb94fd4b5' }, h("th", { key: 'b957801ce77b47c0eccefbc775eb7a6a3663a708' }, locales.entries.Lcz_Status), h("th", { key: 'eedfd0997e3b178a930ea122422299583ce72f2f', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '39f92a26be796c9f06bb2615595f10a5523c0b1a' }, locales.entries.Lcz_Action))), h("tbody", { key: 'a0d8210e682a77a5dd055fd9b780d38666e8e650' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
