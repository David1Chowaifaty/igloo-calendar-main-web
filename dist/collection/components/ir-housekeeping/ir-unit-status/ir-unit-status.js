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
        return (h(Host, { key: '42f6995847aef12d963140730cf4caa06ba27fbd', class: "card p-1" }, h("ir-title", { key: '718b8bac655a8b4618525a6cbc234dc74d24c2f8', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'd64e434d0d1c82813bc90d60cf7d95752ff7be0a', class: "table-container" }, h("table", { key: 'f233d4c6b2727d8a1767f106b57d40b8e8c6cc61' }, h("thead", { key: '1198892568a1f34bc3843cd90d573fa9d54c920d' }, h("tr", { key: '20057820ec8e61e0c15555723a9ef849619dae15' }, h("th", { key: '0caee3c15bb9fe417a4a6bf6fe0ae8b103fd21eb' }, locales.entries.Lcz_Status), h("th", { key: '8922e3ae26baec5ebe68b1a48dffcd53fd6914b0', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'a616fa22ad9eaa4471516e1bdbc0cfc47b7fd1ed' }, locales.entries.Lcz_Action))), h("tbody", { key: '80803c675a1f51bd2c9cb42702a69d1ab75baaee' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
