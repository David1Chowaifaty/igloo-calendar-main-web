import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrGuestCounter {
    minAdultCount: number;
    maxAdultCount: number;
    minChildrenCount: number;
    maxChildrenCount: number;
    childMaxAge: number;
    child: number;
    adults: number;
    adultCount: number;
    childrenCount: number;
    updateCounts: EventEmitter;
    closeGuestCounter: EventEmitter;
    componentWillLoad(): void;
    handleAdultsChange(newValue: any, oldValue: any): void;
    handleChildChange(newValue: any, oldValue: any): void;
    incrementAdultCount(): void;
    decrementAdultCount(): void;
    incrementChildrenCount(): void;
    decrementChildrenCount(): void;
    addChildrenAndAdult(): void;
    render(): any;
}
