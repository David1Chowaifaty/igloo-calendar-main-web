import { s as sortRoomsByTime, r as roomArrivalMinutes } from './room-movement-time-DWm_ef3q.js';
import { c as canCheckIn } from './utils-Dg1mqsnA.js';
import { c as createStore } from './locale-scope-Jre4lb6k.js';
import { h as hooks } from './moment-Mki5YqAR.js';

const initialState = {
    bookings: [],
    filteredBookings: [],
    paginatedBookings: [],
    futureBookings: [],
    needsCheckInBookings: [],
    inHouseBookings: [],
    searchTerm: '',
    sortByTime: false,
    pagination: {
        currentPage: 1,
        pageSize: 20,
        total: 0,
        totalPages: 1,
        showing: { from: 0, to: 0 },
    },
    today: getTodayString(),
};
const { state: arrivalsStore, onChange: onArrivalsStoreChange } = createStore(initialState);
function initializeArrivalsStore(bookings = []) {
    arrivalsStore.bookings = Array.isArray(bookings) ? [...bookings] : [];
    runArrivalsPipeline();
}
function setArrivalsSearchTerm(term) {
    arrivalsStore.searchTerm = term ?? '';
    runArrivalsPipeline();
}
function setArrivalsPage(page) {
    const safePage = clampPage(page, Math.max(arrivalsStore.pagination.totalPages, 1));
    arrivalsStore.pagination = {
        ...arrivalsStore.pagination,
        currentPage: safePage,
        showing: calculateShowing(safePage, arrivalsStore.pagination.pageSize, arrivalsStore.pagination.total),
    };
    runArrivalsPipeline();
}
function setArrivalsTotal(total) {
    const normalizedTotal = Number.isFinite(total) && total > 0 ? Math.floor(total) : 0;
    const totalPages = calculateTotalPages(normalizedTotal, arrivalsStore.pagination.pageSize);
    const safePage = clampPage(arrivalsStore.pagination.currentPage, Math.max(totalPages, 1));
    arrivalsStore.pagination = {
        ...arrivalsStore.pagination,
        total: normalizedTotal,
        totalPages: Math.max(totalPages, 1),
        currentPage: safePage,
        showing: calculateShowing(safePage, arrivalsStore.pagination.pageSize, normalizedTotal),
    };
}
function setArrivalsPageSize(pageSize) {
    if (!Number.isFinite(pageSize) || pageSize <= 0) {
        return;
    }
    const normalizedPageSize = Math.floor(pageSize);
    arrivalsStore.pagination = {
        ...arrivalsStore.pagination,
        pageSize: normalizedPageSize,
        currentPage: 1,
        showing: calculateShowing(1, normalizedPageSize, arrivalsStore.pagination.total),
    };
    runArrivalsPipeline();
}
function setArrivalsReferenceDate(date) {
    arrivalsStore.today = hooks(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
    arrivalsStore.pagination = {
        ...arrivalsStore.pagination,
        currentPage: 1,
        showing: calculateShowing(1, arrivalsStore.pagination.pageSize, arrivalsStore.pagination.total),
    };
    runArrivalsPipeline();
}
function runArrivalsPipeline() {
    const bookingsForToday = getBookingsForDate(arrivalsStore.bookings, arrivalsStore.today);
    const searchedBookings = filterBookingsBySearch(bookingsForToday, arrivalsStore.searchTerm);
    const order = (bookings) => (arrivalsStore.sortByTime ? sortRoomsByTime(bookings, roomArrivalMinutes) : bookings);
    arrivalsStore.filteredBookings = order(searchedBookings);
    arrivalsStore.paginatedBookings = arrivalsStore.filteredBookings;
    const split = splitBookingsByStatus(searchedBookings);
    arrivalsStore.needsCheckInBookings = order(split.needsCheckIn);
    arrivalsStore.inHouseBookings = order(split.inHouse);
    arrivalsStore.futureBookings = order(split.futureRooms);
}
/** Orders the rooms by arrival time, each on its own row (the dashboard), or keeps the API's booking order. */
function setArrivalsSortByTime(enabled) {
    arrivalsStore.sortByTime = enabled;
    runArrivalsPipeline();
}
function getBookingsForDate(bookings, date) {
    if (!date) {
        return [];
    }
    return bookings;
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
        let needsCheckInRooms = [];
        try {
            needsCheckInRooms = rooms.filter(room => isNeedsCheckIn(room));
        }
        catch (error) {
            console.error(error);
        }
        if (needsCheckInRooms.length) {
            acc.needsCheckIn.push({ ...booking, rooms: needsCheckInRooms });
        }
        const inHouseRooms = rooms.filter(room => isInHouse(room));
        if (inHouseRooms.length) {
            acc.inHouse.push({ ...booking, rooms: inHouseRooms });
        }
        const futureCheckIns = rooms.filter(room => isFutureCheckIn(room));
        if (futureCheckIns.length) {
            acc.futureRooms.push({ ...booking, rooms: futureCheckIns });
        }
        return acc;
    }, { needsCheckIn: [], inHouse: [], futureRooms: [] });
}
function isNeedsCheckIn(room) {
    // if (!room.unit) {
    //   return false;
    // }
    return canCheckIn({
        from_date: room.from_date,
        to_date: room.to_date,
        isCheckedIn: room.in_out.code === '001',
        skipAutoCheckIn: true,
        date: arrivalsStore.today,
    });
}
function isFutureCheckIn(room) {
    const code = room.in_out?.code ?? '';
    // Relative to the store's day (the dashboard's selected day), not the real today.
    return code === '000' && arrivalsStore.today < room.from_date;
}
function isInHouse(room) {
    return room.in_out?.code === '001';
}
function buildName(person) {
    const full = `${person?.first_name ?? ''} ${person?.last_name ?? ''}`.trim();
    return full.toLowerCase();
}
function getTodayString() {
    return hooks().format('YYYY-MM-DD');
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
initializeArrivalsStore();

export { arrivalsStore as a, setArrivalsReferenceDate as b, setArrivalsPageSize as c, setArrivalsTotal as d, setArrivalsPage as e, setArrivalsSortByTime as f, initializeArrivalsStore as i, onArrivalsStoreChange as o, setArrivalsSearchTerm as s };
