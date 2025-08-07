import { EventEmitter } from '../../../../../stencil-public-runtime';
import { Task } from "../../../../../models/housekeeping";
export declare class IrTasksCard {
    task: Task;
    isCheckable: boolean;
    isSkippable: boolean;
    cleanSelectedTask: EventEmitter<Task>;
    skipSelectedTask: EventEmitter<Task>;
    render(): any;
}
