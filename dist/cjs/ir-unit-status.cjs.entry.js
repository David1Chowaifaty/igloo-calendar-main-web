'use strict';

var index = require('./index-DgHWBwDV.js');
var housekeeping_service = require('./housekeeping.service-BQBlF6Gs.js');
var locales_store = require('./locales.store-CqlNSy6z.js');
require('./index-CLqkDPTC.js');
require('./index-daCuTVuG.js');
require('./axios-C-Phc0sj.js');

const irUnitStatusCss = () => `.sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}`;

const IrUnitStatus = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData");
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
        return (index.h(index.Host, { key: '230cd8a6c0ed0b33aa1a1decc762250ea5aba04a', class: "card p-1" }, index.h("ir-title", { key: '95f8993a38ecbb394c9635c87380a9b9305813e3', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: '84924fb898b5cc7243cb13f1ddfb18c86d01b1d0', class: "table-container" }, index.h("table", { key: 'a1f17eeba9092ca95b92a050d2d1da38c293d51b' }, index.h("thead", { key: '0591c5b08c59eb489053ac3e28a1db0199b8da4f' }, index.h("tr", { key: '7630d6c128a91de0723b5c1e9543b0738d302258' }, index.h("th", { key: '7ed150f7f5dabdf1edc55389309400177dce2a8f' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '7c6e9abb5cbc81f9c3cc36a46d127b952678e1dd', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: 'e69d0651a185af193a7722be2c32c9b2196fd3cf' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: 'e41267eb12770a78cdc615ad7c73840166363be8' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
IrUnitStatus.style = irUnitStatusCss();

exports.ir_unit_status = IrUnitStatus;
