'use strict';

var index = require('./index-D8WscJxs.js');

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
        return (index.h(index.Host, { key: 'c8846d58971a83f091cbc777d1ee6849e3a24c54', class: "progress-main" }, index.h("span", { key: '21061d12246db50de66da5c53d6fb9c5cee4343d', class: "progress-totle" }, this.percentage), index.h("div", { key: 'f1c6edbe3fe3b80c84fe28ab6b05b5ce8ee02a5a', class: "progress-line" }, index.h("div", { key: '5b3db8b99dcf5b90fce10f21cc5175482e772b51', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
