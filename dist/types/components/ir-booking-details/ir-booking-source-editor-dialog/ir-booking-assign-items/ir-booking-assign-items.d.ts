import { EventEmitter } from '../../../../stencil-public-runtime';
import { AssignableItem } from '../types';
export declare class IrBookingAssignItems {
    items: AssignableItem[];
    checkedItems: Set<string>;
    bookingSelectionChange: EventEmitter<Set<string>>;
    private toggleItem;
    private renderRoomItem;
    private renderCheckItem;
    private renderExtraItem;
    render(): any;
}
