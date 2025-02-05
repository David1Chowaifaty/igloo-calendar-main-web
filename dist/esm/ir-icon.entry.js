import { r as registerInstance, c as createEvent, h } from './index-c553b3dc.js';

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";
const IrIconStyle0 = irIconCss;

const IrIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconClickHandler = createEvent(this, "iconClickHandler", 7);
        this.icon = 'ft-check';
    }
    render() {
        return (h("button", { key: '43f51e0b6eb0a5fabc21ace38d1ca49b8871a397', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: '452644d67fdf8e2d043afb3daeb2c0affa8cb794', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

export { IrIcon as ir_icon };

//# sourceMappingURL=ir-icon.entry.js.map