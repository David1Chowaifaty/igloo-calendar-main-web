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
        return (h(Host, { key: '471b10dafb2429a23fb495a42e80b08a18fb3f24', class: "progress-main" }, h("span", { key: 'e527daa4bd38d4741eeda82b1a6ae3a6bbc03c05', class: "progress-totle" }, this.percentage), h("div", { key: '4c272fba3a39772eafce29b4dc9474b52e944d55', class: "progress-line" }, h("div", { key: '0e5f6564f9700bca781983e201eceda69f3b6f89', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
