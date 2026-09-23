import { EventEmitter } from '../../../../stencil-public-runtime';
import { UnassignedCategory } from "../../../../services/unassigned-units/types";
export declare class IglTbaCategoryView {
    calendarData: {
        [key: string]: any;
    };
    category: UnassignedCategory;
    selectedDate: string;
    categoryIndex: number;
    assignUnitEvent: EventEmitter<{
        identifier: string;
    }>;
    private handleAssignRoom;
    render(): any;
}
