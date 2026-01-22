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
        return (h(Host, { key: '298a2a065a23bc43f5923ecd652f3587bc980e2d', class: "card p-1" }, h("ir-title", { key: '4513c8f5b828519c10bfa0b7a53ec409388bbd10', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'c1df10c43bdfe3bff7cf2f9f783ec84a6d521a7f', class: "table-container" }, h("table", { key: 'accd12d63e6bf567bedbafd2dac706154bd24e45' }, h("thead", { key: 'e1ea1652e07ec063e2c6aa88c42824c413652739' }, h("tr", { key: '291438389d7b5ab41097df5f7eb86b0f005d817c' }, h("th", { key: '33d4c59fe570b841f38b284cf97c9fbc1f73f0a3' }, locales.entries.Lcz_Status), h("th", { key: '38d1a9a6bf2e412703fd9c983133ce2d85915216', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'dbcd1b893831f1e417a4e046c8837419080ce875' }, locales.entries.Lcz_Action))), h("tbody", { key: 'deb2bb551f8e11ce3d77442a736e0654d4939a09' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
