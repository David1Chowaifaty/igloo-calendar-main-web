'use strict';

var index = require('./index-Bg4VKYKR.js');
var slot = require('./slot-BmDZuSZJ.js');

const irAutocompleteCss = () => `.listbox{display:block;position:relative;font:inherit;box-shadow:var(--wa-shadow-m);background:var(--wa-color-surface-raised);border-color:var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);border-style:var(--wa-border-style);border-width:var(--wa-border-width-s);padding-block:0.5em;padding-inline:0;overflow:auto;overscroll-behavior:none;max-width:var(--auto-size-available-width);max-height:var(--auto-size-available-height);&::slotted(wa-divider){--spacing:0.5em}}::slotted(ir-autocomplete-option){display:block}.selected-tags{display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.expand-icon{flex:0 0 auto;display:flex;align-items:center;cursor:pointer;color:var(--wa-color-neutral-on-quiet);transition:rotate var(--wa-transition-slow, 0.3s) var(--wa-transition-easing, ease);rotate:0deg;margin-inline-start:var(--wa-form-control-padding-inline, 0.25rem)}.expand-icon--open{rotate:-180deg}`;

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrAutocomplete = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "text-change");
        this.comboboxChange = index.createEvent(this, "combobox-change");
    }
    get el() { return index.getElement(this); }
    /**
     * Emits `combobox-change` even when the selected value does not change.
     *
     * @default true
     */
    emitOnSameValue = true;
    /** Whether the autocomplete dropdown is open. */
    open = false;
    /** Placement of the autocomplete dropdown relative to the input. */
    placement = 'bottom';
    /** Name attribute forwarded to the underlying input element. */
    name;
    /** The value of the input. Not reflected to the host attribute — reflection would rewrite the DOM on every keystroke. */
    value = '';
    /**
     * The type of input. Works the same as a native `<input>` element, but only a subset of types are supported. Defaults
     * to `text`.
     */
    type = 'text';
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue;
    /** The input's size. */
    size = 's';
    /** The input's visual appearance. */
    appearance;
    /** Draws a pill-style input with rounded edges. */
    pill;
    returnMaskedValue = false;
    /** The input's label. If you need to display HTML, use the `label` slot instead. */
    label;
    /** The input's hint. If you need to display HTML, use the `hint` slot instead. */
    hint;
    /** Adds a clear button when the input is not empty. */
    withClear;
    /** Placeholder text to show as a hint when the input is empty. */
    placeholder;
    /** Makes the input readonly. */
    readonly;
    /** Adds a button to toggle the password's visibility. Only applies to password types. */
    passwordToggle;
    /** Determines whether or not the password is currently visible. Only applies to password input types. */
    passwordVisible;
    /** Hides the browser's built-in increment/decrement spin buttons for number inputs. */
    withoutSpinButtons;
    /**
     * Enables selection of multiple options.
     * When `true`, users can select more than one option at a time.
     * Defaults to `false`.
     */
    multiple = false;
    /**
     * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
     * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
     * the same document or shadow root for this to work.
     */
    form;
    /** Makes the input a required field. */
    required;
    /** A regular expression pattern to validate input against. */
    pattern;
    /** The minimum length of input that will be considered valid. */
    minlength;
    /** The maximum length of input that will be considered valid. */
    maxlength;
    /** The input's minimum value. Only applies to date and number input types. */
    min;
    /** The input's maximum value. Only applies to date and number input types. */
    max;
    /**
     * Specifies the granularity that the value must adhere to, or the special value `any` which means no stepping is
     * implied, allowing any numeric value. Only applies to date and number input types.
     */
    step;
    /** Controls whether and how text input is automatically capitalized as it is entered by the user. */
    autocapitalize;
    /** Indicates whether the browser's autocorrect feature is on or off. */
    autocorrect;
    /**
     * Specifies what permission the browser has to provide assistance in filling out form field values. Refer to
     * [this page on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete) for available values.
     */
    autocomplete = 'off';
    /** Indicates that the input should receive focus on page load. */
    autofocus;
    /** Used to customize the label or icon of the Enter key on virtual keyboards. */
    enterkeyhint;
    /** Enables spell checking on the input. */
    spellcheck;
    /**
     * Tells the browser what type of data will be entered by the user, allowing it to display the appropriate virtual
     * keyboard on supportive devices.
     */
    inputmode;
    /**
     * Used for SSR. Will determine if the SSRed component will have the label slot rendered on initial paint.
     */
    withLabel;
    /**
     * Used for SSR. Will determine if the SSRed component will have the hint slot rendered on initial paint.
     */
    withHint;
    /** Mask for the input field (optional) */
    mask;
    /** Disables the input. */
    disabled;
    /**
     * When `true`, renders a chevron button on the trailing edge of the input
     * that toggles the dropdown open and closed — matching the visual pattern of
     * `<wa-select>`.
     *
     * Set to `true` when the autocomplete is used as a pure select (fixed option
     * list, no free-text filtering) so users have a clear affordance to open the
     * listbox. Leave at the default `false` for search-as-you-type inputs where
     * the dropdown opens automatically as the user types.
     */
    withExpandIcon = false;
    /**
     * Custom CSS classes applied to the inner `<ir-input>` element.
     *
     * You can also target the exposed parts `::part(input)` and `::part(base)`
     * for deeper styling of the native input and container.
     */
    inputClass;
    /**
     * In `multiple` mode, the maximum number of selected-option tags shown inside the input.
     * Any further selections collapse into a single "+N" overflow tag. Set to `0` to always
     * show every tag.
     */
    maxTagsVisible = 3;
    options = [];
    slotStateVersion = 0;
    selectedOptions = [];
    textChange;
    comboboxChange;
    currentOption;
    // The active typed query; null means no filtering (all options visible).
    filterQuery = null;
    listboxRef;
    inputRef;
    // Native <input> inside ir-input → wa-input; combobox ARIA lives here because
    // string IDREFs (aria-activedescendant/aria-controls) cannot resolve across shadow roots.
    nativeInput;
    // Per-option search metadata, built lazily. Reading textContent walks the option's whole
    // subtree, so it must happen once per option — not on every keystroke.
    optionMeta = new WeakMap();
    optionContentObserver;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hint'];
    slotManager = slot.createSlotManager(null, // Will be set in componentWillLoad
    this.SLOT_NAMES, () => {
        // Trigger re-render when slot state changes
        this.slotStateVersion++;
    });
    componentWillLoad() {
        this.slotManager = slot.createSlotManager(this.el, this.SLOT_NAMES, () => {
            this.slotStateVersion++;
        });
        this.slotManager.initialize();
        this.updateOptionsFromSlot();
        if (!this.multiple) {
            this.syncSelectedFromValue(this.value);
        }
        this.refreshSelectedOptions();
    }
    componentDidLoad() {
        this.slotManager.setupListeners();
        this.listboxRef?.addEventListener('click', this.handleOptionClick);
        this.setupInputAria();
        this.observeOptionContent();
    }
    disconnectedCallback() {
        this.slotManager.destroy();
        this.listboxRef?.removeEventListener('click', this.handleOptionClick);
        this.optionContentObserver?.disconnect();
    }
    /**
     * Slot changes rebuild the option list, but consumers can also rewrite an option's
     * label/value or inner text in place without a slotchange firing. Drop the metadata
     * cache when that happens; it rebuilds lazily on the next access.
     */
    observeOptionContent() {
        this.optionContentObserver = new MutationObserver(() => {
            this.optionMeta = new WeakMap();
        });
        this.optionContentObserver.observe(this.el, {
            subtree: true,
            childList: true,
            characterData: true,
            attributes: true,
            attributeFilter: ['label', 'value'],
        });
    }
    async show() {
        if (this.disabled)
            return;
        this.open = true;
    }
    async focusInput() {
        if (this.disabled)
            return;
        this.inputRef?.focusInput();
    }
    async hide() {
        this.open = false;
        // Reset the filter so the full option list shows the next time the dropdown opens.
        this.clearFilter();
    }
    /**
     * Applies the WAI-ARIA combobox pattern to the native input. String IDREFs like
     * `aria-activedescendant` are dangling across shadow roots, so the active option and
     * listbox are wired through ARIA element reflection where supported — never both
     * mechanisms, since setting the IDL property resets the string attribute per spec.
     */
    async setupInputAria() {
        const input = await this.inputRef?.getNativeInput();
        if (!input || !input.isConnected)
            return;
        this.nativeInput = input;
        input.setAttribute('role', 'combobox');
        input.setAttribute('aria-autocomplete', 'list');
        input.setAttribute('aria-haspopup', 'listbox');
        input.setAttribute('aria-expanded', this.open ? 'true' : 'false');
        if ('ariaControlsElements' in input && this.listboxRef) {
            input.ariaControlsElements = [this.listboxRef];
        }
        this.syncActiveDescendant();
    }
    syncAriaExpanded() {
        this.nativeInput?.setAttribute('aria-expanded', this.open ? 'true' : 'false');
    }
    syncActiveDescendant() {
        const input = this.nativeInput;
        if (!input || !('ariaActiveDescendantElement' in input))
            return;
        input.ariaActiveDescendantElement = this.open && this.currentOption ? this.currentOption : null;
    }
    handleOpenChange(newValue) {
        if (!this.listboxRef)
            return;
        this.listboxRef.hidden = !newValue;
        this.syncAriaExpanded();
        if (!newValue) {
            this.clearCurrentOption();
            return;
        }
        this.ensureCurrentOption();
        if (this.currentOption) {
            requestAnimationFrame(() => {
                if (this.currentOption) {
                    this.scrollIntoView(this.currentOption, this.listboxRef, 'vertical', 'auto');
                }
            });
        }
    }
    getOffset(element, parent) {
        return {
            top: Math.round(element.getBoundingClientRect().top - parent.getBoundingClientRect().top),
            left: Math.round(element.getBoundingClientRect().left - parent.getBoundingClientRect().left),
        };
    }
    scrollIntoView(element, container, direction = 'vertical', behavior = 'smooth') {
        const offset = this.getOffset(element, container);
        const offsetTop = offset.top + container.scrollTop;
        const offsetLeft = offset.left + container.scrollLeft;
        const minX = container.scrollLeft;
        const maxX = container.scrollLeft + container.offsetWidth;
        const minY = container.scrollTop;
        const maxY = container.scrollTop + container.offsetHeight;
        if (direction === 'horizontal' || direction === 'both') {
            if (offsetLeft < minX) {
                container.scrollTo({ left: offsetLeft, behavior });
            }
            else if (offsetLeft + element.clientWidth > maxX) {
                container.scrollTo({ left: offsetLeft - container.offsetWidth + element.clientWidth, behavior });
            }
        }
        if (direction === 'vertical' || direction === 'both') {
            if (offsetTop < minY) {
                container.scrollTo({ top: offsetTop, behavior });
            }
            else if (offsetTop + element.clientHeight > maxY) {
                container.scrollTo({ top: offsetTop - container.offsetHeight + element.clientHeight, behavior });
            }
        }
    }
    handleValueChange(newValue) {
        if (this.multiple)
            return;
        this.syncSelectedFromValue(newValue);
    }
    refreshSelectedOptions() {
        this.selectedOptions = this.getAllOptions().filter(option => option.selected);
    }
    emitChange() {
        if (this.multiple) {
            this.comboboxChange.emit(this.selectedOptions.map(option => this.getOptionValue(option)));
        }
    }
    getAllOptions() {
        return this.options;
    }
    getVisibleOptions() {
        return this.options.filter(option => !option.hidden);
    }
    getOptionMeta(option) {
        let meta = this.optionMeta.get(option);
        if (!meta) {
            const label = option.label || (option.textContent?.trim() ?? '');
            const value = option.value ?? label;
            meta = { label, value, haystack: `${label} ${value} ${option.textContent ?? ''}`.toLowerCase() };
            this.optionMeta.set(option, meta);
        }
        return meta;
    }
    applyFilter() {
        // Normalize once per pass, not once per option.
        const query = this.filterQuery?.trim().toLowerCase() || null;
        this.getAllOptions().forEach(option => {
            const shouldHide = query !== null && !this.getOptionMeta(option).haystack.includes(query);
            if (option.hidden !== shouldHide) {
                option.hidden = shouldHide;
            }
        });
        if (this.currentOption?.hidden) {
            this.clearCurrentOption();
        }
        if (this.open) {
            this.ensureCurrentOption();
        }
    }
    clearFilter() {
        if (this.filterQuery === null)
            return;
        this.filterQuery = null;
        this.getAllOptions().forEach(option => {
            if (option.hidden) {
                option.hidden = false;
            }
        });
    }
    updateOptionsFromSlot(slotEl) {
        const slot = slotEl ?? this.listboxRef?.querySelector('slot');
        if (!slot) {
            this.options = Array.from(this.el.querySelectorAll('ir-autocomplete-option'));
            return;
        }
        const assigned = slot.assignedElements({ flatten: true });
        this.options = assigned.filter(el => el.tagName.toLowerCase() === 'ir-autocomplete-option');
        // Options are never tab stops (combobox pattern); set once at registration
        // instead of re-writing tabIndex on every keystroke or arrow key.
        this.options.forEach(option => (option.tabIndex = -1));
    }
    /**
     * Reassigns the currentOption pointer, clearing the highlight flag on the element it
     * previously pointed at. Keeps highlight updates O(1) instead of sweeping all options.
     */
    setCurrentPointer(option) {
        if (this.currentOption && this.currentOption !== option) {
            this.currentOption.current = false;
        }
        this.currentOption = option;
    }
    clearCurrentOption() {
        this.setCurrentPointer(undefined);
        this.syncActiveDescendant();
    }
    ensureCurrentOption() {
        const allOptions = this.getVisibleOptions().filter(option => !option.disabled);
        if (!allOptions.length) {
            this.clearCurrentOption();
            return;
        }
        const selected = allOptions.find(option => option.selected);
        const nextOption = selected ?? this.currentOption ?? allOptions[0];
        if (nextOption) {
            this.setCurrentOption(nextOption, { scroll: false });
        }
    }
    setCurrentOption(option, options = {}) {
        if (!option || option.disabled)
            return;
        // DOM focus stays on the input (combobox pattern); the highlight moves by clearing
        // the previous option and flagging the new one — two writes, regardless of list size.
        this.setCurrentPointer(option);
        option.current = true;
        this.syncActiveDescendant();
        if (options.scroll && this.listboxRef) {
            this.scrollIntoView(option, this.listboxRef, 'vertical', 'auto');
        }
    }
    getOptionLabel(option) {
        return this.getOptionMeta(option).label;
    }
    getOptionValue(option) {
        return this.getOptionMeta(option).value;
    }
    syncSelectedFromValue(value) {
        let selectedOption;
        this.getAllOptions().forEach(option => {
            const meta = this.getOptionMeta(option);
            const matches = meta.value === value || meta.label === value;
            if (option.selected !== matches) {
                option.selected = matches;
            }
            if (matches) {
                selectedOption = option;
            }
        });
        if (selectedOption) {
            this.setCurrentPointer(selectedOption);
        }
        else if (this.currentOption) {
            const meta = this.getOptionMeta(this.currentOption);
            if (meta.value !== value && meta.label !== value) {
                this.setCurrentPointer(undefined);
            }
        }
    }
    selectOption(option) {
        if (!option || option.disabled)
            return;
        if (this.multiple) {
            // Toggle selection without affecting the other options and keep the popup open.
            option.selected = !option.selected;
            this.setCurrentPointer(option);
            this.refreshSelectedOptions();
            // Clear the typed search text so the user can immediately filter for the next option.
            if (this.value !== '') {
                this.value = '';
                this.textChange.emit('');
            }
            this.clearFilter();
            this.emitChange();
            requestAnimationFrame(() => this.inputRef?.focusInput());
            return;
        }
        this.getAllOptions().forEach(el => {
            if (el.selected && el !== option) {
                el.selected = false;
            }
        });
        option.selected = true;
        this.setCurrentPointer(option);
        const emitValue = this.getOptionValue(option);
        const displayValue = this.getOptionLabel(option);
        if (this.emitOnSameValue || (!this.emitOnSameValue && emitValue !== this.value)) {
            this.value = displayValue;
            this.comboboxChange.emit(emitValue);
        }
        this.hide();
        requestAnimationFrame(() => this.inputRef?.focusInput());
    }
    removeOption = (option) => {
        if (!option)
            return;
        option.selected = false;
        this.refreshSelectedOptions();
        this.emitChange();
        requestAnimationFrame(() => this.inputRef?.focusInput());
    };
    handleOptionClick = (event) => {
        const target = event.target;
        const option = target?.closest('ir-autocomplete-option');
        if (!option)
            return;
        event.preventDefault();
        event.stopPropagation();
        this.selectOption(option);
    };
    handleTextChange = (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        const nextValue = event.detail ?? '';
        if (nextValue === this.value) {
            if (!this.open && this.getAllOptions().length) {
                this.show();
            }
            return;
        }
        this.value = nextValue;
        this.textChange.emit(nextValue);
        this.filterQuery = nextValue;
        this.applyFilter();
        if (!this.open && this.getAllOptions().length) {
            this.show();
        }
    };
    handleOptionsSlotChange = (event) => {
        this.updateOptionsFromSlot(event.target);
        if (!this.multiple) {
            this.syncSelectedFromValue(this.value);
        }
        this.refreshSelectedOptions();
        // applyFilter re-runs ensureCurrentOption itself when the dropdown is open.
        this.applyFilter();
    };
    handleKeydownChange = (event) => {
        if (event.key === 'Escape' && this.open) {
            event.preventDefault();
            event.stopPropagation();
            this.hide();
            return;
        }
        if (event.key === 'Enter') {
            if (this.open && this.currentOption) {
                event.preventDefault();
                event.stopPropagation();
                this.selectOption(this.currentOption);
            }
            return;
        }
        if (['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
            const allOptions = this.getVisibleOptions().filter(option => !option.disabled);
            if (!allOptions.length)
                return;
            const baseOption = this.currentOption && allOptions.includes(this.currentOption) ? this.currentOption : allOptions[0];
            const currentIndex = allOptions.indexOf(baseOption);
            let newIndex = Math.max(0, currentIndex);
            // Prevent scrolling
            event.preventDefault();
            // Open it
            if (!this.open) {
                this.show();
                // If an option is already selected, stop here because we want that one to remain highlighted when the listbox
                // opens for the first time
                if (this.currentOption || allOptions.some(option => option.selected)) {
                    return;
                }
            }
            if (event.key === 'ArrowDown') {
                newIndex = currentIndex + 1;
                if (newIndex > allOptions.length - 1)
                    newIndex = 0;
            }
            else if (event.key === 'ArrowUp') {
                newIndex = currentIndex - 1;
                if (newIndex < 0)
                    newIndex = allOptions.length - 1;
            }
            else if (event.key === 'Home') {
                newIndex = 0;
            }
            else if (event.key === 'End') {
                newIndex = allOptions.length - 1;
            }
            this.setCurrentOption(allOptions[newIndex], { scroll: true });
        }
    };
    handleClick = () => {
        if (!this.open)
            this.show();
    };
    renderSelectedTags() {
        const limit = this.maxTagsVisible > 0 ? this.maxTagsVisible : this.selectedOptions.length;
        const visibleTags = this.selectedOptions.slice(0, limit);
        const overflow = this.selectedOptions.slice(limit);
        return (index.h("div", { slot: "start", class: "selected-tags", part: "tags" }, visibleTags.map(option => (index.h("wa-tag", { key: this.getOptionValue(option), size: "s", "with-remove": true, "onwa-remove": (e) => {
                e.stopPropagation();
                this.removeOption(option);
            } }, this.getOptionLabel(option)))), overflow.length > 0 && (index.h("wa-tag", { key: "overflow", size: "s", class: "selected-tags__overflow", title: overflow.map(option => this.getOptionLabel(option)).join(', ') }, "+", overflow.length))));
    }
    handleExpandIconClick = (e) => {
        e.stopPropagation();
        this.open ? this.hide() : this.show();
    };
    render() {
        return (index.h(index.Host, { key: 'd4225a3757ee03f11640b54ed5a2aad8ee095f9e' }, index.h("wa-popup", { key: '1bfde60f3c90bd926a8331478bb7511669f4bc10', active: this.open, flip: true, shift: true, sync: "width", "auto-size": "vertical", "auto-size-padding": 10, placement: this.placement, exportparts: "popup, arrow, hover-bridge" }, index.h("ir-input", { key: '886ab744f12033b55a5fcd8892e513824ee29db3', slot: "anchor", ref: el => (this.inputRef = el), onKeyDown: this.handleKeydownChange, "onText-change": this.handleTextChange, onClick: this.handleClick, name: this.name, value: this.value, type: this.type, defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, inputClass: this.inputClass, autocapitalize: this.autocapitalize,
            // autocorrect={this.autocorrect}
            autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, mask: this.mask, returnMaskedValue: this.returnMaskedValue, disabled: this.disabled, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.multiple && this.selectedOptions.length > 0 && this.renderSelectedTags(), this.withExpandIcon && (index.h("div", { key: '2370331211ab425c09ea1a7688dfc71695ab6197', slot: "end", class: `expand-icon${this.open ? ' expand-icon--open' : ''}`, "aria-hidden": "true", onClick: this.handleExpandIconClick }, index.h("wa-icon", { key: 'bcbad75c967b847a0f2a2147f267a5590080366f', library: "system", variant: "solid", name: "chevron-down" }))), this.slotManager.hasSlot('label') && index.h("slot", { key: 'ce45880665a8f2774748e2a2e22e43ea2ca595e6', name: "label", slot: "label" }), this.slotManager.hasSlot('start') && index.h("slot", { key: '91797eca8a0265dfe2002591afcdb7141a5061f5', name: "start", slot: "start" }), this.slotManager.hasSlot('end') && index.h("slot", { key: '8c162b9310223ab36cea3ff947be5e5fb72e681c', name: "end", slot: "end" }), this.slotManager.hasSlot('clear-icon') && index.h("slot", { key: 'f29e7e02a4dcc35feb1f88bc47fea28dbe5d9dcf', name: "clear-icon", slot: "clear-icon" }), this.slotManager.hasSlot('hint') && index.h("slot", { key: '172ef14a64e8964c7b8e1948b00af7dd9572b96f', name: "hint", slot: "hint" })), index.h("div", { key: '8dc7903b8617a8186b8f438b8f12b70192b1a58e', id: "listbox", ref: el => (this.listboxRef = el), role: "listbox", "aria-multiselectable": this.multiple ? 'true' : 'false', "aria-label": this.label || this.placeholder, part: "listbox", class: "listbox", tabindex: "-1", hidden: !this.open, onKeyDown: this.handleKeydownChange }, index.h("slot", { key: '4ade686fab4306ce42a6f18e00fc11ec658848a6', onSlotchange: this.handleOptionsSlotChange })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }],
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};
__decorate([
    slot.ClickOutside()
], IrAutocomplete.prototype, "hide", null);
IrAutocomplete.style = irAutocompleteCss();

const irAutocompleteOptionCss = () => `:host{display:block}:host([hidden]){display:none !important}`;

const IrAutocompleteOption = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    value;
    label;
    disabled = false;
    current = false;
    selected = false;
    waOptionRef;
    connectedCallback() {
        // wa-option re-asserts role="option" in its own connectedCallback, so the
        // demotion must run again every time this element is reconnected.
        this.demoteInnerOptionRole();
    }
    componentDidRender() {
        // wa-option re-asserts aria-selected in its updated() hook after prop changes.
        this.demoteInnerOptionRole();
    }
    /**
     * The host carries role="option" (referenced by the combobox via aria-activedescendant);
     * the inner wa-option must not expose a second, nested option to assistive tech.
     */
    async demoteInnerOptionRole() {
        const waOption = this.waOptionRef;
        if (!waOption)
            return;
        await waOption.updateComplete;
        if (!waOption.isConnected)
            return;
        waOption.setAttribute('role', 'presentation');
        waOption.removeAttribute('aria-selected');
    }
    render() {
        return (index.h(index.Host, { key: '801a5f9dab06a66da567ff0aee6872f174d66e95', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, index.h("wa-option", { key: '235694fdee9cfb918830cd145cccea22a36d287b', ref: el => (this.waOptionRef = el), value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, index.h("slot", { key: 'b101818eb6fac861c29d3387bef6666803b6a0d4' }), index.h("slot", { key: 'baa0f9baca7145c772a7c399de0a760f97578508', name: "start", slot: "start" }), index.h("slot", { key: 'e0a7a2c2db537db9a8bf815141ee007659101de7', name: "end", slot: "end" }))));
    }
};
IrAutocompleteOption.style = irAutocompleteOptionCss();

exports.ir_autocomplete = IrAutocomplete;
exports.ir_autocomplete_option = IrAutocompleteOption;
