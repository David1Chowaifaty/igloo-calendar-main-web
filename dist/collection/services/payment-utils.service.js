import moment from "moment";
export class PaymentUtilsService {
    /**
     * Creates a new payment item with default values
     */
    static createDefaultPayment(currency) {
        return {
            id: -1,
            date: moment().format('YYYY-MM-DD'),
            amount: null,
            currency,
            designation: '',
            reference: '',
        };
    }
    /**
     * Calculates total amount from payments array
     */
    static calculateTotalAmount(payments) {
        if (!payments || payments.length === 0)
            return 0;
        return payments.reduce((total, payment) => total + (payment.amount || 0), 0);
    }
    /**
     * Filters payments by type (credit/debit)
     */
    static filterPaymentsByType(payments, type) {
        return payments.filter(payment => payment.payment_type.operation === type);
    }
    /**
     * Validates payment data
     */
    static validatePayment(payment) {
        var _a;
        const errors = [];
        if (!((_a = payment.designation) === null || _a === void 0 ? void 0 : _a.trim())) {
            errors.push('Designation is required');
        }
        if (!payment.amount || payment.amount <= 0) {
            errors.push('Amount must be greater than 0');
        }
        if (!payment.date) {
            errors.push('Date is required');
        }
        else if (!moment(payment.date).isValid()) {
            errors.push('Invalid date format');
        }
        if (!payment.currency) {
            errors.push('Currency is required');
        }
        return {
            isValid: errors.length === 0,
            errors,
        };
    }
    /**
     * Formats payment amount with currency
     */
    static formatPaymentAmount(amount, currencySymbol) {
        if (typeof amount !== 'number' || !currencySymbol) {
            return '';
        }
        return `${currencySymbol}${Math.abs(amount).toFixed(2)}`;
    }
    /**
     * Sorts payments by date (newest first)
     */
    static sortPaymentsByDate(payments, descending = true) {
        return [...payments].sort((a, b) => {
            const dateA = moment(a.date);
            const dateB = moment(b.date);
            if (descending) {
                return dateB.valueOf() - dateA.valueOf();
            }
            return dateA.valueOf() - dateB.valueOf();
        });
    }
    /**
     * Groups payments by month
     */
    static groupPaymentsByMonth(payments) {
        const grouped = {};
        payments.forEach(payment => {
            const monthKey = moment(payment.date).format('YYYY-MM');
            if (!grouped[monthKey]) {
                grouped[monthKey] = [];
            }
            grouped[monthKey].push(payment);
        });
        return grouped;
    }
    /**
     * Checks if payment is editable
     */
    static isPaymentEditable(payment) {
        // Add business logic for when payments can be edited
        // For example, payments older than X days might not be editable
        const paymentDate = moment(payment.date);
        const daysSincePayment = moment().diff(paymentDate, 'days');
        // Allow editing if payment is within last 30 days
        return daysSincePayment <= 30;
    }
    /**
     * Checks if payment is deletable
     */
    static isPaymentDeletable(payment) {
        // Add business logic for when payments can be deleted
        // For example, system-generated payments might not be deletable
        return payment.id > 0; // Only allow deletion of saved payments
    }
}
//# sourceMappingURL=payment-utils.service.js.map
