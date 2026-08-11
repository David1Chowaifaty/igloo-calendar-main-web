'use strict';

var index = require('./index-BXsYsiHK.js');

const initialState = {
    entries: null,
    direction: 'ltr',
};
const { state: locales} = index.createStore(initialState);

exports.locales = locales;
