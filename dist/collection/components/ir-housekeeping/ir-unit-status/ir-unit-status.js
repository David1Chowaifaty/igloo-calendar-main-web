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
        return (h(Host, { key: '631628d9f08364412e52c9e81958d359442da8fb', class: "card p-1" }, h("ir-title", { key: 'b505b31edfbbba3b784790a908ba3afb622821a1', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'b2f5a4b9056f581ddb0aaa9965a3ecb54fad3735', class: "table-container" }, h("table", { key: '459cbe90ed9791a13bcefca11faa497663607f03' }, h("thead", { key: '5ad0cd39064331f3d0513a3b86ccbea2dddc2869' }, h("tr", { key: 'ac4c3ff8b7a29900dbdfb746780ca9f5571d317e' }, h("th", { key: '73518297c31ffeb6ac89dfe6be2e0080fea26fcc' }, locales.entries.Lcz_Status), h("th", { key: 'd970088986dee9d4dd013bff47ede94cb98873ce', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'df2c399e434f673029ede8def45b4522494a32fe' }, locales.entries.Lcz_Action))), h("tbody", { key: 'e6f43ec4f55f799fac797fd70489e81031961fe9' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
