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
        return (h(Host, { key: '9482b062b17a3ec5df462bcdeedc1ad5f9e969af', class: "progress-main" }, h("span", { key: '4da09fe7fd9424cc0a226a65b84b67d2883c0d77', class: "progress-totle" }, this.percentage), h("div", { key: '7ae0ed86c2dd74c06f0fd5b3891eae918f005028', class: "progress-line" }, h("div", { key: '5bb0250f37fe4869cf3deb86c7e6d7eae2cae37d', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map