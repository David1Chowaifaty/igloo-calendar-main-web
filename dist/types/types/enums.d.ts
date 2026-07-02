export declare const ClTxTypeCode: {
    readonly Payment: "PAY";
    readonly OpeningBalance: "OB";
    readonly Adjustment: "ADJ";
    readonly CreditNote: "CN";
    readonly DebitNote: "DN";
    readonly StandardChargeDebit: "DB";
    readonly Discount: "DSC";
    readonly CancellationPenalty: "CPN";
    readonly AdjustmentCredit: "ADJC";
};
export declare const TaxationStrategies: {
    readonly Normal: "000";
    readonly Cumulative: "001";
};
export declare const PayTypes: {
    readonly Payment: "001";
    readonly Discount: "009";
    readonly Refund: "010";
    readonly CancellationAdjustment: "012";
    readonly CancellationPenalty: "013";
    readonly CreditReceipt: "014";
};
export declare const FdTypes: {
    readonly AdjustmentCredit: "ADJC";
    readonly Draft: "DFT";
    readonly Invoice: "INV";
    readonly CreditNote: "CN";
    readonly DebitNote: "DN";
    readonly Receipt: "REC";
    readonly Proforma: "PRF";
    readonly CreditReceipt: "CREC";
};
export declare const PayStatus: {
    Normal: string;
    Void: string;
};
export declare const HbPreference: {
    readonly Dinner: "001";
    readonly Lunch: "002";
};
export declare const InvoiceableItemReason: {
    readonly AlreadyInvoiced: "001";
    readonly NotCheckedOutYet: "002";
    readonly PickupCancellationPolicy: "003";
};
export declare const PayMethodCode: {
    readonly Cash: "001";
    readonly OTAVirtualCard: "002";
    readonly Online: "003";
    readonly ManualCard: "004";
    readonly MoneyTransfer: "005";
    readonly BankDeposit: "006";
    readonly BankTransfer: "007";
    readonly BankCheck: "008";
    readonly BankCash: "009";
};
export declare const VatIncludedCodes: {
    readonly NotApplicable: "002";
    readonly Inclusive: "001";
    readonly Exclusive: "000";
};
export declare const ChargeSource: {
    readonly ACCOMMODATION: 0;
    readonly PICKUP: 1;
    readonly EXTRA_SERVICE: 2;
};
export declare const FdStatus: {
    readonly Sent: "SENT";
    readonly Viewed: "VIEWED";
    readonly Paid: "PAID";
    readonly Partial: "PARTIAL";
    readonly Issued: "ISSUED";
    readonly Voided: "VOIDED";
};
export declare const InOut: {
    readonly NotSet: "000";
    readonly CheckedIn: "001";
    readonly CheckedOut: "002";
};
