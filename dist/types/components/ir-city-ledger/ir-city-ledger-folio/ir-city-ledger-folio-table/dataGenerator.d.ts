export declare class DataGenerator {
    private length;
    constructor(length?: number);
    private randomDate;
    generateRows(): {
        status: {
            id: string;
            label: string;
            variant: string;
            description: string;
        };
        serviceDate: string;
        bookingNumber: number;
        docNumber: string;
        description: string;
        debit: number;
        credit: number;
        type: string;
    }[];
    private generateBookingPool;
    private generateInvoicePool;
    private randomBookingNumber;
    private randomInvoiceNumber;
    private descriptions;
    private statuses;
    private randomFrom;
    private randomAmount;
}
