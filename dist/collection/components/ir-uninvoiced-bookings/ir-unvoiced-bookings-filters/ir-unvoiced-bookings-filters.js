import { h } from "@stencil/core";
import moment from "moment";
import uninvoiced_bookings, { updateUninvoicedBookingsFilters } from "../../../stores/uninvoiced_bookings.store";
export class IrUnvoicedBookingsFilters {
    uninvoicedBookingsFiltersChange;
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
        updateUninvoicedBookingsFilters({ from, to });
    };
    handleSourceChanged = (e) => {
        updateUninvoicedBookingsFilters({ source: e.target.value });
    };
    handleSearch = () => {
        this.uninvoicedBookingsFiltersChange.emit({
            from: uninvoiced_bookings.filters.from,
            to: uninvoiced_bookings.filters.to,
            source: uninvoiced_bookings.filters.source,
        });
    };
    render() {
        return (h("div", { key: '9bd658f2036914e23b730d78ab9725ca26b2e607', class: "uninvoiced-bookings-filters" }, h("ir-date-range-filter", { key: 'c91e4ea3e17be6e791a3c19d545efdde456ceff1', class: "uninvoiced-bookings-filters__date-picker", fromDate: uninvoiced_bookings.filters.from, toDate: uninvoiced_bookings.filters.to, maxDate: moment().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("div", { key: 'edb7a71d1de446590d44c05f2e0d7e539190fc87', class: "uninvoiced-bookings-group" }, h("wa-select", { key: '7f294fb0350df9526d1db2dc5d58b5ccef9d7b85', onchange: this.handleSourceChanged, value: uninvoiced_bookings.filters.source, size: "s" }, h("wa-option", { key: '763e88e921aa96d76495648b609084e67c7c9203', value: "" }, "All channels"), uninvoiced_bookings.channels.map(channel => (h("wa-option", { key: channel.value, value: channel.value }, channel.name)))), h("ir-custom-button", { key: 'd03d5a4d1c8418d147f6af6b4fd9d2600d5bf54d', id: "uninvoiced-bookings-search-btn", loading: uninvoiced_bookings.isLoading, disabled: uninvoiced_bookings.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: 'd65a4922b3aab3d1865078273a958bb987380816', name: "magnifying-glass" }))), h("wa-tooltip", { key: '008cc7d299425b7062c4785ad8ac26fcb4e1ca82', for: "uninvoiced-bookings-search-btn" }, "Search")));
    }
    static get is() { return "ir-unvoiced-bookings-filters"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-unvoiced-bookings-filters.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-unvoiced-bookings-filters.css"]
        };
    }
    static get events() {
        return [{
                "method": "uninvoicedBookingsFiltersChange",
                "name": "uninvoicedBookingsFiltersChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "complexType": {
                    "original": "{ from: string; to: string; source: string }",
                    "resolved": "{ from: string; to: string; source: string; }",
                    "references": {}
                }
            }];
    }
}
