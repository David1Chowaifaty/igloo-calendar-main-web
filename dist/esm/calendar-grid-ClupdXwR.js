import { c as createStore } from './locales.store-CXJn6ls-.js';

const initialState = {
    unassigned_dates: {},
};
let { state: unassigned_dates, onChange: handleUnAssignedDatesChange } = createStore(initialState);
function addUnassignedDates(data) {
    unassigned_dates.unassigned_dates = { ...unassigned_dates.unassigned_dates, ...data };
    /*
     try {
        //console.log("called")
        let categorisedRooms = {};
        const result = await this.toBeAssignedService.getUnassignedRooms(
          this.propertyid,
          dateToFormattedString(new Date(+key)),
          calendarData.roomsInfo,
          calendarData.formattedLegendData,
        );
        result.forEach(room => {
          if (!categorisedRooms.hasOwnProperty(room.RT_ID)) {
            categorisedRooms[room.RT_ID] = [room];
          } else {
            categorisedRooms[room.RT_ID].push(room);
          }
        });
        this.unassignedDates[key].categories = categorisedRooms;
      } catch (error) {
        //  toastr.error(error);
      }
    */
    // console.log(unassigned_dates.unassigned_dates);
}
function getUnassignedDates() {
    return unassigned_dates.unassigned_dates;
}
function removeUnassignedDates(from_date, to_date) {
    const fromTimestamp = convertToDateTimestamp(from_date);
    const toTimestamp = convertToDateTimestamp(to_date);
    Object.keys(unassigned_dates.unassigned_dates).forEach(key => {
        const keyTimestamp = parseInt(key);
        if (fromTimestamp <= keyTimestamp && keyTimestamp <= toTimestamp) {
            delete unassigned_dates.unassigned_dates[key];
        }
    });
}
function convertToDateTimestamp(dateStr) {
    const date = new Date(dateStr);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
}

/**
 * Fixed calendar grid dimensions, in pixels.
 * Must stay in sync with the literal values in igl-cal-body.css (.cellData, .roomHeaderCell)
 * and igl-cal-header.css (.headerCell, .topLeftCell).
 */
const CELL_WIDTH = 58;
const CELL_HEIGHT = 30;
const ROOM_HEADER_WIDTH = 170;
const EVENT_SPACE = 8;
/** Height of a booking bar. Must stay in sync with the `height` igl-booking-event renders. */
const EVENT_HEIGHT = 20;
function getDayIndex(days, dateValue) {
    return days.findIndex(day => day.value === dateValue);
}
function getTotalGridWidth(dayCount) {
    return ROOM_HEADER_WIDTH + dayCount * CELL_WIDTH;
}
/**
 * Converts a chronological (day-0-first) left offset into a physical `left` value.
 * In RTL locales the day timeline visually mirrors (day 0 renders at the right edge),
 * so the physical position is the reflection of the logical one across the grid width.
 */
function toPhysicalLeft(logicalLeft, width, isRtl, totalGridWidth) {
    return isRtl ? totalGridWidth - logicalLeft - width : logicalLeft;
}
/**
 * Inverse of `toPhysicalLeft`. A reflection is its own inverse, so this is the same computation -
 * it exists so call sites converting the other way read as what they actually mean.
 */
function toLogicalLeft(physicalLeft, width, isRtl, totalGridWidth) {
    return toPhysicalLeft(physicalLeft, width, isRtl, totalGridWidth);
}
/**
 * Vertical offset of a booking bar inside its room row, centring the bar in the row.
 *
 * Pass the row's measured height where it is known; rows are `CELL_HEIGHT` tall, but a measured
 * value keeps the bar centred rather than merely 5px down if that ever stops being true.
 */
function getEventTopWithinRow(rowHeight = CELL_HEIGHT) {
    return (rowHeight - EVENT_HEIGHT) / 2;
}
/**
 * Distance from a day column's start edge to where a bar beginning on that day rests.
 *
 * Check-in is midday, so a booking bar starts half a cell into its first day rather than on the
 * column boundary - which is why a bar reads as centred on the cell it starts in.
 */
function getEventLeftWithinDay(startsAfterWindowOpen, eventSpace = EVENT_SPACE) {
    return (startsAfterWindowOpen ? 0 : CELL_WIDTH / 2) + eventSpace / 2;
}
/**
 * Snaps a freely dragged bar's physical `left` onto the day grid, so it always sits exactly where
 * a booking starting on that day would render.
 *
 * The snap happens in chronological space and is mirrored back, so the bar lands on the same day
 * in RTL as it would in LTR rather than on the reflection of it.
 */
function snapEventLeft({ physicalLeft, width, isRtl, totalGridWidth, startsAfterWindowOpen, eventSpace = EVENT_SPACE, }) {
    const withinDay = getEventLeftWithinDay(startsAfterWindowOpen, eventSpace);
    const logicalLeft = toLogicalLeft(physicalLeft, width, isRtl, totalGridWidth);
    const dayIndex = Math.round((logicalLeft - ROOM_HEADER_WIDTH - withinDay) / CELL_WIDTH);
    const snappedLogicalLeft = ROOM_HEADER_WIDTH + dayIndex * CELL_WIDTH + withinDay;
    return toPhysicalLeft(snappedLogicalLeft, width, isRtl, totalGridWidth);
}
/**
 * Computes a booking bar's chronological (LTR-oriented) left offset and width, purely from
 * data - no DOM measurement. Mirrors the pixel math the previous DOM-measurement-based
 * implementation produced, including the half-cell adjustment applied when a booking's
 * FROM_DATE lands on or before the loaded window's nominal start date.
 */
function computeEventHorizontalGeometry({ days, fromDate, stayDays, startsAfterWindowOpen, eventSpace = EVENT_SPACE, }) {
    const dayIndex = Math.max(getDayIndex(days, fromDate), 0);
    const left = ROOM_HEADER_WIDTH + dayIndex * CELL_WIDTH + getEventLeftWithinDay(startsAfterWindowOpen, eventSpace);
    const width = (stayDays + (startsAfterWindowOpen ? 0.5 : 0)) * CELL_WIDTH - eventSpace;
    return { left, width };
}

export { CELL_WIDTH as C, EVENT_HEIGHT as E, ROOM_HEADER_WIDTH as R, getTotalGridWidth as a, getUnassignedDates as b, computeEventHorizontalGeometry as c, addUnassignedDates as d, getEventTopWithinRow as g, handleUnAssignedDatesChange as h, removeUnassignedDates as r, snapEventLeft as s, toPhysicalLeft as t };
