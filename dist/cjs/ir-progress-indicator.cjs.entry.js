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
        return (index.h(index.Host, { key: '3a7517cf3fc31bc8a859cec08fe871573b30e3bd', class: "progress-main" }, index.h("span", { key: '06fbef6ab4b84f88c993f65b430716927de69a73', class: "progress-totle" }, this.percentage), index.h("div", { key: 'ecfafdae9d9924006fbdaa9581ba41749b0340ec', class: "progress-line" }, index.h("div", { key: '95bb95a20c057fe8ae1b6d0e4319c70cf6b31e42', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
