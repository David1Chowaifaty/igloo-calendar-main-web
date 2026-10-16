import calendar_data from "../../stores/calendar-data";
import { addDaysISO, nightsBetween, todayISO } from "../../utils/calendar-dates";
/*
 * Mock fixtures for the dashboard endpoints that don't exist yet (cancellations).
 * Booking fixtures only carry the fields the booking table cells read, so they are cast to `Booking`.
 */
const DIRECT_ORIGIN = { Label: 'Direct | website', Icon: 'https://x.igloorooms.com/assets/images/png/direct.png' };
/** 0 = yesterday, 1 = today, 2 = tomorrow — picks a fixture variant so changing day visibly changes the data. */
function dayIndex(date) {
    const offset = nightsBetween(todayISO(), date);
    return Math.min(Math.max(offset + 1, 0), 2);
}
function mockBooking(input) {
    const [first_name, last_name] = input.guest;
    const guest = { id: Number(input.nbr.slice(-6)), first_name, last_name };
    return {
        booking_nbr: input.nbr,
        channel_booking_nbr: null,
        origin: DIRECT_ORIGIN,
        source: { code: '', description: 'Website', tag: null },
        is_direct: true,
        is_requested_to_cancel: false,
        guest,
        status: input.status ?? { code: '001', description: 'Confirmed' },
        currency: calendar_data.currency ?? { id: 1, code: 'EUR', symbol: '€' },
        booked_on: { date: input.bookedOn ?? input.from, hour: 10, minute: 15 },
        financial: { gross_total: input.total, due_amount: 0, cancelation_penality_as_if_today: 0 },
        guest_financial: { due_amount: 0 },
        rooms: [
            {
                identifier: `${input.nbr}-1`,
                from_date: input.from,
                to_date: input.to,
                guest,
                roomtype: { name: input.roomType },
                unit: input.unit ? { id: Number(input.unit), name: input.unit } : null,
                in_out: { code: input.inOut ?? '000', description: '' },
                occupancy: { adult_nbr: 2, children_nbr: 0, infant_nbr: 0 },
                sharing_persons: [],
            },
        ],
    };
}
export function mockCancellations(date) {
    const cancelled = { code: '003', description: 'Cancelled' };
    const rows = [
        mockBooking({
            nbr: '72311904536',
            guest: ['Sophie', 'Laurent'],
            roomType: 'Double room with Balcony',
            unit: null,
            from: addDaysISO(date, 5),
            to: addDaysISO(date, 7),
            total: 0,
            status: cancelled,
            bookedOn: addDaysISO(date, -20),
        }),
        mockBooking({
            nbr: '33018827190',
            guest: ['Henrik', 'Olsen'],
            roomType: 'Suite for 4 with balcony',
            unit: null,
            from: addDaysISO(date, 12),
            to: addDaysISO(date, 15),
            total: 0,
            status: cancelled,
            bookedOn: addDaysISO(date, -41),
        }),
    ];
    return rows.slice(0, dayIndex(date) === 0 ? 1 : 2);
}
