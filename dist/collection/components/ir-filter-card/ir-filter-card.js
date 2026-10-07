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
        return (h("wa-card", { key: '6ccda90f597a914bde992093bd4b37f515dede7f', class: expanded ? '' : 'filters__card__collapsed' }, h("div", { key: '1a92ee071d66179be08d8e487c0541447ad5fcd7', part: "header", class: "filters__header", slot: "header" }, h("div", { key: '92683c1a2eb33977e22f683baa79f535ae95506c', class: "filters__title-group" }, h("wa-icon", { key: '1467a92140815c23c53fb996f490bc10f201b867', name: "filter", style: { fontSize: '1rem' } }), h("h4", { key: '1dac3df2f745d0b5311b22c0171d46f57a9a1f78', class: "filters__title" }, t('Lcz_Filter', { fallback: 'Filter' }))), !this.isDesktop && (h("ir-custom-button", { key: '7b7adb24ecfdc87e1afe63f1c725cfa7227e6a84', appearance: "plain", class: "filters__collapse-btn", variant: "neutral", id: "drawer-icon", "aria-expanded": expanded ? 'true' : 'false', "aria-controls": "hkTasksFiltersCollapse", onClickHandler: () => (this.collapsed = !this.collapsed) }, h("wa-icon", { key: '2bae01b6804770f3a4b1ea7eb9372b3d9de5e9df', style: { fontSize: '1rem' }, name: expanded ? 'eye-slash' : 'eye' })))), h("div", { key: '5db861f584ff05de4a400560d64ffff7ed8a6532', part: "filter-body", class: 'filters__body' }, h("slot", { key: '1f704dcda70758f2a654818a19966f8e656a1e50' })), h("div", { key: 'eac05413e135c0ea012f3bd98a2d2c9bbe7b9153', part: "footer", class: 'filters__actions' }, h("slot", { key: '2a9a1c02c253393cad46dc09a43b70340460118e', name: "footer" }))));
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
