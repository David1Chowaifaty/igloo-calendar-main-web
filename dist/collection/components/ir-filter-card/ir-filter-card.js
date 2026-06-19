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
        return (h("wa-card", { key: 'bc3bbf520347f431faadaf0ee60f19aacc97f51d', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: 'a6726975f4687cb6c137dcd9ac75b8a0bd1780be', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '5b46213f425836367d3c4658d22e3e6ff81927d6', class: "filters__title-group" }, h("wa-icon", { key: '1ae37823e909550bb066dbe30c62066851b6d3a9', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '6b4f9cd9d5ecef4b978109c5d5e41ab4816c9343', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '15f8e887321e1d46f998e83fae59cfdbb06e1abf', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '64a63ca908f3b586fc0659f9bca85cd247563d9a', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '1a6fd0d95d4de6f9c9712ad82c4973d3d6102c68', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'ee244700ef32aafa68e220df4e8a32f79d66529f' })), h("div", { key: '7b841a16f6f2fb165df19efdd335539d86d92685', part: "footer", class: 'filters__actions' }, h("slot", { key: 'c7be53dfa3b37601eb54d9523157d389d4c9d73b', name: "footer" }))));
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
