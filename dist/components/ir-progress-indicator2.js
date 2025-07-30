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
        return (h(Host, { key: '05225daa6470948a221bcf74ad9dbcf5260299ec', class: "progress-main" }, h("span", { key: '2e0f09126b074420242ad8e0ae3459a520c40397', class: "progress-totle" }, this.percentage), h("div", { key: '581caf8e6c0151a998a0952bf85e072c0ff5902c', class: "progress-line" }, h("div", { key: '649f279a3f9b84d063c1115daa814e9f0533070e', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
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