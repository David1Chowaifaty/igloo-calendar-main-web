import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrDrawer {
    private componentId;
    private drawer?;
    private modal?;
    private panel?;
    private willShow;
    private willHide;
    host: HTMLIrDrawerElement;
    hasFooter: boolean;
    isVisible: boolean;
    open: boolean;
    label: string;
    placement: 'top' | 'right' | 'bottom' | 'left';
    contained: boolean;
    noHeader: boolean;
    handleOpenChange(): void;
    sixShow: EventEmitter<null>;
    /** Emitted after the drawer opens and all transitions are complete. */
    sixAfterShow: EventEmitter<null>;
    /** Emitted when the drawer closes. Calling `event.preventDefault()` will prevent it from being closed. */
    sixHide: EventEmitter<null>;
    /** Emitted after the drawer closes and all transitions are complete. */
    sixAfterHide: EventEmitter<null>;
    /**
     * Emitted when the drawer opens and the panel gains focus. Calling `event.preventDefault()` will prevent focus and
     * allow you to set it on a different element in the drawer, such as an input or button.
     */
    sixInitialFocus: EventEmitter<null>;
    /** Emitted when the overlay is clicked. Calling `event.preventDefault()` will prevent the drawer from closing. */
    sixOverlayDismiss: EventEmitter<null>;
    connectedCallback(): void;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    private handleCloseClick;
    private handleKeyDown;
    private handleOverlayClick;
    private handleSlotChange;
    private handleTransitionEnd;
    private resetTransitionVariables;
    render(): any;
}
