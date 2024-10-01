'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-caa79d4b.js');

const irTitleCss = ".sc-ir-title-h{padding:0px 0;margin-bottom:20px;display:flex;align-items:center;width:100%}[display-context='sidebar'].sc-ir-title-h{padding:15px 0;justify-content:space-between !important;width:100% !important;border-bottom:1px solid #e4e5ec !important;border-color:#e4e5ec !important}.title-body.sc-ir-title{margin:0;padding:0}@media only screen and (max-width: 641px){.sc-ir-title-h{flex-direction:column;gap:8px;align-items:flex-start}[display-context='sidebar'].sc-ir-title-h{flex-direction:row}}";
const IrTitleStyle0 = irTitleCss;

const IrTitle = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeSideBar = index.createEvent(this, "closeSideBar", 7);
        this.label = undefined;
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
        return (index.h(index.Host, { key: '755a9006d43e624d4bc432c2ce69450783f4c4bf' }, index.h("h4", { key: 'ac5c30c76f0ba4818f05f8fb483bb40720d76986', class: "text-left font-medium-2 py-0 my-0" }, this.label), this.displayContext === 'sidebar' && (index.h("ir-icon", { key: '7c8439770d1390818d1f116c948164604da718f4', class: 'close', onIconClickHandler: () => {
                this.closeSideBar.emit(null);
            } }, index.h("svg", { key: '8f36b62a89c51518787a3a620f75c2da40e06a03', slot: "icon", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", height: 20, width: 20 }, index.h("path", { key: 'e9395b76f78ff4ccb40c75ffcbffa81feb95e81b', d: "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" })))), this.displayContext !== 'sidebar' && (index.h("div", { key: '99015dbd1ed9585ad2d005a484aad7392ba5820d', class: 'title-body' }, index.h("slot", { key: '809cac07708c308b7bc69d8db82aa3b3d49356ff', name: "title-body" })))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "justifyContent": ["handleJustifyContentChange"]
    }; }
};
IrTitle.style = IrTitleStyle0;

exports.ir_title = IrTitle;

//# sourceMappingURL=ir-title.cjs.entry.js.map