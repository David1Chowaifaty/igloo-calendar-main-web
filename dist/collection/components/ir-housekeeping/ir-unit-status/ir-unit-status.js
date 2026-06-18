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
        return (h(Host, { key: '2ddb43dddfdc27ba8be321ed6b6f5be0ae341711', class: "card p-1" }, h("ir-title", { key: '845e2981a856db731872e8396f9a84899514b4bf', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'e802fb0afdbfadd136eaee669c86edfadf6383b2', class: "table-container" }, h("table", { key: 'bc90e7f14ca474789c786a01085cbbb10b8d099e' }, h("thead", { key: 'a52bf5bfcd34de5873a47d21b377c449d9f2d5c0' }, h("tr", { key: '2743b7fd7a8e894d9ac4470b84080ae53deaec00' }, h("th", { key: 'e0d4dd8c37e9e64e5a503a1da83097229894e11b' }, locales.entries.Lcz_Status), h("th", { key: 'fab4d80f62f229dac312144ef6b011f91f40072e', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'a4a8b15bf525dbd9e1698eef1bae88667e7c740b' }, locales.entries.Lcz_Action))), h("tbody", { key: '3b3ab8aaa0ba1377c19f82bc8ccf1575241eb9f8' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
