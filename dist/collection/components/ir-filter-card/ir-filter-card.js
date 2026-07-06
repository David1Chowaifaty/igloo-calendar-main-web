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
        return (h("wa-card", { key: '1cff117739f24237abd889211c5f085d5d488a9d', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '932f4520ce670f5b43410823a4e3ec5b6c159822', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '2091bcde788d23de55c33200f6ed941ca1b8a92c', class: "filters__title-group" }, h("wa-icon", { key: 'dd92dd5fb863e0462ba7d79fdab735141701b9e7', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'ebec7e52839cd2654168391521e55310574de169', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: 'e1b1c6d572106af56e67d1fb642d968f27bacde5', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'c480991398b24826aff4946637e26c6199ac355b', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '595681d29713d18e0a2e05bbf6ba291863e88c28', part: "filter-body", class: 'filters__body' }, h("slot", { key: '30a877226410a73ec7a1a4403569bed687595aac' })), h("div", { key: '03a2b2f3ab715efbe71f14a65cfbb52c8d648229', part: "footer", class: 'filters__actions' }, h("slot", { key: 'dc37a0353e8209128a248512960e84d72dd1494a', name: "footer" }))));
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
