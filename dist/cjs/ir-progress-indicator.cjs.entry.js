'use strict';

var index = require('./index-DYQrLNin.js');

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
        return (index.h(index.Host, { key: '1e29b9ec2995ab753b053c76fda0865b2c17bb88', class: "progress-main" }, index.h("span", { key: 'a4967b220a1f1a876c23053dc9f54996c056f6fe', class: "progress-totle" }, this.percentage), index.h("div", { key: 'dcf5ffdd08a3cf69e388805e5cb440163a93bcd3', class: "progress-line" }, index.h("div", { key: 'd9ad5634ffc24b6ee5511e57271ec2159d9bd0d9', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
