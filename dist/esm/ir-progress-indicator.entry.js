import { r as registerInstance, h, H as Host } from './index-D7D7fhZS.js';

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
        return (h(Host, { key: '01dc3aee40ecc206ef403632d84c5d907a025181', class: "progress-main" }, h("span", { key: '942ae874c5fd62b2f5050fca625ca876c218353a', class: "progress-totle" }, this.percentage), h("div", { key: '01858b6dbc86373b80d017827c16aa459886c2cf', class: "progress-line" }, h("div", { key: '1d3d482b4408511047a99d013a96a86283106d76', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = irProgressIndicatorCss();

export { IrProgressIndicator as ir_progress_indicator };
