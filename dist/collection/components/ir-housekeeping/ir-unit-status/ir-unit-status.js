import { HouseKeepingService } from "../../../services/housekeeping/index";
import housekeeping_store from "../../../stores/housekeeping.store";
import { Host, h } from "@stencil/core";
import { t } from "../../../services/locale/t";
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
        return (h(Host, { key: '9380e5ae6f3a87e1d5e7d78da2bb95f121a413ce', class: "card p-1" }, h("ir-title", { key: '469548c32cb471ada7a9bcdb172d7c4d7e35f764', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: 'aa296968ed9314e778920a73bc5f116b1e6ae2ad', class: "table-container" }, h("table", { key: '1d02a7e2f05a4612d5cf1db091df6e1b44bb27e2' }, h("thead", { key: '6df068565b9e6bec46496423c87ec388c0dbccfa' }, h("tr", { key: 'cc3212909b6d0cb4afc3ce18c15216f7fe8846f6' }, h("th", { key: '43df98a6c1fbbfe8df3ec80a460ce3ffc23cedd4' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '70c6b56f867537258d7ece7d6ceb917bf9d4cdb3', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '6c19fd8b9dd1de7872cff695c424a037d4b753e2' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: '3074a0d019782714aef555516fac0b3b4810a505' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0
                    ? t('Lcz_YesOnTheSameDay', { fallback: 'Yes on the same day' })
                    : i === 1
                        ? t('Lcz_DayPrior', { params: [i.toString()] })
                        : t('Lcz_DaysPrior', { params: [i.toString()] });
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
