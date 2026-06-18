import { r as registerInstance, c as createEvent, h, H as Host } from './index-D8DCR0yx.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-CUJ6bqI9.js';
import { l as locales } from './locales.store-ChFOK43k.js';
import './index-DeW5X45W.js';
import './index-D5oXdmCj.js';
import './axios-B50ozOIF.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irUnitStatusCss = () => `.sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}`;

const IrUnitStatus = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.resetData = createEvent(this, "resetData");
    }
    housekeepingService = new HouseKeepingService();
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
            await this.housekeepingService.setExposedInspectionMode(housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (h(Host, { key: 'a49e6db3492c26bdac7ac71eab9f46d95e136f78', class: "card p-1" }, h("ir-title", { key: 'f426a8c67c7b0c3c199d2eb880c0ce36d3a64718', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '0359be50811df3b7b4ede4d75d22b55b747ee2ca', class: "table-container" }, h("table", { key: '6a337aec15940967f0fe9bebc26e2b80f960a0da' }, h("thead", { key: '8418eb0c9d7461560870c004955453c06089f4e5' }, h("tr", { key: '904eb1f2c1cd9651d94e4b55e62a99b87785c535' }, h("th", { key: 'fea6ed2d4cbc3c44ff42a6fe8505429affcd4949' }, locales.entries.Lcz_Status), h("th", { key: '1ee264ee71423892482e40dd60b9034e5393ffae', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '5c5968bc8bd13cb4d4b0974d079b2a1f14aad1f1' }, locales.entries.Lcz_Action))), h("tbody", { key: '978747e3f9f6ad0cd9d5e1f1211db8b32e488d76' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0
                    ? locales.entries.Lcz_YesOnTheSameDay
                    : i === 1
                        ? locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                        : locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                return {
                    text,
                    value: i.toString(),
                };
            }) })))))))))))));
    }
};
IrUnitStatus.style = irUnitStatusCss();

export { IrUnitStatus as ir_unit_status };
