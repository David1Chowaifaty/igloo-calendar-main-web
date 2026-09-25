import { r as registerInstance, c as createEvent, h, H as Host } from './index-CeHdrJeH.js';
import { H as HouseKeepingService, h as housekeeping_store } from './index-UMBb8rEH.js';
import { t } from './t-CHjay2ar.js';
import './types-BWKgfE54.js';
import './locales.store-CXJn6ls-.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-DOpzu-TI.js';

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
        return (h(Host, { key: 'febb3a8617577fe1137a0cc97d822ff5c9bc7d64', class: "card p-1" }, h("ir-title", { key: '1b1ab435b9cdf90a05371151e2ff5dfa818f3148', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: '2f3609b64b4db49e302b3745a6533bb8ab41d70d', class: "table-container" }, h("table", { key: 'be0bd1355500e7c5c8d85cb755752f26e7d454a1' }, h("thead", { key: 'c0c2bf095315f0c97c39ad3f48d2faf15092b926' }, h("tr", { key: '5e9564933a1bb3705981e0aa63c5629710882586' }, h("th", { key: '94ddee36f343a0d29dbbb7554f20c8fbb93e8666' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '166cdba2fe3b6b02474625bca849fb06eece947c', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '71cc028deb9b1b686faefafe6ca96e005c8823eb' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: 'bdeb33ac3b797a74afbeb3903270d8ecb1c18b5c' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
