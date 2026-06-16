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
        return (h("wa-card", { key: '1720c4081923a17eef82a80d4f7e33b668fd99c6', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '3218e4dcf5b018941deece79e58ff57857f4045e', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'cec7db05353903abebf17d4c0d80eee76214fd05', class: "filters__title-group" }, h("wa-icon", { key: 'bca79ccd0b7a61280d86985946dfbc8010b1f07c', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '6ad96f4f774a81aa7c2d829fbbe852d40a23a3da', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '73d8c85cd02e0417122da839a829547b30061d43', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '56fe6c61349d6285a9dbffacdebe230170169b54', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: 'f77a4a762c61ec608f6b8f837184775140dd25f2', part: "filter-body", class: 'filters__body' }, h("slot", { key: '14dfb7f937682f730cd105690f4cbecb390673e3' })), h("div", { key: 'aef1136a490f19281c8900ae23d0f578891dde76', part: "footer", class: 'filters__actions' }, h("slot", { key: '0b16472d20a5f7a8d6cad0552a4b27c0d2066790', name: "footer" }))));
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
