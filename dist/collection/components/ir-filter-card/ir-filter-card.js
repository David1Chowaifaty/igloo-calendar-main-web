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
        return (h("wa-card", { key: '2e85519aa86fb9f73ada7f6e713bad3966bb22cb', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: 'ebc69be9141e01f101a4c2b329338b1c6110790a', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '244fd4eec5bec3e66420fc4deb8f0291caefaa29', class: "filters__title-group" }, h("wa-icon", { key: '5b19a1f0ce9ad69d1d18f5702172f67c51f4a730', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'f464cec65497b4d585cd61553493104bfa488e30', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '04850798fee2a1e28cb29638d60c91b7f5bf62d9', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '8dc65f0784715dac97b549f43d759e07d922c53c', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '02acca571a2ce1a7f85fe9979f1161a1610b109b', part: "filter-body", class: 'filters__body' }, h("slot", { key: '2852d5e64fba8eb73bc5ec2f1127a2b4cced57dd' })), h("div", { key: '860b504bb530860b3bf464607a1e8ec01a2cb9b3', part: "footer", class: 'filters__actions' }, h("slot", { key: '1d9d65bb45029e3ae278a55c96af426adbf68882', name: "footer" }))));
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
