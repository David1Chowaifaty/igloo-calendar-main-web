import { r as registerInstance, h, H as Host } from './index-0a4a209a.js';

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

const IrProgressIndicator = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * The color variant of the progress bar.
         * Options:
         * - 'primary' (default)
         * - 'secondary'
         */
        this.color = 'primary';
    }
    render() {
        return (h(Host, { key: 'd9c4dd83236cba25772702ef8de3fb4fdf168dd1', class: "progress-main" }, h("span", { key: 'b9440d37b1aad56e3370ee814c7915ce03c69d39', class: "progress-totle" }, this.percentage), h("div", { key: 'db51a8c97579778a46f6fe20e4cb93dcb0388743', class: "progress-line" }, h("div", { key: '1a856381429bcdc5a3265cd7588762e5d18fd0a0', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map