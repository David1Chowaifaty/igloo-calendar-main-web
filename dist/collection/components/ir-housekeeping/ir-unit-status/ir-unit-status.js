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
        return (h(Host, { key: '036f45064650d0ecda8dc5825049e3e2d989da2e', class: "card p-1" }, h("ir-title", { key: '1e8f92d03e6d55e9a0cd9623028c736d60871a78', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'c1980be87b24750f95f5004feeb74d437e85c100', class: "table-container" }, h("table", { key: '57831c2f17cf381a5f37d67545ab0917e267d1d0' }, h("thead", { key: '8e2af0e4bbee8b7965c6ba9a7a809b99acdc59a2' }, h("tr", { key: '12949467a703bd41796b1eb74643d7b42f2cbf6a' }, h("th", { key: 'd71ca42e901e56c6cf160bc1fdd2d468a50b2ad4' }, locales.entries.Lcz_Status), h("th", { key: '853d0385460ab1c8b734c0be5697e5a3c448b38e', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '09201c2682940e9e97d59f9e3366c1753d5a87fb' }, locales.entries.Lcz_Action))), h("tbody", { key: '091b73618e741a0747ea098a2e7527af062ba286' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
