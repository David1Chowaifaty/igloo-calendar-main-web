'use strict';

var index = require('./index-P5Mginch.js');

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
        return (index.h(index.Host, { key: 'de6ef3e4be5ca41b08b864b9bc1e8723597e3a12', class: "progress-main" }, index.h("span", { key: 'df07e3917a70a5f203dff42e7a15544c2ee4a119', class: "progress-totle" }, this.percentage), index.h("div", { key: 'c8a703b35445db49e9f5f9962dbd42f4794a46df', class: "progress-line" }, index.h("div", { key: 'db52c29585e592a9ec1fd65af1f4246bbda62cf8', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
