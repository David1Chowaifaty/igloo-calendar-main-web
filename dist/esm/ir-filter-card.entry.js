import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { t } from './t-Bk78Wumj.js';
import './locales.store-CXJn6ls-.js';

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
        return (h("wa-card", { key: 'b484c5caaeb0830bb4d2ea405ed44678c3d2ebd7', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '487d3c5c0d489a2a8b98b0f2a1369bbab40d5f00', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'b07c17e4d7e1eb59defef969e2d6250da8b8b17c', class: "filters__title-group" }, h("wa-icon", { key: 'f7c003d378e7978654a47ff97ba2bb473d96e307', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'cf59aca269c88c0b7857b9302662e56a63c7d9cd', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: 'e133f97b2f9f60c23a6a6b53029597a59ff02da0', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '7f8bce83aeb00f6891c3fcd6926bc3d99c5fd54a', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '24bb14c748f5c095fda90c598fd2decd23776670', part: "filter-body", class: 'filters__body' }, h("slot", { key: '63e8ad002eb8cf9d606385616727df8b544dd2f5' })), h("div", { key: '9f6b0dbdf3258c1bbda4229cbc8091be97a54709', part: "footer", class: 'filters__actions' }, h("slot", { key: '900dfdc9ea3086be1576f07fd692a82444fec5f1', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

export { IrFilterCard as ir_filter_card };
