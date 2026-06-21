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
        return (h(Host, { key: '1e86445242a87d5247d24066a1c17b2605f782d3', class: "card p-1" }, h("ir-title", { key: '09009a019956830d144676c9e23c6cedcc20b7dc', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'f4658b83070c73da649677535096f0fd08067db4', class: "table-container" }, h("table", { key: '9466b7dcc76d61c1d9235b9df365bce1742c28f1' }, h("thead", { key: '7abdc1c0abd18f4d17f68b0d03c08ea7e04f7c7b' }, h("tr", { key: '9fb1f99bfcf8068bf65943d870ecceeeda7f751a' }, h("th", { key: '3df6aeb678aa9fe2f3358d52b0e98ba3fd0df4af' }, locales.entries.Lcz_Status), h("th", { key: 'ccdb1edd2334621631937252ef27315d7b52f28a', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '87bbbc449dc0cad17efc5e4c29096ed7ec258144' }, locales.entries.Lcz_Action))), h("tbody", { key: 'bc5162e2d5a9c0d15c14dfb460485e1cf0eca1ca' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
