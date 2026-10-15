import type { DashboardPerformance, DashboardUnits } from "../../../services/dashboard/index";
import type { RailDensity } from '../types';
/**
 * Left-hand stats panel: a card with the occupancy ring and unit breakdown, followed by the day's
 * room-revenue KPIs in a second card. The first card takes the rail's spare height, so the revenue card sits at its bottom.
 * The figures come from three requests (monthly stats, calendar, pending bookings), so each part — down to each
 * unit row and KPI — shows its own skeleton until its figure arrives.
 */
export declare class IrDashboardStats {
    /** Occupancy and revenue figures; `null` shows their skeletons. */
    performance: DashboardPerformance;
    /** Calendar unit breakdown; `null` shows its skeleton. */
    units: DashboardUnits;
    /** Units in pending bookings; `null` shows its skeleton. */
    pendingUnits: number;
    currencySymbol: string;
    /** Dims the occupancy, booked-units and revenue figures while a newer day's are in flight. */
    performanceLoading: boolean;
    /** Dims the calendar unit figures while a newer day's are in flight. */
    unitsLoading: boolean;
    /** Dims the pending-units figure while a newer day's is in flight. */
    pendingLoading: boolean;
    /** How tightly the cards are drawn; ir-dashboard steps it down when the desktop rail is short. */
    density: RailDensity;
    /** The property's colour for a unit row's legend entry, so the swatch matches the calendar. */
    private legendColor;
    private renderCount;
    /** One revenue figure in the revenue card; an `undefined` value shows a skeleton under the label. */
    private renderKpi;
    private renderRing;
    private renderUnits;
    private renderRevenue;
    render(): any;
}
