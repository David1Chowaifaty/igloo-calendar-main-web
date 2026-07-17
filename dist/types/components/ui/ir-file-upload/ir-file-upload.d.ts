import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * `ir-file-upload` — a form-associated file picker with a click/drag-and-drop
 * dropzone, modeled after Web Awesome's `wa-file-input` (a Pro component that
 * is not part of the bundled free package).
 *
 * Selected files are listed under the dropzone with an image thumbnail (for
 * image files) or a type icon, the file name, its formatted size and a remove
 * button. In `multiple` mode new picks/drops are appended (duplicates by
 * name+size+mtime are skipped); otherwise a new pick replaces the current file.
 *
 * Form integration: the component is form-associated — when `name` is set the
 * files are submitted as multipart entries under that name, `required` hooks
 * into constraint validation (`valueMissing` while no file is selected), and a
 * form reset clears the selection.
 *
 * `files` is a mutable prop: reassign it (never mutate it in place) to control
 * the selection from outside. Every user-driven change emits `filesChange`
 * with the full current list.
 *
 * @slot label - The label. Alternative to the `label` attribute when HTML is needed.
 * @slot hint - Text that describes how to use the input. Alternative to the `hint` attribute.
 * @slot dropzone - Replaces the default icon + text content of the dropzone.
 *
 * @part base - The component's wrapping container.
 * @part label - The label rendered above the dropzone (also exposed as `form-control-label`, like wa form controls).
 * @part hint - The hint rendered under the dropzone.
 * @part dropzone - The droppable/clickable zone (a label wired to the hidden file input).
 * @part dropzone-icon - The default upload icon inside the dropzone.
 * @part dropzone-text - The default instruction text inside the dropzone.
 * @part file-list - The list holding the selected files.
 * @part file - Each selected-file row.
 * @part file-thumbnail - The thumbnail container of a row (holds the image or the icon).
 * @part file-image - The `<img>` preview rendered for image files.
 * @part file-icon - The type icon rendered for non-image files.
 * @part file-details - The container holding the file name and size.
 * @part file-name - The file-name text of a row.
 * @part file-size - The formatted size text of a row.
 * @part remove-button - The per-row remove (×) `wa-button` (its inner base is re-exported as `remove-button__base`).
 */
export declare class IrFileUpload {
    el: HTMLIrFileUploadElement;
    internals: ElementInternals;
    /** The file input's label. If you need to display HTML, use the `label` slot instead. */
    label: string;
    /** The file input's hint. If you need to display HTML, use the `hint` slot instead. */
    hint: string;
    /** Accepted file types, same syntax as the native `accept` attribute (e.g. `".pdf,image/*"`). Empty = accept everything. */
    accept: string;
    /** Camera/microphone to use for capturing media on mobile devices. */
    capture?: 'user' | 'environment';
    /** Disables the dropzone, the file dialog and drops. Reflected for CSS hooks. */
    disabled: boolean;
    /** Allows more than one file. New picks/drops are appended; without it a new pick replaces the current file. */
    multiple: boolean;
    /** The name of the file input, submitted with the owning form as multipart entries. */
    name: string | null;
    /** Makes a file selection required for the owning form to submit. */
    required: boolean;
    /** The file input's visual size. Reflected for CSS hooks (`ir-file-upload[size='...']`). */
    size: 'xs' | 's' | 'm' | 'l' | 'xl';
    /** The selected files. Reassign (don't mutate) to control the selection from outside. */
    files: File[];
    /** True while files are dragged over the dropzone. Reflected so consumers can style `ir-file-upload[dragging]`. */
    dragging: boolean;
    /** Fired with the full file list after every user-driven add or remove. */
    filesChange: EventEmitter<File[]>;
    private inputRef;
    /** dragenter/dragleave fire for every child element; a depth counter keeps `dragging` flicker-free. */
    private dragDepth;
    /** Message set via `setCustomValidity`; takes precedence over the built-in `required` check. */
    private customValidityMessage;
    /** Object URLs for image previews, keyed by file; revoked when the file leaves the list. */
    private thumbnails;
    componentWillLoad(): void;
    disconnectedCallback(): void;
    formResetCallback(): void;
    syncFiles(): void;
    /** Sets focus on the file input. */
    setFocus(options?: FocusOptions): Promise<void>;
    /** Removes focus from the file input. */
    setBlur(): Promise<void>;
    /** Applies a custom validation message. Pass an empty string to restore the default validity checks. */
    setCustomValidity(message: string): Promise<void>;
    /** Clears a message set with `setCustomValidity`. */
    resetValidity(): Promise<void>;
    private handleInputChange;
    private handleDragEnter;
    private handleDragOver;
    private handleDragLeave;
    private handleDrop;
    private addFiles;
    private removeFile;
    private setDragging;
    private matchesAccept;
    private isDuplicate;
    private syncFormValue;
    private updateValidity;
    /** Mirrors wa-file-input's `:state(blank)` / `:state(dragging)`; no-op where CustomStateSet is unsupported. */
    private setCustomState;
    private pruneThumbnails;
    private getThumbnail;
    /** Same type → icon mapping wa-file-input uses. */
    private fileIconName;
    private hasSlot;
    render(): any;
}
