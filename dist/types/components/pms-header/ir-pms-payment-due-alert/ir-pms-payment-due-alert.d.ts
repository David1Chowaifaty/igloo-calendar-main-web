import type { FetchNotificationsResult as Notifications } from "../../../services/property/types";
export declare class IrPmsPaymentDueAlert {
    propertyid: number;
    ticket: string;
    baseUrl: string;
    notifications: Notifications;
    private tokenService;
    private propertyService;
    componentWillLoad(): void;
    handleTicketChange(newValue: string, oldValue: string): void;
    private fetchNotifications;
    render(): any;
}
