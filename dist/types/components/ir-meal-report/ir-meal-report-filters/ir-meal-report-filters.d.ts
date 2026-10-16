import { EventEmitter } from '../../../stencil-public-runtime';
import { SetupEntries } from "../../../models/IBooking";
export declare class IrMealReportFilters {
    reportType: 'GUEST_LIST' | 'MEAL_COUNT';
    fromDate: string;
    toDate: string;
    mealType: string | null;
    setupEntries: {
        meal_type: SetupEntries[];
        hb_preference: SetupEntries[];
    };
    isLoading: boolean;
    reportTypeChange: EventEmitter<'GUEST_LIST' | 'MEAL_COUNT'>;
    dateChange: EventEmitter<{
        from: string;
        to: string;
    }>;
    mealTypeChange: EventEmitter<string>;
    filterApply: EventEmitter<void>;
    filterReset: EventEmitter<void>;
    presetDate: EventEmitter<'today' | 'tomorrow'>;
    render(): any;
}
