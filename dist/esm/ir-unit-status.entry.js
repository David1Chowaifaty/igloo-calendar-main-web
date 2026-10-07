import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { H as HouseKeepingService, h as housekeeping_store } from './index-DBtvgD27.js';
import { t } from './t-BVYK64UG.js';
import './types-Clk7NCXk.js';
import './locale-scope-CapRuPkM.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-BxK90Oim.js';

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
        return (h(Host, { key: '87ade7317f41b7ccee10bb3e115a6fa805e554e4', class: "card p-1" }, h("ir-title", { key: '1f49b6c62434ddd8c319b15eab77d0490ecb202f', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: '2a166fa90e0d80ff4d3e321e6d0e9ba4d8520f40', class: "table-container" }, h("table", { key: '59cc1abb3c047dd1fe58f257a0bb9a90f357f72c' }, h("thead", { key: 'f6ead10886316609fbf8ac9163a1555909a397ff' }, h("tr", { key: '4496ceba761fdcef9e7bfc66b6ae37c949cd9f7d' }, h("th", { key: '29cf049544eb7239c1f7345f75c0842ea78f4df5' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '70b10faae753bd74c1eab0b3d40216e30605475e', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '5f200459fb47e93d75e0187547e0dd9b34397b48' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: '3354f2711bbef87b7e5578ebc9772a0d181fcf08' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
};
IrUnitStatus.style = irUnitStatusCss();

export { IrUnitStatus as ir_unit_status };
