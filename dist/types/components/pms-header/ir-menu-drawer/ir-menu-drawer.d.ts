import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrMenuDrawer {
    open: boolean;
    menuOpenChanged: EventEmitter<boolean>;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    private handleDocumentKeyDown;
    openDrawer(): Promise<void>;
    handleOpenChange(): void;
    render(): any;
}
