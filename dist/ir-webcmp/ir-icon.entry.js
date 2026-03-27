import { r as registerInstance, a as createEvent, h } from './index-7b3961ed.js';

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";

const IrIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconClickHandler = createEvent(this, "iconClickHandler", 7);
    }
    icon = 'ft-check';
    type = 'button';
    iconClickHandler;
    render() {
        return (h("button", { key: 'f61ba068a3bcae991996fb9a3c17794cc69ab20d', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: 'aa3e5132d976a6ff0de8622c42935308a7b82ad2', name: "icon" })));
    }
};
IrIcon.style = irIconCss;

export { IrIcon as ir_icon };

//# sourceMappingURL=ir-icon.entry.js.map