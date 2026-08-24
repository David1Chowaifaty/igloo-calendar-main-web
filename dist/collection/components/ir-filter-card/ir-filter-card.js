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
        return (h("wa-card", { key: 'b4d222aad44a7afc765137960bc8a2b5a70e7076', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '4f03a8f896c72223e8871627eaf4151c8161214f', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'fdb9c2f9994b80943c1af6a4a329a23d8c967fe6', class: "filters__title-group" }, h("wa-icon", { key: '48f6d84b94e53e701b01896b53215590df83d3ed', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'f73842b3b597a601e89b605822cc76f46705842d', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '1e2512f9c055109aa3e86e3b8ef9d1fccaa5a762', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'f69095b00c62ddaaa907d2d5d0b5bfdcb6f07e46', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '6cd546e21cbb9021ecd26f47c23429bb207f3231', part: "filter-body", class: 'filters__body' }, h("slot", { key: '01c53a719e3cd22f440876bd4a56e52ace704c8d' })), h("div", { key: '8d916a11bde5da668db45d08ca3c9b391e5eb8dc', part: "footer", class: 'filters__actions' }, h("slot", { key: 'adc1303c6dc5203cd5d3aa0637130a0ce6aaaf0b', name: "footer" }))));
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
