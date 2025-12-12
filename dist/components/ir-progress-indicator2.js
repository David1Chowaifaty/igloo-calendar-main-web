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
        return (h(Host, { key: '028d50b4ea3803bb5360e4fcbd1b49c2d80c7221', class: "progress-main" }, h("span", { key: 'b805ba2a73b9b9ed9760fe2d47ae7881132df2b3', class: "progress-totle" }, this.percentage), h("div", { key: '5efecd1e6332789edd54e5b52118197e5673b577', class: "progress-line" }, h("div", { key: 'f7b6e14a019e9ebb9929f496849812ac046245b6', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
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