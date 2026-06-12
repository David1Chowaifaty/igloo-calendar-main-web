'use strict';

const ClTxTypeCode = {
    Payment: 'PAY',
    OpeningBalance: 'OB',
    Adjustment: 'ADJ',
    CreditNote: 'CN',
    DebitNote: 'DN',
    StandardChargeDebit: 'DB',
    Discount: 'DSC',
    CancellationPenalty: 'CPN',
};
const FdTypes = {
    Draft: 'DFT',
    Invoice: 'INV',
    CreditNote: 'CN',
    DebitNote: 'DN',
    Receipt: 'REC',
    Proforma: 'PRF',
    CreditReceipt: 'CREC',
};
const InvoiceableItemReason = {
    AlreadyInvoiced: '001',
    NotCheckedOutYet: '002',
    PickupCancellationPolicy: '003',
};
const VatIncludedCodes = {
    NotApplicable: '002',
    Inclusive: '001',
    Exclusive: '000',
};
const FdStatus = {
    Sent: 'SENT',
    Viewed: 'VIEWED',
    Paid: 'PAID',
    Partial: 'PARTIAL',
    Issued: 'ISSUED',
    Voided: 'VOIDED',
};
const InOut = {
    NotSet: '000',
    CheckedIn: '001',
    CheckedOut: '002',
};

exports.ClTxTypeCode = ClTxTypeCode;
exports.FdStatus = FdStatus;
exports.FdTypes = FdTypes;
exports.InOut = InOut;
exports.InvoiceableItemReason = InvoiceableItemReason;
exports.VatIncludedCodes = VatIncludedCodes;

//# sourceMappingURL=enums-ea1dc492.js.map