import { IPmsLog } from "../../../../models/booking.dto";
export declare class IrPmsLogs {
    bookingNumber: string;
    pmsLogs: IPmsLog;
    error: string;
    private bookingService;
    private userTypeCode;
    componentWillLoad(): void;
    private init;
    render(): any;
}
