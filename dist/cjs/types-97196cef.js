'use strict';

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

exports.mapClTxToFolioRow = mapClTxToFolioRow;

//# sourceMappingURL=types-97196cef.js.map