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
        return (h(Host, { key: '10c886bbdacb13bd54da0fc2c4846bbd67dd6d9d', class: "card p-1" }, h("ir-title", { key: '73faa430bbb52a43113c085adf519f92945e9311', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '0599d387741ff3c03b17ce72479696101d96b076', class: "table-container" }, h("table", { key: '9e4fd6838997e418daf15db901b999ed0910199f' }, h("thead", { key: '0d4ad72ba0e416d0065d94cc7d30a4dbc2ee5f84' }, h("tr", { key: '1119dd48b868fb6e301f46033450d042991edc9d' }, h("th", { key: 'c6f98181a76cbd3da1ac19b7905994bc0ccb6a1e' }, locales.entries.Lcz_Status), h("th", { key: 'bb1c085ad984474d2816c736e60b9b88311900c6', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'e0b31131c17832335e9f24f200b0d215e177d2c4' }, locales.entries.Lcz_Action))), h("tbody", { key: '327205f15dcb226c9847f86a7cfc0476d0076d59' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
