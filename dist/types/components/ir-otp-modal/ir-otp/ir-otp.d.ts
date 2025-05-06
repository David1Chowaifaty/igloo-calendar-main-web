import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrOtp {
    /**
     * The length of the OTP code
     */
    length: number;
    /**
     * Whether the input is disabled
     */
    disabled: boolean;
    /**
     * Placeholder character to display
     */
    placeholder: string;
    /**
     * Input type - can be 'text', 'password', 'number', or 'tel'
     */
    type: 'text' | 'password' | 'number' | 'tel';
    /**
     * Auto focus on the first input when component loads
     */
    autoFocus: boolean;
    /**
     * Whether to mask the input (show dots instead of text)
     */
    secure: boolean;
    /**
     * Allow only numbers (0-9) as input
     */
    numbersOnly: boolean;
    /**
     * Event emitted when the OTP value changes
     */
    otpChange: EventEmitter<string>;
    /**
     * Event emitted when the OTP is complete
     */
    otpComplete: EventEmitter<string>;
    /**
     * Current OTP value as an array of characters
     */
    otpValues: string[];
    /**
     * Reference to input elements
     */
    private inputRefs;
    /**
     * Initialize the component
     */
    componentWillLoad(): void;
    /**
     * Focus the first input after component renders
     */
    componentDidLoad(): void;
    /**
     * Watch for length changes and update the OTP values array
     */
    handleLengthChange(newLength: number): void;
    /**
     * Update the current OTP value at the specified index
     */
    handleInput: (event: Event, index: number) => void;
    /**
     * Handle keyboard navigation
     */
    handleKeyDown: (event: KeyboardEvent, index: number) => void;
    /**
     * Handle paste event to populate the OTP fields
     */
    handlePaste: (event: ClipboardEvent, index: number) => void;
    /**
     * Focus handler to select all text when focused
     */
    handleFocus: (event: FocusEvent) => void;
    /**
     * Helper method to emit change events
     */
    private emitChanges;
    /**
     * Manually clear all inputs
     */
    clear(): void;
    /**
     * Set OTP values programmatically
     */
    setValue(value: string): void;
    render(): any;
}
