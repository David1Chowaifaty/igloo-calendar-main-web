import { IEntries } from "../../../models/IBooking";
import { EventEmitter } from '../../../stencil-public-runtime';
import { ChargeRule } from '../types';
export declare class IrTaxInput {
    /**
     * List of setup entries used to populate the tax mode select.
     *
     * Each entry represents a tax application option
     * (e.g. Not Applicable, Inclusive, Exclusive).
     */
    setupEntries: IEntries[];
    /**
     * Label displayed above the percentage input.
     */
    label: string;
    /**
     * Placeholder text shown in the percentage input.
     */
    placeholder: string;
    /**
     * Disables the percentage input when true.
     *
     * Note: the input is also automatically disabled
     * when the selected tax mode is "Not Applicable".
     */
    inputDisabled: boolean;
    /**
     * Current language used to resolve translated setup entry labels.
     * Defaults to English ("en").
     */
    language: string;
    /**
     * Controlled charge rule value passed from the parent.
     *
     * This represents the committed tax state and is used
     * to sync the internal component state.
     */
    chargeRule: ChargeRule;
    /**
     * Enables automatic validation behavior when true.
     */
    autoValidate: boolean;
    /**
     * Internal working copy of the charge rule.
     *
     * This state is updated while the user is interacting
     * with the input/select and is only emitted when
     * a meaningful change is committed.
     */
    tax: ChargeRule;
    /**
     * Emitted when the tax rule meaningfully changes.
     *
     * Emission happens on:
     * - input commit (IMask change / blur)
     * - tax mode selection change
     */
    taxChange: EventEmitter<ChargeRule>;
    componentWillLoad(): void;
    private get isTaxInputDisabled();
    handleTaxValueChange(newValue: ChargeRule, oldValue: ChargeRule): void;
    private updateTaxField;
    render(): any;
}
