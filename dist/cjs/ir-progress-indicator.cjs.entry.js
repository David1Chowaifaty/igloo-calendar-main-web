'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

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
        return (index.h(index.Host, { key: '73b73933f4be68869db89b9ac614c60feef8745e', class: "progress-main" }, index.h("span", { key: '7dfcc3102157db4dd3343acc9d793bcc14d28e77', class: "progress-totle" }, this.percentage), index.h("div", { key: 'b57f05c741f56158822450eebfb39c60f27bab43', class: "progress-line" }, index.h("div", { key: '9218917fc2d6880cf7b666beb34c2570906b6cec', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map