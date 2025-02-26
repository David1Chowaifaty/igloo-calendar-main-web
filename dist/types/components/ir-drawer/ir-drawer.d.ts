import { EventEmitter } from '../../stencil-public-runtime';
export declare class IrDrawer {
    showDrawer: boolean;
    el: HTMLElement;
    /**
     * The title of the drawer
     */
    drawerTitle: string;
    /**
     * The placement of the drawer
     */
    placement: 'left' | 'right';
    /**
     * Is the drawer open?
     */
    open: boolean;
    /**
     * Emitted when the drawer visibility changes.
     */
    drawerChange: EventEmitter<boolean>;
    /**
     * Emitted when the drawer is requested to be closed via keyboard
     */
    drawerCloseRequested: EventEmitter<void>;
    componentDidLoad(): void;
    handleKeyDown(ev: KeyboardEvent): void;
    openHandler(newValue: boolean): void;
    toggleDrawer: () => void;
    closeDrawer(): Promise<void>;
    render(): any;
}
