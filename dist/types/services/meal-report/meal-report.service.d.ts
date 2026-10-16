import { ParamsGetMealReport, ParamsSetHBPreference, GetMealReportResult } from './types';
import { TableEntries } from '../booking-service/types';
import { IEntries } from "../../models/IBooking";
export declare class MealReportService {
    getMealReport(props: ParamsGetMealReport): Promise<GetMealReportResult>;
    setHBPreference(props: ParamsSetHBPreference): Promise<void>;
    getSetupEntriesByTableNameMulti(entries: TableEntries[]): Promise<IEntries[]>;
}
