import { EventEmitter } from '../../../../stencil-public-runtime';
import { TaskFilters } from '../types';
export type ModifiedTaskFilters = Omit<TaskFilters, 'housekeepers'> & {
    housekeepers: string;
};
export declare class IrTasksFilters {
    isLoading: boolean;
    filters: ModifiedTaskFilters;
    collapsed: boolean;
    applyFilters: EventEmitter<TaskFilters>;
    private baseFilters;
    componentWillLoad(): void;
    private updateFilter;
    private applyFiltersEvt;
    private resetFilters;
    render(): any;
}
