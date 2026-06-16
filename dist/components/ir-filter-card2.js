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
        return (h("wa-card", { key: '1720c4081923a17eef82a80d4f7e33b668fd99c6', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '3218e4dcf5b018941deece79e58ff57857f4045e', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'cec7db05353903abebf17d4c0d80eee76214fd05', class: "filters__title-group" }, h("wa-icon", { key: 'bca79ccd0b7a61280d86985946dfbc8010b1f07c', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '6ad96f4f774a81aa7c2d829fbbe852d40a23a3da', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '73d8c85cd02e0417122da839a829547b30061d43', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '56fe6c61349d6285a9dbffacdebe230170169b54', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: 'f77a4a762c61ec608f6b8f837184775140dd25f2', part: "filter-body", class: 'filters__body' }, h("slot", { key: '14dfb7f937682f730cd105690f4cbecb390673e3' })), h("div", { key: 'aef1136a490f19281c8900ae23d0f578891dde76', part: "footer", class: 'filters__actions' }, h("slot", { key: '0b16472d20a5f7a8d6cad0552a4b27c0d2066790', name: "footer" }))));
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