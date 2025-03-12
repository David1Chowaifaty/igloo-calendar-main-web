'use strict';

const index = require('./index-3cfd4bf8.js');

const initialState = {
    days: [],
    months: [],
    fromDate: '',
    toDate: '',
};
const { state: calendar_dates, onChange: onCalendarDatesChange } = index.createStore(initialState);

exports.calendar_dates = calendar_dates;

//# sourceMappingURL=calendar-dates.store-3ca78a15.js.map