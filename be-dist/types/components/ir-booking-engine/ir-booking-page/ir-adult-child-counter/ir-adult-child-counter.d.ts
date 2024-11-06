import { EventEmitter } from '../../../../stencil-public-runtime';
export type AddAdultsAndChildrenEvent = {
    adult_nbr: number;
    child_nbr: number;
    infant_nbr: number;
    childrenAges: string[];
};
export declare class IrAdultChildCounter {
    adultCount: number;
    childrenCount: number;
    minAdultCount: number;
    minChildrenCount: number;
    maxAdultCount: number;
    maxChildrenCount: number;
    childMaxAge: number;
    addAdultsAndChildren: EventEmitter<{
        adult_nbr: number;
        child_nbr: number;
    }>;
    isPopoverOpen: boolean;
    private popover;
    addChildrenAndAdult(): void;
    incrementAdultCount(): void;
    decrementAdultCount(): void;
    incrementChildrenCount(): void;
    decrementChildrenCount(): void;
    guestTrigger(): any;
    handlePopoverToggle(e: CustomEvent): void;
    render(): any;
}
