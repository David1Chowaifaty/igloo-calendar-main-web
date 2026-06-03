'use strict';

const index = require('./index-6995b9c3.js');
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
        docNumber: tx.EXTERNAL_REF,
        description: tx.DESCRIPTION,
        debit: tx.DEBIT,
        credit: tx.CREDIT,
        balance: tx.RUNNING_BALANCE,
    };
}

const actionableClTypes = new Set([index.ClTxTypeCode.Adjustment, index.ClTxTypeCode.CancellationPenalty, index.ClTxTypeCode.Discount, index.ClTxTypeCode.StandardChargeDebit]);

exports.actionableClTypes = actionableClTypes;
exports.mapClTxToFolioRow = mapClTxToFolioRow;

//# sourceMappingURL=city-ledger.service-2616b796.js.map