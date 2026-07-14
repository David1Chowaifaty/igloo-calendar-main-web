'use strict';

var index = require('./index-Du1V06mp.js');
var housekeeping_service = require('./housekeeping.service-BoATCThy.js');
var locales_store = require('./locales.store-CYcHBWUG.js');
require('./index-CLqkDPTC.js');
require('./index-BTAleJGz.js');
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
        return (index.h(index.Host, { key: 'e764685956839a20584f3a65891da80604185d27', class: "card p-1" }, index.h("ir-title", { key: '57b73180622e5a5bc6ca6a92a59b2f175d2c451d', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: '77a8af6136bdc81caade154c1ff3ab1630f5070f', class: "table-container" }, index.h("table", { key: '1f9667fd8e051c35b6daa586520e7f99db273cbb' }, index.h("thead", { key: 'b3038fb03ee879dd97b429a48852d43c6ed9b661' }, index.h("tr", { key: 'f66903e6d0e522001fe93909857bf216ee303c4a' }, index.h("th", { key: '5ec9859829a5a90b03ade072fd965aa40b1926d0' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: 'b42659cc25c281f4bf4890d2135c5ac7615c57de', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '4bb20f2d656dd2430c1d2193f36d7caf82dcc544' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '9cdcc2e570363d11d899087ef6304fdb6e0570ff' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
