import { z } from './index2.js';

const ZIEntrySchema = z.object({
    CODE_NAME: z.string(),
    CODE_VALUE_AR: z.string().nullable(),
    CODE_VALUE_DE: z.string().nullable(),
    CODE_VALUE_EL: z.string().nullable(),
    CODE_VALUE_EN: z.string().nullable(),
    CODE_VALUE_FR: z.string().nullable(),
    CODE_VALUE_HE: z.string().nullable(),
    CODE_VALUE_PL: z.string().nullable(),
    CODE_VALUE_RU: z.string().nullable(),
    CODE_VALUE_UA: z.string().nullable(),
    DISPLAY_ORDER: z.number().nullable(),
    ENTRY_DATE: z.string().nullable(),
    ENTRY_USER_ID: z.number().nullable(),
    INVARIANT_VALUE: z.string().nullable(),
    ISDELETEABLE: z.boolean(),
    ISDELETED: z.boolean(),
    ISSYSTEM: z.boolean(),
    ISUPDATEABLE: z.boolean(),
    ISVISIBLE: z.boolean(),
    NOTES: z.string().nullable(),
    OWNER_ID: z.number().nullable(),
    TBL_NAME: z.string(),
});
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

//# sourceMappingURL=IBooking.js.map