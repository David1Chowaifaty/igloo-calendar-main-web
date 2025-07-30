import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-0a4a209a.js';

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";
const IrIconStyle0 = irIconCss;

const IrIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconClickHandler = createEvent(this, "iconClickHandler", 7);
        this.icon = 'ft-check';
        this.type = 'button';
    }
    render() {
        return (h("button", { key: '954ec713ba025e793d36b060254a817e1cc8c428', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: '26cea31c15abc28aed124e82cc0ef6d1672b075a', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

const irTitleCss = ".sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[border-shown].sc-ir-title-h{border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important;padding-bottom:15px}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}.label.sc-ir-title{font-family:inherit !important}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}";
const IrTitleStyle0 = irTitleCss;

const IrTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar", 7);
        this.displayContext = 'default';
        this.justifyContent = 'start';
    }
    componentDidLoad() {
        this.el.style.justifyContent = this.justifyContent;
    }
    handleJustifyContentChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.el.style.justifyContent = newValue;
        }
    }
    render() {
        return (h(Host, { key: '84506ce99dbb485fb07a9acdedba0bfebc5196c8' }, h("h4", { key: '63d0f0978841c05519cf1b8c5b4a269f35117dcd', class: "text-left label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (h("ir-icon", { key: '382ea14f03178b7c00a1c513cb93c6bd6dca613e', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '70c0b824e614cf5dd2825dbda0072f000402c7d3', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: 'd5c3e70ec3c0fe0218a279e601a49c6c2fee1774', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (h("div", { key: '0128672ab3b240c0d70a9c7a89ea7ffd7779b82b', class: 'title-body' }, h("slot", { key: '48d19576c6611e537af0f4ef42ead33665ec6c8d', name: "title-body" })))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "justifyContent": ["handleJustifyContentChange"]
    }; }
};
IrTitle.style = IrTitleStyle0;

export { IrIcon as ir_icon, IrTitle as ir_title };

//# sourceMappingURL=ir-icon_2.entry.js.map