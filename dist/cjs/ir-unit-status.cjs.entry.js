'use strict';

var index = require('./index-Dmp0dHfN.js');
var housekeeping_service = require('./housekeeping.service-C1TgYNVO.js');
var locales_store = require('./locales.store-DEkHwTyS.js');
require('./index-BGQl6-i5.js');
require('./axios-dx93wJEX.js');
require('./_commonjsHelpers-BJu3ubxk.js');

const irUnitStatusCss = ".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";

const IrUnitStatus = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData");
        this.housekeepingService = new housekeeping_service.HouseKeepingService();
    }
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
        var _a;
        return (index.h(index.Host, { key: 'bf83ea5b9db69993a6ae7b01884f9cb7d1d7bb66', class: "card p-1" }, index.h("ir-title", { key: 'b4b3eceb2787344c430cdeb82a37ea33d3f62877', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: 'cb57501f8a3faac122884024ac49b82f0124c408', class: "table-container" }, index.h("table", { key: 'ca99e742b5c0eef1eaf75330272954bb840415bb' }, index.h("thead", { key: 'fb7ee7ac6a92f14e9a48017d46d6a38a74b059bc' }, index.h("tr", { key: '6fa6a8e3b4aeacb9a587dc31b6bd0550048e4ddd' }, index.h("th", { key: '4b8ac6447871a580e43971e97d4e6fcd92886b2d' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '3bd7e5f9917499330dd5eab92eb2ee7937719a29', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: 'f3035c351b7d74cea36af3db904843db4faff3e5' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '1331ed4dbb97daeac75593f5ffd697bf805fa080' }, (_a = housekeeping_service.housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
            var _a;
            return (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? (_a = status.inspection_mode) === null || _a === void 0 ? void 0 : _a.window.toString() : '', LabelAvailable: false, firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                    const text = i === 0
                        ? locales_store.locales.entries.Lcz_YesOnTheSameDay
                        : i === 1
                            ? locales_store.locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                            : locales_store.locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                    return {
                        text,
                        value: i.toString(),
                    };
                }) })))))));
        }))))));
    }
};
IrUnitStatus.style = irUnitStatusCss;

exports.ir_unit_status = IrUnitStatus;
//# sourceMappingURL=ir-unit-status.entry.cjs.js.map

//# sourceMappingURL=ir-unit-status.cjs.entry.js.map