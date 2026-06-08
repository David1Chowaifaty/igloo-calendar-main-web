import { C as ClTxTypeCode, F as FdTypes } from './enums.js';
import './types5.js';
import './moment.js';
import './calendar-data.js';
import './locales.store.js';
import './utils.js';

const actionableClTypes = new Set([ClTxTypeCode.Adjustment, ClTxTypeCode.CancellationPenalty, ClTxTypeCode.Discount, ClTxTypeCode.StandardChargeDebit]);
const debitFdTypeCode = new Set([FdTypes.Invoice, FdTypes.DebitNote, FdTypes.Draft, FdTypes.CreditReceipt]);

export { actionableClTypes as a, debitFdTypeCode as d };

//# sourceMappingURL=city-ledger.service.js.map