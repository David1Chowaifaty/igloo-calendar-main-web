'use strict';

const index = require('./index-d1c39688.js');
require('./moment-1780b03a.js');
require('./calendar-data-70bc3b4b.js');
require('./locales.store-32782582.js');
require('./utils-32be062a.js');

const lockedStatus = new Set([index.ClTxTypeCode.Payment, index.ClTxTypeCode.CreditNote, index.ClTxTypeCode.DebitNote]);
function mapClTxToFolioRow(tx) {
    const status = tx.IS_LOCKED
        ? { id: 'billed', label: lockedStatus.has(tx.CL_TX_TYPE_CODE) ? 'Locked' : 'Billed', variant: 'success', description: '' }
        : tx.IS_HOLD
            ? { id: 'held', label: 'Held', variant: 'warning', description: '' }
            : { id: 'unbilled', label: 'Unbilled', variant: 'neutral', description: '' };
    return {
        _raw: tx,
        status,
        type: tx.CATEGORY,
        serviceDate: tx.SERVICE_DATE,
        bookingNumber: tx.BOOK_NBR ? Number(tx.BOOK_NBR) : null,
        docNumber: tx.DOC_NUMBER ?? tx.EXTERNAL_REF,
        description: tx.DESCRIPTION,
        debit: tx.DEBIT,
        credit: tx.CREDIT,
        balance: tx.RUNNING_BALANCE,
    };
}

const actionableClTypes = new Set([index.ClTxTypeCode.Adjustment, index.ClTxTypeCode.CancellationPenalty, index.ClTxTypeCode.Discount, index.ClTxTypeCode.StandardChargeDebit]);
const debitFdTypeCode = new Set([index.FdTypes.Invoice, index.FdTypes.DebitNote, index.FdTypes.Draft, index.FdTypes.CreditReceipt]);

exports.actionableClTypes = actionableClTypes;
exports.debitFdTypeCode = debitFdTypeCode;
exports.mapClTxToFolioRow = mapClTxToFolioRow;

//# sourceMappingURL=city-ledger.service-9e025c5f.js.map