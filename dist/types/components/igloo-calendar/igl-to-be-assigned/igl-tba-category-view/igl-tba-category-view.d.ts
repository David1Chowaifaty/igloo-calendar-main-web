import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IglTbaCategoryView {
    calendarData: {
        [key: string]: any;
    };
    selectedDate: any;
    categoriesData: {
        [key: string]: any;
    };
    categoryId: any;
    eventDatas: any;
    categoryIndex: any;
    renderAgain: boolean;
    assignUnitEvent: EventEmitter<{
        [key: string]: any;
    }>;
    handleAssignRoomEvent(event: CustomEvent<{
        [key: string]: any;
    }>): void;
    getEventView(categoryId: any, eventDatas: any): any;
    renderView(): void;
    render(): any;
}
