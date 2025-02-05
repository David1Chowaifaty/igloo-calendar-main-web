import { IPendingActions } from "../../../models/housekeeping";
export interface Task {
    id: number;
    date: string;
    unit: number;
    status: string;
    hint?: string;
    a: number;
    c: number;
    i: number;
    housekeeper: string;
}
export declare class IrHkTasks {
    el: HTMLElement;
    language: string;
    ticket: string;
    propertyid: number;
    p: string;
    isLoading: boolean;
    selectedDuration: string;
    selectedHouseKeeper: string;
    selectedRoom: IPendingActions | null;
    archiveOpened: boolean;
    property_id: number;
    render(): any;
}
