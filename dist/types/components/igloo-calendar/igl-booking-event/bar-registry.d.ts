/**
 * Calendar-wide coordination between booking bars.
 *
 * A calendar can hold thousands of bars. Giving each one its own window listeners means every click
 * and every drop runs thousands of handlers, so the bars of a window share one registry instead:
 * one listener per concern for the whole calendar, and the outside-click listener only exists while
 * a bubble is actually open.
 *
 * Registries are per window (the bar's own `ownerDocument.defaultView`), so separate documents never
 * share state, and a registry tears its listeners down when its last bar disconnects.
 */
export interface RegisteredBar {
    readonly element: HTMLElement;
    bookingId(): string;
    pool(): string;
    /** Close this bar's info bubble. */
    closeInfo(): void;
    /** The calendar resolved this bar's drop. */
    onMoveBookingTo(event: CustomEvent): void;
    /** The calendar wants this bar back where its data puts it. */
    onRevertBooking(): void;
}
export declare function registerBar(bar: RegisteredBar): void;
export declare function unregisterBar(bar: RegisteredBar): void;
export declare function claimInfoBubble(bar: RegisteredBar): void;
export declare function releaseInfoBubble(bar: RegisteredBar): void;
/** Closes any open bubble in `bar`'s calendar - a drag starting anywhere should not leave one up. */
export declare function closeOpenInfoBubble(bar: RegisteredBar): void;
