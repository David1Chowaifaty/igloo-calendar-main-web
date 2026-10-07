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
        return (h(Host, { key: '09b363272c5b7af1c19b5b637dff77a2a17905f3' }, h("div", { key: '715903aa1ed36833d6c7abbad2dfd49263eb717f', class: "dp-summary__row" }, h("ir-metric-card", { key: '4d613d60e2161c3c7129d6cc017af1d61d7280fb', class: "dp-summary__metric", icon: "sack-dollar", label: t('Lcz_ExtraProfitGenerated', { fallback: 'Extra Profit Generated' }), loading: loading, value: formatAmount(currencySymbol, summary.total_profit),
            // trend={dpContributionPct}
            caption: t('Lcz_FromNOfMBookings', { fallback: 'from %1 / %2 booking(s)', params: [formatCount(totalNbOfProfitableBooking), formatCount(totalBookings)] }) }), h("ir-metric-card", { key: 'f742494efc371914a64f9d50be75ebb4d4201293', class: "dp-summary__metric --gain", icon: "arrow-trend-up", label: t('Lcz_AvgGain', { fallback: 'Avg Gain' }), loading: loading, value: formatAmount(currencySymbol, summary.avg_gain),
            // caption={`from ${summary.bookings_above_base} booking${summary.bookings_above_base === 1 ? '' : 's'}`}
            caption: t('Lcz_PerBooking', { fallback: 'per booking' }) }), h("ir-metric-card", { key: '2a0cefa52fe91034d6cf0362d94231b7b8d322d9', class: "dp-summary__metric --loss", icon: "arrow-trend-down", label: t('Lcz_ExtraBookingsFromAppliedIncentives', { fallback: 'Extra Bookings from Applied Incentives' }), loading: loading, value: summary.bookings_below_base, caption: t('Lcz_AmountPerBookingAverageReduction', { fallback: '%1/booking(s) average reduction', params: [formatAmount(currencySymbol, summary.avg_loss)] }) }))));
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
