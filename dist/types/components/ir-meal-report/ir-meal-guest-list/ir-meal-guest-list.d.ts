import { MealGuestEntry } from "../../../services/meal-report/types";
export declare class IrMealGuestList {
    guestList: MealGuestEntry[];
    private tableState;
    private columnHelper;
    private columns;
    private onTableStateChange;
    render(): any;
}
