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
        return (h(Host, { key: '58c9e2d27d7d07f59ba980bd4d446bb138e571cd' }, h("div", { key: '7f38cf9dbbf17fc9580e29fe6d8d6bee01ee7595', class: "dp-summary__row" }, h("ir-metric-card", { key: 'ff0ceb7f185030dc9e838332430319df3ec2623a', class: "dp-summary__metric", icon: "sack-dollar", label: "Extra Profit Generated", loading: loading, value: formatAmount(currencySymbol, summary.total_profit),
            // trend={dpContributionPct}
            caption: `from ${totalNbOfProfitableBooking} / ${totalBookings} booking${totalBookings === 1 ? '' : 's'}` }), h("ir-metric-card", { key: 'b82f90279aa716b0922cb81387fb4b1cf5d6529f', class: "dp-summary__metric --gain", icon: "arrow-trend-up", label: "Avg Gain", loading: loading, value: formatAmount(currencySymbol, summary.avg_gain),
            // caption={`from ${summary.bookings_above_base} booking${summary.bookings_above_base === 1 ? '' : 's'}`}
            caption: `per booking` }), h("ir-metric-card", { key: 'eca39ea28d432a7cb4587196583403acd994e6fd', class: "dp-summary__metric --loss", icon: "arrow-trend-down", label: "Extra Bookings from Applied Incentives", loading: loading, value: summary.bookings_below_base, caption: `${formatAmount(currencySymbol, summary.avg_loss)}/booking${summary.bookings_below_base === 1 ? '' : 's'} average reduction` }))));
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
