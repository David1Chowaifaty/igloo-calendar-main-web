import { createStore } from "@stencil/store";
import { data as arrivalsMockData } from "../components/ir-arrivals/_data";
const initialState = {
    bookings: [],
    filteredBookings: [],
    paginatedBookings: [],
    needsCheckInBookings: [],
    inHouseBookings: [],
    searchTerm: '',
    pagination: {
        page: 1,
        pageSize: 20,
        total: 0,
        totalPages: 1,
    },
    today: getTodayString(),
};
export const { state: arrivalsStore, onChange: onArrivalsStoreChange } = createStore(initialState);
export function initializeArrivalsStore(bookings = arrivalsMockData) {
    arrivalsStore.bookings = Array.isArray(bookings) ? [...bookings] : [];
    runArrivalsPipeline();
}
export function setArrivalsSearchTerm(term) {
    arrivalsStore.searchTerm = term ?? '';
    runArrivalsPipeline();
}
export function setArrivalsPage(page) {
    const safePage = Number.isFinite(page) && page > 0 ? Math.floor(page) : 1;
    arrivalsStore.pagination = { ...arrivalsStore.pagination, page: safePage };
    runArrivalsPipeline();
}
export function setArrivalsPageSize(pageSize) {
    if (!Number.isFinite(pageSize) || pageSize <= 0) {
        return;
    }
    arrivalsStore.pagination = { ...arrivalsStore.pagination, pageSize: Math.floor(pageSize), page: 1 };
    runArrivalsPipeline();
}
export function setArrivalsReferenceDate(date) {
    arrivalsStore.today = formatDateInput(date ?? new Date());
    runArrivalsPipeline();
}
function runArrivalsPipeline() {
    const bookingsForToday = getBookingsForDate(arrivalsStore.bookings, arrivalsStore.today);
    const searchedBookings = filterBookingsBySearch(bookingsForToday, arrivalsStore.searchTerm);
    const total = searchedBookings.length;
    const { pageSize } = arrivalsStore.pagination;
    const totalPages = total === 0 ? 1 : Math.ceil(total / pageSize);
    const safePage = clamp(arrivalsStore.pagination.page, 1, totalPages);
    const start = (safePage - 1) * pageSize;
    const paginated = searchedBookings.slice(start, start + pageSize);
    arrivalsStore.filteredBookings = searchedBookings;
    arrivalsStore.pagination = { ...arrivalsStore.pagination, total, totalPages, page: safePage };
    arrivalsStore.paginatedBookings = paginated;
    const split = splitBookingsByStatus(paginated);
    arrivalsStore.needsCheckInBookings = split.needsCheckIn;
    arrivalsStore.inHouseBookings = split.inHouse;
}
function getBookingsForDate(bookings, date) {
    if (!date) {
        return [];
    }
    return bookings
        .map(booking => {
        const roomsForToday = (booking.rooms ?? []).filter(room => normalizeDate(room.from_date) === date);
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
        const needsCheckInRooms = rooms.filter(room => isNeedsCheckIn(room));
        if (needsCheckInRooms.length) {
            acc.needsCheckIn.push({ ...booking, rooms: needsCheckInRooms });
        }
        const inHouseRooms = rooms.filter(room => isInHouse(room));
        if (inHouseRooms.length) {
            acc.inHouse.push({ ...booking, rooms: inHouseRooms });
        }
        return acc;
    }, { needsCheckIn: [], inHouse: [] });
}
function isNeedsCheckIn(room) {
    const code = room.in_out?.code ?? '';
    return code === '000';
}
function isInHouse(room) {
    return room.in_out?.code === '001';
}
function buildName(person) {
    const full = `${person?.first_name ?? ''} ${person?.last_name ?? ''}`.trim();
    return full.toLowerCase();
}
function getTodayString() {
    return formatDateInput(new Date());
}
function formatDateInput(value) {
    if (value instanceof Date) {
        const year = value.getFullYear();
        const month = `${value.getMonth() + 1}`.padStart(2, '0');
        const day = `${value.getDate()}`.padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    return normalizeDate(value);
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
initializeArrivalsStore();
//# sourceMappingURL=arrivals.store.js.map
