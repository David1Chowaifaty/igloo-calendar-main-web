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
        return (h(Host, { key: 'f7a9b7dcd0a2652f7042aac1a06372edb10b5dbe', class: "card p-1" }, h("ir-title", { key: '11a41fa2061aa6555776565e753a0c72cb2fd960', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '5c6110c5fb68626031b85ea6be341fb7d389a5ef', class: "table-container" }, h("table", { key: 'bb017a124cc7814a5d635e3d4afe5671791b3300' }, h("thead", { key: 'ef49bd2ff42f66eb05856caddcd8c5e555f96d59' }, h("tr", { key: '7f16f544e5b842ba6c9c5094ceef0b16e83eff02' }, h("th", { key: '8d86149e30d681443b67edaf0f9325c7649d779a' }, locales.entries.Lcz_Status), h("th", { key: '15f32ba0f09606829f4c5cce374336dcb65930d6', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'e4c01098b36d42fabd12253b30a52d88bb26f7be' }, locales.entries.Lcz_Action))), h("tbody", { key: 'f529a674589fa0709a4f2ade21751cfc14e36475' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
