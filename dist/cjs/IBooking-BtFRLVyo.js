'use strict';

var index = require('./index-CLqkDPTC.js');

const ZIEntrySchema = index.libExports.z
    .object({
    CODE_NAME: index.libExports.z.string(),
    CODE_VALUE_AR: index.libExports.z.string().nullable(),
    CODE_VALUE_DE: index.libExports.z.string().nullable(),
    CODE_VALUE_EL: index.libExports.z.string().nullable(),
    CODE_VALUE_EN: index.libExports.z.string().nullable(),
    CODE_VALUE_FR: index.libExports.z.string().nullable(),
    CODE_VALUE_HE: index.libExports.z.string().nullable(),
    CODE_VALUE_PL: index.libExports.z.string().nullable(),
    CODE_VALUE_RU: index.libExports.z.string().nullable(),
    CODE_VALUE_UA: index.libExports.z.string().nullable(),
    DISPLAY_ORDER: index.libExports.z.number().nullable(),
    ENTRY_DATE: index.libExports.z.string().nullable(),
    ENTRY_USER_ID: index.libExports.z.number().nullable(),
    INVARIANT_VALUE: index.libExports.z.string().nullable(),
    ISDELETEABLE: index.libExports.z.boolean(),
    ISDELETED: index.libExports.z.boolean(),
    ISSYSTEM: index.libExports.z.boolean(),
    ISUPDATEABLE: index.libExports.z.boolean(),
    ISVISIBLE: index.libExports.z.boolean(),
    NOTES: index.libExports.z.string().nullable(),
    OWNER_ID: index.libExports.z.number().nullable(),
    TBL_NAME: index.libExports.z.string(),
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

exports.ZIEntrySchema = ZIEntrySchema;
