'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

const IrProgressIndicator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '723d93d07dfbb58e61957d430391084e36c654ad', class: "progress-main" }, index.h("span", { key: '5c062100e52a2b4164221779b7cbf2e1e9d6c66b', class: "progress-totle" }, this.percentage), index.h("div", { key: 'b116c3f51b62dc3527e6baa17640e52b1cc8ac50', class: "progress-line" }, index.h("div", { key: '976204f89b2ff1096c9c48b8904c181d71f9f2cb', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map