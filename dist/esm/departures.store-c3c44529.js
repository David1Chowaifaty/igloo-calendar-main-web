import { A as canCheckout } from './utils-78094d83.js';
import { c as createStore } from './index-f100e9d2.js';
import { h as hooks } from './moment-ab846cee.js';

const initialState = {
    bookings: [],
    filteredBookings: [],
    paginatedBookings: [],
    needsCheckOutBookings: [],
    futureRooms: [],
    outBookings: [],
    searchTerm: '',
    pagination: {
        page: 1,
        pageSize: 20,
        total: 0,
        totalPages: 1,
        currentPage: 1,
        showing: { from: 0, to: 0 },
    },
    today: getTodayString(),
};
const { state: departuresStore, onChange: onDeparturesStoreChange } = createStore(initialState);
function initializeDeparturesStore(bookings = []) {
    departuresStore.bookings = Array.isArray(bookings) ? [...bookings] : [];
    runDeparturesPipeline();
}
function setDepartureTotal(total) {
    const normalizedTotal = Number.isFinite(total) && total > 0 ? Math.floor(total) : 0;
    const totalPages = calculateTotalPages(normalizedTotal, departuresStore.pagination.pageSize);
    const safePage = clampPage(departuresStore.pagination.currentPage, Math.max(totalPages, 1));
    departuresStore.pagination = {
        ...departuresStore.pagination,
        total: normalizedTotal,
        totalPages: Math.max(totalPages, 1),
        currentPage: safePage,
        showing: calculateShowing(safePage, departuresStore.pagination.pageSize, normalizedTotal),
    };
}
function calculateTotalPages(total, pageSize) {
    if (!total || !pageSize) {
        return 0;
    }
    return Math.ceil(total / pageSize);
}
function clampPage(page, totalPages) {
    if (!Number.isFinite(page) || page <= 0) {
        return 1;
    }
    const normalizedPage = Math.floor(page);
    return Math.min(Math.max(normalizedPage, 1), Math.max(totalPages, 1));
}
function calculateShowing(page, pageSize, total) {
    if (!total || !pageSize) {
        return { from: 0, to: 0 };
    }
    const start = (page - 1) * pageSize + 1;
    return {
        from: Math.max(start, 1),
        to: Math.min(start + pageSize - 1, total),
    };
}
function setDeparturesSearchTerm(term) {
    departuresStore.searchTerm = term ?? '';
    runDeparturesPipeline();
}
function setDeparturesPage(page) {
    const safePage = clampPage(page, Math.max(departuresStore.pagination.totalPages, 1));
    departuresStore.pagination = {
        ...departuresStore.pagination,
        currentPage: safePage,
        showing: calculateShowing(safePage, departuresStore.pagination.pageSize, departuresStore.pagination.total),
    };
    runDeparturesPipeline();
}
function setDeparturesPageSize(pageSize) {
    if (!Number.isFinite(pageSize) || pageSize <= 0) {
        return;
    }
    const normalizedPageSize = Math.floor(pageSize);
    departuresStore.pagination = {
        ...departuresStore.pagination,
        pageSize: normalizedPageSize,
        currentPage: 1,
        showing: calculateShowing(1, normalizedPageSize, departuresStore.pagination.total),
    };
    runDeparturesPipeline();
}
function setDeparturesReferenceDate(date) {
    departuresStore.today = hooks(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    runDeparturesPipeline();
}
function runDeparturesPipeline() {
    const searchedBookings = filterBookingsBySearch(departuresStore.searchTerm);
    departuresStore.filteredBookings = searchedBookings;
    departuresStore.paginatedBookings = searchedBookings;
    const split = splitBookingsByStatus(searchedBookings);
    console.log(searchedBookings, split);
    departuresStore.needsCheckOutBookings = split.needsCheckOut;
    departuresStore.outBookings = split.out;
    departuresStore.futureRooms = split.futureRooms;
}
function filterBookingsBySearch(term) {
    const bookings = departuresStore.bookings;
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
        const futureRooms = rooms.filter(room => isFuture(room));
        if (futureRooms.length) {
            acc.out.push({ ...booking, rooms: futureRooms });
        }
        return acc;
    }, { needsCheckOut: [], out: [], futureRooms: [] });
}
function isNeedsCheckOut(room) {
    return canCheckout({ to_date: room.to_date, inOutCode: room.in_out.code, skipAutoCheckout: true });
}
function isOut(room) {
    return room.in_out?.code === '002';
}
function isFuture(room) {
    return hooks().isBefore(hooks(room.to_date, 'YYYY-MM-DD'), 'date');
}
function buildName(person) {
    const full = `${person?.first_name ?? ''} ${person?.last_name ?? ''}`.trim();
    return full.toLowerCase();
}
function getTodayString() {
    return hooks().format('YYYY-MM-DD');
}
initializeDeparturesStore();

export { setDeparturesReferenceDate as a, setDepartureTotal as b, setDeparturesPage as c, departuresStore as d, setDeparturesPageSize as e, initializeDeparturesStore as i, onDeparturesStoreChange as o, setDeparturesSearchTerm as s };

//# sourceMappingURL=departures.store-c3c44529.js.map