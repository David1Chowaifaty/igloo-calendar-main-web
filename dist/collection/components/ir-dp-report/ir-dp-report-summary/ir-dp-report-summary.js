import { Host, h } from "@stencil/core";
import dp_report from "../../../stores/dp_report.store";
import { formatAmount, formatCount } from "../../../utils/number";
import { t } from "../../../services/locale/t";
export class IrDpReportSummary {
    render() {
        const summary = dp_report.summary;
        const currencySymbol = dp_report.rows[0]?.currencySymbol ?? '$';
        const loading = dp_report.isLoading;
        const totalBookings = summary.total_bookings;
        const totalNbOfProfitableBooking = dp_report.rows.filter(row => row.profit > 0).length;
        // const totalRevenue = dp_report.rows.reduce((sum, row) => sum + row.accommodationGross, 0);
        // const dpContributionPct = totalRevenue !== 0 ? Number(((summary.total_profit / totalRevenue) * 100).toFixed(1)) : 0;
        return (h(Host, { key: '794544b16569446bee215e1d132c1721c7619ae0' }, h("div", { key: 'f358dd084b2589c43f16008211c04fead2a05093', class: "dp-summary__row" }, h("ir-metric-card", { key: 'b8a1ce032fae508bbc782a6bc1d5951776d32e77', class: "dp-summary__metric", icon: "sack-dollar", label: t('Lcz_ExtraProfitGenerated', { fallback: 'Extra Profit Generated' }), loading: loading, value: formatAmount(currencySymbol, summary.total_profit),
            // trend={dpContributionPct}
            caption: t('Lcz_FromNOfMBookings', { fallback: 'from %1 / %2 booking(s)', params: [formatCount(totalNbOfProfitableBooking), formatCount(totalBookings)] }) }), h("ir-metric-card", { key: 'bc00ed9920862c96cb91a1dde53dff5eb1b66ed2', class: "dp-summary__metric --gain", icon: "arrow-trend-up", label: t('Lcz_AvgGain', { fallback: 'Avg Gain' }), loading: loading, value: formatAmount(currencySymbol, summary.avg_gain),
            // caption={`from ${summary.bookings_above_base} booking${summary.bookings_above_base === 1 ? '' : 's'}`}
            caption: t('Lcz_PerBooking', { fallback: 'per booking' }) }), h("ir-metric-card", { key: '048b9053d5baa7477ffb19005f223f6149926b8f', class: "dp-summary__metric --loss", icon: "arrow-trend-down", label: t('Lcz_ExtraBookingsFromAppliedIncentives', { fallback: 'Extra Bookings from Applied Incentives' }), loading: loading, value: summary.bookings_below_base, caption: t('Lcz_AmountPerBookingAverageReduction', { fallback: '%1/booking(s) average reduction', params: [formatAmount(currencySymbol, summary.avg_loss)] }) }))));
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
