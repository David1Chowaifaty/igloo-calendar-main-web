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
    handleOpenChange(isOpen: boolean): Promise<void>;
    handleIssuesChange(newIssues: HKIssue[] | null): void;
    private toggleIssue;
    private handleResolve;
    private getInitials;
    private renderTicket;
    private renderContent;
    render(): any;
}
