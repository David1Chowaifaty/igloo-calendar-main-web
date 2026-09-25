'use strict';

var index = require('./index-CQkpA5n3.js');
var index$1 = require('./index-m9Y7cDOF.js');
var t = require('./t-C54QV4_c.js');
require('./types-BlCoz3jZ.js');
require('./locales.store-BMTss6fG.js');
require('./axios-EresIryl.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./commonSchemas-BFzTbV-r.js');

const irUnitStatusCss = () => `.sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}`;

const IrUnitStatus = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.resetData = index.createEvent(this, "resetData");
    }
    housekeepingService = new index$1.HouseKeepingService();
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
            await this.housekeepingService.setExposedInspectionMode(index$1.housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (index.h(index.Host, { key: 'febb3a8617577fe1137a0cc97d822ff5c9bc7d64', class: "card p-1" }, index.h("ir-title", { key: '1b1ab435b9cdf90a05371151e2ff5dfa818f3148', label: t.t('Lcz_RoomOrUnitStatus', { fallback: 'Room or Unit Status' }) }), index.h("div", { key: '2f3609b64b4db49e302b3745a6533bb8ab41d70d', class: "table-container" }, index.h("table", { key: 'be0bd1355500e7c5c8d85cb755752f26e7d454a1' }, index.h("thead", { key: 'c0c2bf095315f0c97c39ad3f48d2faf15092b926' }, index.h("tr", { key: '5e9564933a1bb3705981e0aa63c5629710882586' }, index.h("th", { key: '94ddee36f343a0d29dbbb7554f20c8fbb93e8666' }, t.t('Lcz_Status', { fallback: 'Status' })), index.h("th", { key: '166cdba2fe3b6b02474625bca849fb06eece947c', class: 'text-center' }, t.t('Lcz_Code', { fallback: 'Code' })), index.h("th", { key: '71cc028deb9b1b686faefafe6ca96e005c8823eb' }, t.t('Lcz_Action', { fallback: 'Action' })))), index.h("tbody", { key: 'bdeb33ac3b797a74afbeb3903270d8ecb1c18b5c' }, index$1.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: t.t('Lcz_No', { fallback: 'No' }), onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0
                    ? t.t('Lcz_YesOnTheSameDay', { fallback: 'Yes on the same day' })
                    : i === 1
                        ? t.t('Lcz_DayPrior', { params: [i.toString()] })
                        : t.t('Lcz_DaysPrior', { params: [i.toString()] });
                return {
                    text,
                    value: i.toString(),
                };
            }) })))))))))))));
    }
};
IrUnitStatus.style = irUnitStatusCss();

exports.ir_unit_status = IrUnitStatus;
