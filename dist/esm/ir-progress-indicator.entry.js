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
        return (h(Host, { key: '0af93bb578cf2d28bbf53eb79a6147e8098c6c50', class: "progress-main" }, h("span", { key: '763ce051c82b0b78fb8efc17a3267e3b779226f2', class: "progress-totle" }, this.percentage), h("div", { key: 'c6249ae303673c8a6cfc6c0998f4c336c5e7a8aa', class: "progress-line" }, h("div", { key: '20a0a155119ed75c7aab79bbbce1ef80a5ca6688', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map