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
/**
 * `locales.direction` comes straight from the language API and isn't guaranteed to be
 * lowercase (observed 'RTL' from at least one property/language combination), so every
 * direction check in the calendar goes through this instead of a raw `=== 'rtl'` compare.
 */
export declare function isRtlDirection(direction: string | undefined | null): boolean;
export declare function getDayIndex(days: DayData[], dateValue: string): number;
export declare function getTotalGridWidth(dayCount: number): number;
/**
 * Converts a chronological (day-0-first) left offset into a physical `left` value.
 * In RTL locales the day timeline visually mirrors (day 0 renders at the right edge),
 * so the physical position is the reflection of the logical one across the grid width.
 */
export declare function toPhysicalLeft(logicalLeft: number, width: number, isRtl: boolean, totalGridWidth: number): number;
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
