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
        return (h(Host, { key: 'ce0490d2d1eedf5d20b9e94b44fde729433f8daf', class: "card p-1" }, h("ir-title", { key: '9120229057267a37bcc7461e44ec09ad84fb8c6b', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: '4dec95917cc6d0b097ac515fa829339bd9d1c998', class: "table-container" }, h("table", { key: 'd497d0ce7d87208a532748fb747c3b7ff5c27a86' }, h("thead", { key: '2bed9d974e84ff41812d94ad3fa8c1a92d852b8c' }, h("tr", { key: 'd27a55d31b7da4450796924f22b3739f89e8ca55' }, h("th", { key: '52fd622ba0c4d45eb32b9bd258a4c5da8a7ad5b8' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '0378d55cf2b27fbf69c7739caf89f21b67c63fd3', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: 'd08724aa52be60cbeaf5b77a8be383f3eeb3967b' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: '179a22e0dafc0ed29710e1c79628fbaea418afdd' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
