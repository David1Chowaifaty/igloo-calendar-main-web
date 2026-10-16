'use strict';

var index = require('./index-Bp205iz4.js');

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
        return (index.h("wa-card", { key: '0f7b1f174732a174c5d7dc4baef2c19a15b4c008', class: expanded ? '' : 'filters__card__collapsed' }, index.h("div", { key: '88bf75ef738f9a9c352e75d160155b674f2bb138', part: "header", class: "filters__header", slot: "header" }, index.h("div", { key: '449767d94c408c420f45b6be89c45b610485bb7e', class: "filters__title-group" }, index.h("wa-icon", { key: '5a524f6d0ebfe448e2a47e260b7ce2d48a86a2d8', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: 'd0dfd518612ed045cc6ade79e8c88ed11bae1d09', class: "filters__title" }, "Filter")), !this.isDesktop && (index.h("ir-custom-button", { key: '20379bfb026030e2289ea0c2005ae2ae646c33e6', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '16d9d539f509fd813cbdbb378d28b2f159bb7523', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), index.h("div", { key: '8e5e87a2a419115a43cb54d76c86776df5d81551', part: "filter-body", class: 'filters__body' }, index.h("slot", { key: '09cd4c9d40a27d8b66c4ef90aa21c0ed6658b621' })), index.h("div", { key: '37c8b6aee1d066df77fdec9dbc85b05f6c5f2e3f', part: "footer", class: 'filters__actions' }, index.h("slot", { key: '697e520ad0fbddd21bb46ad7113cc3b4feb34b5f', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

exports.ir_filter_card = IrFilterCard;
