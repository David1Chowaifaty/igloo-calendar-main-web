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
        return (h("wa-card", { key: 'c583042eee4540b61b50ab24746c71a4d8eed89a', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '760de1659c3585fcac07af4a875fc2f306e76a13', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '7e8721b3ffd2371689d5c365137195469c27224f', class: "filters__title-group" }, h("wa-icon", { key: '41c99e2e3c388156e4bc31d5029e509f1e00926e', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'bd51016401f98fcf92951e12ca543f09fc3fb9e5', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '182ac40df2a364fa6cdf21533f760815e93778dc', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'ef554b5c9f9bc8c4758dfe26c02de270a61c77ae', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '013ea764d4d78e123ba4faab29b6cd090ab10669', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'f3d644ca3464e3841dba1901376b76cd0f381090' })), h("div", { key: '374838bd11bb768a81f9ce4f38e99bfc4a2eb2fb', part: "footer", class: 'filters__actions' }, h("slot", { key: '96cc84d7f379217b4a199487d4abf2de3353a501', name: "footer" }))));
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