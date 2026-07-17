'use strict';

var index = require('./index-KxiFTvIk.js');

const initialState = {
    entries: null,
    direction: 'ltr',
};
const { state: locales} = index.createStore(initialState);

exports.locales = locales;
