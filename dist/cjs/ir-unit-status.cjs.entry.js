'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const housekeeping_service = require('./housekeeping.service-ef854ce9.js');
const locales_store = require('./locales.store-4eb57996.js');
require('./index-6299b0f7.js');
require('./axios-6e678d52.js');

const irUnitStatusCss = ".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";
const IrUnitStatusStyle0 = irUnitStatusCss;

const IrUnitStatus = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData", 7);
    }
    housekeepingService = new housekeeping_service.HouseKeepingService();
    resetData;
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
        return (index.h(index.Host, { key: '65302e92abafd5b6d2e9e58a758c1fbf108c38b4', class: "card p-1" }, index.h("ir-title", { key: '935027971febc85748df0efa46031670dc462248', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: '1a8819a0cc0cfffc434caabdc802805da732c06b', class: "table-container" }, index.h("table", { key: '42572a82756538ddc1eece0e9642cb2ad7178e01' }, index.h("thead", { key: '97bb4aa00dc6ee748aee3ac786f8ad5c8194a5c0' }, index.h("tr", { key: '45b495b23124c46a046925d689c2d90d0af5b2d6' }, index.h("th", { key: '759173830b4d07d73119fc84abed690a62b406cf' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '864cad582bf8bbd381911497c18cfd1c8fd9d56f', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '4ceabfff14e09d8779004e82e48d0ba997a06b07' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '0bd26d6e1591b8e7c3e34788af5a730769842125' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0
                    ? locales_store.locales.entries.Lcz_YesOnTheSameDay
                    : i === 1
                        ? locales_store.locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                        : locales_store.locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                return {
                    text,
                    value: i.toString(),
                };
            }) })))))))))))));
    }
};
IrUnitStatus.style = IrUnitStatusStyle0;

exports.ir_unit_status = IrUnitStatus;

//# sourceMappingURL=ir-unit-status.cjs.entry.js.map