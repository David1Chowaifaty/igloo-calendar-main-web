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
        return (h(Host, { key: 'aaf3feb64473dba6af8405cd2d5d7f3fd20640b5', class: "card p-1" }, h("ir-title", { key: '7fe8004e40b6831ff0ba8097c9ea21a626f70c3b', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: 'aaec4e1e6295ecbe23ed5573126007a8f9756afe', class: "table-container" }, h("table", { key: '47342b43784fb0d6ad46b4755d584cff43ff6bc1' }, h("thead", { key: '2e9b3a7e382c6aa11171fd9af2cb6f2c7ce170d1' }, h("tr", { key: 'd23a3834d7fcdc3742024d143665771b3fe7d9e2' }, h("th", { key: '06ab817cb403f25e1eee274db9fdc87dfd8dc027' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '753022e25c5f6fbdd3b65baf98f31dd3eb581c26', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '26ec7f7b6418630a522e703e02d12620a7727b96' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: '4331c3499b990096d42ec3913c170509626d2b3b' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
