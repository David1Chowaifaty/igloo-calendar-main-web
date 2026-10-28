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
        return (h(Host, { key: '26fc69360d04e2cc9affdde764a35730c572265f' }, h("div", { key: '03a84571514ec5c80008af071485d45004ec4455', class: "dp-summary__row" }, h("ir-metric-card", { key: 'd09886d045b2e4be14142b35e30a76278e1992ba', class: "dp-summary__metric", icon: "sack-dollar", label: t('Lcz_ExtraProfitGenerated', { fallback: 'Extra Profit Generated' }), loading: loading, value: formatAmount(currencySymbol, summary.total_profit),
            // trend={dpContributionPct}
            caption: t('Lcz_FromNOfMBookings', { fallback: 'from %1 / %2 booking(s)', params: [formatCount(totalNbOfProfitableBooking), formatCount(totalBookings)] }) }), h("ir-metric-card", { key: 'cd60787b5d00b2245972ed42e7040897c344ef05', class: "dp-summary__metric --gain", icon: "arrow-trend-up", label: t('Lcz_AvgGain', { fallback: 'Avg Gain' }), loading: loading, value: formatAmount(currencySymbol, summary.avg_gain),
            // caption={`from ${summary.bookings_above_base} booking${summary.bookings_above_base === 1 ? '' : 's'}`}
            caption: t('Lcz_PerBooking', { fallback: 'per booking' }) }), h("ir-metric-card", { key: 'ac0d1098d21a9bcc1228822a027fa072c568377b', class: "dp-summary__metric --loss", icon: "arrow-trend-down", label: t('Lcz_ExtraBookingsFromAppliedIncentives', { fallback: 'Extra Bookings from Applied Incentives' }), loading: loading, value: summary.bookings_below_base, caption: t('Lcz_AmountPerBookingAverageReduction', { fallback: '%1/booking(s) average reduction', params: [formatAmount(currencySymbol, summary.avg_loss)] }) }))));
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
