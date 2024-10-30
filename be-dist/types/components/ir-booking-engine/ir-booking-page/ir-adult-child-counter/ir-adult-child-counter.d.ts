import { EventEmitter } from '../../../../stencil-public-runtime';
export type AddAdultsAndChildrenEvent = {
    adult_nbr: number;
    child_nbr: number;
    infant_nbr: number;
};
export declare class IrAdultChildCounter {
    adultCount: number;
    childrenCount: number;
    infant_nbr: number;
    error: boolean;
    minAdultCount: number;
    minChildrenCount: number;
    maxAdultCount: number;
    maxChildrenCount: number;
    childMaxAge: number;
    baseChildrenAges: string[];
    isPopoverOpen: boolean;
    addAdultsAndChildren: EventEmitter<AddAdultsAndChildrenEvent>;
    private popover;
    open(): Promise<void>;
    private addChildrenAndAdult;
    private incrementAdultCount;
    private decrementAdultCount;
    private incrementChildrenCount;
    private decrementChildrenCount;
    private incrementInfantCount;
    private decrementInfantCount;
    private handlePopoverToggle;
    private updateGuestInformation;
    private guestTrigger;
    render(): any;
}
