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
        return (h(Host, { key: '54a56647c175707fbfbad6b7f180f98be2f058cc', class: "card p-1" }, h("ir-title", { key: '9ded9fce329e8dcd4f1e257840d22972c0c881bb', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'e7cfcaf8644f8ff3e6c03d51dda78a6cd68c2eb0', class: "table-container" }, h("table", { key: '6ab9a8f1a76c4ca49218daa05ff621d994d46d85' }, h("thead", { key: '0a0c338408d3b864737f48c01bc82df3697e8cc9' }, h("tr", { key: 'bc4997d603b801ecdbfdaa13b03c76d095b4c708' }, h("th", { key: '92768d46ba786dd02a4fbdaf6c856d2089cad392' }, locales.entries.Lcz_Status), h("th", { key: 'f34685403fa2d93a0d1f92abe1152e7d130913c5', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '7f4446aa1be6abb2ce9ce19b1a76ce7721e31b05' }, locales.entries.Lcz_Action))), h("tbody", { key: 'd8883fddf0b2b8c7e4f725abd391666db02a46b9' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
