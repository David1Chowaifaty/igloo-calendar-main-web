'use strict';

var index = require('./index-IDeZZwEK.js');
var t = require('./t-sd8HJHNy.js');
require('./locales.store-D6DJIhoZ.js');

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
        return (index.h("wa-card", { key: 'd2c856fc456b51106fd1ccc54c314836502469ce', class: expanded ? '' : 'filters__card__collapsed' }, index.h("div", { key: '97d4573fd1f4c1f20e25b75ac2e8132c0804c0e9', part: "header", class: "filters__header", slot: "header" }, index.h("div", { key: 'f5230d13051cd52c1199b2add26fb4b9906e6638', class: "filters__title-group" }, index.h("wa-icon", { key: 'b890b34327d0eeca3b6f3a625cf673f9ff9a8b9a', name: "filter", style: { fontSize: '1rem' } }), index.h("h4", { key: '8c19abec20a3d10753e8754c283dd93a58df22f1', class: "filters__title" }, t.t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (index.h("ir-custom-button", { key: '7bcb55d3f69cf3161aeba658b5a279ba92b9fa54', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, index.h("wa-icon", { key: '6949d4b48afc51bc4140012366a411a75b5179a3', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), index.h("div", { key: '2ed6100adacda3487ff732ce67fd999aade9497c', part: "filter-body", class: 'filters__body' }, index.h("slot", { key: 'bc4d80a8fc676aaf6a057667c841498831f191d9' })), index.h("div", { key: 'b7159e9e1e753a9cce871e4533442214c1954022', part: "footer", class: 'filters__actions' }, index.h("slot", { key: '3290ce8223d5e497827d70491f80281d541c5959', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

exports.ir_filter_card = IrFilterCard;
