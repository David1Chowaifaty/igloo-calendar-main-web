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
        return (index.h(index.Host, { key: 'aaf3feb64473dba6af8405cd2d5d7f3fd20640b5', class: "card p-1" }, index.h("ir-title", { key: '7fe8004e40b6831ff0ba8097c9ea21a626f70c3b', label: t.t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), index.h("div", { key: 'aaec4e1e6295ecbe23ed5573126007a8f9756afe', class: "table-container" }, index.h("table", { key: '47342b43784fb0d6ad46b4755d584cff43ff6bc1' }, index.h("thead", { key: '2e9b3a7e382c6aa11171fd9af2cb6f2c7ce170d1' }, index.h("tr", { key: 'd23a3834d7fcdc3742024d143665771b3fe7d9e2' }, index.h("th", { key: '06ab817cb403f25e1eee274db9fdc87dfd8dc027' }, t.t('Lcz_Status', { fallback: 'Status' })), index.h("th", { key: '753022e25c5f6fbdd3b65baf98f31dd3eb581c26', class: 'text-center' }, t.t('Lcz_Code', { fallback: 'Code' })), index.h("th", { key: '26ec7f7b6418630a522e703e02d12620a7727b96' }, t.t('Lcz_Action', { fallback: 'Action' })))), index.h("tbody", { key: '4331c3499b990096d42ec3913c170509626d2b3b' }, index$1.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t.t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
