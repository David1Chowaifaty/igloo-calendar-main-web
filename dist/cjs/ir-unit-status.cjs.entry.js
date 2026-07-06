'use strict';

var index = require('./index-DYQrLNin.js');
var housekeeping_service = require('./housekeeping.service--GXxoT47.js');
var locales_store = require('./locales.store-6IlEbCjL.js');
require('./index-CLqkDPTC.js');
require('./index-C59pxKl1.js');
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
        return (index.h(index.Host, { key: '2028e57913368d576adbb735c831d05ff4b10034', class: "card p-1" }, index.h("ir-title", { key: 'ee5b010421cd0d2666563ca9c13a31f1e24db1ba', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: '2f249619b2e95f0b44f14cc44c408621ff7822b9', class: "table-container" }, index.h("table", { key: '1525b1eb22111d397db7bd030ef48b930f3bf574' }, index.h("thead", { key: '6ada19a119e916aaeb51817821dbd4fcca87e434' }, index.h("tr", { key: '8b0e037a98dcce5c28148985e7b6e1f042eb29e0' }, index.h("th", { key: 'd48df5321383727b2c02b54706ab6c29a9d03467' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '90e8eb7843b65cddab690e8b464f61d68ec1a9d3', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '823d20392c818d82138d049c6ebd9221641569a4' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '11e61ab3cb22643d9dcd119022c72e85d7b1a0fd' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
