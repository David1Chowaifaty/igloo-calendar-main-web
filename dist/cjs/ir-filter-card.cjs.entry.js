'use strict';

var index = require('./index-jMqrfjaT.js');

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
        return (index.h("wa-card", { key: '8b5404abf73865fefc4080c939bae965edc8f7a0', class: expanded ? '' : 'filters__card__collapsed' }, index.h("div", { key: '7cf7d000e93b04706b3093ca4d2f077070cc6d28', part: "header", class: "filters__header", slot: "header" }, index.h("div", { key: '8273af4968c0e3e3e356b940c39324b766058bc1', class: "filters__title-group" }, index.h("wa-icon", { key: '823e05139fb82823956f1bad740c2e74a94c9305', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: 'c5ccd06991ff86b9edeffe54f5aee89f32289fd5', class: "filters__title" }, "Filter")), !this.isDesktop && (index.h("ir-custom-button", { key: '1f7e4d4ce1a46faa840ff700db73b487bc56fb99', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '8328cf1b1af23ff889ceb10a5ba51c17368155e1', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), index.h("div", { key: '16363af45f950b5b6a217fff42e6153a10562395', part: "filter-body", class: 'filters__body' }, index.h("slot", { key: '440e19eac84700270ffb4fa342a08cb6165e3a05' })), index.h("div", { key: 'f4162427298cbede8054a0b6eee33c180f620b3e', part: "footer", class: 'filters__actions' }, index.h("slot", { key: 'defd4f2fadf39f457e808b5c101057526cccdcbb', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

exports.ir_filter_card = IrFilterCard;
