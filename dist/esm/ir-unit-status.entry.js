import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-X6dZ6dBt.js';
import { t } from './t-Bk78Wumj.js';
import './types-BG9uwIsj.js';
import './locales.store-CXJn6ls-.js';
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
        return (h(Host, { key: 'e21412303d39a2543e9179fba39ec188b55696b8', class: "card p-1" }, h("ir-title", { key: '59174b39888fb080ee6dc6a54f1e3b137a3ab62b', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: 'caab355d7bfdc6be276186424da8e5d6037586f0', class: "table-container" }, h("table", { key: '00af05f00d736b08cdcf010f33dc4eec7de1bd2d' }, h("thead", { key: 'a24f031a72e4200615d865cbe75a761845c3fb6e' }, h("tr", { key: '3d112226830bb8f13424ac3e18cf9fc013183b02' }, h("th", { key: '47df8841d520aa928c56b3a1874efb050ea864fb' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: 'dfa95b8e99148f53861119ab7392cf0a0716ff7f', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '221032723bac118ff72710b8c8ac84ed79d8cdee' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: 'ccbaac52dc672e4126547d442b25a505ccd08d72' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
