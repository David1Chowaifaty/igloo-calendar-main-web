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
        return (index.h(index.Host, { key: '19619c9209e23ac5102a9db4fa4f221e2b84212e', class: "progress-main" }, index.h("span", { key: 'a083cf83121ed8c35ae1eb26d0939d23980f3d03', class: "progress-totle" }, this.percentage), index.h("div", { key: 'a3df5d61a35064f34519829bf38183467b9e06ec', class: "progress-line" }, index.h("div", { key: 'bfc9f411a577005465f36a2a994b65c335b13eb8', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
