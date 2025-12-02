import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

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
        return (h(Host, { key: 'ab0b9f374fc8aa5830970d92f053b1f8d0fe2574', class: "progress-main" }, h("span", { key: '309af4e7f1a24a4aa3bf8e6c65c5f8238fdd66db', class: "progress-totle" }, this.percentage), h("div", { key: 'dd3dce0af66dc8a4654e94c3992675fabc5fe193', class: "progress-line" }, h("div", { key: 'efef2b9929d7cf67abec50f684ef21af6aeaec72', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map