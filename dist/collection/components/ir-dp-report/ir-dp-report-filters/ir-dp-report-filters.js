import { h } from "@stencil/core";
import moment from "moment";
import dp_report, { updateDpReportFilters } from "../../../stores/dp_report.store";
export class IrDpReportFilters {
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
        return (h("div", { key: '9898e3dfa3c10b055995d892d41fa835462aa581', class: "dp-report-filters" }, h("ir-date-range-filter", { key: '09cbe401d489a1ad6a09c889f86cb7df6f28970b', class: "dp-report-filters__date-picker", fromDate: dp_report.filters.from, toDate: dp_report.filters.to, maxDate: moment().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("wa-tooltip", { key: 'a2aaf69fc3cb5ca9b538383c5aa7676e7605d13c', for: "search-btn" }, "Search"), h("ir-custom-button", { key: 'd74a7dfb2a29cbb4731f1046f456ee4333f219c4', id: "search-btn", loading: dp_report.isLoading, disabled: dp_report.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: 'db2fc37313d15c0d6f4abe4044c89a30a01b3c81', name: "magnifying-glass" }))));
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
