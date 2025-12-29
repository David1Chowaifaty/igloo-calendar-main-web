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
        return (h(Host, { key: 'e6583ff3b115c91f04cc0ddaa87d7845e384dc72', class: "progress-main" }, h("span", { key: '9b1ddcb2b53374d1023ae8c92578a15005d6be9f', class: "progress-totle" }, this.percentage), h("div", { key: 'eabb3826ad8185b3285fc9d0a7ddb0329bf6a30b', class: "progress-line" }, h("div", { key: 'bff6b18b40478d22b7497d89b4784d2535fc8436', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map