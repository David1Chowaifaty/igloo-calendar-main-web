'use strict';

var index = require('./index-Bp205iz4.js');
var housekeeping_service = require('./housekeeping.service-6nengkN8.js');
var locales_store = require('./locales.store-CQhQqUVl.js');
require('./types-BVJQZ50e.js');
require('./index-CjQGUKJk.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');

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
        return (index.h(index.Host, { key: '036f45064650d0ecda8dc5825049e3e2d989da2e', class: "card p-1" }, index.h("ir-title", { key: '1e8f92d03e6d55e9a0cd9623028c736d60871a78', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: 'c1980be87b24750f95f5004feeb74d437e85c100', class: "table-container" }, index.h("table", { key: '57831c2f17cf381a5f37d67545ab0917e267d1d0' }, index.h("thead", { key: '8e2af0e4bbee8b7965c6ba9a7a809b99acdc59a2' }, index.h("tr", { key: '12949467a703bd41796b1eb74643d7b42f2cbf6a' }, index.h("th", { key: 'd71ca42e901e56c6cf160bc1fdd2d468a50b2ad4' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '853d0385460ab1c8b734c0be5697e5a3c448b38e', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '09201c2682940e9e97d59f9e3366c1753d5a87fb' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '091b73618e741a0747ea098a2e7527af062ba286' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
