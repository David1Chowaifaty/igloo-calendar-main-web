'use strict';

var index = require('./index-DN8J4ULi.js');

const initialState = {
    entries: null,
    direction: 'ltr',
    language: 'en',
};
const { state: locales} = index.createStore(initialState);

exports.locales = locales;
