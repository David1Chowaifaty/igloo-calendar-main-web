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
        return (h(Host, { key: 'af30c5a034fd61a5748e9cce585da63ec957168a', class: "progress-main" }, h("span", { key: '7fa2a67f5c771405d11e32792cb0a181ae83a922', class: "progress-totle" }, this.percentage), h("div", { key: 'b06fe1b2845263f369d2b1afaf10bff186d26da6', class: "progress-line" }, h("div", { key: 'ca1b0a9e6fcc2b139afd562cf30197610af6ef9d', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map