'use strict';

const axios = require('./axios-6e678d52.js');
const booking_service = require('./booking.service-08b2e7ab2.js');
const calendarDates_store = require('./calendar-dates.store-1cc2d53b.js');

class EventsService {
    constructor() {
        this.bookingService = new booking_service.BookingService();
    }
    async reallocateEvent(pool, destination_pr_id, from_date, to_date) {
        try {
            console.log(pool, destination_pr_id, from_date, to_date);
            const { data } = await axios.axios.post(`/ReAllocate_Exposed_Room`, { pool, destination_pr_id, from_date, to_date, extras: calendarDates_store.extras });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            console.log(data);
            return data;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    async deleteEvent(POOL) {
        try {
            const { data } = await axios.axios.post(`/UnBlock_Exposed_Unit`, {
                POOL,
            });
            if (data.ExceptionMsg !== '') {
                throw new Error(data.ExceptionMsg);
            }
            return data.My_Result;
        }
        catch (error) {
            console.log(error);
            throw new Error(error);
        }
    }
    async updateBlockedEvent(bookingEvent) {
        try {
            const releaseData = calendarDates_store.getReleaseHoursString(+bookingEvent.RELEASE_AFTER_HOURS);
            await this.deleteEvent(bookingEvent.POOL);
            const result = await this.bookingService.blockUnit(Object.assign({ from_date: this.formatDate(bookingEvent.FROM_DATE), to_date: this.formatDate(bookingEvent.TO_DATE), pr_id: bookingEvent.PR_ID, STAY_STATUS_CODE: bookingEvent.OUT_OF_SERVICE ? '004' : bookingEvent.RELEASE_AFTER_HOURS === 0 ? '002' : '003', DESCRIPTION: bookingEvent.RELEASE_AFTER_HOURS || '', NOTES: bookingEvent.OPTIONAL_REASON || '' }, releaseData));
            return result;
        }
        catch (error) {
            console.error(error);
            throw new Error(error);
        }
    }
    formatDate(date) {
        return date.split('/').join('-');
    }
}

exports.EventsService = EventsService;

//# sourceMappingURL=events.service-ef03be45.js.map