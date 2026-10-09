import { r as registerInstance, h, H as Host } from './index-CeHdrJeH.js';

const irProgressIndicatorCss = () => `.sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}`;

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
        return (h(Host, { key: 'd677c58f2f4bcfedeb63ae58c29e5545f0463bd1', class: "progress-main" }, h("span", { key: '6bb168e19202a6cd311244d61d23b23f896253b3', class: "progress-totle" }, this.percentage), h("div", { key: '8157844ddce0ee475d9df280643697d52b923e6b', class: "progress-line" }, h("div", { key: '4edbb7bcbd9e76e062a447c6509211171556c141', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
