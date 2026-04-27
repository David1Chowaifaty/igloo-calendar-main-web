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
        return (index.h(index.Host, { key: '4586bd2b7571eb1653d84e0debee467cb42ed610', class: "progress-main" }, index.h("span", { key: 'a6c3568d35de7e530976287a024348234415784d', class: "progress-totle" }, this.percentage), index.h("div", { key: 'bd255beafa5db85b152c3cd17aef3216cce85dfa', class: "progress-line" }, index.h("div", { key: '65a562a004e5a1dee635d6e31c5d545c55c3a092', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map