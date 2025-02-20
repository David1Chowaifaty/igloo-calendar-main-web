import { EventEmitter } from '../../../../stencil-public-runtime';
import { TaskFilters } from '../types';
export declare class IrTasksFilters {
    isLoading: boolean;
    filters: TaskFilters;
    collapsed: boolean;
    applyFilters: EventEmitter<TaskFilters>;
    private baseFilters;
    componentWillLoad(): void;
    private updateFilter;
    private applyFiltersEvt;
    private resetFilters;
    render(): any;
}
