import { r as registerInstance, h } from './index-BYqrdgY9.js';

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
        return (h("wa-card", { key: '73654291768dcc4d797bb2037c8cc42265ef4474', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '7a56abc4e150a5f7aaf7057a47626a9960880361', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'cdf004dfd7a88dda9b9dd48c2b7ae91bc768dfc6', class: "filters__title-group" }, h("wa-icon", { key: 'cb17f7ebb92e9667da17537c929b3d8865c83603', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '06269faf3bb93e4cb474cfca2e80d6dff7ef7920', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '83e027639d0ce866f5cd0f5bc8f1364cb8ce511e', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '485724f53933eac40e2625ae2658fec807c53a0e', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '1933388823f3d5f8a0f97b861716693484ad9a93', part: "filter-body", class: 'filters__body' }, h("slot", { key: '5daa2ce3f819007ca87d0fa30998681283336a09' })), h("div", { key: 'd29c58e966b2f6bff886c71d1e54710cd86563e7', part: "footer", class: 'filters__actions' }, h("slot", { key: '45403c4683da7103d611cc00b2aecd5c36adb0c5', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

export { IrFilterCard as ir_filter_card };
