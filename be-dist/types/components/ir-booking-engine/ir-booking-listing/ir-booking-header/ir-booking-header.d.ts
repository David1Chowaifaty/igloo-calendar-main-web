import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IrBookingHeader {
    mode: 'single' | 'multi';
    bookingNumber: number | null;
    activeLink: 'single_booking' | 'all_booking';
    linkChanged: EventEmitter<'single_booking' | 'all_booking'>;
    handleButtonClick(link: 'single_booking' | 'all_booking'): void;
    render(): any;
}
