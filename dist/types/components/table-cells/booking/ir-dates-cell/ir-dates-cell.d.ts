export declare class IrDatesCell {
    display: 'block' | 'inline';
    checkIn: string;
    checkOut: string;
    checkInLabel: string;
    checkoutLabel: string;
    overdueCheckin: boolean;
    overdueCheckout: boolean;
    /**
     * Shows a small arrow between check-in and check-out. Intended for `display="inline"`.
     */
    showArrow: boolean;
    private formatDate;
    render(): any;
}
