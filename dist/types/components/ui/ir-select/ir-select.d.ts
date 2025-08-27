import { EventEmitter } from '../../../stencil-public-runtime';
import { selectOption } from "../../../common/models";
export declare class IrSelect {
    name: string;
    data: selectOption[];
    label: string;
    selectStyles: string;
    selectForcedStyles: {
        [key: string]: string;
    };
    selectContainerStyle: string;
    selectedValue: any;
    required: boolean;
    firstOption: string;
    showFirstOption: boolean;
    size: 'sm' | 'md' | 'lg';
    textSize: 'sm' | 'md' | 'lg';
    labelPosition: 'left' | 'right' | 'center';
    labelBackground: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | null;
    labelColor: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    labelBorder: 'theme' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none';
    labelWidth: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
    selectId: string;
    testId: string;
    disabled: boolean;
    error: boolean;
    /**
     * Floating label text that appears inside the input and “floats” above
     * when the field is focused or has a value.
     *
     * - If provided, a floating label will be rendered inside the input container.
     * - If you omit this prop but set `label`, the old left-side static label is used.
     * - If you provide both `label` and `floatingLabel`, only the floating label is shown.
     *
     *
     * Examples:
     * ```tsx
     * <ir-select floating-label label="Phone" />
     * ```
     */
    floatingLabel: boolean;
    initial: boolean;
    valid: boolean;
    selectChange: EventEmitter;
    private selectEl;
    /** Internal: id used by aria-labelledby for the floating label. */
    private labelId;
    watchHandler(newValue: string): void;
    handleButtonAnimation(e: CustomEvent): void;
    private handleSelectChange;
    count: number;
    render(): any;
}
