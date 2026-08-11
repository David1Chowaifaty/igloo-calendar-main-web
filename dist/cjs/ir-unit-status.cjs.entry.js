'use strict';

var index = require('./index-CJa_TWt0.js');
var housekeeping_service = require('./housekeeping.service-B-D7aQ2W.js');
var locales_store = require('./locales.store-BDFcUAoA.js');
require('./index-CLqkDPTC.js');
require('./index-DbhEzZeW.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irUnitStatusCss = () => `.sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}`;

const IrUnitStatus = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData");
    }
    housekeepingService = new housekeeping_service.HouseKeepingService();
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
            await this.housekeepingService.setExposedInspectionMode(housekeeping_service.housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (index.h(index.Host, { key: '2d039b99f1a254067deaba2ea3b9090c43a3d04a', class: "card p-1" }, index.h("ir-title", { key: '7bbbbdd441d276e73ab4cecdc5a3f54b6cc8deba', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: 'c8c1fdd0f1f6c7e0b6a0d5d1cd554aab9c918b89', class: "table-container" }, index.h("table", { key: '9da9158be155b16447ce9dd2c6e7fc2b2af55025' }, index.h("thead", { key: 'fe07f8e22fd2ce20cdea397b2e945f213f404428' }, index.h("tr", { key: '51dafd0ff03de61d12edc6e0fd549a92e7c04ae8' }, index.h("th", { key: '3e418acfc3f8485e95807315534703fbd2ed73e7' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '5b87fdc998c6815805293da02eb94cb7636fbba3', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: 'd41b06814cab1a700fc82578de57cf80f1593914' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: 'cdeb6723d38f128435034cecf768cecb94befbcf' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0
                    ? locales_store.locales.entries.Lcz_YesOnTheSameDay
                    : i === 1
                        ? locales_store.locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                        : locales_store.locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                return {
                    text,
                    value: i.toString(),
                };
            }) })))))))))))));
    }
};
IrUnitStatus.style = irUnitStatusCss();

exports.ir_unit_status = IrUnitStatus;
