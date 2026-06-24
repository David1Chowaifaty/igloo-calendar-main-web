'use strict';

var index = require('./index-DYQrLNin.js');

const irFilterCardCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;min-width:20vw;height:100%;flex:1}.filters__header{display:flex;align-items:center;justify-content:space-between}.filters__title-group{display:flex;align-items:center;gap:0.5rem}.filters__icon{width:1.125rem;height:1.125rem;flex-shrink:0;color:var(--wa-color-text-quiet)}.filters__title{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.filters__body{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.filters__card__collapsed::part(body){display:none}.filters__actions{display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:1rem}::slotted([slot='footer']){margin-top:1rem;display:flex;align-items:center;gap:1rem}`;

const IrFilterCard = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("wa-card", { key: '2ee81f9e14af664ddc5f2c8b1fc30f87cf48a9b7', class: expanded ? '' : 'filters__card__collapsed' }, index.h("div", { key: '97330133579e916291acb713d914bd24bac4b83f', part: "header", class: "filters__header", slot: "header" }, index.h("div", { key: '8390cb5e277550a719a6f40ca1262294c9446073', class: "filters__title-group" }, index.h("wa-icon", { key: 'bed40d458bc910b9ee118f3709e983fc3ebc914c', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: '59802382c1f5ca8fa561eb1404947b48f88b7a29', class: "filters__title" }, "Filter")), !this.isDesktop && (index.h("ir-custom-button", { key: 'c1f19f3569959ccf519f1383589038f8c36f1eaa', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '7b29c1a86978b2c37e7c37399d22b8c74221a4a1', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), index.h("div", { key: 'fda20e0cb9f774f3e3b528b54817eaa5871b2823', part: "filter-body", class: 'filters__body' }, index.h("slot", { key: '8e140125e597253903df4923922d706ef5c0d226' })), index.h("div", { key: 'd972692b7586040c6ade2fcd12592bfa3bff3ef1', part: "footer", class: 'filters__actions' }, index.h("slot", { key: '3e0271af2f4ef62d1c5c314c58831fb5b08d879b', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

exports.ir_filter_card = IrFilterCard;
