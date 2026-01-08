import { r as registerInstance, h, H as Host } from './index-7e96440e.js';

const irProgressIndicatorCss = ".sc-ir-progress-indicator-h{display:block}.secondary-progress.sc-ir-progress-indicator{background:#6692b3}";
const IrProgressIndicatorStyle0 = irProgressIndicatorCss;

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
        return (h(Host, { key: '8c0f2542ba3abf2555f5c264e63af958495ce641', class: "progress-main" }, h("span", { key: '5fdede8ef4548ca8f75b3859a2bd3b225cb7fff2', class: "progress-totle" }, this.percentage), h("div", { key: '2e9c5fcdd4a8260408224ae5dbc689dfcd59b5db', class: "progress-line" }, h("div", { key: 'be537b89e514160889d56123af50022e1024eb26', class: `progress ${this.color === 'primary' ? 'bg-primary' : 'secondary-progress'} mb-0`, style: { width: this.percentage } }))));
    }
};
IrProgressIndicator.style = IrProgressIndicatorStyle0;

export { IrProgressIndicator as ir_progress_indicator };

//# sourceMappingURL=ir-progress-indicator.entry.js.map