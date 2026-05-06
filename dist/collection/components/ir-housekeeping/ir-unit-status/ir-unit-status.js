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
        return (h(Host, { key: '278b30a1d3baef16bd9352c27dc455ecfcc31e55', class: "card p-1" }, h("ir-title", { key: '95815cffbb043f4b87bc546cd6c092721310f016', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '0c1db98d04aa0291b19e9cc4ab9fd20a50ad8176', class: "table-container" }, h("table", { key: '484a78428322d5387d434bb5fcfc27735f322279' }, h("thead", { key: '60b05a48ab7a49f4a13bc5ba0a9fb52d49229e34' }, h("tr", { key: 'e6f619c75b591a8e1e32e05c13988c041265dd3e' }, h("th", { key: 'd145e00d97c6337306bf06ad5f23cea07ac831fe' }, locales.entries.Lcz_Status), h("th", { key: '0ddc3e25bfc23e9aa6409478ebcdcdce7772e4ac', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'd652c8dd94a9d3d140994e36bdfc7354055234d9' }, locales.entries.Lcz_Action))), h("tbody", { key: '544fb09846f45b00249eb4f628334ca83dc048e6' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
