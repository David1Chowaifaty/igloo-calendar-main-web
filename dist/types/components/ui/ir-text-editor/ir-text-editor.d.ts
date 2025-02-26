import { EventEmitter } from '../../../stencil-public-runtime';
export type QuillToolbarButton = 'bold' | 'italic' | 'underline' | 'strike' | 'link' | 'image' | 'video' | 'clean';
export interface ToolbarConfig {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strike?: boolean;
    link?: boolean;
    image?: boolean;
    video?: boolean;
    clean?: boolean;
}
export declare class IrTextEditor {
    el: HTMLElement;
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
    /**
     * Type-safe toolbar configuration.
     * For example, you can pass:
     *
     * {
     *   bold: true,
     *   italic: true,
     *   underline: true,
     *   strike: false,
     *   link: true,
     *   clean: true
     * }
     */
    toolbarConfig?: ToolbarConfig;
    /** Emits current HTML content whenever it changes */
    textChange: EventEmitter<string>;
    /** Private, non-reactive Quill editor instance */
    private editor;
    private editorContainer;
    componentDidLoad(): void;
    handleValueChange(newValue: string, oldValue: string): void;
    onReadOnlyChange(newVal: boolean): void;
    onUserCanEditChange(newVal: boolean): void;
    disconnectedCallback(): void;
    private get computedToolbar();
    private setEditorValue;
    render(): any;
}
