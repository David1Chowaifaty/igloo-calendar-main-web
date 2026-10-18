import type { DashboardPerformance, DashboardUnits } from "../../../services/dashboard/index";
import { type ISODate } from "../../../utils/calendar-dates";
import type { RailDensity } from '../types';
/**
 * Left-hand stats rail: an occupancy card (the day's occupancy, units booked and the unit breakdown) followed by a
 * performance card with the day's room-revenue KPIs. The first card takes the rail's spare height.
 * The figures come from three requests (monthly stats, calendar, pending bookings), so each figure shows its own
 * skeleton until it arrives.
 *
 * Properties without front desk (`isPms` false) see only Available, Booked and Pending — no occupancy, no bar —
 * and no RevPAR.
 */
export declare class IrDashboardStats {
    /** Selected day (`YYYY-MM-DD`); titles the occupancy card. */
    date: ISODate;
    /** Whether the property uses the front desk (PMS); without it the rail shows the reduced set of figures. */
    isPms: boolean;
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
    /** The property's colour for a unit's legend entry, so the dot matches the calendar. */
    private legendColor;
    /** Units the property has: the calendar's total, else the physical rooms of its room types. */
    private get totalUnits();
    /** "Today's occupancy" on today, otherwise the day itself ("Saturday, 17 Oct."); the card title is capitalized in CSS. */
    private get title();
    private renderUnit;
    /** Occupancy figure, units booked and the bar (PMS only). */
    private renderOccupancy;
    private renderUnits;
    /** One revenue figure: icon tile, amount, label. An `undefined` value shows a skeleton in place of the amount. */
    private renderKpi;
    private renderPerformance;
    render(): any;
}
