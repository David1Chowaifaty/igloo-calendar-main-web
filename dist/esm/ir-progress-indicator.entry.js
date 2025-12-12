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
        return (h(Host, { key: '028d50b4ea3803bb5360e4fcbd1b49c2d80c7221', class: "progress-main" }, h("span", { key: 'b805ba2a73b9b9ed9760fe2d47ae7881132df2b3', class: "progress-totle" }, this.percentage), h("div", { key: '5efecd1e6332789edd54e5b52118197e5673b577', class: "progress-line" }, h("div", { key: 'f7b6e14a019e9ebb9929f496849812ac046245b6', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map