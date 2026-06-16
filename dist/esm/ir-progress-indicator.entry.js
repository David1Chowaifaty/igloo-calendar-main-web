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
        return (h(Host, { key: '28e3098ec436af800666fdf63ccfbc6d2a8557be', class: "progress-main" }, h("span", { key: '1029f50a3f274c873aa272f1203936e17f5ab76c', class: "progress-totle" }, this.percentage), h("div", { key: 'a6dfb6c07d2acc54a4b9fcf36c01e4a035ad8819', class: "progress-line" }, h("div", { key: '49c12c7fade6b121cab5369e5f6c952a13dc151f', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map