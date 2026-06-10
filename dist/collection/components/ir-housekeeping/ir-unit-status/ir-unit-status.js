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
        return (h(Host, { key: '41fd2f21ad17bbe776139d4c8897fa00e67b0b27', class: "card p-1" }, h("ir-title", { key: 'b2a95d8064c6e1e4eb7445ec1324fe62a9ee02b9', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '913ff0944dc6bfc2a9f1dadad8b02f0289cec4f1', class: "table-container" }, h("table", { key: 'd8daacc53856c3e59c1305c1730732dd8f8383f3' }, h("thead", { key: '51399f4503913d1b77efc7c6a6adfd3f89a1f5b5' }, h("tr", { key: '9ff0909d1e20bb483970b1e2864e081e1c413874' }, h("th", { key: 'd6d48d7a2c51fdf8169ab74829510378f32aa8c5' }, locales.entries.Lcz_Status), h("th", { key: 'bb187c817489a28fbca3625079f8e6f009b8f46b', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '18a3ce95d294ecccb8e755d937f2429aa639c2d9' }, locales.entries.Lcz_Action))), h("tbody", { key: '06d2b389e361ac9d129ef78d827b9aed1c5aab00' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
