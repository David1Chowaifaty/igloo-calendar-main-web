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
        return (h(Host, { key: '19635935e4ec018b6a094dd4c5a7cb48e6824e50', class: "card p-1" }, h("ir-title", { key: 'aa83eb1481224cf5743475375d21f66a110a5a4e', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '1fa87ba474602c33ce84af97a0bd4d6b663a34f4', class: "table-container" }, h("table", { key: 'fa5f41c4ae9e267e0ab4ca6698518a6494cc64c2' }, h("thead", { key: '08d20091e6d0bb8cea7496f22c7e9d214060e3e7' }, h("tr", { key: 'f5202aa9c19a1983ec7cc66c24bea0f899f8b23b' }, h("th", { key: '5f85eace4596e660ad22ff3281715c7ca31f9aee' }, locales.entries.Lcz_Status), h("th", { key: '806382c81e21c3daeaa1c657314dc3caf70e817b', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'ad1bc7db13799ce43a664f1cb1aa7603595b913b' }, locales.entries.Lcz_Action))), h("tbody", { key: 'e050c28361cd621d89a6ce7606bea09a3b3d23d0' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
