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
        return (index.h(index.Host, { key: '5edce666878675d525d0f1ea32f3b4665e174920', class: "progress-main" }, index.h("span", { key: '3b781ecb1c0c22e376436728bbf4e69d87a97793', class: "progress-totle" }, this.percentage), index.h("div", { key: '85880ca8db00ab413ea00672c9b79d34f2762259', class: "progress-line" }, index.h("div", { key: 'e355acf71adac6ca2915d12bfbdc2240e534adc4', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map