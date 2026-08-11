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
        return (h("div", { key: 'eb8b8c31c6300f8e821878a3ea273627b666569c', class: "dp-report-filters" }, h("ir-date-range-filter", { key: '3e389423ff4e11d06c51b40bc17c3ee7506546f2', class: "dp-report-filters__date-picker", fromDate: dp_report.filters.from, toDate: dp_report.filters.to, minDate: this.minDate, maxDate: moment().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("wa-tooltip", { key: 'f41faa6358ab3421ff7e0dbadf5727b990ba7f9f', for: "search-btn" }, "Search"), h("ir-custom-button", { key: '477f4ef2a2c4a42f69abe4d17a5a47ce3bfbf25f', id: "search-btn", loading: dp_report.isLoading, disabled: dp_report.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: 'e161d8f7d98cb61cbc34013d0e064b275f662d86', name: "magnifying-glass" }))));
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
