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
        return (h("wa-card", { key: 'd2c856fc456b51106fd1ccc54c314836502469ce', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '97d4573fd1f4c1f20e25b75ac2e8132c0804c0e9', part: "header", class: "filters__header", slot: "header" }, h("div", { key: 'f5230d13051cd52c1199b2add26fb4b9906e6638', class: "filters__title-group" }, h("wa-icon", { key: 'b890b34327d0eeca3b6f3a625cf673f9ff9a8b9a', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '8c19abec20a3d10753e8754c283dd93a58df22f1', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: '7bcb55d3f69cf3161aeba658b5a279ba92b9fa54', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '6949d4b48afc51bc4140012366a411a75b5179a3', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '2ed6100adacda3487ff732ce67fd999aade9497c', part: "filter-body", class: 'filters__body' }, h("slot", { key: 'bc4d80a8fc676aaf6a057667c841498831f191d9' })), h("div", { key: 'b7159e9e1e753a9cce871e4533442214c1954022', part: "footer", class: 'filters__actions' }, h("slot", { key: '3290ce8223d5e497827d70491f80281d541c5959', name: "footer" }))));
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
