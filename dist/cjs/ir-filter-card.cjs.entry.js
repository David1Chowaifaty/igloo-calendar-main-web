'use strict';

var index = require('./index-CJa_TWt0.js');

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
        return (index.h("wa-card", { key: 'e1caee3a95853a21550799d3b5bdf1711c8a4cdc', class: expanded ? '' : 'filters__card__collapsed' }, index.h("div", { key: '2c6ceee24096b70de3f32967673f1bf0f719721d', part: "header", class: "filters__header", slot: "header" }, index.h("div", { key: 'f4d810e2d77f85a83a087a510588c8b4bb430bb5', class: "filters__title-group" }, index.h("wa-icon", { key: 'a845ff1b8d015ec371ef5ed85e5d7c0ed1cae9ba', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: 'b0b5ab76ce02e14500740378c2b6a04ffd644529', class: "filters__title" }, "Filter")), !this.isDesktop && (index.h("ir-custom-button", { key: '3b8c5800829714b1cfc747222e62d5c4a0b5dadd', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '9de4e987a62385d16c82b35e3e9614392655558a', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), index.h("div", { key: '0daf0fc97e1ba1665a0024b49c300597045b1ec7', part: "filter-body", class: 'filters__body' }, index.h("slot", { key: 'dd15f7e74befca4b02406422b7f232de6fc82cd1' })), index.h("div", { key: 'b12ba7e92c5faa67c8e8d75e75bf8a5a59c312c1', part: "footer", class: 'filters__actions' }, index.h("slot", { key: '433c86a63cb5ecaa230de326c8d0a5f7aca4f8c2', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

exports.ir_filter_card = IrFilterCard;
