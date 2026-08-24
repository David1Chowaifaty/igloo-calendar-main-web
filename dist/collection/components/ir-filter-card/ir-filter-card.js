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
        return (h("wa-card", { key: '5b8d27a509789dfe33f8bf3e04c82bf259640ae2', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '6973b79477a2b9991a7926e101a14278132b4985', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '68a97a7a92083b8527a3455ad70e1909456401ca', class: "filters__title-group" }, h("wa-icon", { key: '9d5007c63dea58539396f0ca6449459789df564c', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '04553faf0e0174a55f5d2599b7b856e6847cce6b', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '7d98b06b6330c45ea4379b5df2b950d1b1184cd0', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '15c5a6ae47f5617aa3d5c42f475ebb63b1c56c33', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '7ee0a9edffd17fc7103dff6ad9511de2c69d5822', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'b2a3e7351d581b3d80eca87ea8b6eaf98b97e3df' })), h("div", { key: '9c272866bf8f22186f0d58c7add2a0487bd58579', part: "footer", class: 'filters__actions' }, h("slot", { key: '967855aa0e2818b33024a4d875f338a0f2a55637', name: "footer" }))));
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
