import { r as registerInstance, h, H as Host } from './index-0a4a209a.js';

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
        return (h(Host, { key: '7affc7dc0d9cfcd8e659641d380b3ca071a4a211', class: "progress-main" }, h("span", { key: '882090989a3417f059f495fc755a53943998db23', class: "progress-totle" }, this.percentage), h("div", { key: 'bb395de79ed01080ff5754b5016884a7be1212c2', class: "progress-line" }, h("div", { key: '229195a143bbf9b71349af7a31970048d4650078', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map