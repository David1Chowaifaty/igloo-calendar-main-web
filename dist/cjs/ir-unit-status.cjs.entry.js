'use strict';

var index = require('./index-DYQrLNin.js');
var housekeeping_service = require('./housekeeping.service-DUTTsbC7.js');
var locales_store = require('./locales.store-6IlEbCjL.js');
require('./index-CLqkDPTC.js');
require('./index-C59pxKl1.js');
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
        return (index.h(index.Host, { key: 'cc603e3454f5f792061fb5d365b5fcbac5c96ad8', class: "card p-1" }, index.h("ir-title", { key: '53267e3418ac84a35da259cf8dedbbc59537e234', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: 'ce9547e0591e253038a82f52f4709eec2898833c', class: "table-container" }, index.h("table", { key: 'f48e471b3eefc3508b8918b15dc383707a06a42c' }, index.h("thead", { key: 'acf539fa3a25376854649842cbd79ed7751cb644' }, index.h("tr", { key: '6bd9ee552978800c6f71a66fd07267640ce4940b' }, index.h("th", { key: 'e6dc55d8c195fcf7ea56a7f209a5d104952c7006' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: 'ab0a1eb0b0c288ac6aa0b7ea480cda64646e3a26', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: 'c75c9861c40ab4d482fdfbffa77473c9cd812ff3' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '1da98257af1ecb3253e97502dbca0b5825f2681f' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
