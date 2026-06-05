import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

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
        return (h(Host, { key: '438d831ffd40977d341b2468fce7f2011570bc53', class: "progress-main" }, h("span", { key: '26ce47793697a45b2252766af0f96803c352d139', class: "progress-totle" }, this.percentage), h("div", { key: 'b9fa5fa1e94567b6fb6d8c7943269ee75d58256d', class: "progress-line" }, h("div", { key: 'a25be2870cc9def39c6635328e5bf47e01220e0b', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map