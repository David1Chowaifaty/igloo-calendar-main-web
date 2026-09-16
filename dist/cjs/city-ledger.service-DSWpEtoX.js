'use strict';

var enums = require('./enums-BSCnMYlE.js');
var t = require('./t-CyRK1btk.js');
require('./index-COQ6L7wn.js');
require('./moment-CdViwxPQ.js');
require('./calendar-data-UPPAEVR_.js');
require('./booking.dto-CUSvGTvD.js');
require('./ir-date-BZLsqCOc.js');
require('./locales.store-BMTss6fG.js');

const lockedStatus = new Set([enums.ClTxTypeCode.Payment, enums.ClTxTypeCode.CreditNote, enums.ClTxTypeCode.DebitNote]);
function mapClTxToFolioRow(tx) {
    const status = tx.IS_LOCKED
        ? {
            id: 'billed',
            label: lockedStatus.has(tx.CL_TX_TYPE_CODE) ? t.t('Lcz_Locked', { fallback: 'Locked' }) : t.t('Lcz_Billed', { fallback: 'Billed' }),
            variant: 'success',
            description: '',
        }
        : tx.IS_HOLD
            ? { id: 'held', label: t.t('Lcz_Held', { fallback: 'Held' }), variant: 'warning', description: '' }
            : { id: 'unbilled', label: t.t('Lcz_Unbilled', { fallback: 'Unbilled' }), variant: 'neutral', description: '' };
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

const actionableClTypes = new Set([enums.ClTxTypeCode.Adjustment, enums.ClTxTypeCode.CancellationPenalty, enums.ClTxTypeCode.Discount, enums.ClTxTypeCode.StandardChargeDebit]);
const debitFdTypeCode = new Set([enums.FdTypes.Invoice, enums.FdTypes.DebitNote, enums.FdTypes.Draft, enums.FdTypes.CreditReceipt]);

exports.actionableClTypes = actionableClTypes;
exports.debitFdTypeCode = debitFdTypeCode;
exports.mapClTxToFolioRow = mapClTxToFolioRow;
