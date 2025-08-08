import { EventEmitter } from '../../../../stencil-public-runtime';
import { Moment } from 'moment';
import { IToast } from "../../../ui/ir-toast/toast";
export type RoomStatus = 'open' | 'closed';
export type SelectedRooms = {
    id: string | number;
    result: RoomStatus;
};
export declare class IglBulkBlock {
    maxDatesLength: number;
    property_id: number;
    selectedRoomTypes: Map<string | number, SelectedRooms[]>;
    selectedUnit: {
        roomtype_id: number;
        unit_id: number;
    } | null;
    errors: 'dates' | 'rooms';
    isLoading: boolean;
    dates: {
        from: Moment | null;
        to: Moment | null;
    }[];
    closeModal: EventEmitter<null>;
    toast: EventEmitter<IToast>;
    private sidebar;
    private dateRefs;
    private reloadInterceptor;
    private minDate;
    private bookingService;
    private datesSchema;
    private unitSections;
    private datesSections;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private addBlockDates;
    private activate;
    private deactivate;
    private handleDateChange;
    private addDateRow;
    render(): any;
}
