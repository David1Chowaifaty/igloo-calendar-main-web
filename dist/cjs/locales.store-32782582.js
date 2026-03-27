'use strict';

const index = require('./index-fbf1fe1d.js');

const initialState = {
    entries: null,
    direction: 'ltr',
};
const { state: locales, onChange: onCalendarDatesChange } = index.createStore(initialState);

exports.locales = locales;

//# sourceMappingURL=locales.store-32782582.js.map