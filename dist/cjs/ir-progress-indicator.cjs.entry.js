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
        return (index.h(index.Host, { key: '007fa7ad667b3521da4a712214338894f51c1b6a', class: "progress-main" }, index.h("span", { key: '56af50f125967e5a70aa8b8fc5102a8539ec60ea', class: "progress-totle" }, this.percentage), index.h("div", { key: 'b6c39aa81e9cc7efb0ed10b6002e9361550743a3', class: "progress-line" }, index.h("div", { key: 'c406e4eb7bbca515b65e7a2a0678f0a8f4a7d204', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map