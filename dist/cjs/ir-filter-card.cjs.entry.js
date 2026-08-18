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
        return (index.h("wa-card", { key: '2e85519aa86fb9f73ada7f6e713bad3966bb22cb', class: expanded ? '' : 'filters__card__collapsed' }, index.h("div", { key: 'ebc69be9141e01f101a4c2b329338b1c6110790a', part: "header", class: "filters__header", slot: "header" }, index.h("div", { key: '244fd4eec5bec3e66420fc4deb8f0291caefaa29', class: "filters__title-group" }, index.h("wa-icon", { key: '5b19a1f0ce9ad69d1d18f5702172f67c51f4a730', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: 'f464cec65497b4d585cd61553493104bfa488e30', class: "filters__title" }, "Filter")), !this.isDesktop && (index.h("ir-custom-button", { key: '04850798fee2a1e28cb29638d60c91b7f5bf62d9', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '8dc65f0784715dac97b549f43d759e07d922c53c', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), index.h("div", { key: '02acca571a2ce1a7f85fe9979f1161a1610b109b', part: "filter-body", class: 'filters__body' }, index.h("slot", { key: '2852d5e64fba8eb73bc5ec2f1127a2b4cced57dd' })), index.h("div", { key: '860b504bb530860b3bf464607a1e8ec01a2cb9b3', part: "footer", class: 'filters__actions' }, index.h("slot", { key: '1d9d65bb45029e3ae278a55c96af426adbf68882', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

exports.ir_filter_card = IrFilterCard;
