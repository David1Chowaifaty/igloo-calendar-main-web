import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';
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
        return (h("div", { key: '0fb69ae27aef47926a49835d0f49f0439ab35cbe', class: "d-flex align-items-center justify-content-between" }, h("h3", { key: '785df026ec5dbf5c31984dc8afa2da67d62314c9' }, "Housekeeping Tasks"), h("div", { key: 'c9c46273041cc8a49c4d9192da2dd9701a19a58c', class: "d-flex align-items-center", style: { gap: '1rem' } }, h("ir-button", { key: 'a5118066c4cb623bf48d2ea864b44a6b3b8e8192', size: "sm", btn_color: "outline", text: "Export", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'export' });
            } }), h("ir-button", { key: 'ba35aa15ee0b0433e460d54fb3f8db7e1b6fc33f', size: "sm", btn_color: "outline", text: "Archive", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'archive' });
            } }), h("ir-button", { key: '8051f04da3df7ac5c66daa14d31791a03e41b4c2', onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.headerButtonPress.emit({ name: 'cleaned' });
            }, size: "sm", btn_disabled: !this.isCleanedEnabled, text: "Cleaned", ref: el => (this.btnRef = el) }))));
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