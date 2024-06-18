import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrGuestCounter {
    minAdultCount: number;
    maxAdultCount: number;
    minChildrenCount: number;
    maxChildrenCount: number;
    childMaxAge: number;
    adultCount: number;
    childrenCount: number;
    updateCounts: EventEmitter;
    closeGuestCounter: EventEmitter;
    incrementAdultCount(): void;
    decrementAdultCount(): void;
    incrementChildrenCount(): void;
    decrementChildrenCount(): void;
    addChildrenAndAdult(): void;
    render(): any;
}
