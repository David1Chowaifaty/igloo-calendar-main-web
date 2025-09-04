import { EventEmitter } from '../../../../stencil-public-runtime';
import { FolioPayment } from '../../types';
export declare class IrRevenueRow {
    host: HTMLElement;
    /** Array of payments for this method group */
    payments: FolioPayment[];
    /** Group display name (e.g., "Credit Card") */
    groupName: string;
    /** Start expanded */
    defaultExpanded: boolean;
    /** Optional controlled prop: when provided, component follows this value */
    expanded?: boolean;
    /** Fired after expansion state changes */
    irToggle: EventEmitter<{
        expanded: boolean;
    }>;
    _expanded: boolean;
    private detailsEl?;
    private contentEl?;
    private contentId;
    private isAnimating;
    private cleanupAnimation?;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    watchExpanded(newValue: boolean | undefined): void;
    private updateExpansion;
    private openWithAnimation;
    private closeWithAnimation;
    private finishOpenAnimation;
    private finishCloseAnimation;
    private cleanupPreviousAnimation;
    private onHeaderClick;
    private onHeaderKeyDown;
    render(): any;
}
