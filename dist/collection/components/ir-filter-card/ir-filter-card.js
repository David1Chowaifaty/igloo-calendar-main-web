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
        return (h("wa-card", { key: '14db783cda207fe6aa73bd9ebbf83caba9a33f42', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '60a0ace11cdf55fa36dd1b6905c90d9b281a1c01', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'd8f63bb0cece333922365d4ba88dcbb7dc3d91c6', class: "filters__title-group" }, h("wa-icon", { key: '3f567c0f1f7d852f7948a5e72178d17522d8e3de', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '4f14201d680beb28b0cc89c62b9130b8d2cfb7cc', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '1ac1b073332f87a9881cd7b812a40b95b8900597', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '5d4e2f8545934d31275493e20de30d49b770802e', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: 'b117b4bd83dbec7b85da01dcf76254077ffe1e16', part: "filter-body", class: 'filters__body' }, h("slot", { key: '63a612073a536b0640395bfe99e06aa22d12cd71' })), h("div", { key: '03a0290be9c4cc9ca68c7c1a70ab0cd9312d4546', part: "footer", class: 'filters__actions' }, h("slot", { key: '782da9e3d2a411f444721eda288a8280e22c32d5', name: "footer" }))));
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
//# sourceMappingURL=ir-filter-card.js.map
