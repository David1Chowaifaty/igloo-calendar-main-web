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
        return (h(Host, { key: '3b7fbc362a13a19ce66e507b0f1e678bba0e77b7', class: "card p-1" }, h("ir-title", { key: 'f4e7825de2df0c3d535b280fda80a301c1ef0e17', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '20ba38fd4dcd074fc3bf5df0b92b457458d9639c', class: "table-container" }, h("table", { key: 'e20e850db8c61e7395ab6fe64a63927c3f7a9db3' }, h("thead", { key: 'f9276325862326c762fb11deedc6200e7894099e' }, h("tr", { key: 'b3a6aea5d916d9eff3d906699bb7639557c8453d' }, h("th", { key: '8cdd5d1a3c5f7bd9d2bbd327f49abf30ad916548' }, locales.entries.Lcz_Status), h("th", { key: 'a30632525637c6b9e1ae7438fb0f8b7d35975cf9', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '830e336e59b0395440bbc90a2410057b485c9675' }, locales.entries.Lcz_Action))), h("tbody", { key: '56aca16974e366931fb9992e69c0d114d3c06804' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
