import { r as registerInstance, c as createEvent, h, H as Host } from './index-0a4a209a.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-64b661f9.js';
import { l as locales } from './locales.store-53ec3957.js';
import './index-c1c77241.js';
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
        return (h(Host, { key: '8de9c2320e1d90e3d68ffd2956b15bdf54f18042', class: "card p-1" }, h("ir-title", { key: '6f4610dec6828d5ef31397b8628ced98c522ba82', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'd236939997532b654c5eeaad478368beead08bf9', class: "table-container" }, h("table", { key: '9190a6d7466b8fb3849a8c231465713e3a5beb30' }, h("thead", { key: 'b55f71c008eeb323ff2ccdf29113f31c02dc1d46' }, h("tr", { key: '05047dbcd810fa3fc6046f331751678191745b8a' }, h("th", { key: '232da011c4eea77533da2a86cabdc6ce3e9a2e72' }, locales.entries.Lcz_Status), h("th", { key: '32a3dbb2d775ee6e742c328d9d097455096ffdf4', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'b0e9a4fd41834d8cf7adf44912513d25ecb68569' }, locales.entries.Lcz_Action))), h("tbody", { key: '70c91e37f7c65c5e674ee0c2affd30a4857100eb' }, (_a = housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
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