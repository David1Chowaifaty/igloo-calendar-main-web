import { r as registerInstance, h, H as Host } from './index-60982d00.js';

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
        return (h(Host, { key: '65aec34758b30f8df259dff7cefb72a1c819798f', class: "progress-main" }, h("span", { key: '7f16b77c36a7dc613291a30b2e19e212542a6ddc', class: "progress-totle" }, this.percentage), h("div", { key: 'e6fbef26be95b7c766a3d6b8f1de900ceaebf75b', class: "progress-line" }, h("div", { key: '251b3e1ece475a39a3ccecee7d11748a42116ebf', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map