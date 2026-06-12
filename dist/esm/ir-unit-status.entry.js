import { r as registerInstance, c as createEvent, h, H as Host } from './index-7e96440e.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-ff0c8099.js';
import { l as locales } from './locales.store-cb784e95.js';
import './index-1e1f097b.js';
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
        return (h(Host, { key: '0f8c9f56b2d77853bd3eb285470ef616b80cbb3f', class: "card p-1" }, h("ir-title", { key: 'f1ce1150693f5b949ffe5e795a86eb40e21eec81', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'c4a0252be425223d1cf008f5f777ccdca2e0f9a8', class: "table-container" }, h("table", { key: '0b4b377cf31c70fb8beff316270b2704ef9d5f29' }, h("thead", { key: 'fc7256c0a5dc06fea3a9946b272956f0a9cf28e4' }, h("tr", { key: 'e44bf849725006c6427092871aa2d6bc47462f9a' }, h("th", { key: 'bae9a3f527bcb5eeefb9e96ba8cc8373e1fdb97d' }, locales.entries.Lcz_Status), h("th", { key: '33edf2e1cef89dcadd024610f45a4b27e787208e', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '26b3289d4d1abb8b0cb2b825ab81f7c2281f49ee' }, locales.entries.Lcz_Action))), h("tbody", { key: '6e3207eb6acb6f0def3ae9a4624eea40b23000ee' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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