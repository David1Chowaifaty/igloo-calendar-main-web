import { h } from "@stencil/core";
import moment from "moment";
import dp_report, { updateDpReportFilters } from "../../../stores/dp_report.store";
import { t } from "../../../services/locale/t";
import { formatCount } from "../../../utils/number";
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
    get quickDates() {
        return [7, 14, 30, 90].map(days => ({
            label: t('Lcz_DaysAgo', { fallback: '%1 Days Ago', params: [formatCount(days)] }),
            getDate: () => moment().subtract(days, 'days'),
        }));
    }
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
        return (h("div", { key: '3458cd7fc6ed13d45d811cae6ae45410f2fca292', class: "dp-report-filters" }, h("ir-date-range-filter", { key: '3c477121ad3bd4a53a0f70a3fb3b037de5bacaa3', class: "dp-report-filters__date-picker", fromDate: dp_report.filters.from, toDate: dp_report.filters.to, minDate: this.minDate, maxDate: moment().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("wa-tooltip", { key: '2770064e9c7713572bff0996d854c0889f74d767', for: "search-btn" }, t('Lcz_Search', { fallback: 'Search' })), h("ir-custom-button", { key: '98a5fc3ede69920b9156cb63e2d95ba7fbb40267', id: "search-btn", loading: dp_report.isLoading, disabled: dp_report.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: '0929f84606f9f772e01f5b3adaad5532768edaff', name: "magnifying-glass" }))));
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
