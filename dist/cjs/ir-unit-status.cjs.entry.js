'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-9D7XLiv8.js');
var t = require('./t-CqJPQrfm.js');
require('./types-BVJQZ50e.js');
require('./locale-scope-Cch-vf1R.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-kIlurDum.js');
require('./locale.controller-BE9t6L_N.js');
require('./language-observer-DKp37LIu.js');

const irUnitStatusCss = () => `.sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}`;

const IrUnitStatus = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData");
    }
    housekeepingService = new index$1.HouseKeepingService();
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
            await this.housekeepingService.setExposedInspectionMode(index$1.housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (index.h(index.Host, { key: '9380e5ae6f3a87e1d5e7d78da2bb95f121a413ce', class: "card p-1" }, index.h("ir-title", { key: '469548c32cb471ada7a9bcdb172d7c4d7e35f764', label: t.t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), index.h("div", { key: 'aa296968ed9314e778920a73bc5f116b1e6ae2ad', class: "table-container" }, index.h("table", { key: '1d02a7e2f05a4612d5cf1db091df6e1b44bb27e2' }, index.h("thead", { key: '6df068565b9e6bec46496423c87ec388c0dbccfa' }, index.h("tr", { key: 'cc3212909b6d0cb4afc3ce18c15216f7fe8846f6' }, index.h("th", { key: '43df98a6c1fbbfe8df3ec80a460ce3ffc23cedd4' }, t.t('Lcz_Status', { fallback: 'Status' })), index.h("th", { key: '70c6b56f867537258d7ece7d6ceb917bf9d4cdb3', class: 'text-center' }, t.t('Lcz_Code', { fallback: 'Code' })), index.h("th", { key: '6c19fd8b9dd1de7872cff695c424a037d4b753e2' }, t.t('Lcz_Action', { fallback: 'Action' })))), index.h("tbody", { key: '3074a0d019782714aef555516fac0b3b4810a505' }, index$1.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t.t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0
                    ? t.t('Lcz_YesOnTheSameDay', { fallback: 'Yes on the same day' })
                    : i === 1
                        ? t.t('Lcz_DayPrior', { params: [i.toString()] })
                        : t.t('Lcz_DaysPrior', { params: [i.toString()] });
                return {
                    text,
                    value: i.toString(),
                };
            }) })))))))))))));
    }
};
IrUnitStatus.style = irUnitStatusCss();

exports.ir_unit_status = IrUnitStatus;
