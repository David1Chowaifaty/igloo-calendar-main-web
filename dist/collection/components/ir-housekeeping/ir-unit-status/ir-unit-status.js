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
        return (h(Host, { key: '2d039b99f1a254067deaba2ea3b9090c43a3d04a', class: "card p-1" }, h("ir-title", { key: '7bbbbdd441d276e73ab4cecdc5a3f54b6cc8deba', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'c8c1fdd0f1f6c7e0b6a0d5d1cd554aab9c918b89', class: "table-container" }, h("table", { key: '9da9158be155b16447ce9dd2c6e7fc2b2af55025' }, h("thead", { key: 'fe07f8e22fd2ce20cdea397b2e945f213f404428' }, h("tr", { key: '51dafd0ff03de61d12edc6e0fd549a92e7c04ae8' }, h("th", { key: '3e418acfc3f8485e95807315534703fbd2ed73e7' }, locales.entries.Lcz_Status), h("th", { key: '5b87fdc998c6815805293da02eb94cb7636fbba3', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'd41b06814cab1a700fc82578de57cf80f1593914' }, locales.entries.Lcz_Action))), h("tbody", { key: 'cdeb6723d38f128435034cecf768cecb94befbcf' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
