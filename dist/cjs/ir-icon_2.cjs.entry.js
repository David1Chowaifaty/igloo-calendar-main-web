'use strict';

var index = require('./index-CJ0kc5p1.js');

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
        return (index.h("button", { key: 'f899557a5af42ff109b5a65e55a7e964d65a85dc', type: this.type, class: "icon-button", onClick: () => this.iconClickHandler.emit() }, index.h("slot", { key: '1aefd4fe7953b9fcfe77f00a375f48f5ddc14114', name: "icon" })));
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
        return (index.h(index.Host, { key: '80fdaa3f4c9cc8597c473770fc7995a326a8da09' }, index.h("h4", { key: '60d0f53b1cfc5ee8a9611daf36bfeb061b90c333', class: "text-left label font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (index.h("ir-icon", { key: '18d58d6a30872b9041bb049cd28d480d1960b5a3', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: 'b38610cc67244c3adcabb1c9f6c3d1381bb84638', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: '1f3902b68f033d980ec0a61c18b3a9866730c632', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (index.h("div", { key: '7e5cb8acd8c9b5d91083eae8eaf5c5ed248ad422', class: 'title-body' }, index.h("slot", { key: 'd5985d716d0a5fc0ffade86a2fcc19ba4f9b2b4f', name: "title-body" })))));
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
