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
        return (h("div", { key: '9e10328f0d9ac3b490a8666f5e4b870b4019ebc8', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '948c5dae40e838a0d171094eaeb4b27eeaadc07d', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '271307bd4fbc1f55db9f3a4f380dc0f37f0d0646', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: 'deebc09d38493333aef981fb0868dee2d8c9ad4e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '9c6cf6c6080ba887367cb9bc2c6c592b797f6913', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '056d401a462b36fe912458a3c44eaa74c0d61633', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: '438da2cd7065d4f8bf84b5e370802a631e097049', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'a5093b68512a6eeabff610fe1d8a133c66a50ff0', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: 'be02eb6ccebb3878ee62095327bad4589768c7c9', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: 'ed212b6dbdc1093c1e11ad37300d74a5bd817626', class: "pt-1 filter-group" }, h("label", { key: 'a0920408fa2b0ce95dd30f0eb39da91aeab0b035', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: '01d01fc1247fdc459b043190dca768fd293ca079', select_id: "rooms", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '55cdbff48298ae1e07a4746b12d2656023ab6158', class: "pt-1 filter-group" }, h("label", { key: '8c3ddfddfd10950a1b1c5e732ca717addac5cdf1', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: 'a36f13b67e573a78df4a44ced556c6c3c298ad23', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: 'bb53f7d1ee8f22f98e7a988651323d174ef9e8ea', select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '1764e1d1df7157cd3f3781a69b1e05e2fac49675', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '240959d5871a0836e4e26430b838509463ba6b67', withOverlay: false }))), h("div", { key: '59b5c6933b210d92943349b66e5964e933e52049', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '5db8bb467f5335269c850d0760fca2695b0398d6', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: '5ccab3d8f05a702014447ca5bbcbadf340e89545', checkboxId: "compare-prev-year" })), h("div", { key: 'aa527583b0aaf87dd7018cc51111d89f7551a5bf', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'b272cbf6aa3a6ea121c2eb1cbcdba0d8a91110ee', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'a8f9333ae49c56ae97053b6e1c8e2313b46625d4', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
