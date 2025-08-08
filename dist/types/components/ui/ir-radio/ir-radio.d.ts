import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrRadio {
    el: HTMLIrRadioElement;
    /**
     * Whether the checkbox is checked.
     */
    checked: boolean;
    /**
     * The label text associated with the checkbox.
     */
    label: string;
    /**
     * The unique ID of the checkbox element.
     */
    radioBoxId: string;
    /**
     * The name attribute of the checkbox, used for form submission.
     */
    name: string;
    /**
     * Whether the checkbox is in an indeterminate state.
     */
    indeterminate: boolean;
    /**
     * Disables the checkbox when true.
     */
    disabled: boolean;
    /**
     * CSS class applied to the label element.
     */
    labelClass: string;
    /**
     * Internal state tracking whether the checkbox is currently checked.
     */
    currentChecked: boolean;
    /**
     * Emitted when the checkbox's checked state changes.
     */
    checkChange: EventEmitter<boolean>;
    private radioRef;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /**
     * Watcher for the `checked` property. Syncs internal state with external prop changes.
     */
    handleCheckedChange(newValue: boolean): void;
    /**
     * Handles user interaction with the checkbox and updates its state.
     */
    private handleCheckChange;
    render(): any;
}
