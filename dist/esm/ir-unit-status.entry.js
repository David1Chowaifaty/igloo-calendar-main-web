import { r as registerInstance, c as createEvent, h, H as Host } from './index-1d2aa5ad.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-3517d93a.js';
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
        return (h(Host, { key: '4c1678d7e9a2f12b303c3684636330bef73a407a', class: "card p-1" }, h("ir-title", { key: '2b970398e560fc5afe0b9683bb22384dbf29a647', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '68e6f6c946b8ec854230b04cd7bbe112fab01977', class: "table-container" }, h("table", { key: '409ff69af41c88679e1e70856038f36ab6bd63f8' }, h("thead", { key: 'bbe64e5c4aae513b288f32354e473043e899d3f6' }, h("tr", { key: '6764b243d3235c454d0f3fa0a18c109eb83edffe' }, h("th", { key: 'db2bc290870c4e64238987663b759249a74a7f23' }, locales.entries.Lcz_Status), h("th", { key: 'e679db5e076da718308fb32309fbc9ccacc442a5', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '4760604b5429ebbf73ec720fddbc9466cadb3280' }, locales.entries.Lcz_Action))), h("tbody", { key: '8a1e108052a4e2771ccf08d59812e9f8b7a383aa' }, (_a = housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
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