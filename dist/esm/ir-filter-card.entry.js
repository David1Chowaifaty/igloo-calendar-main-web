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
        return (h("wa-card", { key: '07f692792bdf408f2ca12786073211cba0da2400', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: 'b153a14cf4c12a2b3bf8a8ed6d0908b1a1730b13', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'a0b87e971206411f08162995f69b74cd80f7934f', class: "filters__title-group" }, h("wa-icon", { key: 'e116b1aad447e979dc677fc72c58cff149790399', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '4300ff4614c12820dc2621181e12bad65a264bc5', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: '0dc44bf7320b5a7efc3aa786d48acc249a8744e2', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '99c1f9587bd3d07faaac1c581bdd1a178a5ec82c', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '1d402fbc374016ef77f00fdb187e42594487e5ea', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'd6ba714c895346f7fb88f9a97e52a7ba3fc98d46' })), h("div", { key: '3f94c482d04d617d927c9d10f53dc7b9c4fffe89', part: "footer", class: 'filters__actions' }, h("slot", { key: '82d7412618b90c7d6955dcad7326d576e64cf93e', name: "footer" }))));
    }
};
IrFilterCard.style = irFilterCardCss();

export { IrFilterCard as ir_filter_card };
