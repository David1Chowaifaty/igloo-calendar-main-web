import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$3 } from './ir-date-picker2.js';
import { d as defineCustomElement$2 } from './ir-range-picker2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp$1 = /*@__PURE__*/ proxyCustomElement(class IrTestCmp extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    render() {
        var _a, _b;
        return (h(Host, { key: 'bf489e350df61c9eb8dd764e3a0b4aeb95ff883a', class: "card p-4" }, h("ir-range-picker", { key: 'b9fd5f7efb6401125923338aeac1b77ffb2e94ff', onDateRangeChanged: e => (this.dates = e.detail), fromDate: (_a = this.dates) === null || _a === void 0 ? void 0 : _a.fromDate, toDate: (_b = this.dates) === null || _b === void 0 ? void 0 : _b.toDate })));
    }
    static get style() { return IrTestCmpStyle0; }
}, [2, "ir-test-cmp", {
        "dates": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-test-cmp", "ir-date-picker", "ir-range-picker"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTestCmp$1);
            }
            break;
        case "ir-date-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-range-picker":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrTestCmp = IrTestCmp$1;
const defineCustomElement = defineCustomElement$1;

export { IrTestCmp, defineCustomElement };

//# sourceMappingURL=ir-test-cmp.js.map