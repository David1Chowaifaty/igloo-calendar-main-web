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
        return (index.h(index.Host, { key: '3b387edef11a8d1850d2c997ee65dff00322e7cf', class: "progress-main" }, index.h("span", { key: 'c37e6d639888c10243599134469474791f44ddf7', class: "progress-totle" }, this.percentage), index.h("div", { key: '527e618c477aa991d15d9fe34f6dc10df02b7762', class: "progress-line" }, index.h("div", { key: 'b291f5c269aed9eb33a95a14ea927bba34f630b5', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
