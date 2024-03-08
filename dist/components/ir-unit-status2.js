import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { H as HouseKeepingService, h as housekeeping_store } from './housekeeping.service.js';
import { d as defineCustomElement$1 } from './ir-select2.js';

const irUnitStatusCss = ".sc-ir-unit-status-h{display:block}.circle.sc-ir-unit-status{display:inline-flex;border-radius:50%}.green.sc-ir-unit-status{background:#629a4c}.red.sc-ir-unit-status{background:#ff4961}.orange.sc-ir-unit-status{background:#ff9149}.table-container.sc-ir-unit-status{width:100%;overflow-x:auto}.black.sc-ir-unit-status{background:#000}table.sc-ir-unit-status{width:max-content}td.sc-ir-unit-status{min-width:140px;text-align:center}.smallcircle.sc-ir-unit-status{height:7px;width:7px}.bigcircle.sc-ir-unit-status{height:7px;width:7px}.status-container.sc-ir-unit-status,.action-container.sc-ir-unit-status{display:flex;align-items:center;gap:8px}.status-container.sc-ir-unit-status p.sc-ir-unit-status{margin:0}";
const IrUnitStatusStyle0 = irUnitStatusCss;

const IrUnitStatus = /*@__PURE__*/ proxyCustomElement(class IrUnitStatus extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.housekeepingService = new HouseKeepingService();
    }
    componentWillLoad() {
        this.housekeepingService.setToken(housekeeping_store.default_properties.token);
    }
    async handleSelectChange(e) {
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
    }
    render() {
        var _a;
        return (h(Host, { key: 'b9ccf4be982331f2c522260533953b5a677e89ce', class: "card p-1" }, h("h4", { key: '13627659ed3993acb46ab9d7ac831837e915e74f' }, "Room or Unit Status"), h("div", { key: '1ba270de17b94c4d5d7e8849fbfe25a0aadc45e3', class: "table-container" }, h("table", { key: 'be220c8f3c42e1c8588e37b947954d4702571125' }, h("thead", { key: '42c194a9a5cf5019d32a922ed04aa16e657470cc' }, h("tr", { key: '816a825e3bae7f27c5553e845ece70a2cf97b215' }, h("th", { key: 'c06f105e12276ed44faa25e18a079b17c55b60e4' }, "Status"), h("th", { key: '730b935e970d663808eb7d2ff56c6fe3e001908f', class: 'text-center' }, "Code"), h("th", { key: '733d6fef846e6e202dd3813652dd7dacbc314bd8' }, "Action"))), h("tbody", { key: '2ad964668de00f4847d3696d825d8035821146c8' }, (_a = housekeeping_store.hk_criteria.statuses) === null || _a === void 0 ? void 0 : _a.map(status => {
            var _a;
            return (h("tr", { key: status.code }, h("td", null, h("div", { class: "status-container" }, h("span", { class: `circle ${status.style.shape} ${status.style.color}` }), h("p", null, status.description))), h("td", null, status.code), h("td", null, h("div", { class: "action-container" }, h("p", { class: 'm-0' }, status.action), ((_a = status.inspection_mode) === null || _a === void 0 ? void 0 : _a.is_active) && (h("div", null, h("ir-select", {
                //selectedValue={status.inspection_mode?.window.toString()}
                LabelAvailable: false, firstOption: "No", onSelectChange: this.handleSelectChange.bind(this), data: Array.from(Array(status.inspection_mode.window + 1), (_, i) => i).map(i => {
                    const text = i === 0 ? 'Yes on the same day.' : i.toString() + ' day prior.';
                    return {
                        text,
                        value: i.toString(),
                    };
                })
            })))))));
        }))))));
    }
    static get style() { return IrUnitStatusStyle0; }
}, [2, "ir-unit-status"]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-unit-status", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-unit-status":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrUnitStatus);
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrUnitStatus as I, defineCustomElement as d };

//# sourceMappingURL=ir-unit-status2.js.map