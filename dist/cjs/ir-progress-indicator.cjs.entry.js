'use strict';

var index = require('./index-jMqrfjaT.js');

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
        return (index.h(index.Host, { key: '027f712c7e58ec0e8a0328b8178b189018d5f181', class: "progress-main" }, index.h("span", { key: 'd43f5b369a2944d1d11f2e3341adc8fbf483de16', class: "progress-totle" }, this.percentage), index.h("div", { key: '4717a3fff54b0a89f79357bae71d07d6bc1e82e1', class: "progress-line" }, index.h("div", { key: '19c70fc8f0cd97aef5ad91c1cc7c28e197e6d54b', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
