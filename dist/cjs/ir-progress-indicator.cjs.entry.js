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
        return (index.h(index.Host, { key: '4975bb4849096d84f192da092d989ac20c1fb215', class: "progress-main" }, index.h("span", { key: 'eeef80822f1f5d1f152ff84450603f2b53d27199', class: "progress-totle" }, this.percentage), index.h("div", { key: 'd3b92627de8e67efb8d0b186d33e393770835073', class: "progress-line" }, index.h("div", { key: '8198b16a5f70cd824eef675007c137a4338a9331', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
