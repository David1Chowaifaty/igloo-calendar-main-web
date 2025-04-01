import { HouseKeepingService } from "../../../services/housekeeping.service";
import housekeeping_store from "../../../stores/housekeeping.store";
import locales from "../../../stores/locales.store";
import { Host, h } from "@stencil/core";
export class IrUnitStatus {
    constructor() {
        this.housekeepingService = new HouseKeepingService();
    }
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
        var _a;
        return (h(Host, { key: 'bf83ea5b9db69993a6ae7b01884f9cb7d1d7bb66', class: "card p-1" }, h("ir-title", { key: 'b4b3eceb2787344c430cdeb82a37ea33d3f62877', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'cb57501f8a3faac122884024ac49b82f0124c408', class: "table-container" }, h("table", { key: 'ca99e742b5c0eef1eaf75330272954bb840415bb' }, h("thead", { key: 'fb7ee7ac6a92f14e9a48017d46d6a38a74b059bc' }, h("tr", { key: '6fa6a8e3b4aeacb9a587dc31b6bd0550048e4ddd' }, h("th", { key: '4b8ac6447871a580e43971e97d4e6fcd92886b2d' }, locales.entries.Lcz_Status), h("th", { key: '3bd7e5f9917499330dd5eab92eb2ee7937719a29', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'f3035c351b7d74cea36af3db904843db4faff3e5' }, locales.entries.Lcz_Action))), h("tbody", { key: '1331ed4dbb97daeac75593f5ffd697bf805fa080' }, (_a = housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
            var _a;
            return (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? (_a = status.inspection_mode) === null || _a === void 0 ? void 0 : _a.window.toString() : '', LabelAvailable: false, firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                    const text = i === 0
                        ? locales.entries.Lcz_YesOnTheSameDay
                        : i === 1
                            ? locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                            : locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                    return {
                        text,
                        value: i.toString(),
                    };
                }) })))))));
        }))))));
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
