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
        return (h(Host, { key: 'a5b795509d2089fe54f43ba7a9ce409142cc6953', class: "card p-1" }, h("ir-title", { key: '5bb06c3d293b23a56cd066a3fb7e4ea7285b1854', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'b6f1283eb3002774eee459dd3c661ae798599ce9', class: "table-container" }, h("table", { key: 'dcf2f64213c8745ce19f0ecdf6b436d20837b66b' }, h("thead", { key: 'ddf08fd95db81ad47ee93e44537a14f06da8c3c5' }, h("tr", { key: '00b8545566afe6505754f5181ed09fcc2d4f04c1' }, h("th", { key: '716c1ed372b70eeeb62d53499f736cbd8f1c7a18' }, locales.entries.Lcz_Status), h("th", { key: '89999a9370e2e20020ab0b00c1f05160408d7663', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'c086cb8cba4f82a432902c46c2e8270d319e12bb' }, locales.entries.Lcz_Action))), h("tbody", { key: '9268fc1b56c09eab1b1dc2209a22f5c756d83e11' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
