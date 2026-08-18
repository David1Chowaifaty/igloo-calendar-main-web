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
        return (h(Host, { key: '1cf9901c37800766b8c0ce53fefd5375af54d5b8', class: "card p-1" }, h("ir-title", { key: 'd0f077298a96d66c76c731898008a3e38ede43b0', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'd9bff534e35216446a61f47fa0e95eb30bbd6c9b', class: "table-container" }, h("table", { key: 'e0ec2b62a10d43b25666eecace3b354eae6e6225' }, h("thead", { key: 'c0ebaffd7c1f3457a3eb0a989a27abd67bffe40f' }, h("tr", { key: '6f8c06b2e2bd8216061ff0f601407f5dd62319f0' }, h("th", { key: 'ee472d1bcd0f72eed10a4dab860d9276d78ae000' }, locales.entries.Lcz_Status), h("th", { key: '35dd0d0cc3228ecbf47fd533605d62be3ea780be', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '9062886dcfc114becf6dd9f8f2aa254ab1d7c90e' }, locales.entries.Lcz_Action))), h("tbody", { key: '8bdbc198d5e0b21e920ededc6776a5064d17c90f' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
