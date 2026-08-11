import { EventEmitter } from '../../../stencil-public-runtime';
import { NativeWaInput } from '../ir-input/ir-input';
export type QuillToolbarButton = 'undo' | 'redo' | 'bold' | 'italic' | 'underline' | 'strike' | 'blockquote' | 'code-block' | 'link' | 'image' | 'video' | 'formula' | 'header' | 'list' | 'script' | 'indent' | 'direction' | 'size' | 'color' | 'background' | 'font' | 'align' | 'clean';
export interface ToolbarConfig {
    undo?: boolean;
    redo?: boolean;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strike?: boolean;
    blockquote?: boolean;
    codeBlock?: boolean;
    link?: boolean;
    image?: boolean;
    video?: boolean;
    formula?: boolean;
    /** `true` uses [1, 2, 3, 4, 5, 6, false], or pass your own header levels (false = paragraph). */
    header?: boolean | (1 | 2 | 3 | 4 | 5 | 6 | false)[];
    /** `true` uses ['ordered', 'bullet', 'check']. */
    list?: boolean | ('ordered' | 'bullet' | 'check')[];
    /** `true` uses ['sub', 'super']. */
    script?: boolean | ('sub' | 'super')[];
    indent?: boolean;
    direction?: boolean;
    /** `true` uses ['small', false, 'large', 'huge']. */
    size?: boolean | (string | false)[];
    color?: boolean;
    background?: boolean;
    font?: boolean;
    align?: boolean;
    clean?: boolean;
}
export declare class IrTextEditor {
    el: HTMLElement;
    internals: ElementInternals;
    size: NativeWaInput['size'];
    appearance: NativeWaInput['appearance'];
    pill: boolean;
    error: boolean;
    maxLength: number;
    /** Initial HTML content */
    value: string;
    /** If true, makes the editor read-only */
    readOnly: boolean;
    /** Determines if the current user can edit the content */
    userCanEdit: boolean;
    /** Placeholder text */
    placeholder: string;
    /** The editor's label. If you need to display HTML, use the `label` slot instead. */
    label: string;
    /** The editor's hint. If you need to display HTML, use the `hint` slot instead. */
    hint: string;
    /** The name of the editor, submitted as a name/value pair with form data. */
    name: string;
    /** Makes the editor a required field for form submission. */
    required: boolean;
    /** Disables the editor. */
    disabled: boolean;
    /**
     * Type-safe toolbar configuration covering every Quill toolbar control.
     * For example, you can pass:
     *
     * {
     *   bold: true,
     *   italic: true,
     *   underline: true,
     *   strike: false,
     *   header: true, // or e.g. [1, 2, false]
     *   list: true, // or e.g. ['ordered', 'bullet']
     *   link: true,
     *   clean: true
     * }
     */
    toolbarConfig?: ToolbarConfig;
    /** Emits current HTML content whenever it changes */
    textChange: EventEmitter<string>;
    private editor?;
    private editorContainer;
    private teardownShadowPatch?;
    private hasLoaded;
    private hasLabelSlot;
    private hasHintSlot;
    private componentId;
    /** Holds the last emitted HTML so the watcher can ignore the parent echoing it back. */
    private pendingEchoHtml;
    private formDisabled;
    componentWillLoad(): void;
    componentDidLoad(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    /** Moves focus into the editing area. */
    setFocus(): Promise<void>;
    handleValueChange(newValue: string): void;
    handleEnabledChange(): void;
    handleRequiredChange(newVal: boolean): void;
    handleErrorChange(newVal: boolean): void;
    formResetCallback(): void;
    formDisabledCallback(disabled: boolean): void;
    private initEditor;
    /**
     * delegatesFocus sends programmatic host.focus() to the first focusable element, which is a
     * toolbar button (tabindex=-1 keeps them out of the tab order but not out of delegation).
     * When focus enters from outside the component onto the toolbar, move it to the editing area.
     */
    private handleShadowFocusIn;
    private destroyEditor;
    private handleTextChange;
    private applyValue;
    private applyEnabledState;
    private get isEmpty();
    private syncFormValue;
    private updateValidity;
    private updateHistoryButtons;
    private get computedToolbar();
    private get labelId();
    private get hintId();
    render(): any;
}
