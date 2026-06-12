import { MealCountDaySummary } from "../../../services/meal-report/types";
export declare class IrMealCountSummary {
    mealCountSummary: MealCountDaySummary[];
    private columnHelper;
    private mealMeta;
    private renderMealHeader;
    private columns;
    private isAdultCol;
    private isChildCol;
    render(): any;
}
