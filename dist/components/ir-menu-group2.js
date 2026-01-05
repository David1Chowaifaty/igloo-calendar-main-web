import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const irMenuGroupCss = ":host{display:block}.menu-group__details::part(summary){width:100%}.menu-group__details::part(header){transition:color var(--wa-transition-normal, 150ms ease);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.menu-group__details::part(header),.menu-group__details::part(content){padding:0;border-radius:0;padding:0 0.5rem}.menu-group__details::part(header):hover{color:var(--wa-color-text-normal);background-color:var(--wa-color-neutral-fill-quiet)}.menu-group__details::part(header):active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active))}.menu-group__details::part(content){display:flex;flex-direction:column;border-inline-start:1px solid var(--wa-color-surface-border);margin-inline-start:1.5rem}";
const IrMenuGroupStyle0 = irMenuGroupCss;

const IrMenuGroup = /*@__PURE__*/ proxyCustomElement(class IrMenuGroup extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.openChanged = createEvent(this, "openChanged", 7);
    }
    open;
    groupName;
    openChanged;
    handleHide = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.open = false;
        this.openChanged.emit(false);
    };
    handleShow = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        this.open = true;
        this.openChanged.emit(true);
    };
    render() {
        return (h("wa-details", { key: 'cf44596f526a4a746dd70d1b9fc9b3b3a6a47636', class: "menu-group__details", open: this.open, appearance: "plain", name: this.groupName, "onwa-hide": this.handleHide, "onwa-show": this.handleShow }, h("slot", { key: '3ee30727ab70325faa49403190d53c0d64c7e703', slot: "summary", name: "summary" }), h("slot", { key: 'b1a21b663ee90403a179d8c0d20aa39ea35b9a3a' })));
    }
    static get style() { return IrMenuGroupStyle0; }
}, [1, "ir-menu-group", {
        "open": [1540],
        "groupName": [513, "group-name"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-menu-group"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-menu-group":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrMenuGroup);
            }
            break;
    } });
}

export { IrMenuGroup as I, defineCustomElement as d };

//# sourceMappingURL=ir-menu-group2.js.map