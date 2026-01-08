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
        return (h(Host, { key: '8c0f2542ba3abf2555f5c264e63af958495ce641', class: "progress-main" }, h("span", { key: '5fdede8ef4548ca8f75b3859a2bd3b225cb7fff2', class: "progress-totle" }, this.percentage), h("div", { key: '2e9c5fcdd4a8260408224ae5dbc689dfcd59b5db', class: "progress-line" }, h("div", { key: 'be537b89e514160889d56123af50022e1024eb26', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
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