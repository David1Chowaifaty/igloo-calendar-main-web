import { Booking } from "../../models/booking.dto";
export declare const _formatDate: (date: string) => string;
export declare const _getDay: (date: string) => string;
export declare const _formatTime: (hour: string, minute: string) => string;
export declare const isAgentMode: (booking: Booking) => boolean;
