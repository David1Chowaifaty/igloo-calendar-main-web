'use strict';

var index = require('./index-DgHWBwDV.js');

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
        return (index.h(index.Host, { key: '8c42f92fab9637ca6c6a0dfecf5d4ab53e6b26ca', class: "progress-main" }, index.h("span", { key: 'b04f5cc939a813749ac9f7329136f70ced8e8727', class: "progress-totle" }, this.percentage), index.h("div", { key: '15d80b762de79b40783eb7fff8839b90ddde2348', class: "progress-line" }, index.h("div", { key: '84d10506f3fe3f365ac4cf4789ffcb3c06b09866', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
