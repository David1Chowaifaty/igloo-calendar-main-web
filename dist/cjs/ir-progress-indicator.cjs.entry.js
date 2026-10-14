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
        return (index.h(index.Host, { key: '5b94df6116fda9c66eac008a039a3503b93f1bbb', class: "progress-main" }, index.h("span", { key: '8f7bd6b3ff7c815c434feec4240295afc6cd31fd', class: "progress-totle" }, this.percentage), index.h("div", { key: '9cebec0890a551bdc24f26e860a785394bbf366b', class: "progress-line" }, index.h("div", { key: 'ba5bca3a0524c92aa0847ed68f470974d125ec94', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
