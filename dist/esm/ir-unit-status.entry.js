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
        return (h(Host, { key: 'a148408ffccd1d00a88c7ff5fae1c063611c62df', class: "card p-1" }, h("ir-title", { key: 'e4270399be0bba006c49b646299c5e83091feaab', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '3dc7fd72865d80ff2bf90444da5af0fae2813a0e', class: "table-container" }, h("table", { key: '920e0f9cb6ce6fb5bc803a5822638a96d6dc288b' }, h("thead", { key: '287efd1a653552b8c2781448e149088b5416423a' }, h("tr", { key: '0b4557422425a6710f28cc8561e97bfad9253b01' }, h("th", { key: 'dfc08f3585d1123cfdc361638b41e705b63944aa' }, locales.entries.Lcz_Status), h("th", { key: '63ae3cc8f4abe0a5f23df60d1a164c0ea158b0c8', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '9abb6007fc65f0637f4a1099af49516723e1d51a' }, locales.entries.Lcz_Action))), h("tbody", { key: '593fa20c01662b3c440139840636b0ddaf9a2d1f' }, (_a = housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
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