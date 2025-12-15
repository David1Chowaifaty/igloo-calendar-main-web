import WaDrawer from '@awesome.me/webawesome/dist/components/drawer/drawer';
import { EventEmitter } from '../../stencil-public-runtime';
export type NativeDrawer = WaDrawer;
export declare class IrDrawer {
    el: HTMLIrDrawerElement;
    /** Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer. */
    open: NativeDrawer['open'];
    /**
     * The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
     * proper accessibility. If you need to display HTML, use the `label` slot instead.
     */
    label: NativeDrawer['label'];
    /** The direction from which the drawer will open. */
    placement: NativeDrawer['placement'];
    /** Disables the header. This will also remove the default close button. */
    withoutHeader: NativeDrawer['withoutHeader'];
    /** When enabled, the drawer will be closed when the user clicks outside of it. */
    lightDismiss: NativeDrawer['lightDismiss'];
    private slotState;
    /** Emitted when the drawer opens. */
    drawerShow: EventEmitter<void>;
    /**Emitted when the drawer is requesting to close. Calling event.preventDefault() will prevent the drawer from closing. You can inspect event.detail.source to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed Escape or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
    drawerHide: EventEmitter<{
        source: Element;
    }>;
    private readonly onDrawerShow;
    private readonly onDrawerHide;
    private slotObserver;
    private readonly SLOT_NAMES;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    private emitDrawerShow;
    private emitDrawerHide;
    private setupSlotListeners;
    private removeSlotListeners;
    private handleSlotChange;
    private updateSlotState;
    private hasSlot;
    render(): any;
}
