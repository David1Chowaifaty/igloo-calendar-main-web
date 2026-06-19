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
        return (index.h(index.Host, { key: '6c6413d31d631362b555ab3c2de88893d81f0e85', class: "progress-main" }, index.h("span", { key: '7d8cee63bc366e1a9a023279eefdc853e7e31ed0', class: "progress-totle" }, this.percentage), index.h("div", { key: '4f8cf0b009972e372408f40bb59d91623edaf9c1', class: "progress-line" }, index.h("div", { key: 'a8fffd5235a4215feb47f66861ab0ec11f626b61', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
