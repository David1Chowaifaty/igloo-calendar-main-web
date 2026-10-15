import calendar_data from "../../../stores/calendar-data";
import { t } from "../../../services/locale/t";
import { formatCount, formatPercent } from "../../../utils/number";
import { formatAmount } from "../../../utils/utils";
import { Host, h } from "@stencil/core";
import { computeRevPar } from "../dashboard.helpers";
/**
 * Calendar legend entry (igl-legend) each unit row's swatch copies, with the default colour as fallback.
 * Out-of-service units are blocks with status 004, which the calendar draws as "Blocked dates", so they share its swatch.
 * Available units have no legend entry and keep the brand colour.
 */
const UNIT_LEGEND = {
    'booked': { id: '2', fallback: '#45b16d' },
    'pending': { id: '3', fallback: '#FF9149' },
    'out-of-service': { id: '6', fallback: '#f34752' },
    'blocked': { id: '6', fallback: '#f34752' },
};
/**
 * Left-hand stats panel: a card with the occupancy ring and unit breakdown, followed by the day's
 * room-revenue KPIs in a second card. The first card takes the rail's spare height, so the revenue card sits at its bottom.
 * The figures come from three requests (monthly stats, calendar, pending bookings), so each part — down to each
 * unit row and KPI — shows its own skeleton until its figure arrives.
 */
export class IrDashboardStats {
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
    /** The property's colour for a unit row's legend entry, so the swatch matches the calendar. */
    legendColor(tone) {
        const legend = UNIT_LEGEND[tone];
        if (!legend) {
            return undefined;
        }
        return calendar_data.property?.calendar_legends?.find(l => l.id?.toString() === legend.id)?.color ?? legend.fallback;
    }
    renderCount(value, label, tone, { loaded, refreshing }) {
        if (!loaded) {
            return (h("li", { class: "stats__count", "aria-hidden": "true" }, h("wa-skeleton", { effect: "pulse", class: "stats__skeleton" })));
        }
        const color = this.legendColor(tone);
        return (h("li", { class: `stats__count${refreshing ? ' stats--loading' : ''}` }, h("span", { class: `stats__swatch stats__swatch--${tone}`, style: color ? { '--stats-swatch-color': color } : undefined, "aria-hidden": "true" }), h("span", { class: `stats__count-value` }, formatCount(value ?? 0)), h("span", { class: "stats__count-label" }, label)));
    }
    /** One revenue figure in the revenue card; an `undefined` value shows a skeleton under the label. */
    renderKpi(label, value) {
        return (h("li", { class: "stats__kpi" }, h("span", { class: "stats__kpi-label" }, label), value === undefined ? (h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--kpi", "aria-hidden": "true" })) : (h("span", { class: "stats__kpi-value" }, formatAmount(this.currencySymbol, value)))));
    }
    renderRing() {
        const performance = this.performance;
        if (!performance) {
            return (h("div", { class: "stats__ring-slot" }, h("wa-skeleton", { effect: "pulse", class: "stats__skeleton stats__skeleton--ring", "aria-hidden": "true" })));
        }
        const occupancy = Math.min(Math.max(performance.occupancy, 0), 100);
        const occupancyLabel = t('Lcz_Occupancy', { fallback: 'Occupancy' });
        return (h("div", { class: "stats__ring-slot" }, h("wa-progress-ring", { class: `stats__ring${this.performanceLoading ? ' stats--loading' : ''}`, value: occupancy, label: occupancyLabel }, h("span", { class: "stats__ring-content" }, h("span", { class: "stats__ring-value" }, formatPercent(occupancy, { minimumFractionDigits: 2, maximumFractionDigits: 2 })), h("span", { class: "stats__ring-label" }, occupancyLabel)))));
    }
    renderUnits() {
        const { units, performance, pendingUnits } = this;
        const calendar = { loaded: !!units, refreshing: this.unitsLoading };
        const stats = { loaded: !!performance, refreshing: this.performanceLoading };
        const pending = { loaded: pendingUnits != null, refreshing: this.pendingLoading };
        return (h("section", { class: "stats__section", "aria-label": t('Lcz_Units', { fallback: 'Units' }), "aria-busy": !units || !performance ? 'true' : null }, h("ul", { class: "stats__list" }, this.renderCount(units?.available, t('Lcz_AvailableUnits', { fallback: 'Available units' }), 'available', calendar), this.renderCount(performance?.bookedUnits, t('Lcz_BookedUnits', { fallback: 'Booked units' }), 'booked', stats), this.renderCount(pendingUnits, t('Lcz_Pending', { fallback: 'Pending' }), 'pending', pending), this.renderCount(units?.outOfService, t('Lcz_OutOfservice', { fallback: 'Out of service' }), 'out-of-service', calendar), this.renderCount(units?.blocked, t('Lcz_Blocked', { fallback: 'Blocked' }), 'blocked', calendar))));
    }
    renderRevenue() {
        const performance = this.performance;
        return (h("wa-card", { class: "stats__revenue", appearance: "plain" }, h("ul", { class: { 'stats__kpis': true, 'stats--loading': !!performance && this.performanceLoading }, "aria-label": t('Lcz_Revenue', { fallback: 'Revenue' }), "aria-busy": !performance ? 'true' : null }, this.renderKpi(t('Lcz_RoomRevenue', { fallback: 'Room revenue' }), performance?.roomRevenue), this.renderKpi(t('Lcz_Adr', { fallback: 'ADR' }), performance?.adr), this.renderKpi(t('Lcz_RevPar', { fallback: 'RevPAR' }), performance ? computeRevPar(performance.adr, performance.occupancy) : undefined))));
    }
    render() {
        return (h(Host, { key: '28403d8c7b396c1c1f1d3242380d51e744ca9cf7' }, h("wa-card", { key: '2562948d2756109f2921f0f5286e7b5aac2757aa', class: "stats", appearance: "plain" }, this.renderRing(), this.renderUnits()), this.renderRevenue()));
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
