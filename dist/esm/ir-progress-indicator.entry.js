import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

const IrProgressIndicator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The color variant of the progress bar.
         * Options:
         * - 'primary' (default)
         * - 'secondary'
         */
        this.color = 'primary';
    }
    render() {
        return (h(Host, { key: 'eecca523144b43f626e7336454567b12fb11feac', class: "progress-main" }, h("span", { key: '87ee44ff954709ee61f9bc94b4feb37e92f7821c', class: "progress-totle" }, this.percentage), h("div", { key: 'bdc1c768f008cd8f70dcbce72d4c1940278c5439', class: "progress-line" }, h("div", { key: 'cba1699ca8455cc616b690f14ca3ad5113231c57', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map