/**
 * The illustrative property behind the Dynamic Pricing ad: one week, before and after the module
 * reacts to two Demand Signals. Extra Profit and Extra Bookings are derived from these nights
 * rather than typed in, so the payoff always matches what the board shows.
 */
export const BASE_RATE = 120;
export const ROOMS = 20;
export const CURRENCY = '$';
export const CONTACT_EMAIL = 'support@igloorooms.com';
/** Monday-first, so the festival weekend reads as one block at the end of the row. */
export const WEEK = [
    { rate: 120, soldBefore: 10, soldAfter: 10 },
    { rate: 99, soldBefore: 6, soldAfter: 8 },
    { rate: 99, soldBefore: 7, soldAfter: 8 },
    { rate: 120, soldBefore: 12, soldAfter: 12 },
    { rate: 165, soldBefore: 9, soldAfter: 20 },
    { rate: 165, soldBefore: 10, soldAfter: 20 },
    { rate: 165, soldBefore: 11, soldAfter: 19 },
];
export const SIGNALS = [
    { key: 'Lcz_LoginPromoDpSignalFestival', label: 'Jazz Festival', icon: 'music', tone: 'high', first: 4, last: 6 },
    { key: 'Lcz_LoginPromoDpSignalSlowPace', label: 'Slow bookings', icon: 'hourglass-half', tone: 'low', first: 1, last: 2 },
];
const roomsWon = (night) => night.soldAfter - night.soldBefore;
/** Net of the Incentives, so the headline figure never flatters the week. */
export const EXTRA_PROFIT = WEEK.reduce((total, night) => total + (night.rate - BASE_RATE) * roomsWon(night), 0);
export const EXTRA_BOOKINGS = WEEK.filter(night => night.rate < BASE_RATE).reduce((total, night) => total + roomsWon(night), 0);
/** Bar height for a rate, in board units. Starting above zero makes a $45 move read as a real jump. */
export function rateLevel(rate) {
    return Math.round((rate - 60) * 0.9);
}
export const BEATS = ['fixed', 'signals', 'rates', 'bookings', 'payoff'];
/** How long each beat holds. The payoff gets the longest: it's the frame the viewer has to read. */
export const BEAT_MS = {
    fixed: 1800,
    signals: 2200,
    rates: 2400,
    bookings: 2200,
    payoff: 5400,
};
/** One full play of the story, from fixed rates to the end of the payoff. */
export const STORY_MS = BEATS.reduce((total, beat) => total + BEAT_MS[beat], 0);
export function nextBeat(beat) {
    return BEATS[(BEATS.indexOf(beat) + 1) % BEATS.length];
}
/** The seven nights from the coming Monday; a Monday gets the following week, never today's. */
export function upcomingWeek(from) {
    const daysToMonday = (8 - from.getDay()) % 7 || 7;
    return Array.from({ length: 7 }, (_, i) => new Date(from.getFullYear(), from.getMonth(), from.getDate() + daysToMonday + i));
}
