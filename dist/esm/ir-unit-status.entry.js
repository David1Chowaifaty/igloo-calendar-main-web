import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { H as HouseKeepingService, h as housekeeping_store } from './index-BrKEtqyG.js';
import { t } from './t-Bvz1wS_D.js';
import './types-BLb1NO3I.js';
import './locale-scope-Jre4lb6k.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-BNnUj2OT.js';

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
        return (h(Host, { key: 'b01944fb3f6a1741bb1a4f4e232ace6775e2bff0', class: "card p-1" }, h("ir-title", { key: 'a8ad88190fee7f69a50c2943617a380fee3537a9', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: 'f259f1dd935dd64549d583c9f0c276ab42548178', class: "table-container" }, h("table", { key: '157c37db7bea8e039d86726562d7d23324654bd4' }, h("thead", { key: 'c8127f8b78d08f3f05868ddcf8001de32900ca8b' }, h("tr", { key: 'ada0335646143fa5953d89b0691a971030a0879c' }, h("th", { key: '86207ea1771732fd8050465ae041d8f6d0771cae' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '595f34f18ce2dc81f239beacf3e6a90cd54887c5', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '567083014f19fe1f45a9badfd4fba676a5dbd8e0' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: '9ae5ba144fdd998f1cfe61a6b16dd9eb9931e73f' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
