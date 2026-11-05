/**
 * The illustrative property behind the Dynamic Pricing ad: one week, before and after the module
 * reacts to two Demand Signals. Extra Profit and Extra Bookings are derived from these nights
 * rather than typed in, so the payoff always matches what the board shows.
 */
export declare const BASE_RATE = 120;
export declare const ROOMS = 20;
export declare const CURRENCY = "$";
export declare const CONTACT_EMAIL = "support@igloorooms.com";
export type Night = {
    /** The rate Dynamic Pricing sets; `BASE_RATE` means the night is left alone. */
    rate: number;
    soldBefore: number;
    soldAfter: number;
};
/** Monday-first, so the festival weekend reads as one block at the end of the row. */
export declare const WEEK: Night[];
export type Signal = {
    key: string;
    label: string;
    icon: string;
    tone: 'high' | 'low';
    /** First and last night the signal covers, as indexes into `WEEK`. */
    first: number;
    last: number;
};
export declare const SIGNALS: Signal[];
/** Net of the Incentives, so the headline figure never flatters the week. */
export declare const EXTRA_PROFIT: number;
export declare const EXTRA_BOOKINGS: number;
/** Bar height for a rate, in board units. Starting above zero makes a $45 move read as a real jump. */
export declare function rateLevel(rate: number): number;
export type Beat = 'fixed' | 'signals' | 'rates' | 'bookings' | 'payoff';
export declare const BEATS: Beat[];
/** How long each beat holds. The payoff gets the longest: it's the frame the viewer has to read. */
export declare const BEAT_MS: Record<Beat, number>;
/** One full play of the story, from fixed rates to the end of the payoff. */
export declare const STORY_MS: number;
export declare function nextBeat(beat: Beat): Beat;
/** The seven nights from the coming Monday; a Monday gets the following week, never today's. */
export declare function upcomingWeek(from: Date): Date[];
