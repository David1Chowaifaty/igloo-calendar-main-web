import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { H as HouseKeepingService, h as housekeeping_store } from './index-BCFaKeiO.js';
import { t } from './t-Bvz1wS_D.js';
import './types-CB66a07H.js';
import './locale-scope-Jre4lb6k.js';
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
        return (h(Host, { key: '009ca4c707d5c1259a5ca48f455ac351b8d1ad65', class: "card p-1" }, h("ir-title", { key: 'ecf79d824e9433bbac914baed34cb991c04df5b2', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: '3895f6ee10f688a1bd3834dde2f06b0335e5f44d', class: "table-container" }, h("table", { key: '7a1530905d0a1fdd4a2ef5ded4cd01625f45a68a' }, h("thead", { key: '3fbe4e88362969a20c5c6e6cb86c1ed47785ab3e' }, h("tr", { key: '5f5496f67593bdf18499360b80a6252cb10ec0ea' }, h("th", { key: '10d69a06f70f9df95d69cbac2327f1d480da5b31' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: '3a0bd77cc64a25c86711969432a32c59cb94f0f6', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '290676b4896f5dcb701574aff945ccea41f93188' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: '47fe34e60c4bd7a3db27007c091da70b483eeab7' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
