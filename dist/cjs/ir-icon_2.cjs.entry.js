'use strict';

var index = require('./index-IDeZZwEK.js');

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
        return (index.h("button", { key: '8b4955a849c650b33bd4cb1ee25cce9ac2998870', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, index.h("slot", { key: '26fe755da40e11d72c2ec6f8112941e1f9f9c0b1', name: "icon" })));
    }
};
IrIcon.style = irIconCss();

const irTitleCss = () => `.sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[border-shown].sc-ir-title-h{border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important;padding-bottom:15px}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}.label.sc-ir-title{font-family:inherit !important}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}.ir-text-start.sc-ir-title{text-align:start}`;

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
        return (index.h(index.Host, { key: '051693969fb2d42bc6af2d154438e9af2b39a18a' }, index.h("h4", { key: '194efa35e62e7b58214e10bbfbf0d81a44e4b092', class: "ir-text-start label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (index.h("ir-icon", { key: '574a32d1a2111393672caa2d31f08b0ba785350f', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: '02613bcda1061860e0ce1f9c0c501b1dfeedd31a', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '9e92842301b003c989a15ba610f5cf8836b79b0a', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (index.h("div", { key: '6c383ea5a8c55ec93b37595be24f844a83be6a42', class: 'title-body' }, index.h("slot", { key: '788f3425fc02b54a3f46dbb644c69e3102144773', name: "title-body" })))));
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
