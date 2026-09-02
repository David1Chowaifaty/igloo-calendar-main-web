'use strict';

var index = require('./index-P5Mginch.js');
var housekeeping_service = require('./housekeeping.service-CXKCfWFZ.js');
var locales_store = require('./locales.store-v9LoZcAK.js');
require('./index-CLqkDPTC.js');
require('./index-BLJXadKe.js');
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
        return (index.h(index.Host, { key: '1cf9901c37800766b8c0ce53fefd5375af54d5b8', class: "card p-1" }, index.h("ir-title", { key: 'd0f077298a96d66c76c731898008a3e38ede43b0', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: 'd9bff534e35216446a61f47fa0e95eb30bbd6c9b', class: "table-container" }, index.h("table", { key: 'e0ec2b62a10d43b25666eecace3b354eae6e6225' }, index.h("thead", { key: 'c0ebaffd7c1f3457a3eb0a989a27abd67bffe40f' }, index.h("tr", { key: '6f8c06b2e2bd8216061ff0f601407f5dd62319f0' }, index.h("th", { key: 'ee472d1bcd0f72eed10a4dab860d9276d78ae000' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '35dd0d0cc3228ecbf47fd533605d62be3ea780be', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '9062886dcfc114becf6dd9f8f2aa254ab1d7c90e' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '8bdbc198d5e0b21e920ededc6776a5064d17c90f' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
