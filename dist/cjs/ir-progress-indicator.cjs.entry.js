'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4fe8bc8a.js');

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
        return (index.h(index.Host, { key: '2820568ee412d9527ee95e648ce624e61f60ba70', class: "progress-main" }, index.h("span", { key: 'e3facff3fdd9b99736d1e734fa0c9dbd672188df', class: "progress-totle" }, this.percentage), index.h("div", { key: '0a8e3cdb4e299f195ced82cabd43b8e2b1ac8b2c', class: "progress-line" }, index.h("div", { key: '1ba8c561643078e68013ff77cadd6885d1ed42bc', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map