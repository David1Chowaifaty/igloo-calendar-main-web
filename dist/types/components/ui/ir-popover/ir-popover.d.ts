export declare class IrPopover {
    el: HTMLElement;
    content: string;
    irPopoverLeft: string;
    placement: 'top' | 'bottom' | 'left' | 'right' | 'auto';
    trigger: 'focus' | 'click' | 'hover';
    renderContentAsHtml: boolean;
    private initialized;
    private popoverTrigger;
    componentDidLoad(): void;
    initializePopover(): void;
    disconnectedCallback(): void;
    render(): any;
}
