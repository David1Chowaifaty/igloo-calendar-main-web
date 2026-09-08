import { HouseKeepingService } from "../../../services/housekeeping.service";
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
        return (h(Host, { key: '2f0a16aa8534923d812dc320e34f9b5e8d4adc2b', class: "card p-1" }, h("ir-title", { key: '3928624b141ddd92c57c201dbd66778d6c1b43de', label: t('Lcz_RoomOrUnitStatus') }), h("div", { key: '20948d3a7fe9c0ae8cf42c2290562445c5eb857d', class: "table-container" }, h("table", { key: 'f900657bb6502acfad8c0d62ac971e72f8b0ca56' }, h("thead", { key: 'ea12143d41e49ab31a20aecbec546b991947d401' }, h("tr", { key: '9385f5f65c1317a5b794e8983f07391fc35a6e66' }, h("th", { key: '77614d49500e4594ab3b39a04dceaf0991f8ebbb' }, t('Lcz_Status')), h("th", { key: 'ce309dc41c4177009ae9db094dd78733e3242803', class: 'text-center' }, t('Lcz_Code')), h("th", { key: '22146dc904af99c168b9be3ed596fca54b1ae92c' }, t('Lcz_Action')))), h("tbody", { key: '65bd7b9806e3e6dc4aa2d981d7cc939dfc3a6189' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No'), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0 ? t('Lcz_YesOnTheSameDay') : i === 1 ? t('Lcz_DayPrior', { params: [i.toString()] }) : t('Lcz_DaysPrior', { params: [i.toString()] });
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
