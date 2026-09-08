import { Host, h } from "@stencil/core";
import dp_report from "../../../stores/dp_report.store";
import { formatAmount } from "../../../utils/utils";
export class IrDpReportSummary {
    render() {
        const summary = dp_report.summary;
        const currencySymbol = dp_report.rows[0]?.currencySymbol ?? '$';
        const loading = dp_report.isLoading;
        const totalBookings = summary.total_bookings;
        const totalNbOfProfitableBooking = dp_report.rows.filter(row => row.profit > 0).length;
        // const totalRevenue = dp_report.rows.reduce((sum, row) => sum + row.accommodationGross, 0);
        // const dpContributionPct = totalRevenue !== 0 ? Number(((summary.total_profit / totalRevenue) * 100).toFixed(1)) : 0;
        return (h(Host, { key: 'd484fa0acc3439ed2fa7b415e7f4af064e11e035' }, h("div", { key: '74828795ee7ad0fd3fe037541f87ebc03e40c99f', class: "dp-summary__row" }, h("ir-metric-card", { key: '162a6c900a5cc366d3336438e0ad91fd2a64170b', class: "dp-summary__metric", icon: "sack-dollar", label: "Extra Profit Generated", loading: loading, value: formatAmount(currencySymbol, summary.total_profit),
            // trend={dpContributionPct}
            caption: `from ${totalNbOfProfitableBooking} / ${totalBookings} booking${totalBookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: '1173db97c5aa33a8b1dd26ad156f87503102a822', class: "dp-summary__metric --gain", icon: "arrow-trend-up", label: "Avg Gain", loading: loading, value: formatAmount(currencySymbol, summary.avg_gain),
            // caption={`from ${summary.bookings_above_base} booking${summary.bookings_above_base === 1 ? '' : 's'}`}
            caption: `per booking` }), h("ir-metric-card", { key: '6c79092361d8fe255483fb6a49b9e51149e37a47', class: "dp-summary__metric --loss", icon: "arrow-trend-down", label: "Extra Bookings from Applied Incentives", loading: loading, value: summary.bookings_below_base, caption: `${formatAmount(currencySymbol, summary.avg_loss)}/booking${summary.bookings_below_base === 1 ? '' : 's'} average reduction` }))));
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
