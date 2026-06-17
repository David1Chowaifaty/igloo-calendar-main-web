'use strict';

var index = require('./index-OzksjAXP.js');

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
        return (index.h(index.Host, { key: 'd7fdb32f64e83bd9dfdd5cc3fc5d4f1dd3d69eff', class: "progress-main" }, index.h("span", { key: '58b52519f7f40a7e076c39c986e6b39c5ab702ae', class: "progress-totle" }, this.percentage), index.h("div", { key: 'f333453ef1040fa03840c1368b8b56a0f638601f', class: "progress-line" }, index.h("div", { key: '0d56de8ab23078ae77c93f7fc18c2a45d6385c6f', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
