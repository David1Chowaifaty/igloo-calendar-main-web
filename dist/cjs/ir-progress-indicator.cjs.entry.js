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
        return (index.h(index.Host, { key: '1f420afc5bd871858607da52d894877e60532ed6', class: "progress-main" }, index.h("span", { key: 'a25b793d9eed53ad4aacb44f72627337c7885491', class: "progress-totle" }, this.percentage), index.h("div", { key: '94e08b426c984e8c01c6d9907057f2bf126fef8f', class: "progress-line" }, index.h("div", { key: '1882bbc5c1c74f7d980273747eaeb70ba298c543', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map