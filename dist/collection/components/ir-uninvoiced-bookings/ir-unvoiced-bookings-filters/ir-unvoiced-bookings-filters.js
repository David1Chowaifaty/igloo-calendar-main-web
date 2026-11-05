import { h } from "@stencil/core";
import moment from "moment";
import uninvoiced_bookings, { updateUninvoicedBookingsFilters } from "../../../stores/uninvoiced_bookings.store";
import { t } from "../../../services/locale/t";
import { formatCount } from "../../../utils/number";
export class IrUnvoicedBookingsFilters {
    uninvoicedBookingsFiltersChange;
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
        return (h("div", { key: '87b4bd65aa52b6b4facc19053e6e277061432442', class: "uninvoiced-bookings-filters" }, h("ir-date-range-filter", { key: '0f3c562af60a3bdc0ce3f8dae00016fe7994f71c', class: "uninvoiced-bookings-filters__date-picker", fromDate: uninvoiced_bookings.filters.from, toDate: uninvoiced_bookings.filters.to, maxDate: moment().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("div", { key: '875538850e3f17589b396ac7871bb4d0a3aa4947', class: "uninvoiced-bookings-group" }, h("wa-select", { key: '2eca19caf66ba7055a8f652e161ec373e546cbfc', onchange: this.handleSourceChanged, value: uninvoiced_bookings.filters.source, size: "s" }, h("wa-option", { key: '012ff25fc7720bde8653483834e98e8625d27b13', value: "" }, t('Lcz_AllChannels', { fallback: 'All channels' })), uninvoiced_bookings.channels.map(channel => (h("wa-option", { key: channel.value, value: channel.value }, channel.name)))), h("ir-custom-button", { key: '35517a4b3176ffb40ef87c28f165081b98380810', id: "uninvoiced-bookings-search-btn", loading: uninvoiced_bookings.isLoading, disabled: uninvoiced_bookings.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: 'c2051b455ff69b54d7ead59e539fa3e7a37a6f6d', name: "magnifying-glass" }))), h("wa-tooltip", { key: '4b423aa1ee714a59ec3390474c3f23e27a48f542', for: "uninvoiced-bookings-search-btn" }, t('Lcz_Search', { fallback: 'Search' }))));
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
