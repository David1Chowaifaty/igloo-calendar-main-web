import { C as ClTxTypeCode } from './enums.js';

const lockedStatus = new Set([ClTxTypeCode.Payment, ClTxTypeCode.CreditNote, ClTxTypeCode.DebitNote]);
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

export { mapClTxToFolioRow as m };

//# sourceMappingURL=types3.js.map