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
        return (h(Host, { key: '7545d258956860ad7853380f968e6ebe041ff520', class: "progress-main" }, h("span", { key: 'ca3f8f064f8100747641aa066ec980000166687e', class: "progress-totle" }, this.percentage), h("div", { key: 'da15a10e2facd6547fe97f0f3213d132ee22a2c8', class: "progress-line" }, h("div", { key: '2a9ac5e14724867cda908b3985abe2066167cf2d', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map