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
        return (h("wa-card", { key: 'dafcad39941e043fbdf8a92ba02341c73868b360', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '9230a64c1ef5d8532923d0eda5d04ac9f7c42181', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '3af5947d2be51e25cd8eeffbaef8a02501aa0f44', class: "filters__title-group" }, h("wa-icon", { key: 'c2f402dd9b2a9a3e91ae2d7131cc9947a270a904', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '112bdc48e2baa1ffd3c825829b27212fba20edf0', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: '9ea0afc800f296362643d9135910f909efaf5127', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'd585557ee0fb71942103d4fdb72550329adb3744', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '23f88314c8c1b9e5f888573e6d4cc97a690af4cf', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'bfe67b2f7c8d078ca7481cf6aa1f57fdde45c03f' })), h("div", { key: 'ad321bf4676f1f239b560b806f0fd8f606a4e9d3', part: "footer", class: 'filters__actions' }, h("slot", { key: '5b2879c745bbb4f7418d8f1fee1f1b30120068b9', name: "footer" }))));
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
