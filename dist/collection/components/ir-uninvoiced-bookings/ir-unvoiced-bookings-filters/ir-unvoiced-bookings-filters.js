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
        return (h("div", { key: 'a9bcf9bb2be0e4a68f03adb64d10e558e1579ff1', class: "uninvoiced-bookings-filters" }, h("ir-date-range-filter", { key: 'fef64ccdf222d87c2f0a30fa5dc08d840a7f6ff4', class: "uninvoiced-bookings-filters__date-picker", fromDate: uninvoiced_bookings.filters.from, toDate: uninvoiced_bookings.filters.to, maxDate: moment().format('YYYY-MM-DD'), showQuickActions: true, quickDates: this.quickDates, quickDatesMode: "range", withClear: false, selectionMode: "auto", onDatesChanged: this.handleDatesChanged }), h("div", { key: 'dde64e2f1b7f82b21e6886731a4b93c426aeb038', class: "uninvoiced-bookings-group" }, h("wa-select", { key: 'd1d9f4fdd849c3bce9d39403db7ee2162aeb63b9', onchange: this.handleSourceChanged, value: uninvoiced_bookings.filters.source, size: "s" }, h("wa-option", { key: '4b87b56e0624b9dd57aa3609c6cae0e1a6a4daa9', value: "" }, t('Lcz_AllChannels', { fallback: 'All channels' })), uninvoiced_bookings.channels.map(channel => (h("wa-option", { key: channel.value, value: channel.value }, channel.name)))), h("ir-custom-button", { key: 'a9b240509ef5d779b6e25ff13efc6730227ff299', id: "uninvoiced-bookings-search-btn", loading: uninvoiced_bookings.isLoading, disabled: uninvoiced_bookings.isLoading, onClickHandler: this.handleSearch, variant: "neutral", appearance: "outlined" }, h("wa-icon", { key: '7f78c3ee6e3e330c21a6c42c5c3acb7be1b5c065', name: "magnifying-glass" }))), h("wa-tooltip", { key: '25b924811e5d6c32ec94c24b331888ab71b6f481', for: "uninvoiced-bookings-search-btn" }, t('Lcz_Search', { fallback: 'Search' }))));
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
