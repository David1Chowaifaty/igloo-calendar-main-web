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
        return (index.h("wa-card", { key: 'bc3bbf520347f431faadaf0ee60f19aacc97f51d', class: expanded ? '' : 'filters__card__collapsed' }, index.h("div", { key: 'a6726975f4687cb6c137dcd9ac75b8a0bd1780be', part: "header", class: "filters__header", slot: "header" }, index.h("div", { key: '5b46213f425836367d3c4658d22e3e6ff81927d6', class: "filters__title-group" }, index.h("wa-icon", { key: '1ae37823e909550bb066dbe30c62066851b6d3a9', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: '6b4f9cd9d5ecef4b978109c5d5e41ab4816c9343', class: "filters__title" }, "Filter")), !this.isDesktop && (index.h("ir-custom-button", { key: '15f8e887321e1d46f998e83fae59cfdbb06e1abf', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '64a63ca908f3b586fc0659f9bca85cd247563d9a', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), index.h("div", { key: '1a6fd0d95d4de6f9c9712ad82c4973d3d6102c68', part: "filter-body", class: 'filters__body' }, index.h("slot", { key: 'ee244700ef32aafa68e220df4e8a32f79d66529f' })), index.h("div", { key: '7b841a16f6f2fb165df19efdd335539d86d92685', part: "footer", class: 'filters__actions' }, index.h("slot", { key: 'c7be53dfa3b37601eb54d9523157d389d4c9d73b', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

exports.ir_filter_card = IrFilterCard;
