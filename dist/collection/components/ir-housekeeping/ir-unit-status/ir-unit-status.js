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
        return (h(Host, { key: '9e3a2612a568a3a73937972a351df4005a5c1096', class: "card p-1" }, h("ir-title", { key: '8545839fa51d56d4a445ff3f8f37a4c3cafaf79e', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'd3ec6943670abadbe3bd0e7441b6cbbcd8aad371', class: "table-container" }, h("table", { key: '7d4417bafda48fc8910f4e1b194364207be2d5d8' }, h("thead", { key: '636345e21f9e56bb06bcaf36f14363835b82ca43' }, h("tr", { key: 'c1fb8eef027a09c9918777ea46c7dbf7c95497f3' }, h("th", { key: '2bf17a0f52979e32cff5c474f416768fc38dac6d' }, locales.entries.Lcz_Status), h("th", { key: '6936842d39f00857458426861917003053887613', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '3812e0dd145f0e69abfd80957eab0bc86b4b5b79' }, locales.entries.Lcz_Action))), h("tbody", { key: 'e24dfbc626a384f786931001247906b5c71fd010' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
