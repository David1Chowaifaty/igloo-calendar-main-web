'use strict';

var index = require('./index-CQkpA5n3.js');

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
        return (index.h(index.Host, { key: '2bb38da3d4c5147e961412d0dac35e4fda4e067a', class: "progress-main" }, index.h("span", { key: 'b7f035e6ac5d20f4656c51dc22d135acbc47bb33', class: "progress-totle" }, this.percentage), index.h("div", { key: '603006be82d19d65c032fc2475e7920ec788cc89', class: "progress-line" }, index.h("div", { key: 'c112ad5c8881ec0f59b53fb16c01fd687119f840', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
