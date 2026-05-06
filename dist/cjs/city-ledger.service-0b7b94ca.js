'use strict';

const enums = require('./enums-d462d3a9.js');
require('./index-56efbd42.js');
require('./moment-1780b03a.js');
require('./calendar-data-70bc3b4b.js');
require('./locales.store-32782582.js');
require('./utils-e4cb6b2d.js');

function mapClTxToFolioRow(tx) {
    const status = tx.IS_LOCKED
        ? { id: 'billed', label: 'Billed', variant: 'success', description: '' }
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

const actionableClTypes = new Set([enums.ClTxTypeCode.Adjustment, enums.ClTxTypeCode.CancellationPenalty, enums.ClTxTypeCode.Discount, enums.ClTxTypeCode.StandardChargeDebit]);

exports.actionableClTypes = actionableClTypes;
exports.mapClTxToFolioRow = mapClTxToFolioRow;

//# sourceMappingURL=city-ledger.service-0b7b94ca.js.map