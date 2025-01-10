import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrTooltip {
    el: HTMLElement;
    message: string;
    withHtml: boolean;
    label: string;
    labelColors: 'default' | 'green' | 'red';
    open_behavior: 'hover' | 'click';
    open: boolean;
    tooltipOpenChange: EventEmitter<boolean>;
    private popperInstance;
    private tooltipTimeout;
    private trigger;
    private content;
    componentDidLoad(): void;
    handleOutsideClick: (event: MouseEvent) => void;
    createPopperInstance(): void;
    toggleOpen(shouldOpen: boolean): void;
    disconnectedCallback(): void;
    render(): any;
}
