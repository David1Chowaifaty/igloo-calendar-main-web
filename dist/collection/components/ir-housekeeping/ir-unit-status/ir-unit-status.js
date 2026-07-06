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
        return (h(Host, { key: '2028e57913368d576adbb735c831d05ff4b10034', class: "card p-1" }, h("ir-title", { key: 'ee5b010421cd0d2666563ca9c13a31f1e24db1ba', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '2f249619b2e95f0b44f14cc44c408621ff7822b9', class: "table-container" }, h("table", { key: '1525b1eb22111d397db7bd030ef48b930f3bf574' }, h("thead", { key: '6ada19a119e916aaeb51817821dbd4fcca87e434' }, h("tr", { key: '8b0e037a98dcce5c28148985e7b6e1f042eb29e0' }, h("th", { key: 'd48df5321383727b2c02b54706ab6c29a9d03467' }, locales.entries.Lcz_Status), h("th", { key: '90e8eb7843b65cddab690e8b464f61d68ec1a9d3', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '823d20392c818d82138d049c6ebd9221641569a4' }, locales.entries.Lcz_Action))), h("tbody", { key: '11e61ab3cb22643d9dcd119022c72e85d7b1a0fd' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
