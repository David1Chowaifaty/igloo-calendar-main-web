import { h } from "@stencil/core";
import { t } from "../../services/locale/t";
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
        return (h("wa-card", { key: 'f5135db8520e98a3ee707abf31c5937361b86a5d', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '2d2b5ecae1fef2bf7f282f77104849a15b53fecd', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'eb8bfd8c7ae80b20d1182d2350b978843443094a', class: "filters__title-group" }, h("wa-icon", { key: 'eea1ccb026c44a96dc899a3ed12d859a3020a300', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '7dce56421aac56deaa5d719935384dd04ce4bf65', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: '1dc806ccb821f37a79825d3ee57274226cc08741', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '3b0c86db5cb3abe581236f49ed04475c06e0d754', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '05cdf7f1e098b55bdc74aa990a965a6a90573fe9', part: "filter-body", class: 'filters__body' }, h("slot", { key: '2459f76b18b261ef10c4e47fd05f831736e37b0a' })), h("div", { key: 'f480e898afd8d45bf0729e28775cc45e60ae4dac', part: "footer", class: 'filters__actions' }, h("slot", { key: '00f768675ea0199ca392c8da55ab197bea8f0a7c', name: "footer" }))));
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
