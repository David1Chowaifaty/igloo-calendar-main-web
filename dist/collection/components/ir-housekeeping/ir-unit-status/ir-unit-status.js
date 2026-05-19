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
        return (h(Host, { key: '3fc5eaf072b8575c3fe379c2d1c70377bb382017', class: "card p-1" }, h("ir-title", { key: 'f193dc0ea0b2630a5c4cbe6079ef3b5555e3b25e', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '66b3ed1b5f7d5eb82fdb8b26299670d98f0311e9', class: "table-container" }, h("table", { key: '7928275ad7e5499399a7bd7dde9ddfe5d761944f' }, h("thead", { key: '3fcf26864f63953a3bcd4bf4b9240e3a22ea6831' }, h("tr", { key: '6b936b3345270c3a33ba7de7900962e9b083de45' }, h("th", { key: 'dab161db505c47340f1bd4755bd1e8bbd74b69de' }, locales.entries.Lcz_Status), h("th", { key: '2fe2baaeb948cefa1aa967a3ba6c94caa23e2202', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '39b8b56e48a0ce3f8e53b0f1fc086aef384153d6' }, locales.entries.Lcz_Action))), h("tbody", { key: 'ac4f1db033c42232b1fbbd20b2d9448541710990' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
