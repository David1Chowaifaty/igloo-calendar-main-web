import { r as registerInstance, h } from './index-D8DCR0yx.js';

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
        return (h("wa-card", { key: '114031bdef24e8ef64b5944653d7823875fc3ff0', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: 'a749cbe97058348287e9c415be99bfde598465f4', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '5a55b8f248b574180f594d744175909fb33bf94b', class: "filters__title-group" }, h("wa-icon", { key: '78a8dcaaa59fb11357e2d5dd6bda00c3a2fd1861', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'c36c41f5ef0891571b742a7ec40783836604b1bf', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '70ba680508e55621fd7cdb42a1076dd4422a70e2', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '48c96f83c3a28362690af8933422d810d1ce7892', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: 'e6a2ecf8664845734169af0299655cc1ef31a797', part: "filter-body", class: 'filters__body' }, h("slot", { key: '0c3c4a460efc9a6f48cd901ba8b97e13ada243ab' })), h("div", { key: '0e577d14fb014f0bcbc2d6985d986625c2d85db9', part: "footer", class: 'filters__actions' }, h("slot", { key: '8f5d1acb9d418d20352ed1deacede845973c69ab', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

export { IrFilterCard as ir_filter_card };
