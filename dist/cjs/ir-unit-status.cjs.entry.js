'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const housekeeping_service = require('./housekeeping.service-c71d4e42.js');
const housekeeping_store = require('./housekeeping.store-75064296.js');
const locales_store = require('./locales.store-4301bbe8.js');
require('./axios-b86c5465.js');
require('./index-5e99a1fe.js');

const irUnitStatusCss = ".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";
const IrUnitStatusStyle0 = irUnitStatusCss;

const IrUnitStatus = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData", 7);
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
            await this.housekeepingService.setExposedInspectionMode(housekeeping_store.housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: 'fa2b26e8c16d9dc514e2923d8834280be7e82a19', class: "card p-1" }, index.h("ir-title", { key: '11cf2e2999d3e9b8ca9895783e3a257480a6a678', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: 'ead1804d047851f9d3116f1ff94e96296d46bc2a', class: "table-container" }, index.h("table", { key: 'd2744d205c7884de7269bb0a65fb266ebe5a8554' }, index.h("thead", { key: 'fb5a2aaa2c8aec8b0d3bd94a50ee9e4cfbcaedae' }, index.h("tr", { key: '7a64666c13b3d9c3648f12bc65316ce3a27c2540' }, index.h("th", { key: '1c0786a9376f6e26c0a2fdf8dde2878eb2fff87d' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '7577f1828e804f2f75a6504664918e7705d60d28', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: 'e4cf73f0370bb8b280f9f0927b8bac7430b0ad8d' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '303f56eb30554c65cdfb19f99868769bb6ed5a4e' }, (_a = housekeeping_store.housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
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
IrUnitStatus.style = IrUnitStatusStyle0;

exports.ir_unit_status = IrUnitStatus;

//# sourceMappingURL=ir-unit-status.cjs.entry.js.map