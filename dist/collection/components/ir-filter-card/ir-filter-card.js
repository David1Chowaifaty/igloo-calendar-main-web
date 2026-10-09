import { h } from "@stencil/core";
import { t } from "../../services/locale/t";
export class IrFilterCard {
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
        return (h("wa-card", { key: '7819b88c3e48d8d7877d7b6bc39adaa58b1debbd', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '574123cec9f5fdabeb69b3d38322f4bda87f8a9c', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'b17adecefeede62e97deb77fde73d670e61041e3', class: "filters__title-group" }, h("wa-icon", { key: '643aa63b4792f69e7bc408ea6e5aa9253f57ebd0', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'ca50efe08b85a540f004bdf1aae746f773639213', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: '88edca41bcca620243875067aeb53f4fe89dbc49', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '56bf049ec9903a20dcac1dce049d6ee0433451a5', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: 'ea189a855abe6b0e60b1866fc8f653ebe759e13b', part: "filter-body", class: 'filters__body' }, h("slot", { key: '0a5552d4093c778987fd80f929452567d7bfba82' })), h("div", { key: '4395f3e42bf522cc74e9bc7bef709982683ff049', part: "footer", class: 'filters__actions' }, h("slot", { key: '7d869745aaeb99af5bc09093cc84030e13799c7a', name: "footer" }))));
    }
    static get is() { return "ir-filter-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-filter-card.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-filter-card.css"]
        };
    }
    static get states() {
        return {
            "collapsed": {},
            "isDesktop": {}
        };
    }
}
