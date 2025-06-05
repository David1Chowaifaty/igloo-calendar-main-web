import { EventEmitter } from '../../../stencil-public-runtime';
export declare class IrTextArea {
    /**
     * Number of visible text lines.
     */
    rows: number;
    /**
     * Number of visible character columns.
     */
    cols: number;
    /**
     * Unused property, intended to store textarea text.
     */
    text: string;
    /**
     * Text label displayed above or beside the textarea.
     */
    label: string;
    /**
     * Placeholder text shown when input is empty.
     */
    placeholder: string;
    /**
     * Current value of the textarea (supports two-way binding).
     */
    value: string;
    /**
     * Maximum number of characters allowed.
     */
    maxLength: number;
    /**
     * Additional classes for the textarea element.
     */
    textareaClassname: string;
    /**
     * Layout style of the textarea:
     * `'default'` shows label above, `'prepend'` shows label on the left.
     */
    variant: 'default' | 'prepend';
    /**
     * Width of the label in grid columns (for `variant="prepend"`).
     */
    labelWidth: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    /**
     * Inline styles applied directly to the textarea.
     */
    styles: {
        [key: string]: string;
    };
    /**
     * `data-testid` for targeting in tests.
     */
    testId: string;
    /**
     * Indicates if the field is in an error state.
     */
    error: boolean;
    /**
     * Emits when the textarea content changes.
     *
     * Example:
     * ```tsx
     * <ir-textarea onTextChange={(e) => console.log(e.detail)} />
     * ```
     */
    textChange: EventEmitter<string>;
    handleAriaInvalidChange(newValue: any): void;
    render(): any;
}
