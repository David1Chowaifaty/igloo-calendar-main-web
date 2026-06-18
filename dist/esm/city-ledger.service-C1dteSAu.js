import { C as ClTxTypeCode, F as FdTypes } from './enums-Dv3168hx.js';
import './index-CB36vp_x.js';
import './moment-Mki5YqAR.js';
import './calendar-data-BIZ201rH.js';
import './locales.store-ChFOK43k.js';
import './utils-1CCVam5W.js';

const actionableClTypes = new Set([ClTxTypeCode.Adjustment, ClTxTypeCode.CancellationPenalty, ClTxTypeCode.Discount, ClTxTypeCode.StandardChargeDebit]);
const debitFdTypeCode = new Set([FdTypes.Invoice, FdTypes.DebitNote, FdTypes.Draft, FdTypes.CreditReceipt]);

export { actionableClTypes as a, debitFdTypeCode as d };
