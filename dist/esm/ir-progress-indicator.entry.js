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
        return (h(Host, { key: 'a0df3fff66032d029fb38ec6f9be2ed75ee4a54d', class: "progress-main" }, h("span", { key: '7def97a1abcb11956052c6b43432ebbc8922b5bf', class: "progress-totle" }, this.percentage), h("div", { key: '1f1d9a15e26db8eb88e2449af9c94d47376d6f9d', class: "progress-line" }, h("div", { key: '6ed958db669f4e8a8b739b2dab882bf9c61abc5c', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map