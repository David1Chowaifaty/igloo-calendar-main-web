import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class IrLoyalty {
    resetBooking: EventEmitter<string>;
    toggleLoyalty(value: boolean): void;
    render(): any;
}
