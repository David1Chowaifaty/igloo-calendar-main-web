'use strict';

var index = require('./index-CJ0kc5p1.js');

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
        return (index.h(index.Host, { key: 'bb3248f583bd7851d287400dc08584b4d549c340', class: "progress-main" }, index.h("span", { key: '6061be9213f8b7bcdb72d4f99f3c16d864665799', class: "progress-totle" }, this.percentage), index.h("div", { key: '421e9a96df2637113b65daa2a22818f81e12e89c', class: "progress-line" }, index.h("div", { key: '28b06b0fc92c28ab5a8a4ae2d674e265b67eb5e3', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
