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
        return (h(Host, { key: '7c5ed012fa97a18db939082896a0a3036d4f26e0', class: "card p-1" }, h("ir-title", { key: '44620f99dd01b65df559997d29b1be8cb7d0f2b2', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: '66d5d92396705e14ebe41205730d1443e384a428', class: "table-container" }, h("table", { key: 'eb8a145fa7c6424b4847668e5aaf49b829b51bd5' }, h("thead", { key: 'be8ba3a404a628e1c1bdeafb8247e248ff8701a5' }, h("tr", { key: '53207449896ca6de54defe61d52d2c2813b264a4' }, h("th", { key: '46a704b0e42aff9f59cbc5e56a4bcac628f45744' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: 'a11c3d21b2b632efb809fb0fe1590669b52d26d3', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '4ee329014d00a809b2c2f0e40eed318366cc9cfa' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: '8447cacd599670e54de9d316e4987bbb17946bf0' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
