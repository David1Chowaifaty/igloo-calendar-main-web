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
        return (h(Host, { key: '5ea7ebf8720df386a97642690be4b284dab8abc6', class: "card p-1" }, h("ir-title", { key: '5b8000964db2ba9cee5e9410fd6ca1a755712f7b', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '319d507f87f5734a3889c74f5ac3d9a29ea1deda', class: "table-container" }, h("table", { key: 'dedee1cd607bd1b0c26269e0f32e8d1fa06e8bd1' }, h("thead", { key: '4135ac93488cd1fcbcaa841ae001abb55c375d28' }, h("tr", { key: '912f702f10e1f87ab7a9666e05a50bfb07e463e1' }, h("th", { key: '34f06eb727b888dcf63565442d6883bb38ec8534' }, locales.entries.Lcz_Status), h("th", { key: 'b4c1661a235dfe62fbeea9f878afb841c644ad01', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '24a2b443fa837157116374ab63bcdcf3b3d64437' }, locales.entries.Lcz_Action))), h("tbody", { key: '1046397b4624ad5e6a56f0f277fe5022e27f2b14' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
