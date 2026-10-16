'use strict';

var types = require('./types-BVJQZ50e.js');

const SelectedUnitSchema = types.objectType({
    roomtype_id: types.coerce.number(),
    unit_id: types.coerce.number(),
    rateplan_id: types.coerce.number(),
});

exports.SelectedUnitSchema = SelectedUnitSchema;
