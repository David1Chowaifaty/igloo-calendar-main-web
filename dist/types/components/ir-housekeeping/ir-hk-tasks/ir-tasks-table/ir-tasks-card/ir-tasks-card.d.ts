import { EventEmitter } from '../../../../../stencil-public-runtime';
import { CleanTaskEvent, Task } from "../../../../../models/housekeeping";
export declare class IrTasksCard {
    task: Task;
    isCheckable: boolean;
    isSkippable: boolean;
    cleanSelectedTask: EventEmitter<CleanTaskEvent>;
    skipSelectedTask: EventEmitter<Task>;
    assignHousekeeper: EventEmitter<{
        task: Task;
        hkm_id: number;
    }>;
    private taskTypeBadge;
    private get guests();
    render(): any;
}
