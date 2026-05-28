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

export { ClTxTypeCode as C, FdTypes as F, InvoiceableItemReason as I, VatIncludedCodes as V, FdStatus as a, InOut as b };

//# sourceMappingURL=enums-8474d88c.js.map