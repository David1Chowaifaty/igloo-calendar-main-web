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
        return (index.h(index.Host, { key: '9bb196270cf0813c03ef51787b4d357258e8ad07', class: "progress-main" }, index.h("span", { key: '7bfcec368321512ae70d55914717e783ffcc67da', class: "progress-totle" }, this.percentage), index.h("div", { key: 'dde76881853b0448601de35fc596fd3420b3809f', class: "progress-line" }, index.h("div", { key: '6740ebf748527f7d73d7f11140acea3fe74ab30c', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
