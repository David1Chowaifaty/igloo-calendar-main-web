import { DayData } from "../models/DayType";
/**
 * Fixed calendar grid dimensions, in pixels.
 * Must stay in sync with the literal values in igl-cal-body.css (.cellData, .roomHeaderCell)
 * and igl-cal-header.css (.headerCell, .topLeftCell).
 */
export declare const CELL_WIDTH = 58;
export declare const CELL_HEIGHT = 30;
export declare const ROOM_HEADER_WIDTH = 170;
export declare const CATEGORY_HEADER_HEIGHT = 40;
export declare const EVENT_SPACE = 8;
/** Height of a booking bar. Must stay in sync with the `height` igl-booking-event renders. */
export declare const EVENT_HEIGHT = 20;
/**
 * Re-exported so the calendar's existing call sites keep working. The canonical
 * implementation is app-wide and lives in `src/utils/direction.ts`.
 */
export { isRtlDirection } from './direction';
export declare function getDayIndex(days: DayData[], dateValue: string): number;
export declare function getTotalGridWidth(dayCount: number): number;
/**
 * Converts a chronological (day-0-first) left offset into a physical `left` value.
 * In RTL locales the day timeline visually mirrors (day 0 renders at the right edge),
 * so the physical position is the reflection of the logical one across the grid width.
 */
export declare function toPhysicalLeft(logicalLeft: number, width: number, isRtl: boolean, totalGridWidth: number): number;
/**
 * Inverse of `toPhysicalLeft`. A reflection is its own inverse, so this is the same computation -
 * it exists so call sites converting the other way read as what they actually mean.
 */
export declare function toLogicalLeft(physicalLeft: number, width: number, isRtl: boolean, totalGridWidth: number): number;
/**
 * Vertical offset of a booking bar inside its room row, centring the bar in the row.
 *
 * Pass the row's measured height where it is known; rows are `CELL_HEIGHT` tall, but a measured
 * value keeps the bar centred rather than merely 5px down if that ever stops being true.
 */
export declare function getEventTopWithinRow(rowHeight?: number): number;
/**
 * Distance from a day column's start edge to where a bar beginning on that day rests.
 *
 * Check-in is midday, so a booking bar starts half a cell into its first day rather than on the
 * column boundary - which is why a bar reads as centred on the cell it starts in.
 */
export declare function getEventLeftWithinDay(startsAfterWindowOpen: boolean, eventSpace?: number): number;
/**
 * Snaps a freely dragged bar's physical `left` onto the day grid, so it always sits exactly where
 * a booking starting on that day would render.
 *
 * The snap happens in chronological space and is mirrored back, so the bar lands on the same day
 * in RTL as it would in LTR rather than on the reflection of it.
 */
export declare function snapEventLeft({ physicalLeft, width, isRtl, totalGridWidth, startsAfterWindowOpen, eventSpace, }: {
    physicalLeft: number;
    width: number;
    isRtl: boolean;
    totalGridWidth: number;
    startsAfterWindowOpen: boolean;
    eventSpace?: number;
}): number;
export interface EventHorizontalGeometry {
    left: number;
    width: number;
}
/**
 * Computes a booking bar's chronological (LTR-oriented) left offset and width, purely from
 * data - no DOM measurement. Mirrors the pixel math the previous DOM-measurement-based
 * implementation produced, including the half-cell adjustment applied when a booking's
 * FROM_DATE lands on or before the loaded window's nominal start date.
 */
export declare function computeEventHorizontalGeometry({ days, fromDate, stayDays, startsAfterWindowOpen, eventSpace, }: {
    days: DayData[];
    fromDate: string;
    stayDays: number;
    startsAfterWindowOpen: boolean;
    eventSpace?: number;
}): EventHorizontalGeometry;
