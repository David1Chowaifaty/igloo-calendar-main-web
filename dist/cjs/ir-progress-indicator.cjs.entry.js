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
        return (index.h(index.Host, { key: 'ed1f925ec89dc821ff3454363455eac4535cd03d', class: "progress-main" }, index.h("span", { key: '3537839c04fb7726a8206d3dff67c4f0128f5d22', class: "progress-totle" }, this.percentage), index.h("div", { key: 'ffb945556024bb8c03dca16f8540fde52c3a34bb', class: "progress-line" }, index.h("div", { key: 'f9dbbad43d316c38fe551bde0c545fc7f617f185', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
