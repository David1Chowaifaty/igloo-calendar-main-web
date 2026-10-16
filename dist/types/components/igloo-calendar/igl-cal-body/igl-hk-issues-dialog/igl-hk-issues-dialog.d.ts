import { HKIssue } from "../../../../models/housekeeping";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IglHkIssuesDialog {
    open: boolean;
    unitId: number;
    unitName: string;
    propertyId: number;
    issues: HKIssue[];
    irAfterClose: EventEmitter<void>;
    error: string | null;
    isResolving: boolean;
    selectedIds: Set<number>;
    private dialogRef;
    private houseKeepingService;
    handleOpenChange(isOpen: boolean): void;
    handleIssuesChange(newIssues: HKIssue[] | null): void;
    private get isMultiple();
    private get allSelected();
    private toggleIssue;
    private toggleSelectAll;
    private handleRowKeyDown;
    private handleResolve;
    private formatReportedAt;
    private renderIssue;
    private renderBody;
    render(): any;
}
