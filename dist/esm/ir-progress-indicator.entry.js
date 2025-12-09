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
        return (h(Host, { key: '87c81ce42d333b18ff83f2e0ef9ebae2aa53a815', class: "progress-main" }, h("span", { key: 'fb04319378acf433c1ca3d1068ef2a701f4fd071', class: "progress-totle" }, this.percentage), h("div", { key: '8aedcea75ab8bb115a4c38f83f3d60f2e4fab45b', class: "progress-line" }, h("div", { key: '1d603521b0b2705bfb8b8567e82010b145a983e8', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map