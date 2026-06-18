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
        return (index.h(index.Host, { key: 'd1599ad5ce01917ce8eab1050e1d4efae54ab469', class: "progress-main" }, index.h("span", { key: '10f7e41f691d07149ee6bb426a9bc784c5011959', class: "progress-totle" }, this.percentage), index.h("div", { key: 'c8b9b2e9ce7cb6a345055cdbb8e82e530f09eb9b', class: "progress-line" }, index.h("div", { key: '186edf761a015575c2dd96e6977b5dc8438b3e15', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
