'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');
const housekeeping_service = require('./housekeeping.service-9f410f2b.js');
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
        return (index.h(index.Host, { key: 'b86b388f14ddd995ba119f4b487f2ffef3796a5c', class: "card p-1" }, index.h("ir-title", { key: 'cb42edc2e1a271ea747f8e23b97c877a58445894', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: 'c1e38c80d582bb8e373d01be039292769a8986eb', class: "table-container" }, index.h("table", { key: 'b3425030ed71debe8c6617376302237c361ef26d' }, index.h("thead", { key: '7046f6f8881fa5988f7fcfbab19a65e235c8bc76' }, index.h("tr", { key: '32b5c6e8caf48c681efeb3481391b34445ebead6' }, index.h("th", { key: '96a3f1b12ee52b5a35ff1b80fd78732601eb80ae' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '0b5f7667b1a4a58e402dbaf569a05aa806856364', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: 'eaf53f2e92a47fdccf36a28b072a68c2fe7e0e5a' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: 'cc662542f22acc08eb31efbd212366d27790b8db' }, (_a = housekeeping_store.housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
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