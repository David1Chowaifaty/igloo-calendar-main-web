export type BookingDetailsSidebarEvents = 'guest' | 'pickup' | 'extra_note' | 'extra_service';
export type OpenSidebarEvent = {
    type: BookingDetailsSidebarEvents;
    payload?: unknown;
};
export type BookingDetailsDialogEvents = 'pms' | 'revisions';
export type OpenDialogEvent = {
    type: BookingDetailsDialogEvents;
    payload?: unknown;
};