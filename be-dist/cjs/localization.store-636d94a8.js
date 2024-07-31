'use strict';

const index = require('./index-10c552bd.js');

const initialState = {
    entries: null,
    direction: 'ltr',
};
const { state: localizedWords, onChange: onCalendarDatesChange } = index.createStore(initialState);

exports.localizedWords = localizedWords;

//# sourceMappingURL=localization.store-636d94a8.js.map