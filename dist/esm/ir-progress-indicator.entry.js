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
        return (h(Host, { key: 'bf36fb7cdb41322c2757dd16f45b041035d71352', class: "progress-main" }, h("span", { key: '968198373fbb26438f1326f539940ad1ea734729', class: "progress-totle" }, this.percentage), h("div", { key: 'd8869b1f18f23d692d6e67125171659dd1b5a91a', class: "progress-line" }, h("div", { key: '81de985acc5f7b69585ef42eba6c1ee2a562cdf0', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map