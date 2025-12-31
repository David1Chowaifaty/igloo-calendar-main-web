import { EventEmitter } from '../../stencil-public-runtime';
import { TPositions } from "../ui/ir-toast/toast";
export type ToastVariant = 'info' | 'success' | 'warning' | 'danger';
export declare class IrToastAlert {
    /** Unique identifier passed back to the provider when interacting with the toast */
    toastId: string;
    /** Heading displayed at the top of the toast */
    label?: string;
    /** Plain text description for the toast body */
    description?: string;
    /** Maps to visual style tokens */
    variant: ToastVariant;
    /** Whether the close button should be rendered */
    dismissible: boolean;
    /** Optional primary action label */
    actionLabel?: string;
    /** Indicates when the provider is playing the exit animation */
    leaving: boolean;
    /** Toast position drives enter/exit direction */
    position: TPositions;
    irToastDismiss: EventEmitter<{
        id: string;
        reason: 'manual';
    }>;
    irToastAction: EventEmitter<{
        id: string;
    }>;
    irToastInteractionChange: EventEmitter<{
        id: string;
        interacting: boolean;
    }>;
    private interacting;
    private setInteracting;
    private getIcon;
    private get calloutVariant();
    render(): any;
}
