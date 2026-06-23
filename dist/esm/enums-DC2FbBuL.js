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
const FdTypes = {
    AdjustmentCredit: 'ADJC',
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
    NotSet: '000',
    CheckedIn: '001',
    CheckedOut: '002',
};

export { ClTxTypeCode as C, FdTypes as F, HbPreference as H, InvoiceableItemReason as I, VatIncludedCodes as V, FdStatus as a, InOut as b };
