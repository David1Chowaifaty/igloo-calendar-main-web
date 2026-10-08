import { o as objectType, s as stringType, n as numberType, b as booleanType } from './types-CB66a07H.js';

const SetupEntrySchema = objectType({
    CODE_NAME: stringType(),
    CODE_VALUE_AR: stringType().nullable(),
    CODE_VALUE_DE: stringType().nullable(),
    CODE_VALUE_EL: stringType().nullable(),
    CODE_VALUE_EN: stringType().nullable(),
    CODE_VALUE_FR: stringType().nullable(),
    CODE_VALUE_HE: stringType().nullable(),
    CODE_VALUE_PL: stringType().nullable(),
    CODE_VALUE_RU: stringType().nullable(),
    CODE_VALUE_UA: stringType().nullable(),
    DISPLAY_ORDER: numberType().nullable(),
    ENTRY_DATE: stringType().nullable(),
    ENTRY_USER_ID: numberType().nullable(),
    INVARIANT_VALUE: stringType().nullable(),
    ISDELETEABLE: booleanType(),
    ISDELETED: booleanType(),
    ISSYSTEM: booleanType(),
    ISUPDATEABLE: booleanType(),
    ISVISIBLE: booleanType(),
    NOTES: stringType().nullable(),
    OWNER_ID: numberType().nullable(),
    TBL_NAME: stringType(),
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

export { SetupEntrySchema as S };
