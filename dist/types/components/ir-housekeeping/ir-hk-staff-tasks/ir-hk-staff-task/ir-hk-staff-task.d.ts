import { Task } from "../../../../models/housekeeping";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrHkStaffTask {
    task: Task;
    future: boolean;
    taskClick: EventEmitter<Task>;
    private unitNameSizeClass;
    private get guests();
    render(): any;
}
