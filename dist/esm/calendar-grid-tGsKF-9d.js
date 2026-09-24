import { c as createStore } from './locales.store-CXJn6ls-.js';

const initialState = {
    byDate: new Map(),
    loadingRanges: [],
};
const { state: unassigned_units, onChange: onUnassignedUnitsChange } = createStore(initialState);
function countRooms(groups) {
    return groups ? groups.reduce((sum, group) => sum + group.unassigned_rooms.length, 0) : 0;
}
/**
 * Replaces every date in `[fromDate, toDate]` (inclusive, ISO strings) with `entries`. Dates inside
 * the range that `entries` doesn't mention are cleared. `getAggregatedUnAssignedRoomsByDateRange` is
 * authoritative and sparse (only returns dates that still have unassigned rooms), so this single
 * operation correctly handles both new/changed dates and dates that just emptied out.
 */
function replaceUnassignedUnitsRange(fromDate, toDate, entries) {
    const next = new Map(unassigned_units.byDate);
    for (const key of next.keys()) {
        if (key >= fromDate && key <= toDate) {
            next.delete(key);
        }
    }
    for (const entry of entries) {
        if (entry.room_types.length > 0) {
            next.set(entry.date, entry.room_types);
        }
    }
    unassigned_units.byDate = next;
}
let nextLoadingRangeId = 0;
/**
 * Marks `[fromDate, toDate]` as being fetched and returns the function that clears the mark. Ranges are
 * tracked individually so overlapping fetches release independently.
 */
function beginUnassignedUnitsFetch(fromDate, toDate) {
    const id = ++nextLoadingRangeId;
    unassigned_units.loadingRanges = [...unassigned_units.loadingRanges, { id, fromDate, toDate }];
    return () => {
        unassigned_units.loadingRanges = unassigned_units.loadingRanges.filter(range => range.id !== id);
    };
}
/** ISO strings compare lexicographically, matching `replaceUnassignedUnitsRange`. */
function isUnassignedUnitsDateLoading(date) {
    return unassigned_units.loadingRanges.some(range => date >= range.fromDate && date <= range.toDate);
}
/**
 * Drops one booking room from every date it is listed on — e.g. right after it has been assigned a
 * unit. Dates it wasn't on keep their array identity, so memoized consumers stay warm.
 */
function removeUnassignedRoom(identifier) {
    let changed = false;
    const next = new Map();
    for (const [date, groups] of unassigned_units.byDate) {
        if (!groups.some(group => group.unassigned_rooms.some(room => room.room_identifier === identifier))) {
            next.set(date, groups);
            continue;
        }
        changed = true;
        const remaining = groups
            .map(group => ({ ...group, unassigned_rooms: group.unassigned_rooms.filter(room => room.room_identifier !== identifier) }))
            .filter(group => group.unassigned_rooms.length > 0);
        if (remaining.length > 0) {
            next.set(date, remaining);
        }
    }
    if (changed) {
        unassigned_units.byDate = next;
    }
}
const NO_GROUPS = [];
/** Returns a stable empty array for unknown dates so callers can memoize on reference identity. */
function getUnassignedUnitsForDate(date) {
    return unassigned_units.byDate.get(date) ?? NO_GROUPS;
}
function getUnassignedUnitsCountForDate(date) {
    return countRooms(unassigned_units.byDate.get(date));
}
/** ISO strings sort correctly lexicographically — no epoch timestamps anywhere. */
function getUnassignedUnitsDateKeys() {
    return Array.from(unassigned_units.byDate.keys()).sort();
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

export { CELL_WIDTH as C, EVENT_HEIGHT as E, ROOM_HEADER_WIDTH as R, getTotalGridWidth as a, beginUnassignedUnitsFetch as b, computeEventHorizontalGeometry as c, getUnassignedUnitsCountForDate as d, getUnassignedUnitsDateKeys as e, getUnassignedUnitsForDate as f, getEventTopWithinRow as g, removeUnassignedRoom as h, isUnassignedUnitsDateLoading as i, onUnassignedUnitsChange as o, replaceUnassignedUnitsRange as r, snapEventLeft as s, toPhysicalLeft as t };
