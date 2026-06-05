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
        return (h(Host, { key: 'f6b9445b65a3d8ba78663c0b9015e1d7cf6804dd', class: "card p-1" }, h("ir-title", { key: 'b8dab2650c74064dccedfd56071165ee0287a9e1', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'b74312567a0c163ecc26a8a11376caa5aeacb216', class: "table-container" }, h("table", { key: 'caa3d67ca9104830b4af7e38384dfc0b5d69697e' }, h("thead", { key: '2e0f65fec63454b46a099b5b4dab36397ef9f373' }, h("tr", { key: 'd9d3255a83606df64f97f38106f95510a07e1c4c' }, h("th", { key: '0de0be79f0685565993a6cd608389f6daae88e33' }, locales.entries.Lcz_Status), h("th", { key: '44265a0266a45a99371aaa5d4d17d507735cc3ca', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'bd1cc3ac20be6ac03742120bde5ce46cc4215860' }, locales.entries.Lcz_Action))), h("tbody", { key: 'b4aa375637c6b60f297ebab0b98ca72479d5b2e9' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
