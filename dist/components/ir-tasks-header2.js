import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
import { l as locales } from './locales.store.js';
import { d as defineCustomElement$2 } from './ir-button2.js';
import { d as defineCustomElement$1 } from './ir-icons2.js';

const irTasksHeaderCss = ".sc-ir-tasks-header-h{display:block}";
const IrTasksHeaderStyle0 = irTasksHeaderCss;

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
        return (h("div", { key: 'ee883e81f5ad3b2943056404512b163e534812b8', class: "d-flex flex-column flex-md-row align-items-md-center justify-content-between" }, h("h3", { key: '6f591be19ed723abc64d1a6587d1fad212c6849a', class: "mb-1 mb-md-0" }, "Housekeeping Tasks"), h("div", { key: 'd560cd7413796854d71c8c2c0de425433af1e79d', class: "d-flex", style: { gap: '1rem' } }, h("ir-button", { key: 'f259922e0839db3f05d10ef6bb57c7b89335b057', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Export, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            }, btnStyle: { height: '100%' }, iconPosition: "right", icon_name: "file", icon_style: { '--icon-size': '14px' } }), h("ir-button", { key: '62219aa08cdffc9e6a0e744d2534086856316df7', size: "sm", btn_color: "outline", text: locales.entries.Lcz_Archives, btnStyle: { height: '100%' }, onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: 'f0e12ebb7992cdf5d5d1e7bbaccee25ce64891f8', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, btnStyle: { height: '100%' }, size: "sm", btn_disabled: !this.isCleanedEnabled, text: 'Cleaned', ref: el => (this.btnRef = el) }))));
    }
    static get style() { return IrTasksHeaderStyle0; }
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