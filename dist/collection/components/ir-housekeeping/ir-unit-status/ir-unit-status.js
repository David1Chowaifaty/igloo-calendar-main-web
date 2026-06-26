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
        return (h(Host, { key: '262a12edd636d45bba6e5983efe379a227ef9edc', class: "card p-1" }, h("ir-title", { key: 'c6a316198afd649a980636e800ebe2f3d327ceca', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '6b0369340ad675d5c14af702421193baabdfb293', class: "table-container" }, h("table", { key: '9a929823677442d48ac84f3d8689e1d535a2c49e' }, h("thead", { key: '51d38f34a5b777b7b365753ea7870ce48f13be26' }, h("tr", { key: '3379d7bd735519cfd75769a158a7285729addbed' }, h("th", { key: '1c0d909ad19c901fc2c29d5e51c53cadf363aa65' }, locales.entries.Lcz_Status), h("th", { key: 'b8c3c0330a3ee4bf9490ff9d558054a2c9a13b56', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'cbfe435bb2c7b4efa5cbe9bda48c66f9a5fed272' }, locales.entries.Lcz_Action))), h("tbody", { key: '9e97dfa09a66188b8e330e28c134382554784f67' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
