'use strict';

var index = require('./index-C59pxKl1.js');

const initialState = {
    entries: null,
    direction: 'ltr',
};
const { state: locales} = index.createStore(initialState);

exports.locales = locales;
