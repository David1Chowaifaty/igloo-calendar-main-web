import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-custom-button2.js';

const irFilterCardCss = ":host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;min-width:20vw;height:100%;flex:1}.filters__header{display:flex;align-items:center;justify-content:space-between}.filters__title-group{display:flex;align-items:center;gap:0.5rem}.filters__icon{width:1.125rem;height:1.125rem;flex-shrink:0;color:var(--wa-color-text-quiet)}.filters__title{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.filters__body{display:flex;flex-direction:column;gap:0.75rem}.filters__card__collapsed::part(body){display:none}.filters__actions{display:flex;align-items:center;justify-content:flex-end;gap:0.75rem;padding-top:0.25rem}::slotted([slot='footer']){margin-top:1rem;display:flex;align-items:center;gap:1rem}";
const IrFilterCardStyle0 = irFilterCardCss;

const IrFilterCard = /*@__PURE__*/ proxyCustomElement(class IrFilterCard extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    /** Viewport at/above which the filter body is always shown and the toggle is hidden. */
    static DESKTOP_QUERY = '(min-width: 1024px)';
    collapsed = true;
    isDesktop = false;
    mediaQuery;
    componentWillLoad() {
        this.mediaQuery = window.matchMedia(IrFilterCard.DESKTOP_QUERY);
        this.isDesktop = this.mediaQuery.matches;
        this.mediaQuery.addEventListener('change', this.handleViewportChange);
    }
    disconnectedCallback() {
        this.mediaQuery?.removeEventListener('change', this.handleViewportChange);
    }
    handleViewportChange = (e) => {
        this.isDesktop = e.matches;
    };
    render() {
        // On desktop the body is always expanded; the collapse state only applies below the breakpoint.
        const expanded = this.isDesktop || !this.collapsed;
        return (h("wa-card", { key: '2b0170f73ac1314087c8f44598975de3af848c35', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: 'fa3f2d389de9e4a6829805129f846889d0832853', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '6af64df75599e682a06fdbefde3b520ae13d607c', class: "filters__title-group" }, h("wa-icon", { key: '37b0f597af9e6b1b8d26c4c157e79ae82bbb65a7', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '9f0af0dbfa236a1ca25fcfd2e0fa7a92fa78cb7f', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '6447bc32563495ab244567269fdac19c30d2f470', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '07d268c62369e6612ec4c205cb16233d9d8a1940', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: 'e7d4a49721157e549198d4c01c13a2ad29672f1f', part: "filter-body", class: 'filters__body' }, h("slot", { key: '0d03733bfc4f33aafe0608d82375155573a64f23' })), h("div", { key: '80fa0aa1e40f11f0f971032ff3411d1db98e5b73', part: "footer", class: 'filters__actions' }, h("slot", { key: '3175476347ee9977275ed7538dc1a7b76dc63541', name: "footer" }))));
    }
    static get style() { return IrFilterCardStyle0; }
}, [1, "ir-filter-card", {
        "collapsed": [32],
        "isDesktop": [32]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-filter-card", "ir-custom-button"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-filter-card":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrFilterCard);
            }
            break;
        case "ir-custom-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrFilterCard as I, defineCustomElement as d };

//# sourceMappingURL=ir-filter-card2.js.map