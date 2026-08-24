import { EventEmitter } from '../../../../stencil-public-runtime';
import { RoomListItem } from '../types';
/**
 * The `.topLeftCell` sticky bar of `igl-cal-header`: unassigned-units / day-use-bookings buttons,
 * date navigation, rectifier and stop/open-sale buttons, and the room-search picker. `.topLeftCell`
 * is read directly by `igloo-calendar.tsx`'s drag-bounds calculation
 * (`document.querySelector('igl-cal-header .topLeftCell')`) — do not rename it.
 */
export declare class IglCalHeaderToolbar {
    isVacationRental: boolean;
    showDayUseButton: boolean;
    minDate: string;
    roomsList: RoomListItem[];
    /** All toolbar-button actions, keyed the same way the existing `optionEvent` payload's `key` already is. */
    actionSelected: EventEmitter<{
        key: string;
        data?: any;
    }>;
    roomSelected: EventEmitter<{
        roomId: number;
    }>;
    private dateSelectRef;
    private handleAction;
    private handleDateSelect;
    private handleScrollToRoom;
    render(): any;
}
