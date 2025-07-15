import { EventEmitter } from '../../../../../stencil-public-runtime';
import { Task } from "../../../../../models/housekeeping";
export declare class IrTasksCard {
    task: Task;
    isCheckable: boolean;
    cleanSelectedTask: EventEmitter<Task>;
    render(): any;
}
