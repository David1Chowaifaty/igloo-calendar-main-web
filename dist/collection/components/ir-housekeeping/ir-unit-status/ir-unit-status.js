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
        return (h(Host, { key: 'd75c5284cb4c0bfc4ec0ba7a683eaf4524bcdb45', class: "card p-1" }, h("ir-title", { key: '1d5d5c7ca20d3a39bc0a2c1616067feb0a52cd1e', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'ffc94fa3b5689073ae97d591c4537855259c3186', class: "table-container" }, h("table", { key: '5b0e39be8863b3da34b55dfdbf41d8aec80e9a54' }, h("thead", { key: '5a066719d3600c9a7a6268027ada1213bc064bec' }, h("tr", { key: 'fef3b910c112b568fa2c1a9e9655fc626a810621' }, h("th", { key: '0504fd2b8b057f432e4e8962be79bbba266461d4' }, locales.entries.Lcz_Status), h("th", { key: '5d338d0471d382605deebcd9e3c6c47e47d4a067', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '24efa8bed27bab8e1985a3df87fd812b1f3b6017' }, locales.entries.Lcz_Action))), h("tbody", { key: '3293dc39d752148c5b33f85fbeba1b73323a9900' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
