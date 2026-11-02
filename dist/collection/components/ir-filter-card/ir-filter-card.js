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
        return (h("wa-card", { key: 'a9eeb54675a271c0f861918acba06b38240b87cf', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: 'b43fa57014039c280a97cb29cb53cd4b3a4ec727', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '7ed8139b72b15533941c2c6713fec90ef751eca8', class: "filters__title-group" }, h("wa-icon", { key: 'c8aab8e1522e84aa628fc5742a4ced5663e78d66', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '430b979f8247a0e4c1f5a8ea1605a44bfc92c816', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: '73a3fafaa597e2cde6382b488857c5121a499c01', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: 'dd33c05c2cf4526a0b4d6741bf142e371860a2a4', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '214bc4b801da11e2702ee2b8f173b83a1172069b', part: "filter-body", class: 'filters__body' }, h("slot", { key: '9340d7f71e4606ac0cdf638e93816c3c68e32df5' })), h("div", { key: '8d48e41fa1be1be92630e8c097f6f8682492dcca', part: "footer", class: 'filters__actions' }, h("slot", { key: 'e7a741bfc96f584d4e6c77f2fb0914a3baf8b7a9', name: "footer" }))));
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
