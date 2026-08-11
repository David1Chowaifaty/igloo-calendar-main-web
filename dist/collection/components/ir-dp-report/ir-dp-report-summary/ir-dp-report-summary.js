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
        return (h(Host, { key: 'e6db6210f634a2b9a217a69b2c056845d96ecf97' }, h("div", { key: 'a02928e680bb1e46c9b40dc94570da2db03bfbff', class: "dp-summary__row" }, h("ir-metric-card", { key: 'e7fef70d3d048cc8fdfccaecea73e18e70deaa7a', class: "dp-summary__metric", icon: "sack-dollar", label: "Total Profit Generated", loading: loading, value: formatAmount(currencySymbol, summary.total_profit), trend: dpContributionPct, caption: `from ${summary.total_bookings} booking${summary.total_bookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: '7a592ab384ecaddb023f1556649c79d13e95a47b', class: "dp-summary__metric", icon: "chart-line", label: "Bookings Above Base", loading: loading, value: summary.bookings_above_base, caption: `of ${summary.total_bookings} booking${summary.total_bookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: 'df07be20fdb5cbd48621978beb4998d92ef2f9df', class: "dp-summary__metric --gain", icon: "arrow-trend-up", label: "Avg Gain", loading: loading, value: formatAmount(currencySymbol, summary.avg_gain), caption: `from ${summary.bookings_above_base} booking${summary.bookings_above_base === 1 ? '' : 's'}` }), h("ir-metric-card", { key: '8a4dd55be302a404887473530246e56cdb0c273d', class: "dp-summary__metric --loss", icon: "arrow-trend-down", label: "Avg Incentive Reduction", loading: loading, value: formatAmount(currencySymbol, summary.avg_loss), caption: `from ${summary.bookings_below_base} booking${summary.bookings_below_base === 1 ? '' : 's'}` }))));
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
