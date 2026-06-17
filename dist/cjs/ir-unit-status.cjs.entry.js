'use strict';

var index = require('./index-CJ0kc5p1.js');
var housekeeping_service = require('./housekeeping.service-DP9n8kHY.js');
var locales_store = require('./locales.store-BfrChT1G.js');
require('./index-CLqkDPTC.js');
require('./index-dbmC5P-h.js');
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
        return (index.h(index.Host, { key: '3b7fbc362a13a19ce66e507b0f1e678bba0e77b7', class: "card p-1" }, index.h("ir-title", { key: 'f4e7825de2df0c3d535b280fda80a301c1ef0e17', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: '20ba38fd4dcd074fc3bf5df0b92b457458d9639c', class: "table-container" }, index.h("table", { key: 'e20e850db8c61e7395ab6fe64a63927c3f7a9db3' }, index.h("thead", { key: 'f9276325862326c762fb11deedc6200e7894099e' }, index.h("tr", { key: 'b3a6aea5d916d9eff3d906699bb7639557c8453d' }, index.h("th", { key: '8cdd5d1a3c5f7bd9d2bbd327f49abf30ad916548' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: 'a30632525637c6b9e1ae7438fb0f8b7d35975cf9', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '830e336e59b0395440bbc90a2410057b485c9675' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '56aca16974e366931fb9992e69c0d114d3c06804' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
