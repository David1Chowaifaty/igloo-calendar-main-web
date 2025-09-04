import { FolioPayment } from '../../types';
export declare class IrRevenueRow {
    host: HTMLElement;
    /** Array of payments for this method group */
    payments: FolioPayment[];
    /** Group display name (e.g., "Credit Card") */
    groupName: string;
    private contentId;
    render(): any;
}
