import { C as ClTxTypeCode } from './enums-8474d88c.js';
import './index-e3163449.js';
import './moment-ab846cee.js';
import './calendar-data-b1f645da.js';
import './locales.store-cb784e95.js';
import './utils-a8322ee9.js';

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
        bookingNumber: tx.BOOK_NBR ? Number(tx.BOOK_NBR) : null,
        docNumber: tx.EXTERNAL_REF,
        description: tx.DESCRIPTION,
        debit: tx.DEBIT,
        credit: tx.CREDIT,
        balance: tx.RUNNING_BALANCE,
    };
}

const actionableClTypes = new Set([ClTxTypeCode.Adjustment, ClTxTypeCode.CancellationPenalty, ClTxTypeCode.Discount, ClTxTypeCode.StandardChargeDebit]);

export { actionableClTypes as a, mapClTxToFolioRow as m };

//# sourceMappingURL=city-ledger.service-c4afe262.js.map