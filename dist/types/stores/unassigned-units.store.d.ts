import { UnassignedDateEntry, UnassignedRoomTypeGroup } from "../services/unassigned-units/types";
export interface UnassignedUnitsLoadingRange {
    id: number;
    fromDate: string;
    toDate: string;
}
export interface IUnassignedUnitsStore {
    byDate: Map<string, UnassignedRoomTypeGroup[]>;
    /** Date ranges (inclusive, ISO strings) with an unassigned-units fetch currently in flight. */
    loadingRanges: ReadonlyArray<UnassignedUnitsLoadingRange>;
}
export declare const unassigned_units: IUnassignedUnitsStore, onUnassignedUnitsChange: import("@stencil/store/dist/types").OnChangeHandler<IUnassignedUnitsStore>;
export default unassigned_units;
/** Sets (or, if empty, clears) a single date's unassigned room-type groups. */
export declare function setUnassignedUnitsForDate(date: string, roomTypes: UnassignedRoomTypeGroup[]): void;
export declare function removeUnassignedUnitsForDate(date: string): void;
/**
 * Replaces every date in `[fromDate, toDate]` (inclusive, ISO strings) with `entries`. Dates inside
 * the range that `entries` doesn't mention are cleared. `getAggregatedUnAssignedRoomsByDateRange` is
 * authoritative and sparse (only returns dates that still have unassigned rooms), so this single
 * operation correctly handles both new/changed dates and dates that just emptied out.
 */
export declare function replaceUnassignedUnitsRange(fromDate: string, toDate: string, entries: UnassignedDateEntry[]): void;
/**
 * Marks `[fromDate, toDate]` as being fetched and returns the function that clears the mark. Ranges are
 * tracked individually so overlapping fetches release independently.
 */
export declare function beginUnassignedUnitsFetch(fromDate: string, toDate: string): () => void;
/** ISO strings compare lexicographically, matching `replaceUnassignedUnitsRange`. */
export declare function isUnassignedUnitsDateLoading(date: string): boolean;
/**
 * Drops one booking room from every date it is listed on — e.g. right after it has been assigned a
 * unit. Dates it wasn't on keep their array identity, so memoized consumers stay warm.
 */
export declare function removeUnassignedRoom(identifier: string): void;
/** Returns a stable empty array for unknown dates so callers can memoize on reference identity. */
export declare function getUnassignedUnitsForDate(date: string): UnassignedRoomTypeGroup[];
export declare function getUnassignedUnitsCountForDate(date: string): number;
/** ISO strings sort correctly lexicographically — no epoch timestamps anywhere. */
export declare function getUnassignedUnitsDateKeys(): string[];
