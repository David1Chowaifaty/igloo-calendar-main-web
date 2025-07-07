import { h } from "@stencil/core";
import locales from "../../../stores/locales.store";
import moment from "moment";
export class IrSalesFilters {
    constructor() {
        this.collapsed = false;
        this.dates = {
            from: moment(),
            to: moment().add(1, 'days'),
        };
    }
    componentWillLoad() {
        this.filters = this.baseFilters;
    }
    updateFilter(params) {
        this.filters = Object.assign(Object.assign({}, this.filters), params);
    }
    applyFiltersEvt(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.applyFilters.emit(this.filters);
    }
    resetFilters(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.filters = this.baseFilters;
        this.applyFilters.emit(this.filters);
    }
    render() {
        return (h("div", { key: 'c7d33b86376a9356f817fcd094fc9152600e5cd7', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '0b6200207020d59091667ca970ba63b5c524f891', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: '8f12cd2134e07dc790f5507989571c1a3ac55933', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '5427082023ec9b524e8dd023ad229a081c46873d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: 'f413d86718add951c16fcbdf864f450af1399b8e', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '5892834fe59bd86dcfcdf79185fb5f709ae6f3ce', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'd9b830a1c65882fc4a363c1ed78c0782b13b4bfa', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: 'b82d24dcaf0ee7acfbe2370b0e9faff0a3ee07f5', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '6f734a50197037d0422b2cf41ce1c87fba7726df', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '6100db8d5eecd8b8e9cd58222f3ffec241297dbb', class: "pt-1 filter-group" }, h("label", { key: '0e0fcf6137234028ba161ce86bbb13022fe0c0d4', htmlFor: "rooms", class: "m-0 p-0" }, "Rooms"), h("ir-select", { key: '2037f60fa9e75c08184a22fe410b0439df90dec1', select_id: "rooms", LabelAvailable: false, showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: 'cdd4e42b2aae8e7d96aa32797a48424527a1b09b', class: "pt-1 filter-group" }, h("label", { key: '8f0f38bc79a11c8dbf5f184587fb67cd0916f5da', htmlFor: "period", class: "p-0 m-0" }, "Selected Period"), h("div", { key: 'd581312a6213bbb6d1a92479f1fbe13570ffa09c', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: '6f0beced9e14396f31041a43f227216c62ae8e0a', onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = moment();
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: today.format('YYYY-MM-DD'),
                    FROM_DATE: today.add(-dateDiff, 'days').format('YYYY-MM-DD'),
                });
            }, select_id: "period", LabelAvailable: false, showFirstOption: false, data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: 'ab524a20f3f543a45c61b4096d7377f520838879', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: '2031305d23e36bcb6de94a9b94f9031e3cafdfbc', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate } = e.detail;
                this.updateFilter({
                    FROM_DATE: fromDate.format('YYYY-MM-DD'),
                    TO_DATE: toDate.format('YYYY-MM-DD'),
                });
                this.dates = { from: fromDate, to: toDate };
            }, fromDate: this.dates.from, toDate: this.dates.to, maxDate: moment().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: 'bcd5d88c76ffe1cf2620e11fa309d3e42cd12398', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: '52db038a82c447d5f90907289893a868a4dc8f7d', htmlFor: "compare-prev-year" }, "Compare with previous year"), h("ir-checkbox", { key: 'f8abef64ebb8aba4a7400fbd67051bda7113ae50', checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: 'd5a1bd45046c49407a55043e04a57f4a1f85dfe6', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: 'a9db4064201c88ba76655c0317f9977654acdbaf', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: 'f11faca34e1139f8f129ed896fb3739a57b6c09d', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
            },
            "baseFilters": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "CountrySalesFilter",
                    "resolved": "Omit<CountrySalesParams, \"is_export_to_excel\" | \"AC_ID\"> & { include_previous_year: boolean; }",
                    "references": {
                        "CountrySalesFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-country/types.ts::CountrySalesFilter"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get states() {
        return {
            "filters": {},
            "collapsed": {},
            "dates": {}
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
                    "original": "CountrySalesFilter",
                    "resolved": "Omit<CountrySalesParams, \"is_export_to_excel\" | \"AC_ID\"> & { include_previous_year: boolean; }",
                    "references": {
                        "CountrySalesFilter": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-sales-by-country/types.ts::CountrySalesFilter"
                        }
                    }
                }
            }];
    }
}
//# sourceMappingURL=ir-sales-filters.js.map
