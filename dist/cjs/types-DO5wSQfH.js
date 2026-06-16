'use strict';

var index = require('./index-CLqkDPTC.js');

const SelectedUnitSchema = index.libExports.z.object({
    roomtype_id: index.libExports.z.coerce.number(),
    unit_id: index.libExports.z.coerce.number(),
    rateplan_id: index.libExports.z.coerce.number(),
});

exports.SelectedUnitSchema = SelectedUnitSchema;
