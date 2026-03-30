import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-1c340564.js';
import { l as locales } from './locales.store-cb784e95.js';
import './index-87419685.js';
import './index-f100e9d2.js';
import './axios-aa1335b8.js';

const irUnitStatusCss = ".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";
const IrUnitStatusStyle0 = irUnitStatusCss;

const IrUnitStatus = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData", 7);
    }
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
        return (h(Host, { key: 'ae71b8bf4c4889ef08d56c1d6382a208bf2881cf', class: "card p-1" }, h("ir-title", { key: '6a679207d793a1ae929d791bf3e8353f85c0bfd5', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '8d2aa6b9371870f25abd946e0e2f7c674bbb7aed', class: "table-container" }, h("table", { key: '8a7500ff410a95f7381f98e4fb695d387a3e0790' }, h("thead", { key: '63912ff428ee3084525ac0991eac233711d0b349' }, h("tr", { key: '0d1637d91a630221996396ab6ab76d01dccc5d44' }, h("th", { key: '8bc2b0f8c2e63086bdb52fa45f6250127ce2b83c' }, locales.entries.Lcz_Status), h("th", { key: '6a22da2eddd663c86c4565ce10c95cbb94e37e0e', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'de7d8ac58afb917551f6a830950e06708fc87576' }, locales.entries.Lcz_Action))), h("tbody", { key: '9448dd353ce3e831e76e9a3279dd95719097e17f' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
};
IrUnitStatus.style = IrUnitStatusStyle0;

export { IrUnitStatus as ir_unit_status };

//# sourceMappingURL=ir-unit-status.entry.js.map