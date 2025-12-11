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
        return (h(Host, { key: '92647d3b1319c889207cefe6923277b58e51371e', class: "card p-1" }, h("ir-title", { key: 'd48a925af8650873a486bf2b982cf6f6c6e1e769', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'd364e9ee67b7a2ee356ec640311b9ee5551d173a', class: "table-container" }, h("table", { key: 'b22a81cf9f86fb377e11474342e2f9309a04f78f' }, h("thead", { key: 'b861277a2e37f5dd9c01859120180fbbcd1f8cd6' }, h("tr", { key: '2765a3d8828df3b5d72e9b62f8f094bcc0851b6d' }, h("th", { key: 'a16dc80308ee00d93961b4f4a68cb23b7dbbed01' }, locales.entries.Lcz_Status), h("th", { key: '9c4816706ddd7e2d9b6f39b2b3932a1dffba5c76', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '89530fda310898779464834691ae0351f35e2921' }, locales.entries.Lcz_Action))), h("tbody", { key: '3b4ae7b3704848f106ab085a5ffa756c1fac1960' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
