import { r as registerInstance, a as createEvent, h, e as Host } from './index-7b3961ed.js';
import { H as HouseKeepingService } from './housekeeping.service-0ce1e0a7.js';
import { h as housekeeping_store } from './housekeeping.store-9565c156.js';
import { l as locales } from './locales.store-daef23cc.js';
import './index-40c31d5b.js';
import './index-5ba472df.js';
import './index-17663a35.js';

const irUnitStatusCss = ".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";

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
        return (h(Host, { key: 'e5f8f688c0ca0333bfd9db89474710919014a692', class: "card p-1" }, h("ir-title", { key: '903309a32249bfd98e4d15b63c04bebcc3361908', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '451ce05849dabc8b30858736e6b3b8e0772bc52b', class: "table-container" }, h("table", { key: '0d4598faaec6164001838a47f814ab588511cd51' }, h("thead", { key: '97c7f88fc915797bb3ae2de4956a5ad840c89150' }, h("tr", { key: '9ffe0322b520afce3f5a1d163072736871758328' }, h("th", { key: '77772bc343174fea469f167f414ed93fb36e6663' }, locales.entries.Lcz_Status), h("th", { key: 'bc313549a865e1187b28a1c81e36368561fc39c1', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '7c46c0a922ab628749beec8c5d3a9aaba63e380d' }, locales.entries.Lcz_Action))), h("tbody", { key: '672117ea4b63c863fb7ebe522d8445488dafce9b' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
IrUnitStatus.style = irUnitStatusCss;

export { IrUnitStatus as ir_unit_status };

//# sourceMappingURL=ir-unit-status.entry.js.map