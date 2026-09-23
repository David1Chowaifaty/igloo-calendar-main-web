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
        return (h("wa-card", { key: '759a1bbfd09ec3cfb8de09a3ee7d6f72163474d6', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '38e6dadfbc101cd0ea9ecb21fcd87b91792a11f8', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '2aefeb8ebdb62c1e8b4d0fd9b72fdc4e9f00b5bc', class: "filters__title-group" }, h("wa-icon", { key: '452419381ffa6ea3eeb6f4b27f51805059e3189b', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'a9e6eab6d6f0648dbe2fb68bb97972902882090e', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: '8fcad3341aa9adbbaa5f4f3c2d1104dab2c7fb4c', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'f89eb07632f5999b0065169f0565b528fd5dea21', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '6c10081be2c443492812905821a95ad29ef6c33c', part: "filter-body", class: 'filters__body' }, h("slot", { key: '4dad47f55c3acd166cda5f24efdfad29453cc26a' })), h("div", { key: '9f186e4b1ecd8dacfc990b9e13fb9d625d98ee2c', part: "footer", class: 'filters__actions' }, h("slot", { key: '14ac6b6802173642c453d6aa43cbd1ec3c69463a', name: "footer" }))));
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
