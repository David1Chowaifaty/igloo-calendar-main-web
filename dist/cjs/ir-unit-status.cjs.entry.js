'use strict';

var index = require('./index-CJ0kc5p1.js');
var housekeeping_service = require('./housekeeping.service-nD5aZ8sN.js');
var locales_store = require('./locales.store-BfrChT1G.js');
require('./index-CLqkDPTC.js');
require('./index-dbmC5P-h.js');
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
        return (index.h(index.Host, { key: '2c152f11c889876a5bb7bbf3a2efb9478ecf8e52', class: "card p-1" }, index.h("ir-title", { key: '401948add60c661f370f1c13129171bce60ab492', label: locales_store.locales.entries.Lcz_RoomOrUnitStatus }), index.h("div", { key: '9f4ae48f033ee2b27a56cd2b4659a6c7370001c9', class: "table-container" }, index.h("table", { key: '8f0365e0b936e77da23bae15cf8088e4424c9601' }, index.h("thead", { key: '11099bad8347b47481809e419dc329f7e9df8a9c' }, index.h("tr", { key: 'e331475b198adeb19922191ad47a0ab0830dceb4' }, index.h("th", { key: 'b14234db6f86c691c8a738714e8bd4497afd0a2a' }, locales_store.locales.entries.Lcz_Status), index.h("th", { key: '8bd818a7e1c0adedabbe992ae5cfef45e39743a2', class: 'text-center' }, locales_store.locales.entries.Lcz_Code), index.h("th", { key: '67481bf27b5686ea4a185c0ccceb5375f23383fe' }, locales_store.locales.entries.Lcz_Action))), index.h("tbody", { key: '34bfd473d85322826ef5abad0c5aee914bea1ece' }, housekeeping_service.housekeeping_store.hk_criteria.statuses?.map(status => (index.h("tr", { key: status.code }, index.h("td", null, index.h("div", { class: "status-container" }, index.h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), index.h("p", null, status.description))), index.h("td", null, status.code), index.h("td", null, index.h("div", { class: "action-container" }, index.h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (index.h("div", null, index.h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales_store.locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
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
