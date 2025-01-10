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
    infant_nbr: number;
    error: boolean;
    minAdultCount: number;
    minChildrenCount: number;
    maxAdultCount: number;
    maxChildrenCount: number;
    childMaxAge: number;
    baseChildrenAges: string[];
    isPopoverOpen: boolean;
    childrenAges: string[];
    addAdultsAndChildren: EventEmitter<AddAdultsAndChildrenEvent>;
    checkAvailability: EventEmitter<null>;
    private popover;
    componentWillLoad(): void;
    handleBaseChildrenAgesChange(newValue: string[]): void;
    open(): Promise<void>;
    private addChildrenAndAdult;
    private incrementAdultCount;
    private decrementAdultCount;
    private incrementChildrenCount;
    private decrementChildrenCount;
    private handlePopoverToggle;
    private updateGuestInformation;
    private validateChildrenAges;
    private guestTrigger;
    render(): any;
}
