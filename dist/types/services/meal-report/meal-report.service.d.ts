import { ParamsGetMealReport, ParamsSetHBPreference, GetMealReportResult } from './types';
export declare class MealReportService {
    getMealReport(props: ParamsGetMealReport): Promise<GetMealReportResult>;
    setHBPreference(props: ParamsSetHBPreference): Promise<void>;
}
