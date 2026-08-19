'use strict';

var index = require('./index-DgHWBwDV.js');

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
        return (index.h(index.Host, { key: '4daa38c738383b9457708b408fada09b20ba1f9d', class: "progress-main" }, index.h("span", { key: 'e879987e7738f938810c848d17d303df0118b886', class: "progress-totle" }, this.percentage), index.h("div", { key: 'e94617aabf5dc16ceb6b1deb732aa05c302f3f37', class: "progress-line" }, index.h("div", { key: 'ab81dc275e9da8802a4398a4d4644a126defd489', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

exports.ir_progress_indicator = IrProgressIndicator;
