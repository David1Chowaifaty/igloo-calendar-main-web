import { r as registerInstance, c as createEvent, h, H as Host } from './index-Kqbk9HdW.js';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service-BM46FCOw.js';
import { l as locales } from './locales.store-C-PbJt6i.js';
import './index-DeW5X45W.js';
import './index-BJS0kaeV.js';
import './axios-CleaxLzD.js';

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
        return (h(Host, { key: '230cd8a6c0ed0b33aa1a1decc762250ea5aba04a', class: "card p-1" }, h("ir-title", { key: '95f8993a38ecbb394c9635c87380a9b9305813e3', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '84924fb898b5cc7243cb13f1ddfb18c86d01b1d0', class: "table-container" }, h("table", { key: 'a1f17eeba9092ca95b92a050d2d1da38c293d51b' }, h("thead", { key: '0591c5b08c59eb489053ac3e28a1db0199b8da4f' }, h("tr", { key: '7630d6c128a91de0723b5c1e9543b0738d302258' }, h("th", { key: '7ed150f7f5dabdf1edc55389309400177dce2a8f' }, locales.entries.Lcz_Status), h("th", { key: '7c6e9abb5cbc81f9c3cc36a46d127b952678e1dd', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: 'e69d0651a185af193a7722be2c32c9b2196fd3cf' }, locales.entries.Lcz_Action))), h("tbody", { key: 'e41267eb12770a78cdc615ad7c73840166363be8' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
