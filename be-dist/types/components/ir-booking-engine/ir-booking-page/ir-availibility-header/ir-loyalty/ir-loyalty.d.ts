import { EventEmitter } from '../../../../../stencil-public-runtime';
export declare class IrLoyalty {
    resetBooking: EventEmitter<null>;
    toggleLoyalty(value: boolean): void;
    render(): any;
}
