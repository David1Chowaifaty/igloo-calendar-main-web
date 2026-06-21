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
        return (h("wa-card", { key: 'af852cb39cffc3b4a5f62e6264d5452a5d3677f9', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '11635248ae05d253608b8b84be3998c89c5fe96b', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '9d4a1c24448c3e4e703823193ba8e095c0c09222', class: "filters__title-group" }, h("wa-icon", { key: 'b0f6dc32f46a7be54bea6a58479f6bba40408df1', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '5b52734b3119b128716c524dc45f025d1f246b2f', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '614e083de0505bd98a808a7e7d76a2a4b82036d2', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'cdd3b0f7becdffcea6c518c5d094d319e78a397a', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '663ddb29ab42a3680a406237ec36f5200f619dd6', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'c45fb823811131b5f1741da67ec79263f32d7db5' })), h("div", { key: 'afd10dba6a7b3377cb8c5dbfa15f02ad9395d1b4', part: "footer", class: 'filters__actions' }, h("slot", { key: '9ef410762fd1dc1f19b7c18fb8a9a1502ae24140', name: "footer" }))));
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
