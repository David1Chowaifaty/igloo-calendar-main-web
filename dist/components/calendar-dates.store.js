import { c as createStore } from './index2.js';

const initialState = {
    days: [],
    months: [],
    fromDate: '',
    toDate: '',
};
const { state: calendar_dates, onChange: onCalendarDatesChange } = createStore(initialState);

export { calendar_dates as c };

//# sourceMappingURL=calendar-dates.store.js.map