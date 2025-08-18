'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

const IrProgressIndicator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The color variant of the progress bar.
         * Options:
         * - 'primary' (default)
         * - 'secondary'
         */
        this.color = 'primary';
    }
    render() {
        return (index.h(index.Host, { key: '0af93bb578cf2d28bbf53eb79a6147e8098c6c50', class: "progress-main" }, index.h("span", { key: '763ce051c82b0b78fb8efc17a3267e3b779226f2', class: "progress-totle" }, this.percentage), index.h("div", { key: 'c6249ae303673c8a6cfc6c0998f4c336c5e7a8aa', class: "progress-line" }, index.h("div", { key: '20a0a155119ed75c7aab79bbbce1ef80a5ca6688', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map