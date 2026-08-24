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
        return (h("div", { key: 'bb4612f159c8c8faa86400d442a35a8e228de5fb', class: "uninvoiced-bookings-filters" }, h("ir-date-range-filter", { key: '3a4c2a80a3a47556589f4ea8ed619fa4f048f088', class: "uninvoiced-bookings-filters__date-picker", fromDate: uninvoiced_bookings.filters.from, toDate: uninvoiced_bookings.filters.to, maxDate: moment().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("div", { key: '01c3989afafbd57b597fa5d0de7da2c269665fb0', class: "uninvoiced-bookings-group" }, h("wa-select", { key: '781d7ce0594765aa78800ebe6411dad170a71813', onchange: this.handleSourceChanged, value: uninvoiced_bookings.filters.source, size: "s" }, h("wa-option", { key: '8521ccccac83c93a88e50b215480972e44941292', value: "" }, "All channels"), uninvoiced_bookings.channels.map(channel => (h("wa-option", { key: channel.value, value: channel.value }, channel.name)))), h("ir-custom-button", { key: '49381aad6cbd16ba93d76b93c1f06ea0731cddf0', id: "uninvoiced-bookings-search-btn", loading: uninvoiced_bookings.isLoading, disabled: uninvoiced_bookings.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: '99e964c463c6f4d5328098f03be4d370af03cf18', name: "magnifying-glass" }))), h("wa-tooltip", { key: 'e7f8c4549b2aab3bbce7809dbb1121ea262f3a32', for: "uninvoiced-bookings-search-btn" }, "Search")));
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
