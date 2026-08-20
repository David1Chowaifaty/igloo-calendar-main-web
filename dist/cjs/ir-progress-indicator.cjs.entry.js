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
        return (index.h(index.Host, { key: 'c5e124f17acec2b828d3ec286ef43de016b8501f', class: "progress-main" }, index.h("span", { key: '50e03a9e3d003b92d5407fabbf2cd2ae89b4fa74', class: "progress-totle" }, this.percentage), index.h("div", { key: 'd994ce7570bf9909a20563596657bbff66945b48', class: "progress-line" }, index.h("div", { key: 'df0953e8e22d967d938836305805cfc995b72d04', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
