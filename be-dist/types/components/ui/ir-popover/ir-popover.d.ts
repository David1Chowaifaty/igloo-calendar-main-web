/// <reference types="node" />
import { EventEmitter } from '../../../stencil-public-runtime';
import { Placement } from '@popperjs/core';
export declare class IrPopover {
    el: HTMLElement;
    active: boolean;
    trigger_label: string;
    placement: Placement;
    stopListeningForOutsideClicks: boolean;
    showCloseButton: boolean;
    allowFlip: boolean;
    isVisible: boolean;
    isMobile: boolean;
    previousIsMobile: boolean;
    isDialogOpen: boolean;
    popoverInstance: any;
    triggerElement: HTMLElement;
    contentElement: HTMLElement;
    popupInitializing: NodeJS.Timeout;
    dialogElement: HTMLIrDialogElement;
    openChange: EventEmitter<boolean>;
    componentDidLoad(): void;
    handleKeyboardPress: (e: KeyboardEvent) => void;
    handleResize(): void;
    initializePopover(): void;
    toggleVisibility(): Promise<void>;
    adjustPopoverPlacement(): void;
    handleOutsideClick: (event: MouseEvent) => void;
    disconnectedCallback(): void;
    render(): any;
}
