'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');

const irIconCss = ".sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}";
const IrIconStyle0 = irIconCss;

const IrIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.iconClickHandler = index.createEvent(this, "iconClickHandler", 7);
    }
    icon = 'ft-check';
    type = 'button';
    iconClickHandler;
    render() {
        return (index.h("button", { key: 'b1b582ca97efe2e9eeee7e0f3ee54013c70d8fba', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, index.h("slot", { key: '4bde3876b2d2bd861d28f6de4a7693e2a6b57f67', name: "icon" })));
    }
};
IrIcon.style = IrIconStyle0;

const irTitleCss = ".sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[border-shown].sc-ir-title-h{border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important;padding-bottom:15px}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}.label.sc-ir-title{font-family:inherit !important}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}";
const IrTitleStyle0 = irTitleCss;

const IrTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
    }
    label;
    borderShown;
    displayContext = 'default';
    justifyContent = 'start';
    closeSideBar;
    get el() { return index.getElement(this); }
    componentDidLoad() {
        this.el.style.justifyContent = this.justifyContent;
    }
    handleJustifyContentChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.el.style.justifyContent = newValue;
        }
    }
    render() {
        return (index.h(index.Host, { key: 'e3c5b2274612dc83824c6fdc0a271b3b1dd7d968' }, index.h("h4", { key: '960fdb6090499f24677f48f41ef7f97d4830321d', class: "text-left label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (index.h("ir-icon", { key: '38b7588017612ae19befc252331182e9bdf50374', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: '3386948b8327e8fc1c06697855977c3c865b04f4', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '996cd00cb7f48135a836d211c29f4c68629caa34', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (index.h("div", { key: '89ad2e688fb72167ef8aa5456c1f9b60e6631865', class: 'title-body' }, index.h("slot", { key: '48a198b01219e24b554b97e541872bb71ffb4d74', name: "title-body" })))));
    }
    static get watchers() { return {
        "justifyContent": ["handleJustifyContentChange"]
    }; }
};
IrTitle.style = IrTitleStyle0;

exports.ir_icon = IrIcon;
exports.ir_title = IrTitle;

//# sourceMappingURL=ir-icon_2.cjs.entry.js.map