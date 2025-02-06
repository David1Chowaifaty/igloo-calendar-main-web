import { r as registerInstance, c as createEvent, h, H as Host } from './index-c553b3dc.js';
import { H as HouseKeepingService } from './housekeeping.service-731ac492.js';
import { h as housekeeping_store } from './housekeeping.store-82894713.js';
import { l as locales } from './locales.store-a1e3db22.js';
import './axios-ab377903.js';
import './index-1d7b1ff2.js';

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
        return (h(Host, { key: 'ea4146c2dc1a7e94d3d112504fe9d0eb48ada486', class: "card p-1" }, h("ir-title", { key: '0b4438e5cab389d4f2fed77fd5b5a41331244e4a', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'de82399f87b2ebabb9779789553d86f6b3cca2ba', class: "table-container" }, h("table", { key: 'ead25305e9a47c6172076844752ea59082aaaa72' }, h("thead", { key: '7112c48f003fd92f1326fb1150d6bf97adb227c2' }, h("tr", { key: '9186fc7259cd178d61d4ae735fe4b9c7bebe1c13' }, h("th", { key: '57653744c20a426392bd0910589c93d30c5b5d0f' }, locales.entries.Lcz_Status), h("th", { key: '6d8570e622d012622a34b55aa35919c6eea71fb6', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '07f4d5c5d837d203bd4eb42fe06b6c40d89de523' }, locales.entries.Lcz_Action))), h("tbody", { key: 'b2ed04d495b934639f73ed3b64f3ca39b68fb4b7' }, (_a = housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
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