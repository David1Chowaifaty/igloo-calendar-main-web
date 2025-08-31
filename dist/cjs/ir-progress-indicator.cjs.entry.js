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
        return (index.h(index.Host, { key: '59ff84ff9bfe60ca4eb6fb4487f3cb9cbfeea613', class: "progress-main" }, index.h("span", { key: '1439530d3ed5cd5fb07bd08e8c008b6df2b62eae', class: "progress-totle" }, this.percentage), index.h("div", { key: '9f6cef1ed8991d1fa0f3bae35f418e9f98f0f9fb', class: "progress-line" }, index.h("div", { key: 'bf9d92cca90e3eacfe674034a12d1571d38348ae', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map