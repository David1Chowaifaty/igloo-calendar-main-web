'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-aeea0adf.js');
const housekeeping_service = require('./housekeeping.service-11b9602a.js');
const locales_store = require('./locales.store-7abd65bc.js');
require('./index-3cfd4bf8.js');
require('./axios-6e678d52.js');

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
            await this.housekeepingService.setExposedInspectionMode(housekeeping_service.housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '8db5020ae8414fb169c44a6792893034722bfd8b', class: "card p-1" }, index.h("ir-title", { key: '44ec4b939eb90379eaa3025805629308a784cfd4', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: '8aa7b1eb7699912c31b81d5d88cd652e43ec5b29', class: "table-container" }, index.h("table", { key: '78aed03ac764d8d20922df8130731b36b7512107' }, index.h("thead", { key: '8d6bf1d738e612c8fa096be513de68954f26003b' }, index.h("tr", { key: '2ca3b4f8da1e3f2a34d49b93fe10a09c8f20ec06' }, index.h("th", { key: '7e666974d5eab98c8ad8f6998ebabf4f174b9248' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '70948053f2ecbb1006f8d6c204662d79f50d4d20', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: 'b943f1789ac8b4f649110372d074bc6fdc1ddffd' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '13c41970b2b674fda78066063dc250e3ed98cf43' }, (_a = housekeeping_service.housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
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