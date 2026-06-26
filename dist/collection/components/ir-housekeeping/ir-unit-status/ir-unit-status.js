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
        return (h(Host, { key: '98936320f07d430d2a6f7660d4d9e1d3254a6279', class: "card p-1" }, h("ir-title", { key: '889bce8f96bd99667a5dfe0f9b301b767f604c61', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '92493b740d27c91169a109ce69455161caab50d9', class: "table-container" }, h("table", { key: '626d1ed6ee9d65c2f32668a6052d360ad82f9ae7' }, h("thead", { key: '237e8285184a5b5ed360c8e3f3ffdfe578775fa9' }, h("tr", { key: 'e0f9a4f6e047210b6545779c5c0d292728ba0508' }, h("th", { key: '4b0da2a2c166d9a17a629abc73d3b93884e1d84a' }, locales.entries.Lcz_Status), h("th", { key: 'd3e134b6e5dd4eb173a3df782e4f59231bcf4f81', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '6220e82ba95c3818f15fb1df689db9bd6036c140' }, locales.entries.Lcz_Action))), h("tbody", { key: '35e8ce851c1534417799237a798d221744b7eac9' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
