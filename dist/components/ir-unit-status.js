import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { H as HouseKeepingService } from './housekeeping.service.js';
import { h as housekeeping_store } from './housekeeping.store.js';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$4 } from './ir-icon2.js';
import { d as defineCustomElement$3 } from './ir-select2.js';
import { d as defineCustomElement$2 } from './ir-title2.js';

const irUnitStatusCss = ".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#57f707}.red.sc-ir-unit-status{background:rgb(199, 139, 36)}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#ff4961}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center;height:2rem}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";
const IrUnitStatusStyle0 = irUnitStatusCss;

const IrUnitStatus$1 = /*@__PURE__*/ proxyCustomElement(class IrUnitStatus extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.resetData = createEvent(this, "resetData", 7);
        this.housekeepingService = new HouseKeepingService();
    }
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
            await this.housekeepingService.setExposedInspectionMode(housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        var _a;
        return (h(Host, { key: 'e82e8fa1af5fc3c9d9f9c1d68228c421d9999d39', class: "card p-1" }, h("ir-title", { key: 'd80d9bcaaad27204340313c0eea7ddea038ce5ee', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: 'c27e59f2c26cf53299bcfb871a2fe920ac137721', class: "table-container" }, h("table", { key: 'a4155580e219b1f5ed52768c50212c23791f372b' }, h("thead", { key: 'ddf24a0ae83c0a26bc07361d817c253b5343e6a1' }, h("tr", { key: 'bd4db1d75579ae5a209e9a142b8c89697148a276' }, h("th", { key: '4fa24397e34f722d26e75255bde19b562b95c248' }, locales.entries.Lcz_Status), h("th", { key: 'ac414eaa4abcf4d24ec6bf83e30251266e7e122b', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '5ab9e0b1aae955f9ee8a810205de1fad681a852e' }, locales.entries.Lcz_Action))), h("tbody", { key: 'cc38ce8768fd8a4da18c443d586d138871114926' }, (_a = housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
            var _a;
            return (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? (_a = status.inspection_mode) === null || _a === void 0 ? void 0 : _a.window.toString() : '', LabelAvailable: false, firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                    const text = i === 0
                        ? locales.entries.Lcz_YesOnTheSameDay
                        : i === 1
                            ? locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                            : locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                    return {
                        text,
                        value: i.toString(),
                    };
                }) })))))));
        }))))));
    }
    static get style() { return IrUnitStatusStyle0; }
}, [2, "ir-unit-status"]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-unit-status", "ir-icon", "ir-select", "ir-title"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-unit-status":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUnitStatus$1);
            }
            break;
        case "ir-icon":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-title":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrUnitStatus = IrUnitStatus$1;
const defineCustomElement = defineCustomElement$1;

export { IrUnitStatus, defineCustomElement };

//# sourceMappingURL=ir-unit-status.js.map