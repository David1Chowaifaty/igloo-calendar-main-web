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
        return (index.h(index.Host, { key: '1e86445242a87d5247d24066a1c17b2605f782d3', class: "card p-1" }, index.h("ir-title", { key: '09009a019956830d144676c9e23c6cedcc20b7dc', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: 'f4658b83070c73da649677535096f0fd08067db4', class: "table-container" }, index.h("table", { key: '9466b7dcc76d61c1d9235b9df365bce1742c28f1' }, index.h("thead", { key: '7abdc1c0abd18f4d17f68b0d03c08ea7e04f7c7b' }, index.h("tr", { key: '9fb1f99bfcf8068bf65943d870ecceeeda7f751a' }, index.h("th", { key: '3df6aeb678aa9fe2f3358d52b0e98ba3fd0df4af' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: 'ccdb1edd2334621631937252ef27315d7b52f28a', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '87bbbc449dc0cad17efc5e4c29096ed7ec258144' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: 'bc5162e2d5a9c0d15c14dfb460485e1cf0eca1ca' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
