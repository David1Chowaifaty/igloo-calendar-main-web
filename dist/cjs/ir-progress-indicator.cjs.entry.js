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
        return (index.h(index.Host, { key: '9482b062b17a3ec5df462bcdeedc1ad5f9e969af', class: "progress-main" }, index.h("span", { key: '4da09fe7fd9424cc0a226a65b84b67d2883c0d77', class: "progress-totle" }, this.percentage), index.h("div", { key: '7ae0ed86c2dd74c06f0fd5b3891eae918f005028', class: "progress-line" }, index.h("div", { key: '5bb0250f37fe4869cf3deb86c7e6d7eae2cae37d', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map