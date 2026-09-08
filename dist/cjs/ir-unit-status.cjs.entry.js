'use strict';

var index = require('./index-P5Mginch.js');
var housekeeping_service = require('./housekeeping.service-CXKCfWFZ.js');
var t = require('./t-BpMDZfdy.js');
require('./index-CLqkDPTC.js');
require('./index-BLJXadKe.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./locales.store-DIYxw5lk.js');

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
        return (index.h(index.Host, { key: '2f0a16aa8534923d812dc320e34f9b5e8d4adc2b', class: "card p-1" }, index.h("ir-title", { key: '3928624b141ddd92c57c201dbd66778d6c1b43de', label: t.t('Lcz_RoomOrUnitStatus') }), index.h("div", { key: '20948d3a7fe9c0ae8cf42c2290562445c5eb857d', class: "table-container" }, index.h("table", { key: 'f900657bb6502acfad8c0d62ac971e72f8b0ca56' }, index.h("thead", { key: 'ea12143d41e49ab31a20aecbec546b991947d401' }, index.h("tr", { key: '9385f5f65c1317a5b794e8983f07391fc35a6e66' }, index.h("th", { key: '77614d49500e4594ab3b39a04dceaf0991f8ebbb' }, t.t('Lcz_Status')), index.h("th", { key: 'ce309dc41c4177009ae9db094dd78733e3242803', class: 'text-center' }, t.t('Lcz_Code')), index.h("th", { key: '22146dc904af99c168b9be3ed596fca54b1ae92c' }, t.t('Lcz_Action')))), index.h("tbody", { key: '65bd7b9806e3e6dc4aa2d981d7cc939dfc3a6189' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t.t('Lcz_No'), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0 ? t.t('Lcz_YesOnTheSameDay') : i === 1 ? t.t('Lcz_DayPrior', { params: [i.toString()] }) : t.t('Lcz_DaysPrior', { params: [i.toString()] });
                return {
                    text,
                    value: i.toString(),
                };
            }) })))))))))))));
    }
};
IrUnitStatus.style = irUnitStatusCss();

exports.ir_unit_status = IrUnitStatus;
