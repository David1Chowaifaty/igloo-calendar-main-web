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
        return (h(Host, { key: 'a49e6db3492c26bdac7ac71eab9f46d95e136f78', class: "card p-1" }, h("ir-title", { key: 'f426a8c67c7b0c3c199d2eb880c0ce36d3a64718', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '0359be50811df3b7b4ede4d75d22b55b747ee2ca', class: "table-container" }, h("table", { key: '6a337aec15940967f0fe9bebc26e2b80f960a0da' }, h("thead", { key: '8418eb0c9d7461560870c004955453c06089f4e5' }, h("tr", { key: '904eb1f2c1cd9651d94e4b55e62a99b87785c535' }, h("th", { key: 'fea6ed2d4cbc3c44ff42a6fe8505429affcd4949' }, locales.entries.Lcz_Status), h("th", { key: '1ee264ee71423892482e40dd60b9034e5393ffae', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '5c5968bc8bd13cb4d4b0974d079b2a1f14aad1f1' }, locales.entries.Lcz_Action))), h("tbody", { key: '978747e3f9f6ad0cd9d5e1f1211db8b32e488d76' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
