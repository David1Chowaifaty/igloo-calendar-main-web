'use strict';

const enums = require('./enums-e1d0fe3c.js');
require('./index-cd2a209b.js');
require('./moment-1780b03a.js');
require('./calendar-data-70bc3b4b.js');
require('./locales.store-32782582.js');
require('./utils-cf15d06a.js');

const actionableClTypes = new Set([enums.ClTxTypeCode.Adjustment, enums.ClTxTypeCode.CancellationPenalty, enums.ClTxTypeCode.Discount, enums.ClTxTypeCode.StandardChargeDebit]);

const lockedStatus = new Set([enums.ClTxTypeCode.Payment, enums.ClTxTypeCode.CreditNote, enums.ClTxTypeCode.DebitNote]);
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

exports.actionableClTypes = actionableClTypes;
exports.mapClTxToFolioRow = mapClTxToFolioRow;

//# sourceMappingURL=types-27d71b7e.js.map