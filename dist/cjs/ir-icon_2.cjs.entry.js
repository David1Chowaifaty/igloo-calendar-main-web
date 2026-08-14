'use strict';

var index = require('./index-CJa_TWt0.js');

const irIconCss = () => `.sc-ir-icon-h{margin:0;padding:0}.icon-button.sc-ir-icon{all:unset;margin:0;padding:0;color:#6b6f82}.icon-button.sc-ir-icon:hover{cursor:pointer;color:#104064}`;

const IrIcon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.iconClickHandler = index.createEvent(this, "iconClickHandler");
    }
    icon = 'ft-check';
    type = 'button';
    iconClickHandler;
    render() {
        return (index.h("button", { key: 'e1e5c73ceaf21a63fd535caf5766153f56d7b235', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, index.h("slot", { key: '87a7ebbe7258ed4164b10160535b545e5ab257d7', name: "icon" })));
    }
};
IrIcon.style = irIconCss();

const irTitleCss = () => `.sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[border-shown].sc-ir-title-h{border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important;padding-bottom:15px}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}.label.sc-ir-title{font-family:inherit !important}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}`;

const IrTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar");
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
        return (index.h(index.Host, { key: 'e95e06fb7ef17e72d369f9f20dd07924c3150f0c' }, index.h("h4", { key: '04cf13a07aeccc6e4c3e8f7085d9d0ac17718a86', class: "text-left label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (index.h("ir-icon", { key: '8f9b562eb285145f470d5c1d9ed8a651e6275391', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: 'a6f8c4fe69953e23b5989e9f9f69ea8a65580247', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '4bcd99efc6a4d39f26fb35d65389f34f58819623', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (index.h("div", { key: '686723381d62a52421d5b297cfebf64f92a71b11', class: 'title-body' }, index.h("slot", { key: 'c1c8469b78aefb74caabd4a92d203c2ccdaf6638', name: "title-body" })))));
    }
    static get watchers() { return {
        "justifyContent": [{
                "handleJustifyContentChange": 0
            }]
    }; }
};
IrTitle.style = irTitleCss();

exports.ir_icon = IrIcon;
exports.ir_title = IrTitle;
