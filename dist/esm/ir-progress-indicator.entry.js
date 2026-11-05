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
        return (h(Host, { key: 'a847e9e6c01246d5bc25198600121bef41cedff6', class: "progress-main" }, h("span", { key: '89c50b2454d4ad430cf2d26b2b704885757eaa0c', class: "progress-totle" }, this.percentage), h("div", { key: '0eae4fe14cabdcc38d0cd1784ddda448d434538a', class: "progress-line" }, h("div", { key: 'e2c23c2fcae381eb53d8b3dede90749083599a24', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
