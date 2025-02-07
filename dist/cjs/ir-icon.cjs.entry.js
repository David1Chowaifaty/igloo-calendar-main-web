'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d0d7c4d0.js');

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";
const IrIconStyle0 = irIconCss;

const IrIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.iconClickHandler = index.createEvent(this, "iconClickHandler", 7);
        this.icon = 'ft-check';
    }
    render() {
        return (index.h("button", { key: 'a85d0ba7a28e5b9cf2af84298a193661a720cf92', class: "icon-button", onClick: () => this.iconClickHandler.emit() }, index.h("slot", { key: 'aab987f7c862c8a9b0e8950358c40bcae6059395', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

exports.ir_icon = IrIcon;

//# sourceMappingURL=ir-icon.cjs.entry.js.map