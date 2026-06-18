import { a as ClTxTypeCode, F as FdTypes } from './index-OzlYbnfH.js';
import './moment-Mki5YqAR.js';
import './calendar-data-Cnv5ncgJ.js';
import './locales.store-BZFQn8-s.js';
import './utils-DE70XlzV.js';

const actionableClTypes = new Set([ClTxTypeCode.Adjustment, ClTxTypeCode.CancellationPenalty, ClTxTypeCode.Discount, ClTxTypeCode.StandardChargeDebit]);
const debitFdTypeCode = new Set([FdTypes.Invoice, FdTypes.DebitNote, FdTypes.Draft, FdTypes.CreditReceipt]);

export { actionableClTypes as a, debitFdTypeCode as d };
