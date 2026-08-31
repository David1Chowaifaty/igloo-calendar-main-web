'use strict';

var index = require('./index-DN8J4ULi.js');
var housekeeping_service = require('./housekeeping.service-DZOIAGrO.js');
var locales_store = require('./locales.store-QRiel1Gy.js');
require('./index-CLqkDPTC.js');
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
        return (index.h(index.Host, { key: 'c0194838db3cd05ee85b55c3d37750558c2c2749', class: "card p-1" }, index.h("ir-title", { key: 'e64b6ff4f122183d259ae6fedacaef0fb76432a8', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: '62f05c88f9ad334f83e6fef2bcffc28f1642e6cd', class: "table-container" }, index.h("table", { key: '82078424422f472229554e0be6d539936c12a916' }, index.h("thead", { key: '2b96aa4c57c8e60b4cf2c5186f21a3b114a78e07' }, index.h("tr", { key: '79827ba3d5e26906757924bb825c76f848eb04ba' }, index.h("th", { key: '5c22c3d0f2b4cd5a0ce6a0f17292deeffff076e2' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '8c542bdcbcbfcc9ade021a48fadd3c9732c97533', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '45d27383b42f2b7eec6ad7d13281f01edc284687' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: 'ea78d26f64a3893d71f83e4e18e4371b65138762' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
