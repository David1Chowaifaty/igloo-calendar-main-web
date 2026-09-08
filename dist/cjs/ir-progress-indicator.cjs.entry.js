'use strict';

var index = require('./index-P5Mginch.js');

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
        return (index.h(index.Host, { key: 'e6d76f63145383a4cf91fcee4d10f097a4bfc8ed', class: "progress-main" }, index.h("span", { key: '90c12147fa6a6e046b9a657d34f5d4924840b74a', class: "progress-totle" }, this.percentage), index.h("div", { key: '4be9ca6126aaba34cff574932fffb791bc417c7c', class: "progress-line" }, index.h("div", { key: '72055a02bce5c4efd28a221901de752ed82758cf', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
