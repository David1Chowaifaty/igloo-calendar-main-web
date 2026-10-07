'use strict';

var index = require('./index-CQkpA5n3.js');
var t = require('./t-wyGILxEL.js');
require('./locale-scope-C7rmpwuA.js');

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
        return (index.h("wa-card", { key: '6ccda90f597a914bde992093bd4b37f515dede7f', class: expanded ? '' : 'filters__card__collapsed' }, index.h("div", { key: '1a92ee071d66179be08d8e487c0541447ad5fcd7', part: "header", class: "filters__header", slot: "header" }, index.h("div", { key: '92683c1a2eb33977e22f683baa79f535ae95506c', class: "filters__title-group" }, index.h("wa-icon", { key: '1467a92140815c23c53fb996f490bc10f201b867', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: '1dac3df2f745d0b5311b22c0171d46f57a9a1f78', class: "filters__title" }, t.t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (index.h("ir-custom-button", { key: '7b7adb24ecfdc87e1afe63f1c725cfa7227e6a84', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '2bae01b6804770f3a4b1ea7eb9372b3d9de5e9df', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), index.h("div", { key: '5db861f584ff05de4a400560d64ffff7ed8a6532', part: "filter-body", class: 'filters__body' }, index.h("slot", { key: '1f704dcda70758f2a654818a19966f8e656a1e50' })), index.h("div", { key: 'eac05413e135c0ea012f3bd98a2d2c9bbe7b9153', part: "footer", class: 'filters__actions' }, index.h("slot", { key: '2a9a1c02c253393cad46dc09a43b70340460118e', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

exports.ir_filter_card = IrFilterCard;
