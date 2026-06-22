import { r as registerInstance, c as createEvent, h, d as getElement, H as Host } from './index-D7D7fhZS.js';

const irIconCss = () => `.sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}`;

const IrIcon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.iconClickHandler = createEvent(this, "iconClickHandler");
    }
    icon = 'ft-check';
    type = 'button';
    iconClickHandler;
    render() {
        return (h("button", { key: '9009106d2aa5c7be12557ed7a6d0a18ebd786a28', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, h("slot", { key: 'd93a16fabeefa290086f1310c3420ca9e4e14c7a', name: "icon" })));
    }
};
IrIcon.style = irIconCss();

const irTitleCss = () => `.sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[border-shown].sc-ir-title-h{border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important;padding-bottom:15px}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}.label.sc-ir-title{font-family:inherit !important}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}`;

const IrTitle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.closeSideBar = createEvent(this, "closeSideBar");
    }
    label;
    borderShown;
    displayContext = 'default';
    justifyContent = 'start';
    closeSideBar;
    get el() { return getElement(this); }
    componentDidLoad() {
        this.el.style.justifyContent = this.justifyContent;
    }
    handleJustifyContentChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.el.style.justifyContent = newValue;
        }
    }
    render() {
        return (h(Host, { key: '30d52ca4c244d905ee74492ee8d19b57f3a14ec4' }, h("h4", { key: '6e6206246370ffe65fe4bc1e52827fe529c571e4', class: "text-left label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (h("ir-icon", { key: '89fbb36ec705f0c6b7930586a5377f77ad1aadb6', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, h("svg", { key: '87a0795cd64e7dd7da1c878b20c54c8625386ac6', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, h("path", { key: '47fc476021df4d416187bbaced39be2f7a4fa84c', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (h("div", { key: 'a8d34bc94d30343ea0569c9df7f47459d37558ff', class: 'title-body' }, h("slot", { key: '994a99cd6d2bdae6852cf1ccee66f8961d474631', name: "title-body" })))));
    }
    static get watchers() { return {
        "justifyContent": [{
                "handleJustifyContentChange": 0
            }]
    }; }
};
IrTitle.style = irTitleCss();

export { IrIcon as ir_icon, IrTitle as ir_title };
