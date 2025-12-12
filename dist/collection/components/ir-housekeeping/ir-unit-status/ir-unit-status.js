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
        return (h(Host, { key: 'a6111d27f5692b25eec4f8be896508b381a58d1a', class: "card p-1" }, h("ir-title", { key: 'f578c5f0cda76ececeaec66c7064e9fe26e5e50c', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '97dd49c0a7bca8ce9e14921a09efe104749cae22', class: "table-container" }, h("table", { key: '1b4249a6b750b68ee1325b929536e35e6b38adc5' }, h("thead", { key: '6eee0f6e86c5be5260a89c2d4ac9b26466e37dda' }, h("tr", { key: 'b4d5ce18d04c4ba3c26e69cabd99d90a2bc07053' }, h("th", { key: '1006b1b95ec443247d41bfdb0b57c5bdd3616dc2' }, locales.entries.Lcz_Status), h("th", { key: '2e780121a71e412db9dfdc54da5e6898f12c3470', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '8310211f8c6fd7d795ccb4d36d42afa661bd7e6f' }, locales.entries.Lcz_Action))), h("tbody", { key: '1cee324f1a944ef530e58877a3203a0a1fa92bcc' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
