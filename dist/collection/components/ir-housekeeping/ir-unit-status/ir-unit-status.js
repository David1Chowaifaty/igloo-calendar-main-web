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
        return (h(Host, { key: '04df17e97630362f43a9d22785bf81c53f3b34a6', class: "card p-1" }, h("ir-title", { key: '85ae4e0559b19a158f86ae9e035c7ac9a278e9c9', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '65f0ac13c308fece996ef73e288bdbacd12246dc', class: "table-container" }, h("table", { key: '53dfe153680f8a7bf62ef12b0dfbbfcd7c1322d0' }, h("thead", { key: '6a373d821cea257766caaffdabe0c4ebd3f9b165' }, h("tr", { key: '7eaf20195191ecc3b423f46fca4ef018c2c09b11' }, h("th", { key: 'f393dd1aca913ffbdf9f75b7b31d4823727ef94c' }, locales.entries.Lcz_Status), h("th", { key: '3a27348966e4d6e09df4f18a5a8928c336bfada5', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'cabfcf898f233897512a7f5ab0be3e838bdcffa7' }, locales.entries.Lcz_Action))), h("tbody", { key: 'c8f0a121d8f7dc43688ba5ebf34f17125a956c79' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
