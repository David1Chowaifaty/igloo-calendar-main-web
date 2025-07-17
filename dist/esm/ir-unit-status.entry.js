import { r as registerInstance, c as createEvent, h, H as Host } from './index-0a4a209a.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-e7b98222.js';
import { l as locales } from './locales.store-b670e120.js';
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
        return (h(Host, { key: 'd4847e5ac104330d6391e722b3fd9bf03d29437a', class: "card p-1" }, h("ir-title", { key: '7c368c8b16f199a61fe64ba4875069def1e397ab', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'a295f91732240ffb49f1bd0809091f8fbfce05f3', class: "table-container" }, h("table", { key: 'ca8a8eb4ac65ff8160a0cd794b9a249f4ab87c7b' }, h("thead", { key: 'e9d75e325db9ba82e0f3898926cb92c8bd3ebe77' }, h("tr", { key: '0dce48d48d9669148386d2db32b653ad33b23cee' }, h("th", { key: '8abc451528a87b3a79b04aa991ea3e0f5c8250ff' }, locales.entries.Lcz_Status), h("th", { key: '0fa336eed9796cebf67a397d77acd9ef048458d6', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '7166d837bdc2d3dd7fb2eea8829f4255bfc9f558' }, locales.entries.Lcz_Action))), h("tbody", { key: '2334ef2000f8b1d31052dccd25969c65650f83ea' }, (_a = housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
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