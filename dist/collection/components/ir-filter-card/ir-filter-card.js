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
        return (h("wa-card", { key: 'bc4686654d2c762df6debc5849e1bf1b6df68d6a', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '838911a315a445532be3c3fb36cc3728ef4e5c53', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'a222128d5e9ebb254aa57a29604c859e943ef097', class: "filters__title-group" }, h("wa-icon", { key: '5b1d72de2cc1a4347cffa52d0df18386c5a55a6b', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '699d5c4201925252f79c505f6e84636136d28286', class: "filters__title" }, "Filter")), !this.isDesktop && (h("ir-custom-button", { key: '926d6f8f16426c01cfbbea065de4612b411a07dc', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'ac729376c0d1a1c1741f5c0c9a98591f55478f80', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '80ce03487255019545b3d9273e5fbbf7dc3217c7', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'ca10d09670d1d43902977c96a37aae923398eb60' })), h("div", { key: '8844dd2c68d35c504111fc69387ae9cd3c1b96de', part: "footer", class: 'filters__actions' }, h("slot", { key: '47f8e7de21cb8443a6a170afbacce6d3d9b33576', name: "footer" }))));
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
