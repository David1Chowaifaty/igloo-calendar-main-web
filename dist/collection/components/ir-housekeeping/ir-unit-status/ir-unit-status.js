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
        return (h(Host, { key: 'fbc94bc9907af6d018dd1b908ebb30257a0b08a6', class: "card p-1" }, h("ir-title", { key: '601a4dd058639599d3e2ea0ed6138c2182d1b08b', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'ed3cb107110e4c0e065eb35cc253006a0824d0c4', class: "table-container" }, h("table", { key: '02d58f364ed1d5dc7f35ee1269d4ebc377826d41' }, h("thead", { key: '800178c8c504e75d42d3d3424a9925f97b198acc' }, h("tr", { key: '64f29852f38817303a42812910f63efcb7b3644f' }, h("th", { key: '0363403193658b633d5eb4ca3a2e31b451874d06' }, locales.entries.Lcz_Status), h("th", { key: '2d800794c821ba30458e57ddbb2ef0d820ac4ffa', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '1f335189be189f9511bd3ecb0e430cd9c77ab1f9' }, locales.entries.Lcz_Action))), h("tbody", { key: '549fd665fde6b8374f8bf0470494f204848a86b5' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
