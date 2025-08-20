import { EventEmitter } from '../../../../../stencil-public-runtime';
import { CleanTaskEvent, Task } from "../../../../../models/housekeeping";
export declare class IrTasksCard {
    task: Task;
    isCheckable: boolean;
    isSkippable: boolean;
    cleanSelectedTask: EventEmitter<CleanTaskEvent>;
    skipSelectedTask: EventEmitter<Task>;
    render(): any;
}
