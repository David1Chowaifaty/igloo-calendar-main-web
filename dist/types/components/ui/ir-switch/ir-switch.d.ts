import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrSwitch {
    /**
     * Whether the switch is currently checked (on).
     * This is mutable and can be toggled internally.
     */
    checked: boolean;
    /**
     * Optional ID for the switch.
     * If not provided, a random ID will be generated.
     */
    switchId: string;
    /**
     * Disables the switch if true.
     */
    disabled: boolean;
    /**
     * Emitted when the checked state changes.
     * Emits `true` when turned on, `false` when turned off.
     *
     * Example:
     * ```tsx
     * <ir-switch onCheckChange={(e) => console.log(e.detail)} />
     * ```
     */
    checkChange: EventEmitter<boolean>;
    private switchRoot;
    private _id;
    componentWillLoad(): void;
    componentDidLoad(): void;
    /**
     * Generates a random alphanumeric ID of specified length.
     *
     * @param length Number of characters in the ID.
     * @returns A string with the generated ID.
     */
    private generateRandomId;
    /**
     * Toggles the `checked` state of the switch and updates accessibility attributes.
     * Also emits the `checkChange` event with the new state.
     *
     * Example:
     * ```ts
     * const el = document.querySelector('ir-switch');
     * el.handleCheckChange(); // toggles on/off
     * ```
     */
    private handleCheckChange;
    render(): any;
}
