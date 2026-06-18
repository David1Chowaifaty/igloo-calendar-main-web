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
const HbPreference = {
    Dinner: '001',
    Lunch: '002',
};
const InvoiceableItemReason = {
    AlreadyInvoiced: '001',
    NotCheckedOutYet: '002',
    PickupCancellationPolicy: '003',
};
const VatIncludedCodes = {
    Inclusive: '001'};
const FdStatus = {
    Sent: 'SENT',
    Paid: 'PAID',
    Issued: 'ISSUED',
    Voided: 'VOIDED',
};
const InOut = {
    CheckedOut: '002',
};

exports.ClTxTypeCode = ClTxTypeCode;
exports.FdStatus = FdStatus;
exports.FdTypes = FdTypes;
exports.HbPreference = HbPreference;
exports.InOut = InOut;
exports.InvoiceableItemReason = InvoiceableItemReason;
exports.VatIncludedCodes = VatIncludedCodes;
