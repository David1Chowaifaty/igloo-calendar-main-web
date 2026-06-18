import { r as registerInstance, h, H as Host } from './index-BvoylR5O.js';

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
        return (h(Host, { key: '35968274ca70dc5c99e4fadf2b2396a728f21f66', class: "progress-main" }, h("span", { key: 'f2a4d76db337dfcad5ef802cbfba1a66179bcb38', class: "progress-totle" }, this.percentage), h("div", { key: '8d0cbe34538a8ebf231524fde366c9ae817ae6f1', class: "progress-line" }, h("div", { key: 'aefd89d1e6407ecd663ab09257f03cb51d1701ca', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
