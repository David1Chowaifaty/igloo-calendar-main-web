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
        return (h(Host, { key: 'c4f31360dc627b89eed3ba21663483529f879e33', class: "card p-1" }, h("ir-title", { key: '0a0f94ca12456e92d986105f442262f0fe789114', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '4e4a2b9e0823560ca1a07a12acf5985a4dcdf6c4', class: "table-container" }, h("table", { key: 'ab591b752e5a9c1bc1c851e12873a8a929b90790' }, h("thead", { key: 'e724ad26beeb56f34483da4fb233f5a0220e615d' }, h("tr", { key: '1547beb933fc963904c689f291212fe8abf00b37' }, h("th", { key: '04192a8d27139c09c2871ea59bf5d7b74c340887' }, locales.entries.Lcz_Status), h("th", { key: '359b51f3ceab70bbe1014deb37ae7f42b96968f4', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '2a48b927099dd3d75f635fdfc3ccfdbe1cf226ca' }, locales.entries.Lcz_Action))), h("tbody", { key: '11c592f1d9be1e473ba45a15bbc94a25ec7a261b' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
