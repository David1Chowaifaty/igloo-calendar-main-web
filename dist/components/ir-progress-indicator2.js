import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

const IrProgressIndicator = /*@__PURE__*/ proxyCustomElement(class IrProgressIndicator extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        /**
         * The color variant of the progress bar.
         * Options:
         * - 'primary' (default)
         * - 'secondary'
         */
        this.color = 'primary';
    }
    render() {
        return (h(Host, { key: '7616cb7a7e9926f1867af19d66c9eba98f97c297', class: "progress-main" }, h("span", { key: 'cc8a342bf8b2b4d6b3f986da86c3ee5e314f79d3', class: "progress-totle" }, this.percentage), h("div", { key: 'eba238c7c78467e752271107cea8a45ba70f1c5a', class: "progress-line" }, h("div", { key: '9e97c58db201b39f8533d7b4e3674e1e20c324f9', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
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