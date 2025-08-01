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
        return (index.h(index.Host, { key: '1b8e518af15f3d5aef28e5af92d7a7044fd3cf5b', class: "progress-main" }, index.h("span", { key: '4613681fd88fdacc93bd0f184fa4f2cfccf31e8c', class: "progress-totle" }, this.percentage), index.h("div", { key: '24a0fb067c2f69ff87836524ba8f24a84a4ca2ae', class: "progress-line" }, index.h("div", { key: '150c709287f5094d56e83e87ce6a3af18355d38b', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map