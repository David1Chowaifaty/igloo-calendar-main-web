import { r as registerInstance, c as createEvent, h, H as Host } from './index-1d2aa5ad.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-f355e1d9.js';
import { l as locales } from './locales.store-95a78d6b.js';
import './index-e42e9935.js';
import './axios-aa1335b8.js';

const irUnitStatusCss = ".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";
const IrUnitStatusStyle0 = irUnitStatusCss;

const IrUnitStatus = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData", 7);
        this.housekeepingService = new HouseKeepingService();
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
            await this.housekeepingService.setExposedInspectionMode(housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        var _a;
        return (h(Host, { key: 'd47db5f343ac052012024d94404cb1e0a83d1c88', class: "card p-1" }, h("ir-title", { key: 'a116e92f9e48c8cd8087325b1418744bf3a0ab09', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '904a7ae34fd225fa9a788676bec0da4fcd08f549', class: "table-container" }, h("table", { key: '2a705616951255d89cbfc959f7ae7b0fdb0ef01b' }, h("thead", { key: 'f47f2af332fc7349db122a3319c97406cf63c997' }, h("tr", { key: 'e815f9c275ef4193fb1abfbe6798572d08bf633c' }, h("th", { key: 'b8c66b05eb2f4b4808dcd1d51b5fe12f2cd36b55' }, locales.entries.Lcz_Status), h("th", { key: '00871a2ecd9b2211425b9d8b3f928b93fc32a07f', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '4dff88e9c4f4eb4829f0b08b710c60fd06f04c9d' }, locales.entries.Lcz_Action))), h("tbody", { key: '7d12f9f318a2c4b98f5e14cb37aa206179aa669e' }, (_a = housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
            var _a;
            return (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? (_a = status.inspection_mode) === null || _a === void 0 ? void 0 : _a.window.toString() : '', LabelAvailable: false, firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                    const text = i === 0
                        ? locales.entries.Lcz_YesOnTheSameDay
                        : i === 1
                            ? locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                            : locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                    return {
                        text,
                        value: i.toString(),
                    };
                }) })))))));
        }))))));
    }
};
IrUnitStatus.style = IrUnitStatusStyle0;

export { IrUnitStatus as ir_unit_status };

//# sourceMappingURL=ir-unit-status.entry.js.map