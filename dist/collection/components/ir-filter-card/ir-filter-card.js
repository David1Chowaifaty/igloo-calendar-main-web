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
        return (h("wa-card", { key: 'e1caee3a95853a21550799d3b5bdf1711c8a4cdc', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '2c6ceee24096b70de3f32967673f1bf0f719721d', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'f4d810e2d77f85a83a087a510588c8b4bb430bb5', class: "filters__title-group" }, h("wa-icon", { key: 'a845ff1b8d015ec371ef5ed85e5d7c0ed1cae9ba', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'b0b5ab76ce02e14500740378c2b6a04ffd644529', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '3b8c5800829714b1cfc747222e62d5c4a0b5dadd', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '9de4e987a62385d16c82b35e3e9614392655558a', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '0daf0fc97e1ba1665a0024b49c300597045b1ec7', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'dd15f7e74befca4b02406422b7f232de6fc82cd1' })), h("div", { key: 'b12ba7e92c5faa67c8e8d75e75bf8a5a59c312c1', part: "footer", class: 'filters__actions' }, h("slot", { key: '433c86a63cb5ecaa230de326c8d0a5f7aca4f8c2', name: "footer" }))));
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
