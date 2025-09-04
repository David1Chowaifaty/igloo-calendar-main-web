import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrAccordion {
    host: HTMLElement;
    /** Start expanded */
    defaultExpanded: boolean;
    /** Optional controlled prop: when provided, component follows this value */
    expanded?: boolean;
    /** Show caret icon */
    showCaret: boolean;
    /** Caret icon name */
    caretIcon: string;
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
    private onTriggerClick;
    private onTriggerKeyDown;
    render(): any;
}
