export type InvoiceScope = 'UNBILLED' | 'UNBILLED_CHECKED_OUT';
export interface CreateInvoiceFormValues {
    fromDate: string;
    toDate: string;
    scope: InvoiceScope;
    is_checked_out_only: boolean;
}
export declare class IrClInvoiceForm {
    fromDate: string;
    toDate: string;
    scope: InvoiceScope;
    dateError: boolean;
    onDateChange(): void;
    validate(): Promise<boolean>;
    getValues(): Promise<CreateInvoiceFormValues>;
    render(): any;
}
