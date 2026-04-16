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
        return (h(Host, { key: '608c347763c4d8b2409fb4483656d92cb27402a7', class: "card p-1" }, h("ir-title", { key: '374c4172f1ddd7950c80cdf1d781ac75621e7a76', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '432b2c59c9fbac6a9a24d28331d635bcbecabe3e', class: "table-container" }, h("table", { key: 'c27434abc4abf86cc48b50c1749972fac9723ec5' }, h("thead", { key: '1c9de29dae27bbeab036ab9f070bdf4164fb8ee7' }, h("tr", { key: '84aad8728fed6757f89a9ad11a18d9852330a68a' }, h("th", { key: 'ed3ac870e693a11f731aae7507b1d6c2399a0218' }, locales.entries.Lcz_Status), h("th", { key: '09452908d5ddb8350879c1a853712dfabdae66a6', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '87436a2737dccdf9d02e9b0968d09d98019aa5a8' }, locales.entries.Lcz_Action))), h("tbody", { key: '359dafcb8553ac83c2a3d58795e281f02f77b19d' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
