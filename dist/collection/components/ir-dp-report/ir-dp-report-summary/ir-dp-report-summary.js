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
        return (h(Host, { key: '544cf0ae2f6ebef7d3de6d1899a0774743000464' }, h("div", { key: 'c927a43c56a09f886dea18f0c3855b3c73ae2fcf', class: "dp-summary__row" }, h("ir-metric-card", { key: '0795eedf210ab83ee3c8460baf88954a83b204a1', class: "dp-summary__metric", icon: "sack-dollar", label: "Total Profit Generated", loading: loading, value: formatAmount(currencySymbol, summary.total_profit), trend: dpContributionPct, caption: `from ${summary.total_bookings} booking${summary.total_bookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: 'cfe2ef062bae06611593d5a9f5717d33c0ca1b9c', class: "dp-summary__metric", icon: "chart-line", label: "Bookings Above Base", loading: loading, value: summary.bookings_above_base, caption: `of ${summary.total_bookings} booking${summary.total_bookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: '4360e9c0341037006aba0342d2fea2fcb1f6891b', class: "dp-summary__metric --gain", icon: "arrow-trend-up", label: "Avg Gain", loading: loading, value: formatAmount(currencySymbol, summary.avg_gain), caption: `from ${summary.bookings_above_base} booking${summary.bookings_above_base === 1 ? '' : 's'}` }), h("ir-metric-card", { key: '2d62b4485b47494f81cb58a0cbda4e8c69cdeeb6', class: "dp-summary__metric --loss", icon: "arrow-trend-down", label: "Avg Incentive Reduction", loading: loading, value: formatAmount(currencySymbol, summary.avg_loss), caption: `from ${summary.bookings_below_base} booking${summary.bookings_below_base === 1 ? '' : 's'}` }))));
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
