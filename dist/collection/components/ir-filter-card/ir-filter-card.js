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
        return (h("wa-card", { key: '6ce3048bbf59c2880cd674cc234dd5506a2a78b8', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '687debb9b8cd9e73a8b92c2bec38cdee297a2391', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '677feede7dbe0eb520bbd7eb28f4c5bd49149d7a', class: "filters__title-group" }, h("wa-icon", { key: '9482fa5a623cd96bdb29416f0cd5940b2cb8c5ed', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '80638481ecbc5949fb54dfbb07654382c6553ddd', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '66f76934ee9881d13880bec9ef440a15ef4cba99', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'ab146db06f74c994b4c5ea64a6fea2d66eb2932d', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: 'c3c936d37afcebff7abc336094ef3da61cd488f4', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'd5af8594bba2bd9dcdc3d833b0a42b87967a6850' })), h("div", { key: '3e53e8d516b8e79ee74cd907ace1d8aeed6f599c', part: "footer", class: 'filters__actions' }, h("slot", { key: '80f6f5859b9eab767992007506b616f1801cecec', name: "footer" }))));
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
