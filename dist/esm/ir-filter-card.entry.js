import { r as registerInstance, h } from './index-DKZeCK8T.js';
import { t } from './t-Bvz1wS_D.js';
import './locale-scope-Jre4lb6k.js';

const irFilterCardCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;min-width:20vw;height:100%;flex:1}.filters__header{display:flex;align-items:center;justify-content:space-between}.filters__title-group{display:flex;align-items:center;gap:0.5rem}.filters__icon{width:1.125rem;height:1.125rem;flex-shrink:0;color:var(--wa-color-text-quiet)}.filters__title{margin:0;font-size:var(--wa-font-size-m);font-weight:var(--wa-font-weight-heading);color:var(--wa-color-text-normal)}.filters__body{display:flex;flex-direction:column;gap:var(--wa-space-m, 1rem)}.filters__card__collapsed::part(body){display:none}.filters__actions{display:flex;align-items:center;justify-content:flex-end;gap:1rem;padding-top:1rem}::slotted([slot='footer']){margin-top:1rem;display:flex;align-items:center;gap:1rem}`;

const IrFilterCard = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("wa-card", { key: '2a7506a1cc5fb2ebf51d5c0fa8f71d8033facaed', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: 'fd50e5b4742dd15a152805e26e7c684440219106', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '4fff6df4c535f8fc9588a47a6d8e6ecdbc849c76', class: "filters__title-group" }, h("wa-icon", { key: '3196e25d15a8605cd0b0af128ceea5351c2c081b', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '19c82d974813eac029cb75403c1e45b1d6fbcf20', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: 'df5b3a711dc3c2a4201023ae918ba4e717099188', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'a47b90782ce0cf98603e9aa81985d7a9314e10be', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: 'ec399c2d777ced105c71d45f21a794d047518df3', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'e2e6b98f87f957150220c9deb6adb70000d76ede' })), h("div", { key: '5f7bf317d31dbbdcd3f9a70ebd56b59adafa4eed', part: "footer", class: 'filters__actions' }, h("slot", { key: '4b368c3425beff2740162f9fc08bf315cf9dfb83', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

export { IrFilterCard as ir_filter_card };
