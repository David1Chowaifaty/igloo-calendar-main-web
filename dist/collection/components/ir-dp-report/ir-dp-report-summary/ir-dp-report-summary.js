import { Host, h } from "@stencil/core";
import dp_report from "../../../stores/dp_report.store";
import { formatAmount } from "../../../utils/utils";
export class IrDpReportSummary {
    render() {
        const summary = dp_report.summary;
        const currencySymbol = dp_report.rows[0]?.currencySymbol ?? '$';
        const loading = dp_report.isLoading;
        const totalRevenue = dp_report.rows.reduce((sum, row) => sum + row.accommodationGross, 0);
        const dpContributionPct = totalRevenue !== 0 ? Number(((summary.total_profit / totalRevenue) * 100).toFixed(1)) : 0;
        return (h(Host, { key: '76b31afae69efda9c1424bd7ccecf6d1896614e5' }, h("div", { key: '5bf281a759ea463ebf0da49efe829c4d9816f2a8', class: "dp-summary__row" }, h("ir-metric-card", { key: '3249349cd4a5fa5093c6a9494e70ea13bd9b6780', class: "dp-summary__metric", icon: "sack-dollar", label: "Total Profit Generated", loading: loading, value: formatAmount(currencySymbol, summary.total_profit), trend: dpContributionPct, caption: `from ${summary.total_bookings} booking${summary.total_bookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: 'd3fd07f94a9ec6196dacee668f6ae2add9349a44', class: "dp-summary__metric", icon: "chart-line", label: "Bookings Above Base", loading: loading, value: summary.bookings_above_base, caption: `of ${summary.total_bookings} booking${summary.total_bookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: '5d423f05d6ba7f196ae51620759d4b9b04cbe1fa', class: "dp-summary__metric --gain", icon: "arrow-trend-up", label: "Avg Gain", loading: loading, value: formatAmount(currencySymbol, summary.avg_gain), caption: `from ${summary.bookings_above_base} booking${summary.bookings_above_base === 1 ? '' : 's'}` }), h("ir-metric-card", { key: 'd7083a225f102e48c0ac98a6e454b0eb35162737', class: "dp-summary__metric --loss", icon: "arrow-trend-down", label: "Avg Incentive Reduction", loading: loading, value: formatAmount(currencySymbol, summary.avg_loss), caption: `from ${summary.bookings_below_base} booking${summary.bookings_below_base === 1 ? '' : 's'}` }))));
    }
    static get is() { return "ir-dp-report-summary"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dp-report-summary.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dp-report-summary.css"]
        };
    }
}
