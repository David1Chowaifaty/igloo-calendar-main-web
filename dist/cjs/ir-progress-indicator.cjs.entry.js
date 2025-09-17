'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

const IrProgressIndicator = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        /**
         * The color variant of the progress bar.
         * Options:
         * - 'primary' (default)
         * - 'secondary'
         */
        this.color = 'primary';
    }
    render() {
        return (index.h(index.Host, { key: 'c5a06249c81769e562b3a91ce8ccccd8397bcd10', class: "progress-main" }, index.h("span", { key: '9c2c7410622ebc3be8ed826047c8ae85f4681b2b', class: "progress-totle" }, this.percentage), index.h("div", { key: '0a3f7ab6f0f75d9e05d4ecf5e0bd30eb9eff61c5', class: "progress-line" }, index.h("div", { key: 'e446324ab2eb874471dd3c537fca17fc6ab561cb', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

exports.ir_progress_indicator = IrProgressIndicator;

//# sourceMappingURL=ir-progress-indicator.cjs.entry.js.map