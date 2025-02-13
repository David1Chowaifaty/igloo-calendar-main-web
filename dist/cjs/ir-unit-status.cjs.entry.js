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
        return (index.h(index.Host, { key: '16317bd39a24beb065b8b5015678e8304a223a57', class: "card p-1" }, index.h("ir-title", { key: '099ce02f65cd6347fdd2a6b9c3f2d2f87baa8052', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: 'f67325cc831f7d8c89df315f439bea753d951d6e', class: "table-container" }, index.h("table", { key: 'c2c2f53b844526b83a8838616d8b69f08a93c27b' }, index.h("thead", { key: '18c6f0b9d5907453219df2bf8851455d0d9b8711' }, index.h("tr", { key: '153b800520f1cf2fa799f445ab1b3dc78ef1a95f' }, index.h("th", { key: '4f851bd1dab63892bd5ae7b66dffdc2f1205f899' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '37728299124d2c3c1d3e4e37bbdb4c39aa26fa90', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '649587503589999f14ec78ac6f97220cec08fc71' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: 'ed8a235f292779ebf78202ff0e923faff8632c8d' }, (_a = housekeeping_store.housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
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