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
        return (h(Host, { key: '6b7a212cfc0aab79cf14cea52e0a645d7cac54e8', class: "card p-1" }, h("ir-title", { key: 'f87980b24fdaa9c325613ba53a77b75907d3d379', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'a3e28013340a573e81bfa14e22631ae5e7f4a971', class: "table-container" }, h("table", { key: 'bf42e522a91edc0e744c1141d3b02bbee16c15b9' }, h("thead", { key: 'f982e8787ac5a61de5120fde464c1a1183804244' }, h("tr", { key: '048c104e581a8a9d638dfe2ebdd0e22f247eb347' }, h("th", { key: 'be399a0e00bf74b316549fbaa8a8285f6ef1ca47' }, locales.entries.Lcz_Status), h("th", { key: '342da69df8ee5a2df77d2e94129c36aedd46f1c5', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '6d5778df5bf05a290406b68f0e2a844d83373241' }, locales.entries.Lcz_Action))), h("tbody", { key: '367cbedc0eaff792fe0c6b462a8d4081bcb87a95' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
