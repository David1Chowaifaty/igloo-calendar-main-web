'use strict';

const utils = require('./utils-1ff7957f.js');
const index = require('./index-fbf1fe1d.js');
const moment = require('./moment-1780b03a.js');

const initialState = {
    bookings: [],
    filteredBookings: [],
    paginatedBookings: [],
    futureBookings: [],
    needsCheckInBookings: [],
    inHouseBookings: [],
    searchTerm: '',
    pagination: {
        currentPage: 1,
        pageSize: 20,
        total: 0,
        totalPages: 1,
        showing: { from: 0, to: 0 },
    },
    today: getTodayString(),
};
const { state: arrivalsStore, onChange: onArrivalsStoreChange } = index.createStore(initialState);
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
    arrivalsStore.today = moment.hooks(date, 'YYYY-MM-DD').format('YYYY-MM-DD');
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
    arrivalsStore.filteredBookings = searchedBookings;
    arrivalsStore.paginatedBookings = searchedBookings;
    const split = splitBookingsByStatus(searchedBookings);
    arrivalsStore.needsCheckInBookings = split.needsCheckIn;
    arrivalsStore.inHouseBookings = split.inHouse;
    arrivalsStore.futureBookings = split.futureRooms;
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
        const needsCheckInRooms = rooms.filter(room => isNeedsCheckIn(room));
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
    return utils.canCheckIn({
        from_date: room.from_date,
        to_date: room.to_date,
        isCheckedIn: room.in_out.code === '001',
    });
}
function isFutureCheckIn(room) {
    const code = room.in_out?.code ?? '';
    return code === '000' && moment.hooks().startOf('date').isBefore(moment.hooks(room.from_date, 'YYYY-MM-DD').startOf('day'));
}
function isInHouse(room) {
    return room.in_out?.code === '001';
}
function buildName(person) {
    const full = `${person?.first_name ?? ''} ${person?.last_name ?? ''}`.trim();
    return full.toLowerCase();
}
function getTodayString() {
    return moment.hooks().format('YYYY-MM-DD');
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

exports.arrivalsStore = arrivalsStore;
exports.initializeArrivalsStore = initializeArrivalsStore;
exports.onArrivalsStoreChange = onArrivalsStoreChange;
exports.setArrivalsPage = setArrivalsPage;
exports.setArrivalsPageSize = setArrivalsPageSize;
exports.setArrivalsReferenceDate = setArrivalsReferenceDate;
exports.setArrivalsSearchTerm = setArrivalsSearchTerm;
exports.setArrivalsTotal = setArrivalsTotal;

//# sourceMappingURL=arrivals.store-e8789ce8.js.map