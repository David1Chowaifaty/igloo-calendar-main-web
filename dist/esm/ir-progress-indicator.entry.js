import { r as registerInstance, h, H as Host } from './index-DKZeCK8T.js';

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
        return (h(Host, { key: 'ef3f701a6a2a9f37ddc567053258c2b4727c19bc', class: "progress-main" }, h("span", { key: '7a4d9b703012afe3d4f515c7784c974cd0a8489e', class: "progress-totle" }, this.percentage), h("div", { key: '256c2c2d2bfecc07f4fe4d3b20b2d3a6d832e997', class: "progress-line" }, h("div", { key: '840b444a52eb46d76fcf4798d33fd9c06d439170', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
