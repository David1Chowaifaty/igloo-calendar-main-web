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
        return (index.h(index.Host, { key: '426ef798faccb74256dd93075895bd1ff4e38994', class: "progress-main" }, index.h("span", { key: '23be34ca514392d989a49467d6b09b2e162a3d61', class: "progress-totle" }, this.percentage), index.h("div", { key: '43d311a51e103364bc5f58f64c203ae2aa2645a8', class: "progress-line" }, index.h("div", { key: 'c1a94bc32fd346748220d1d20f99350b42ffe1a5', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
