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
        return (h(Host, { key: 'cc603e3454f5f792061fb5d365b5fcbac5c96ad8', class: "card p-1" }, h("ir-title", { key: '53267e3418ac84a35da259cf8dedbbc59537e234', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'ce9547e0591e253038a82f52f4709eec2898833c', class: "table-container" }, h("table", { key: 'f48e471b3eefc3508b8918b15dc383707a06a42c' }, h("thead", { key: 'acf539fa3a25376854649842cbd79ed7751cb644' }, h("tr", { key: '6bd9ee552978800c6f71a66fd07267640ce4940b' }, h("th", { key: 'e6dc55d8c195fcf7ea56a7f209a5d104952c7006' }, locales.entries.Lcz_Status), h("th", { key: 'ab0a1eb0b0c288ac6aa0b7ea480cda64646e3a26', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'c75c9861c40ab4d482fdfbffa77473c9cd812ff3' }, locales.entries.Lcz_Action))), h("tbody", { key: '1da98257af1ecb3253e97502dbca0b5825f2681f' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
