'use strict';

var index = require('./index-CQkpA5n3.js');

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
        return (index.h(index.Host, { key: 'db095e1e670ca6ecbebfe5f9daf6702d98e22d0f', class: "progress-main" }, index.h("span", { key: '4fc23e4cb341f680c034336e6f06d38a19f757bc', class: "progress-totle" }, this.percentage), index.h("div", { key: 'c2cb0e9af9056fb4ef5a6350561596e11719ebf7', class: "progress-line" }, index.h("div", { key: '97467874dd70157faa72c637007d636e63f8acc7', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
