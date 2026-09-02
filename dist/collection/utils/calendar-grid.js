/**
 * Fixed calendar grid dimensions, in pixels.
 * Must stay in sync with the literal values in igl-cal-body.css (.cellData, .roomHeaderCell)
 * and igl-cal-header.css (.headerCell, .topLeftCell).
 */
export const CELL_WIDTH = 58;
export const CELL_HEIGHT = 30;
export const ROOM_HEADER_WIDTH = 170;
export const CATEGORY_HEADER_HEIGHT = 40;
export const EVENT_SPACE = 8;
/**
 * Re-exported so the calendar's existing call sites keep working. The canonical
 * implementation is app-wide and lives in `src/utils/direction.ts`.
 */
export { isRtlDirection } from './direction';
export function getDayIndex(days, dateValue) {
    return days.findIndex(day => day.value === dateValue);
}
export function getTotalGridWidth(dayCount) {
    return ROOM_HEADER_WIDTH + dayCount * CELL_WIDTH;
}
/**
 * Converts a chronological (day-0-first) left offset into a physical `left` value.
 * In RTL locales the day timeline visually mirrors (day 0 renders at the right edge),
 * so the physical position is the reflection of the logical one across the grid width.
 */
export function toPhysicalLeft(logicalLeft, width, isRtl, totalGridWidth) {
    return isRtl ? totalGridWidth - logicalLeft - width : logicalLeft;
}
/**
 * Computes a booking bar's chronological (LTR-oriented) left offset and width, purely from
 * data - no DOM measurement. Mirrors the pixel math the previous DOM-measurement-based
 * implementation produced, including the half-cell adjustment applied when a booking's
 * FROM_DATE lands on or before the loaded window's nominal start date.
 */
export function computeEventHorizontalGeometry({ days, fromDate, stayDays, startsAfterWindowOpen, eventSpace = EVENT_SPACE, }) {
    const dayIndex = Math.max(getDayIndex(days, fromDate), 0);
    const left = ROOM_HEADER_WIDTH + dayIndex * CELL_WIDTH + (startsAfterWindowOpen ? 0 : CELL_WIDTH / 2) + eventSpace / 2;
    const width = (stayDays + (startsAfterWindowOpen ? 0.5 : 0)) * CELL_WIDTH - eventSpace;
    return { left, width };
}
