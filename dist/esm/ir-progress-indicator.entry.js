import { r as registerInstance, h, H as Host } from './index-D8DCR0yx.js';

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
        return (h(Host, { key: '09ab750f1d6b66a543503ad2edab45a931933028', class: "progress-main" }, h("span", { key: '1382bf7e86b1bee6094e94c8022447663936ffdb', class: "progress-totle" }, this.percentage), h("div", { key: '209335bd37b562582446d0016da2c8700b486705', class: "progress-line" }, h("div", { key: '1d64fe3860f08cd64175b22d397c414bc7192348', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
