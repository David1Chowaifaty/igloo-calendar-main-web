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
        return (h(Host, { key: 'd5a338a313251b29feaaeff938d71c2ad87fb98e', class: "card p-1" }, h("ir-title", { key: '40ee4512166274fc6831b88f57bd8cf583166d65', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '7a9c4ee920fe6220a3fa512a53a14c61f230a0ad', class: "table-container" }, h("table", { key: '07cf7cf854cd414a633239ac7ec0bb9f747fe4cd' }, h("thead", { key: '8234bcb33ac2e8f5eb3cd07a7e4b3f054caa4943' }, h("tr", { key: '456006f1a39fac7a1a42177f948e86a211d813e3' }, h("th", { key: '002a99770cddb4a5a886be722d033ae6c374e45d' }, locales.entries.Lcz_Status), h("th", { key: '4b08b30476d201d551191714dd0834f531eec007', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'd679d77cfffe6e8c55397378a15b0cc8f83a3990' }, locales.entries.Lcz_Action))), h("tbody", { key: '3294f9f5a2be7f2ea8701c7aaedd97fd0fcbdfc7' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
