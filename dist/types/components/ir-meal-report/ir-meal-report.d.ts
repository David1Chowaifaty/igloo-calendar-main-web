import { IEntries } from "../../models/IBooking";
import { MealCountDaySummary, MealGuestEntry } from "../../services/meal-report/types";
export declare class IrMealReport {
    ticket: string;
    propertyid: number;
    baseurl: string;
    language: string;
    isPageLoading: boolean;
    isExporting: boolean;
    isDataLoading: boolean;
    localReportType: 'GUEST_LIST' | 'MEAL_COUNT';
    localFrom: string;
    localTo: string;
    localMealType: string | null;
    guestList: MealGuestEntry[];
    mealCountSummary: MealCountDaySummary[];
    setupEntries: {
        meal_type: IEntries[];
        hb_preference: IEntries[];
    };
    private mealReportService;
    private tokenService;
    ticketChanged(newValue: string): void;
    componentWillLoad(): Promise<void>;
    handlePropertyChange(): Promise<void>;
    init(): Promise<void>;
    applyFilters(): Promise<void>;
    resetFilters(): void;
    setPresetDate(type: 'today' | 'tomorrow'): Promise<void>;
    handleExport(): Promise<void>;
    render(): any;
}
