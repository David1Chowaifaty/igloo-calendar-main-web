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
        return (index.h(index.Host, { key: 'fa5096703a28a445f324508fd2ade739e24f7a02', class: "progress-main" }, index.h("span", { key: '42ead195aba7d9e69ef0a0ed84db10e0e3e6797b', class: "progress-totle" }, this.percentage), index.h("div", { key: 'ca47adbfd1e950d7b5a134058d8706d55d15caf2', class: "progress-line" }, index.h("div", { key: 'a12a8d270b1cd8f95f71729d4e11f94b7e5cc295', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map