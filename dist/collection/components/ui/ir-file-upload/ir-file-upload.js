import { Host, h } from "@stencil/core";
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
export class IrFileUpload {
    el;
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
        return (h(Host, { key: 'e88f0a30fe16d3e3307af4daa003b526031ae064' }, hasLabel && (h("label", { key: '62d61f520e0d2ef23d93eedc1873b568a0193106', part: "form-control-label label", class: "label", htmlFor: "file-input" }, h("slot", { key: 'ae7ec0770b38741d2d2afb156680fa8a3a97d9de', name: "label" }, this.label))), h("div", { key: '5281234ca3e8fdc910ce4eff703bd46eb9138330', part: "base", class: "file-input" }, h("label", { key: 'b077fdbda5797451a17d0f7b9ff36c24c1860009', id: "dropzone", part: "dropzone", htmlFor: "file-input", class: { dropzone: true, dragging: this.dragging, disabled: this.disabled }, onDragEnter: this.handleDragEnter, onDragOver: this.handleDragOver, onDragLeave: this.handleDragLeave, onDrop: this.handleDrop }, h("slot", { key: '68d363fc8626bf317300deec4b33291784737da8', name: "dropzone" }, h("wa-icon", { key: '5230fc2146b33b078aef5393ae9e9a75bde8b765', part: "dropzone-icon", class: "dropzone-icon", name: "upload", "aria-hidden": "true" }), h("span", { key: '43f0827dbd8c1d40ce18bf24f756326c14bb2dea', part: "dropzone-text", class: "dropzone-text" }, this.multiple ? 'Drop files here or click to browse' : 'Drop file here or click to browse')), h("input", { key: '618a528d9579c2f46001e1c80819459bdc94b036', id: "file-input", type: "file", class: "hidden-input", accept: this.accept || undefined, capture: this.capture, multiple: this.multiple, disabled: this.disabled, "aria-describedby": hasHint ? 'hint' : undefined, ref: el => (this.inputRef = el), onChange: this.handleInputChange })), hasHint && (h("div", { key: '66ec64ff7595a1065503b37ec64618e310364aa8', id: "hint", part: "hint", class: "hint" }, h("slot", { key: 'ee6925881ee6307b4882a9bbbe5e1becc2fa25e0', name: "hint" }, this.hint))), this.files.length > 0 && (h("ul", { key: '7e8945a71fba099599fdff95fc95fc9db739d98d', part: "file-list", class: "file-list", role: "list" }, this.files.map((file, index) => {
            const thumbnail = this.getThumbnail(file);
            return (h("li", { part: "file", class: "file", key: `${file.name}-${file.size}-${file.lastModified}` }, h("span", { part: "file-thumbnail", class: "file-thumbnail" }, thumbnail ? (h("img", { part: "file-image", class: "file-image", src: thumbnail, alt: "" })) : (h("wa-icon", { part: "file-icon", name: this.fileIconName(file), "aria-hidden": "true" }))), h("span", { part: "file-details", class: "file-details" }, h("span", { part: "file-name", class: "file-name", title: file.name }, file.name), h("span", { part: "file-size", class: "file-size" }, h("wa-format-bytes", { value: file.size }))), h("wa-button", { part: "remove-button", exportparts: "base:remove-button__base", class: "remove-button", appearance: "plain", variant: "neutral", size: this.size, disabled: this.disabled, onClick: () => this.removeFile(index) }, h("wa-icon", { name: "xmark", label: `Remove ${file.name}` }))));
        }))))));
    }
    static get is() { return "ir-file-upload"; }
    static get encapsulation() { return "shadow"; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-file-upload.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-file-upload.css"]
        };
    }
    static get properties() {
        return {
            "label": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The file input's label. If you need to display HTML, use the `label` slot instead."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "''"
            },
            "hint": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The file input's hint. If you need to display HTML, use the `hint` slot instead."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint",
                "defaultValue": "''"
            },
            "accept": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Accepted file types, same syntax as the native `accept` attribute (e.g. `\".pdf,image/*\"`). Empty = accept everything."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "accept",
                "defaultValue": "''"
            },
            "capture": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'user' | 'environment'",
                    "resolved": "\"environment\" | \"user\"",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Camera/microphone to use for capturing media on mobile devices."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "capture"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Disables the dropzone, the file dialog and drops. Reflected for CSS hooks."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "multiple": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Allows more than one file. New picks/drops are appended; without it a new pick replaces the current file."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "multiple",
                "defaultValue": "false"
            },
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string | null",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The name of the file input, submitted with the owning form as multipart entries."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name",
                "defaultValue": "null"
            },
            "required": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Makes a file selection required for the owning form to submit."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "required",
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'xs' | 's' | 'm' | 'l' | 'xl'",
                    "resolved": "\"l\" | \"m\" | \"s\" | \"xl\" | \"xs\"",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The file input's visual size. Reflected for CSS hooks (`ir-file-upload[size='...']`)."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'m'"
            },
            "files": {
                "type": "unknown",
                "mutable": true,
                "complexType": {
                    "original": "File[]",
                    "resolved": "File[]",
                    "references": {
                        "File": {
                            "location": "global",
                            "id": "global::File"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The selected files. Reassign (don't mutate) to control the selection from outside."
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "dragging": {
                "type": "boolean",
                "mutable": true,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "True while files are dragged over the dropzone. Reflected so consumers can style `ir-file-upload[dragging]`."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "dragging",
                "defaultValue": "false"
            }
        };
    }
    static get events() {
        return [{
                "method": "filesChange",
                "name": "filesChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Fired with the full file list after every user-driven add or remove."
                },
                "complexType": {
                    "original": "File[]",
                    "resolved": "File[]",
                    "references": {
                        "File": {
                            "location": "global",
                            "id": "global::File"
                        }
                    }
                }
            }];
    }
    static get methods() {
        return {
            "setFocus": {
                "complexType": {
                    "signature": "(options?: FocusOptions) => Promise<void>",
                    "parameters": [{
                            "name": "options",
                            "type": "FocusOptions",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        },
                        "FocusOptions": {
                            "location": "global",
                            "id": "global::FocusOptions"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Sets focus on the file input.",
                    "tags": []
                }
            },
            "setBlur": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Removes focus from the file input.",
                    "tags": []
                }
            },
            "setCustomValidity": {
                "complexType": {
                    "signature": "(message: string) => Promise<void>",
                    "parameters": [{
                            "name": "message",
                            "type": "string",
                            "docs": ""
                        }],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Applies a custom validation message. Pass an empty string to restore the default validity checks.",
                    "tags": []
                }
            },
            "resetValidity": {
                "complexType": {
                    "signature": "() => Promise<void>",
                    "parameters": [],
                    "references": {
                        "Promise": {
                            "location": "global",
                            "id": "global::Promise"
                        }
                    },
                    "return": "Promise<void>"
                },
                "docs": {
                    "text": "Clears a message set with `setCustomValidity`.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "files",
                "methodName": "syncFiles"
            }, {
                "propName": "required",
                "methodName": "syncFiles"
            }, {
                "propName": "name",
                "methodName": "syncFiles"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
