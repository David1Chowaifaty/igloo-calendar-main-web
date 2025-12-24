import { z } from 'zod';
/**
 * Defines the operating mode of the Booking Editor.
 *
 * Each mode determines how the editor initializes data,
 * which fields are editable, and how rooms and dates are handled.
 *
 * Modes:
 *
 * - SPLIT_BOOKING
 *   Add a room to an existing booking **without explicitly selecting it**.
 *   The editor follows the dates of the target booking.
 *
 * - BAR_BOOKING
 *   Create a booking for a **specific room** with **predefined dates**
 *   (Best Available Rate flow).
 *
 * - ADD_ROOM
 *   Add one or more rooms to an **existing booking**.
 *   Dates are inherited from the booking.
 *
 * - EDIT_BOOKING
 *   Edit an existing booking.
 *   Allows modifying guest details, rooms, and dates.
 *
 * - PLUS_BOOKING
 *   Create a **new booking from scratch** with no predefined
 *   rooms or dates.
 */
export type BookingEditorMode = 'SPLIT_BOOKING' | 'BAR_BOOKING' | 'ADD_ROOM' | 'EDIT_BOOKING' | 'PLUS_BOOKING';
export type BookingStep = 'details' | 'confirm';
export declare const RoomsGuestsSchema: z.ZodArray<z.ZodEffects<z.ZodObject<{
    first_name: z.ZodString;
    last_name: z.ZodString;
    bed_preference: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    requires_bed_preference: z.ZodNullable<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    bed_preference?: string;
    first_name?: string;
    last_name?: string;
    requires_bed_preference?: boolean;
}, {
    bed_preference?: string;
    first_name?: string;
    last_name?: string;
    requires_bed_preference?: boolean;
}>, {
    bed_preference?: string;
    first_name?: string;
    last_name?: string;
    requires_bed_preference?: boolean;
}, {
    bed_preference?: string;
    first_name?: string;
    last_name?: string;
    requires_bed_preference?: boolean;
}>, "many">;
export declare const BookedByGuestSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    firstName?: string;
    lastName?: string;
}, {
    firstName?: string;
    lastName?: string;
}>;
export type BlockedDatePayload = {
    RELEASE_AFTER_HOURS: string;
    ENTRY_DATE: string;
    ENTRY_HOUR: number;
    ENTRY_MINUTE: number;
    OPTIONAL_REASON: string;
    STATUS_CODE: string;
    OUT_OF_SERVICE: boolean;
};
