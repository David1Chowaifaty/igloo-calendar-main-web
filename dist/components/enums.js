const ClTxTypeCode = {
    Payment: 'PAY',
    OpeningBalance: 'OB',
    Adjustment: 'ADJ',
    CreditNote: 'CN',
    DebitNote: 'DN',
    StandardChargeDebit: 'DB',
};
const FdTypes = {
    Draft: 'DFT',
    Invoice: 'INV',
    CreditNote: 'CN',
    DebitNote: 'DN',
    Receipt: 'REC',
};
const FdStatus = {
    Sent: 'SENT',
    Viewed: 'VIEWED',
    Paid: 'PAID',
    Partial: 'PARTIAL',
};

export { ClTxTypeCode as C, FdStatus as F, FdTypes as a };

//# sourceMappingURL=enums.js.map