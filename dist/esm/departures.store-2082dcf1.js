import { c as createStore } from './index-a124d225.js';
import { d as data } from './_data-08a5cb9d.js';
import { h as hooks } from './moment-ab846cee.js';

const initialState = {
    bookings: [],
    filteredBookings: [],
    paginatedBookings: [],
    needsCheckOutBookings: [],
    outBookings: [],
    searchTerm: '',
    pagination: {
        page: 1,
        pageSize: 20,
        total: 0,
        totalPages: 1,
    },
    today: getTodayString(),
};
const { state: departuresStore, onChange: onDeparturesStoreChange } = createStore(initialState);
function initializeDeparturesStore(bookings = data) {
    departuresStore.bookings = Array.isArray(bookings) ? [...bookings] : [];
    runDeparturesPipeline();
}
function setDeparturesSearchTerm(term) {
    departuresStore.searchTerm = term ?? '';
    runDeparturesPipeline();
}
function runDeparturesPipeline() {
    const bookingsForToday = getBookingsForDate(departuresStore.bookings, departuresStore.today);
    const searchedBookings = filterBookingsBySearch(bookingsForToday, departuresStore.searchTerm);
    const total = searchedBookings.length;
    const { pageSize } = departuresStore.pagination;
    const totalPages = total === 0 ? 1 : Math.ceil(total / pageSize);
    const safePage = clamp(departuresStore.pagination.page, 1, totalPages);
    const start = (safePage - 1) * pageSize;
    const paginated = searchedBookings.slice(start, start + pageSize);
    departuresStore.filteredBookings = searchedBookings;
    departuresStore.pagination = { ...departuresStore.pagination, total, totalPages, page: safePage };
    departuresStore.paginatedBookings = paginated;
    const split = splitBookingsByStatus(paginated);
    departuresStore.needsCheckOutBookings = split.needsCheckOut;
    departuresStore.outBookings = split.out;
}
function getBookingsForDate(bookings, date) {
    if (!date) {
        return [];
    }
    return bookings
        .map(booking => {
        const roomsForToday = (booking.rooms ?? []).filter(room => normalizeDate(room.to_date) === date);
        if (!roomsForToday.length) {
            return null;
        }
        return { ...booking, rooms: roomsForToday };
    })
        .filter((booking) => Boolean(booking));
}
function filterBookingsBySearch(bookings, term) {
    const normalizedTerm = term?.trim().toLowerCase();
    if (!normalizedTerm) {
        return bookings;
    }
    return bookings.filter(booking => matchesSearchTerm(booking, normalizedTerm));
}
function matchesSearchTerm(booking, term) {
    if (!term) {
        return true;
    }
    const bookingNumber = booking.booking_nbr?.toLowerCase() ?? '';
    if (bookingNumber.includes(term)) {
        return true;
    }
    if (buildName(booking.guest).includes(term)) {
        return true;
    }
    return (booking.rooms ?? []).some(room => buildName(room.guest).includes(term));
}
function splitBookingsByStatus(bookings) {
    return bookings.reduce((acc, booking) => {
        const rooms = booking.rooms ?? [];
        const needsCheckoutRooms = rooms.filter(room => isNeedsCheckOut(room));
        if (needsCheckoutRooms.length) {
            acc.needsCheckOut.push({ ...booking, rooms: needsCheckoutRooms });
        }
        const isOutRooms = rooms.filter(room => isOut(room));
        if (isOutRooms.length) {
            acc.out.push({ ...booking, rooms: isOutRooms });
        }
        return acc;
    }, { needsCheckOut: [], out: [] });
}
function isNeedsCheckOut(room) {
    const code = room.in_out?.code ?? '';
    return code === '001';
}
function isOut(room) {
    return room.in_out?.code === '002';
}
function buildName(person) {
    const full = `${person?.first_name ?? ''} ${person?.last_name ?? ''}`.trim();
    return full.toLowerCase();
}
function getTodayString() {
    return hooks().format('YYYY-MM-DD');
}
function normalizeDate(value) {
    if (!value) {
        return '';
    }
    return value.slice(0, 10);
}
function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}
initializeDeparturesStore();

export { departuresStore as d, setDeparturesSearchTerm as s };

//# sourceMappingURL=departures.store-2082dcf1.js.map