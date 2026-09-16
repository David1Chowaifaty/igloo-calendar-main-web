import { ClTxTypeCode } from "../../../types/enums";
import { t } from "../../../services/locale/t";
const lockedStatus = new Set([ClTxTypeCode.Payment, ClTxTypeCode.CreditNote, ClTxTypeCode.DebitNote]);
export function mapClTxToFolioRow(tx) {
    const status = tx.IS_LOCKED
        ? {
            id: 'billed',
            label: lockedStatus.has(tx.CL_TX_TYPE_CODE) ? t('Lcz_Locked', { fallback: 'Locked' }) : t('Lcz_Billed', { fallback: 'Billed' }),
            variant: 'success',
            description: '',
        }
        : tx.IS_HOLD
            ? { id: 'held', label: t('Lcz_Held', { fallback: 'Held' }), variant: 'warning', description: '' }
            : { id: 'unbilled', label: t('Lcz_Unbilled', { fallback: 'Unbilled' }), variant: 'neutral', description: '' };
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
