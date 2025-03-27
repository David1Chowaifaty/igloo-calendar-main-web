'use strict';

var index = require('./index-Dt9a74kn.js');
var housekeeping_service = require('./housekeeping.service-DsHTyOT8.js');
var locales_store = require('./locales.store-CJveOVzn.js');
require('./index-PIkoJJtF.js');
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
        return (index.h(index.Host, { key: 'd657c5dea29f64625a4ae1805b15fa28c9bb51aa', class: "card p-1" }, index.h("ir-title", { key: '475fac25ceb30fdaadedce39c59be042d9827d83', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: 'd01baa1840989ee8acf822f69ce4fbb1de355f9d', class: "table-container" }, index.h("table", { key: '75f3b84c00043ea01019f865fe8ae43e3ae96ffd' }, index.h("thead", { key: '8d67de0deb53ea86e8003e88e4efbf98919a1f0e' }, index.h("tr", { key: 'c708b0b74e2b2bf9525f7666ec6e6bd20c2b90ad' }, index.h("th", { key: 'fa372e1a2e3246f1e56f4ecf7936088931cceee1' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '4360bbc7c711b11c7d4f410f36f7bbda3015b6a6', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: 'fc36ebed3e3480b3f63efd4f3c028047559cc767' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '66d821bb7ce3ee5640fe621e86980633cdb3330e' }, (_a = housekeeping_service.housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
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