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
        return (index.h(index.Host, { key: '5a90f3025c0f058b6dd4281c9ea138a838ed9a2e', class: "progress-main" }, index.h("span", { key: 'c17cfa344968f4441315cd49dbfabaf36e7ce5d1', class: "progress-totle" }, this.percentage), index.h("div", { key: '7a8ea18c82c4e9651b38485da9f381f1b9f2b1ed', class: "progress-line" }, index.h("div", { key: '7b990fc29610083324d519d8837cfd4852d20034', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
