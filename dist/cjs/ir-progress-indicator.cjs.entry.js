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
        return (index.h(index.Host, { key: 'a6bf477ae51db5c06d927d427af3a5f25ccf7ef3', class: "progress-main" }, index.h("span", { key: '54edfdee56f92df1ccc1395e0749610ef4213522', class: "progress-totle" }, this.percentage), index.h("div", { key: '172b2ab2377d7918e1a16f8be19903442ad069fb', class: "progress-line" }, index.h("div", { key: '65127f545699e430193f731a05e2ed09043b49d0', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
