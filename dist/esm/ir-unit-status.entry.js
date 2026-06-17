import { r as registerInstance, c as createEvent, h, H as Host } from './index-D8DCR0yx.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-C9MRpHuw.js';
import { l as locales } from './locales.store-ChFOK43k.js';
import './index-DeW5X45W.js';
import './index-D5oXdmCj.js';
import './axios-CleaxLzD.js';

const irUnitStatusCss = () => `.sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}`;

const IrUnitStatus = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData");
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
        return (h(Host, { key: '3b7fbc362a13a19ce66e507b0f1e678bba0e77b7', class: "card p-1" }, h("ir-title", { key: 'f4e7825de2df0c3d535b280fda80a301c1ef0e17', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '20ba38fd4dcd074fc3bf5df0b92b457458d9639c', class: "table-container" }, h("table", { key: 'e20e850db8c61e7395ab6fe64a63927c3f7a9db3' }, h("thead", { key: 'f9276325862326c762fb11deedc6200e7894099e' }, h("tr", { key: 'b3a6aea5d916d9eff3d906699bb7639557c8453d' }, h("th", { key: '8cdd5d1a3c5f7bd9d2bbd327f49abf30ad916548' }, locales.entries.Lcz_Status), h("th", { key: 'a30632525637c6b9e1ae7438fb0f8b7d35975cf9', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '830e336e59b0395440bbc90a2410057b485c9675' }, locales.entries.Lcz_Action))), h("tbody", { key: '56aca16974e366931fb9992e69c0d114d3c06804' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
IrUnitStatus.style = irUnitStatusCss();

export { IrUnitStatus as ir_unit_status };
