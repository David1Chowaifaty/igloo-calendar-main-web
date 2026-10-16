import { h } from "@stencil/core";
import moment from "moment";
import dp_report, { updateDpReportFilters } from "../../../stores/dp_report.store";
export class IrDpReportFilters {
    /**
     * Earliest selectable date. Set by the parent once it discovers that the property's
     * data does not go back the full default lookback window.
     */
    minDate;
    /**
     * Emitted only when the user clicks Search. The shared store (updated as soon as the
     * dates change) keeps every filter instance (chart tab + table tab) visually in sync
     * regardless of whether a search has been triggered yet.
     */
    dpFiltersChange;
    /**
     * `getDate` is the "N ago" anchor. Picked from the from-side it sets only the from-date
     * (see `quickDatesMode="range"` on ir-date-range-filter); picked from the to-side it sets
     * from-date to this anchor *and* to-date to today, producing a complete last-N-days range.
     */
    quickDates = [
        { label: '7 Days Ago', getDate: () => moment().subtract(7, 'days') },
        { label: '14 Days Ago', getDate: () => moment().subtract(14, 'days') },
        { label: '30 Days Ago', getDate: () => moment().subtract(30, 'days') },
        { label: '90 Days Ago', getDate: () => moment().subtract(90, 'days') },
    ];
    handleDatesChanged = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        const { from, to } = e.detail;
        if (!from || !to) {
            return;
        }
        updateDpReportFilters({ from, to });
    };
    handleSearch = () => {
        this.dpFiltersChange.emit({ from: dp_report.filters.from, to: dp_report.filters.to });
    };
    render() {
        return (h("div", { key: '2273c0e3b1212c2b94da186bd3bb8c85d4758ba9', class: "dp-report-filters" }, h("ir-date-range-filter", { key: 'f734b9ad922cb36748bc28d941bcecdf0b5a8728', class: "dp-report-filters__date-picker", fromDate: dp_report.filters.from, toDate: dp_report.filters.to, minDate: this.minDate, maxDate: moment().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("wa-tooltip", { key: 'b08babfe94fb5e43c9153393f7661cb7c639772b', for: "search-btn" }, "Search"), h("ir-custom-button", { key: 'e027f8b3c8b5904bac07670fe3462a074a939538', id: "search-btn", loading: dp_report.isLoading, disabled: dp_report.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: 'c4b45a0d83346c1742b081cd9515322fff6b020b', name: "magnifying-glass" }))));
    }
    static get is() { return "ir-dp-report-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dp-report-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dp-report-filters.css"]
        };
    }
    static get properties() {
        return {
            "minDate": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Earliest selectable date. Set by the parent once it discovers that the property's\ndata does not go back the full default lookback window."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "min-date"
            }
        };
    }
    static get events() {
        return [{
                "method": "dpFiltersChange",
                "name": "dpFiltersChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted only when the user clicks Search. The shared store (updated as soon as the\ndates change) keeps every filter instance (chart tab + table tab) visually in sync\nregardless of whether a search has been triggered yet."
                },
                "complexType": {
                    "original": "{ from: string; to: string }",
                    "resolved": "{ from: string; to: string; }",
                    "references": {}
                }
            }];
    }
}
