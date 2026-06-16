'use strict';

var index = require('./index-Cn9TxUnA.js');

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
        return (index.h(index.Host, { key: 'd95831142fddf65bc47deef7fd1d9ee365d94668', class: "progress-main" }, index.h("span", { key: 'dcd1ed4de2e707027cf020af2ea61a2654aee2ef', class: "progress-totle" }, this.percentage), index.h("div", { key: '19222f9c54e1bf5c922375f5e3e22f39f4b87ecc', class: "progress-line" }, index.h("div", { key: '8db1a7295d7098933483084878be09f97821f3ad', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
