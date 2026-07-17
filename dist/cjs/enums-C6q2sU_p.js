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
    AdjustmentCredit: 'ADJC',
};
const PayTypes = {
    Payment: '001',
    Refund: '010',
    CreditReceipt: '014',
};
const FdTypes = {
    AdjustmentCredit: 'ADJC',
    Draft: 'DFT',
    Invoice: 'INV',
    CreditNote: 'CN',
    DebitNote: 'DN',
    Receipt: 'REC',
    Proforma: 'PRF',
    CreditReceipt: 'CREC',
    Refund: 'RFND',
};
const PayStatus = {
    Normal: '001',
    Void: '002',
};
const HbPreference = {
    Dinner: '001',
    Lunch: '002',
};
const InvoiceableItemReason = {
    AlreadyInvoiced: '001',
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
    NotSet: '000',
    CheckedIn: '001',
    CheckedOut: '002',
};

exports.ClTxTypeCode = ClTxTypeCode;
exports.FdStatus = FdStatus;
exports.FdTypes = FdTypes;
exports.HbPreference = HbPreference;
exports.InOut = InOut;
exports.InvoiceableItemReason = InvoiceableItemReason;
exports.PayStatus = PayStatus;
exports.PayTypes = PayTypes;
exports.VatIncludedCodes = VatIncludedCodes;
