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
        return (h(Host, { key: 'fde715f2bef60d97f455479fb9443b38a224258e', class: "card p-1" }, h("ir-title", { key: '2bb93af09cd314d39ccbb10d60aa93d376626395', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'fcde9f5631e0d2fb6ad7f4c89a174c478dd91384', class: "table-container" }, h("table", { key: 'b50a85a9fcdb25d87d69ba9afba67a6cb74458e5' }, h("thead", { key: 'f66f4ed6d47261f2a57597c2e288ef8eb4dddbd8' }, h("tr", { key: '54fb7ffcc0c9ea03e2603570fc200ab0309823ce' }, h("th", { key: '13153a0968ed58ed2a0f4361c8d615503e219a12' }, locales.entries.Lcz_Status), h("th", { key: '0a89d138aa4cfd9bf82d42cf2fc9561cde3300a9', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'b595ae8e5cc010b282226380d75056c0f3c8ade7' }, locales.entries.Lcz_Action))), h("tbody", { key: '243760b72dab84972916d92572b173209019fc4b' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
