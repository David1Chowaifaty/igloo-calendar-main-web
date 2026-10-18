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
        return (h(Host, { key: 'c2c4b2d1bfdf0cdcc7441ce7216e4589cbd23522', class: "card p-1" }, h("ir-title", { key: '487c6278eaba82811f52e26deb2956e3483d3d0a', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: '6d392d9b24a3f42e745ac98f9ca5a3fb19881205', class: "table-container" }, h("table", { key: 'fe9b2e2beccbc027ec10d75349d3b0ff4967d2c7' }, h("thead", { key: '3f2ce2920c5383c470efadb6050447bc12b2e0ac' }, h("tr", { key: '3dca4c8cbf886674b699c9d214214b5f08a54cfc' }, h("th", { key: '2ec365e6d02854f4821d040a62dd4b39898ef266' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: 'a2caa2d9b9f0768904331f90dca1450b7deb14a6', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '820a47a054de9e3e6ae9a4cabcb7f6ef202b92fe' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: 'a4dbdc64bb5ec3fe6c08b0e6a4f16e878022708f' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
