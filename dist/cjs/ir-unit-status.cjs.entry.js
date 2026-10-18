'use strict';

var index = require('./index-IDeZZwEK.js');
var index$1 = require('./index-DnLl4vlg.js');
var t = require('./t-CqJPQrfm.js');
require('./types-BVJQZ50e.js');
require('./locale-scope-Cch-vf1R.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-D4iFLV5-.js');

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
        return (index.h(index.Host, { key: 'c2c4b2d1bfdf0cdcc7441ce7216e4589cbd23522', class: "card p-1" }, index.h("ir-title", { key: '487c6278eaba82811f52e26deb2956e3483d3d0a', label: t.t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), index.h("div", { key: '6d392d9b24a3f42e745ac98f9ca5a3fb19881205', class: "table-container" }, index.h("table", { key: 'fe9b2e2beccbc027ec10d75349d3b0ff4967d2c7' }, index.h("thead", { key: '3f2ce2920c5383c470efadb6050447bc12b2e0ac' }, index.h("tr", { key: '3dca4c8cbf886674b699c9d214214b5f08a54cfc' }, index.h("th", { key: '2ec365e6d02854f4821d040a62dd4b39898ef266' }, t.t('Lcz_Status', { fallback: 'Status' })), index.h("th", { key: 'a2caa2d9b9f0768904331f90dca1450b7deb14a6', class: 'text-center' }, t.t('Lcz_Code', { fallback: 'Code' })), index.h("th", { key: '820a47a054de9e3e6ae9a4cabcb7f6ef202b92fe' }, t.t('Lcz_Action', { fallback: 'Action' })))), index.h("tbody", { key: 'a4dbdc64bb5ec3fe6c08b0e6a4f16e878022708f' }, index$1.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t.t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
