export interface ILocale {
    entries: TLocaleEntries;
    direction: 'ltr' | 'rtl';
}
export type TLocaleEntries = (LocalizationStrings & LocalizationChannelFrontEntries & BookingListingCodes & HousekeepingLocalizedWords & LocalizationPAYMENTBACK) | null;
export type LocalizationStrings = {
    Lcz_AnyInfant: string;
    Lcz_No: string;
    Lcz_ChannelNotes: string;
    Lcz_ThisService: string;
    Lcz_BookingPrivateNote: string;
    Lcz_GuestRemark: string;
    Lcz_EventsLog: string;
    Lcz_Price: string;
    Lcz_DatesOn: string;
    Lcz_TillAndIncluding: string;
    Lcz_ExtraServices: string;
    Lcz_OnCredit: string;
    Lcz_Description: string;
    Lcz_Guarantee: string;
    Lcz_PrivateNote_MaxChar: string;
    Lcz_VisibleToHotelOnly: string;
    Lcz_PrivateNote: string;
    Lcz_BookingCode: string;
    Lcz_Single_Adult: string;
    Lcz_Single_Child: string;
    Lcz_Adding: string;
    Lcz_AddingRoomNightsTo: string;
    Lcz_AddingUnitToBooking: string;
    Lcz_Address: string;
    Lcz_AddRoom: string;
    Lcz_AdultsCaption: string;
    Lcz_AllAssignForThisDay: string;
    Lcz_AllBookingsAreAssigned: string;
    Lcz_AlternativeEmail: string;
    Lcz_Amount: string;
    Lcz_AnyMessageForUs: string;
    Lcz_Infant: string;
    Lcz_Infants: string;
    Lcz_AreYouSureDoYouWantToRemove: string;
    Lcz_AreYouSureWantToMoveAnotherUnit: string;
    Lcz_ArrivalTime: string;
    Lcz_Assign: string;
    Lcz_Assignments: string;
    Lcz_AssignUnit: string;
    Lcz_SelectRatePlan: string;
    Lcz_FindEmailAddress: string;
    Lcz_Assignunits: string;
    Lcz_AssignUnitToExistingBooking: string;
    Lcz_AutomaticReleaseIn: string;
    Lcz_Back: string;
    Lcz_BalanceWillBeCalculated: string;
    Lcz_Adults: string;
    Lcz_Adult: string;
    Lcz_Child: string;
    Lcz_Children: string;
    Lcz_Blockdates: string;
    Lcz_BlockDatesFor: string;
    Lcz_BlockedTill: string;
    Lcz_Book: string;
    Lcz_BookAndChekcIn: string;
    Lcz_BookedBy: string;
    Lcz_Booking: string;
    Lcz_BookingGuarantee: string;
    Lcz_BookingNumber: string;
    Lcz_Breakdown: string;
    Lcz_Cancel: string;
    Lcz_Cancellation: string;
    Lcz_CannotChangeCHBookings: string;
    Lcz_CannotModifyCHBooking: string;
    Lcz_CardHolderName: string;
    Lcz_CardNumber: string;
    Lcz_Check: string;
    Lcz_CheckIn: string;
    Lcz_CheckInDateShouldBeMAx: string;
    Lcz_CheckingRoomAvailability: string;
    Lcz_CheckOut: string;
    Lcz_ChildCaption: string;
    Lcz_ChooseBookingNumber: string;
    Lcz_City: string;
    Lcz_Confirm: string;
    Lcz_Confirmation: string;
    Lcz_Confirmed: string;
    Lcz_ContactNumber: string;
    Lcz_ConvertToBooking: string;
    Lcz_Country: string;
    Lcz_CreateNewBooking: string;
    Lcz_Current: string;
    Lcz_Date: string;
    Lcz_Dates: string;
    Lcz_Delete: string;
    Lcz_Designation: string;
    Lcz_DueBalance: string;
    Lcz_Edit: string;
    Lcz_EditBookingFor: string;
    Lcz_Email: string;
    Lcz_EmailAddress: string;
    Lcz_EmailTheGuest: string;
    Lcz_ExpiryDate: string;
    Lcz_FetchingUnAssignedUnits: string;
    Lcz_FindUnit: string;
    Lcz_FirstName: string;
    Lcz_From: string;
    Lcz_FromThisBooking: string;
    Lcz_GuestDetails: string;
    Lcz_GuestFirstnameAndLastname: string;
    Lcz_In: string;
    Lcz_InternalRemark: string;
    Lcz_Isd: string;
    Lcz_IsNotFound: string;
    Lcz_LastName: string;
    Lcz_Legend: string;
    Lcz_Loading: string;
    Lcz_MealPlan: string;
    Lcz_MobilePhone: string;
    Lcz_MonthAndYear: string;
    Lcz_Navigate: string;
    Lcz_NewBooking: string;
    Lcz_NewBookingFor: string;
    Lcz_Newsletter: string;
    Lcz_Next: string;
    Lcz_Night: string;
    Lcz_Nights: string;
    Lcz_NoAvailabilityForAdditionalNights: string;
    Lcz_NonRefundable: string;
    Lcz_NoResultsFound: string;
    Lcz_Note: string;
    Lcz_NumberOfGuests: string;
    Lcz_Occupancy: string;
    Lcz_OfflineAvailability: string;
    Lcz_Ok: string;
    Lcz_On: string;
    Lcz_OptionalReason: string;
    Lcz_Or: string;
    Lcz_Out: string;
    Lcz_OutOfservice: string;
    Lcz_OverlappingDates: string;
    Lcz_PaymentDueDates: string;
    Lcz_Payments: string;
    Lcz_Phone: string;
    Lcz_PlzSelectNumberOfGuests: string;
    Lcz_RatePlan: string;
    Lcz_Reason: string;
    Lcz_Refundable: string;
    Lcz_SameRatesWillBeKept: string;
    Lcz_Save: string;
    Lcz_BookedOn: string;
    Lcz_GuestPrivateNote: string;
    Lcz_Select: string;
    Lcz_Source: string;
    Lcz_SpecialRate: string;
    Lcz_TheBooking: string;
    Lcz_To: string;
    Lcz_Tobooking: string;
    Lcz_Collected: string;
    Lcz_BookingsNbr: string;
    Lcz_Today: string;
    Lcz_TotalAvailability: string;
    Lcz_TotalPrice: string;
    Lcz_Unassign: string;
    Lcz_UnassignedUnits: string;
    Lcz_UnassignedUnitsTooltip: string;
    Lcz_Update: string;
    Lcz_UpdateStatus: string;
    Lcz_Year: string;
    Lcz_Years: string;
    Lcz_YourArrivalTime: string;
    Lcz_Rate: string;
    Lcz_YouWillLoseFutureUpdates: string;
    Lcz_NoRatePlanDefined: string;
    Lcz_Stay: string;
    Lcz_BedConfiguration: string;
    Lcz_SelectStatus: string;
    Lcz_StatusUpdatedSuccessfully: string;
    Lcz_Pickup: string;
    Lcz_ArrivalDate: string;
    Lcz_Time: string;
    Lcz_FlightDetails: string;
    Lcz_DueUponBooking: string;
    Lcz_NbrOfVehicles: string;
    Lcz_Pickup_YesFrom: string;
    Lcz_Pickup_NoThankYou: string;
    Lcz_EnterAmount: string;
    Lcz_Excluding: string;
    Lcz_Including: string;
    Lcz_SubTotal: string;
    Lcz_ShowLess: string;
    Lcz_ShowMore: string;
    Lcz_TotalCost: string;
    Lcz_Cost: string;
    Lcz_pms: string;
    Lcz_YES: string;
    Lcz_NO: string;
    Lcz_Acknowledged: string;
    Lcz_SentAt: string;
    Lcz_PMS_Logs: string;
    Lcz_LoyaltyDiscountApplied: string;
    Lcz_Coupon: string;
    Lcz_ConfrmModiication: string;
    Lcz_EnteringAmountGreaterThanDue: string;
    Lcz_IfDeletedPermantlyLost: string;
};
export type BookingListingCodes = {
    Lcz_ExtraServices: string;
    Lcz_TotalCost: string;
    Lcz_Cost: string;
    Lcz_BookedOn: string;
    Lcz_Booking: string;
    Lcz_BookingNbr: string;
    Lcz_BookingNbrGuestname: string;
    Lcz_Bookings: string;
    Lcz_BookingStatus: string;
    Lcz_Cancel: string;
    Lcz_Channels: string;
    Lcz_DateOf: string;
    Lcz_From: string;
    Lcz_GuestSource: string;
    Lcz_InOut: string;
    Lcz_JustDelete: string;
    Lcz_OK: string;
    Lcz_Or: string;
    Lcz_CreateNewBooking: string;
    Lcz_Price: string;
    Lcz_Balance: string;
    Lcz_RecoverAndDelete: string;
    Lcz_Services: string;
    Lcz_Status: string;
    Lcz_SureYouWantToDeleteBookingNbr: string;
    Lcz_Until: string;
    Lcz_View: string;
    Lcz_WantToRecoverAllotment: string;
    Lcz_MarkBookingAsPaid: string;
    Lcz_Dates: string;
    Lcz_Confirm: string;
    Lcz_P: string;
    Lcz_Of: string;
    Lcz_ExportToExcel: string;
    Lcz_Erase: string;
    Lcz_Search: string;
    Lcz_PaymentStatus: string;
    Lcz_FindBookNbrorName: string;
    Lcz_ClickToSettle: string;
    Lcz_BookingBalance: string;
    Lcz_NoDataAvailable: string;
    Lcz_All: string;
    Lcz_AgentCode: string;
};
export type HousekeepingLocalizedWords = {
    Lcz_Action: string;
    Lcz_AsAnOption: string;
    Lcz_Assign: string;
    Lcz_Assigned: string;
    Lcz_AssignmentFor: string;
    Lcz_AssignUnitsTo: string;
    Lcz_Cancel: string;
    Lcz_Code: string;
    Lcz_Confirm: string;
    Lcz_CreateHousekeeper: string;
    Lcz_CreateHousekeeperProfile: string;
    Lcz_DayPrior: string;
    Lcz_DaysPrior: string;
    Lcz_DeleteHousekeeper: string;
    Lcz_Edit: string;
    Lcz_EditHousekeeper: string;
    Lcz_EditHousekeeperProfile: string;
    Lcz_HousekeepingTeam: string;
    Lcz_MinimumCharacter: string;
    Lcz_Mobile: string;
    Lcz_Name: string;
    Lcz_No: string;
    Lcz_nobody: string;
    Lcz_Note: string;
    Lcz_Password: string;
    Lcz_RoomOnUnitStatus: string;
    Lcz_RoomOrUnitStatus: string;
    Lcz_Save: string;
    Lcz_Select: string;
    Lcz_Status: string;
    Lcz_TotalUnits: string;
    Lcz_Unassigned: string;
    Lcz_UnitsAssigned: string;
    Lcz_Username: string;
    Lcz_YesOnTheSameDay: string;
    Lcz_Unit: string;
    Lcz_Arrivaldate: string;
    Lcz_Arrivaltime: string;
    Lcz_Housekeeper: string;
    Lcz_Done: string;
    Lcz_Allhousekeepers: string;
    Lcz_Archive: string;
    Lcz_Yes: string;
    Lcz_IsCleaned: string;
    Lcz_ConfirmDeletion: string;
};
export type LocalizationChannelFrontEntries = {
    Lcz_HousekeepingTasks: string;
    Lcz_Actions: string;
    Lcz_Cancel: string;
    Lcz_Channel: string;
    Lcz_ChannelBooking: string;
    Lcz_Confirm: string;
    Lcz_ConnectedChannel: string;
    Lcz_ConnectionSettings: string;
    Lcz_NotMapped: string;
    Lcz_CreateChannel: string;
    Lcz_Delete: string;
    Lcz_Edit: string;
    Lcz_EditChannel: string;
    Lcz_FullSync: string;
    Lcz_GeneralSettings: string;
    Lcz_HotelID: string;
    Lcz_IncorrectConnection: string;
    Lcz_iSWITCH: string;
    Lcz_Mapping: string;
    Lcz_Ok: string;
    Lcz_PullFutureReservations: string;
    Lcz_Refresh: string;
    Lcz_Save: string;
    Lcz_ScheduleFullSync: string;
    Lcz_Status: string;
    Lcz_ThisActionWillDelete: string;
    Lcz_Title: string;
    Lcz_UnSavedChangesWillBeLost: string;
    Lcz_ViewLogs: string;
    Lcz_TestConnection: string;
    Lcz_NoChannelsAreConnected: string;
    Lcz_InvalidCredentials: string;
};
export type LocalizationPAYMENTBACK = {
    Lcz_Action: string;
    Lcz_Cancel: string;
    Lcz_Edit: string;
    Lcz_Information: string;
    Lcz_PaymentMethod: string;
    Lcz_PaymentOptions: string;
    Lcz_Save: string;
    Lcz_Saved: string;
    Lcz_Status: string;
    Lcz_YouMustFillEnglishField: string;
};
export declare const locales: ILocale, onCalendarDatesChange: import("@stencil/store/dist/types").OnChangeHandler<ILocale>;
export default locales;