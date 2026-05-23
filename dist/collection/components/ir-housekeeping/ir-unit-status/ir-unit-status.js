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
        return (h(Host, { key: '82a97906e334c94da8371c0c8a444bebd9c900cc', class: "card p-1" }, h("ir-title", { key: '106272f0c556730cd31641969ca346e62c1dee30', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'ee55a8807eec157b383f044344b3ee5b1f89fb01', class: "table-container" }, h("table", { key: '413f5283e9ca7d01429d42e5cd9d28b19e146e1d' }, h("thead", { key: '5a52237beac1a1426c4589114a68f41bdeee7030' }, h("tr", { key: 'aefc9d3d78b77821f5af20f4c19674794367aaa1' }, h("th", { key: '79e4cca5b92d0f465c2f5b476da968dfcaa60b2f' }, locales.entries.Lcz_Status), h("th", { key: '4bc8f90ac642cabfc4b4daff23012be2e55ec5c2', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'd0574268d5cab9c7105bd15d55d9efe4dc662170' }, locales.entries.Lcz_Action))), h("tbody", { key: 'e5a6d364ae6107905593e3e37049059a8049d475' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
