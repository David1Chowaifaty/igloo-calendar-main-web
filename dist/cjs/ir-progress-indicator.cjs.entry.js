'use strict';

var index = require('./index-IDeZZwEK.js');

const irProgressIndicatorCss = () => `.sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}`;

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
        return (index.h(index.Host, { key: 'fc8901804add69db3cf4bd2033c488a0820a216c', class: "progress-main" }, index.h("span", { key: 'cf01e805ed0ae789b0e5823380cf2d7571d29346', class: "progress-totle" }, this.percentage), index.h("div", { key: 'cd8f95ebe8dd409824b9f4571bb32e07e49f6dfd', class: "progress-line" }, index.h("div", { key: '9051379f3f42c2efd991e014d1b9e1ed67eba016', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
