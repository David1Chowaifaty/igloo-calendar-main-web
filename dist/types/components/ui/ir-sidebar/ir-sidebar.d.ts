import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrSidebar {
    el: HTMLIrSidebarElement;
    name: string;
    side: 'right' | 'left';
    showCloseButton: boolean;
    open: boolean;
    sidebarStyles: Partial<CSSStyleDeclaration>;
    label: string;
    preventClose: boolean;
    irSidebarToggle: EventEmitter;
    beforeSidebarClose: EventEmitter;
    private sidebarRef;
    applyStyles(): void;
    handleSidebarStylesChange(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    handleOpenChange(newValue: boolean, oldValue: boolean): void;
    handleKeyDown(e: KeyboardEvent): Promise<void>;
    toggleSidebar(): Promise<void>;
    render(): any[];
}
