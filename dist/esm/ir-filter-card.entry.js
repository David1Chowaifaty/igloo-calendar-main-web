import { r as registerInstance, h } from './index-CeHdrJeH.js';
import { t } from './t-BVYK64UG.js';
import './locale-scope-CapRuPkM.js';

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
        return (h("wa-card", { key: '59834ec066d65333edb36c8c0131ed4861f630e8', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '42ab0af969aa2b101939428e62ab54d0567322f1', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '42a64cb3f54f5aec1cb6506588567edad3e7caf0', class: "filters__title-group" }, h("wa-icon", { key: '71dcfa12c9dabdfe0d0591d88ea4e94d08d0e300', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '55d7dad3deef58e5a8789fc447018e8e98584f7a', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: '8ab664b67ea2c75f9cdecf06836ca41caba804ac', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '953d4f228abd8490873ec5872980e2fd361aa258', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '216e4d6b5a00621f79af7a5cfdc1767ae1645a73', part: "filter-body", class: 'filters__body' }, h("slot", { key: '223f5c21aca4c2a16b58e1686624dbd8b8220db0' })), h("div", { key: '9cce179432e0df923d2a313739a986aa7a66fecf', part: "footer", class: 'filters__actions' }, h("slot", { key: 'c9d2e1f8a57463bca35e07f620e6f33a792ec7d2', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

export { IrFilterCard as ir_filter_card };
