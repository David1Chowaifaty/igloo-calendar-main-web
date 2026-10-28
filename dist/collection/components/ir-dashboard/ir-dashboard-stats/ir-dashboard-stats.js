import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
import { todayISO } from "../../../utils/calendar-dates";
import { formatDate } from "../../../utils/date/index";
import { formatCount, formatPercent } from "../../../utils/number";
import { formatAmount } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
import { computeRevPar } from "../dashboard.helpers";
/**
 * Calendar legend entry (igl-legend) each unit's dot copies, with the default colour as fallback.
 * Available units keep the brand colour and blocked ones the danger red.
 */
const UNIT_LEGEND = {
    'booked': { id: '2', fallback: '#45b16d' },
    'pending': { id: '3', fallback: '#FF9149' },
    'out-of-service': { id: '6', fallback: '#f34752' },
};
/** Resolved at render, not at import, when the locale tables are still empty. */
const occupancyLabel = (kind) => (kind === 'virtual' ? t('Lcz_FakeUnits', { fallback: 'Fake units' }) : t('Lcz_RealUnits', { fallback: 'Real units' }));
/** "12 of 40 booked" */
const bookedOfTotal = (figure) => t('Lcz_BookedOfTotal', { fallback: '%1 of %2 booked', params: [formatCount(figure.booked), formatCount(figure.total)] });
/** Gives each instance's bar segments their own ids, which the tooltips anchor to. */
let barIds = 0;
const clampPercent = (percent) => Math.min(Math.max(percent ?? 0, 0), 100);
/** Rounding must never claim a full house: 99.96% reads 99.9%, not 100%. */
const shownPercent = (percent) => {
    const clamped = clampPercent(percent);
    return clamped < 100 ? Math.min(clamped, 99.9) : 100;
};
/**
 * Left-hand stats rail: an occupancy card (the day's occupancy, units booked and the unit breakdown) followed by a
 * performance card with the day's room-revenue KPIs. The first card takes the rail's spare height.
 * The figures come from three requests (monthly stats, calendar, pending bookings), so each figure shows its own
 * skeleton until it arrives. Occupancy comes from the calendar: real units and, when the property's virtual room types
 * have any units, fake units in grey beside them, sharing one bar.
 *
 * Properties without front desk (`isPms` false) see only Booked and Pending — no occupancy, no bar, no calendar
 * figures (the dashboard skips the calendar request for them) — and no ADR or RevPAR.
 */
export class IrDashboardStats {
    /** Selected day (`YYYY-MM-DD`); titles the occupancy card. */
    date;
    /** Whether the property uses the front desk (PMS); without it the rail shows the reduced set of figures. */
    isPms = true;
    /** Occupancy and revenue figures; `null` shows their skeletons. */
    performance;
    /** Calendar unit breakdown; `null` shows its skeleton. */
    units;
    /** Units in pending bookings; `null` shows its skeleton. */
    pendingUnits;
    currencySymbol;
    /** Dims the occupancy, booked-units and revenue figures while a newer day's are in flight. */
    performanceLoading = false;
    /** Dims the calendar unit figures while a newer day's are in flight. */
    unitsLoading = false;
    /** Dims the pending-units figure while a newer day's is in flight. */
    pendingLoading = false;
    /** How tightly the cards are drawn; ir-dashboard steps it down when the desktop rail is short. */
    density = 'regular';
    barId = `stats-occupancy-${++barIds}`;
    /** The property's colour for a unit's legend entry, so the dot matches the calendar. */
    legendColor(tone) {
        const legend = UNIT_LEGEND[tone];
        if (!legend) {
            return undefined;
        }
        return calendar_data.property?.calendar_legends?.find(l => l.id?.toString() === legend.id)?.color ?? legend.fallback;
    }
    /** "Today's occupancy" on today, otherwise the day itself ("Saturday, 17 Oct."); the card title is capitalized in CSS. */
    get title() {
        if (!this.date || this.date === todayISO()) {
            return t('Lcz_TodaysOccupancy', { fallback: "Today's occupancy" });
        }
        return `${formatDate(this.date, 'dddd, D MMM')}.`;
    }
    renderUnit(value, label, tone, { loaded, refreshing }) {
        if (!loaded) {
            return (h("li", { class: "stats__unit", "aria-hidden": "true" }, h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--unit" })));
        }
        const color = this.legendColor(tone);
        // Every unit stays visible; a count with nothing behind it reads as 0.
        const count = formatCount(value ?? 0);
        return (h("li", { class: { 'stats__unit': true, 'stats--loading': refreshing } }, h("span", { class: `stats__dot stats__dot--${tone}`, style: color ? { '--stats-dot-color': color } : undefined, "aria-hidden": "true" }), h("span", { class: "stats__unit-value", style: { '--unit-chars': String(count.length) } }, count), h("span", { class: "stats__unit-label" }, label)));
    }
    /** One occupancy figure: the percentage over its label and the units booked. */
    renderOccupancyFigure(kind, figure) {
        const percent = formatPercent(shownPercent(figure.percent), { maximumFractionDigits: 1 });
        return (h("div", { class: `stats__figure stats__figure--${kind}` }, h("span", { class: "stats__occupancy-value", style: { '--figure-chars': String(percent.length) } }, percent), h("span", { class: "stats__figure-label" }, occupancyLabel(kind)), h("span", { class: "stats__booked" }, bookedOfTotal(figure))));
    }
    /**
     * One stretch of the bar: as wide as its share of all units (never too narrow to hover), filled to its occupancy,
     * with a tooltip spelling out the figure.
     */
    renderBarSegment(kind, figure) {
        const id = `${this.barId}-${kind}`;
        const percent = formatPercent(shownPercent(figure.percent), { maximumFractionDigits: 1 });
        return [
            h("div", { id: id, class: `stats__segment stats__segment--${kind}`, style: { flexGrow: String(Math.max(figure.total, 1)) }, role: "progressbar", tabindex: "0", "aria-label": occupancyLabel(kind), "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(clampPercent(figure.percent)), "aria-valuetext": `${percent}, ${bookedOfTotal(figure)}` }, h("span", { class: "stats__segment-fill", style: { inlineSize: `${clampPercent(figure.percent)}%` } })),
            h("wa-tooltip", { for: id }, h("span", { class: "stats__tooltip" }, h("strong", null, `${occupancyLabel(kind)}: ${percent}`), h("span", null, bookedOfTotal(figure)))),
        ];
    }
    /** Occupancy of real units and, when the property has fake units, of those; then the bar (PMS only). */
    renderOccupancy() {
        const occupancy = this.units?.occupancy;
        if (!occupancy) {
            return (h("div", { class: "stats__occupancy", "aria-hidden": "true" }, h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--occupancy" }), h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--bar" })));
        }
        const { real } = occupancy;
        // Virtual room types without a single active unit aren't mentioned at all.
        const virtual = occupancy.virtual?.total ? occupancy.virtual : undefined;
        return (h("div", { class: { 'stats__occupancy': true, 'stats__occupancy--split': !!virtual, 'stats--loading': this.unitsLoading } }, h("div", { class: "stats__occupancy-figure" }, h("span", { class: "stats__icon stats__icon--round", "aria-hidden": "true" }, h("wa-icon", { name: "bed" })), this.renderOccupancyFigure('real', real), virtual && this.renderOccupancyFigure('virtual', virtual)), h("div", { class: "stats__bar", role: "group", "aria-label": t('Lcz_Occupancy', { fallback: 'Occupancy' }) }, this.renderBarSegment('real', real), virtual && this.renderBarSegment('virtual', virtual))));
    }
    renderUnits() {
        const { units, performance, pendingUnits } = this;
        const calendar = { loaded: !!units, refreshing: this.unitsLoading };
        const stats = { loaded: !!performance, refreshing: this.performanceLoading };
        const pending = { loaded: pendingUnits != null, refreshing: this.pendingLoading };
        return (h("ul", { class: { 'stats__units': true, 'stats__units--stacked': !this.isPms }, "aria-label": t('Lcz_Units', { fallback: 'Units' }), "aria-busy": (this.isPms && !units) || !performance ? 'true' : null }, this.isPms && this.renderUnit(units?.available, t('Lcz_Available', { fallback: 'Available' }), 'available', calendar), this.renderUnit(performance?.bookedUnits, t('Lcz_Booked', { fallback: 'Booked' }), 'booked', stats), this.renderUnit(pendingUnits, t('Lcz_Pending', { fallback: 'Pending' }), 'pending', pending), this.isPms && this.renderUnit(units?.outOfService, t('Lcz_OOS', { fallback: 'OOS' }), 'out-of-service', calendar), this.isPms && this.renderUnit(units?.blocked, t('Lcz_Blocked', { fallback: 'Blocked' }), 'blocked', calendar)));
    }
    /** One revenue figure: icon tile, amount, label. An `undefined` value shows a skeleton in place of the amount. */
    renderKpi(icon, label, value) {
        const amount = value === undefined ? '' : formatAmount(this.currencySymbol, value);
        return (h("li", { class: "stats__kpi" }, h("span", { class: "stats__icon", "aria-hidden": "true" }, h("wa-icon", { name: icon })), h("span", { class: "stats__kpi-text" }, value === undefined ? (h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--kpi", "aria-hidden": "true" })) : (
        // The CSS sizes the font from the amount's length so it always shows in full, never truncated.
        h("span", { class: "stats__kpi-value", style: { '--kpi-chars': String(amount.length) } }, amount)), h("span", { class: "stats__kpi-label" }, label))));
    }
    renderPerformance() {
        const performance = this.performance;
        return (h("wa-card", { class: "stats__card stats__card--performance", appearance: "plain" }, h("h2", { class: "stats__title" }, t('Lcz_Performance', { fallback: 'Performance' })), h("ul", { class: { 'stats__kpis': true, 'stats--loading': !!performance && this.performanceLoading }, "aria-label": t('Lcz_Revenue', { fallback: 'Revenue' }), "aria-busy": !performance ? 'true' : null }, this.renderKpi('coins', t('Lcz_RoomRevenue', { fallback: 'Room Revenue' }), performance?.roomRevenue), this.isPms && this.renderKpi('chart-simple', t('Lcz_Adr', { fallback: 'ADR' }), performance?.adr), this.isPms && this.renderKpi('arrow-trend-up', t('Lcz_RevPar', { fallback: 'RevPAR' }), performance ? computeRevPar(performance.adr, performance.occupancy) : undefined))));
    }
    render() {
        return (h(Host, { key: 'cde120f4cec438842b49e46329ddc1834b4ef6ab' }, h("wa-card", { key: '94ae1675ece488df6f2e0c1793e9974bc7523f8a', class: "stats__card stats__card--occupancy", appearance: "plain" }, h("h2", { key: '2dba944e8c587963d53da19f0d9a9cbb9da6d66e', class: "stats__title" }, this.title), this.isPms && this.renderOccupancy(), this.renderUnits()), this.renderPerformance()));
    }
    static get is() { return "ir-dashboard-stats"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-dashboard-stats.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-dashboard-stats.css"]
        };
    }
    static get properties() {
        return {
            "date": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "ISODate",
                    "resolved": "string",
                    "references": {
                        "ISODate": {
                            "location": "import",
                            "path": "@/utils/calendar-dates",
                            "id": "src/utils/calendar-dates.ts::ISODate",
                            "referenceLocation": "ISODate"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Selected day (`YYYY-MM-DD`); titles the occupancy card."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "date"
            },
            "isPms": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Whether the property uses the front desk (PMS); without it the rail shows the reduced set of figures."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "is-pms",
                "defaultValue": "true"
            },
            "performance": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DashboardPerformance",
                    "resolved": "DashboardPerformance",
                    "references": {
                        "DashboardPerformance": {
                            "location": "import",
                            "path": "@/services/dashboard",
                            "id": "src/services/dashboard/index.ts::DashboardPerformance",
                            "referenceLocation": "DashboardPerformance"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Occupancy and revenue figures; `null` shows their skeletons."
                },
                "getter": false,
                "setter": false
            },
            "units": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "DashboardUnits",
                    "resolved": "DashboardUnits",
                    "references": {
                        "DashboardUnits": {
                            "location": "import",
                            "path": "@/services/dashboard",
                            "id": "src/services/dashboard/index.ts::DashboardUnits",
                            "referenceLocation": "DashboardUnits"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Calendar unit breakdown; `null` shows its skeleton."
                },
                "getter": false,
                "setter": false
            },
            "pendingUnits": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Units in pending bookings; `null` shows its skeleton."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pending-units"
            },
            "currencySymbol": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "currency-symbol"
            },
            "performanceLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Dims the occupancy, booked-units and revenue figures while a newer day's are in flight."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "performance-loading",
                "defaultValue": "false"
            },
            "unitsLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Dims the calendar unit figures while a newer day's are in flight."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "units-loading",
                "defaultValue": "false"
            },
            "pendingLoading": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Dims the pending-units figure while a newer day's is in flight."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "pending-loading",
                "defaultValue": "false"
            },
            "density": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "RailDensity",
                    "resolved": "\"compact\" | \"regular\" | \"spacious\" | \"tight\"",
                    "references": {
                        "RailDensity": {
                            "location": "import",
                            "path": "../types",
                            "id": "src/components/ir-dashboard/types.ts::RailDensity",
                            "referenceLocation": "RailDensity"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "How tightly the cards are drawn; ir-dashboard steps it down when the desktop rail is short."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "density",
                "defaultValue": "'regular'"
            }
        };
    }
}
