import { EventEmitter } from '../../../../stencil-public-runtime';
export type IrActionButton = 'check_in' | 'check_out' | 'overdue_check_in' | 'overdue_check_out' | 'edit' | 'delete';
export declare class IrActionsCell {
    buttons: IrActionButton[];
    irAction: EventEmitter<{
        action: IrActionButton;
    }>;
    private getLabel;
    private getVariant;
    private getAppearance;
    private onClick;
    private renderButton;
    render(): any;
}
