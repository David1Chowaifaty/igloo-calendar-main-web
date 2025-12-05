export declare class IrDatesCell {
    display: 'block' | 'inline';
    checkIn: string;
    checkOut: string;
    checkInLabel: string;
    checkoutLabel: string;
    overdueCheckin: boolean;
    overdueCheckout: boolean;
    private formatDate;
    render(): any;
}
