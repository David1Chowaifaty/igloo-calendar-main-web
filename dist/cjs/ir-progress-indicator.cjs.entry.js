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
        return (index.h(index.Host, { key: '5271bffc12ad067bb9f82d528bf82b20c2dabacd', class: "progress-main" }, index.h("span", { key: 'fca3e2a49e95d09fbdf92a5e7c05672ca1c4c292', class: "progress-totle" }, this.percentage), index.h("div", { key: '11b01ac2f214455cd6ac52f268c340a7a0e61894', class: "progress-line" }, index.h("div", { key: '9aa42412f2385967fe9945eee73833ee4b3f59f9', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map