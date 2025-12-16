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
        return (h(Host, { key: 'afaffb423e71804a6e5bdf60ae8f835108d9b9e5', class: "card p-1" }, h("ir-title", { key: '00c7c3465ca201a40acf38b0b1fd878931fabb21', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '5096c6e76e991ada825f9afacee119255ed4d817', class: "table-container" }, h("table", { key: '9c5f21eeeccaa7976e70d8cfce8ecf43b6e2b18c' }, h("thead", { key: '5b1d606e6b2bc7025de692982837df8b3d8c9418' }, h("tr", { key: 'bd735e129c9607e1f92f4519e37f2d4b7879cbf2' }, h("th", { key: '46e6e08671f64fdf33413b3dc3199a98fc8f571f' }, locales.entries.Lcz_Status), h("th", { key: '7525d79324a64fa4c4d61e0472accf83bedd2502', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '232df05497003ea25b74425dce22261c5db8587f' }, locales.entries.Lcz_Action))), h("tbody", { key: '39294a7a27c67d45270e9b47dbe29ddccf95d359' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
