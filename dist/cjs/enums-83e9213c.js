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

exports.ClTxTypeCode = ClTxTypeCode;
exports.FdStatus = FdStatus;
exports.FdTypes = FdTypes;
exports.VatIncludedCodes = VatIncludedCodes;

//# sourceMappingURL=enums-83e9213c.js.map