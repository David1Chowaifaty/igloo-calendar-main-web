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
        return (index.h(index.Host, { key: '6b5a74d2d768beb26056934cfc2bd770c30aa053', class: "progress-main" }, index.h("span", { key: '47fb6efe8ede1137ab4725feed8360982d11a907', class: "progress-totle" }, this.percentage), index.h("div", { key: '4018305ea86103b4c581707e6a714b1949c00d19', class: "progress-line" }, index.h("div", { key: '7d8e8a005cdf025f2b76cbe6a21db0ad22d0a110', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
