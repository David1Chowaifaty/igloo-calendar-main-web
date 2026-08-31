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
        return (h("wa-card", { key: 'a7a7157e233474c26bbea1583501d64090d08b3f', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: 'e6e09c4af10017d88d727b15472559ba53222fb3', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '1bcc08e752c7407e16e8abde04884a4e99ad08e5', class: "filters__title-group" }, h("wa-icon", { key: '49ba2d97f5d520c718d505b4ca0b861323fcce80', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: 'fc7fc52870efdd17994dc8e28fd33299ecb5b9dc', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: 'f7c446ed354dfb5cd52889eb40eed1d2ceb4c11c', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '45834d28ac693b69da02cbc283062f6b5254af41', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '73b26742b2f711275dcd6c2978d6011bed9ec739', part: "filter-body", class: 'filters__body' }, h("slot", { key: '8b25487ecb0646298f006fce567dce9aa170321b' })), h("div", { key: '1ff80f9caf563a5436029044fa7de34dfba4f8c8', part: "footer", class: 'filters__actions' }, h("slot", { key: '384b1a0e11ce532325c394e2e986c52a08678c68', name: "footer" }))));
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
