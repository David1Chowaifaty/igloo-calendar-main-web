import { CalendarAssignedEvent, CalendarEventContext, CalendarUnitPreviewEvent, UnassignedCategory, UnassignedRoomEntry, UnassignedRoomTypeGroup } from './types';
/** The API identifies room types by id only; the name comes from the property's cached room-type map. */
export declare function groupIntoCategories(roomTypes: UnassignedRoomTypeGroup[]): UnassignedCategory[];
export declare function guestName(room: UnassignedRoomEntry): string;
/** Trims a stay to the calendar's loaded days — the grid has no cells outside `calendar_dates.fromDate..toDate`. */
export declare function clampToLoadedRange(from: string, to: string): {
    from: string;
    to: string;
    nights: number;
};
/** One ghost event per unit the room can be assigned to. Every unit is assumed valid for the room's whole `from`→`to` span — the API carries no per-unit window. */
export declare function toCalendarPreviewEvents(room: UnassignedRoomEntry, ctx: CalendarEventContext): CalendarUnitPreviewEvent[];
export declare function toCalendarAssignedEvent(room: UnassignedRoomEntry, prId: number, ctx: CalendarEventContext): CalendarAssignedEvent;
