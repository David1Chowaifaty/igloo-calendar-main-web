'use strict';

var index = require('./index-imGbPAyS.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-CTxCbso4.js');
require('./locales.store-BfrChT1G.js');
require('./utils-CHYeTDt_.js');

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
        bookingNumber: tx.BOOK_NBR ? tx.BOOK_NBR : null,
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
