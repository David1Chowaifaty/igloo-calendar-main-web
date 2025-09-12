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
        return (index.h(index.Host, { key: '9ed3418e7637d5737bf877b13f7970c24a105824', class: "progress-main" }, index.h("span", { key: 'aeada65e9ea85f219d2b63a0ca81fc771a1abb9e', class: "progress-totle" }, this.percentage), index.h("div", { key: 'c31211afa7615bb4dd1eda57f6f19d3ffea5fd0f', class: "progress-line" }, index.h("div", { key: '79aff8719ef537abfaea2f280d7e5d13d006ff5c', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map