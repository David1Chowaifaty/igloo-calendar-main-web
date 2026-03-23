import { MaskProp } from "../../ui/ir-input/ir-input";
import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrInputCell {
    el: HTMLIrInputCellElement;
    /** The value of the input. */
    value: string;
    /** Disables the input. */
    disabled: boolean;
    /** Mask for the input field (optional) */
    mask: MaskProp;
    active: boolean;
    private slotState;
    cellValueChange: EventEmitter<string>;
    private inputRef;
    private slotObserver;
    private readonly SLOT_NAMES;
    componentWillLoad(): void;
    componentDidLoad(): void;
    disconnectedCallback(): void;
    handleActiveChange(): void;
    private hasSlot;
    private setupSlotListeners;
    private removeSlotListeners;
    private handleSlotChange;
    private updateSlotState;
    render(): any;
}
