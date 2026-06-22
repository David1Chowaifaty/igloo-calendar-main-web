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
        return (h(Host, { key: '3f8ed89990dec3558e508260daf74800d0d24889', class: "progress-main" }, h("span", { key: '6fabd97da3080eb9d079279287cd15c3b79e1a2c', class: "progress-totle" }, this.percentage), h("div", { key: 'd1850b3eb1f08346cbcf25c2be6196b7fbed490a', class: "progress-line" }, h("div", { key: '8d7bdec6ffd4ec53a26ff55634adc7cad745e2d1', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
