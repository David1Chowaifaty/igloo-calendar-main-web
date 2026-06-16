'use strict';

var index = require('./index-Cn9TxUnA.js');
var housekeeping_service = require('./housekeeping.service-WcEyQRl7.js');
var locales_store = require('./locales.store-BeGVOOFV.js');
require('./index-CLqkDPTC.js');
require('./index-DIiJtwiU.js');
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
        return (index.h(index.Host, { key: '19635935e4ec018b6a094dd4c5a7cb48e6824e50', class: "card p-1" }, index.h("ir-title", { key: 'aa83eb1481224cf5743475375d21f66a110a5a4e', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: '1fa87ba474602c33ce84af97a0bd4d6b663a34f4', class: "table-container" }, index.h("table", { key: 'fa5f41c4ae9e267e0ab4ca6698518a6494cc64c2' }, index.h("thead", { key: '08d20091e6d0bb8cea7496f22c7e9d214060e3e7' }, index.h("tr", { key: 'f5202aa9c19a1983ec7cc66c24bea0f899f8b23b' }, index.h("th", { key: '5f85eace4596e660ad22ff3281715c7ca31f9aee' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '806382c81e21c3daeaa1c657314dc3caf70e817b', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: 'ad1bc7db13799ce43a664f1cb1aa7603595b913b' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: 'e050c28361cd621d89a6ce7606bea09a3b3d23d0' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
