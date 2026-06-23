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
        return (h(Host, { key: 'e4cdd01dbf8f7a3fe39e94baedb980fd65de1e87', class: "card p-1" }, h("ir-title", { key: 'd6442e1f6e5fa047469962073c50d82b9c88db1e', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '3e5cf6402d10c8c4498adc6d680ff2122797064a', class: "table-container" }, h("table", { key: '7b0d2bb819e527e69d41616b40f5af10ede6e314' }, h("thead", { key: '75a14b7e78f3ded200dfb0b4ec8469140e4b32e0' }, h("tr", { key: '1563fdc49ec182bf52f36446442c73f3ee776bb1' }, h("th", { key: '64debe7ad9390358987933c8f4b13e97be79b8c2' }, locales.entries.Lcz_Status), h("th", { key: '7a79db299dd4b15b33e5d9bdcc1a70a9047e598a', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'abea05fb8163d0dc154ca483f849a3e67286f73e' }, locales.entries.Lcz_Action))), h("tbody", { key: '5635a206a9609460d246b1538f1aafe96e50d5f9' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
