import { createStore } from "@stencil/store";
const initialState = {
    byDate: new Map(),
    loadingRanges: [],
};
export const { state: unassigned_units, onChange: onUnassignedUnitsChange } = createStore(initialState);
export default unassigned_units;
function countRooms(groups) {
    return groups ? groups.reduce((sum, group) => sum + group.unassigned_rooms.length, 0) : 0;
}
/** Sets (or, if empty, clears) a single date's unassigned room-type groups. */
export function setUnassignedUnitsForDate(date, roomTypes) {
    const next = new Map(unassigned_units.byDate);
    if (roomTypes.length === 0) {
        next.delete(date);
    }
    else {
        next.set(date, roomTypes);
    }
    unassigned_units.byDate = next;
}
export function removeUnassignedUnitsForDate(date) {
    const next = new Map(unassigned_units.byDate);
    next.delete(date);
    unassigned_units.byDate = next;
}
/**
 * Replaces every date in `[fromDate, toDate]` (inclusive, ISO strings) with `entries`. Dates inside
 * the range that `entries` doesn't mention are cleared. `getAggregatedUnAssignedRoomsByDateRange` is
 * authoritative and sparse (only returns dates that still have unassigned rooms), so this single
 * operation correctly handles both new/changed dates and dates that just emptied out.
 */
export function replaceUnassignedUnitsRange(fromDate, toDate, entries) {
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
export function beginUnassignedUnitsFetch(fromDate, toDate) {
    const id = ++nextLoadingRangeId;
    unassigned_units.loadingRanges = [...unassigned_units.loadingRanges, { id, fromDate, toDate }];
    return () => {
        unassigned_units.loadingRanges = unassigned_units.loadingRanges.filter(range => range.id !== id);
    };
}
/** ISO strings compare lexicographically, matching `replaceUnassignedUnitsRange`. */
export function isUnassignedUnitsDateLoading(date) {
    return unassigned_units.loadingRanges.some(range => date >= range.fromDate && date <= range.toDate);
}
/**
 * Drops one booking room from every date it is listed on — e.g. right after it has been assigned a
 * unit. Dates it wasn't on keep their array identity, so memoized consumers stay warm.
 */
export function removeUnassignedRoom(identifier) {
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
export function getUnassignedUnitsForDate(date) {
    return unassigned_units.byDate.get(date) ?? NO_GROUPS;
}
export function getUnassignedUnitsCountForDate(date) {
    return countRooms(unassigned_units.byDate.get(date));
}
/** ISO strings sort correctly lexicographically — no epoch timestamps anywhere. */
export function getUnassignedUnitsDateKeys() {
    return Array.from(unassigned_units.byDate.keys()).sort();
}
