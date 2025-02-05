import { EventEmitter } from '../../../../stencil-public-runtime';
import { TaskFilters } from '../types';
export declare class IrTasksFilters {
    filters: TaskFilters;
    collapsed: boolean;
    applyClicked: EventEmitter<TaskFilters>;
    resetClicked: EventEmitter<TaskFilters>;
    private generateDaysFilter;
    private generateCheckinsDaysFilter;
    render(): any;
}
