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
        return (h(Host, { key: 'be4c25701ace5bd7fc530bcb8bebf71fc5a8c181', class: "card p-1" }, h("ir-title", { key: '2de622c1b01639251c59fa7b8d91aa64ac868429', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '4992eef4ad95a9ae4d9f57223c65a0b52659949f', class: "table-container" }, h("table", { key: 'a95f0fb8549e23ce4d7c77f26bf08bb54286aaba' }, h("thead", { key: '8e2cc6b0200445d3ec8643abde7f0552fb605acf' }, h("tr", { key: 'b583d8352c6c3116359616492608a174ec9a5436' }, h("th", { key: '1e483350f7cb0f051afadd8e8efc2ab4d47035bb' }, locales.entries.Lcz_Status), h("th", { key: 'ea11e24d0a556c76ad21e340e93718a61c2bfe4b', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '4d8fd045cfb102779e930a917dd539a6eb83e3d2' }, locales.entries.Lcz_Action))), h("tbody", { key: '3e595c5d49b7463a5193d3d1b8969438be25f731' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
