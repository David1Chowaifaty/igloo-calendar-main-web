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
        return (h("button", { key: 'a85d0ba7a28e5b9cf2af84298a193661a720cf92', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: 'aab987f7c862c8a9b0e8950358c40bcae6059395', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

export { IrIcon as ir_icon };

//# sourceMappingURL=ir-icon.entry.js.map