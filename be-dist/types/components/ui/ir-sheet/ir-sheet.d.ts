import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrSheet {
    open: boolean;
    hideCloseButton: boolean;
    isVisible: boolean;
    openChange: EventEmitter<boolean>;
    componentWillLoad(): Promise<void>;
    handleKeyDown(e: KeyboardEvent): void;
    handleOpenChange(newValue: boolean, oldValue: boolean): Promise<void>;
    openSheet(): Promise<void>;
    closeSheet(): Promise<void>;
    disconnectedCallback(): void;
    render(): any;
}
