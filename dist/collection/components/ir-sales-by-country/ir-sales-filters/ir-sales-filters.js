import { h } from "@stencil/core";
import locales from "../../../stores/locales.store";
import moment from "moment";
export class IrSalesFilters {
    constructor() {
        this.collapsed = false;
    }
    componentWillLoad() {
        this.filters = this.baseFilters;
        this.window = this.baseFilters.WINDOW.toString();
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
        var _a, _b;
        return (h("div", { key: 'a3062eb221673f30aedeae5e464b737622f7a31d', class: "card mb-0 p-1 d-flex flex-column sales-filters-card" }, h("div", { key: '89a1bde931e5121f3aea589d82dd16ca3dde2f95', class: "d-flex align-items-center justify-content-between sales-filters-header" }, h("div", { key: 'f28a83153df84ff8fa25ad513f56f3de9e511c88', class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, h("svg", { key: '5492f8534e7fd7dd0d81fdd6d0f7ac305295d7ff', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", height: 18, width: 18 }, h("path", { key: '93ffe6269a98675cc37fce1a554ad13d6078f15d', fill: "currentColor", d: "M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" })), h("h4", { key: '55286ec1dd235564f9f4a15aa38d40114ae4e5af', class: "m-0 p-0 flex-grow-1" }, locales.entries.Lcz_Filters)), h("ir-button", { key: 'd8957d8db4aab7f123c3d6e67cc8b0ce69126647', variant: "icon", id: "drawer-icon", "data-toggle": "collapse", "data-target": "#salesFiltersCollapse", "aria-expanded": this.collapsed ? 'true' : 'false', "aria-controls": "salesFiltersCollapse", class: "mr-1 collapse-btn toggle-collapse-btn", icon_name: this.collapsed ? 'closed_eye' : 'open_eye', onClickHandler: () => {
                this.collapsed = !this.collapsed;
            }, style: { '--icon-size': '1.6rem' } })), h("div", { key: '410bf37323c1f4ca11215228d105467db1e37016', class: "m-0 p-0 collapse filters-section", id: "salesFiltersCollapse" }, h("div", { key: '3ffdac6a27654234f98559fa94599649672defc4', class: "d-flex flex-column", style: { gap: '0.5rem' } }, h("fieldset", { key: '762d477602d8710b45992dae43139083041ae655', class: "pt-1 filter-group" }, h("label", { key: 'ddfa0cb6fba285718d320525420c0253046d2e2a', htmlFor: "rooms", class: "m-0 px-0", style: { paddingBottom: '0.25rem' } }, "Rooms"), h("ir-select", { key: '59cb20037f9f05ee8acb176a95fed0327e4f5f5c', selectedValue: (_a = this.filters) === null || _a === void 0 ? void 0 : _a.BOOK_CASE, select_id: "rooms", LabelAvailable: false, showFirstOption: false, onSelectChange: e => this.updateFilter({
                BOOK_CASE: e.detail,
            }), data: [
                { text: 'Booked', value: '001' },
                { text: 'Stayed', value: '002' },
            ] })), h("fieldset", { key: '1e7855540da59f44b5920686ab1e0c9e56c97b2a', class: "pt-1 filter-group" }, h("label", { key: '2a27e7591f91b5a1b46ee2c71a700e34fabf0a7e', htmlFor: "period", class: "px-0 m-0", style: { paddingBottom: '0.25rem' } }, "Selected period"), h("div", { key: '8d04675fb2b447eb3ce6d7177b8e53ad955bf080', class: "d-flex flex-column date-filter-group", style: { gap: '0.5rem' } }, h("ir-select", { key: 'f182a185e734fd77f32e3d340da4938cc4740be4', selectedValue: this.window, onSelectChange: e => {
                const dateDiff = Number(e.detail);
                const today = moment();
                this.updateFilter({
                    WINDOW: dateDiff,
                    TO_DATE: today.format('YYYY-MM-DD'),
                    FROM_DATE: today.add(-dateDiff, 'days').format('YYYY-MM-DD'),
                });
                this.window = e.detail;
            }, select_id: "period", LabelAvailable: false,
            // showFirstOption={false}
            firstOption: "...", data: [
                { text: 'For the past 7 days', value: '7' },
                { text: 'For the past 14 days', value: '14' },
                { text: 'For the past 30 days', value: '30' },
                { text: 'For the past 60 days', value: '60' },
                { text: 'For the past 90 days', value: '90' },
                { text: 'For the past 365 days', value: '365' },
            ] }), h("p", { key: '56c350514ccb13d6a000176d468bf119f81676f5', class: "m-0 p-0 text-center" }, "Or"), h("ir-range-picker", { key: 'c271219bb9772b71abab7ba99b945bce83995c6b', onDateRangeChanged: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                const { fromDate, toDate, wasFocused } = e.detail;
                this.updateFilter({
                    FROM_DATE: fromDate.format('YYYY-MM-DD'),
                    TO_DATE: toDate.format('YYYY-MM-DD'),
                });
                if (wasFocused)
                    this.window = '';
                // this.dates = { from: fromDate, to: toDate };
            }, fromDate: moment(this.filters.FROM_DATE, 'YYYY-MM-DD'), toDate: moment(this.filters.TO_DATE, 'YYYY-MM-DD'), maxDate: moment().format('YYYY-MM-DD'), withOverlay: false }))), h("div", { key: '0d976b5160d2a1b7aaf4fcb45548d1d01ac87e26', class: "d-flex align-items-center mt-1 mb-2 compare-year-toggle", style: { gap: '0.5rem' } }, h("label", { key: 'd88fc97cd3e69bbb6139fb0805bb5dc4f18dca61', htmlFor: "compare-prev-year", style: { paddingBottom: '0.25rem' } }, "Compare with previous year"), h("ir-checkbox", { key: '035ce1e224ffcbd1b2e8beeab1946766fa493aa4', checked: (_b = this.filters) === null || _b === void 0 ? void 0 : _b.include_previous_year, checkboxId: "compare-prev-year", onCheckChange: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.updateFilter({ include_previous_year: e.detail });
            } })), h("div", { key: '988bf5accc5c365097b9f7279b4c47503ee0d750', class: "d-flex align-items-center justify-content-end filter-actions", style: { gap: '1rem' } }, h("ir-button", { key: '3674fe0661e9b20661ea810da0d04cbcf3867ed9', btn_type: "button", "data-testid": "reset", text: locales.entries.Lcz_Reset, size: "sm", btn_color: "secondary", onClickHandler: e => this.resetFilters(e) }), h("ir-button", { key: '18e67c5e78df3cc0d96b8f2b83919d2c0c95bb63', btn_type: "button", "data-testid": "apply", isLoading: this.isLoading, text: locales.entries.Lcz_Apply, size: "sm", onClickHandler: e => this.applyFiltersEvt(e) }))))));
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
            "window": {}
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
