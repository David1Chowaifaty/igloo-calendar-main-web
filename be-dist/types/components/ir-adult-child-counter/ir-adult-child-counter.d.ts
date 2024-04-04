import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrAdultChildCounter {
    adultCount: number;
    childrenCount: number;
    minAdultCount: number;
    minChildrenCount: number;
    maxAdultCount: number;
    maxChildrenCount: number;
    addAdultsAndChildren: EventEmitter<{
        adult_nbr: number;
        child_nbr: number;
    }>;
    private popover;
    addChildrenAndAdult(): void;
    incrementAdultCount(): void;
    decrementAdultCount(): void;
    incrementChildrenCount(): void;
    decrementChildrenCount(): void;
    guestTrigger(): any;
    render(): any;
}
