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
        return (h("button", { key: '42d08ae31e5b20da2135f44b3be1f1161ed3e901', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: 'f89e03f6c21d11cc74d9c090e288c669b33225b7', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

export { IrIcon as ir_icon };

//# sourceMappingURL=ir-icon.entry.js.map