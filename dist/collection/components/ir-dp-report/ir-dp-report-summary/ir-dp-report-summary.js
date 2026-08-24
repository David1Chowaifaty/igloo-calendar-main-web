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
        return (h(Host, { key: '07d13bdb9c538edf3cfd156f2d29e696bae027e9' }, h("div", { key: '163fbdb4e8003027f3437f5bcdf0d78018a471c8', class: "dp-summary__row" }, h("ir-metric-card", { key: 'd8543a826617ab7f84f6f6f03c80f0a818f2cd4f', class: "dp-summary__metric", icon: "sack-dollar", label: "Total Profit Generated", loading: loading, value: formatAmount(currencySymbol, summary.total_profit), trend: dpContributionPct, caption: `from ${summary.total_bookings} booking${summary.total_bookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: '78a37960c8a61d62c082035febf2aabb7bf19ea6', class: "dp-summary__metric", icon: "chart-line", label: "Bookings Above Base", loading: loading, value: summary.bookings_above_base, caption: `of ${summary.total_bookings} booking${summary.total_bookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: '378cd939dd4befc5f0f220a18be35c0f9db8a1e9', class: "dp-summary__metric --gain", icon: "arrow-trend-up", label: "Avg Gain", loading: loading, value: formatAmount(currencySymbol, summary.avg_gain), caption: `from ${summary.bookings_above_base} booking${summary.bookings_above_base === 1 ? '' : 's'}` }), h("ir-metric-card", { key: '80510b88a639e0c35ad1a7f50fac8693a14265d5', class: "dp-summary__metric --loss", icon: "arrow-trend-down", label: "Avg Incentive Reduction", loading: loading, value: formatAmount(currencySymbol, summary.avg_loss), caption: `from ${summary.bookings_below_base} booking${summary.bookings_below_base === 1 ? '' : 's'}` }))));
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
