import moment from "moment";
export class DataGenerator {
    length;
    constructor(length = 10) {
        this.length = length;
    }
    randomDate() {
        return moment()
            .subtract(Math.floor(Math.random() * 30), 'days')
            .format('YYYY-MM-DD');
    }
    generateRows() {
        const bookingPool = this.generateBookingPool(5);
        const invoicePool = this.generateInvoicePool(4); // pool of reusable invoices
        const types = ['ACM', 'SPA', 'TRF', 'DSC'];
        return [...Array(this.length)].map(() => {
            const status = this.randomFrom(this.statuses);
            const debit = Math.random() > 0.5 ? this.randomAmount() : 0;
            const credit = debit === 0 ? this.randomAmount(5, 150) : 0;
            // Assign invoice only if status is Billed
            const docNumber = status.label === 'Billed' ? this.randomFrom(invoicePool) : '';
            return {
                status,
                serviceDate: this.randomDate(),
                bookingNumber: this.randomFrom(bookingPool),
                docNumber,
                description: this.randomFrom(this.descriptions),
                debit,
                credit,
                type: types[Math.floor(Math.random() * types.length)], // ✅ fixed
            };
        });
    }
    generateBookingPool(size = 5) {
        return Array.from({ length: size }, () => this.randomBookingNumber());
    }
    generateInvoicePool(size = 4) {
        return Array.from({ length: size }, () => this.randomInvoiceNumber());
    }
    randomBookingNumber() {
        return Math.floor(Math.random() * 90000000) + 10000000;
    }
    randomInvoiceNumber() {
        return `INV-${Math.floor(Math.random() * 90000) + 10000}`;
    }
    descriptions = [
        'Room charge adjustment',
        'Late checkout fee',
        'Minibar consumption',
        'Laundry service',
        'Airport transfer',
        'Restaurant charge',
        'Spa treatment',
        'City tax correction',
        'Payment received',
        'Manual posting',
    ];
    statuses = [
        {
            id: 'unbilled',
            label: 'Unbilled',
            variant: 'warning',
            description: 'Transaction has been posted to the city ledger',
        },
        {
            id: 'billed',
            label: 'Billed',
            variant: 'success',
            description: 'Transaction has been fully settled or paid',
        },
        {
            id: 'held',
            label: 'Held',
            variant: 'danger',
            description: 'Transaction was voided and has no financial impact',
        },
    ];
    randomFrom(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    randomAmount(min = 10, max = 300) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
//# sourceMappingURL=dataGenerator.js.map
