'use strict';

var types = require('./types-BlCoz3jZ.js');

const SetupEntrySchema = types.objectType({
    CODE_NAME: types.stringType(),
    CODE_VALUE_AR: types.stringType().nullable(),
    CODE_VALUE_DE: types.stringType().nullable(),
    CODE_VALUE_EL: types.stringType().nullable(),
    CODE_VALUE_EN: types.stringType().nullable(),
    CODE_VALUE_FR: types.stringType().nullable(),
    CODE_VALUE_HE: types.stringType().nullable(),
    CODE_VALUE_PL: types.stringType().nullable(),
    CODE_VALUE_RU: types.stringType().nullable(),
    CODE_VALUE_UA: types.stringType().nullable(),
    DISPLAY_ORDER: types.numberType().nullable(),
    ENTRY_DATE: types.stringType().nullable(),
    ENTRY_USER_ID: types.numberType().nullable(),
    INVARIANT_VALUE: types.stringType().nullable(),
    ISDELETEABLE: types.booleanType(),
    ISDELETED: types.booleanType(),
    ISSYSTEM: types.booleanType(),
    ISUPDATEABLE: types.booleanType(),
    ISVISIBLE: types.booleanType(),
    NOTES: types.stringType().nullable(),
    OWNER_ID: types.numberType().nullable(),
    TBL_NAME: types.stringType(),
})
    .passthrough();
var AmenityType;
(function (AmenityType) {
    AmenityType["Room"] = "room";
})(AmenityType || (AmenityType = {}));
var Name;
(function (Name) {
    Name["Penthouse"] = "Penthouse";
    Name["PremiumSuites"] = "Premium Suites";
    Name["StandardRooms"] = "Standard Rooms";
})(Name || (Name = {}));
var Code;
(function (Code) {
    Code["Empty"] = "";
    Code["The001"] = "001";
    Code["The002"] = "002";
})(Code || (Code = {}));

exports.SetupEntrySchema = SetupEntrySchema;
