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
        return (h(Host, { key: '7e136010b0e1bf2eaf26daa120d800a9a4810641', class: "progress-main" }, h("span", { key: '1873be727786f973e028f7966c0724039cc7be41', class: "progress-totle" }, this.percentage), h("div", { key: '69c2291677974ec49419b271b3d53f2a58fc86ed', class: "progress-line" }, h("div", { key: 'ef7057545e777f3527756eb1746195c6668ed225', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
