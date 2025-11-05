import { r as registerInstance, h, H as Host, g as getElement, c as createEvent } from './index-60982d00.js';

const irPopoverCss = ":host{display:block;width:100%}*{box-sizing:border-box}.popover-trigger{all:unset;cursor:pointer}.popover-trigger:hover,.popover-trigger:focus{color:#000}";
const IrPopoverStyle0 = irPopoverCss;

const IrPopover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /**
         * Horizontal offset (left) of the popover from its trigger.
         * Used in inline style as `--ir-popover-left`.
         */
        this.irPopoverLeft = '10px';
        /**
         * Position of the popover relative to the trigger.
         * Options: `'top'`, `'bottom'`, `'left'`, `'right'`, `'auto'`.
         */
        this.placement = 'auto';
        /**
         * Event that triggers the popover.
         * Options: `'focus'`, `'click'`, `'hover'`.
         */
        this.trigger = 'focus';
        /**
         * Whether to treat `content` as raw HTML.
         * When true, `content` will be injected with `html: true` in jQuery popover.
         */
        this.renderContentAsHtml = false;
        /**
         * Internal flag to ensure popover is only initialized once.
         */
        this.initialized = false;
    }
    componentDidLoad() {
        if (this.initialized) {
            return;
        }
        this.initializePopover();
    }
    /**
     * Initializes the jQuery popover on the trigger element using configured props.
     */
    initializePopover() {
        $(this.popoverTrigger).popover({
            trigger: this.trigger,
            content: this.content,
            placement: this.placement,
            html: this.renderContentAsHtml,
        });
        this.initialized = true;
    }
    disconnectedCallback() {
        $(this.popoverTrigger).popover('dispose');
    }
    render() {
        return (h(Host, { key: '3a2de6d4e93bf4784ac005007a6a7cfc07c61c4d', style: { '--ir-popover-left': this.irPopoverLeft } }, this.trigger !== 'focus' ? (h("p", { ref: el => (this.popoverTrigger = el), class: "popover-title m-0 p-0", style: {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                cursor: 'pointer',
            } }, h("slot", null))) : (h("button", { tabindex: "0", class: "popover-trigger", ref: el => (this.popoverTrigger = el) }, h("slot", null)))));
    }
    get el() { return getElement(this); }
};
IrPopover.style = IrPopoverStyle0;

const irTextareaCss = ".prepend-textarea.sc-ir-textarea{padding:0 !important}.ta-prepend-text.sc-ir-textarea{width:100%}";
const IrTextareaStyle0 = irTextareaCss;

const IrTextArea = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.textChange = createEvent(this, "textChange", 7);
        /**
         * Number of visible text lines.
         */
        this.rows = 3;
        /**
         * Number of visible character columns.
         */
        this.cols = 5;
        /**
         * Unused property, intended to store textarea text.
         */
        this.text = '';
        /**
         * Text label displayed above or beside the textarea.
         */
        this.label = '<label>';
        /**
         * Placeholder text shown when input is empty.
         */
        this.placeholder = '<placeholder>';
        /**
         * Current value of the textarea (supports two-way binding).
         */
        this.value = '';
        /**
         * Maximum number of characters allowed.
         */
        this.maxLength = 250;
        /**
         * Layout style of the textarea:
         * `'default'` shows label above, `'prepend'` shows label on the left.
         */
        this.variant = 'default';
        /**
         * Width of the label in grid columns (for `variant="prepend"`).
         */
        this.labelWidth = 3;
        /**
         * Indicates if the field is in an error state.
         */
        this.error = false;
    }
    handleAriaInvalidChange(newValue) {
        this.error = newValue === 'true';
    }
    render() {
        if (this.variant === 'prepend') {
            return (h("fieldset", { class: "input-group" }, h("div", { class: `input-group-prepend col-${this.labelWidth} prepend-textarea` }, h("span", { class: "input-group-text ta-prepend-text" }, this.label)), h("textarea", { "data-testid": this.testId, value: this.value, class: `form-control`, style: Object.assign({ height: '7rem' }, this.styles), maxLength: this.maxLength, onChange: e => this.textChange.emit(e.target.value), "aria-label": this.label })));
        }
        return (h("div", { class: 'form-group' }, h("label", null, this.label), h("textarea", { "data-testid": this.testId, style: this.styles, maxLength: this.maxLength, rows: this.rows, value: this.value, class: `form-control ${this.textareaClassname} ${this.error ? 'border-danger' : ''}`, placeholder: this.placeholder, onInput: e => this.textChange.emit(e.target.value) })));
    }
    static get watchers() { return {
        "aria-invalid": ["handleAriaInvalidChange"]
    }; }
};
IrTextArea.style = IrTextareaStyle0;

export { IrPopover as ir_popover, IrTextArea as ir_textarea };

//# sourceMappingURL=ir-popover_2.entry.js.map