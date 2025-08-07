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
        return (h(Host, { key: '7360501295f8c2beea161cd93a39615c19efaf33', class: "progress-main" }, h("span", { key: 'f6e1024127f8d03d01cdafeadd238a5f2afc6096', class: "progress-totle" }, this.percentage), h("div", { key: 'f4e526472ba20b57219b138768d53a56579e4a3e', class: "progress-line" }, h("div", { key: 'd39f1b57ffe8e2229a0f61ac1ca84dc195ab3a70', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map