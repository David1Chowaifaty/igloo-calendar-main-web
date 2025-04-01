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
        return (index.h(index.Host, { key: 'e5aed9837236f08c6913390d4bcf0370afa2a76c', class: "card p-1" }, index.h("ir-title", { key: 'cc40598fab746bda73e3af9dce048a325377d8bd', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: '0a00cf172b015d83289e35d8743e0769ebee29e9', class: "table-container" }, index.h("table", { key: '167aab382edffc7b6f8528f7703ee5ccb978b3ea' }, index.h("thead", { key: 'f8b03b34cd0a8730d968b8000e4a943797ef2ad0' }, index.h("tr", { key: '48917bfd8ffcd39b4c0c42fb8331e0f5450bce70' }, index.h("th", { key: '0ac0376cb4b2cb123e00f181df5b3a29356b2efa' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '144562bd3748f9ff5a846c21900781543d23b52d', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '67d953ff184881805a49cd1dd9eec79886bdc2ad' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: 'c1526df74b2b8d5732b3427f0542142fb8177ac8' }, (_a = housekeeping_service.housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
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