'use strict';

var index = require('./index-DN8J4ULi.js');

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
        return (index.h(index.Host, { key: '055fbdc77f974d1cae5ae346ee2738e8ff65623d', class: "progress-main" }, index.h("span", { key: 'bda7091a8992868c596ad51d0b89b1694f9036e7', class: "progress-totle" }, this.percentage), index.h("div", { key: 'f164397754cbc49cca77e4c9de6cd5d395e6d972', class: "progress-line" }, index.h("div", { key: '19507d4b1c043417b31fe3df5a4a7c1c301bd22b', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
