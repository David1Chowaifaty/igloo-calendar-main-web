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
        return (h(Host, { key: '24b5bc5fcc23634e3138cbec1b4209e76119d909', class: "progress-main" }, h("span", { key: '68f6d94fe3bd6339c9cb2409a73e7313c0a050c4', class: "progress-totle" }, this.percentage), h("div", { key: '43e8b419b8878a3a92f0d6fedb31b5bdd1e97fdc', class: "progress-line" }, h("div", { key: 'f4486f0265484bb1c5b5275fa68988decf2db7b9', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map