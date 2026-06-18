'use strict';

var index = require('./index-CJ0kc5p1.js');

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
        return (index.h("wa-card", { key: '4c661fa1bce5bf35475490c81b7ee3a9541355b7', class: expanded ? '' : 'filters__card__collapsed' }, index.h("div", { key: '70168ce10b0d5feb3ba4162850a2828b19082879', part: "header", class: "filters__header", slot: "header" }, index.h("div", { key: '73e4197081599bf1d92d5e190f74612d40f68633', class: "filters__title-group" }, index.h("wa-icon", { key: '249a608210843c242752c109e4794ef1e429b83b', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: 'b37a02d4881509a87494d98cc1a7d07492c211de', class: "filters__title" }, "Filter")), !this.isDesktop && (index.h("ir-custom-button", { key: '43b56aa4ab77871b27803d2bc6e60ffa2530432e', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '4a49ac2efc0b18706bb56c37de7152b9e07d10ab', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), index.h("div", { key: '7f94c832dfd944827bcc878c6a397abc74deef32', part: "filter-body", class: 'filters__body' }, index.h("slot", { key: '0de1a2ece193d65f5d4d5f293f47e9b0f32e9980' })), index.h("div", { key: 'aec07ba346da2cf0abae581a542ad43846d4cdaf', part: "footer", class: 'filters__actions' }, index.h("slot", { key: '1bc49dc970f970b054e60412922bf049c0ec421f', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

exports.ir_filter_card = IrFilterCard;
