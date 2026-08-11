import { Host, h } from "@stencil/core";
import Quill from "quill";
import { patchQuillForShadowDom } from "./quill-shadow";
function buildToolbar(config) {
    const toolbar = [];
    const historyControls = [];
    if (config.undo)
        historyControls.push({ undo: 'ql-undo' });
    if (config.redo)
        historyControls.push({ redo: 'ql-redo' });
    if (historyControls.length) {
        toolbar.push(historyControls);
    }
    const textFormats = [];
    if (config.bold)
        textFormats.push('bold');
    if (config.italic)
        textFormats.push('italic');
    if (config.underline)
        textFormats.push('underline');
    if (config.strike)
        textFormats.push('strike');
    if (textFormats.length) {
        toolbar.push(textFormats);
    }
    const blockFormats = [];
    if (config.blockquote)
        blockFormats.push('blockquote');
    if (config.codeBlock)
        blockFormats.push('code-block');
    if (blockFormats.length) {
        toolbar.push(blockFormats);
    }
    const embedFormats = [];
    if (config.link)
        embedFormats.push('link');
    if (config.image)
        embedFormats.push('image');
    if (config.video)
        embedFormats.push('video');
    if (config.formula)
        embedFormats.push('formula');
    if (embedFormats.length) {
        toolbar.push(embedFormats);
    }
    if (config.header) {
        toolbar.push([{ header: config.header === true ? [1, 2, 3, 4, 5, 6, false] : config.header }]);
    }
    if (config.list) {
        (config.list === true ? ['ordered', 'bullet', 'check'] : config.list).forEach(value => toolbar.push([{ list: value }]));
    }
    if (config.script) {
        (config.script === true ? ['sub', 'super'] : config.script).forEach(value => toolbar.push([{ script: value }]));
    }
    if (config.indent) {
        toolbar.push([{ indent: '-1' }, { indent: '+1' }]);
    }
    if (config.direction) {
        toolbar.push([{ direction: 'rtl' }]);
    }
    if (config.size) {
        toolbar.push([{ size: config.size === true ? ['small', false, 'large', 'huge'] : config.size }]);
    }
    const colorFormats = [];
    if (config.color)
        colorFormats.push({ color: [] });
    if (config.background)
        colorFormats.push({ background: [] });
    if (colorFormats.length) {
        toolbar.push(colorFormats);
    }
    if (config.font) {
        toolbar.push([{ font: [] }]);
    }
    if (config.align) {
        toolbar.push([{ align: [] }]);
    }
    if (config.clean)
        toolbar.push(['clean']);
    return toolbar;
}
/**
 * Quill 2 always emits lists as `<ol><li data-list="bullet|ordered|checked|unchecked" class="ql-indent-N">`,
 * relying on CSS to draw bullets/numbers from the `data-list` attribute. That's invisible outside an
 * element with Quill's stylesheet, so rewrite it into real semantic `<ul>`/`<ol>`/`<li>` markup (with
 * genuine nesting for indented items) before the HTML leaves the component.
 */
function normalizeListMarkup(html) {
    if (!html || html.indexOf('data-list') === -1) {
        return html;
    }
    const template = document.createElement('template');
    template.innerHTML = html;
    template.content.querySelectorAll('ol').forEach(normalizeListElement);
    return template.innerHTML;
}
function normalizeListElement(ol) {
    const items = Array.from(ol.children);
    if (!items.length || !items.every(item => item.tagName === 'LI' && item.hasAttribute('data-list'))) {
        return;
    }
    const fragment = document.createDocumentFragment();
    const stack = [];
    items.forEach(li => {
        const type = li.getAttribute('data-list') || 'bullet';
        const indentMatch = /ql-indent-(\d+)/.exec(li.className);
        const level = indentMatch ? parseInt(indentMatch[1], 10) : 0;
        li.removeAttribute('data-list');
        if (indentMatch) {
            li.classList.remove(indentMatch[0]);
            if (!li.classList.length)
                li.removeAttribute('class');
        }
        if (type === 'checked' || type === 'unchecked') {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.disabled = true;
            if (type === 'checked')
                checkbox.setAttribute('checked', '');
            li.insertBefore(checkbox, li.firstChild);
        }
        const tag = type === 'ordered' ? 'ol' : 'ul';
        while (stack.length && stack[stack.length - 1].level > level)
            stack.pop();
        let frame = stack[stack.length - 1];
        const needsNewList = !frame || frame.level < level || (frame.level === level && frame.container.tagName.toLowerCase() !== tag);
        if (needsNewList) {
            if (frame && frame.level === level)
                stack.pop();
            const parentFrame = stack[stack.length - 1];
            const list = document.createElement(tag);
            const parentLi = parentFrame ? parentFrame.container.lastElementChild : null;
            (parentLi ?? fragment).appendChild(list);
            frame = { level, container: list };
            stack.push(frame);
        }
        frame.container.appendChild(li);
    });
    ol.replaceWith(fragment);
}
const icons = Quill.import('ui/icons');
icons['undo'] =
    '<svg title="undo" xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path class="ql-fill" d="M48.5 224L40 224c-13.3 0-24-10.7-24-24L16 72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8L48.5 224z" /></svg>';
icons['redo'] =
    '<svg title="redo" xmlns="http://www.w3.org/2000/svg" height="18" width="18" viewBox="0 0 512 512"><path class="ql-fill" d="M463.5 224l8.5 0c13.3 0 24-10.7 24-24l0-128c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8l119.5 0z"/></svg>';
let editorIdCounter = 0;
export class IrTextEditor {
    el;
    internals;
    size = 's';
    appearance = 'outlined';
    pill = false;
    error;
    maxLength;
    /** Initial HTML content */
    value = '';
    /** If true, makes the editor read-only */
    readOnly = false;
    /** Determines if the current user can edit the content */
    userCanEdit = true;
    /** Placeholder text */
    placeholder;
    /** The editor's label. If you need to display HTML, use the `label` slot instead. */
    label;
    /** The editor's hint. If you need to display HTML, use the `hint` slot instead. */
    hint;
    /** The name of the editor, submitted as a name/value pair with form data. */
    name;
    /** Makes the editor a required field for form submission. */
    required = false;
    /** Disables the editor. */
    disabled = false;
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
    toolbarConfig;
    /** Emits current HTML content whenever it changes */
    textChange;
    editor;
    editorContainer;
    teardownShadowPatch;
    hasLoaded = false;
    hasLabelSlot = false;
    hasHintSlot = false;
    componentId = `ir-text-editor-${++editorIdCounter}`;
    /** Holds the last emitted HTML so the watcher can ignore the parent echoing it back. */
    pendingEchoHtml = null;
    formDisabled = false;
    componentWillLoad() {
        this.hasLabelSlot = !!this.el.querySelector('[slot="label"]');
        this.hasHintSlot = !!this.el.querySelector('[slot="hint"]');
    }
    componentDidLoad() {
        this.hasLoaded = true;
        this.initEditor();
    }
    connectedCallback() {
        if (this.hasLoaded && !this.editor) {
            this.initEditor();
        }
    }
    disconnectedCallback() {
        this.destroyEditor();
    }
    /** Moves focus into the editing area. */
    async setFocus() {
        this.editor?.focus();
    }
    handleValueChange(newValue) {
        if (newValue != null && newValue === this.pendingEchoHtml) {
            this.pendingEchoHtml = null;
            return;
        }
        this.applyValue(newValue ?? '');
    }
    handleEnabledChange() {
        this.applyEnabledState();
    }
    handleRequiredChange(newVal) {
        this.editor?.root.setAttribute('aria-required', String(!!newVal));
        this.updateValidity();
    }
    handleErrorChange(newVal) {
        this.editor?.root.setAttribute('aria-invalid', String(!!newVal));
    }
    formResetCallback() {
        this.applyValue('');
    }
    formDisabledCallback(disabled) {
        this.formDisabled = disabled;
        this.applyEnabledState();
    }
    initEditor() {
        const options = {
            modules: {
                toolbar: {
                    container: this.computedToolbar,
                    handlers: {
                        undo: () => {
                            this.editor?.history.undo();
                            this.updateHistoryButtons();
                        },
                        redo: () => {
                            this.editor?.history.redo();
                            this.updateHistoryButtons();
                        },
                    },
                },
                history: {
                    delay: 1000,
                    maxStack: 100,
                    userOnly: true,
                },
            },
            placeholder: this.placeholder,
            readOnly: true,
            theme: 'snow',
        };
        this.editor = new Quill(this.editorContainer, options);
        this.teardownShadowPatch = patchQuillForShadowDom(this.editor, this.el);
        // Single tab stop: keep toolbar buttons out of the tab order so delegatesFocus lands on
        // the contenteditable area, matching a native field.
        this.el.shadowRoot.querySelectorAll('.ql-toolbar button, .ql-toolbar [tabindex]').forEach(button => (button.tabIndex = -1));
        this.editor.root.setAttribute('aria-multiline', 'true');
        this.editor.root.setAttribute('aria-required', String(!!this.required));
        this.editor.root.setAttribute('aria-invalid', String(!!this.error));
        if (this.label || this.hasLabelSlot) {
            this.editor.root.setAttribute('aria-labelledby', this.labelId);
        }
        if (this.hint || this.hasHintSlot) {
            this.editor.root.setAttribute('aria-describedby', this.hintId);
        }
        this.el.shadowRoot.addEventListener('focusin', this.handleShadowFocusIn);
        this.applyEnabledState();
        if (this.value) {
            this.applyValue(this.value);
        }
        this.editor.on('text-change', this.handleTextChange);
        this.syncFormValue();
        this.updateHistoryButtons();
    }
    /**
     * delegatesFocus sends programmatic host.focus() to the first focusable element, which is a
     * toolbar button (tabindex=-1 keeps them out of the tab order but not out of delegation).
     * When focus enters from outside the component onto the toolbar, move it to the editing area.
     */
    handleShadowFocusIn = (event) => {
        const target = event.target;
        const from = event.relatedTarget;
        const cameFromOutside = !from || (!this.el.shadowRoot.contains(from) && !this.el.contains(from));
        if (cameFromOutside && target?.closest?.('.ql-toolbar')) {
            // Deferred so the redirect runs after the browser finishes the delegated-focus dispatch.
            requestAnimationFrame(() => this.editor?.focus());
        }
    };
    destroyEditor() {
        this.el.shadowRoot?.removeEventListener('focusin', this.handleShadowFocusIn);
        this.teardownShadowPatch?.();
        this.teardownShadowPatch = undefined;
        this.editor?.off('text-change', this.handleTextChange);
        this.editor = undefined;
        this.el.shadowRoot?.querySelector('.ql-toolbar')?.remove();
        if (this.editorContainer) {
            this.editorContainer.classList.remove('ql-container', 'ql-snow', 'ql-disabled');
            this.editorContainer.innerHTML = '';
        }
    }
    handleTextChange = (_delta, _oldDelta, source) => {
        if (!this.editor) {
            return;
        }
        if (source === 'user' && this.maxLength) {
            const plainText = this.editor.getText();
            const effectiveLength = plainText.endsWith('\n') ? plainText.length - 1 : plainText.length;
            if (effectiveLength > this.maxLength) {
                const excess = effectiveLength - this.maxLength;
                this.editor.deleteText(this.maxLength, excess, 'user');
                return;
            }
        }
        const html = normalizeListMarkup(this.editor.root.innerHTML);
        this.pendingEchoHtml = html;
        this.syncFormValue();
        this.updateHistoryButtons();
        this.textChange.emit(html);
    };
    applyValue(value) {
        if (!this.editor) {
            return;
        }
        const hadFocus = this.editor.hasFocus();
        const delta = this.editor.clipboard.convert({ html: value });
        this.editor.setContents(delta, Quill.sources.SILENT);
        if (hadFocus) {
            this.editor.setSelection(this.editor.getLength() - 1, 0, Quill.sources.SILENT);
        }
        this.pendingEchoHtml = null;
        this.syncFormValue();
        this.updateHistoryButtons();
    }
    applyEnabledState() {
        this.editor?.enable(this.userCanEdit && !this.readOnly && !this.disabled && !this.formDisabled);
    }
    get isEmpty() {
        return !this.editor || this.editor.getText().trim().length === 0;
    }
    syncFormValue() {
        if (!this.editor) {
            return;
        }
        this.internals.setFormValue(this.isEmpty ? '' : normalizeListMarkup(this.editor.root.innerHTML));
        this.updateValidity();
    }
    updateValidity() {
        if (!this.editor) {
            return;
        }
        if (this.required && !this.disabled && this.isEmpty) {
            this.internals.setValidity({ valueMissing: true }, 'Please fill out this field.', this.editor.root);
        }
        else {
            this.internals.setValidity({});
        }
    }
    updateHistoryButtons() {
        if (!this.editor) {
            return;
        }
        const root = this.el.shadowRoot;
        const undoButton = root.querySelector('.ql-undo');
        const redoButton = root.querySelector('.ql-redo');
        // History pushes are debounced by the module's `delay`, so this can lag one burst.
        if (undoButton)
            undoButton.disabled = this.editor.history.stack.undo.length === 0;
        if (redoButton)
            redoButton.disabled = this.editor.history.stack.redo.length === 0;
    }
    get computedToolbar() {
        return this.toolbarConfig ? buildToolbar(this.toolbarConfig) : [[{ undo: 'ql-undo' }, { redo: 'ql-redo' }], ['bold', 'italic', 'underline', 'strike'], ['link'], ['clean']];
    }
    get labelId() {
        return `${this.componentId}-label`;
    }
    get hintId() {
        return `${this.componentId}-hint`;
    }
    render() {
        const hasLabel = !!this.label || this.hasLabelSlot;
        const hasHint = !!this.hint || this.hasHintSlot;
        return (h(Host, { key: 'c433ba28f96d5462b2f5c9b634f32757c1002a83' }, h("div", { key: '3a79b2d4a70bc2ca84ec9b930e4a2a60b8bc0c07', class: "field" }, hasLabel && (h("label", { key: 'e916934e539232e2fb8d2beac4b6280e93e1d34b', id: this.labelId, class: "label has-label ", part: "form-control-label label", onClick: () => this.editor?.focus() }, h("slot", { key: 'b6fab49045ce0a46f1008944be71321f0959afda', name: "label" }, this.label))), h("div", { key: '7be7c9cd47c0a7557a61b0c8c5f755deab55feaa', class: { 'editor-wrapper': true, 'error': this.error }, part: "base" }, h("div", { key: 'cc7b88e47c10acc8393cd83995663f05f6fa2a30', ref: el => (this.editorContainer = el), class: "editor-container" })), hasHint && (h("div", { key: '5f8dfa4567bf2f989eecf18c13cbd31ba0e46616', id: this.hintId, class: "field__hint has-hint", part: "hint" }, h("slot", { key: '57a8d1a216d5794fbbb6dd59c191feb5276a33a2', name: "hint" }, this.hint))))));
    }
    static get is() { return "ir-text-editor"; }
    static get encapsulation() { return "shadow"; }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-text-editor.css", "quill.snow.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-text-editor.css", "quill.snow.css"]
        };
    }
    static get properties() {
        return {
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['size']",
                    "resolved": "\"l\" | \"large\" | \"m\" | \"medium\" | \"s\" | \"small\" | \"xl\" | \"xs\"",
                    "references": {
                        "NativeWaInput": {
                            "location": "import",
                            "path": "../ir-input/ir-input",
                            "id": "src/components/ui/ir-input/ir-input.tsx::NativeWaInput",
                            "referenceLocation": "NativeWaInput"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "size",
                "defaultValue": "'s'"
            },
            "appearance": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['appearance']",
                    "resolved": "\"filled\" | \"filled-outlined\" | \"outlined\"",
                    "references": {
                        "NativeWaInput": {
                            "location": "import",
                            "path": "../ir-input/ir-input",
                            "id": "src/components/ui/ir-input/ir-input.tsx::NativeWaInput",
                            "referenceLocation": "NativeWaInput"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "appearance",
                "defaultValue": "'outlined'"
            },
            "pill": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "pill",
                "defaultValue": "false"
            },
            "error": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "error"
            },
            "maxLength": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "max-length"
            },
            "value": {
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
                    "text": "Initial HTML content"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value",
                "defaultValue": "''"
            },
            "readOnly": {
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
                    "text": "If true, makes the editor read-only"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "read-only",
                "defaultValue": "false"
            },
            "userCanEdit": {
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
                    "text": "Determines if the current user can edit the content"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "user-can-edit",
                "defaultValue": "true"
            },
            "placeholder": {
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
                    "text": "Placeholder text"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "placeholder"
            },
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
                    "text": "The editor's label. If you need to display HTML, use the `label` slot instead."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label"
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
                    "text": "The editor's hint. If you need to display HTML, use the `hint` slot instead."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hint"
            },
            "name": {
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
                    "text": "The name of the editor, submitted as a name/value pair with form data."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "name"
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
                    "text": "Makes the editor a required field for form submission."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "required",
                "defaultValue": "false"
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
                    "text": "Disables the editor."
                },
                "getter": false,
                "setter": false,
                "reflect": true,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "toolbarConfig": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "ToolbarConfig",
                    "resolved": "ToolbarConfig",
                    "references": {
                        "ToolbarConfig": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-text-editor/ir-text-editor.tsx",
                            "id": "src/components/ui/ir-text-editor/ir-text-editor.tsx::ToolbarConfig"
                        }
                    }
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Type-safe toolbar configuration covering every Quill toolbar control.\nFor example, you can pass:\n\n{\n  bold: true,\n  italic: true,\n  underline: true,\n  strike: false,\n  header: true, // or e.g. [1, 2, false]\n  list: true, // or e.g. ['ordered', 'bullet']\n  link: true,\n  clean: true\n}"
                },
                "getter": false,
                "setter": false
            }
        };
    }
    static get events() {
        return [{
                "method": "textChange",
                "name": "textChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emits current HTML content whenever it changes"
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "setFocus": {
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
                    "text": "Moves focus into the editing area.",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "value",
                "methodName": "handleValueChange"
            }, {
                "propName": "readOnly",
                "methodName": "handleEnabledChange"
            }, {
                "propName": "userCanEdit",
                "methodName": "handleEnabledChange"
            }, {
                "propName": "disabled",
                "methodName": "handleEnabledChange"
            }, {
                "propName": "required",
                "methodName": "handleRequiredChange"
            }, {
                "propName": "error",
                "methodName": "handleErrorChange"
            }];
    }
    static get attachInternalsMemberName() { return "internals"; }
}
