import { h } from "@stencil/core";
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
        return (h("wa-card", { key: 'b7598681ff5344acb578c3371650773ecad11ebd', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '52c9786bac26e522d06670ce9dbe8dfd0c7d1fd0', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'ae322996daa14c58d0ef54813872e01bae3f7baa', class: "filters__title-group" }, h("wa-icon", { key: '0e22170dcc1ff0225f3895897f5a68cbe3f576d2', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '6f9417928e4acce48c4bc34252435eace818b995', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: 'bd3de44425a9cc5e6f1bd9f5ab2bf9e576255ee2', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'e54f42ec2fc93870f14163beb4b4f40db1b80a67', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: 'ba89ef74c881f8848ce65bd5b6734f660fcf4aa2', part: "filter-body", class: 'filters__body' }, h("slot", { key: '07544f4e68fb521c55908ffd262cc96572064cbd' })), h("div", { key: '8fd293f4675abeef04046fd1f072c44bfe0ea6e1', part: "footer", class: 'filters__actions' }, h("slot", { key: 'fa1bc51c184e057b0bca179021501f5d2e8d1206', name: "footer" }))));
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
