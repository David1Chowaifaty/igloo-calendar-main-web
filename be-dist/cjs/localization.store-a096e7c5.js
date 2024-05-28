'use strict';

const index = require('./index-08156e03.js');

const initialState = {
    entries: null,
    direction: 'ltr',
};
const { state: localizedWords, onChange: onCalendarDatesChange } = index.createStore(initialState);

exports.localizedWords = localizedWords;

//# sourceMappingURL=localization.store-a096e7c5.js.map