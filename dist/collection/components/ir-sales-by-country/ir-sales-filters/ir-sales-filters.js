import { h } from "@stencil/core";
import locales from "../../../stores/locales.store";
import moment from "moment";
export class IrSalesFilters {
    constructor() {
        this.filters = {
            from_date: moment().add(-7, 'days').format('YYYY-MM-DD'),
            to_date: moment().format('YYYY-MM-DD'),
            rooms_status: { code: '' },
            show_previous_year: false,
        };
        this.collapsed = false;
    }
    componentWillLoad() {
        console.log(this.baseFilters);
    }
    // private updateFilter(params: Partial<ModifiedSalesFilters>) {
    //   this.filters = { ...this.filters, ...params };
    // }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    render() {
        return (h("div", { key: '4aaef3dd154471e4853c6fde7dd9d1614cae54f1', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '367353eb59e1ef03a11329f975b52e4f869add42', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'ff80cdb123a77d301393c8170bed1ffb81026d64', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '9505719cf96fe17c4ab3ce94a9824be035fe8406', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '965277809e62bf6948db0c9af9ecc65ccdb1fc33', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: 'b67f002b427becab1fab8ad3de7f338acc2e2633', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '9b698c89a4169f2abaecdf3e89daf2ee49c19a53', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '14c5cbcb2d42cae2bd53bfa562443d5268e460aa', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '6cf8f36d78d2088e0735904cb093e2bac4201e4f', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '13eacdad80da75eb41c6e43a1d500975eb1e3b02', class: "pt-1 filter-group" }, h("label", { key: '057f984d9322295ff9b09152cc976ee1af8a6043', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: '421ec5b203902161ffaac754aa4c8fc3da6e2999', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '1eea44552a4bd2c6bac6d3804026fba5d14b07e1', class: "pt-1 filter-group" }, h("label", { key: '14743cf2ce24fb8181344dbb96fc02f0eb1a8a23', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: '1e7e2a399d6a017ebd0ec801e10b4f08986f8e08', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '138dd405fd1c534257b3248c3658dc0d9d218f68', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '6b155b9a5995159bc65244c8ce0c74e1b3e83b1f', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'ae3cb3d928e63bc2f966dee743c9ff4b1cdda911', withOverlay: false }))), h("div", { key: '768c89abb65409643de7898397a288c33c13de36', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'a823affd658ceacff8cd72b2c78d11137af7c093', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: '648f271bc1900bd992895cb54dd4f38ddb0dff6e', checkboxId: "compare-prev-year" })), h("div", { key: 'c309f2e87a1b80e2ee9e66b74eb4ceabb32e3cae', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '3a36c66bee44b2271d6260b170ece0292f1ebf4e', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '5f50769c089771c223f76b8d0744ead962425601', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
    }
    static get is() { return "ir-sales-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-sales-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-sales-filters.css"]
        };
    }
    static get properties() {
        return {
            "isLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "is-loading",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "filters": {},
            "collapsed": {}
        };
    }
    static get events() {
        return [{
                "method": "applyFilters",
                "name": "applyFilters",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "SalesFilters",
                    "resolved": "{ from_date: string; to_date: string; show_previous_year: boolean; rooms_status: { code: string; }; }",
                    "references": {
                        "SalesFilters": {
                            "location": "import",
                            "path": "./types",
                            "id": "src/components/ir-sales-by-country/ir-sales-filters/types.ts::SalesFilters"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-sales-filters.js.map
