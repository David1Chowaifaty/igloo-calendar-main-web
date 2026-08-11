'use strict';

var index = require('./index-CJa_TWt0.js');

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
        return (index.h(index.Host, { key: 'fe1feb5b511706775f882afa34c7eed183b85e9e', class: "progress-main" }, index.h("span", { key: 'cb2c6c175c2fb869750bdef393e91c2644072552', class: "progress-totle" }, this.percentage), index.h("div", { key: '2ddad7aa4eefc7e8d5f47ffb0afbba35acbe270f', class: "progress-line" }, index.h("div", { key: '25492ba8a10f83e8156a70de44bb3747277a9610', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
