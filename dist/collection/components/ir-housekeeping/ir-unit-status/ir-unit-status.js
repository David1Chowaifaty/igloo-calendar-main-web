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
        return (h(Host, { key: 'df7735f3291365f0bf1776dcea8b65738269ad42', class: "card p-1" }, h("ir-title", { key: '0ecfbda9ba69f420b11685690b30644479e78512', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '822d8a21b385ae0142222532eea34cf9bb02086c', class: "table-container" }, h("table", { key: 'f241a6dc6cdcdc12cc220327ee4c8f694b89eda5' }, h("thead", { key: 'cfb837c0ed7a6388ca6f55125f404b1ab6605e6a' }, h("tr", { key: '5b4441c3c68704b76b21f079cfe437925daa6840' }, h("th", { key: 'ce623753cd2b5572646c5798ecadea3b2a5370ca' }, locales.entries.Lcz_Status), h("th", { key: '5ee18c59390828b1f90daf5f2489bcb7c69c06f1', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '8848a8dd39bb6573b8ea0bb614934ae99698844f' }, locales.entries.Lcz_Action))), h("tbody", { key: '29be85f125d646a45e814f8835c5a3bf9161269d' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
