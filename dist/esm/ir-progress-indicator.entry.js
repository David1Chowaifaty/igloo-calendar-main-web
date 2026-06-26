import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';

const irProgressIndicatorCss = () => `.sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}`;

const IrProgressIndicator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: 'acc2ec2bda529917d77913a53c0ec09b277d1928', class: "progress-main" }, h("span", { key: '159c9d393dd21e3733e8f7764b1b7f17f043c877', class: "progress-totle" }, this.percentage), h("div", { key: '58899d5c1a75d15a01e3cc5dbcc150d5f615426c', class: "progress-line" }, h("div", { key: 'bf3119e68ff36bc11c950affc0ac68e22dc0b29a', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
