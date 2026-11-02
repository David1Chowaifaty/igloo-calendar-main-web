import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { H as HouseKeepingService, h as housekeeping_store } from './index-LpywoleW.js';
import { t } from './t-Bvz1wS_D.js';
import './types-CB66a07H.js';
import './locale-scope-Jre4lb6k.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-Cxq3bLiY.js';
import './locale.controller-Bs0lwnpi.js';
import './language-observer-CHgzsZkY.js';

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
        return (h(Host, { key: '9380e5ae6f3a87e1d5e7d78da2bb95f121a413ce', class: "card p-1" }, h("ir-title", { key: '469548c32cb471ada7a9bcdb172d7c4d7e35f764', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: 'aa296968ed9314e778920a73bc5f116b1e6ae2ad', class: "table-container" }, h("table", { key: '1d02a7e2f05a4612d5cf1db091df6e1b44bb27e2' }, h("thead", { key: '6df068565b9e6bec46496423c87ec388c0dbccfa' }, h("tr", { key: 'cc3212909b6d0cb4afc3ce18c15216f7fe8846f6' }, h("th", { key: '43df98a6c1fbbfe8df3ec80a460ce3ffc23cedd4' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '70c6b56f867537258d7ece7d6ceb917bf9d4cdb3', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '6c19fd8b9dd1de7872cff695c424a037d4b753e2' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: '3074a0d019782714aef555516fac0b3b4810a505' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
