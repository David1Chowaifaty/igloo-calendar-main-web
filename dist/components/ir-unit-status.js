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
    }
    housekeepingService = new HouseKeepingService();
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
            await this.housekeepingService.setExposedInspectionMode(housekeeping_store.default_properties.property_id, mode);
            this.resetData.emit(null);
        }
        catch (error) {
            console.error(error);
        }
    }
    render() {
        return (h(Host, { key: 'a6111d27f5692b25eec4f8be896508b381a58d1a', class: "card p-1" }, h("ir-title", { key: 'f578c5f0cda76ececeaec66c7064e9fe26e5e50c', label: locales.entries.Lcz_RoomOrUnitStatus }), h("div", { key: '97dd49c0a7bca8ce9e14921a09efe104749cae22', class: "table-container" }, h("table", { key: '1b4249a6b750b68ee1325b929536e35e6b38adc5' }, h("thead", { key: '6eee0f6e86c5be5260a89c2d4ac9b26466e37dda' }, h("tr", { key: 'b4d5ce18d04c4ba3c26e69cabd99d90a2bc07053' }, h("th", { key: '1006b1b95ec443247d41bfdb0b57c5bdd3616dc2' }, locales.entries.Lcz_Status), h("th", { key: '2e780121a71e412db9dfdc54da5e6898f12c3470', class: 'text-center' }, locales.entries.Lcz_Code), h("th", { key: '8310211f8c6fd7d795ccb4d36d42afa661bd7e6f' }, locales.entries.Lcz_Action))), h("tbody", { key: '1cee324f1a944ef530e58877a3203a0a1fa92bcc' }, housekeeping_store.hk_criteria.statuses?.map(status => (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), status.code === 'VAC' && (h("div", null, h("ir-select", { selectedValue: status.inspection_mode.is_active ? status.inspection_mode?.window.toString() : '', firstOption: locales.entries.Lcz_No, onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(7 + 1), (_, i) => i).map(i => {
                const text = i === 0
                    ? locales.entries.Lcz_YesOnTheSameDay
                    : i === 1
                        ? locales.entries.Lcz_DayPrior.replace('%1', i.toString())
                        : locales.entries.Lcz_DaysPrior.replace('%1', i.toString());
                return {
                    text,
                    value: i.toString(),
                };
            }) })))))))))))));
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