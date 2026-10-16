import { r as registerInstance, c as createEvent, h, H as Host } from './index-CwWmK1sZ.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-DPjITsnH.js';
import { l as locales } from './locales.store-DN9FqlnV.js';
import './types-Cvnhk41g.js';
import './index-BfixheT-.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';

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
        return (h(Host, { key: '036f45064650d0ecda8dc5825049e3e2d989da2e', class: "card p-1" }, h("ir-title", { key: '1e8f92d03e6d55e9a0cd9623028c736d60871a78', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'c1980be87b24750f95f5004feeb74d437e85c100', class: "table-container" }, h("table", { key: '57831c2f17cf381a5f37d67545ab0917e267d1d0' }, h("thead", { key: '8e2af0e4bbee8b7965c6ba9a7a809b99acdc59a2' }, h("tr", { key: '12949467a703bd41796b1eb74643d7b42f2cbf6a' }, h("th", { key: 'd71ca42e901e56c6cf160bc1fdd2d468a50b2ad4' }, locales.entries.Lcz_Status), h("th", { key: '853d0385460ab1c8b734c0be5697e5a3c448b38e', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '09201c2682940e9e97d59f9e3366c1753d5a87fb' }, locales.entries.Lcz_Action))), h("tbody", { key: '091b73618e741a0747ea098a2e7527af062ba286' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
