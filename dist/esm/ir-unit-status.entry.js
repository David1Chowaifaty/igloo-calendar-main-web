import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { H as HouseKeepingService, h as housekeeping_store } from './index-_mWVdfQA.js';
import { t } from './t-BVYK64UG.js';
import './types-CB66a07H.js';
import './locale-scope-CapRuPkM.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-Cx9w9d8l.js';

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
        return (h(Host, { key: '42df48ec1c950d67f394bec0eb052fa2120ee647', class: "card p-1" }, h("ir-title", { key: 'a7e3429fafb4dc86eefea1a765f4d8076cbaef74', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: '4fe8f159ed8d7e5e88abf333d7d7edfd4ecae534', class: "table-container" }, h("table", { key: 'a34482c8f1d6842bbbb46a90c1b1d008c0e28cdb' }, h("thead", { key: '63b28a2c664c4ba20bd75fea264664237e87beb5' }, h("tr", { key: '22729e54b0d87e6a1b15c817be7db57f7e1d3eb5' }, h("th", { key: '8c7ef06a5a56c0f7128955049df74ac76abc88f0' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '9a74b8e15695d2a2bc5b832796330d804d11df21', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '61df9fcca7ae127409ef613dff7aed25d2906958' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: '74dd361f22537ae905788e672ac16d44432c55a9' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
