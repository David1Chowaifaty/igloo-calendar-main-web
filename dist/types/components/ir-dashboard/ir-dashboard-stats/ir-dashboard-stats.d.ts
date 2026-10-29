import type { DashboardPerformance, DashboardUnits } from "../../../services/dashboard/index";
import { type ISODate } from "../../../utils/calendar-dates";
import { EventEmitter } from '../../../stencil-public-runtime';
import type { RailDensity } from '../types';
/**
 * Left-hand stats rail: the day picker (ir-dashboard-date-navigator, whose pick is re-emitted as `dateChange`), then an
 * occupancy card (the day's occupancy, units booked and the unit breakdown) and a performance card with the day's
 * room-revenue KPIs. The occupancy card takes the rail's spare height.
 * The figures come from three requests (monthly stats, calendar, pending bookings), so each figure shows its own
 * skeleton until it arrives. Occupancy comes from the calendar: real units and, when the property's virtual room types
 * have any units, fake units in grey beside them; the bar shows the real units only.
 *
 * Properties without front desk (`isPms` false) see only Booked and Pending — no occupancy, no bar, no calendar
 * figures (the dashboard skips the calendar request for them) — and no ADR or RevPAR.
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
    /** Emitted with the new day when the user picks another day in the rail's day picker. */
    dateChange: EventEmitter<ISODate>;
    private readonly barId;
    /** The property's colour for a unit's legend entry, so the dot matches the calendar. */
    private legendColor;
    /** "Today's occupancy" on today, otherwise the day itself ("Saturday, 17 Oct."); the card title is capitalized in CSS. */
    private get title();
    private renderUnit;
    /** One occupancy figure: the percentage over its label and the units booked. */
    private renderOccupancyFigure;
    /** The real units' occupancy bar, filled to its percentage, with a tooltip spelling out the figure. */
    private renderBar;
    /** Occupancy of real units and, when the property has fake units, of those; then the real units' bar (PMS only). */
    private renderOccupancy;
    private renderUnits;
    /** One revenue figure: icon tile, amount, label. An `undefined` value shows a skeleton in place of the amount. */
    private renderKpi;
    private renderPerformance;
    /** Re-emits the picker's day from the rail, so the dashboard hears one event, from its own child. */
    private handleDateChange;
    render(): any;
}
