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
        return (h(Host, { key: '309e9c445719fdcb867cdcd098667aaff9d0537c', class: "card p-1" }, h("ir-title", { key: '0c2037b81b28f6094520548a27b60eb01e739638', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '78f3f3f48d0d6da915d8c3f47e8c7a9e1d4e0505', class: "table-container" }, h("table", { key: 'a9d22f3a2121252d2b2a31ba2b7c98e1e2f33463' }, h("thead", { key: '12c01b1cb773619db3c02c15ca2234024fc7d669' }, h("tr", { key: 'ad468bfb620fb34a0794425e05050070a29fff64' }, h("th", { key: '993278d880f5ccce66d8a58bf34b175f10baa217' }, locales.entries.Lcz_Status), h("th", { key: '2d70019c89c5f484155b74b8117c2396bf407c19', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'db34e4ccbbd94eb3683c4c7330b07dce7b64fca9' }, locales.entries.Lcz_Action))), h("tbody", { key: '146fd31516e0042b93c19ea425d0613a03461d81' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
