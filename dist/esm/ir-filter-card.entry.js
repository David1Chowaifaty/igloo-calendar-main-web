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
        return (h("wa-card", { key: '30c892219a7aab6af0d97829fff9ef72fbe0da3e', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '6c09216e754a6113d34951f9a0ad39db3f761a2e', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'acec78ab6fe700a31a17d2524507e88842e4856b', class: "filters__title-group" }, h("wa-icon", { key: '8adda6315bb7dc7004ba04cd83598ec9665ba025', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'c192998d030ae8c3c7f5c4db1a621ff33de52364', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: '558c3b2b956c250a1017fbd1cca0bd8a7dc32f07', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '40d3aaad394ea2028b5a9288d2cf3bdf72d3e8b9', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '2154c1f2191f2e76e225a6f1b723b4f51f12ab01', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'b9092d78fcee488122ccf9a9e4e72d3974612742' })), h("div", { key: 'b85719bdacffcd47545551dd5e159d1d301a301b', part: "footer", class: 'filters__actions' }, h("slot", { key: '2ac0820d4d88cdd2b4976ebfa57b3f5f6b18bef4', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

export { IrFilterCard as ir_filter_card };
