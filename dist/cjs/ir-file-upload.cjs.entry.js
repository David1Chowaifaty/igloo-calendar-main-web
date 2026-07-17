'use strict';

var index = require('./index-Bg4VKYKR.js');

const irFileUploadCss = () => `:host{display:block;box-sizing:border-box;font-size:var(--wa-font-size-m)}:host *,:host ::before,:host ::after{box-sizing:inherit}:host([size='xs']){font-size:var(--wa-font-size-xs)}:host([size='s']){font-size:var(--wa-font-size-s)}:host([size='l']){font-size:var(--wa-font-size-l)}:host([size='xl']){font-size:var(--wa-font-size-xl)}.label{display:inline-flex;color:var(--wa-form-control-label-color);font-weight:var(--wa-form-control-label-font-weight);line-height:var(--wa-form-control-label-line-height);margin-block-end:0.5em}:host([required]) .label::after{content:var(--wa-form-control-required-content);margin-inline-start:var(--wa-form-control-required-content-offset);color:var(--wa-form-control-required-content-color)}.hint{display:block;color:var(--wa-form-control-hint-color);font-weight:var(--wa-form-control-hint-font-weight);line-height:var(--wa-form-control-hint-line-height);margin-block-start:0.5em;font-size:var(--wa-font-size-smaller)}.dropzone{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--wa-space-m);padding:var(--wa-space-l);border:max(1px, var(--wa-form-control-border-width)) dashed var(--wa-form-control-border-color);border-radius:var(--wa-panel-border-radius);background:var(--wa-form-control-background-color);color:var(--wa-color-text-quiet);text-align:center;cursor:pointer;transition:border-color var(--wa-transition-fast),     background-color var(--wa-transition-fast),     color var(--wa-transition-fast)}.dropzone:focus{outline:none}.dropzone:has(input:focus-visible){outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.dropzone.dragging{border-style:solid;border-color:var(--wa-color-brand-border-loud);background-color:var(--wa-color-brand-fill-quiet);color:var(--wa-color-brand-on-quiet)}.dropzone::after{position:absolute;inset:0;content:''}.dropzone.disabled{opacity:0.5;cursor:not-allowed}.dropzone-icon{font-size:2em}.dropzone-text{font-weight:var(--wa-font-weight-action)}.hidden-input{position:absolute;inset:0;opacity:0;pointer-events:none}.hidden-input::file-selector-button{display:none}.file-list{list-style:none;margin:0;padding:0;margin-block-start:var(--wa-space-m)}.file{display:flex;align-items:center;gap:var(--wa-space-m);padding:var(--wa-space-m);border:var(--wa-panel-border-width) var(--wa-panel-border-style) var(--wa-color-surface-border);border-radius:var(--wa-panel-border-radius);background:var(--wa-color-surface-default)}.file+.file{margin-block-start:var(--wa-space-xs)}.file-thumbnail{flex:0 0 auto;display:flex;align-items:center;justify-content:center;width:3em;height:3em;border-radius:var(--wa-border-radius-s);overflow:hidden;background:var(--wa-color-neutral-fill-quiet)}.file-thumbnail wa-icon{font-size:1.25em;color:var(--wa-color-neutral-on-quiet)}.file-image{width:100%;height:100%;object-fit:cover}.file-details{flex:1 1 auto;min-width:0;display:flex;flex-direction:column}.file-name{font-weight:var(--wa-form-control-value-font-weight);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.file-size{font-size:var(--wa-font-size-smaller);color:var(--wa-color-text-quiet)}.remove-button{flex:0 0 auto}:host([size='xs']) .dropzone{gap:var(--wa-space-xs);padding:var(--wa-space-s)}:host([size='s']) .dropzone{gap:var(--wa-space-s);padding:var(--wa-space-m)}:host([size='l']) .dropzone{gap:var(--wa-space-l);padding:var(--wa-space-xl)}:host([size='xl']) .dropzone{gap:var(--wa-space-xl);padding:var(--wa-space-2xl)}:host([size='xs']) .file{gap:var(--wa-space-xs);padding:var(--wa-space-xs)}:host([size='s']) .file{gap:var(--wa-space-s);padding:var(--wa-space-s)}:host([size='l']) .file{gap:var(--wa-space-l);padding:var(--wa-space-l)}:host([size='xl']) .file{gap:var(--wa-space-xl);padding:var(--wa-space-xl)}:host([disabled]) .file{opacity:0.5}`;

const IrFileUpload = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.filesChange = index.createEvent(this, "filesChange");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    get el() { return index.getElement(this); }
    internals;
    /** The file input's label. If you need to display HTML, use the `label` slot instead. */
    label = '';
    /** The file input's hint. If you need to display HTML, use the `hint` slot instead. */
    hint = '';
    /** Accepted file types, same syntax as the native `accept` attribute (e.g. `".pdf,image/*"`). Empty = accept everything. */
    accept = '';
    /** Camera/microphone to use for capturing media on mobile devices. */
    capture;
    /** Disables the dropzone, the file dialog and drops. Reflected for CSS hooks. */
    disabled = false;
    /** Allows more than one file. New picks/drops are appended; without it a new pick replaces the current file. */
    multiple = false;
    /** The name of the file input, submitted with the owning form as multipart entries. */
    name = null;
    /** Makes a file selection required for the owning form to submit. */
    required = false;
    /** The file input's visual size. Reflected for CSS hooks (`ir-file-upload[size='...']`). */
    size = 'm';
    /** The selected files. Reassign (don't mutate) to control the selection from outside. */
    files = [];
    /** True while files are dragged over the dropzone. Reflected so consumers can style `ir-file-upload[dragging]`. */
    dragging = false;
    /** Fired with the full file list after every user-driven add or remove. */
    filesChange;
    inputRef;
    /** dragenter/dragleave fire for every child element; a depth counter keeps `dragging` flicker-free. */
    dragDepth = 0;
    /** Message set via `setCustomValidity`; takes precedence over the built-in `required` check. */
    customValidityMessage = '';
    /** Object URLs for image previews, keyed by file; revoked when the file leaves the list. */
    thumbnails = new Map();
    componentWillLoad() {
        this.syncFiles();
    }
    disconnectedCallback() {
        this.thumbnails.forEach(url => URL.revokeObjectURL(url));
        this.thumbnails.clear();
    }
    formResetCallback() {
        this.files = [];
    }
    syncFiles() {
        this.pruneThumbnails();
        this.syncFormValue();
        this.updateValidity();
        this.setCustomState('blank', this.files.length === 0);
    }
    /** Sets focus on the file input. */
    async setFocus(options) {
        this.inputRef?.focus(options);
    }
    /** Removes focus from the file input. */
    async setBlur() {
        this.inputRef?.blur();
    }
    /** Applies a custom validation message. Pass an empty string to restore the default validity checks. */
    async setCustomValidity(message) {
        this.customValidityMessage = message;
        this.updateValidity();
    }
    /** Clears a message set with `setCustomValidity`. */
    async resetValidity() {
        this.customValidityMessage = '';
        this.updateValidity();
    }
    handleInputChange = (e) => {
        const input = e.target;
        if (input.files?.length) {
            this.addFiles(Array.from(input.files));
        }
        // Clearing the value lets the user re-pick a file they just removed.
        input.value = '';
    };
    handleDragEnter = (e) => {
        e.preventDefault();
        if (this.disabled)
            return;
        this.dragDepth++;
        this.setDragging(true);
    };
    handleDragOver = (e) => {
        // preventDefault is what marks the zone as a valid drop target.
        e.preventDefault();
    };
    handleDragLeave = (e) => {
        e.preventDefault();
        this.dragDepth = Math.max(0, this.dragDepth - 1);
        if (this.dragDepth === 0) {
            this.setDragging(false);
        }
    };
    handleDrop = (e) => {
        e.preventDefault();
        this.dragDepth = 0;
        this.setDragging(false);
        if (this.disabled)
            return;
        // Drops bypass the native picker's `accept` filtering, so filter here.
        const dropped = Array.from(e.dataTransfer?.files ?? []).filter(file => this.matchesAccept(file));
        if (dropped.length) {
            this.addFiles(dropped);
        }
    };
    addFiles(incoming) {
        if (!this.multiple) {
            this.files = incoming.slice(0, 1);
        }
        else {
            const added = incoming.filter(file => !this.isDuplicate(file));
            if (!added.length)
                return;
            this.files = [...this.files, ...added];
        }
        this.filesChange.emit([...this.files]);
    }
    removeFile(index) {
        this.files = this.files.filter((_, i) => i !== index);
        this.filesChange.emit([...this.files]);
    }
    setDragging(dragging) {
        this.dragging = dragging;
        this.setCustomState('dragging', dragging);
    }
    matchesAccept(file) {
        if (!this.accept.trim()) {
            return true;
        }
        const name = file.name.toLowerCase();
        const type = (file.type || '').toLowerCase();
        return this.accept
            .split(',')
            .map(rule => rule.trim().toLowerCase())
            .filter(Boolean)
            .some(rule => {
            if (rule.startsWith('.'))
                return name.endsWith(rule);
            if (rule.endsWith('/*'))
                return type.startsWith(rule.slice(0, -1));
            return type === rule;
        });
    }
    isDuplicate(file) {
        return this.files.some(f => f.name === file.name && f.size === file.size && f.lastModified === file.lastModified);
    }
    /* The optional calls guard against partial ElementInternals implementations (e.g. Stencil's test mock). */
    syncFormValue() {
        if (!this.name || this.files.length === 0) {
            this.internals?.setFormValue?.(null);
            return;
        }
        const formData = new FormData();
        this.files.forEach(file => formData.append(this.name, file));
        this.internals?.setFormValue?.(formData);
    }
    updateValidity() {
        if (this.customValidityMessage) {
            this.internals?.setValidity?.({ customError: true }, this.customValidityMessage, this.inputRef);
        }
        else if (this.required && this.files.length === 0) {
            this.internals?.setValidity?.({ valueMissing: true }, this.multiple ? 'Please select one or more files.' : 'Please select a file.', this.inputRef);
        }
        else {
            this.internals?.setValidity?.({});
        }
    }
    /** Mirrors wa-file-input's `:state(blank)` / `:state(dragging)`; no-op where CustomStateSet is unsupported. */
    setCustomState(state, on) {
        const states = this.internals.states;
        if (!states)
            return;
        if (on)
            states.add(state);
        else
            states.delete(state);
    }
    pruneThumbnails() {
        this.thumbnails.forEach((url, file) => {
            if (!this.files.includes(file)) {
                URL.revokeObjectURL(url);
                this.thumbnails.delete(file);
            }
        });
    }
    getThumbnail(file) {
        if (!file.type.startsWith('image/')) {
            return null;
        }
        if (!this.thumbnails.has(file)) {
            this.thumbnails.set(file, URL.createObjectURL(file));
        }
        return this.thumbnails.get(file);
    }
    /** Same type → icon mapping wa-file-input uses. */
    fileIconName(file) {
        const type = (file.type || '').toLowerCase();
        if (type === 'application/pdf')
            return 'file-pdf';
        if (type.startsWith('video/'))
            return 'file-video';
        if (type.startsWith('audio/'))
            return 'file-audio';
        if (type.includes('zip') || type.includes('compressed'))
            return 'file-zipper';
        if (type.includes('word'))
            return 'file-word';
        if (type.includes('excel') || type.includes('spreadsheet'))
            return 'file-excel';
        if (type.includes('powerpoint') || type.includes('presentation'))
            return 'file-powerpoint';
        if (type === 'text/csv')
            return 'file-csv';
        if (type.startsWith('text/'))
            return 'file-code';
        return 'file';
    }
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    render() {
        const hasLabel = !!this.label || this.hasSlot('label');
        const hasHint = !!this.hint || this.hasSlot('hint');
        /* Markup mirrors wa-file-input: the dropzone is a <label> wired to the
           visually-hidden file input, so click-to-browse and keyboard activation
           are native behavior, and the focus ring is driven by the input's
           :focus-visible (see the CSS). */
        return (index.h(index.Host, { key: 'dfb8361ee16478e7236bcd1d739f7e2ff10424d2' }, hasLabel && (index.h("label", { key: 'a303b63e21ab1ac37fb713afd64d9cdc1e45f48e', part: "form-control-label label", class: "label", htmlFor: "file-input" }, index.h("slot", { key: '8c2e2f7d5e0dae7718a472baa398aa9b9a8d511f', name: "label" }, this.label))), index.h("div", { key: 'f2ac447d682616cbe73ccf07c147d8f0171cc58b', part: "base", class: "file-input" }, index.h("label", { key: '764ea89ae93335a61e1dab236f4e30d83c6a2d0c', id: "dropzone", part: "dropzone", htmlFor: "file-input", class: { dropzone: true, dragging: this.dragging, disabled: this.disabled }, onDragEnter: this.handleDragEnter, onDragOver: this.handleDragOver, onDragLeave: this.handleDragLeave, onDrop: this.handleDrop }, index.h("slot", { key: 'e99f725c0e5802499f5a5c4565c475309d828bc8', name: "dropzone" }, index.h("wa-icon", { key: '7d730aa6e45fbac86ebe9128ac47f3bcd5e836af', part: "dropzone-icon", class: "dropzone-icon", name: "upload", "aria-hidden": "true" }), index.h("span", { key: '6172c9de7432d5e8304ff827519fc7769dc89358', part: "dropzone-text", class: "dropzone-text" }, this.multiple ? 'Drop files here or click to browse' : 'Drop file here or click to browse')), index.h("input", { key: '9d857753d80e8d4d8fb0e71e1dc0d246eecfc62d', id: "file-input", type: "file", class: "hidden-input", accept: this.accept || undefined, capture: this.capture, multiple: this.multiple, disabled: this.disabled, "aria-describedby": hasHint ? 'hint' : undefined, ref: el => (this.inputRef = el), onChange: this.handleInputChange })), hasHint && (index.h("div", { key: '5c0d1473ff2520d422a75125d6575427b0a2897b', id: "hint", part: "hint", class: "hint" }, index.h("slot", { key: '9b128e6afe5b9d17d1120ab6b0df227ac8b9f0c5', name: "hint" }, this.hint))), this.files.length > 0 && (index.h("ul", { key: 'ac61f43a7886ad429370a65e3572716888bb282e', part: "file-list", class: "file-list", role: "list" }, this.files.map((file, index$1) => {
            const thumbnail = this.getThumbnail(file);
            return (index.h("li", { part: "file", class: "file", key: `${file.name}-${file.size}-${file.lastModified}` }, index.h("span", { part: "file-thumbnail", class: "file-thumbnail" }, thumbnail ? (index.h("img", { part: "file-image", class: "file-image", src: thumbnail, alt: "" })) : (index.h("wa-icon", { part: "file-icon", name: this.fileIconName(file), "aria-hidden": "true" }))), index.h("span", { part: "file-details", class: "file-details" }, index.h("span", { part: "file-name", class: "file-name", title: file.name }, file.name), index.h("span", { part: "file-size", class: "file-size" }, index.h("wa-format-bytes", { value: file.size }))), index.h("wa-button", { part: "remove-button", exportparts: "base:remove-button__base", class: "remove-button", appearance: "plain", variant: "neutral", size: this.size, disabled: this.disabled, onClick: () => this.removeFile(index$1) }, index.h("wa-icon", { name: "xmark", label: `Remove ${file.name}` }))));
        }))))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "files": [{
                "syncFiles": 0
            }],
        "required": [{
                "syncFiles": 0
            }],
        "name": [{
                "syncFiles": 0
            }]
    }; }
};
IrFileUpload.style = irFileUploadCss();

exports.ir_file_upload = IrFileUpload;
