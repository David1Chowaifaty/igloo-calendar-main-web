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
        return (h(Host, { key: '979900dca6aa87859bab96ce8954dfd23645670d', class: "card p-1" }, h("ir-title", { key: '1ca24bef6920eff7d866351064d9629b749c31c4', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '6ca20cc1e6c3b56ce24a74b2bbb52687ba05ce8e', class: "table-container" }, h("table", { key: '96b0663ca2fb2b11be63cd658e16e4e0adeff29e' }, h("thead", { key: 'f04574eb8f44dd07bdac7ffe2d9f06b237fe50b1' }, h("tr", { key: 'a6ece3c66ff9e2748fcd570d6564d5c12b803c96' }, h("th", { key: 'ae350bbab6773c3aedc6daa9caaef07c6ec5cc3d' }, locales.entries.Lcz_Status), h("th", { key: '3a28840381127c65c9ae62928f67b67e669fe863', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'a9f8f930c84eae86c3165fc0c2c4fb524d336aec' }, locales.entries.Lcz_Action))), h("tbody", { key: '20ff35eaab20c833874f70fa364d50474f9ec37c' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
