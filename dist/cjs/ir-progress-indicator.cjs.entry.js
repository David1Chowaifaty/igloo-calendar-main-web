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
        return (index.h(index.Host, { key: 'b4ac956eeaed1a96fd5afb239084e95fc44c77b9', class: "progress-main" }, index.h("span", { key: 'c458c4c10c6a4539253942d48422d5fda95be161', class: "progress-totle" }, this.percentage), index.h("div", { key: 'f6826050b9b63b2953bdd64702e9c312e399ef2f', class: "progress-line" }, index.h("div", { key: '3080ee5d1d065c250bf2abce3bc9ee786ffa920d', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
