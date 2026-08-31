import { l as libExports } from './index-DeW5X45W.js';

const ZIEntrySchema = libExports.z
    .object({
    CODE_NAME: libExports.z.string(),
    CODE_VALUE_AR: libExports.z.string().nullable(),
    CODE_VALUE_DE: libExports.z.string().nullable(),
    CODE_VALUE_EL: libExports.z.string().nullable(),
    CODE_VALUE_EN: libExports.z.string().nullable(),
    CODE_VALUE_FR: libExports.z.string().nullable(),
    CODE_VALUE_HE: libExports.z.string().nullable(),
    CODE_VALUE_PL: libExports.z.string().nullable(),
    CODE_VALUE_RU: libExports.z.string().nullable(),
    CODE_VALUE_UA: libExports.z.string().nullable(),
    DISPLAY_ORDER: libExports.z.number().nullable(),
    ENTRY_DATE: libExports.z.string().nullable(),
    ENTRY_USER_ID: libExports.z.number().nullable(),
    INVARIANT_VALUE: libExports.z.string().nullable(),
    ISDELETEABLE: libExports.z.boolean(),
    ISDELETED: libExports.z.boolean(),
    ISSYSTEM: libExports.z.boolean(),
    ISUPDATEABLE: libExports.z.boolean(),
    ISVISIBLE: libExports.z.boolean(),
    NOTES: libExports.z.string().nullable(),
    OWNER_ID: libExports.z.number().nullable(),
    TBL_NAME: libExports.z.string(),
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

export { ZIEntrySchema as Z };
