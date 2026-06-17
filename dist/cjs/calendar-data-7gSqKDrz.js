'use strict';

var index = require('./index-BJltewV-.js');

const initialState = {
    adultChildConstraints: {
        adult_max_nbr: 0,
        child_max_nbr: 0,
        child_max_age: 0,
    },
    unitIssues: null,
    cleaning_frequency: null,
    checkin_checkout_hours: null,
    allowedBookingSources: [],
    currency: undefined,
    property: null,
    colorsForegrounds: null,
    endingDate: 0,
    housekeeping_enabled: true, //TODO: revert to true
    formattedLegendData: undefined,
    is_vacation_rental: false,
    legendData: [],
    roomsInfo: [],
    startingDate: 0,
    language: '',
    toBeAssignedEvents: [],
    allowed_payment_methods: [],
    pickup_service: undefined,
    checkin_enabled: true, //TODO: revert to true
    max_nights: 0,
    is_frontdesk_enabled: false,
    taxes: [],
    id: null,
    name: '',
    token: '',
    tax_statement: '',
    country: undefined,
    is_pms_enabled: false,
    roomHistory: {},
    is_automatic_check_in_out: false,
};
const { state: calendar_data} = index.createStore(initialState);

exports.calendar_data = calendar_data;
