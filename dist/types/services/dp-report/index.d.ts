import { DpReport, GetDPBookingsReportParams } from './types';
export declare class DpReportService {
    /** Callers are expected to have already resolved property_id/property_ids/channel for the user's privilege level. */
    getDPBookingsReport(params: GetDPBookingsReportParams): Promise<DpReport>;
}
