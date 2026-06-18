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
        return (h(Host, { key: '2c152f11c889876a5bb7bbf3a2efb9478ecf8e52', class: "card p-1" }, h("ir-title", { key: '401948add60c661f370f1c13129171bce60ab492', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '9f4ae48f033ee2b27a56cd2b4659a6c7370001c9', class: "table-container" }, h("table", { key: '8f0365e0b936e77da23bae15cf8088e4424c9601' }, h("thead", { key: '11099bad8347b47481809e419dc329f7e9df8a9c' }, h("tr", { key: 'e331475b198adeb19922191ad47a0ab0830dceb4' }, h("th", { key: 'b14234db6f86c691c8a738714e8bd4497afd0a2a' }, locales.entries.Lcz_Status), h("th", { key: '8bd818a7e1c0adedabbe992ae5cfef45e39743a2', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '67481bf27b5686ea4a185c0ccceb5375f23383fe' }, locales.entries.Lcz_Action))), h("tbody", { key: '34bfd473d85322826ef5abad0c5aee914bea1ece' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
