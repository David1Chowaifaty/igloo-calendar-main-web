'use strict';

var index = require('./index-DYQrLNin.js');

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
        return (index.h(index.Host, { key: '330b8471e1cdf84c166aa0ebec79ef810b2805da', class: "progress-main" }, index.h("span", { key: 'bffabaa469f0e220637c7efa810585ec6e7784d0', class: "progress-totle" }, this.percentage), index.h("div", { key: 'ea8b46a85513295cf66b49b8a620d266131f01a4', class: "progress-line" }, index.h("div", { key: '81a5703c5152445300b98e85260f72f4ea301c74', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
