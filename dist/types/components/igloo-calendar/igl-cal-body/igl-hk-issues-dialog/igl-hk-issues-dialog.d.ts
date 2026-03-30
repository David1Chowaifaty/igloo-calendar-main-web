import { HKIssue } from "../../../../models/housekeeping";
import { EventEmitter } from '../../../../stencil-public-runtime';
export declare class IglHkIssuesDialog {
    open: boolean;
    unitId: number;
    unitName: string;
    propertyId: number;
    issue: HKIssue;
    irAfterClose: EventEmitter<void>;
    error: string | null;
    isResolving: boolean;
    private dialogRef;
    private houseKeepingService;
    handleOpenChange(isOpen: boolean): Promise<void>;
    private handleResolve;
    private renderContent;
    render(): any;
}
