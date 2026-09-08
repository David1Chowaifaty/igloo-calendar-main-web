import { r as registerInstance, c as createEvent, h, H as Host } from './index-BYqrdgY9.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-C7mt9QTJ.js';
import { t } from './t-CHttQIVe.js';
import './index-DeW5X45W.js';
import './index-CimhgHoX.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';
import './locales.store-BfROgg7a.js';

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
        return (h(Host, { key: '2f0a16aa8534923d812dc320e34f9b5e8d4adc2b', class: "card p-1" }, h("ir-title", { key: '3928624b141ddd92c57c201dbd66778d6c1b43de', label: t('Lcz_RoomOrUnitStatus') }), h("div", { key: '20948d3a7fe9c0ae8cf42c2290562445c5eb857d', class: "table-container" }, h("table", { key: 'f900657bb6502acfad8c0d62ac971e72f8b0ca56' }, h("thead", { key: 'ea12143d41e49ab31a20aecbec546b991947d401' }, h("tr", { key: '9385f5f65c1317a5b794e8983f07391fc35a6e66' }, h("th", { key: '77614d49500e4594ab3b39a04dceaf0991f8ebbb' }, t('Lcz_Status')), h("th", { key: 'ce309dc41c4177009ae9db094dd78733e3242803', class: 'text-center' }, t('Lcz_Code')), h("th", { key: '22146dc904af99c168b9be3ed596fca54b1ae92c' }, t('Lcz_Action')))), h("tbody", { key: '65bd7b9806e3e6dc4aa2d981d7cc939dfc3a6189' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t('Lcz_No'), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0 ? t('Lcz_YesOnTheSameDay') : i === 1 ? t('Lcz_DayPrior', { params: [i.toString()] }) : t('Lcz_DaysPrior', { params: [i.toString()] });
                return {
                    text,
                    value: i.toString(),
                };
            }) })))))))))))));
    }
};
IrUnitStatus.style = irUnitStatusCss();

export { IrUnitStatus as ir_unit_status };
