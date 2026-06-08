import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

const IrProgressIndicator = /*@__PURE__*/ proxyCustomElement(class IrProgressIndicator extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
    }
    /**
     * The percentage value to display and fill the progress bar.
     * Example: "75%"
     */
    percentage;
    /**
     * The color variant of the progress bar.
     * Options:
     * - 'primary' (default)
     * - 'secondary'
     */
    color = 'primary';
    render() {
        return (h(Host, { key: '6142170cc029ef98156ff7016a94df03860436c2', class: "progress-main" }, h("span", { key: '42000b742a5a95571bfbea2c3672620749431bf1', class: "progress-totle" }, this.percentage), h("div", { key: '18e956dc37e8d1a0baf439ea4e8d4df281cca9f3', class: "progress-line" }, h("div", { key: 'ae2b39eb752a8c5d6fa2b1dc0a8b1ec1ea6cc73d', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
    static get style() { return IrProgressIndicatorStyle0; }
}, [2, "ir-progress-indicator", {
        "percentage": [1],
        "color": [1]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-progress-indicator"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-progress-indicator":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrProgressIndicator);
            }
            break;
    } });
}

export { IrProgressIndicator as I, defineCustomElement as d };

//# sourceMappingURL=ir-progress-indicator2.js.map