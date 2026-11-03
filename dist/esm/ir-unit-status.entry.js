import { r as registerInstance, c as createEvent, h, H as Host } from './index-DKZeCK8T.js';
import { H as HouseKeepingService, h as housekeeping_store } from './index-DuoJ1yln.js';
import { t } from './t-Bvz1wS_D.js';
import './types-DFSK8b1u.js';
import './locale-scope-Jre4lb6k.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './commonSchemas-Cx3Y46cE.js';
import './locale.controller-D7aoAo6z.js';
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
        return (h(Host, { key: '3be09f28b61779f5d8c7066960fb5f2ce4649dc0', class: "card p-1" }, h("ir-title", { key: '8f89afa59ebda8fd615ad5a143d02d04039fae30', label: t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), h("div", { key: '4651551c699880b3a6e0bf7775a7da7d1b7d73d0', class: "table-container" }, h("table", { key: '7d96f3454922496f102deeac4c3a567607db9cad' }, h("thead", { key: '8f727ff218054709b5bfd2213774d96f3f701942' }, h("tr", { key: '2e906050759aa05af09402b4dbcc2ead1137022d' }, h("th", { key: '51e21921e94ea474ee2df483d3904cb8d9fa5ddd' }, t('Lcz_Status', { fallback: 'Status' })), h("th", { key: 'd81b0db2e79820589d80cb7d15eb02017c2b450e', class: 'text-center' }, t('Lcz_Code', { fallback: 'Code' })), h("th", { key: '62c32645abe88cd9870a994a468939e411628e1e' }, t('Lcz_Action', { fallback: 'Action' })))), h("tbody", { key: '31ff923b00b7fb7b35be9bedf241baf4a639e25c' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
