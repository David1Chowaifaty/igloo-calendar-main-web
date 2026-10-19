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
        return (index.h(index.Host, { key: '341b0c472ded774da104815269e9eb31257447bd', class: "progress-main" }, index.h("span", { key: 'edc3f26491080f75221f2d3acde6684d55b34484', class: "progress-totle" }, this.percentage), index.h("div", { key: '0b807de9e09c867e95ef6a2903de2a12456848c8', class: "progress-line" }, index.h("div", { key: '6f3b96cc9258942c9ddba2d40b54d7862af5b7a4', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
