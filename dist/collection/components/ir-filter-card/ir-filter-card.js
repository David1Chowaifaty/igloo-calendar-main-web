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
        return (h("wa-card", { key: '45df59e840620c9cd8f2071bb9d02e6ae4d2f506', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: 'bbc3a0687c123e4ca8e9d91750147f329729aad6', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '37fcab9e74f54a7546662d663c8e810fe9e5ab67', class: "filters__title-group" }, h("wa-icon", { key: '0d28a455b31e4888715919891f96977e274a9514', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '3a8f918c3cc4657f1f03399db56f9b747d676715', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '9628a8ef6e0384949b42f84db37d6c232563d38a', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'a5bc4dfed0e1aa4298683e63f3f484440f33d18b', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '91b719d15acdbe63fba5b8b8c53536d7d26e8ba5', part: "filter-body", class: 'filters__body' }, h("slot", { key: '6d2c5330a69838f08fddd9914491ec0d817ee3b8' })), h("div", { key: 'f34399e1c2243b4280a83b8ff1ad25725071513c', part: "footer", class: 'filters__actions' }, h("slot", { key: '344aeddb423a6f83959558a262afd200ca983a03', name: "footer" }))));
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
