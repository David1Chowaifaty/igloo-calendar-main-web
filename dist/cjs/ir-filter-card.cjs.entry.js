'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-CqJPQrfm.js');
require('./locale-scope-Cch-vf1R.js');

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
        return (index.h("wa-card", { key: 'dafcad39941e043fbdf8a92ba02341c73868b360', class: expanded ? '' : 'filters__card__collapsed' }, index.h("div", { key: '9230a64c1ef5d8532923d0eda5d04ac9f7c42181', part: "header", class: "filters__header", slot: "header" }, index.h("div", { key: '3af5947d2be51e25cd8eeffbaef8a02501aa0f44', class: "filters__title-group" }, index.h("wa-icon", { key: 'c2f402dd9b2a9a3e91ae2d7131cc9947a270a904', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: '112bdc48e2baa1ffd3c825829b27212fba20edf0', class: "filters__title" }, t.t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (index.h("ir-custom-button", { key: '9ea0afc800f296362643d9135910f909efaf5127', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: 'd585557ee0fb71942103d4fdb72550329adb3744', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), index.h("div", { key: '23f88314c8c1b9e5f888573e6d4cc97a690af4cf', part: "filter-body", class: 'filters__body' }, index.h("slot", { key: 'bfe67b2f7c8d078ca7481cf6aa1f57fdde45c03f' })), index.h("div", { key: 'ad321bf4676f1f239b560b806f0fd8f606a4e9d3', part: "footer", class: 'filters__actions' }, index.h("slot", { key: '5b2879c745bbb4f7418d8f1fee1f1b30120068b9', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

exports.ir_filter_card = IrFilterCard;
