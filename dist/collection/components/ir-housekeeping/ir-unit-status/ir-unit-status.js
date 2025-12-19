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
        return (h(Host, { key: '3436c69913d839e961666879ddda2dc02c47ebf9', class: "card p-1" }, h("ir-title", { key: 'd109627266da5f45c32e1609f28f65c4c5042c2d', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '6c225e44b3c8b2fe7019709d4250137d29bfeddc', class: "table-container" }, h("table", { key: '65ef7f90c511035b54950ac8b26e6375372048e0' }, h("thead", { key: 'b05ad0a9d6247f329004ac0d5815c3d5ed3bf3ec' }, h("tr", { key: '76d1a9d55ba27ca1bed82620efdc59710c6de5f8' }, h("th", { key: '0447eb91656f196c258c796760e53e68d333a2df' }, locales.entries.Lcz_Status), h("th", { key: 'd7f8a7b95c978584705c5378f0743703ac403a7c', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '7bc11e534c6afe79639e1d6d0ebb4eced680b1dd' }, locales.entries.Lcz_Action))), h("tbody", { key: '62e4ec22cde33d5a335c0e9ca95f415479db7bf8' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
