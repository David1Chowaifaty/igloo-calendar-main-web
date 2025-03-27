import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:block}";

const IrTasksHeader = /*@__PURE__*/ proxyCustomElement(class IrTasksHeader extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.headerButtonPress = createEvent(this, "headerButtonPress", 7);
        this.isCleanedEnabled = false;
    }
    handleCleanedButtonAnimation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.btnRef.bounce();
    }
    render() {
        return (h("div", { key: '4b88e6fc23a5870b247ec1037f767eeb1e6b4d5e', class: "d-flex flex-column flex-md-row align-items-md-center justify-content-between" }, h("h3", { key: '2afef7531b8f34f33dab1337785975c23ed278d0', class: "mb-1 mb-md-0" }, "Housekeeping Tasks"), h("div", { key: 'fb97fca768ab8f308727fc4a471511f7795a5a15', class: "d-flex", style: { gap: '1rem' } }, h("ir-button", { key: '5d91f80c44368bc7c04feef884ea0a1d73505d60', size: "sm", btn_color: "outline", text: "Export", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), h("ir-button", { key: 'f8b14ee7e851f2c691091f689dc4319bd10495fe', size: "sm", btn_color: "outline", text: "Archives", btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: 'f14cd0bcf0cbb1e24ffd0f749c1e542ad6a78aef', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
    }
    static get style() { return irTasksHeaderCss; }
}, [2, "ir-tasks-header", {
        "isCleanedEnabled": [4, "is-cleaned-enabled"]
    }, [[16, "animateCleanedButton", "handleCleanedButtonAnimation"]]]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-tasks-header", "ir-button", "ir-icons"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-tasks-header":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTasksHeader);
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrTasksHeader as I, defineCustomElement as d };
//# sourceMappingURL=ir-tasks-header2.js.map

//# sourceMappingURL=ir-tasks-header2.js.map