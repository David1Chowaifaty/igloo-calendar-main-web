'use strict';

var index = require('./index-CQkpA5n3.js');
var ClickOutside = require('./ClickOutside-DBkmnwS_.js');
var slot = require('./slot-BU-FjeKp.js');
var t = require('./t-CyRK1btk.js');
var masks = require('./masks-Dz2Vo1VN.js');
var index$1 = require('./index-BquCITYD.js');
var axios = require('./axios-EresIryl.js');
var irInterceptor_store = require('./ir-interceptor.store-moMB-JCs.js');
var number = require('./number-D7i5wAQq.js');
var ApiClient = require('./ApiClient-u7fuhiXA.js');
var system_service = require('./system.service-q3G6_5Tb.js');
var locales_store = require('./locales.store-BMTss6fG.js');
var locale_controller = require('./locale.controller-C5iGrwyB.js');
var types = require('./types-BVJQZ50e.js');
var utils = require('./utils-C40PtLl1.js');
var useTable = require('./useTable-BN32DOaV.js');
var direction = require('./direction-Cb_BHcnU.js');
var utils$1 = require('./utils-oNe0zJBw.js');
var index$2 = require('./index-Jy9KaFJU.js');
var moment = require('./moment-CdViwxPQ.js');
var index$3 = require('./index-Dssn3hdS.js');
require('./_commonjsHelpers-BJu3ubxk.js');
require('./ir-date-BZLsqCOc.js');
require('./language-observer-DKp37LIu.js');
require('./calendar-data-UPPAEVR_.js');
require('./booking.dto-CUSvGTvD.js');
require('./type-Bj2x9EWc.js');
require('./utils-DfkM3gGN.js');
require('./IBooking-hDE_y33g.js');

const irAutocompleteCss = () => `.listbox{display:block;position:relative;font:inherit;box-shadow:var(--wa-shadow-m);background:var(--wa-color-surface-raised);border-color:var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);border-style:var(--wa-border-style);border-width:var(--wa-border-width-s);padding-block:0.5em;padding-inline:0;overflow:auto;overscroll-behavior:none;max-width:var(--auto-size-available-width);max-height:var(--auto-size-available-height);&::slotted(wa-divider){--spacing:0.5em}}::slotted(ir-autocomplete-option){display:block}.selected-tags{display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center}.expand-icon{flex:0 0 auto;display:flex;align-items:center;cursor:pointer;color:var(--wa-color-neutral-on-quiet);transition:rotate var(--wa-transition-slow, 0.3s) var(--wa-transition-easing, ease);rotate:0deg;margin-inline-start:var(--wa-form-control-padding-inline, 0.25rem)}.expand-icon--open{rotate:-180deg}`;

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        return (index.h(index.Host, { key: '94384d66f60e3e7df8cac0b7adb1347d21af7ab8' }, index.h("wa-popup", { key: '460359e02a5ee36c2754cd3cc80a7bf965ea7f69', active: this.open, flip: true, shift: true, sync: "width", "auto-size": "vertical", "auto-size-padding": 10, placement: this.placement, exportparts: "popup, arrow, hover-bridge" }, index.h("ir-input", { key: '75ef18debbaa4af891397a6919c99663165ef0e6', slot: "anchor", ref: el => (this.inputRef = el), onKeyDown: this.handleKeydownChange, "onText-change": this.handleTextChange, onClick: this.handleClick, name: this.name, value: this.value, type: this.type, defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, inputClass: this.inputClass, autocapitalize: this.autocapitalize,
            // autocorrect={this.autocorrect}
            autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, mask: this.mask, returnMaskedValue: this.returnMaskedValue, disabled: this.disabled, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.multiple && this.selectedOptions.length > 0 && this.renderSelectedTags(), this.withExpandIcon && (index.h("div", { key: 'ef6c8060be1059e2c4abef9890e6282328af95ed', slot: "end", class: `expand-icon${this.open ? ' expand-icon--open' : ''}`, "aria-hidden": "true", onClick: this.handleExpandIconClick }, index.h("wa-icon", { key: '4030707e3f6f48dbdf6f9480acb78b19386d115e', library: "system", variant: "solid", name: "chevron-down" }))), this.slotManager.hasSlot('label') && index.h("slot", { key: '77028fef7a470357c62ae838577f6d261e5635c7', name: "label", slot: "label" }), this.slotManager.hasSlot('start') && index.h("slot", { key: '820733b97b7991213bb4a2c54791cce960b7f897', name: "start", slot: "start" }), this.slotManager.hasSlot('end') && index.h("slot", { key: 'e83468c90e9f39f3781aa0051c47465b49ee54c2', name: "end", slot: "end" }), this.slotManager.hasSlot('clear-icon') && index.h("slot", { key: '59c3999ee173152e19b35c3602a0b72d24e275f1', name: "clear-icon", slot: "clear-icon" }), this.slotManager.hasSlot('hint') && index.h("slot", { key: 'c398d9026c2c3ce0fd9a85df7edbe3cae1baae80', name: "hint", slot: "hint" })), index.h("div", { key: 'f45507fef2eda072b5e803913c108e0f670e8a75', id: "listbox", ref: el => (this.listboxRef = el), role: "listbox", "aria-multiselectable": this.multiple ? 'true' : 'false', "aria-label": this.label || this.placeholder, part: "listbox", class: "listbox", tabindex: "-1", hidden: !this.open, onKeyDown: this.handleKeydownChange }, index.h("slot", { key: 'f7e62fbb9758798f0d6d97676f0f2398b2738e47', onSlotchange: this.handleOptionsSlotChange })))));
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
__decorate$2([
    ClickOutside.ClickOutside()
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
        return (index.h(index.Host, { key: 'a44e663cb465ff9cb4d3ef9cee2d42e11faffab1', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, index.h("wa-option", { key: 'dd68a90afb763403bc201cc5dc9860b8ebe7a254', ref: el => (this.waOptionRef = el), value: this.value, label: this.label, disabled: this.disabled, current: this.current, selected: this.selected, exportparts: "checked-icon, label, start, end" }, index.h("slot", { key: 'f5707bdd58c23d13b43a7cb788f2dec35ea1fede' }), index.h("slot", { key: '1cd0bcb9281b20865226676f71e5ad1f018e603b', name: "start", slot: "start" }), index.h("slot", { key: 'e6f4ea0a0e00de6a2442965112aaadbbca605878', name: "end", slot: "end" }))));
    }
};
IrAutocompleteOption.style = irAutocompleteOptionCss();

const onlineResources = [
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/jquery.min.js",
    // },
    {
        isCSS: true,
        link: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap-extended.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/app-assets/css/colors.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/menu/menu-types/horizontal-menu.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/colors/palette-gradient.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/components.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/assets/css/style.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/icheck.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/custom.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/pages/login-register.css',
    },
    // {
    //   isCSS: true,
    //   link: 'https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.css',
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/moment.min.js",
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.js",
    // },
];

const appCss = () => `@layer wa-native,wa-base,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides; @layer wa-base{wa-page :is(*,*:after,*:before){scroll-margin-top:var(--scroll-margin-top)}wa-page[view='desktop'] [data-toggle-nav]{display:none}wa-page[view='mobile'] .wa-desktop-only,wa-page[view='desktop'] .wa-mobile-only{display:none !important}}@layer wa-native,wa-base,wa-utilities,wa-color-palette,wa-color-variant,wa-theme,wa-theme-dimension,wa-theme-overrides; @layer wa-base{wa-page :is(*,*:after,*:before){scroll-margin-top:var(--scroll-margin-top)}wa-page[view='desktop'] [data-toggle-nav]{display:none}wa-page[view='mobile'] .wa-desktop-only,wa-page[view='desktop'] .wa-mobile-only{display:none !important}}@layer wa-color-variant{:where(:root),.wa-brand-blue{--wa-color-brand-95:var(--wa-color-blue-95);--wa-color-brand-90:var(--wa-color-blue-90);--wa-color-brand-80:var(--wa-color-blue-80);--wa-color-brand-70:var(--wa-color-blue-70);--wa-color-brand-60:var(--wa-color-blue-60);--wa-color-brand-50:var(--wa-color-blue-50);--wa-color-brand-40:var(--wa-color-blue-40);--wa-color-brand-30:var(--wa-color-blue-30);--wa-color-brand-20:var(--wa-color-blue-20);--wa-color-brand-10:var(--wa-color-blue-10);--wa-color-brand-05:var(--wa-color-blue-05);--wa-color-brand:var(--wa-color-blue);--wa-color-brand-on:var(--wa-color-blue-on)}.wa-brand-red{--wa-color-brand-95:var(--wa-color-red-95);--wa-color-brand-90:var(--wa-color-red-90);--wa-color-brand-80:var(--wa-color-red-80);--wa-color-brand-70:var(--wa-color-red-70);--wa-color-brand-60:var(--wa-color-red-60);--wa-color-brand-50:var(--wa-color-red-50);--wa-color-brand-40:var(--wa-color-red-40);--wa-color-brand-30:var(--wa-color-red-30);--wa-color-brand-20:var(--wa-color-red-20);--wa-color-brand-10:var(--wa-color-red-10);--wa-color-brand-05:var(--wa-color-red-05);--wa-color-brand:var(--wa-color-red);--wa-color-brand-on:var(--wa-color-red-on)}.wa-brand-orange{--wa-color-brand-95:var(--wa-color-orange-95);--wa-color-brand-90:var(--wa-color-orange-90);--wa-color-brand-80:var(--wa-color-orange-80);--wa-color-brand-70:var(--wa-color-orange-70);--wa-color-brand-60:var(--wa-color-orange-60);--wa-color-brand-50:var(--wa-color-orange-50);--wa-color-brand-40:var(--wa-color-orange-40);--wa-color-brand-30:var(--wa-color-orange-30);--wa-color-brand-20:var(--wa-color-orange-20);--wa-color-brand-10:var(--wa-color-orange-10);--wa-color-brand-05:var(--wa-color-orange-05);--wa-color-brand:var(--wa-color-orange);--wa-color-brand-on:var(--wa-color-orange-on)}.wa-brand-yellow{--wa-color-brand-95:var(--wa-color-yellow-95);--wa-color-brand-90:var(--wa-color-yellow-90);--wa-color-brand-80:var(--wa-color-yellow-80);--wa-color-brand-70:var(--wa-color-yellow-70);--wa-color-brand-60:var(--wa-color-yellow-60);--wa-color-brand-50:var(--wa-color-yellow-50);--wa-color-brand-40:var(--wa-color-yellow-40);--wa-color-brand-30:var(--wa-color-yellow-30);--wa-color-brand-20:var(--wa-color-yellow-20);--wa-color-brand-10:var(--wa-color-yellow-10);--wa-color-brand-05:var(--wa-color-yellow-05);--wa-color-brand:var(--wa-color-yellow);--wa-color-brand-on:var(--wa-color-yellow-on)}.wa-brand-green{--wa-color-brand-95:var(--wa-color-green-95);--wa-color-brand-90:var(--wa-color-green-90);--wa-color-brand-80:var(--wa-color-green-80);--wa-color-brand-70:var(--wa-color-green-70);--wa-color-brand-60:var(--wa-color-green-60);--wa-color-brand-50:var(--wa-color-green-50);--wa-color-brand-40:var(--wa-color-green-40);--wa-color-brand-30:var(--wa-color-green-30);--wa-color-brand-20:var(--wa-color-green-20);--wa-color-brand-10:var(--wa-color-green-10);--wa-color-brand-05:var(--wa-color-green-05);--wa-color-brand:var(--wa-color-green);--wa-color-brand-on:var(--wa-color-green-on)}.wa-brand-cyan{--wa-color-brand-95:var(--wa-color-cyan-95);--wa-color-brand-90:var(--wa-color-cyan-90);--wa-color-brand-80:var(--wa-color-cyan-80);--wa-color-brand-70:var(--wa-color-cyan-70);--wa-color-brand-60:var(--wa-color-cyan-60);--wa-color-brand-50:var(--wa-color-cyan-50);--wa-color-brand-40:var(--wa-color-cyan-40);--wa-color-brand-30:var(--wa-color-cyan-30);--wa-color-brand-20:var(--wa-color-cyan-20);--wa-color-brand-10:var(--wa-color-cyan-10);--wa-color-brand-05:var(--wa-color-cyan-05);--wa-color-brand:var(--wa-color-cyan);--wa-color-brand-on:var(--wa-color-cyan-on)}.wa-brand-indigo{--wa-color-brand-95:var(--wa-color-indigo-95);--wa-color-brand-90:var(--wa-color-indigo-90);--wa-color-brand-80:var(--wa-color-indigo-80);--wa-color-brand-70:var(--wa-color-indigo-70);--wa-color-brand-60:var(--wa-color-indigo-60);--wa-color-brand-50:var(--wa-color-indigo-50);--wa-color-brand-40:var(--wa-color-indigo-40);--wa-color-brand-30:var(--wa-color-indigo-30);--wa-color-brand-20:var(--wa-color-indigo-20);--wa-color-brand-10:var(--wa-color-indigo-10);--wa-color-brand-05:var(--wa-color-indigo-05);--wa-color-brand:var(--wa-color-indigo);--wa-color-brand-on:var(--wa-color-indigo-on)}.wa-brand-purple{--wa-color-brand-95:var(--wa-color-purple-95);--wa-color-brand-90:var(--wa-color-purple-90);--wa-color-brand-80:var(--wa-color-purple-80);--wa-color-brand-70:var(--wa-color-purple-70);--wa-color-brand-60:var(--wa-color-purple-60);--wa-color-brand-50:var(--wa-color-purple-50);--wa-color-brand-40:var(--wa-color-purple-40);--wa-color-brand-30:var(--wa-color-purple-30);--wa-color-brand-20:var(--wa-color-purple-20);--wa-color-brand-10:var(--wa-color-purple-10);--wa-color-brand-05:var(--wa-color-purple-05);--wa-color-brand:var(--wa-color-purple);--wa-color-brand-on:var(--wa-color-purple-on)}.wa-brand-pink{--wa-color-brand-95:var(--wa-color-pink-95);--wa-color-brand-90:var(--wa-color-pink-90);--wa-color-brand-80:var(--wa-color-pink-80);--wa-color-brand-70:var(--wa-color-pink-70);--wa-color-brand-60:var(--wa-color-pink-60);--wa-color-brand-50:var(--wa-color-pink-50);--wa-color-brand-40:var(--wa-color-pink-40);--wa-color-brand-30:var(--wa-color-pink-30);--wa-color-brand-20:var(--wa-color-pink-20);--wa-color-brand-10:var(--wa-color-pink-10);--wa-color-brand-05:var(--wa-color-pink-05);--wa-color-brand:var(--wa-color-pink);--wa-color-brand-on:var(--wa-color-pink-on)}.wa-brand-gray{--wa-color-brand-95:var(--wa-color-gray-95);--wa-color-brand-90:var(--wa-color-gray-90);--wa-color-brand-80:var(--wa-color-gray-80);--wa-color-brand-70:var(--wa-color-gray-70);--wa-color-brand-60:var(--wa-color-gray-60);--wa-color-brand-50:var(--wa-color-gray-50);--wa-color-brand-40:var(--wa-color-gray-40);--wa-color-brand-30:var(--wa-color-gray-30);--wa-color-brand-20:var(--wa-color-gray-20);--wa-color-brand-10:var(--wa-color-gray-10);--wa-color-brand-05:var(--wa-color-gray-05);--wa-color-brand:var(--wa-color-gray);--wa-color-brand-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-neutral-gray{--wa-color-neutral-95:var(--wa-color-gray-95);--wa-color-neutral-90:var(--wa-color-gray-90);--wa-color-neutral-80:var(--wa-color-gray-80);--wa-color-neutral-70:var(--wa-color-gray-70);--wa-color-neutral-60:var(--wa-color-gray-60);--wa-color-neutral-50:var(--wa-color-gray-50);--wa-color-neutral-40:var(--wa-color-gray-40);--wa-color-neutral-30:var(--wa-color-gray-30);--wa-color-neutral-20:var(--wa-color-gray-20);--wa-color-neutral-10:var(--wa-color-gray-10);--wa-color-neutral-05:var(--wa-color-gray-05);--wa-color-neutral:var(--wa-color-gray);--wa-color-neutral-on:var(--wa-color-gray-on)}.wa-neutral-red{--wa-color-neutral-95:var(--wa-color-red-95);--wa-color-neutral-90:var(--wa-color-red-90);--wa-color-neutral-80:var(--wa-color-red-80);--wa-color-neutral-70:var(--wa-color-red-70);--wa-color-neutral-60:var(--wa-color-red-60);--wa-color-neutral-50:var(--wa-color-red-50);--wa-color-neutral-40:var(--wa-color-red-40);--wa-color-neutral-30:var(--wa-color-red-30);--wa-color-neutral-20:var(--wa-color-red-20);--wa-color-neutral-10:var(--wa-color-red-10);--wa-color-neutral-05:var(--wa-color-red-05);--wa-color-neutral:var(--wa-color-red);--wa-color-neutral-on:var(--wa-color-red-on)}.wa-neutral-orange{--wa-color-neutral-95:var(--wa-color-orange-95);--wa-color-neutral-90:var(--wa-color-orange-90);--wa-color-neutral-80:var(--wa-color-orange-80);--wa-color-neutral-70:var(--wa-color-orange-70);--wa-color-neutral-60:var(--wa-color-orange-60);--wa-color-neutral-50:var(--wa-color-orange-50);--wa-color-neutral-40:var(--wa-color-orange-40);--wa-color-neutral-30:var(--wa-color-orange-30);--wa-color-neutral-20:var(--wa-color-orange-20);--wa-color-neutral-10:var(--wa-color-orange-10);--wa-color-neutral-05:var(--wa-color-orange-05);--wa-color-neutral:var(--wa-color-orange);--wa-color-neutral-on:var(--wa-color-orange-on)}.wa-neutral-yellow{--wa-color-neutral-95:var(--wa-color-yellow-95);--wa-color-neutral-90:var(--wa-color-yellow-90);--wa-color-neutral-80:var(--wa-color-yellow-80);--wa-color-neutral-70:var(--wa-color-yellow-70);--wa-color-neutral-60:var(--wa-color-yellow-60);--wa-color-neutral-50:var(--wa-color-yellow-50);--wa-color-neutral-40:var(--wa-color-yellow-40);--wa-color-neutral-30:var(--wa-color-yellow-30);--wa-color-neutral-20:var(--wa-color-yellow-20);--wa-color-neutral-10:var(--wa-color-yellow-10);--wa-color-neutral-05:var(--wa-color-yellow-05);--wa-color-neutral:var(--wa-color-yellow);--wa-color-neutral-on:var(--wa-color-yellow-on)}.wa-neutral-green{--wa-color-neutral-95:var(--wa-color-green-95);--wa-color-neutral-90:var(--wa-color-green-90);--wa-color-neutral-80:var(--wa-color-green-80);--wa-color-neutral-70:var(--wa-color-green-70);--wa-color-neutral-60:var(--wa-color-green-60);--wa-color-neutral-50:var(--wa-color-green-50);--wa-color-neutral-40:var(--wa-color-green-40);--wa-color-neutral-30:var(--wa-color-green-30);--wa-color-neutral-20:var(--wa-color-green-20);--wa-color-neutral-10:var(--wa-color-green-10);--wa-color-neutral-05:var(--wa-color-green-05);--wa-color-neutral:var(--wa-color-green);--wa-color-neutral-on:var(--wa-color-green-on)}.wa-neutral-cyan{--wa-color-neutral-95:var(--wa-color-cyan-95);--wa-color-neutral-90:var(--wa-color-cyan-90);--wa-color-neutral-80:var(--wa-color-cyan-80);--wa-color-neutral-70:var(--wa-color-cyan-70);--wa-color-neutral-60:var(--wa-color-cyan-60);--wa-color-neutral-50:var(--wa-color-cyan-50);--wa-color-neutral-40:var(--wa-color-cyan-40);--wa-color-neutral-30:var(--wa-color-cyan-30);--wa-color-neutral-20:var(--wa-color-cyan-20);--wa-color-neutral-10:var(--wa-color-cyan-10);--wa-color-neutral-05:var(--wa-color-cyan-05);--wa-color-neutral:var(--wa-color-cyan);--wa-color-neutral-on:var(--wa-color-cyan-on)}.wa-neutral-blue{--wa-color-neutral-95:var(--wa-color-blue-95);--wa-color-neutral-90:var(--wa-color-blue-90);--wa-color-neutral-80:var(--wa-color-blue-80);--wa-color-neutral-70:var(--wa-color-blue-70);--wa-color-neutral-60:var(--wa-color-blue-60);--wa-color-neutral-50:var(--wa-color-blue-50);--wa-color-neutral-40:var(--wa-color-blue-40);--wa-color-neutral-30:var(--wa-color-blue-30);--wa-color-neutral-20:var(--wa-color-blue-20);--wa-color-neutral-10:var(--wa-color-blue-10);--wa-color-neutral-05:var(--wa-color-blue-05);--wa-color-neutral:var(--wa-color-blue);--wa-color-neutral-on:var(--wa-color-blue-on)}.wa-neutral-indigo{--wa-color-neutral-95:var(--wa-color-indigo-95);--wa-color-neutral-90:var(--wa-color-indigo-90);--wa-color-neutral-80:var(--wa-color-indigo-80);--wa-color-neutral-70:var(--wa-color-indigo-70);--wa-color-neutral-60:var(--wa-color-indigo-60);--wa-color-neutral-50:var(--wa-color-indigo-50);--wa-color-neutral-40:var(--wa-color-indigo-40);--wa-color-neutral-30:var(--wa-color-indigo-30);--wa-color-neutral-20:var(--wa-color-indigo-20);--wa-color-neutral-10:var(--wa-color-indigo-10);--wa-color-neutral-05:var(--wa-color-indigo-05);--wa-color-neutral:var(--wa-color-indigo);--wa-color-neutral-on:var(--wa-color-indigo-on)}.wa-neutral-purple{--wa-color-neutral-95:var(--wa-color-purple-95);--wa-color-neutral-90:var(--wa-color-purple-90);--wa-color-neutral-80:var(--wa-color-purple-80);--wa-color-neutral-70:var(--wa-color-purple-70);--wa-color-neutral-60:var(--wa-color-purple-60);--wa-color-neutral-50:var(--wa-color-purple-50);--wa-color-neutral-40:var(--wa-color-purple-40);--wa-color-neutral-30:var(--wa-color-purple-30);--wa-color-neutral-20:var(--wa-color-purple-20);--wa-color-neutral-10:var(--wa-color-purple-10);--wa-color-neutral-05:var(--wa-color-purple-05);--wa-color-neutral:var(--wa-color-purple);--wa-color-neutral-on:var(--wa-color-purple-on)}.wa-neutral-pink{--wa-color-neutral-95:var(--wa-color-pink-95);--wa-color-neutral-90:var(--wa-color-pink-90);--wa-color-neutral-80:var(--wa-color-pink-80);--wa-color-neutral-70:var(--wa-color-pink-70);--wa-color-neutral-60:var(--wa-color-pink-60);--wa-color-neutral-50:var(--wa-color-pink-50);--wa-color-neutral-40:var(--wa-color-pink-40);--wa-color-neutral-30:var(--wa-color-pink-30);--wa-color-neutral-20:var(--wa-color-pink-20);--wa-color-neutral-10:var(--wa-color-pink-10);--wa-color-neutral-05:var(--wa-color-pink-05);--wa-color-neutral:var(--wa-color-pink);--wa-color-neutral-on:var(--wa-color-pink-on)}}@layer wa-color-variant{:where(:root),.wa-success-green{--wa-color-success-95:var(--wa-color-green-95);--wa-color-success-90:var(--wa-color-green-90);--wa-color-success-80:var(--wa-color-green-80);--wa-color-success-70:var(--wa-color-green-70);--wa-color-success-60:var(--wa-color-green-60);--wa-color-success-50:var(--wa-color-green-50);--wa-color-success-40:var(--wa-color-green-40);--wa-color-success-30:var(--wa-color-green-30);--wa-color-success-20:var(--wa-color-green-20);--wa-color-success-10:var(--wa-color-green-10);--wa-color-success-05:var(--wa-color-green-05);--wa-color-success:var(--wa-color-green);--wa-color-success-on:var(--wa-color-green-on)}.wa-success-red{--wa-color-success-95:var(--wa-color-red-95);--wa-color-success-90:var(--wa-color-red-90);--wa-color-success-80:var(--wa-color-red-80);--wa-color-success-70:var(--wa-color-red-70);--wa-color-success-60:var(--wa-color-red-60);--wa-color-success-50:var(--wa-color-red-50);--wa-color-success-40:var(--wa-color-red-40);--wa-color-success-30:var(--wa-color-red-30);--wa-color-success-20:var(--wa-color-red-20);--wa-color-success-10:var(--wa-color-red-10);--wa-color-success-05:var(--wa-color-red-05);--wa-color-success:var(--wa-color-red);--wa-color-success-on:var(--wa-color-red-on)}.wa-success-orange{--wa-color-success-95:var(--wa-color-orange-95);--wa-color-success-90:var(--wa-color-orange-90);--wa-color-success-80:var(--wa-color-orange-80);--wa-color-success-70:var(--wa-color-orange-70);--wa-color-success-60:var(--wa-color-orange-60);--wa-color-success-50:var(--wa-color-orange-50);--wa-color-success-40:var(--wa-color-orange-40);--wa-color-success-30:var(--wa-color-orange-30);--wa-color-success-20:var(--wa-color-orange-20);--wa-color-success-10:var(--wa-color-orange-10);--wa-color-success-05:var(--wa-color-orange-05);--wa-color-success:var(--wa-color-orange);--wa-color-success-on:var(--wa-color-orange-on)}.wa-success-yellow{--wa-color-success-95:var(--wa-color-yellow-95);--wa-color-success-90:var(--wa-color-yellow-90);--wa-color-success-80:var(--wa-color-yellow-80);--wa-color-success-70:var(--wa-color-yellow-70);--wa-color-success-60:var(--wa-color-yellow-60);--wa-color-success-50:var(--wa-color-yellow-50);--wa-color-success-40:var(--wa-color-yellow-40);--wa-color-success-30:var(--wa-color-yellow-30);--wa-color-success-20:var(--wa-color-yellow-20);--wa-color-success-10:var(--wa-color-yellow-10);--wa-color-success-05:var(--wa-color-yellow-05);--wa-color-success:var(--wa-color-yellow);--wa-color-success-on:var(--wa-color-yellow-on)}.wa-success-cyan{--wa-color-success-95:var(--wa-color-cyan-95);--wa-color-success-90:var(--wa-color-cyan-90);--wa-color-success-80:var(--wa-color-cyan-80);--wa-color-success-70:var(--wa-color-cyan-70);--wa-color-success-60:var(--wa-color-cyan-60);--wa-color-success-50:var(--wa-color-cyan-50);--wa-color-success-40:var(--wa-color-cyan-40);--wa-color-success-30:var(--wa-color-cyan-30);--wa-color-success-20:var(--wa-color-cyan-20);--wa-color-success-10:var(--wa-color-cyan-10);--wa-color-success-05:var(--wa-color-cyan-05);--wa-color-success:var(--wa-color-cyan);--wa-color-success-on:var(--wa-color-cyan-on)}.wa-success-blue{--wa-color-success-95:var(--wa-color-blue-95);--wa-color-success-90:var(--wa-color-blue-90);--wa-color-success-80:var(--wa-color-blue-80);--wa-color-success-70:var(--wa-color-blue-70);--wa-color-success-60:var(--wa-color-blue-60);--wa-color-success-50:var(--wa-color-blue-50);--wa-color-success-40:var(--wa-color-blue-40);--wa-color-success-30:var(--wa-color-blue-30);--wa-color-success-20:var(--wa-color-blue-20);--wa-color-success-10:var(--wa-color-blue-10);--wa-color-success-05:var(--wa-color-blue-05);--wa-color-success:var(--wa-color-blue);--wa-color-success-on:var(--wa-color-blue-on)}.wa-success-indigo{--wa-color-success-95:var(--wa-color-indigo-95);--wa-color-success-90:var(--wa-color-indigo-90);--wa-color-success-80:var(--wa-color-indigo-80);--wa-color-success-70:var(--wa-color-indigo-70);--wa-color-success-60:var(--wa-color-indigo-60);--wa-color-success-50:var(--wa-color-indigo-50);--wa-color-success-40:var(--wa-color-indigo-40);--wa-color-success-30:var(--wa-color-indigo-30);--wa-color-success-20:var(--wa-color-indigo-20);--wa-color-success-10:var(--wa-color-indigo-10);--wa-color-success-05:var(--wa-color-indigo-05);--wa-color-success:var(--wa-color-indigo);--wa-color-success-on:var(--wa-color-indigo-on)}.wa-success-purple{--wa-color-success-95:var(--wa-color-purple-95);--wa-color-success-90:var(--wa-color-purple-90);--wa-color-success-80:var(--wa-color-purple-80);--wa-color-success-70:var(--wa-color-purple-70);--wa-color-success-60:var(--wa-color-purple-60);--wa-color-success-50:var(--wa-color-purple-50);--wa-color-success-40:var(--wa-color-purple-40);--wa-color-success-30:var(--wa-color-purple-30);--wa-color-success-20:var(--wa-color-purple-20);--wa-color-success-10:var(--wa-color-purple-10);--wa-color-success-05:var(--wa-color-purple-05);--wa-color-success:var(--wa-color-purple);--wa-color-success-on:var(--wa-color-purple-on)}.wa-success-pink{--wa-color-success-95:var(--wa-color-pink-95);--wa-color-success-90:var(--wa-color-pink-90);--wa-color-success-80:var(--wa-color-pink-80);--wa-color-success-70:var(--wa-color-pink-70);--wa-color-success-60:var(--wa-color-pink-60);--wa-color-success-50:var(--wa-color-pink-50);--wa-color-success-40:var(--wa-color-pink-40);--wa-color-success-30:var(--wa-color-pink-30);--wa-color-success-20:var(--wa-color-pink-20);--wa-color-success-10:var(--wa-color-pink-10);--wa-color-success-05:var(--wa-color-pink-05);--wa-color-success:var(--wa-color-pink);--wa-color-success-on:var(--wa-color-pink-on)}.wa-success-gray{--wa-color-success-95:var(--wa-color-gray-95);--wa-color-success-90:var(--wa-color-gray-90);--wa-color-success-80:var(--wa-color-gray-80);--wa-color-success-70:var(--wa-color-gray-70);--wa-color-success-60:var(--wa-color-gray-60);--wa-color-success-50:var(--wa-color-gray-50);--wa-color-success-40:var(--wa-color-gray-40);--wa-color-success-30:var(--wa-color-gray-30);--wa-color-success-20:var(--wa-color-gray-20);--wa-color-success-10:var(--wa-color-gray-10);--wa-color-success-05:var(--wa-color-gray-05);--wa-color-success:var(--wa-color-gray);--wa-color-success-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-warning-yellow{--wa-color-warning-95:var(--wa-color-yellow-95);--wa-color-warning-90:var(--wa-color-yellow-90);--wa-color-warning-80:var(--wa-color-yellow-80);--wa-color-warning-70:var(--wa-color-yellow-70);--wa-color-warning-60:var(--wa-color-yellow-60);--wa-color-warning-50:var(--wa-color-yellow-50);--wa-color-warning-40:var(--wa-color-yellow-40);--wa-color-warning-30:var(--wa-color-yellow-30);--wa-color-warning-20:var(--wa-color-yellow-20);--wa-color-warning-10:var(--wa-color-yellow-10);--wa-color-warning-05:var(--wa-color-yellow-05);--wa-color-warning:var(--wa-color-yellow);--wa-color-warning-on:var(--wa-color-yellow-on)}.wa-warning-red{--wa-color-warning-95:var(--wa-color-red-95);--wa-color-warning-90:var(--wa-color-red-90);--wa-color-warning-80:var(--wa-color-red-80);--wa-color-warning-70:var(--wa-color-red-70);--wa-color-warning-60:var(--wa-color-red-60);--wa-color-warning-50:var(--wa-color-red-50);--wa-color-warning-40:var(--wa-color-red-40);--wa-color-warning-30:var(--wa-color-red-30);--wa-color-warning-20:var(--wa-color-red-20);--wa-color-warning-10:var(--wa-color-red-10);--wa-color-warning-05:var(--wa-color-red-05);--wa-color-warning:var(--wa-color-red);--wa-color-warning-on:var(--wa-color-red-on)}.wa-warning-orange{--wa-color-warning-95:var(--wa-color-orange-95);--wa-color-warning-90:var(--wa-color-orange-90);--wa-color-warning-80:var(--wa-color-orange-80);--wa-color-warning-70:var(--wa-color-orange-70);--wa-color-warning-60:var(--wa-color-orange-60);--wa-color-warning-50:var(--wa-color-orange-50);--wa-color-warning-40:var(--wa-color-orange-40);--wa-color-warning-30:var(--wa-color-orange-30);--wa-color-warning-20:var(--wa-color-orange-20);--wa-color-warning-10:var(--wa-color-orange-10);--wa-color-warning-05:var(--wa-color-orange-05);--wa-color-warning:var(--wa-color-orange);--wa-color-warning-on:var(--wa-color-orange-on)}.wa-warning-green{--wa-color-warning-95:var(--wa-color-green-95);--wa-color-warning-90:var(--wa-color-green-90);--wa-color-warning-80:var(--wa-color-green-80);--wa-color-warning-70:var(--wa-color-green-70);--wa-color-warning-60:var(--wa-color-green-60);--wa-color-warning-50:var(--wa-color-green-50);--wa-color-warning-40:var(--wa-color-green-40);--wa-color-warning-30:var(--wa-color-green-30);--wa-color-warning-20:var(--wa-color-green-20);--wa-color-warning-10:var(--wa-color-green-10);--wa-color-warning-05:var(--wa-color-green-05);--wa-color-warning:var(--wa-color-green);--wa-color-warning-on:var(--wa-color-green-on)}.wa-warning-cyan{--wa-color-warning-95:var(--wa-color-cyan-95);--wa-color-warning-90:var(--wa-color-cyan-90);--wa-color-warning-80:var(--wa-color-cyan-80);--wa-color-warning-70:var(--wa-color-cyan-70);--wa-color-warning-60:var(--wa-color-cyan-60);--wa-color-warning-50:var(--wa-color-cyan-50);--wa-color-warning-40:var(--wa-color-cyan-40);--wa-color-warning-30:var(--wa-color-cyan-30);--wa-color-warning-20:var(--wa-color-cyan-20);--wa-color-warning-10:var(--wa-color-cyan-10);--wa-color-warning-05:var(--wa-color-cyan-05);--wa-color-warning:var(--wa-color-cyan);--wa-color-warning-on:var(--wa-color-cyan-on)}.wa-warning-blue{--wa-color-warning-95:var(--wa-color-blue-95);--wa-color-warning-90:var(--wa-color-blue-90);--wa-color-warning-80:var(--wa-color-blue-80);--wa-color-warning-70:var(--wa-color-blue-70);--wa-color-warning-60:var(--wa-color-blue-60);--wa-color-warning-50:var(--wa-color-blue-50);--wa-color-warning-40:var(--wa-color-blue-40);--wa-color-warning-30:var(--wa-color-blue-30);--wa-color-warning-20:var(--wa-color-blue-20);--wa-color-warning-10:var(--wa-color-blue-10);--wa-color-warning-05:var(--wa-color-blue-05);--wa-color-warning:var(--wa-color-blue);--wa-color-warning-on:var(--wa-color-blue-on)}.wa-warning-indigo{--wa-color-warning-95:var(--wa-color-indigo-95);--wa-color-warning-90:var(--wa-color-indigo-90);--wa-color-warning-80:var(--wa-color-indigo-80);--wa-color-warning-70:var(--wa-color-indigo-70);--wa-color-warning-60:var(--wa-color-indigo-60);--wa-color-warning-50:var(--wa-color-indigo-50);--wa-color-warning-40:var(--wa-color-indigo-40);--wa-color-warning-30:var(--wa-color-indigo-30);--wa-color-warning-20:var(--wa-color-indigo-20);--wa-color-warning-10:var(--wa-color-indigo-10);--wa-color-warning-05:var(--wa-color-indigo-05);--wa-color-warning:var(--wa-color-indigo);--wa-color-warning-on:var(--wa-color-indigo-on)}.wa-warning-purple{--wa-color-warning-95:var(--wa-color-purple-95);--wa-color-warning-90:var(--wa-color-purple-90);--wa-color-warning-80:var(--wa-color-purple-80);--wa-color-warning-70:var(--wa-color-purple-70);--wa-color-warning-60:var(--wa-color-purple-60);--wa-color-warning-50:var(--wa-color-purple-50);--wa-color-warning-40:var(--wa-color-purple-40);--wa-color-warning-30:var(--wa-color-purple-30);--wa-color-warning-20:var(--wa-color-purple-20);--wa-color-warning-10:var(--wa-color-purple-10);--wa-color-warning-05:var(--wa-color-purple-05);--wa-color-warning:var(--wa-color-purple);--wa-color-warning-on:var(--wa-color-purple-on)}.wa-warning-pink{--wa-color-warning-95:var(--wa-color-pink-95);--wa-color-warning-90:var(--wa-color-pink-90);--wa-color-warning-80:var(--wa-color-pink-80);--wa-color-warning-70:var(--wa-color-pink-70);--wa-color-warning-60:var(--wa-color-pink-60);--wa-color-warning-50:var(--wa-color-pink-50);--wa-color-warning-40:var(--wa-color-pink-40);--wa-color-warning-30:var(--wa-color-pink-30);--wa-color-warning-20:var(--wa-color-pink-20);--wa-color-warning-10:var(--wa-color-pink-10);--wa-color-warning-05:var(--wa-color-pink-05);--wa-color-warning:var(--wa-color-pink);--wa-color-warning-on:var(--wa-color-pink-on)}.wa-warning-gray{--wa-color-warning-95:var(--wa-color-gray-95);--wa-color-warning-90:var(--wa-color-gray-90);--wa-color-warning-80:var(--wa-color-gray-80);--wa-color-warning-70:var(--wa-color-gray-70);--wa-color-warning-60:var(--wa-color-gray-60);--wa-color-warning-50:var(--wa-color-gray-50);--wa-color-warning-40:var(--wa-color-gray-40);--wa-color-warning-30:var(--wa-color-gray-30);--wa-color-warning-20:var(--wa-color-gray-20);--wa-color-warning-10:var(--wa-color-gray-10);--wa-color-warning-05:var(--wa-color-gray-05);--wa-color-warning:var(--wa-color-gray);--wa-color-warning-on:var(--wa-color-gray-on)}}@layer wa-color-variant{:where(:root),.wa-danger-red{--wa-color-danger-95:var(--wa-color-red-95);--wa-color-danger-90:var(--wa-color-red-90);--wa-color-danger-80:var(--wa-color-red-80);--wa-color-danger-70:var(--wa-color-red-70);--wa-color-danger-60:var(--wa-color-red-60);--wa-color-danger-50:var(--wa-color-red-50);--wa-color-danger-40:var(--wa-color-red-40);--wa-color-danger-30:var(--wa-color-red-30);--wa-color-danger-20:var(--wa-color-red-20);--wa-color-danger-10:var(--wa-color-red-10);--wa-color-danger-05:var(--wa-color-red-05);--wa-color-danger:var(--wa-color-red);--wa-color-danger-on:var(--wa-color-red-on)}.wa-danger-orange{--wa-color-danger-95:var(--wa-color-orange-95);--wa-color-danger-90:var(--wa-color-orange-90);--wa-color-danger-80:var(--wa-color-orange-80);--wa-color-danger-70:var(--wa-color-orange-70);--wa-color-danger-60:var(--wa-color-orange-60);--wa-color-danger-50:var(--wa-color-orange-50);--wa-color-danger-40:var(--wa-color-orange-40);--wa-color-danger-30:var(--wa-color-orange-30);--wa-color-danger-20:var(--wa-color-orange-20);--wa-color-danger-10:var(--wa-color-orange-10);--wa-color-danger-05:var(--wa-color-orange-05);--wa-color-danger:var(--wa-color-orange);--wa-color-danger-on:var(--wa-color-orange-on)}.wa-danger-yellow{--wa-color-danger-95:var(--wa-color-yellow-95);--wa-color-danger-90:var(--wa-color-yellow-90);--wa-color-danger-80:var(--wa-color-yellow-80);--wa-color-danger-70:var(--wa-color-yellow-70);--wa-color-danger-60:var(--wa-color-yellow-60);--wa-color-danger-50:var(--wa-color-yellow-50);--wa-color-danger-40:var(--wa-color-yellow-40);--wa-color-danger-30:var(--wa-color-yellow-30);--wa-color-danger-20:var(--wa-color-yellow-20);--wa-color-danger-10:var(--wa-color-yellow-10);--wa-color-danger-05:var(--wa-color-yellow-05);--wa-color-danger:var(--wa-color-yellow);--wa-color-danger-on:var(--wa-color-yellow-on)}.wa-danger-green{--wa-color-danger-95:var(--wa-color-green-95);--wa-color-danger-90:var(--wa-color-green-90);--wa-color-danger-80:var(--wa-color-green-80);--wa-color-danger-70:var(--wa-color-green-70);--wa-color-danger-60:var(--wa-color-green-60);--wa-color-danger-50:var(--wa-color-green-50);--wa-color-danger-40:var(--wa-color-green-40);--wa-color-danger-30:var(--wa-color-green-30);--wa-color-danger-20:var(--wa-color-green-20);--wa-color-danger-10:var(--wa-color-green-10);--wa-color-danger-05:var(--wa-color-green-05);--wa-color-danger:var(--wa-color-green);--wa-color-danger-on:var(--wa-color-green-on)}.wa-danger-cyan{--wa-color-danger-95:var(--wa-color-cyan-95);--wa-color-danger-90:var(--wa-color-cyan-90);--wa-color-danger-80:var(--wa-color-cyan-80);--wa-color-danger-70:var(--wa-color-cyan-70);--wa-color-danger-60:var(--wa-color-cyan-60);--wa-color-danger-50:var(--wa-color-cyan-50);--wa-color-danger-40:var(--wa-color-cyan-40);--wa-color-danger-30:var(--wa-color-cyan-30);--wa-color-danger-20:var(--wa-color-cyan-20);--wa-color-danger-10:var(--wa-color-cyan-10);--wa-color-danger-05:var(--wa-color-cyan-05);--wa-color-danger:var(--wa-color-cyan);--wa-color-danger-on:var(--wa-color-cyan-on)}.wa-danger-blue{--wa-color-danger-95:var(--wa-color-blue-95);--wa-color-danger-90:var(--wa-color-blue-90);--wa-color-danger-80:var(--wa-color-blue-80);--wa-color-danger-70:var(--wa-color-blue-70);--wa-color-danger-60:var(--wa-color-blue-60);--wa-color-danger-50:var(--wa-color-blue-50);--wa-color-danger-40:var(--wa-color-blue-40);--wa-color-danger-30:var(--wa-color-blue-30);--wa-color-danger-20:var(--wa-color-blue-20);--wa-color-danger-10:var(--wa-color-blue-10);--wa-color-danger-05:var(--wa-color-blue-05);--wa-color-danger:var(--wa-color-blue);--wa-color-danger-on:var(--wa-color-blue-on)}.wa-danger-indigo{--wa-color-danger-95:var(--wa-color-indigo-95);--wa-color-danger-90:var(--wa-color-indigo-90);--wa-color-danger-80:var(--wa-color-indigo-80);--wa-color-danger-70:var(--wa-color-indigo-70);--wa-color-danger-60:var(--wa-color-indigo-60);--wa-color-danger-50:var(--wa-color-indigo-50);--wa-color-danger-40:var(--wa-color-indigo-40);--wa-color-danger-30:var(--wa-color-indigo-30);--wa-color-danger-20:var(--wa-color-indigo-20);--wa-color-danger-10:var(--wa-color-indigo-10);--wa-color-danger-05:var(--wa-color-indigo-05);--wa-color-danger:var(--wa-color-indigo);--wa-color-danger-on:var(--wa-color-indigo-on)}.wa-danger-purple{--wa-color-danger-95:var(--wa-color-purple-95);--wa-color-danger-90:var(--wa-color-purple-90);--wa-color-danger-80:var(--wa-color-purple-80);--wa-color-danger-70:var(--wa-color-purple-70);--wa-color-danger-60:var(--wa-color-purple-60);--wa-color-danger-50:var(--wa-color-purple-50);--wa-color-danger-40:var(--wa-color-purple-40);--wa-color-danger-30:var(--wa-color-purple-30);--wa-color-danger-20:var(--wa-color-purple-20);--wa-color-danger-10:var(--wa-color-purple-10);--wa-color-danger-05:var(--wa-color-purple-05);--wa-color-danger:var(--wa-color-purple);--wa-color-danger-on:var(--wa-color-purple-on)}.wa-danger-pink{--wa-color-danger-95:var(--wa-color-pink-95);--wa-color-danger-90:var(--wa-color-pink-90);--wa-color-danger-80:var(--wa-color-pink-80);--wa-color-danger-70:var(--wa-color-pink-70);--wa-color-danger-60:var(--wa-color-pink-60);--wa-color-danger-50:var(--wa-color-pink-50);--wa-color-danger-40:var(--wa-color-pink-40);--wa-color-danger-30:var(--wa-color-pink-30);--wa-color-danger-20:var(--wa-color-pink-20);--wa-color-danger-10:var(--wa-color-pink-10);--wa-color-danger-05:var(--wa-color-pink-05);--wa-color-danger:var(--wa-color-pink);--wa-color-danger-on:var(--wa-color-pink-on)}.wa-danger-gray{--wa-color-danger-95:var(--wa-color-gray-95);--wa-color-danger-90:var(--wa-color-gray-90);--wa-color-danger-80:var(--wa-color-gray-80);--wa-color-danger-70:var(--wa-color-gray-70);--wa-color-danger-60:var(--wa-color-gray-60);--wa-color-danger-50:var(--wa-color-gray-50);--wa-color-danger-40:var(--wa-color-gray-40);--wa-color-danger-30:var(--wa-color-gray-30);--wa-color-danger-20:var(--wa-color-gray-20);--wa-color-danger-10:var(--wa-color-gray-10);--wa-color-danger-05:var(--wa-color-gray-05);--wa-color-danger:var(--wa-color-gray);--wa-color-danger-on:var(--wa-color-gray-on)}}:where(:root),:host{--wa-color-red-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-red-key), 1) * 100%));--wa-color-orange-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-orange-key), 1) * 100%));--wa-color-yellow-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-yellow-key), 1) * 100%));--wa-color-green-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-green-key), 1) * 100%));--wa-color-cyan-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-cyan-key), 1) * 100%));--wa-color-blue-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-blue-key), 1) * 100%));--wa-color-indigo-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-indigo-key), 1) * 100%));--wa-color-purple-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-purple-key), 1) * 100%));--wa-color-pink-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-pink-key), 1) * 100%));--wa-color-gray-gte-60:calc(100% - (clamp(0, 60 - var(--wa-color-gray-key), 1) * 100%));--wa-color-red-on:color-mix(in oklab, var(--wa-color-red-10) var(--wa-color-red-gte-60), white);--wa-color-orange-on:color-mix(in oklab, var(--wa-color-orange-10) var(--wa-color-orange-gte-60), white);--wa-color-yellow-on:color-mix(in oklab, var(--wa-color-yellow-10) var(--wa-color-yellow-gte-60), white);--wa-color-green-on:color-mix(in oklab, var(--wa-color-green-10) var(--wa-color-green-gte-60), white);--wa-color-cyan-on:color-mix(in oklab, var(--wa-color-cyan-10) var(--wa-color-cyan-gte-60), white);--wa-color-blue-on:color-mix(in oklab, var(--wa-color-blue-10) var(--wa-color-blue-gte-60), white);--wa-color-indigo-on:color-mix(in oklab, var(--wa-color-indigo-10) var(--wa-color-indigo-gte-60), white);--wa-color-purple-on:color-mix(in oklab, var(--wa-color-purple-10) var(--wa-color-purple-gte-60), white);--wa-color-pink-on:color-mix(in oklab, var(--wa-color-pink-10) var(--wa-color-pink-gte-60), white);--wa-color-gray-on:color-mix(in oklab, var(--wa-color-gray-10) var(--wa-color-gray-gte-60), white)}@layer wa-color-palette{:where(:root),.wa-palette-default{--wa-color-red-95:#fff0ef ;--wa-color-red-90:#ffdedc ;--wa-color-red-80:#ffb8b6 ;--wa-color-red-70:#fd8f90 ;--wa-color-red-60:#f3676c ;--wa-color-red-50:#dc3146 ;--wa-color-red-40:#b30532 ;--wa-color-red-30:#8a132c ;--wa-color-red-20:#631323 ;--wa-color-red-10:#3e0913 ;--wa-color-red-05:#2a040b ;--wa-color-red:var(--wa-color-red-50);--wa-color-red-key:50;--wa-color-orange-95:#fff0e6 ;--wa-color-orange-90:#ffdfca ;--wa-color-orange-80:#ffbb94 ;--wa-color-orange-70:#ff9266 ;--wa-color-orange-60:#f46a45 ;--wa-color-orange-50:#cd491c ;--wa-color-orange-40:#9f3501 ;--wa-color-orange-30:#802700 ;--wa-color-orange-20:#601b00 ;--wa-color-orange-10:#3c0d00 ;--wa-color-orange-05:#280600 ;--wa-color-orange:var(--wa-color-orange-60);--wa-color-orange-key:60;--wa-color-yellow-95:#fef3cd ;--wa-color-yellow-90:#ffe495 ;--wa-color-yellow-80:#fac22b ;--wa-color-yellow-70:#ef9d00 ;--wa-color-yellow-60:#da7e00 ;--wa-color-yellow-50:#b45f04 ;--wa-color-yellow-40:#8c4602 ;--wa-color-yellow-30:#6f3601 ;--wa-color-yellow-20:#532600 ;--wa-color-yellow-10:#331600 ;--wa-color-yellow-05:#220c00 ;--wa-color-yellow:var(--wa-color-yellow-80);--wa-color-yellow-key:80;--wa-color-green-95:#e3f9e3 ;--wa-color-green-90:#c2f2c1 ;--wa-color-green-80:#93da98 ;--wa-color-green-70:#5dc36f ;--wa-color-green-60:#00ac49 ;--wa-color-green-50:#00883c ;--wa-color-green-40:#036730 ;--wa-color-green-30:#0a5027 ;--wa-color-green-20:#0a3a1d ;--wa-color-green-10:#052310 ;--wa-color-green-05:#031608 ;--wa-color-green:var(--wa-color-green-60);--wa-color-green-key:60;--wa-color-cyan-95:#e3f6fb ;--wa-color-cyan-90:#c5ecf7 ;--wa-color-cyan-80:#7fd6ec ;--wa-color-cyan-70:#2fbedc ;--wa-color-cyan-60:#00a3c0 ;--wa-color-cyan-50:#078098 ;--wa-color-cyan-40:#026274 ;--wa-color-cyan-30:#014c5b ;--wa-color-cyan-20:#003844 ;--wa-color-cyan-10:#002129 ;--wa-color-cyan-05:#00151b ;--wa-color-cyan:var(--wa-color-cyan-70);--wa-color-cyan-key:70;--wa-color-blue-95:#e8f3ff ;--wa-color-blue-90:#d1e8ff ;--wa-color-blue-80:#9fceff ;--wa-color-blue-70:#6eb3ff ;--wa-color-blue-60:#3e96ff ;--wa-color-blue-50:#0071ec ;--wa-color-blue-40:#0053c0 ;--wa-color-blue-30:#003f9c ;--wa-color-blue-20:#002d77 ;--wa-color-blue-10:#001a4e ;--wa-color-blue-05:#000f35 ;--wa-color-blue:var(--wa-color-blue-50);--wa-color-blue-key:50;--wa-color-indigo-95:#f0f2ff ;--wa-color-indigo-90:#dfe5ff ;--wa-color-indigo-80:#bcc7ff ;--wa-color-indigo-70:#9da9ff ;--wa-color-indigo-60:#808aff ;--wa-color-indigo-50:#6163f2 ;--wa-color-indigo-40:#4945cb ;--wa-color-indigo-30:#3933a7 ;--wa-color-indigo-20:#292381 ;--wa-color-indigo-10:#181255 ;--wa-color-indigo-05:#0d0a3a ;--wa-color-indigo:var(--wa-color-indigo-50);--wa-color-indigo-key:50;--wa-color-purple-95:#f7f0ff ;--wa-color-purple-90:#eedfff ;--wa-color-purple-80:#ddbdff ;--wa-color-purple-70:#ca99ff ;--wa-color-purple-60:#b678f5 ;--wa-color-purple-50:#9951db ;--wa-color-purple-40:#7936b3 ;--wa-color-purple-30:#612692 ;--wa-color-purple-20:#491870 ;--wa-color-purple-10:#2d0b48 ;--wa-color-purple-05:#1e0532 ;--wa-color-purple:var(--wa-color-purple-50);--wa-color-purple-key:50;--wa-color-pink-95:#feeff9 ;--wa-color-pink-90:#feddf0 ;--wa-color-pink-80:#fcb5d8 ;--wa-color-pink-70:#f78dbf ;--wa-color-pink-60:#e66ba3 ;--wa-color-pink-50:#c84382 ;--wa-color-pink-40:#9e2a6c ;--wa-color-pink-30:#7d1e58 ;--wa-color-pink-20:#5e1342 ;--wa-color-pink-10:#3c0828 ;--wa-color-pink-05:#28041a ;--wa-color-pink:var(--wa-color-pink-50);--wa-color-pink-key:50;--wa-color-gray-95:#f1f2f3 ;--wa-color-gray-90:#e4e5e9 ;--wa-color-gray-80:#c7c9d0 ;--wa-color-gray-70:#abaeb9 ;--wa-color-gray-60:#9194a2 ;--wa-color-gray-50:#717584 ;--wa-color-gray-40:#545868 ;--wa-color-gray-30:#424554 ;--wa-color-gray-20:#2f323f ;--wa-color-gray-10:#1b1d26 ;--wa-color-gray-05:#101219 ;--wa-color-gray:var(--wa-color-gray-40);--wa-color-gray-key:40}}@layer wa-theme{:where(:root),.wa-theme-default,.wa-light,.wa-dark .wa-invert,.wa-light .wa-theme-default,.wa-dark .wa-theme-default.wa-invert,.wa-dark .wa-theme-default .wa-invert{color-scheme:light;color:var(--wa-color-text-normal);--wa-color-surface-raised:white;--wa-color-surface-default:white;--wa-color-surface-lowered:var(--wa-color-neutral-95);--wa-color-surface-border:var(--wa-color-neutral-90);--wa-color-text-normal:var(--wa-color-neutral-10);--wa-color-text-quiet:var(--wa-color-neutral-40);--wa-color-text-link:var(--wa-color-brand-40);--wa-color-overlay-modal:color-mix(in oklab, var(--wa-color-neutral-05) 50%, transparent);--wa-color-overlay-inline:color-mix(in oklab, var(--wa-color-neutral-80) 25%, transparent);--wa-color-shadow:color-mix(       in oklab,       var(--wa-color-neutral-05) calc(var(--wa-shadow-blur-scale) * 4% + 8%),       transparent     );--wa-color-focus:var(--wa-color-brand-60);--wa-color-mix-hover:oklch(from currentColor calc(1 - l) c h) 10%;--wa-color-mix-active:var(--wa-color-surface-default) 10%;--wa-color-brand-fill-quiet:var(--wa-color-brand-95);--wa-color-brand-fill-normal:var(--wa-color-brand-90);--wa-color-brand-fill-loud:var(--wa-color-brand-50);--wa-color-brand-border-quiet:var(--wa-color-brand-90);--wa-color-brand-border-normal:var(--wa-color-brand-80);--wa-color-brand-border-loud:var(--wa-color-brand-60);--wa-color-brand-on-quiet:var(--wa-color-brand-40);--wa-color-brand-on-normal:var(--wa-color-brand-30);--wa-color-brand-on-loud:white;--wa-color-success-fill-quiet:var(--wa-color-success-95);--wa-color-success-fill-normal:var(--wa-color-success-90);--wa-color-success-fill-loud:var(--wa-color-success-50);--wa-color-success-border-quiet:var(--wa-color-success-90);--wa-color-success-border-normal:var(--wa-color-success-80);--wa-color-success-border-loud:var(--wa-color-success-60);--wa-color-success-on-quiet:var(--wa-color-success-40);--wa-color-success-on-normal:var(--wa-color-success-30);--wa-color-success-on-loud:white;--wa-color-warning-fill-quiet:var(--wa-color-warning-95);--wa-color-warning-fill-normal:var(--wa-color-warning-90);--wa-color-warning-fill-loud:var(--wa-color-warning-50);--wa-color-warning-border-quiet:var(--wa-color-warning-90);--wa-color-warning-border-normal:var(--wa-color-warning-80);--wa-color-warning-border-loud:var(--wa-color-warning-60);--wa-color-warning-on-quiet:var(--wa-color-warning-40);--wa-color-warning-on-normal:var(--wa-color-warning-30);--wa-color-warning-on-loud:white;--wa-color-danger-fill-quiet:var(--wa-color-danger-95);--wa-color-danger-fill-normal:var(--wa-color-danger-90);--wa-color-danger-fill-loud:var(--wa-color-danger-50);--wa-color-danger-border-quiet:var(--wa-color-danger-90);--wa-color-danger-border-normal:var(--wa-color-danger-80);--wa-color-danger-border-loud:var(--wa-color-danger-60);--wa-color-danger-on-quiet:var(--wa-color-danger-40);--wa-color-danger-on-normal:var(--wa-color-danger-30);--wa-color-danger-on-loud:white;--wa-color-neutral-fill-quiet:var(--wa-color-neutral-95);--wa-color-neutral-fill-normal:var(--wa-color-neutral-90);--wa-color-neutral-fill-loud:var(--wa-color-neutral-20);--wa-color-neutral-border-quiet:var(--wa-color-neutral-90);--wa-color-neutral-border-normal:var(--wa-color-neutral-80);--wa-color-neutral-border-loud:var(--wa-color-neutral-60);--wa-color-neutral-on-quiet:var(--wa-color-neutral-40);--wa-color-neutral-on-normal:var(--wa-color-neutral-30);--wa-color-neutral-on-loud:white;}.wa-dark,.wa-invert,.wa-dark .wa-theme-default,.wa-light .wa-theme-default.wa-invert,.wa-light .wa-theme-default .wa-invert{color-scheme:dark;color:var(--wa-color-text-normal);--wa-color-surface-raised:var(--wa-color-neutral-10);--wa-color-surface-default:var(--wa-color-neutral-05);--wa-color-surface-lowered:color-mix(in oklab, var(--wa-color-surface-default), black 20%);--wa-color-surface-border:var(--wa-color-neutral-20);--wa-color-text-normal:var(--wa-color-neutral-95);--wa-color-text-quiet:var(--wa-color-neutral-60);--wa-color-text-link:var(--wa-color-brand-70);--wa-color-overlay-modal:color-mix(in oklab, black 60%, transparent);--wa-color-overlay-inline:color-mix(in oklab, var(--wa-color-neutral-50) 10%, transparent);--wa-color-shadow:color-mix(       in oklab,       var(--wa-color-surface-lowered) calc(var(--wa-shadow-blur-scale) * 32% + 40%),       transparent     );--wa-color-focus:var(--wa-color-brand-60);--wa-color-mix-hover:oklch(from currentColor calc(1 - l) c h) 20%;--wa-color-mix-active:var(--wa-color-surface-default) 20%;--wa-color-brand-fill-quiet:var(--wa-color-brand-10);--wa-color-brand-fill-normal:var(--wa-color-brand-20);--wa-color-brand-fill-loud:var(--wa-color-brand-50);--wa-color-brand-border-quiet:var(--wa-color-brand-20);--wa-color-brand-border-normal:var(--wa-color-brand-30);--wa-color-brand-border-loud:var(--wa-color-brand-40);--wa-color-brand-on-quiet:var(--wa-color-brand-60);--wa-color-brand-on-normal:var(--wa-color-brand-70);--wa-color-brand-on-loud:white;--wa-color-success-fill-quiet:var(--wa-color-success-10);--wa-color-success-fill-normal:var(--wa-color-success-20);--wa-color-success-fill-loud:var(--wa-color-success-50);--wa-color-success-border-quiet:var(--wa-color-success-20);--wa-color-success-border-normal:var(--wa-color-success-30);--wa-color-success-border-loud:var(--wa-color-success-40);--wa-color-success-on-quiet:var(--wa-color-success-60);--wa-color-success-on-normal:var(--wa-color-success-70);--wa-color-success-on-loud:white;--wa-color-warning-fill-quiet:var(--wa-color-warning-10);--wa-color-warning-fill-normal:var(--wa-color-warning-20);--wa-color-warning-fill-loud:var(--wa-color-warning-50);--wa-color-warning-border-quiet:var(--wa-color-warning-20);--wa-color-warning-border-normal:var(--wa-color-warning-30);--wa-color-warning-border-loud:var(--wa-color-warning-40);--wa-color-warning-on-quiet:var(--wa-color-warning-60);--wa-color-warning-on-normal:var(--wa-color-warning-70);--wa-color-warning-on-loud:white;--wa-color-danger-fill-quiet:var(--wa-color-danger-10);--wa-color-danger-fill-normal:var(--wa-color-danger-20);--wa-color-danger-fill-loud:var(--wa-color-danger-50);--wa-color-danger-border-quiet:var(--wa-color-danger-20);--wa-color-danger-border-normal:var(--wa-color-danger-30);--wa-color-danger-border-loud:var(--wa-color-danger-40);--wa-color-danger-on-quiet:var(--wa-color-danger-60);--wa-color-danger-on-normal:var(--wa-color-danger-70);--wa-color-danger-on-loud:white;--wa-color-neutral-fill-quiet:var(--wa-color-neutral-10);--wa-color-neutral-fill-normal:var(--wa-color-neutral-20);--wa-color-neutral-fill-loud:var(--wa-color-neutral-90);--wa-color-neutral-border-quiet:var(--wa-color-neutral-20);--wa-color-neutral-border-normal:var(--wa-color-neutral-30);--wa-color-neutral-border-loud:var(--wa-color-neutral-40);--wa-color-neutral-on-quiet:var(--wa-color-neutral-60);--wa-color-neutral-on-normal:var(--wa-color-neutral-70);--wa-color-neutral-on-loud:var(--wa-color-neutral-05);}:where(:root),.wa-theme-default,.wa-light,.wa-dark,.wa-invert{font-family:var(--wa-font-family-body);--wa-font-family-body:ui-sans-serif, system-ui, sans-serif;--wa-font-family-heading:var(--wa-font-family-body);--wa-font-family-code:ui-monospace, monospace;--wa-font-family-longform:ui-serif, serif;--wa-font-size-scale:1;--wa-font-size-3xs:round(calc(var(--wa-font-size-2xs) / 1.125), 1px);--wa-font-size-2xs:round(calc(var(--wa-font-size-xs) / 1.125), 1px);--wa-font-size-xs:round(calc(var(--wa-font-size-s) / 1.125), 1px);--wa-font-size-s:round(calc(var(--wa-font-size-m) / 1.125), 1px);--wa-font-size-m:calc(1rem * var(--wa-font-size-scale));--wa-font-size-l:round(calc(var(--wa-font-size-m) * 1.125 * 1.125), 1px);--wa-font-size-xl:round(calc(var(--wa-font-size-l) * 1.125 * 1.125), 1px);--wa-font-size-2xl:round(calc(var(--wa-font-size-xl) * 1.125 * 1.125), 1px);--wa-font-size-3xl:round(calc(var(--wa-font-size-2xl) * 1.125 * 1.125), 1px);--wa-font-size-4xl:round(calc(var(--wa-font-size-3xl) * 1.125 * 1.125), 1px);--wa-font-size-5xl:round(calc(var(--wa-font-size-4xl) * 1.125 * 1.125), 1px);--wa-font-size-smaller:round(calc(1em / 1.125), 1px);--wa-font-size-larger:round(calc(1em * 1.125 * 1.125), 1px);--wa-font-weight-light:300;--wa-font-weight-normal:400;--wa-font-weight-semibold:500;--wa-font-weight-bold:600;--wa-font-weight-body:var(--wa-font-weight-normal);--wa-font-weight-heading:var(--wa-font-weight-bold);--wa-font-weight-code:var(--wa-font-weight-normal);--wa-font-weight-longform:var(--wa-font-weight-normal);--wa-font-weight-action:var(--wa-font-weight-semibold);--wa-line-height-condensed:1.2;--wa-line-height-normal:1.6;--wa-line-height-expanded:2;--wa-link-decoration-default:underline color-mix(in oklab, currentColor 70%, transparent) dotted;--wa-link-decoration-hover:underline;--wa-space-scale:1;--wa-space-3xs:calc(var(--wa-space-scale) * 0.125rem);--wa-space-2xs:calc(var(--wa-space-scale) * 0.25rem);--wa-space-xs:calc(var(--wa-space-scale) * 0.5rem);--wa-space-s:calc(var(--wa-space-scale) * 0.75rem);--wa-space-m:calc(var(--wa-space-scale) * 1rem);--wa-space-l:calc(var(--wa-space-scale) * 1.5rem);--wa-space-xl:calc(var(--wa-space-scale) * 2rem);--wa-space-2xl:calc(var(--wa-space-scale) * 2.5rem);--wa-space-3xl:calc(var(--wa-space-scale) * 3rem);--wa-space-4xl:calc(var(--wa-space-scale) * 4rem);--wa-space-5xl:calc(var(--wa-space-scale) * 5rem);--wa-content-spacing:var(--wa-space-l);--wa-border-style:solid;--wa-border-width-scale:1;--wa-border-width-s:calc(var(--wa-border-width-scale) * 0.0625rem);--wa-border-width-m:calc(var(--wa-border-width-scale) * 0.125rem);--wa-border-width-l:calc(var(--wa-border-width-scale) * 0.1875rem);--wa-border-radius-scale:1;--wa-border-radius-s:calc(var(--wa-border-radius-scale) * 0.1875rem);--wa-border-radius-m:calc(var(--wa-border-radius-scale) * 0.375rem);--wa-border-radius-l:calc(var(--wa-border-radius-scale) * 0.75rem);--wa-border-radius-pill:9999px;--wa-border-radius-circle:50%;--wa-border-radius-square:0px;--wa-focus-ring-style:solid;--wa-focus-ring-width:0.1875rem;--wa-focus-ring:var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus);--wa-focus-ring-offset:0.0625rem;--wa-shadow-offset-x-scale:0;--wa-shadow-offset-x-s:calc(var(--wa-shadow-offset-x-scale) * 0.125rem);--wa-shadow-offset-x-m:calc(var(--wa-shadow-offset-x-scale) * 0.25rem);--wa-shadow-offset-x-l:calc(var(--wa-shadow-offset-x-scale) * 0.5rem);--wa-shadow-offset-y-scale:1;--wa-shadow-offset-y-s:calc(var(--wa-shadow-offset-y-scale) * 0.125rem);--wa-shadow-offset-y-m:calc(var(--wa-shadow-offset-y-scale) * 0.25rem);--wa-shadow-offset-y-l:calc(var(--wa-shadow-offset-y-scale) * 0.5rem);--wa-shadow-blur-scale:1;--wa-shadow-blur-s:calc(var(--wa-shadow-blur-scale) * 0.125rem);--wa-shadow-blur-m:calc(var(--wa-shadow-blur-scale) * 0.25rem);--wa-shadow-blur-l:calc(var(--wa-shadow-blur-scale) * 0.5rem);--wa-shadow-spread-scale:-0.5;--wa-shadow-spread-s:calc(var(--wa-shadow-spread-scale) * 0.125rem);--wa-shadow-spread-m:calc(var(--wa-shadow-spread-scale) * 0.25rem);--wa-shadow-spread-l:calc(var(--wa-shadow-spread-scale) * 0.5rem);--wa-shadow-s:var(--wa-shadow-offset-x-s) var(--wa-shadow-offset-y-s) var(--wa-shadow-blur-s)       var(--wa-shadow-spread-s) var(--wa-color-shadow);--wa-shadow-m:var(--wa-shadow-offset-x-m) var(--wa-shadow-offset-y-m) var(--wa-shadow-blur-m)       var(--wa-shadow-spread-m) var(--wa-color-shadow);--wa-shadow-l:var(--wa-shadow-offset-x-l) var(--wa-shadow-offset-y-l) var(--wa-shadow-blur-l)       var(--wa-shadow-spread-l) var(--wa-color-shadow);--wa-transition-easing:ease;--wa-transition-slow:300ms;--wa-transition-normal:150ms;--wa-transition-fast:75ms;--wa-form-control-background-color:var(--wa-color-surface-default);--wa-form-control-border-color:var(--wa-color-neutral-border-loud);--wa-form-control-border-style:var(--wa-border-style);--wa-form-control-border-width:var(--wa-border-width-s);--wa-form-control-border-radius:var(--wa-border-radius-m);--wa-form-control-activated-color:var(--wa-color-brand-fill-loud);--wa-form-control-label-color:var(--wa-color-text-normal);--wa-form-control-label-font-weight:var(--wa-font-weight-semibold);--wa-form-control-label-line-height:var(--wa-line-height-condensed);--wa-form-control-value-color:var(--wa-color-text-normal);--wa-form-control-value-font-weight:var(--wa-font-weight-body);--wa-form-control-value-line-height:var(--wa-line-height-condensed);--wa-form-control-hint-color:var(--wa-color-text-quiet);--wa-form-control-hint-font-weight:var(--wa-font-weight-body);--wa-form-control-hint-line-height:var(--wa-line-height-normal);--wa-form-control-placeholder-color:var(--wa-color-gray-50);--wa-form-control-required-content:'*';--wa-form-control-required-content-color:inherit;--wa-form-control-required-content-offset:0.1em;--wa-form-control-padding-block:0.75em;--wa-form-control-padding-inline:1em;--wa-form-control-height:round(       calc(2 * var(--wa-form-control-padding-block) + 1em * var(--wa-form-control-value-line-height)),       1px     );--wa-form-control-toggle-size:round(1.25em, 1px);--wa-button-transform-hover:none;--wa-button-transform-active:scale(0.9875);--wa-panel-border-style:var(--wa-border-style);--wa-panel-border-width:var(--wa-border-width-s);--wa-panel-border-radius:var(--wa-border-radius-l);--wa-tooltip-arrow-size:0.375rem;--wa-tooltip-background-color:var(--wa-color-text-normal);--wa-tooltip-border-color:var(--wa-tooltip-background-color);--wa-tooltip-border-style:var(--wa-border-style);--wa-tooltip-border-width:var(--wa-border-width-s);--wa-tooltip-border-radius:var(--wa-border-radius-s);--wa-tooltip-content-color:var(--wa-color-surface-default);--wa-tooltip-font-size:var(--wa-font-size-s);--wa-tooltip-line-height:var(--wa-line-height-normal);}:is(html,body):has(wa-page){min-height:100%;padding:0;margin:0}}wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:dir(rtl) .toast-close-button{right:auto;left:-0.3em;float:left}:dir(rtl) #toast-container>div{direction:rtl;padding:15px 50px 15px 15px;background-position:right 15px center}:dir(rtl) #toast-container.toast-top-left,:dir(rtl) #toast-container.toast-bottom-left{left:auto;right:12px}:dir(rtl) #toast-container.toast-top-right,:dir(rtl) #toast-container.toast-bottom-right{right:auto;left:12px}:dir(rtl) .toast-progress{left:auto;right:0}.ir-dialog__footer{display:flex;align-items:center;gap:1rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}#dialog-overview::part(title){color:var(--wa-color-text-normal);text-align:start}.ir__drawer{text-align:start !important}.ir__drawer::part(header){border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);color:var(--wa-color-text-normal);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.ir__drawer::part(title){text-align:start}.ir__drawer::part(body){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding:0;padding-inline-start:var(--ir-drawer-padding-inline-start, var(--ir-drawer-padding-left, var(--spacing)));padding-inline-end:var(--ir-drawer-padding-inline-end, var(--ir-drawer-padding-right, var(--spacing)));padding-top:var(--ir-drawer-padding-top, var(--spacing));padding-bottom:var(--ir-drawer-padding-bottom, var(--spacing))}.ir__drawer::part(footer){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding-top:calc(var(--spacing) / 2);border-top:1px solid var(--wa-color-surface-border)}.ir__drawer-footer{display:flex;align-items:center;gap:1rem;width:100%}.ir__drawer-footer>*{flex:1 1 0%}.drawer__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}.my-custom-style{background:#000;color:white}html:dir(rtl),body:dir(rtl){direction:rtl !important;text-align:start}:root{--ir-color-muted-background:#f2f3f8;--ir-color-loader:rgba(255, 255, 255, 0.2);--error-border-width:2px;--ir-color-border-error:var(--wa-color-danger-border-loud)}.wa-dark{--ir-color-loader:rgba(0, 0, 0, 0.2);--ir-color-muted-background:#12141a;--ir-color-muted-background:#07090d}body{background-color:var(--ir-color-muted-background) !important;color:var(--wa-color-text-normal)}h1,h2,h3,h4,h5,h6{color:var(--wa-color-text-normal) !important}html{font-size:14px !important}.truncate{overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative}.ir-price{font-family:inherit;font-size:1rem;font-weight:800;text-align:end;white-space:nowrap;color:var(--wa-color-text-normal);margin:0;padding:0}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl);margin:0;padding:0}:root{--wa-form-control-required-content-color:var(--wa-color-danger-border-loud, #f3676c)}.label-on-left{display:grid;gap:var(--wa-space-m)}wa-card::part(base){box-sizing:border-box}@media (min-width: 768px){.label-on-left{align-items:center;grid-template-columns:auto 1fr}.label-on-left wa-switch::part(base),.label-on-left wa-select::part(form-control),.label-on-left wa-select,.label-on-left wa-switch,.label-on-left wa-input,.label-on-left wa-textarea{grid-column:1 / -1;grid-row-end:span 2;display:grid;grid-template-columns:subgrid;gap:0 var(--wa-space-l);align-items:center}.label-on-left wa-switch::part(base){flex-direction:row-reverse}.label-on-left wa-switch::part(base)>*{justify-self:flex-start;justify-content:flex-start}.label-on-left ::part(label){justify-content:flex-end}.label-on-left ::part(hint){grid-column:2}}.ir-preview-print-container{position:fixed;inset:0;opacity:0;pointer-events:none;z-index:-1}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap;border-width:0}@media print{body.ir-preview-dialog-print-mode{background:#fff !important}body.ir-preview-dialog-print-mode>*:not(.ir-preview-print-container){display:none !important}body.ir-preview-dialog-print-mode .ir-preview-print-container{opacity:1;pointer-events:auto;position:static;z-index:auto;width:100%;min-height:auto;margin:0 auto;padding:1.5rem;box-sizing:border-box}}@page {margin:0.5in}.ir__field-group{display:flex;width:100%}.ir__field-group>:first-child::part(base),.ir__field-group>:first-child::part(combobox){border-start-end-radius:0;border-end-end-radius:0}.ir__field-group>:first-child{z-index:1}.ir__field-group .--grow{flex:1 1 0%}.ir__field-group>:last-child::part(base),.ir__field-group>:last-child::part(combobox){border-start-start-radius:0;border-end-start-radius:0;border-inline-start-width:0}.ir__field-group>:not(:first-child):not(:last-child)::part(combobox),.ir__field-group>:not(:first-child):not(:last-child)::part(base){border-radius:0;border-inline-start:0}.ir__field-group>:not(:first-child):not(:last-child)[open],.ir__field-group>:not(:first-child):not(:last-child):focus-within,.ir__field-group>:not(:first-child):not(:last-child):focus-visible,.ir__field-group>:last-child[open],.ir__field-group>:last-child:focus-visible,.ir__field-group>:last-child:focus-within{z-index:2}.ir-flip-rtl:dir(rtl){scale:-1 1}`;

const IrCommon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    extraResources = '';
    disableResourceInjection;
    resources = onlineResources;
    componentWillLoad() {
        this.parseRefs();
    }
    componentDidLoad() {
        this.initializeStyles();
    }
    hrefsChanged() {
        this.parseRefs();
        this.initializeStyles();
    }
    parseRefs() {
        if (this.disableResourceInjection) {
            return;
        }
        if (this.extraResources !== '')
            this.resources.push(JSON.parse(this.extraResources));
    }
    appendTag(tagName, attributes) {
        const tag = document.createElement(tagName);
        const selectorParts = [];
        Object.keys(attributes).forEach(attr => {
            tag.setAttribute(attr, attributes[attr]);
            selectorParts.push(`[${attr}="${attributes[attr]}"]`);
        });
        const selector = `${tagName}${selectorParts.join('')}`;
        const existingTag = document.querySelector(selector);
        if (!existingTag) {
            document.head.appendChild(tag);
        }
    }
    initializeStyles() {
        if (this.disableResourceInjection) {
            return;
        }
        this.resources.forEach(res => {
            if (res.isCSS) {
                this.appendTag('link', {
                    href: res.link,
                    rel: 'stylesheet',
                    type: 'text/css',
                });
            }
            if (res.isJS) {
                this.appendTag('script', {
                    src: res.link,
                });
            }
        });
    }
    render() {
        return null;
    }
    static get watchers() { return {
        "extraResources": [{
                "hrefsChanged": 0
            }]
    }; }
};
IrCommon.style = appCss();

const irCustomButtonCss = () => `:host{display:block}.ir__custom-button{width:100%}.ir__custom-button.--icon::part(base){height:auto;width:auto;padding:0}.ir__custom-button::part(base){height:var(--ir-c-btn-height, var(--wa-form-control-height));padding:var(--ir-c-btn-padding, 0 var(--wa-form-control-padding-inline));font-size:var(--ir-c-btn-font-size, auto)}.ir__custom-button.--link::part(base){height:fit-content;padding:0}.ir-button__link:focus{outline:none}.ir-button__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}.ir-button__link{display:inline-flex;align-items:center;justify-content:center;padding:0;font-family:inherit;font-size:var(--wa-form-control-value-font-size);font-weight:var(--wa-font-weight-action);line-height:calc(var(--wa-form-control-height) - var(--border-width) * 2);text-decoration:none;vertical-align:middle;white-space:nowrap;border-style:var(--wa-border-style);border-width:max(1px, var(--wa-form-control-border-width));border-radius:var(--wa-form-control-border-radius);transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing);cursor:pointer;user-select:none;-webkit-user-select:none;color:var(--wa-color-brand-fill-loud);background-color:transparent;border-color:transparent}.ir-button__link:hover,.ir-button__link:active{color:var(--wa-color-on-quiet, var(--wa-color-brand-on-quiet));}.ir-button__link:focus-visible{outline:var(--wa-focus-ring);outline-offset:var(--wa-focus-ring-offset)}`;

const IrCustomButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickHandler = index.createEvent(this, "clickHandler");
    }
    get el() { return index.getElement(this); }
    link;
    iconBtn;
    /** The button's theme variant. Defaults to `neutral` if not within another element with a variant. */
    variant;
    /** The button's visual appearance. */
    appearance;
    /** The button's size. */
    size = 's';
    /** Draws the button with a caret. Used to indicate that the button triggers a dropdown menu or similar behavior. */
    withCaret;
    /** Disables the button. Does not apply to link buttons. */
    disabled;
    /** Draws the button in a loading state. */
    loading;
    /** Draws a pill-style button with rounded edges. */
    pill;
    /**
     * The type of button. Note that the default value is `button` instead of `submit`, which is opposite of how native
     * `<button>` elements behave. When the type is `submit`, the button will submit the surrounding form.
     */
    type = 'button';
    /**
     * The name of the button, submitted as a name/value pair with form data, but only when this button is the submitter.
     * This attribute is ignored when `href` is present.
     */
    name;
    /**
     * The value of the button, submitted as a pair with the button's name as part of the form data, but only when this
     * button is the submitter. This attribute is ignored when `href` is present.
     */
    value;
    /** When set, the underlying button will be rendered as an `<a>` with this `href` instead of a `<button>`. */
    href;
    /** Tells the browser where to open the link. Only used when `href` is present. */
    target;
    /** When using `href`, this attribute will map to the underlying link's `rel` attribute. */
    rel;
    /** Tells the browser to download the linked file as this filename. Only used when `href` is present. */
    download;
    /**
     * The "form owner" to associate the button with. If omitted, the closest containing form will be used instead. The
     * value of this attribute must be an id of a form in the same document or shadow root as the button.
     */
    form;
    /** Used to override the form owner's `action` attribute. */
    formAction;
    /** Used to override the form owner's `enctype` attribute.  */
    formEnctype;
    /** Used to override the form owner's `method` attribute.  */
    formMethod;
    /** Used to override the form owner's `novalidate` attribute. */
    formNoValidate;
    /** Used to override the form owner's `target` attribute. */
    formTarget;
    clickHandler;
    handleButtonClick(e) {
        this.clickHandler.emit(e);
    }
    render() {
        if (this.link) {
            return (index.h("button", { class: "ir-button__link", onClick: e => {
                    this.clickHandler.emit(e);
                } }, index.h("slot", { slot: "start", name: "start" }), index.h("slot", null), index.h("slot", { slot: "end", name: "end" })));
        }
        return (index.h(index.Host, null, index.h("wa-button", { onClick: e => {
                this.handleButtonClick(e);
            },
            /* core button props */
            type: this.type, size: this.size, class: `ir__custom-button ${this.iconBtn ? '--icon' : ''} ${this.link ? '--link' : ''}`, disabled: this.disabled, appearance: this.link ? 'plain' : this.appearance, loading: this.loading, "with-caret": this.withCaret, variant: this.link ? 'brand' : this.variant, pill: this.pill,
            /* link-related props */
            href: this.href, target: this.target, rel: this.rel, download: this.download,
            /* form-related props */
            name: this.name, value: this.value, form: this.form, "form-action": this.formAction, "form-enctype": this.formEnctype, "form-method": this.formMethod, "form-no-validate": this.formNoValidate, "form-target": this.formTarget, exportparts: "base, start, label, end, caret, spinner" }, index.h("slot", { slot: "start", name: "start" }), index.h("slot", null), index.h("slot", { slot: "end", name: "end" }))));
    }
};
IrCustomButton.style = irCustomButtonCss();

/**
 * Decorator: call on a method that *acquires* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowAdd('modal')
 *   openModal() { ... }
 *
 * NOTE: this decorator no longer controls overflow (body locking). It's kept as a
 * pass-through so existing usages keep compiling. It still ensures the
 * `--ir-scrollbar-width` CSS variable is available on `:root`.
 */
function OverflowAdd(tag = 'data-ir-overflow') {
    return (_proto, _methodName, descriptor) => {
        const original = descriptor?.value;
        descriptor.value = function (...args) {
            // const host = getOverflowHost(this);
            // if (host) {
            //   addOverflowForHost(host, tag);
            // }
            ensureStyleForTag(tag);
            return original?.apply(this, args);
        };
        return descriptor;
    };
}
/**
 * Decorator: call on a method that *releases* an overflow lock for the host under a specific tag.
 * Example:
 *   @OverflowRelease('modal')
 *   closeModal() { ... }
 *
 * NOTE: this decorator no longer controls overflow (body locking). It's kept as a
 * pass-through so existing usages keep compiling.
 */
function OverflowRelease(_tag = 'data-ir-overflow') {
    return (_proto, _methodName, descriptor) => {
        const original = descriptor?.value;
        descriptor.value = function (...args) {
            // const host = getOverflowHost(this);
            // if (host) {
            //   removeOverflowForHost(host, tag);
            // }
            return original?.apply(this, args);
        };
        return descriptor;
    };
}
/** Host augmentation so we can track how many locks this host has per tag. */
// export interface HTMLOverflowHostElement extends HTMLStencilElement {
//   __overflowTags__?: Map<string, number>;
// }
// interface TagRegistryEntry {
//   hosts: Set<HTMLElement>;
//   count: number;
// }
/* ---------------------- Core registry & body lock logic --------------------- */
// const TAG_REGISTRY: Map<string, TagRegistryEntry> = new Map();
// Attribute on <body> that holds a space-separated list of active tags
// const BODY_ATTR = 'data-overflow-locks';
// Style element id prefix for per-tag CSS
const STYLE_ID_PREFIX = 'overflow-style-';
/** Ensure a <style> for this tag exists (once) and targets the body attr ApiClient. */
function ensureStyleForTag(tag) {
    if (!isDomAvailable())
        return;
    const styleId = STYLE_ID_PREFIX + tag;
    if (document.getElementById(styleId))
        return;
    // Determine if page has vertical overflow
    const hasOverflow = document.documentElement.scrollHeight > window.innerHeight;
    // Calculate scrollbar width (0 if no overflow)
    const scrollbarWidth = hasOverflow ? window.innerWidth - document.documentElement.clientWidth : 0;
    // const css = `
    //   /* Auto-inserted overflow lock for "${tag}" */
    //   body[${BODY_ATTR}~="${tag}"] {
    //     overflow: hidden !important;
    //     /* margin-inline-end respects LTR/RTL direction */
    //     margin-inline-end: ${scrollbarWidth}px !important;
    //   }
    // `.trim();
    const css = `
  :root{
    --ir-scrollbar-width:${scrollbarWidth}px;
  }
  .wa-scroll-lock body{
    overflow:hidden !important;
    margin-inline-end:${scrollbarWidth}px;
  }
  `.trim();
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
}
/** Add the tag ApiClient to body’s data-overflow-locks (space-separated tokens). */
// function addBodyTag(tag: string) {
//   if (!isDomAvailable()) return;
//
//   ensureStyleForTag(tag);
//
//   const body = document.body;
//   const current = (body.getAttribute(BODY_ATTR) || '').trim();
//   const tokens = new Set(current ? current.split(/\s+/) : []);
//   if (!tokens.has(tag)) {
//     tokens.add(tag);
//     body.setAttribute(BODY_ATTR, Array.from(tokens).join(' '));
//   }
// }
/** Remove the tag ApiClient from body’s data-overflow-locks. */
// function removeBodyTag(tag: string) {
//   if (!isDomAvailable()) return;
//
//   const body = document.body;
//   const current = (body.getAttribute(BODY_ATTR) || '').trim();
//   if (!current) return;
//
//   const tokens = new Set(current.split(/\s+/));
//   if (tokens.delete(tag)) {
//     const next = Array.from(tokens).join(' ');
//     if (next) body.setAttribute(BODY_ATTR, next);
//     else body.removeAttribute(BODY_ATTR);
//   }
// }
/** Register a host under a tag, and lock the body for that tag if it’s the first. */
// function addOverflowForHost(host: HTMLOverflowHostElement, tag: string) {
//   if (!host || !isDomAvailable()) return;
//
//   // Track on host
//   host.__overflowTags__ ||= new Map<string, number>();
//   const counts = host.__overflowTags__;
//   const previous = counts.get(tag) ?? 0;
//   counts.set(tag, previous + 1);
//
//   // Track globally
//   let entry = TAG_REGISTRY.get(tag);
//   if (!entry) {
//     entry = { hosts: new Set<HTMLElement>(), count: 0 };
//     TAG_REGISTRY.set(tag, entry);
//   }
//
//   if (previous === 0) {
//     entry.hosts.add(host as any);
//   }
//
//   entry.count += 1;
//
//   // If this is the first active lock for this tag, lock the body for this tag
//   if (entry.count === 1) {
//     addBodyTag(tag);
//   }
//
//   // Safety: auto-clean on detach
//   attachDisconnectCleanup(host);
// }
/** Unregister a host from a tag, and possibly unlock the body for that tag. */
// function removeOverflowForHost(host: HTMLOverflowHostElement, tag: string) {
//   if (!host || !isDomAvailable()) return;
//
//   // Update host
//   const counts = host.__overflowTags__;
//   if (!counts) return;
//
//   const current = counts.get(tag);
//   if (!current) return;
//
//   if (current > 1) {
//     counts.set(tag, current - 1);
//   } else {
//     counts.delete(tag);
//     if (counts.size === 0) {
//       delete host.__overflowTags__;
//     }
//   }
//
//   // Update global registry
//   const entry = TAG_REGISTRY.get(tag);
//   if (!entry) return;
//
//   entry.count = Math.max(0, entry.count - 1);
//
//   if (current === 1) {
//     entry.hosts.delete(host as any);
//   }
//
//   if (entry.count === 0) {
//     TAG_REGISTRY.delete(tag);
//     removeBodyTag(tag);
//     // Optional: also remove the injected style node if you prefer cleanup:
//     // const style = document.getElementById(STYLE_ID_PREFIX + tag);
//     // style?.remove();
//   }
// }
/** If a host is removed from the DOM without calling release, auto-clean its tags. */
// function attachDisconnectCleanup(host: HTMLOverflowHostElement) {
//   if (!host || !isDomAvailable() || typeof MutationObserver === 'undefined') return;
//   // Don’t attach multiple observers to the same host
//   if ((host as any).__overflowObserver__) return;
//
//   const obs = new MutationObserver(() => {
//     // If host is no longer connected, clear all tags it owned
//     if (!host.isConnected) {
//       const tagEntries = host.__overflowTags__ ? Array.from(host.__overflowTags__.entries()) : [];
//       tagEntries.forEach(([tag, count]) => {
//         for (let i = 0; i < count; i += 1) {
//           removeOverflowForHost(host, tag);
//         }
//       });
//       obs.disconnect();
//       delete (host as any).__overflowObserver__;
//     }
//   });
//
//   obs.observe(document.documentElement, { childList: true, subtree: true });
//   (host as any).__overflowObserver__ = obs;
// }
// function getOverflowHost(instance: any): HTMLOverflowHostElement | null {
//   if (!isDomAvailable()) return null;
//
//   try {
//     return getElement(instance) as HTMLOverflowHostElement;
//   } catch {
//     return null;
//   }
// }
function isDomAvailable() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}

const irDialogCss = () => `.ir-dialog__footer{display:flex;align-items:center;gap:1rem;justify-content:flex-end;width:100%}.dialog__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;min-height:50px;min-width:31rem}#dialog-overview::part(title){color:var(--wa-color-text-normal);text-align:start}`;

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const IrDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irDialogShow = index.createEvent(this, "irDialogShow");
        this.irDialogHide = index.createEvent(this, "irDialogHide");
        this.irDialogAfterShow = index.createEvent(this, "irDialogAfterShow");
        this.irDialogAfterHide = index.createEvent(this, "irDialogAfterHide");
    }
    get el() { return index.getElement(this); }
    /**
     * The dialog's label as displayed in the header.
     * You should always include a relevant label, as it is required for proper accessibility.
     * If you need to display HTML, use the label slot instead.
     */
    label;
    /**
     * Indicates whether or not the dialog is open.
     * Toggle this attribute to show and hide the dialog.
     */
    open;
    /**
     * Disables the header.
     * This will also remove the default close button.
     */
    withoutHeader;
    /**
     * When enabled, the dialog will be closed when the user clicks outside of it.
     */
    lightDismiss = true;
    /**
     * Emitted when the dialog opens.
     */
    irDialogShow;
    /**
     * Emitted when the dialog is requested to close.
     * Calling event.preventDefault() will prevent the dialog from closing.
     * You can inspect event.detail.source to see which element caused the dialog to close.
     * If the source is the dialog element itself, the user has pressed Escape or the dialog has been closed programmatically.
     * Avoid using this unless closing the dialog will result in destructive behavior such as data loss.
     */
    irDialogHide;
    /**
     * Emitted after the dialog opens and all animations are complete.
     */
    irDialogAfterShow;
    /**
     * Emitted after the dialog closes and all animations are complete.
     */
    irDialogAfterHide;
    slotState = new Map();
    slotObserver;
    SLOT_NAMES = ['label', 'header-actions', 'footer'];
    componentWillLoad() {
        this.updateSlotState();
    }
    componentDidLoad() {
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.removeSlotListeners();
    }
    async openModal() {
        this.open = true;
    }
    async closeModal() {
        this.open = false;
    }
    /**
     * Nested Web Awesome components (dropdowns, selects, tooltips) emit their own
     * composed `wa-show`/`wa-hide`, which bubble through the slot into these
     * handlers. Acting on them would close the dialog when a menu closes, so only
     * the dialog's own events count.
     */
    isOwnEvent(e) {
        return e.target === e.currentTarget;
    }
    handleWaHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.open = false;
        this.irDialogHide.emit(e.detail);
    }
    handleWaShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.open = true;
        this.irDialogShow.emit();
    }
    handleWaAfterHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.irDialogAfterHide.emit();
    }
    handleWaAfterShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.irDialogAfterShow.emit();
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    render() {
        return (index.h("wa-dialog", { key: '5b7055ba37f440bce27b2b927f4ba72703047e10', "onwa-hide": (e) => this.isOwnEvent(e) && this.handleWaHide(e), "onwa-show": (e) => this.isOwnEvent(e) && this.handleWaShow(e), "onwa-after-hide": (e) => this.isOwnEvent(e) && this.handleWaAfterHide(e), "onwa-after-show": (e) => this.isOwnEvent(e) && this.handleWaAfterShow(e), label: this.label, id: "dialog-overview", open: this.open, style: { '--width': 'var(--ir-dialog-width,31rem)' }, "without-header": this.withoutHeader, lightDismiss: this.lightDismiss, exportparts: "dialog, header, header-actions, title, close-button, close-button__base, body, footer" }, this.slotState.get('header-actions') && index.h("slot", { key: 'c05b336b68f5347968d6c9d3b477f685381e0119', name: "header-actions", slot: "header-actions" }), this.slotState.get('label') && index.h("slot", { key: '16a52cf1ac6dd6ff4323131c2f254d015e7bbc66', name: "label", slot: "label" }), index.h("slot", { key: '8e38d1689da716d89a5499d13aa257cddfa7bb83' }), this.slotState.get('footer') && index.h("slot", { key: '17a90f56c7f2b3c88427a0bdbeb5dee9bd1d4c8a', name: "footer", slot: "footer" })));
    }
};
__decorate$1([
    OverflowRelease()
], IrDialog.prototype, "handleWaHide", null);
__decorate$1([
    OverflowAdd()
], IrDialog.prototype, "handleWaShow", null);
IrDialog.style = irDialogCss();

const irDrawerCss = () => `.ir__drawer{text-align:start !important}.ir__drawer::part(header){border-bottom:1px solid var(--wa-color-surface-border);padding-bottom:calc(var(--spacing) / 2);color:var(--wa-color-text-normal);background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default))}.ir__drawer::part(title){text-align:start}.ir__drawer::part(body){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding:0;padding-inline-start:var(--ir-drawer-padding-inline-start, var(--ir-drawer-padding-left, var(--spacing)));padding-inline-end:var(--ir-drawer-padding-inline-end, var(--ir-drawer-padding-right, var(--spacing)));padding-top:var(--ir-drawer-padding-top, var(--spacing));padding-bottom:var(--ir-drawer-padding-bottom, var(--spacing))}.ir__drawer::part(footer){background-color:var(--ir-drawer-background-color, var(--wa-color-surface-default));padding-top:calc(var(--spacing) / 2);border-top:1px solid var(--wa-color-surface-border)}.ir__drawer-footer{display:flex;align-items:center;gap:1rem;width:100%}.ir__drawer-footer>*{flex:1 1 0%}.drawer__loader-container{display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%}`;

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
const IrDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.drawerShow = index.createEvent(this, "drawerShow");
        this.drawerHide = index.createEvent(this, "drawerHide");
    }
    get el() { return index.getElement(this); }
    /** Indicates whether or not the drawer is open. Toggle this attribute to show and hide the drawer. */
    open;
    /**
     * The drawer's label as displayed in the header. You should always include a relevant label, as it is required for
     * proper accessibility. If you need to display HTML, use the `label` slot instead.
     */
    label;
    /** The direction from which the drawer will open. */
    placement = 'end';
    /** Disables the header. This will also remove the default close button. */
    withoutHeader;
    /** When enabled, the drawer will be closed when the user clicks outside of it. */
    lightDismiss = true;
    slotStateVersion = 0; // Trigger re-renders when slots change
    /** Emitted when the drawer opens. */
    drawerShow;
    /**Emitted when the drawer is requesting to close. Calling event.preventDefault() will prevent the drawer from closing. You can inspect event.detail.source to see which element caused the drawer to close. If the source is the drawer element itself, the user has pressed Escape or the drawer has been closed programmatically. Avoid using this unless closing the drawer will result in destructive behavior such as data loss. */
    drawerHide;
    SLOT_NAMES = ['label', 'header-actions', 'footer'];
    // Create slot manager with state change callback
    slotManager = slot.createSlotManager(null, // Will be set in componentWillLoad
    this.SLOT_NAMES, () => {
        // Trigger re-render when slot state changes
        this.slotStateVersion++;
    });
    onDrawerShow = (event) => {
        this.emitDrawerShow(event);
    };
    onDrawerHide = (event) => {
        this.emitDrawerHide(event);
    };
    componentWillLoad() {
        // Initialize slot manager with host element
        this.slotManager = slot.createSlotManager(this.el, this.SLOT_NAMES, () => {
            this.slotStateVersion++;
        });
        this.slotManager.initialize();
    }
    componentDidLoad() {
        this.slotManager.setupListeners();
    }
    disconnectedCallback() {
        this.slotManager.destroy();
    }
    emitDrawerShow(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.drawerShow.emit();
    }
    emitDrawerHide(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!e.detail) {
            return;
        }
        this.drawerHide.emit(e.detail);
    }
    render() {
        return (index.h("wa-drawer", { key: '1b90d6fe7d6ca947b8445600f47c89f0664eaa45', id: this.el.id, "onwa-show": this.onDrawerShow, "onwa-hide": this.onDrawerHide, class: "ir__drawer", style: { '--size': 'var(--ir-drawer-width,40rem)' }, open: this.open, label: this.label, placement: this.placement, withoutHeader: this.withoutHeader, lightDismiss: this.lightDismiss, exportparts: "dialog, header, header-actions, title, close-button, close-button__base, body, footer" }, this.slotManager.hasSlot('header-actions') && index.h("slot", { key: 'c011977926e34ffd06459d0a4670ee92566bdde0', name: "header-actions", slot: "header-actions" }), this.slotManager.hasSlot('label') && index.h("slot", { key: 'ed7f70a9db9d8005d7200f66bd90660b53b2faf8', name: "label", slot: "label" }), index.h("slot", { key: 'e7006588132571f4b78517cb769acbf17e39a813' }), this.slotManager.hasSlot('footer') && index.h("slot", { key: '61ec05a1cee5731029d83d373731322ae4096d4d', name: "footer", slot: "footer" })));
    }
};
__decorate([
    OverflowAdd()
], IrDrawer.prototype, "emitDrawerShow", null);
__decorate([
    OverflowRelease()
], IrDrawer.prototype, "emitDrawerHide", null);
IrDrawer.style = irDrawerCss();

const irEmptyStateCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:flex;flex-direction:column;gap:var(--wa-space-m);align-items:center}::slotted([slot='icon']){font-size:2rem}.icon_container{display:flex;align-items:center;justify-content:center;width:3.5rem;height:3.5rem;border-radius:0.875rem;background:var(--wa-color-brand-fill-quiet, #eff6ff);color:var(--wa-color-brand-fill-loud, #2563eb);font-size:1.5rem;margin-bottom:0.5rem}.message{margin:0;font-size:1rem;font-weight:600;color:var(--wa-color-text-normal, #111827)}.message.--secondary{font-weight:400;color:var(--wa-color-neutral-400, #a1a1aa)}`;

const IrEmptyState = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    message;
    showIcon = true;
    render() {
        return (index.h(index.Host, { key: '2f08116f15b9f659c8cc4c1b11e22a66204da939' }, index.h("slot", { key: 'dc80de77b5c2f5aaaffc0b7df6ce962c0c2ab2b8', name: "icon" }, this.showIcon && (index.h("div", { key: 'a2d605c3ab87038b2de43b2c301490d0f29f07ef', class: 'icon_container' }, index.h("wa-icon", { key: 'd794b0af8029a1c8f5ad2cd01102b4579b0f5088', name: "ban", style: { transform: 'rotate(90deg)' } })))), index.h("p", { key: '6e16cb2ba8766a703dda9fc02777bbaad07a4974', part: "message", class: `message ${this.showIcon ? '' : '--secondary'}` }, this.message || t.t('Lcz_NoRecordsFound', { fallback: 'No records found' })), index.h("slot", { key: '993e961edb461308538bb94db6db42af3d582ed0' })));
    }
};
IrEmptyState.style = irEmptyStateCss();

const irInputCss = () => `wa-input[aria-invalid='true']::part(base),wa-textarea[aria-invalid='true']::part(base),wa-select[aria-invalid='true']::part(combobox){border-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));outline-color:var(--ir-color-border-error, var(--wa-color-danger-border-loud));border-top-width:var(--error-border-width) !important;border-inline-start-width:var(--error-border-width) !important;border-inline-end-width:var(--error-border-width) !important;border-bottom-width:var(--error-border-width) !important}:host{display:block}`;

const IrInput = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "text-change");
        this.inputBlur = index.createEvent(this, "input-blur");
        this.inputFocus = index.createEvent(this, "inputFocus");
        this.inputCleared = index.createEvent(this, "inputCleared");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    internals;
    get el() { return index.getElement(this); }
    name;
    /** The value of the input. */
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
     * Custom CSS classes applied to the inner `<wa-input>` element.
     *
     * You can also target the exposed parts `::part(input)` and `::part(base)`
     * for deeper styling of the native input and container.
     */
    inputClass;
    textChange;
    inputBlur;
    inputFocus;
    inputCleared;
    isValid = true;
    slotState = new Map();
    _mask;
    inputRef;
    animationFrame;
    slotObserver;
    SLOT_NAMES = ['label', 'start', 'end', 'clear-icon', 'hide-password-icon', 'show-password-icon', 'hint'];
    componentWillLoad() {
        if (this.mask === 'price' && typeof this.mask === 'string') {
            this.returnMaskedValue = true;
        }
        this.updateSlotState();
    }
    componentDidLoad() {
        if (this.disabled) {
            this.inputRef.disabled = this.disabled;
        }
        // Find the closest form element (if any)
        // track slotted prefix to compute width
        this.initializeMask();
        this.setupSlotListeners();
    }
    disconnectedCallback() {
        this.destroyMask();
        this.removeSlotListeners();
    }
    handleDisabledChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.inputRef.disabled = newValue;
        }
    }
    handleMaskPropsChange() {
        if (!this.inputRef)
            return;
        const hasMask = Boolean(this.resolveMask());
        if (!hasMask) {
            this.destroyMask();
            return;
        }
        this.rebuildMask();
    }
    handleAriaInvalidChange(e) {
        this.isValid = !JSON.parse(e);
    }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            if (this._mask && this.returnMaskedValue && this._mask.value !== newValue) {
                this._mask.value = newValue;
                this._mask.updateValue();
            }
        }
    }
    handleInput = (nextValue) => {
        if (nextValue === this.value) {
            return;
        }
        if (!this.mask) {
            this.value = nextValue ?? '';
        }
        this.internals.setFormValue(nextValue ?? '');
        this.textChange.emit(nextValue ?? '');
    };
    async initializeMask() {
        if (!this.inputRef)
            return;
        const maskOpts = this.buildMaskOptions();
        if (!maskOpts)
            return;
        await customElements.whenDefined('wa-input'); // optional, but explicit
        await this.inputRef.updateComplete;
        const nativeInput = this.inputRef.input;
        if (!nativeInput)
            return;
        this._mask = index$1.IMask(nativeInput, maskOpts);
        if (this.value) {
            if (this.returnMaskedValue) {
                this._mask.unmaskedValue = this.value;
            }
            else {
                this._mask.value = this.value;
            }
        }
        this._mask.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this._mask.unmaskedValue === '';
            const value = isEmpty ? '' : this.returnMaskedValue ? this._mask.unmaskedValue : this._mask.value;
            this.handleInput(value);
        });
    }
    setupSlotListeners() {
        // Listen to slotchange events on the host element
        this.el.addEventListener('slotchange', this.handleSlotChange);
        // Also use MutationObserver as a fallback for browsers that don't fire slotchange reliably
        this.slotObserver = new MutationObserver(this.handleSlotChange);
        this.slotObserver.observe(this.el, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['slot'],
        });
    }
    removeSlotListeners() {
        this.el.removeEventListener('slotchange', this.handleSlotChange);
        this.slotObserver?.disconnect();
    }
    handleSlotChange = () => {
        this.updateSlotState();
    };
    updateSlotState() {
        const newState = new Map();
        this.SLOT_NAMES.forEach(name => {
            newState.set(name, this.hasSlot(name));
        });
        this.slotState = newState;
    }
    rebuildMask() {
        this.destroyMask();
        this.initializeMask();
    }
    destroyMask() {
        this._mask?.destroy();
        this._mask = undefined;
        this.clearAnimationFrame();
    }
    clearAnimationFrame() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = undefined;
        }
    }
    buildMaskOptions() {
        const resolvedMask = this.resolveMask();
        if (!resolvedMask)
            return;
        const maskOpts = typeof resolvedMask === 'object' && resolvedMask !== null && !Array.isArray(resolvedMask) ? { ...resolvedMask } : { mask: resolvedMask };
        if (this.min !== undefined) {
            maskOpts.min = this.min;
        }
        if (this.max !== undefined) {
            maskOpts.max = this.max;
        }
        return maskOpts;
    }
    resolveMask() {
        if (!this.mask)
            return;
        if (typeof this.mask === 'string') {
            return masks.masks[this.mask];
        }
        return this.mask;
    }
    handleChange = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        if (!this.mask)
            this.handleInput(e.target.value);
    };
    handleClear = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputCleared.emit();
        if (this._mask) {
            this._mask.value = '';
        }
        this.handleInput('');
    };
    handleBlur = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputBlur.emit();
    };
    handleFocus = (e) => {
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.inputFocus.emit();
    };
    hasSlot(name) {
        return !!this.el.querySelector(`[slot="${name}"]`);
    }
    async focusInput() {
        this.inputRef?.focus();
    }
    async blurInput() {
        this.inputRef?.blur();
    }
    /**
     * Returns the native `<input>` element nested inside `wa-input`.
     * Needed by composite controls (e.g. `ir-autocomplete`) to wire ARIA
     * combobox attributes and element reflection onto the real input.
     */
    async getNativeInput() {
        if (!this.inputRef)
            return undefined;
        await this.inputRef.updateComplete;
        return this.inputRef.input;
    }
    render() {
        let displayValue = this.value;
        if (this._mask && this.returnMaskedValue) {
            // IMask holds the formatted string (e.g., "1,000.00")
            // this.value holds the raw number (e.g., "1000")
            // We must pass "1,000.00" to wa-input to avoid the overwrite warning
            displayValue = this._mask.value;
        }
        return (index.h(index.Host, { key: '4b54a530d7e23cee4f0de50402be6e7193a6e7db' }, index.h("wa-input", { key: 'f932bb664f82db343da69611ea7e9fd332750b5c', part: "wa-input", type: this.type, name: this.name, value: displayValue, ref: el => (this.inputRef = el), defaultValue: this.defaultValue, size: this.size, appearance: this.appearance, pill: this.pill, "aria-invalid": String(!this.isValid), label: this.label, hint: this.hint, withClear: this.withClear, placeholder: this.placeholder, readonly: this.readonly, passwordToggle: this.passwordToggle, passwordVisible: this.passwordVisible, withoutSpinButtons: this.withoutSpinButtons, form: this.form, required: this.required, pattern: this.pattern, minlength: this.minlength, maxlength: this.maxlength, min: this.min, max: this.max, step: this.step, class: this.inputClass, autocapitalize: this.autocapitalize, autocorrect: this.autocorrect, autocomplete: this.autocomplete, autofocus: this.autofocus, enterkeyhint: this.enterkeyhint, spellcheck: this.spellcheck, inputmode: this.inputmode, withLabel: this.withLabel, withHint: this.withHint, oninput: this.handleChange, "onwa-clear": this.handleClear, onblur: this.handleBlur, onfocus: this.handleFocus, exportparts: "base, hint, label, input, start, end, clear-button, password-toggle-button" }, this.slotState.get('label') && index.h("slot", { key: '00580cb9de598820b5f75041bda3c449cbf0e597', name: "label", slot: "label" }), this.slotState.get('start') && index.h("slot", { key: '5eee30d6dd57ae208f7052a84bea5583693a29b7', name: "start", slot: "start" }), this.slotState.get('end') && index.h("slot", { key: 'a7d2b4f02731a5c99f45071143e0313502d47262', name: "end", slot: "end" }), this.slotState.get('clear-icon') && index.h("slot", { key: '4535e7a6f63006f75f1b50216c15f663f13d24e7', name: "clear-icon", slot: "clear-icon" }), this.slotState.get('hide-password-icon') && index.h("slot", { key: 'cb20f06ab137a3f1bb53d596da13711ca093547c', name: "hide-password-icon", slot: "hide-password-icon" }), this.slotState.get('show-password-icon') && index.h("slot", { key: '14ff37aa3eb13dc0e0c8d4c26495a9b4c292301f', name: "show-password-icon", slot: "show-password-icon" }), this.slotState.get('hint') && index.h("slot", { key: '37181d7e76166ac9f94f1e93d16b7f31ec96e862', name: "hint", slot: "hint" }))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "disabled": [{
                "handleDisabledChange": 0
            }],
        "mask": [{
                "handleMaskPropsChange": 0
            }],
        "min": [{
                "handleMaskPropsChange": 0
            }],
        "max": [{
                "handleMaskPropsChange": 0
            }],
        "aria-invalid": [{
                "handleAriaInvalidChange": 0
            }],
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};
IrInput.style = irInputCss();

class InterceptorError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.name = 'InterceptorError';
        this.code = code;
        // Ensure the prototype chain is correct (important for `instanceof` checks)
        Object.setPrototypeOf(this, InterceptorError.prototype);
    }
}

const irInterceptorCss = () => `.page-loader.sc-ir-interceptor{width:1.25rem;height:1.25rem;border:2.5px solid #3f3f3f;border-bottom-color:transparent;border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}.loaderContainer.sc-ir-interceptor{padding:20px;display:flex;align-items:center;justify-content:center;border-radius:5px}.loadingScreenContainer.sc-ir-interceptor{position:fixed;top:0;inset-inline-start:0;height:100vh;width:100vw;z-index:100000;background:var(--ir-color-loader, rgba(255, 255, 255, 0.2));backdrop-filter:blur(5px);pointer-events:all;display:flex;align-items:center;justify-content:center}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`;

const IrInterceptor = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toast = index.createEvent(this, "toast");
    }
    /**
     * List of endpoint paths that should trigger loader logic and OTP handling.
     */
    handledEndpoints = ['/Get_Exposed_Calendar', '/ReAllocate_Exposed_Room', '/Get_Exposed_Bookings', '/UnBlock_Exposed_Unit'];
    /**
     * List of endpoints for which to suppress toast messages.
     */
    suppressToastEndpoints = [];
    /**
     * Indicates whether the loader is visible.
     */
    isShown = false;
    /**
     * Global loading indicator toggle.
     */
    isLoading = false;
    /**
     * Indicates if the intercepted request involves unassigned units.
     */
    isUnassignedUnit = false;
    /**
     * Count of `/Get_Exposed_Calendar` calls in progress.
     */
    endpointsCount = 0;
    /**
     * Identifier of the endpoint that manually disabled page loader.
     */
    isPageLoadingStopped = null;
    /**
     * Controls visibility of the OTP modal.
     */
    showModal;
    /**
     * Request path (used in OTP handling).
     */
    requestUrl;
    /**
     * The OTP endpoint path.
     */
    baseOTPUrl;
    /**
     * Email for OTP prompt.
     */
    email;
    /**
     * Emits a toast notification (`type`, `title`, `description`, `position`).
     */
    toast;
    otpModal;
    pendingConfig;
    pendingResolve;
    pendingReject;
    response;
    handleStopPageLoading(e) {
        this.isLoading = false;
        this.isPageLoadingStopped = e.detail;
    }
    componentWillLoad() {
        this.setupAxiosInterceptors();
    }
    /**
     * Sets up Axios request and response interceptors.
     */
    setupAxiosInterceptors() {
        axios.axios.interceptors.request.use(this.handleRequest.bind(this), this.handleError.bind(this));
        axios.axios.interceptors.response.use(this.handleResponse.bind(this), this.handleError.bind(this));
    }
    /**
     * Removes query params from URL for consistent endpoint matching.
     */
    extractEndpoint(url) {
        return url.split('?')[0];
    }
    /**
     * Returns true if the given endpoint is listed as "handled".
     */
    isHandledEndpoint(url) {
        return this.handledEndpoints.includes(url);
    }
    /**
     * Handles outbound Axios requests.
     * - Triggers global loader for certain endpoints
     * - Tracks `/Get_Exposed_Calendar` calls separately
     */
    handleRequest(config) {
        const extractedUrl = this.extractEndpoint(config.url);
        irInterceptor_store.interceptor_requests[extractedUrl] = 'pending';
        config.params = config.params || {};
        // if (this.ticket) {
        //   config.params.Ticket = this.ticket;
        // }
        if (this.isHandledEndpoint(extractedUrl) && this.isPageLoadingStopped !== extractedUrl) {
            if (extractedUrl !== '/Get_Exposed_Calendar') {
                this.isLoading = true;
            }
            else {
                if (this.endpointsCount > 0) {
                    this.isLoading = true;
                }
            }
        }
        if (extractedUrl === '/Get_Exposed_Calendar') {
            this.endpointsCount = this.endpointsCount + 1;
        }
        return config;
    }
    /**
     * Handles inbound Axios responses:
     * - Resets loader
     * - Handles OTP flows and exception messages
     */
    async handleResponse(response) {
        const extractedUrl = this.extractEndpoint(response.config.url);
        if (this.isHandledEndpoint(extractedUrl)) {
            this.isLoading = false;
            this.isPageLoadingStopped = null;
        }
        irInterceptor_store.interceptor_requests[extractedUrl] = 'done';
        if (extractedUrl === '/Validate_Exposed_OTP') {
            return response;
        }
        if (response.data.ExceptionCode === 'OTP') {
            return this.handleOtpResponse({ response, extractedUrl });
        }
        if (response.data.ExceptionMsg?.trim()) {
            this.handleResponseExceptions({ response, extractedUrl });
        }
        return response;
    }
    /**
     * Handles and throws known API exception messages.
     */
    handleResponseExceptions({ response, extractedUrl }) {
        this.handleError(response.data.ExceptionMsg, extractedUrl, response.data.ExceptionCode);
        throw new InterceptorError(response.data.ExceptionMsg, response.data.ExceptionCode);
    }
    /**
     * Handles OTP-required API responses:
     * - Shows OTP modal
     * - Stores request context
     * - Defers resolution to OTP modal
     */
    handleOtpResponse({ extractedUrl, response }) {
        this.showModal = true;
        this.email = response.data.ExceptionMsg;
        const name = extractedUrl.slice(1);
        this.baseOTPUrl = name;
        if (name === 'Check_OTP_Necessity') {
            let methodName;
            try {
                const body = typeof response.config.data === 'string' ? JSON.parse(response.config.data) : response.config.data;
                methodName = body.METHOD_NAME;
            }
            catch (e) {
                console.error('Failed to parse request body for METHOD_NAME', e);
                methodName = name; // fallback
            }
            this.requestUrl = methodName;
        }
        else {
            this.requestUrl = name;
        }
        this.pendingConfig = response.config;
        this.response = response;
        return new Promise((resolve, reject) => {
            this.pendingResolve = resolve;
            this.pendingReject = reject;
            setTimeout(() => {
                this.otpModal?.openModal();
            }, 10);
        });
    }
    /**
     * Displays error toasts unless the endpoint is configured to suppress them.
     */
    handleError(error, url, code) {
        const shouldSuppressToast = this.suppressToastEndpoints.includes(url);
        if (!shouldSuppressToast || (shouldSuppressToast && !code)) {
            this.toast.emit({
                type: 'error',
                title: error,
                description: '',
                position: 'top-right',
            });
        }
        return Promise.reject(error);
    }
    /**
     * Handles the OTP modal completion.
     * Retries the request or cancels based on user action.
     */
    async handleOtpFinished(ev) {
        if (!this.pendingConfig || !this.pendingResolve || !this.pendingReject) {
            return;
        }
        const { otp, type } = ev.detail;
        if (type === 'cancel') {
            const cancelResp = {
                config: this.pendingConfig,
                data: { cancelled: true, baseOTPUrl: this.baseOTPUrl },
                status: 0,
                statusText: 'OTP Cancelled',
                headers: {},
                request: {},
            };
            this.pendingResolve(cancelResp);
        }
        else if (type === 'success') {
            if (!otp) {
                this.pendingReject(new Error('OTP cancelled by user'));
            }
            else if (this.baseOTPUrl === 'Check_OTP_Necessity') {
                // don't resend, just resolve with the original response
                this.pendingResolve(this.response);
            }
            else {
                try {
                    const retryConfig = {
                        ...this.pendingConfig,
                        data: typeof this.pendingConfig.data === 'string' ? JSON.parse(this.pendingConfig.data) : this.pendingConfig.data || {},
                    };
                    const resp = await axios.axios.request(retryConfig);
                    this.pendingResolve(resp);
                }
                catch (err) {
                    this.pendingReject(err);
                }
            }
        }
        // common clean-up
        this.pendingConfig = undefined;
        this.pendingResolve = undefined;
        this.pendingReject = undefined;
        this.showModal = false;
        this.baseOTPUrl = null;
    }
    render() {
        return (index.h(index.Host, { key: 'ce352bfd02acaee1675be6e72b1648a5875b2ff8' }, this.isLoading && !this.isPageLoadingStopped && (index.h("div", { key: 'b7715d9d06d35e47158353453dea9b78ddc61ea1', class: "loadingScreenContainer" }, index.h("div", { key: 'a92964e3dbccab36f357503c0b1242d03d8f1397', class: "loaderContainer" }, index.h("wa-spinner", { key: 'ae4ee8074b6c74fe8f5d55cd7be9379d47d9b38a', style: { 'fontSize': '2.5rem', '--track-width': '3.5px' } })))), this.showModal && (index.h("ir-otp-modal", { key: '2351066e96e8b9bdd9413c5e2f302d1e296f9b23', email: this.email, baseOTPUrl: this.baseOTPUrl, requestUrl: this.requestUrl, ref: el => (this.otpModal = el), onOtpFinished: this.handleOtpFinished.bind(this) }))));
    }
};
IrInterceptor.style = irInterceptorCss();

const irOtpCss = () => `.otp-input-wrapper{display:flex;gap:0.5rem;justify-content:space-evenly}.otp-digit{--otp-size:3rem;width:var(--otp-size) !important;height:var(--otp-size) !important;padding:0 !important;font-size:24px !important;font-weight:500 !important;text-align:center !important;padding:0 var(--wa-form-control-padding-inline) !important;color:var(--wa-form-control-value-color) !important;font-size:var(--wa-form-control-value-size) !important;font-family:inherit !important;font-weight:var(--wa-form-control-value-font-weight) !important;line-height:var(--wa-form-control-value-line-height) !important;vertical-align:middle !important;background-color:var(--wa-form-control-background-color) !important;border-color:var(--wa-form-control-border-color) !important;border-style:var(--wa-form-control-border-style) !important;border-width:var(--wa-form-control-border-width) !important;border-radius:var(--wa-form-control-border-radius) !important;transition:background-color var(--wa-transition-normal),     border-color var(--wa-transition-normal),     outline-color var(--wa-transition-fast) !important;transition-timing-function:var(--wa-transition-easing) !important;outline:var(--wa-focus-ring-style) var(--wa-focus-ring-width) transparent !important;outline-offset:var(--wa-focus-ring-offset) !important;cursor:text !important;box-sizing:border-box}.otp-digit:focus-visible{outline-color:var(--wa-color-focus)}.otp-digit:disabled{opacity:0.5;cursor:not-allowed}input[type='number']::-webkit-inner-spin-button,input[type='number']::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}input[type='number']{-moz-appearance:textfield}@media (max-width: 480px){.otp-digit{width:35px;height:45px;font-size:20px}.otp-input-wrapper{gap:6px}}@media (max-width: 360px){.otp-digit{width:30px;height:40px;font-size:18px}.otp-input-wrapper{gap:4px}}`;

const IrOtp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.otpChange = index.createEvent(this, "otpChange");
        this.otpComplete = index.createEvent(this, "otpComplete");
    }
    /**
     * The length of the OTP code
     */
    length = 6;
    /**
     * The default OTP code
     */
    defaultValue;
    /**
     * Whether the input is disabled
     */
    disabled = false;
    /**
     * Placeholder character to display
     */
    placeholder = '';
    /**
     * Input type - can be 'text', 'password', 'number', or 'tel'
     */
    type = 'number';
    /**
     * Auto focus on the first input when component loads
     */
    autoFocus = true;
    /**
     * Whether to mask the input (show dots instead of text)
     */
    secure = false;
    /**
     * Allow only numbers (0-9) as input
     */
    numbersOnly = false;
    /**
     * Event emitted when the OTP value changes
     */
    otpChange;
    /**
     * Event emitted when the OTP is complete
     */
    otpComplete;
    /**
     * Current OTP value as an array of characters
     */
    otpValues = [];
    /**
     * Reference to input elements
     */
    inputRefs = [];
    /**
     * Initialize the component
     */
    componentWillLoad() {
        this.otpValues = Array(this.length).fill('');
        if (this.defaultValue) {
            this.setValue(this.defaultValue);
        }
    }
    /**
     * Focus the first input after component renders
     */
    componentDidLoad() {
        if (this.autoFocus && this.inputRefs[0]) {
            setTimeout(() => {
                this.inputRefs[0].focus();
            }, 0);
        }
    }
    /**
     * Watch for length changes and update the OTP values array
     */
    handleLengthChange(newLength) {
        if (newLength < 1)
            return;
        const oldLength = this.otpValues.length;
        if (newLength > oldLength) {
            // Add empty slots
            this.otpValues = [...this.otpValues, ...Array(newLength - oldLength).fill('')];
        }
        else if (newLength < oldLength) {
            // Remove extra slots
            this.otpValues = this.otpValues.slice(0, newLength);
        }
        this.emitChanges();
    }
    /**
     * Update the current OTP value at the specified index
     */
    handleInput = (event, index) => {
        const input = event.target;
        let value = input.value;
        // For number input type, restrict to digits only
        if (this.numbersOnly) {
            value = value.replace(/[^0-9]/g, '');
        }
        // Take only the last character if someone enters multiple
        if (value.length > 1) {
            value = value.slice(-1);
            input.value = value;
        }
        this.otpValues[index] = value;
        this.emitChanges();
        // Move to next input if this one is filled
        if (value && index < this.length - 1) {
            this.inputRefs[index + 1].focus();
        }
    };
    /**
     * Handle keyboard navigation
     */
    handleKeyDown = (event, index) => {
        switch (event.key) {
            case 'Backspace':
                if (!this.otpValues[index] && index > 0) {
                    // If current field is empty and backspace is pressed, go to previous field
                    this.inputRefs[index - 1].focus();
                    // Prevent default to avoid browser navigation
                    event.preventDefault();
                }
                break;
            case 'Delete':
                // Clear current input on delete
                this.otpValues[index] = '';
                this.emitChanges();
                break;
            case 'ArrowLeft':
                // Move to previous input on left arrow
                if (index > 0) {
                    this.inputRefs[index - 1].focus();
                    event.preventDefault();
                }
                break;
            case 'ArrowRight':
                // Move to next input on right arrow
                if (index < this.length - 1) {
                    this.inputRefs[index + 1].focus();
                    event.preventDefault();
                }
                break;
            case 'Home':
                // Move to first input
                this.inputRefs[0].focus();
                event.preventDefault();
                break;
            case 'End':
                // Move to last input
                this.inputRefs[this.length - 1].focus();
                event.preventDefault();
                break;
        }
    };
    /**
     * Handle paste event to populate the OTP fields
     */
    handlePaste = (event, index) => {
        event.preventDefault();
        const pastedData = event.clipboardData?.getData('text') || '';
        // If numbersOnly is enabled, filter non-number characters
        const filteredData = this.numbersOnly ? pastedData.replace(/[^0-9]/g, '') : pastedData;
        // Fill OTP values with pasted data
        for (let i = 0; i < Math.min(filteredData.length, this.length - index); i++) {
            this.otpValues[index + i] = filteredData[i];
        }
        // Update inputs with new values
        this.inputRefs.forEach((input, idx) => {
            input.value = this.otpValues[idx] || '';
        });
        // Focus on the next empty input or the last one
        const nextEmptyIndex = this.otpValues.findIndex(val => !val);
        if (nextEmptyIndex !== -1 && nextEmptyIndex < this.length) {
            this.inputRefs[nextEmptyIndex].focus();
        }
        else {
            this.inputRefs[this.length - 1].focus();
        }
        this.emitChanges();
    };
    /**
     * Focus handler to select all text when focused
     */
    handleFocus = (event) => {
        const input = event.target;
        if (input.value) {
            setTimeout(() => input.select(), 0);
        }
    };
    /**
     * Helper method to emit change events
     */
    emitChanges() {
        const otpValue = this.otpValues.join('');
        this.otpChange.emit(otpValue);
        // If all fields are filled, trigger the complete event
        if (this.otpValues.every(val => val !== '') && this.otpValues.length === this.length) {
            this.otpComplete.emit(otpValue);
        }
    }
    /**
     * Manually clear all inputs
     */
    clear() {
        this.otpValues = Array(this.length).fill('');
        this.inputRefs.forEach(input => {
            input.value = '';
        });
        this.emitChanges();
        // Focus the first input after clearing
        if (this.inputRefs[0]) {
            this.inputRefs[0].focus();
        }
    }
    /**
     * Set OTP values programmatically
     */
    setValue(value) {
        const valueArray = value.split('');
        for (let i = 0; i < this.length; i++) {
            this.otpValues[i] = i < valueArray.length ? valueArray[i] : '';
        }
        // Update the actual input elements
        this.inputRefs.forEach((input, idx) => {
            input.value = this.otpValues[idx] || '';
        });
        this.emitChanges();
    }
    render() {
        return (index.h(index.Host, { key: '0dee13cf7f213b2eb1a308ef83c5da7b6e530dbb', class: "otp-input-container" }, index.h("div", { key: '8c8d1fbc75314638695172ff5b3806a9729d52c9', class: "otp-input-wrapper" }, Array(this.length)
            .fill(null)
            .map((_, index$1) => (index.h("input", { ref: el => (this.inputRefs[index$1] = el), type: this.type, inputmode: this.numbersOnly ? 'numeric' : 'text', class: "otp-digit", maxlength: "1", placeholder: this.placeholder, disabled: this.disabled, autocomplete: "one-time-code", value: this.otpValues[index$1], onInput: e => this.handleInput(e, index$1), onKeyDown: e => this.handleKeyDown(e, index$1), onPaste: e => this.handlePaste(e, index$1), onFocus: this.handleFocus, "aria-label": t.t('Lcz_DigitOfLength', { fallback: 'Digit %1 of %2', params: [number.formatCount(index$1 + 1), number.formatCount(this.length)] }) }))))));
    }
    static get watchers() { return {
        "length": [{
                "handleLengthChange": 0
            }]
    }; }
};
IrOtp.style = irOtpCss();

const irOtpModalCss = () => `:host{display:block;box-sizing:border-box}:host(*){box-sizing:border-box}.otp-modal{--ir-dialog-width:fit-content}.otp-modal-header{display:flex;justify-content:space-between;padding-bottom:1rem;border-bottom:0}.otp-modal-title{margin:0;font-family:var(--wa-font-family-heading) !important;font-weight:var(--wa-font-weight-heading) !important;line-height:var(--wa-line-height-condensed) !important;text-wrap:balance !important;font-size:var(--wa-font-size-l)}.otp-modal-body{display:flex;flex-direction:column;max-height:100%}.verification-message{font-size:var(--wa-font-size-m);max-width:90%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin:0;text-align:start;padding-bottom:1rem}.otp-error{margin:0.25rem 0 0;padding:0;font-size:0.875em;color:var(--wa-color-danger-fill-loud)}.otp-resend-timer{margin-top:0.5rem;font-size:0.875em}.otp-resend-btn{margin-top:0.5rem;font-size:var(--wa-font-size-s)}.otp-modal-footer{display:flex;gap:0.5rem;width:100%;border-top:0;flex-direction:row;align-items:center;justify-content:flex-end}.modal-loading-container{display:flex;align-items:center;justify-content:center;height:250px;width:80vw}@media (min-width: 768px){.modal-loading-container{width:380px}.verification-message{max-width:350px}}`;

const IrOtpModal = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.otpFinished = index.createEvent(this, "otpFinished");
    }
    language = 'en';
    /** Number of seconds to wait before allowing OTP resend */
    resendTimer = 60;
    /** URL or endpoint used to validate the OTP */
    requestUrl;
    /** URL or endpoint used to validate the OTP */
    baseOTPUrl;
    /** Whether the resend option should be visible */
    showResend = true;
    /** User's email address to display in the modal and send the OTP to */
    email;
    /** Number of digits the OTP should have */
    otpLength = 6;
    /** ticket for verifying and resending the verification code */
    ticket;
    otp = '';
    error = '';
    isLoading = false;
    timer = 60;
    open = false;
    get el() { return index.getElement(this); }
    dialogRef;
    timerInterval;
    systemService = new system_service.SystemService();
    apiClientService = new ApiClient.ApiClient();
    otpVerificationSchema = types.objectType({ email: types.stringType().nonempty(), requestUrl: types.stringType().nonempty(), otp: types.stringType().length(this.otpLength) });
    /** Emits the final OTP (or empty on cancel) */
    otpFinished;
    isInitializing;
    componentWillLoad() {
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
        }
        this.fetchLocale();
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.apiClientService.setApiClient(newValue);
            this.fetchLocale();
        }
    }
    /** Open & reset everything */
    async openModal() {
        this.resetState();
        this.open = true;
        if (this.showResend)
            this.startTimer();
        await this.focusFirstInput();
    }
    /** Hide & clear timer */
    async closeModal() {
        this.open = false;
        this.otp = null;
        this.clearTimer();
    }
    /**
     * Keeps the dialog non-dismissible: Escape / outside-click / programmatic
     * hide are ignored, so the flow can only be ended via the Cancel/Verify
     * buttons (which call closeModal explicitly).
     */
    handleDialogHide(e) {
        e.preventDefault();
        // ir-dialog has already flipped its internal open state to false; since our
        // `open` prop is unchanged Stencil won't re-push it, so re-open imperatively.
        if (this.open) {
            this.dialogRef?.openModal();
        }
    }
    async fetchLocale() {
        if (!this.apiClientService.getToken()) {
            return;
        }
        this.isInitializing = true;
        await locale_controller.LocaleController.load({ language: this.language, tables: locale_controller.SCREEN_TABLES.otpModal });
        this.isInitializing = false;
    }
    resetState() {
        this.otp = '';
        this.error = '';
        this.isLoading = false;
        this.timer = 60;
        this.clearTimer();
    }
    startTimer() {
        this.clearTimer();
        this.timerInterval = window.setInterval(() => {
            if (this.timer > 0) {
                this.timer--;
            }
            else {
                this.clearTimer();
            }
        }, 1000);
    }
    clearTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }
    async focusFirstInput() {
        await new Promise(r => setTimeout(r, 50));
        const first = this.el.querySelector('input');
        first && first.focus();
    }
    handleOtpComplete = (e) => {
        this.error = '';
        this.otp = e.detail;
    };
    async verifyOtp() {
        if (this.otp.length < this.otpLength)
            return;
        this.isLoading = true;
        this.otpVerificationSchema.parse({
            otp: this.otp,
            requestUrl: this.requestUrl,
            email: this.email,
        });
        try {
            await this.systemService.validateOTP({ METHOD_NAME: this.requestUrl, OTP: this.otp });
            this.otpFinished.emit({ otp: this.otp, type: 'success' });
            this.closeModal();
        }
        catch (err) {
            this.error = t.t('Lcz_VerificationFailedTryAgain', { fallback: 'Verification failed. Please try again.' });
        }
        finally {
            this.isLoading = false;
        }
    }
    async resendOtp() {
        if (this.timer > 0)
            return;
        // Resend otp
        try {
            await this.systemService.resendOTP({ METHOD_NAME: this.requestUrl });
            this.timer = 60;
            this.startTimer();
        }
        catch (error) {
            console.log(error);
        }
    }
    handleCancelClicked() {
        if (this.baseOTPUrl === 'Check_OTP_Necessity') {
            this.closeModal();
            this.otpFinished.emit({
                otp: null,
                type: 'cancelled',
            });
            return;
        }
        window.location.reload();
    }
    disconnectedCallback() {
        this.clearTimer();
    }
    render() {
        return (index.h(index.Host, { key: 'efc7e6a26365b3350b4c47b9bd521da1e1b397cf' }, index.h("ir-dialog", { key: 'c27e2f4efed28af6b433541cd3e17839a5204d8f', class: "otp-modal", ref: el => (this.dialogRef = el), open: this.open, withoutHeader: true, lightDismiss: false, onIrDialogHide: e => this.handleDialogHide(e) }, this.isInitializing || !locales_store.locales.entries ? (index.h("div", { class: "modal-loading-container" }, index.h("ir-spinner", null))) : (index.h(index.Fragment, null, index.h("header", { class: "otp-modal-header" }, index.h("h5", { class: "otp-modal-title" }, t.t('Lcz_VerifyYourIdentity'))), index.h("section", { class: "otp-modal-body" }, index.h("p", { class: "verification-message" }, t.t('Lcz_WeSentYuoVerificationCode'), " ", this.email), index.h("ir-otp", { autoFocus: true, length: this.otpLength, defaultValue: this.otp, onOtpComplete: this.handleOtpComplete }), this.error && index.h("p", { class: "otp-error" }, this.error), this.showResend && (index.h(index.Fragment, null, this.timer > 0 ? (index.h("p", { class: "otp-resend-timer" }, t.t('Lcz_ResendCode'), " 00:", String(this.timer).padStart(2, '0'))) : (index.h("ir-custom-button", { class: "otp-resend-btn", link: true, size: "s", onClickHandler: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.resendOtp();
            } }, t.t('Lcz_ResendCodeAction', { fallback: 'Didn’t receive code? Resend' })))))), index.h("div", { slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { variant: "neutral", appearance: "filled", size: "m", onClickHandler: () => this.handleCancelClicked() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { variant: "brand", size: "m", loading: this.isLoading, disabled: this.otp?.length < this.otpLength || this.isLoading, onClickHandler: () => this.verifyOtp() }, t.t('Lcz_VerifyNow'))))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrOtpModal.style = irOtpModalCss();

const irPageCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;height:100%;color:var(--wa-color-text-normal);font-size:var(--wa-font-size-m)}.page-title{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-xl)}.page__description{font-size:var(--wa-font-size-m)}.ir-page__container{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem);padding:var(--wa-space-l);position:relative;height:100%;width:100%;max-width:none;margin:0}.tax-page__header{display:flex;gap:var(--wa-space-l, 1.5rem);flex-wrap:wrap;align-items:center;margin-bottom:0.5rem;justify-content:space-between}.page-body{display:flex;flex-direction:column;gap:var(--wa-space-l, 1.5rem)}`;

const IrPage = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label;
    description;
    render() {
        return (index.h(index.Host, { key: '78b2a5c41cd42a71aa6deb3565239acf3408562d' }, index.h("ir-interceptor", { key: 'abd99dbe5c22ced41b828cd766fc9baa4c26dcea' }), index.h("ir-toast", { key: '03edf3d4fd91df6e69e500cebc9e31fd671da04a' }), index.h("main", { key: 'e5dd090b92a87a9bee41cc83d8d3dee51eb25462', part: "main", class: "ir-page__container" }, index.h("header", { key: '047e7796336a211cff510a430c5d8a486742fc60', part: "header", class: "tax-page__header" }, index.h("slot", { key: '1e9c6d03f56063cb41f61b33bfc3ffd487f85441', name: "heading" }, index.h("div", { key: '09bfbc74d4ecbf1582196e5c22933e2525dd2a6f', class: "tax-page__heading" }, index.h("h3", { key: '555ebdd51ce5ee55374de117b1db7cae433478a0', part: "title", class: "page-title" }, this.label), this.description && (index.h("p", { key: 'f17ba2f8e61c03e3442236c0c64b938d5d94cae5', part: "description", class: "page__description" }, this.description, index.h("slot", { key: '0aaa0dd702847ce47a1205d87793e9354ec58514', name: "page-description" }))))), index.h("slot", { key: 'f6d253f0ee9e00893490a7dfca67acebbe1e6a82', name: "page-header" })), index.h("div", { key: '727d3102a671daaa77c6a8ff8b0baf2d03f3da3a', part: "body", class: 'page-body' }, index.h("slot", { key: 'f0b2eced2563cb79bca3946de57fc97594cfa15e' })))));
    }
};
IrPage.style = irPageCss();

const irSpinnerCss = () => ``;

const IrSpinner = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
    /**
     * Size of the spinner (diameter).
     * Example: `size={2}` with `unit="rem"` sets spinner to `2rem`.
     */
    size;
    /**
     * Thickness of the spinner's border.
     * Example: `borderWidth={4}` renders a `4px` or `4rem` thick border.
     */
    borderWidth;
    /**
     * CSS unit used for `size` and `borderWidth`.
     * Can be `'px'` or `'rem'`.
     */
    unit = 'rem';
    /**
     * Color of the spinner.
     * Accepts any valid CSS color string.
     */
    color;
    componentWillLoad() {
        this.initStyles();
    }
    handleSpinnerSizeChange() {
        this.initStyles();
    }
    handleSpinnerBorderWidthChange() {
        this.initStyles();
    }
    handleSpinnerUnitChange() {
        this.initStyles();
    }
    handleSpinnerColorChange() {
        this.initStyles();
    }
    /**
     * Applies CSS custom properties based on current prop values.
     */
    initStyles() {
        if (this.size) {
            this.applyCssElement(`${this.size}${this.unit}`, '--ir-spinner-size');
        }
        if (this.borderWidth) {
            this.applyCssElement(`${this.borderWidth}${this.unit}`, '--ir-spinner-size');
        }
        if (this.color) {
            this.applyCssElement(`${this.color}`, '--ir-spinner-color');
        }
    }
    /**
     * Helper function to set CSS custom properties on the host element.
     *
     * @param value - The CSS value to apply
     * @param key - The CSS custom property name (e.g., `--ir-spinner-size`)
     */
    applyCssElement(value, key) {
        this.el.style.setProperty(key, value);
    }
    render() {
        return (index.h(index.Host, { key: 'c9a235619204452ed0e264482b452e545b92508b' }, index.h("wa-spinner", { key: '92d6dec21e52d30274558bdd396632efe9eeeeef', style: { 'fontSize': '2rem', '--track-width': '3px' } })));
    }
    static get watchers() { return {
        "size": [{
                "handleSpinnerSizeChange": 0
            }],
        "borderWidth": [{
                "handleSpinnerBorderWidthChange": 0
            }],
        "unit": [{
                "handleSpinnerUnitChange": 0
            }],
        "color": [{
                "handleSpinnerColorChange": 0
            }]
    }; }
};
IrSpinner.style = irSpinnerCss();

const irToastCss = () => `button.sc-ir-toast,p.sc-ir-toast,h3.sc-ir-toast,div.sc-ir-toast{all:unset}.sc-ir-toast-h{--rd-viewport-padding:25px;--rd-slide-sign:1;--rd-success:#2b9a66;position:fixed;bottom:0;inset-inline-end:0;display:flex;flex-direction:column;padding:var(--rd-viewport-padding);gap:10px;max-width:100vw;margin:0;list-style:none;z-index:2147483647;outline:none;pointer-events:none;-webkit-user-select:none;user-select:none}@media (prefers-color-scheme: dark){.sc-ir-toast-h{--rd-success:#33b074}}p.sc-ir-toast{color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3}h1.sc-ir-toast,h2.sc-ir-toast,h3.sc-ir-toast,h4.sc-ir-toast,h5.sc-ir-toast,h6.sc-ir-toast{font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.sc-ir-toast-h:dir(rtl){--rd-slide-sign:-1}[position='top-left'].sc-ir-toast-h,[position='bottom-left'].sc-ir-toast-h{--rd-slide-sign:-1}[position='top-left'].sc-ir-toast-h:dir(rtl),[position='bottom-left'].sc-ir-toast-h:dir(rtl){--rd-slide-sign:1}[position='top-left'].sc-ir-toast-h{top:0;inset-inline-start:0}[position='top-right'].sc-ir-toast-h{top:0;inset-inline-end:0}[position='bottom-left'].sc-ir-toast-h{bottom:0;inset-inline-start:0}[position='bottom-right'].sc-ir-toast-h{bottom:0;inset-inline-end:0}.icon-container.sc-ir-toast{height:25px;width:25px;border-radius:25px;display:flex;align-items:center;justify-content:center;padding:0;margin:0}.icon-container.sc-ir-toast>svg.sc-ir-toast{margin:0;color:white;stroke-width:5px}.success.sc-ir-toast{background-color:var(--rd-success)}.error.sc-ir-toast{background-color:red}.ToastRoot.sc-ir-toast{background-color:hsl(0, 0%, 100%);border-radius:0.5rem;box-shadow:hsl(206 22% 7% / 35%) 0px 10px 38px -10px,     hsl(206 22% 7% / 20%) 0px 10px 20px -15px;padding:15px;display:grid;grid-template-areas:'title action' 'description action';grid-template-columns:auto max-content;column-gap:15px;align-items:center;pointer-events:none;opacity:0;border:1px solid hsl(214.3, 31.8%, 91.4%);position:relative}.ToastRoot[data-state='open'].sc-ir-toast{pointer-events:all;animation:slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)}.ToastRoot[data-state='closed'].sc-ir-toast{pointer-events:none;animation:hide 100ms ease-in}@-webkit-keyframes slideIn{from{transform:translateX(calc(var(--rd-offset-width, 100%) * var(--rd-slide-sign)))}to{transform:translateX(0)}}@keyframes slideIn{from{transform:translateX(calc(var(--rd-offset-width, 100%) * var(--rd-slide-sign)))}to{transform:translateX(0)}}.ToastTitle.sc-ir-toast{grid-area:title;font-weight:500;color:hsl(222.2, 84%, 4.9%);font-size:15px}.ToastDescription.sc-ir-toast{grid-area:description;margin:0;margin-top:5px;color:hsla(222.2, 84%, 4.9%, 0.8);font-size:13px;line-height:1.3;overflow:hidden;text-overflow:ellipsis}.ToastAction.sc-ir-toast{grid-area:action}`;

const IrToast = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /**
     * Position where toasts will appear.
     * Options include: `'top-left'`, `'top-right'`, `'bottom-left'`, `'bottom-right'`.
     */
    position = 'top-right';
    get providerPosition() {
        const map = {
            'top-left': 'top-start',
            'top-right': 'top-end',
            'bottom-left': 'bottom-start',
            'bottom-right': 'bottom-end',
        };
        return map[this.position] ?? 'top-end';
    }
    render() {
        // ir-toast-provider renders the ir-toast-item stack and listens for
        // `toast` events on the body, so this component is a thin shell kept
        // for backwards compatibility with the many pages that embed it.
        return index.h("ir-toast-provider", { key: '12a0e8e85ed825032b87d3b1be5851773b5302f7', position: this.providerPosition });
    }
};
IrToast.style = irToastCss();

const irToastItemCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{display:block;--accent-width:4px}.accent{flex:0 0 auto;width:var(--accent-width);background:var(--accent-color)}.toast-item{display:flex;align-items:stretch;background:var(--wa-color-surface-raised);border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);box-shadow:var(--wa-shadow-l);overflow:hidden;animation:toast-enter 280ms cubic-bezier(0.16, 1, 0.3, 1) both}:host([data-placement^='bottom']) .toast-item{animation-name:toast-enter-up}:host([data-leaving]) .toast-item{animation:toast-exit 200ms cubic-bezier(0.23, 1, 0.32, 1) both;pointer-events:none}.icon{display:flex;align-items:center;padding:var(--wa-space-l);padding-inline-end:0px;color:var(--accent-color);font-size:1.25em}.content{font-size:var(--wa-font-size-s);flex:1 1 auto;align-self:center;min-width:0px;padding:var(--wa-space-l);color:var(--wa-color-text-normal)}::slotted([data-toast-title]){display:block;font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}::slotted([data-toast-description]){display:block;margin-top:2px;color:var(--wa-color-text-quiet)}::slotted([data-toast-action]){display:inline-flex;margin-top:var(--wa-space-s);padding:0.25rem 0.625rem;border:var(--wa-border-width-s) solid var(--wa-color-surface-border);border-radius:var(--wa-border-radius-s);background:transparent;color:var(--accent-color);font:inherit;font-size:var(--wa-font-size-s);font-weight:600;cursor:pointer;transition:background-color var(--wa-transition-fast)}::slotted([data-toast-action]:hover){background:var(--wa-color-neutral-fill-quiet)}::slotted([data-toast-action]:focus-visible){outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:2px}.close-button wa-progress-ring{--size:30px;--track-width:2px;--indicator-width:2px;--track-color:var(--wa-color-surface-border);--indicator-color:var(--accent-color);--indicator-transition-duration:150ms;font-size:var(--wa-font-size-xs)}.close-button{flex:0 0 auto;display:flex;align-items:center;justify-content:center;align-self:stretch;padding-inline:var(--wa-space-l);background:transparent;border:none;border-start-end-radius:var(--border-radius);border-end-end-radius:var(--border-radius);color:var(--wa-color-neutral-on-quiet);font-size:inherit;cursor:pointer;transition:background-color var(--wa-transition-fast)}.close-button:hover{background:var(--wa-color-neutral-fill-quiet);color:var(--wa-color-text-normal)}.close-button:focus-visible{outline:2px solid var(--wa-color-brand-fill-loud);outline-offset:-2px}@keyframes toast-enter{from{opacity:0;transform:translateY(-12px) scale(0.96)}to{opacity:1;transform:none}}@keyframes toast-enter-up{from{opacity:0;transform:translateY(12px) scale(0.96)}to{opacity:1;transform:none}}@keyframes toast-exit{to{opacity:0;transform:scale(0.95)}}@keyframes toast-fade-in{from{opacity:0}to{opacity:1}}@media (prefers-reduced-motion: reduce){.toast-item,:host([data-placement^='bottom']) .toast-item{animation:toast-fade-in 120ms linear both}:host([data-leaving]) .toast-item{animation:none}}:host([data-entered]:not([data-leaving])) .toast-item{animation:none}`;

const IrToastItem = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.irDismiss = index.createEvent(this, "irDismiss");
    }
    get el() { return index.getElement(this); }
    variant = 'neutral';
    /** Auto-dismiss delay in milliseconds. Pass `0` or `Infinity` for a persistent toast. */
    duration = 5000;
    /** Whether the close button is rendered. */
    dismissible = true;
    progress = 100;
    leaving = false;
    entered = false;
    /** Emitted once the exit animation finishes and the toast should be removed from the DOM. */
    irDismiss;
    timer;
    remainingMs;
    resumedAt;
    timerStarted = false;
    hiding = false;
    hovered = false;
    focused = false;
    componentDidLoad() {
        if (!this.timerStarted) {
            this.startTimer();
        }
        // Once the enter animation has played, mark the host so re-parenting (the
        // provider moving the toast layer in/out of a modal dialog) never replays it.
        const markEntered = () => {
            clearTimeout(fallback);
            this.entered = true;
        };
        const fallback = window.setTimeout(markEntered, 500);
        this.el.shadowRoot?.querySelector('.toast-item')?.addEventListener('animationend', markEntered, { once: true });
    }
    connectedCallback() {
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
        // Re-parenting disconnects and reconnects the element; resume the countdown
        // with whatever time was left when it was paused.
        if (this.timerStarted && !this.hovered && !this.focused) {
            this.resumeTimer();
        }
    }
    disconnectedCallback() {
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        this.pauseTimer();
    }
    /** Starts the auto-dismiss countdown. Safe to call more than once. */
    async startTimer() {
        this.timerStarted = true;
        if (this.hovered || this.focused) {
            return;
        }
        this.resumeTimer();
    }
    /** Plays the exit animation, then emits `irDismiss`. */
    async hide() {
        if (this.hiding) {
            return;
        }
        this.hiding = true;
        this.pauseTimer();
        if (!this.prefersReducedMotion()) {
            this.leaving = true;
            await new Promise(resolve => {
                const done = () => {
                    clearTimeout(fallback);
                    resolve();
                };
                // Safety timeout in case animationend never fires (display:none ancestors, etc.)
                const fallback = window.setTimeout(done, 300);
                this.el.shadowRoot?.querySelector('.toast-item')?.addEventListener('animationend', done, { once: true });
            });
        }
        this.irDismiss.emit();
    }
    get hasTimer() {
        return Number.isFinite(this.duration) && this.duration > 0;
    }
    prefersReducedMotion() {
        return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    }
    // The countdown is wall-clock based so it survives pauses, re-parenting, and
    // interval throttling in background tabs without drifting.
    resumeTimer() {
        if (!this.hasTimer || this.hiding || this.timer || document.hidden) {
            return;
        }
        this.remainingMs = this.remainingMs ?? this.duration;
        this.resumedAt = Date.now();
        this.timer = window.setInterval(() => {
            const left = this.remainingMs - (Date.now() - this.resumedAt);
            this.progress = Math.max(0, (left / this.duration) * 100);
            if (left <= 0) {
                this.hide();
            }
        }, 100);
    }
    pauseTimer() {
        if (this.timer) {
            this.remainingMs = Math.max(0, this.remainingMs - (Date.now() - this.resumedAt));
            clearInterval(this.timer);
            this.timer = undefined;
        }
    }
    handleVisibilityChange = () => {
        if (document.hidden) {
            this.pauseTimer();
        }
        else {
            this.updateInteraction();
        }
    };
    updateInteraction() {
        if (this.hovered || this.focused) {
            // Reset the countdown while the user is interacting; it restarts from
            // the full duration once they move away.
            this.pauseTimer();
            this.remainingMs = this.duration;
            this.progress = 100;
        }
        else if (this.timerStarted) {
            this.resumeTimer();
        }
    }
    handleMouseEnter = () => {
        this.hovered = true;
        this.updateInteraction();
    };
    handleMouseLeave = () => {
        this.hovered = false;
        this.updateInteraction();
    };
    handleFocusIn = () => {
        this.focused = true;
        this.updateInteraction();
    };
    handleFocusOut = () => {
        this.focused = false;
        this.updateInteraction();
    };
    handleClose = () => {
        this.hide();
    };
    render() {
        return (index.h(index.Host, { key: '95b5a9f2270885d9b8559cc78becebcabfccb697', "data-leaving": this.leaving ? 'true' : undefined, "data-entered": this.entered ? 'true' : undefined, style: { '--accent-color': `var(--wa-color-${this.variant}-fill-loud)` } }, index.h("div", { key: 'bd39e616114318fb19f8fd101de3ba163b48e488', class: 'toast-item', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, onFocusin: this.handleFocusIn, onFocusout: this.handleFocusOut }, index.h("div", { key: '791af0626ff6bfada42ee20669ab091604719f01', part: "accent", class: "accent" }), index.h("div", { key: '7186bacb6b1741e03bea797cd1fc9d72061c58fb', part: "icon", class: "icon" }, index.h("slot", { key: '8079a5bc27a1322bcd170651f0a7faa51b9c1a58', name: "icon" })), index.h("div", { key: '21cc2e4f76e67142d7cfd612d5fa757051ede44c', part: "content", class: "content" }, index.h("slot", { key: '4adf4d8404a257a08b17dd083124413c74c7052a' })), this.dismissible && (index.h("button", { key: '00ce73ea314d684724426d7ce9e4bb902ac5c505', part: "close-button", class: "close-button", type: "button", "aria-label": t.t('Lcz_CloseNotification', { fallback: 'Close notification' }), onClick: this.handleClose }, this.hasTimer ? (index.h("wa-progress-ring", { part: "progress-ring", "aria-hidden": "true", exportparts: "\n                  base:progress-ring__base,\n                  label:progress-ring__label,\n                  track:progress-ring__track,\n                  indicator:progress-ring__indicator\n                ", value: this.progress }, index.h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" }))) : (index.h("wa-icon", { part: "close-icon", exportparts: "svg:close-icon__svg", name: "xmark", library: "system", variant: "solid", "aria-hidden": "true" })))))));
    }
};
IrToastItem.style = irToastItemCss();

const irToastProviderCss = () => `:host{display:contents}`;

// In current Chrome, anything outside a modal dialog (`showModal()`) is inert —
// including popovers shown *after* the dialog, even though they paint above it.
// The only place a toast stays clickable while an ir-drawer/wa-dialog is open is
// *inside* the topmost modal dialog's subtree. The provider therefore keeps all
// toasts in a single fixed "layer" element that lives in document.body as a
// popover="manual" (top layer) when no modal is open, and re-parents into the
// topmost modal dialog whenever one opens.
const EDGE_PADDING = 16; // px from screen edges
const ITEM_GAP = 8; // px between toasts
// Pages and feature roots alike embed ir-toast (which renders a provider), so
// several providers can be connected at once — each listening for `toast`
// events on the body. Only the most recently connected provider handles them,
// so one event never produces duplicate toasts.
const connectedProviders = [];
/** `matches()` that tolerates engines without the pseudo-class (e.g. Stencil mock-doc). */
function safeMatches(el, selector) {
    try {
        return el.matches(selector);
    }
    catch (e) {
        return false;
    }
}
/** Finds the native <dialog> rendered by a component (e.g. ir-drawer → wa-drawer → dialog). */
function findDialogIn(el) {
    if (!el) {
        return null;
    }
    if (el instanceof HTMLDialogElement) {
        return el;
    }
    const root = el.shadowRoot;
    if (!root) {
        return null;
    }
    const direct = root.querySelector('dialog');
    if (direct) {
        return direct;
    }
    for (const child of Array.from(root.querySelectorAll('*'))) {
        const nested = findDialogIn(child);
        if (nested) {
            return nested;
        }
    }
    return null;
}
const IrToastProvider = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.toastAction = index.createEvent(this, "toastAction");
    }
    position = 'top-end';
    /** Pins the toast layer to RTL. Leave unset to inherit the document direction. */
    rtl = false;
    duration = 5000;
    /** Maximum number of toasts shown at once; when exceeded, the oldest are dismissed. */
    maxToasts = 5;
    /** Emitted when a toast's action button is clicked. */
    toastAction;
    items = [];
    layer = null;
    liveRegion = null;
    modalStack = [];
    positionCache = new Map();
    hostDialog = null;
    connectedCallback() {
        connectedProviders.push(this);
        document.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        const index = connectedProviders.indexOf(this);
        if (index > -1) {
            connectedProviders.splice(index, 1);
        }
        document.removeEventListener('keydown', this.handleKeyDown);
        this.hostDialog?.removeEventListener('close', this.handleHostDialogClose);
        this.hostDialog = null;
        this.layer?.remove();
        this.layer = null;
        this.liveRegion = null;
        this.items = [];
        this.modalStack = [];
    }
    handleToast(event) {
        if (connectedProviders[connectedProviders.length - 1] !== this) {
            return;
        }
        const detail = event?.detail || {};
        // Legacy IToast emitters (ir-interceptor, booking details, …) often send an
        // empty description and put the message in `title`, or vice versa.
        const title = detail.title || detail.description || t.t('Lcz_Notification', { fallback: 'Notification' });
        const payload = {
            ...detail,
            title,
            description: detail.title ? detail.description || undefined : undefined,
            type: this.normalizeType(detail.type),
        };
        this.addToast(payload);
    }
    // A modal dialog opening makes everything outside it inert; track it and move
    // the toast layer inside so toasts stay visible and clickable above it.
    handleOverlayShow(event) {
        const dialog = findDialogIn(event.target);
        if (!dialog) {
            return;
        }
        this.modalStack = this.modalStack.filter(d => d !== dialog);
        this.modalStack.push(dialog);
        // Defer so the dialog is actually modal (showModal may run after the event).
        requestAnimationFrame(() => this.relocateLayer());
    }
    // Wrapper components (ir-dialog) stop the wa-* events and re-emit them under
    // their own names, so both vocabularies must be listened for. Only the
    // after-hide events are reliable for relocation: at wa-hide/irDialogHide time
    // the native dialog is still `:modal` for the duration of the close animation.
    handleOverlayHide() {
        if (!this.layer) {
            return;
        }
        requestAnimationFrame(() => this.relocateLayer());
    }
    async addToast(toast) {
        const id = toast.id ?? this.generateToastId();
        const type = toast.type ?? 'info';
        const item = document.createElement('ir-toast-item');
        item.variant = this.mapVariant(type);
        item.duration = toast.duration ?? this.duration;
        item.dismissible = toast.dismissible ?? true;
        item.setAttribute('data-placement', this.position);
        Object.assign(item.style, {
            pointerEvents: 'auto',
            minWidth: '20rem',
            maxWidth: `min(28rem, calc(100vw - ${EDGE_PADDING * 2}px))`,
        });
        item.append(this.buildIcon(type), ...this.buildContent(id, toast));
        item.addEventListener('irDismiss', () => this.destroyItem(item));
        const layer = this.ensureLayer();
        this.relocateLayer();
        this.capturePositions();
        layer.prepend(item);
        this.items.unshift({ id, el: item });
        for (const extra of this.items.slice(this.maxToasts)) {
            extra.el.hide();
        }
        this.showLayerIfNeeded();
        requestAnimationFrame(() => this.animatePositions());
        this.announce(`${type}: ${toast.title}${toast.description ? '. ' + toast.description : ''}`, type === 'error' || type === 'danger');
        return id;
    }
    async removeToast(id) {
        const entry = this.items.find(item => item.id === id);
        if (!entry) {
            return;
        }
        await entry.el.hide();
    }
    async clearAllToasts() {
        await Promise.all(this.items.map(({ el }) => el.hide()));
    }
    handleHostDialogClose = () => {
        requestAnimationFrame(() => this.relocateLayer());
    };
    handleKeyDown = async (event) => {
        // Let modal drawers/dialogs consume Escape first (they mark it defaultPrevented).
        await new Promise(resolve => setTimeout(resolve));
        if (event.key === 'Escape' && !event.defaultPrevented && this.items.length > 0) {
            event.preventDefault();
            this.removeToast(this.items[0].id);
        }
    };
    destroyItem(el) {
        if (!el.parentElement) {
            return;
        }
        this.capturePositions();
        el.remove();
        this.items = this.items.filter(item => item.el !== el);
        if (this.items.length === 0) {
            this.hideLayer();
        }
        else {
            requestAnimationFrame(() => this.animatePositions());
        }
    }
    ensureLayer() {
        if (this.layer) {
            this.applyLayerPlacement();
            return this.layer;
        }
        const layer = document.createElement('div');
        layer.setAttribute('data-ir-toast-layer', '');
        Object.assign(layer.style, {
            position: 'fixed',
            display: 'flex',
            gap: `${ITEM_GAP}px`,
            padding: `${EDGE_PADDING}px`,
            boxSizing: 'border-box',
            left: '0',
            right: '0',
            width: 'auto',
            height: 'auto',
            maxHeight: '100dvh',
            margin: '0',
            border: 'none',
            background: 'transparent',
            overflow: 'visible',
            pointerEvents: 'none',
            zIndex: '2147483647',
        });
        // Visually hidden live region travels with the layer so announcements are
        // never inside an inert subtree while a modal drawer is open.
        const liveRegion = document.createElement('div');
        liveRegion.setAttribute('data-ir-toast-live-region', '');
        liveRegion.style.cssText = 'position:absolute;width:1px;height:1px;overflow:hidden;white-space:nowrap;clip-path:inset(50%);pointer-events:none;';
        layer.append(liveRegion);
        this.layer = layer;
        this.liveRegion = liveRegion;
        this.applyLayerPlacement();
        return layer;
    }
    applyLayerPlacement() {
        if (!this.layer) {
            return;
        }
        const [vertical = 'top', horizontal = 'end'] = this.position.split('-');
        const s = this.layer.style;
        s.flexDirection = vertical === 'bottom' ? 'column-reverse' : 'column';
        s.top = vertical === 'bottom' ? 'auto' : '0';
        s.bottom = vertical === 'bottom' ? '0' : 'auto';
        s.alignItems = horizontal === 'center' ? 'center' : horizontal === 'start' ? 'flex-start' : 'flex-end';
        // The layer lives in document.body (and is re-parented into modal dialogs), so it already
        // inherits the document direction. Only an explicit `rtl` opt-in pins it; forcing 'ltr'
        // otherwise would un-mirror every toast on an RTL page.
        if (this.rtl) {
            this.layer.setAttribute('dir', 'rtl');
        }
        else {
            this.layer.removeAttribute('dir');
        }
    }
    /** Deep-scans the document (piercing shadow roots) for open modal dialogs. */
    findOpenModalDialogs() {
        const found = [];
        const walk = (root) => {
            for (const dialog of Array.from(root.querySelectorAll('dialog'))) {
                if (safeMatches(dialog, ':modal')) {
                    found.push(dialog);
                }
            }
            for (const el of Array.from(root.querySelectorAll('*'))) {
                if (el.shadowRoot) {
                    walk(el.shadowRoot);
                }
            }
        };
        walk(document);
        return found;
    }
    /** Moves the layer into the topmost open modal dialog, or back to document.body. */
    relocateLayer() {
        const layer = this.layer;
        if (!layer) {
            return;
        }
        // Event tracking can miss dialogs opened before this provider connected,
        // so always reconcile against the dialogs that are actually open.
        const open = this.findOpenModalDialogs();
        this.modalStack = this.modalStack.filter(dialog => open.includes(dialog));
        const host = this.modalStack[this.modalStack.length - 1] ?? open[open.length - 1] ?? document.body;
        const inDialog = host !== document.body;
        // Safety net: the native `close` event always fires on the hosting <dialog>
        // itself, even when a wrapper component swallows the wa-* events, so the
        // layer can never be stranded inside a closed dialog.
        if (this.hostDialog !== host) {
            this.hostDialog?.removeEventListener('close', this.handleHostDialogClose);
            this.hostDialog = inDialog ? host : null;
            this.hostDialog?.addEventListener('close', this.handleHostDialogClose);
        }
        if (layer.parentNode !== host) {
            if (safeMatches(layer, ':popover-open')) {
                layer.hidePopover?.();
            }
            if (inDialog) {
                layer.removeAttribute('popover');
            }
            else {
                layer.setAttribute('popover', 'manual');
            }
            host.append(layer);
            // Re-parenting disconnects the items, which clears their countdown timers
            // (and Stencil may run the deferred disconnect *after* reconnect). Restart
            // them once the move has fully settled.
            requestAnimationFrame(() => {
                for (const { el } of this.items) {
                    el.startTimer?.();
                }
            });
        }
        else if (!inDialog && !layer.hasAttribute('popover')) {
            layer.setAttribute('popover', 'manual');
        }
        this.showLayerIfNeeded();
    }
    showLayerIfNeeded() {
        const layer = this.layer;
        if (!layer || this.items.length === 0) {
            return;
        }
        if (layer.hasAttribute('popover') && !safeMatches(layer, ':popover-open')) {
            try {
                layer.showPopover?.();
            }
            catch (e) {
                // Popover may be mid-transition
            }
        }
    }
    hideLayer() {
        const layer = this.layer;
        if (layer && safeMatches(layer, ':popover-open')) {
            layer.hidePopover?.();
        }
    }
    announce(text, assertive) {
        const trimmed = text.trim();
        if (!this.liveRegion || !trimmed) {
            return;
        }
        const announcer = document.createElement('div');
        announcer.setAttribute('role', assertive ? 'alert' : 'status');
        announcer.setAttribute('aria-live', assertive ? 'assertive' : 'polite');
        announcer.setAttribute('aria-atomic', 'true');
        this.liveRegion.append(announcer);
        // Double rAF so assistive tech registers the live region before content lands.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                announcer.textContent = trimmed;
            });
        });
        setTimeout(() => announcer.remove(), 1000);
    }
    buildIcon(type) {
        const names = {
            success: 'circle-check',
            warning: 'triangle-exclamation',
            error: 'circle-xmark',
            danger: 'circle-xmark',
        };
        const icon = document.createElement('wa-icon');
        icon.setAttribute('slot', 'icon');
        icon.setAttribute('name', names[type] ?? 'circle-info');
        icon.setAttribute('aria-hidden', 'true');
        return icon;
    }
    buildContent(id, toast) {
        const nodes = [];
        const title = document.createElement('strong');
        title.setAttribute('data-toast-title', '');
        title.textContent = toast.title;
        nodes.push(title);
        if (toast.description) {
            const description = document.createElement('div');
            description.setAttribute('data-toast-description', '');
            description.textContent = toast.description;
            nodes.push(description);
        }
        if (toast.actionLabel) {
            const action = document.createElement('button');
            action.type = 'button';
            action.setAttribute('data-toast-action', '');
            action.textContent = toast.actionLabel;
            action.addEventListener('click', () => {
                this.toastAction.emit({ id });
                this.removeToast(id);
            });
            nodes.push(action);
        }
        return nodes;
    }
    capturePositions() {
        this.positionCache.clear();
        for (const { el } of this.items) {
            this.positionCache.set(el, el.getBoundingClientRect());
        }
    }
    animatePositions() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.positionCache.clear();
            return;
        }
        for (const { el } of this.items) {
            const oldRect = this.positionCache.get(el);
            if (!oldRect) {
                continue;
            }
            const newRect = el.getBoundingClientRect();
            const deltaY = oldRect.top - newRect.top;
            if (Math.abs(deltaY) > 1) {
                // Animate `translate` so it never conflicts with `transform`-based CSS animations.
                el.animate?.([{ translate: `0 ${deltaY}px` }, { translate: '0 0' }], {
                    duration: 200,
                    easing: 'cubic-bezier(0.2, 0, 0, 1)',
                });
            }
        }
        this.positionCache.clear();
    }
    generateToastId() {
        return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    /** Accepts both the provider's own types and the legacy IToast vocabulary ('error', 'custom'). */
    normalizeType(type) {
        switch (type) {
            case 'success':
            case 'warning':
            case 'error':
            case 'danger':
                return type;
            default:
                return 'info';
        }
    }
    mapVariant(type) {
        switch (type) {
            case 'success':
                return 'success';
            case 'warning':
                return 'warning';
            case 'error':
            case 'danger':
                return 'danger';
            default:
                return 'brand';
        }
    }
    render() {
        return index.h(index.Host, { key: '6f78d4cfdaaddbbbd6f76deca7cfde90bd69e016' });
    }
};
IrToastProvider.style = irToastProviderCss();

const irTranslationsEntriesPanelCss = () => `.sc-ir-translations-entries-panel-h{display:flex;flex-direction:column;min-width:0;flex:1 1 auto;min-height:0}.entries-panel__card.sc-ir-translations-entries-panel{display:flex;flex-direction:column;flex:1 1 auto;min-height:0;background:var(--wa-color-surface-default);border:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-radius:var(--wa-border-radius-l, 0.75rem);overflow:hidden}.entries-panel__toolbar.sc-ir-translations-entries-panel{display:flex;align-items:flex-end;gap:0.5rem;padding:0.75rem 1rem}.entries-panel__search.sc-ir-translations-entries-panel{flex:1 1 12rem;min-width:0;max-width:350px}.entries-panel__status.sc-ir-translations-entries-panel{flex:0 0 11rem}.entries-panel__table-filter.sc-ir-translations-entries-panel{flex:0 0 12rem;min-width:0}.entries-panel__missing-filter.sc-ir-translations-entries-panel{flex:0 1 14rem;min-width:0;--tag-max-size:8ch}.entries-panel__search.sc-ir-translations-entries-panel::part(label),.entries-panel__search.sc-ir-translations-entries-panel [part~="label"],.entries-panel__status.sc-ir-translations-entries-panel::part(label),.entries-panel__status.sc-ir-translations-entries-panel [part~="label"],.entries-panel__table-filter.sc-ir-translations-entries-panel::part(label),.entries-panel__table-filter.sc-ir-translations-entries-panel [part~="label"],.entries-panel__missing-filter.sc-ir-translations-entries-panel::part(label),.entries-panel__missing-filter.sc-ir-translations-entries-panel [part~="label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.entries-panel__search-hint.sc-ir-translations-entries-panel{display:inline-flex;align-items:center;padding:0.05rem 0.4rem;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet);background:var(--wa-color-neutral-fill-quiet);border:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-radius:var(--wa-border-radius-s)}@media (max-width: 575px){.entries-panel__toolbar.sc-ir-translations-entries-panel{flex-wrap:wrap}.entries-panel__status.sc-ir-translations-entries-panel,.entries-panel__table-filter.sc-ir-translations-entries-panel,.entries-panel__missing-filter.sc-ir-translations-entries-panel{flex:1 1 8rem}}.entries-panel__loader-container.sc-ir-translations-entries-panel{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:3rem 1rem;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.entries-panel__loader-container.sc-ir-translations-entries-panel p.sc-ir-translations-entries-panel{margin:0}.entries-panel__footer.sc-ir-translations-entries-panel{display:flex;align-items:center;justify-content:space-between;gap:0.75rem;padding:0.5rem 1rem;font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet);border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.entries-panel__missing-link.sc-ir-translations-entries-panel{border:none;background:transparent;padding:0;font:inherit;color:var(--wa-color-warning-on-quiet, #92400e);cursor:pointer}.entries-panel__missing-link.sc-ir-translations-entries-panel:hover,.entries-panel__missing-link.sc-ir-translations-entries-panel:focus-visible{text-decoration:underline}`;

const IrTranslationsEntriesPanel = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.createEntry = index.createEvent(this, "createEntry");
        this.editEntry = index.createEvent(this, "editEntry");
        this.duplicateEntry = index.createEvent(this, "duplicateEntry");
        this.moveEntry = index.createEvent(this, "moveEntry");
        this.deleteEntry = index.createEvent(this, "deleteEntry");
        this.entryChange = index.createEvent(this, "entryChange");
        this.reorderEntries = index.createEvent(this, "reorderEntries");
        this.toggleVisibility = index.createEvent(this, "toggleVisibility");
        this.saveOrder = index.createEvent(this, "saveOrder");
        this.discardOrder = index.createEvent(this, "discardOrder");
    }
    /** The active table's unfiltered entries — filtered internally for display. */
    entries = [];
    languages = [];
    sourceCode;
    /** True while the active table's keys are still loading. */
    isLoading = false;
    /** Disables the "New key" action, e.g. while another write is in flight. */
    disableActions = false;
    /** True once a drag reorder is applied locally but not yet saved — shows the Save/Discard order buttons. */
    hasPendingOrder = false;
    /** Ids of rows whose position differs from the last-loaded/saved order — marked in the table while a reorder is pending. */
    changedEntryIds = new Set();
    /** True when `entries` span several setup tables — adds the table filter and hands the table its grouped rendering. */
    groupByTable = false;
    /** Distinct table names present in `entries`, in display order — the table filter's options. */
    tableNames = [];
    /** Disables the "New key" action outright, e.g. in the cross-table view where there is no single table to create into. */
    disableCreate = false;
    /** Entry id → the tables sharing that row's description; rows present here get a duplicate badge. */
    duplicates = new Map();
    /** Whether the notes column is included at all. */
    showNotes = true;
    createEntry;
    editEntry;
    duplicateEntry;
    moveEntry;
    deleteEntry;
    entryChange;
    reorderEntries;
    toggleVisibility;
    saveOrder;
    discardOrder;
    searchTerm = '';
    statusFilter = 'all';
    /** Table name to narrow to, or 'all'. Only surfaced while `groupByTable` is on. */
    tableFilter = 'all';
    /** Language codes to audit within the rows on screen — a row survives if it's untranslated in any of them. */
    missingLanguageFilter = [];
    shortcutHint = null;
    searchInputRef;
    componentWillLoad() {
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (!isTouchDevice) {
            this.shortcutHint = '/';
        }
        document.addEventListener('keydown', this.handleGlobalKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleGlobalKeyDown);
    }
    /** A new result set (e.g. the language selection changed) can drop the table that was filtered on — don't strand the user on an empty grid. */
    handleTableNamesChange(newNames) {
        if (this.tableFilter !== 'all' && !newNames.includes(this.tableFilter)) {
            this.tableFilter = 'all';
        }
    }
    /** Hiding a language (or narrowing the grid in the cross-table view) must not leave an invisible filter applied. */
    handleLanguagesChange(newLanguages) {
        if (this.missingLanguageFilter.length === 0) {
            return;
        }
        const visible = new Set(newLanguages.filter(language => language.code !== this.sourceCode).map(language => language.code));
        const next = this.missingLanguageFilter.filter(code => visible.has(code));
        if (next.length !== this.missingLanguageFilter.length) {
            this.missingLanguageFilter = next;
        }
    }
    /** `/` jumps to search the way most keyboard-driven tools do — unlike ⌘F it doesn't fight the browser. */
    handleGlobalKeyDown = (event) => {
        if (event.key !== '/' || event.metaKey || event.ctrlKey || event.altKey) {
            return;
        }
        const target = event.target;
        if (target?.closest('input, textarea, [contenteditable="true"], wa-input, wa-textarea, wa-select')) {
            return;
        }
        event.preventDefault();
        this.searchInputRef?.focus();
    };
    /** The source language is what everything else is translated from, so "untranslated in English" isn't a useful filter. */
    get auditableLanguages() {
        return this.languages.filter(language => language.code !== this.sourceCode);
    }
    get filteredEntries() {
        const term = this.searchTerm.trim().toLowerCase();
        // Resolved once rather than per row; empty means the language filter is off.
        const audited = this.missingLanguageFilter.length > 0 ? this.languages.filter(language => this.missingLanguageFilter.includes(language.code)) : [];
        return this.entries.filter(entry => {
            if (term && !entry.key.toLowerCase().includes(term) && !Object.values(entry.values).some(value => value.toLowerCase().includes(term))) {
                return false;
            }
            if (this.tableFilter !== 'all' && entry.tableName !== this.tableFilter) {
                return false;
            }
            // Untranslated in *any* audited language is enough — same union rule the header's cross-table filter uses.
            if (audited.length > 0 && utils.countMissing(entry, audited) === 0) {
                return false;
            }
            if (this.statusFilter === 'all') {
                return true;
            }
            if (this.statusFilter === 'hidden') {
                return entry.meta?.isVisible === false;
            }
            const missing = utils.countMissing(entry, this.languages);
            return this.statusFilter === 'missing' ? missing > 0 : missing === 0;
        });
    }
    get hasActiveFilters() {
        return this.searchTerm.trim().length > 0 || this.statusFilter !== 'all' || this.tableFilter !== 'all' || this.missingLanguageFilter.length > 0;
    }
    clearFilters = (e) => {
        this.stopPropagation(e);
        this.searchTerm = '';
        this.statusFilter = 'all';
        this.tableFilter = 'all';
        this.missingLanguageFilter = [];
    };
    renderToolbar() {
        return (index.h("div", { class: "entries-panel__toolbar" }, index.h("wa-input", { class: "entries-panel__search", size: "s", "with-clear": true, label: "Search keys and translations", value: this.searchTerm, placeholder: "Search keys and translations", autocomplete: "off", spellcheck: false, ref: el => (this.searchInputRef = el), oninput: (e) => (this.searchTerm = e.target.value) }, index.h("wa-icon", { name: "magnifying-glass", slot: "start", "aria-hidden": "true" }), this.shortcutHint && !this.searchTerm && (index.h("span", { slot: "end", class: "entries-panel__search-hint", "aria-hidden": "true" }, this.shortcutHint))), index.h("wa-select", { class: "entries-panel__status", size: "s", label: t.t('Lcz_Status', { fallback: 'Status' }), value: this.statusFilter, onchange: (e) => (this.statusFilter = e.target.value) }, index.h("wa-option", { value: "all" }, "All keys"), index.h("wa-option", { value: "missing" }, "Needs translation"), index.h("wa-option", { value: "complete" }, "Complete"), index.h("wa-option", { value: "hidden" }, "Hidden from app")), this.auditableLanguages.length > 0 && (index.h("wa-select", { class: "entries-panel__missing-filter", size: "s", multiple: true, "with-clear": true, "max-options-visible": 1, label: "Untranslated in", placeholder: "Untranslated in\u2026", value: this.missingLanguageFilter, onchange: (e) => (this.missingLanguageFilter = [...(e.target.value ?? [])]) }, this.auditableLanguages.map(language => (index.h("wa-option", { key: language.code, value: language.code }, language.name))))), this.groupByTable && this.tableNames.length > 1 && (index.h("wa-select", { class: "entries-panel__table-filter", size: "s", label: "Table", value: this.tableFilter, onchange: (e) => (this.tableFilter = e.target.value) }, index.h("wa-option", { value: "all" }, "All tables"), this.tableNames.map(name => (index.h("wa-option", { key: name, value: name }, name))))), this.hasPendingOrder && (index.h("ir-custom-button", { style: { marginInlineStart: 'auto' }, variant: "neutral", appearance: "outlined", disabled: this.disableActions, onClickHandler: () => this.discardOrder.emit() }, "Discard")), this.hasPendingOrder && (index.h("ir-custom-button", { variant: "brand", appearance: "accent", disabled: this.disableActions, loading: this.disableActions, onClickHandler: () => this.saveOrder.emit() }, t.t('Lcz_Save', { fallback: 'Save' }))), index.h("ir-custom-button", { style: { marginInlineStart: this.hasPendingOrder ? null : 'auto' }, variant: "brand", appearance: "filled", disabled: this.disableActions || this.isLoading || this.disableCreate, onClickHandler: () => this.createEntry.emit() }, index.h("wa-icon", { name: "plus", slot: "start", "aria-hidden": "true" }), "New key")));
    }
    renderFooter(shown, total, missing, tables) {
        return (index.h("div", { class: "entries-panel__footer", "aria-live": "polite" }, index.h("span", null, shown === total ? `${total} key${total === 1 ? '' : 's'}` : `${shown} of ${total} keys`, this.groupByTable && tables > 0 && ` · ${tables} table${tables === 1 ? '' : 's'}`), missing > 0 && (index.h("button", { type: "button", class: "entries-panel__missing-link", onClick: () => (this.statusFilter = this.statusFilter === 'missing' ? 'all' : 'missing') }, missing, " need", missing === 1 ? 's' : '', " translation"))));
    }
    stopPropagation(e) {
        e.stopImmediatePropagation();
        e.stopPropagation();
    }
    render() {
        const filteredEntries = this.filteredEntries;
        const total = this.entries.length;
        const missing = this.entries.filter(entry => utils.countMissing(entry, this.languages) > 0).length;
        const shownTables = new Set(filteredEntries.map(entry => entry.tableName)).size;
        return (index.h("div", { key: 'f76d5c05345e51a91df6e14c1f0a9cc115d66e2f', class: "entries-panel__card" }, this.renderToolbar(), this.isLoading ? (index.h("div", { class: "entries-panel__loader-container" }, index.h("ir-spinner", null), index.h("p", null, "Loading keys\u2026"))) : (index.h("ir-translations-entries-table", { entries: filteredEntries, languages: this.languages, sourceCode: this.sourceCode, compact: false, filtered: this.hasActiveFilters, groupByTable: this.groupByTable, reorderEnabled: !this.hasActiveFilters && !this.groupByTable, changedEntryIds: this.changedEntryIds, duplicates: this.duplicates, showNotes: this.showNotes, onEntryChange: (e) => {
                this.stopPropagation(e);
                this.entryChange.emit(e.detail);
            }, onEditEntry: (e) => {
                this.stopPropagation(e);
                this.editEntry.emit(e.detail);
            }, onDuplicateEntry: (e) => {
                this.stopPropagation(e);
                this.duplicateEntry.emit(e.detail);
            }, onMoveEntry: (e) => {
                this.stopPropagation(e);
                this.moveEntry.emit(e.detail);
            }, onDeleteEntry: (e) => {
                this.stopPropagation(e);
                this.deleteEntry.emit(e.detail);
            }, onClearFilters: this.clearFilters, onReorderEntries: (e) => {
                this.stopPropagation(e);
                this.reorderEntries.emit(e.detail);
            }, onToggleVisibility: (e) => {
                this.stopPropagation(e);
                this.toggleVisibility.emit(e.detail);
            } })), !this.isLoading && total > 0 && this.renderFooter(filteredEntries.length, total, missing, shownTables)));
    }
    static get watchers() { return {
        "tableNames": [{
                "handleTableNamesChange": 0
            }],
        "languages": [{
                "handleLanguagesChange": 0
            }]
    }; }
};
IrTranslationsEntriesPanel.style = irTranslationsEntriesPanelCss();

const irTranslationsEntriesTableCss = () => `.sc-ir-translations-entries-table-h{--ir-cell-padding:0.5rem 1rem}.table--container.sc-ir-translations-entries-table{overflow-x:auto}.table--container.sc-ir-translations-entries-table,.data-table.sc-ir-translations-entries-table{height:100%}.ir-table-row.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{padding:var(--ir-cell-padding) !important;text-align:start;z-index:2;background-color:var(--wa-color-surface-default);white-space:nowrap;color:var(--wa-color-text-normal);box-sizing:border-box;transition-duration:var(--wa-transition-fast)}.table.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{border-top:0;border-bottom:1px solid var(--wa-color-neutral-border-quiet, #abaeb9);transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.table.sc-ir-translations-entries-table tbody.sc-ir-translations-entries-table tr.sc-ir-translations-entries-table:last-child>td.sc-ir-translations-entries-table{border-bottom:0 !important}.cell--align-start.sc-ir-translations-entries-table{text-align:start !important}.cell--align-center.sc-ir-translations-entries-table{text-align:center !important}.cell--align-end.sc-ir-translations-entries-table{text-align:end !important}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sc-ir-translations-entries-table{border:none !important;background:color-mix(in oklab, var(--wa-color-neutral-fill-quiet, #f1f2f3) 60%, transparent);color:var(--wa-color-neutral-on-quiet);padding:0.5rem 1rem !important;text-align:start}.data-table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sc-ir-translations-entries-table{box-sizing:border-box;background:var(--wa-color-surface-default) !important;padding-top:0.5rem !important;padding-bottom:0.5rem !important;border-bottom:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-neutral-border-normal) !important;color:var(--wa-color-text-normal)}.empty-row.sc-ir-translations-entries-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.sortable.sc-ir-translations-entries-table,.ir-table-row.sc-ir-translations-entries-table{transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.sortable.sc-ir-translations-entries-table{text-transform:capitalize;cursor:pointer}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sortable.sc-ir-translations-entries-table{transition-property:background, border, box-shadow, color;transition-duration:var(--wa-transition-fast);transition-timing-function:var(--wa-transition-easing)}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sortable.sc-ir-translations-entries-table:hover{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sortable.sc-ir-translations-entries-table:active{color:var(--wa-color-on-quiet, var(--wa-color-neutral-on-quiet));background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.sortable.sc-ir-translations-entries-table:active{color:#212529;background-color:#e2e8f0;border-color:#d3d9df}.sortable.sc-ir-translations-entries-table svg.sc-ir-translations-entries-table{color:var(--wa-color-brand-fill-loud)}.ir-table-row.sc-ir-translations-entries-table:hover td.sc-ir-translations-entries-table{background:var(--wa-color-neutral-fill-quiet, #f1f2f3) !important}.--clickable.ir-table-row.sc-ir-translations-entries-table:hover td.sc-ir-translations-entries-table{background-color:var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)) !important}.--clickable.ir-table-row.sc-ir-translations-entries-table:active td.sc-ir-translations-entries-table{background-color:color-mix(in oklab, var(--wa-color-fill-quiet, var(--wa-color-neutral-fill-quiet)), var(--wa-color-mix-active)) !important}.selected.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{background:var(--wa-color-brand-fill-quiet) !important;border-color:var(--wa-color-neutral-border-quiet) !important;color:var(--gray-dark) !important;transition:color 0.15s ease-in-out,     background-color 0.15s ease-in-out,     border-color 0.15s ease-in-out,     box-shadow 0.15s ease-in-out}.selected.ir-table-row.sc-ir-translations-entries-table:hover td.sc-ir-translations-entries-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-hover)) !important}.selected.ir-table-row.sc-ir-translations-entries-table:active td.sc-ir-translations-entries-table{background-color:color-mix(in oklab, var(--wa-color-fill-normal, var(--wa-color-brand-fill-normal)), var(--wa-color-mix-active)) !important}.data-table.sc-ir-translations-entries-table .empty-row.sc-ir-translations-entries-table{height:50vh !important;text-align:center;color:var(--wa-color-gray-60)}.data-table--pagination.sc-ir-translations-entries-table{padding:0.5rem 1rem;background:var(--wa-color-surface-default);border-top:1px solid var(--wa-color-neutral-90)}.sticky-column.sc-ir-translations-entries-table{position:sticky !important;inset-inline-end:0;background-color:var(--wa-color-surface-default, white)}.sc-ir-translations-entries-table-h{--ir-cell-padding:0.55rem 0.75rem;--entries-table-font-size:var(--wa-font-size-s);--entries-table-key-width:220px;display:flex;flex-direction:column;min-width:0;flex:1 1 auto;min-height:0}.--compact.sc-ir-translations-entries-table-h{--ir-cell-padding:0.3rem 0.6rem;--entries-table-font-size:var(--wa-font-size-xs, 0.8125rem)}.--empty.sc-ir-translations-entries-table-h{padding:1.5rem 1rem}.table--container.sc-ir-translations-entries-table{min-height:240px;max-height:50vh;overflow-x:auto;overflow-y:auto;overscroll-behavior-x:contain}@media (min-width: 1024px){.table--container.sc-ir-translations-entries-table{max-height:75vh}}.entries-table__table.sc-ir-translations-entries-table{width:100%;table-layout:fixed;font-size:var(--entries-table-font-size)}.entries-table__table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.sc-ir-translations-entries-table{position:sticky;top:0;z-index:3;color:var(--wa-color-text-quiet);font-weight:var(--wa-font-weight-semibold, 600);font-size:var(--wa-font-size-xs, 0.75rem);letter-spacing:0.02em;white-space:nowrap}.entries-table__col--drag.sc-ir-translations-entries-table{width:32px}.entries-table__col--key.sc-ir-translations-entries-table{width:var(--entries-table-key-width)}.entries-table__col--notes.sc-ir-translations-entries-table{width:180px}.entries-table__col--lang.sc-ir-translations-entries-table{width:200px}.entries-table__col--actions.sc-ir-translations-entries-table{width:44px}@media (max-width: 575px){.sc-ir-translations-entries-table-h{--entries-table-key-width:150px}}.ir-table-row.sc-ir-translations-entries-table td.entries-table__key.sc-ir-translations-entries-table{position:sticky;inset-inline-start:0;z-index:4}.ir-table-row.sc-ir-translations-entries-table td.entries-table__source-cell.sc-ir-translations-entries-table{position:sticky;left:var(--entries-table-key-width);z-index:4}.entries-table__table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.entries-table__key-head.sc-ir-translations-entries-table{position:sticky;inset-inline-start:0;z-index:5}.entries-table__table.sc-ir-translations-entries-table thead.sc-ir-translations-entries-table th.entries-table__source-head.sc-ir-translations-entries-table{position:sticky;left:var(--entries-table-key-width);z-index:5}.last__row.sc-ir-translations-entries-table{height:100%}.entries-table__key-head.sc-ir-translations-entries-table::after,.ir-table-row.sc-ir-translations-entries-table td.entries-table__key.sc-ir-translations-entries-table::after,.entries-table__source-head.sc-ir-translations-entries-table::after,.ir-table-row.sc-ir-translations-entries-table td.entries-table__source-cell.sc-ir-translations-entries-table::after{content:'';position:absolute;inset-block:0;inset-inline-end:0;width:1px;background:var(--wa-color-neutral-border-quiet, #e2e8f0)}.entries-table__key-container.sc-ir-translations-entries-table{display:flex;align-items:center}.entries-table__key-icon.sc-ir-translations-entries-table{visibility:hidden}.entries-table__key.sc-ir-translations-entries-table:hover .entries-table__key-icon.sc-ir-translations-entries-table{visibility:visible}.entries-table__key-hidden-mark.sc-ir-translations-entries-table{flex:0 0 auto;display:inline-flex;font-size:0.8em;color:var(--wa-color-text-quiet)}.entries-table__dup-badge.sc-ir-translations-entries-table{flex:0 0 auto;display:inline-flex;align-items:center;gap:0.2rem;margin-inline-start:0.35rem;padding-block:0.05rem;padding-inline:0.3rem;border:1px solid var(--wa-color-warning-border-quiet, #fde68a);border-radius:var(--wa-border-radius-s);background:var(--wa-color-warning-fill-quiet);color:var(--wa-color-warning-on-quiet, #92400e);font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;line-height:1.2;cursor:help}.entries-table__key-text.sc-ir-translations-entries-table{flex:1;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--wa-font-family-code, ui-monospace, SFMono-Regular, Menlo, monospace);font-size:0.95em;color:var(--wa-color-text-normal)}.ir-table-row.sc-ir-translations-entries-table td.entries-table__drag-cell.sc-ir-translations-entries-table{padding:0;text-align:center}.entries-table__drag-handle.sc-ir-translations-entries-table{display:inline-flex;align-items:center;justify-content:center;width:100%;padding:var(--ir-cell-padding);color:var(--wa-color-text-quiet);cursor:grab}.entries-table__drag-handle.sc-ir-translations-entries-table:active{cursor:grabbing}.entries-table__drag-handle.--disabled.sc-ir-translations-entries-table{color:var(--wa-color-neutral-border-normal, #cbd5e1);cursor:not-allowed}.ir-table-row.entries-table__row--dragging.sc-ir-translations-entries-table{opacity:0.5}.ir-table-row.entries-table__row--reordered.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{background-color:var(--wa-color-warning-fill-quiet, #fef3c7)}.ir-table-row.entries-table__row--reordered.sc-ir-translations-entries-table td.entries-table__drag-cell.sc-ir-translations-entries-table{box-shadow:inset 3px 0 0 var(--wa-color-warning-fill-loud, #f59e0b)}.ir-table-row.entries-table__row--hidden.sc-ir-translations-entries-table{opacity:0.6}.ir-table-row.entries-table__row--deleted.sc-ir-translations-entries-table td.sc-ir-translations-entries-table{background-color:var(--wa-color-danger-fill-quiet, #fee2e2)}.entries-table__lang-head.sc-ir-translations-entries-table{display:inline-flex;align-items:center;gap:0.35rem}.entries-table__lang-code.sc-ir-translations-entries-table{text-decoration:none;cursor:help}.entries-table__lang-source.sc-ir-translations-entries-table{padding:0.05rem 0.3rem;font-size:0.6875rem;font-weight:var(--wa-font-weight-normal, 400);text-transform:lowercase;letter-spacing:0;color:var(--wa-color-brand-on-quiet);background:var(--wa-color-brand-fill-quiet);border-radius:var(--wa-border-radius-s)}.entries-table__sr-only.sc-ir-translations-entries-table{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.entries-table__value-cel.sc-ir-translations-entries-table{height:min-content !important}.ir-table-row.sc-ir-translations-entries-table td.entries-table__value-cell.sc-ir-translations-entries-table{padding:0 !important}.entries-table__cell-display.sc-ir-translations-entries-table{display:block;width:100%;padding:var(--ir-cell-padding);text-align:start;color:inherit;cursor:text}.entries-table__cell-display.sc-ir-translations-entries-table:hover{box-shadow:inset 0 0 0 1px var(--wa-color-neutral-border-normal, #cbd5e1)}.entries-table__table.sc-ir-translations-entries-table td.sc-ir-translations-entries-table:focus-visible{outline:var(--wa-focus-ring, 2px solid var(--wa-color-brand-fill-loud));outline-offset:-2px}.entries-table__table.sc-ir-translations-entries-table td.sc-ir-translations-entries-table:focus-visible .entries-table__cell-display.sc-ir-translations-entries-table{box-shadow:inset 0 0 0 1px var(--wa-color-neutral-border-normal, #cbd5e1)}.entries-table__cell-text.sc-ir-translations-entries-table{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.entries-table__cell-missing.sc-ir-translations-entries-table{display:inline-block;padding:0.05rem 0.35rem;font-size:0.85em;color:var(--wa-color-warning-on-quiet, #92400e);background:var(--wa-color-warning-fill-quiet, #fef3c7);border-radius:var(--wa-border-radius-s)}.entries-table__cell-display.--readonly.sc-ir-translations-entries-table{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;cursor:default;color:var(--wa-color-text-quiet)}.entries-table__cell-display.--readonly.sc-ir-translations-entries-table:hover{box-shadow:none}.entries-table__cell-lock.sc-ir-translations-entries-table{flex:0 0 auto;font-size:0.8em;opacity:0.6}.entries-table__cell-input.sc-ir-translations-entries-table{display:block;width:100%}.entries-table__cell-input.sc-ir-translations-entries-table::part(base),.entries-table__cell-input.sc-ir-translations-entries-table [part~="base"]{border-radius:var(--wa-border-radius-s)}.entries-table__cell-input.sc-ir-translations-entries-table::part(label),.entries-table__cell-input.sc-ir-translations-entries-table [part~="label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.entries-table__actions.sc-ir-translations-entries-table{text-align:center}.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table{opacity:0.45;transition:opacity var(--wa-transition-fast, 150ms) ease}.ir-table-row.sc-ir-translations-entries-table:hover .entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table,.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table:focus-within{opacity:1}@media (hover: none){.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table{opacity:1}}@media (prefers-reduced-motion: reduce){.entries-table__actions.sc-ir-translations-entries-table ir-custom-button.sc-ir-translations-entries-table{transition:none}}.entries-table__tooltip.sc-ir-translations-entries-table{--max-width:22rem}.entries-table__tooltip.sc-ir-translations-entries-table::part(body),.entries-table__tooltip.sc-ir-translations-entries-table [part~="body"]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3;line-clamp:3;overflow:hidden;overflow-wrap:anywhere}.entries-table__group-row.sc-ir-translations-entries-table td.entries-table__group-cell.sc-ir-translations-entries-table{padding:0;background:var(--wa-color-neutral-fill-quiet);border-block-start:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0);border-block-end:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.entries-table__group-toggle.sc-ir-translations-entries-table{display:flex;align-items:center;gap:0.5rem;width:100%;padding-block:0.4rem;padding-inline:0.6rem;border:none;background:transparent;font:inherit;color:var(--wa-color-text-normal);cursor:pointer;text-align:start}.entries-table__group-toggle.sc-ir-translations-entries-table:hover,.entries-table__group-toggle.sc-ir-translations-entries-table:focus-visible{background:var(--wa-color-neutral-fill-normal, rgba(0, 0, 0, 0.04))}.entries-table__group-chevron.sc-ir-translations-entries-table{flex:0 0 auto;color:var(--wa-color-text-quiet);transition:rotate var(--wa-transition-fast, 150ms) var(--wa-transition-easing, ease);rotate:0deg}.entries-table__group-toggle[aria-expanded='false'].sc-ir-translations-entries-table .entries-table__group-chevron.sc-ir-translations-entries-table{rotate:-90deg}.sc-ir-translations-entries-table-h:dir(rtl) .entries-table__group-toggle[aria-expanded='false'].sc-ir-translations-entries-table .entries-table__group-chevron.sc-ir-translations-entries-table{rotate:90deg}.entries-table__group-name.sc-ir-translations-entries-table{font-weight:var(--wa-font-weight-semibold, 600);font-size:var(--wa-font-size-xs, 0.75rem);letter-spacing:0.02em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.entries-table__group-count.sc-ir-translations-entries-table{margin-inline-start:auto;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;white-space:nowrap}@media (prefers-reduced-motion: reduce){.entries-table__group-chevron.sc-ir-translations-entries-table{transition:none}}`;

/** Rows a PageUp/PageDown jumps. */
const PAGE_ROWS = 10;
const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const IrTranslationsEntriesTable = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.entryChange = index.createEvent(this, "entryChange");
        this.editEntry = index.createEvent(this, "editEntry");
        this.duplicateEntry = index.createEvent(this, "duplicateEntry");
        this.moveEntry = index.createEvent(this, "moveEntry");
        this.deleteEntry = index.createEvent(this, "deleteEntry");
        this.clearFilters = index.createEvent(this, "clearFilters");
        this.reorderEntries = index.createEvent(this, "reorderEntries");
        this.toggleVisibility = index.createEvent(this, "toggleVisibility");
    }
    /** Rows to render, already filtered by the parent. */
    entries = [];
    /** Column order — the source language is expected first. */
    languages = [];
    /** Code of the reference language, marked in the header. */
    sourceCode;
    compact = true;
    /** True when the parent's filters hid every row, so the empty state can say so. */
    filtered = false;
    /** False while a search/status filter is active — reordering a filtered subset can't map cleanly onto the full list. */
    reorderEnabled = true;
    /** Ids of rows whose position differs from the last-loaded/saved order — highlighted while a reorder is pending. */
    changedEntryIds = new Set();
    /** True when `entries` span several setup tables — rows are then broken up by collapsible per-table header rows. */
    groupByTable = false;
    /** Entry id → the tables sharing that row's description; rows present here get a duplicate badge beside their key. */
    duplicates = new Map();
    /** Whether the notes column is included at all. */
    showNotes = true;
    entryChange;
    editEntry;
    duplicateEntry;
    /** "Move to table…" — the parent opens the move dialog for this row. */
    moveEntry;
    deleteEntry;
    clearFilters;
    reorderEntries;
    toggleVisibility;
    /** `${entryId}|${columnId}` of the open editor, or null. The only edit state that needs a re-render. */
    editingKey = null;
    /** Working copy of `entries`, live-reordered while a drag is in progress. */
    dragEntries = [];
    draggingId = null;
    /** `.table--container`'s current content-box width — language columns stretch to fill it instead of sitting fixed. */
    containerWidth = 0;
    /** Table names whose group is currently folded shut. Only meaningful while `groupByTable` is on. */
    collapsedTables = new Set();
    /**
     * The live edit. Deliberately not @State — keystrokes must not re-render the grid,
     * and the object identity is what makes a commit idempotent (see `EditSession`).
     */
    editSession = null;
    /**
     * The grid's single tab stop, as {visible row, navigable column} indices. Also not
     * @State: arrow keys move it by swapping `tabindex` on two `<td>`s directly, so
     * walking a 2,300-cell grid costs no re-renders at all.
     */
    activeCell = { row: 0, col: 0 };
    /** What to focus after the next render — set by anything that opens or closes an editor. */
    pendingFocus = null;
    /**
     * The session a pending 'input' focus was scheduled for. Typing faster than the
     * screen refreshes can queue two of these in one frame, and the first must not
     * declare the second one's editor focused — that would hand the keys back to an
     * input that doesn't have them yet, and they'd be lost.
     */
    pendingFocusSession = null;
    containerRef;
    containerResizeObserver;
    /** Latest pointer Y during a drag, read by the auto-scroll loop — not @State, it'd re-render on every dragover. */
    dragClientY = null;
    autoScrollRaf = null;
    /**
     * One tooltip serves the whole grid. Anchoring per element would mean a
     * `wa-tooltip` per cell — ~2,300 of them in the cross-table view — so hovers are
     * delegated and this single instance is re-anchored instead.
     */
    tooltipRef;
    tooltipTimer;
    componentWillLoad() {
        this.dragEntries = this.entries;
    }
    componentDidLoad() {
        if (this.containerRef) {
            this.containerResizeObserver = new ResizeObserver(entries => {
                const width = entries[0]?.contentRect.width;
                if (width) {
                    this.containerWidth = width;
                }
            });
            this.containerResizeObserver.observe(this.containerRef);
        }
    }
    disconnectedCallback() {
        this.containerResizeObserver?.disconnect();
        this.stopAutoScroll();
        clearTimeout(this.tooltipTimer);
    }
    // #region Shared tooltip
    /** Re-points the shared tooltip at whatever `[data-tooltip]` element the pointer is over. */
    handleTooltipOver = (event) => {
        const target = event.target?.closest?.('[data-tooltip]');
        this.showTooltipFor(target);
    };
    /** Shared by hover and by keyboard focus, so truncated cell text is readable either way. */
    showTooltipFor(target) {
        const tooltip = this.tooltipRef;
        if (!tooltip) {
            return;
        }
        const text = target?.dataset.tooltip;
        if (!target || !text) {
            this.hideTooltip();
            return;
        }
        if (tooltip.anchor === target && tooltip.open) {
            return;
        }
        // Re-anchoring a visible tooltip makes the bubble skate across the grid, so it
        // always closes first and re-opens on the new anchor after the usual hover beat.
        clearTimeout(this.tooltipTimer);
        tooltip.open = false;
        this.tooltipTimer = setTimeout(() => {
            tooltip.textContent = text;
            tooltip.anchor = target;
            tooltip.open = true;
        }, 250);
    }
    hideTooltip = () => {
        clearTimeout(this.tooltipTimer);
        if (this.tooltipRef) {
            this.tooltipRef.open = false;
        }
    };
    // #endregion
    /** A drag in progress owns row order locally — only resync from the parent once it's idle. */
    handleEntriesChange(newEntries) {
        if (!this.draggingId) {
            this.dragEntries = newEntries;
        }
    }
    componentDidRender() {
        this.syncActionTabStops();
        const pending = this.pendingFocus;
        if (!pending) {
            return;
        }
        this.pendingFocus = null;
        // wa-input's shadow DOM hasn't necessarily finished its first Lit render
        // synchronously after insertion, so focus() can run before the internal
        // <input> exists — defer past that render.
        requestAnimationFrame(() => {
            if (pending === 'cell') {
                this.cellElement(this.activeCell.row, this.activeCell.col)?.focus();
                return;
            }
            const session = this.pendingFocusSession;
            // Superseded by a later edit, or already handled by a pass queued alongside this one.
            if (!session || session !== this.editSession) {
                return;
            }
            const input = this.cellElement(this.activeCell.row, this.activeCell.col)?.querySelector('wa-input');
            if (!input) {
                // This frame ran ahead of the render that creates the input; the pass queued
                // by that render finds it. Leave the session pending for it.
                return;
            }
            this.pendingFocusSession = null;
            input.focus();
            session.focused = true;
            if (session.seeded) {
                // Editing began by typing over the cell: that first character is the value now.
                session.seeded = false;
                input.value = session.draft;
                input.input?.setSelectionRange(session.draft.length, session.draft.length);
                return;
            }
            // focus() alone leaves the caret at position 0, so typing would prepend.
            if (session.select === 'all') {
                input.input?.select();
            }
            else {
                input.input?.setSelectionRange(session.draft.length, session.draft.length);
            }
        });
    }
    /**
     * `ir-custom-button` renders a `wa-button` of its own, which would put a tab stop
     * in every single row — and the grid is meant to be one tab stop, entered with Tab
     * and walked with arrows. The trigger stays reachable through its own cell (Enter
     * opens the menu) and by mouse; it just isn't tabbable any more.
     *
     * Deferred a frame because child components render after this one, so the
     * `wa-button` doesn't exist yet on a first paint. `:not([tabindex])` keeps the
     * sweep idempotent across re-renders.
     */
    syncActionTabStops() {
        requestAnimationFrame(() => {
            this.containerRef?.querySelectorAll('td.entries-table__actions wa-button:not([tabindex])').forEach(button => button.setAttribute('tabindex', '-1'));
        });
    }
    // #region Grid geometry
    /** Every column arrow keys can land on, in visual order. */
    get navColumns() {
        return [
            { id: 'key', kind: 'key' },
            ...(this.showNotes ? [{ id: 'notes', kind: 'note' }] : []),
            ...this.languages.map(language => ({ id: language.code, kind: 'lang', code: language.code })),
            { id: 'actions', kind: 'actions' },
        ];
    }
    /**
     * Rows actually on screen. Grouped mode drops the rows of folded tables, and
     * navigation indices have to agree with what's rendered or arrow keys would
     * step into cells that don't exist.
     */
    get visibleEntries() {
        if (!this.groupByTable || this.collapsedTables.size === 0) {
            return this.dragEntries;
        }
        return this.dragEntries.filter(entry => !this.collapsedTables.has(entry.tableName ?? ''));
    }
    cellValue(entry, column) {
        return column.kind === 'note' ? (entry.meta?.notes ?? '') : (entry.values[column.code] ?? '');
    }
    /** Key and Actions are navigable but never editable; system-protected rows lock their values. */
    isCellEditable(entry, column) {
        return (column.kind === 'note' || column.kind === 'lang') && entry.meta?.isUpdateable !== false;
    }
    cellElement(row, col) {
        return this.containerRef?.querySelector(`td[data-row="${row}"][data-col="${col}"]`) ?? null;
    }
    /** Rows and columns come and go with filters — without this the single tab stop could end up on a cell that no longer exists. */
    clampActiveCell() {
        this.activeCell = {
            row: clamp(this.activeCell.row, 0, Math.max(0, this.visibleEntries.length - 1)),
            col: clamp(this.activeCell.col, 0, Math.max(0, this.navColumns.length - 1)),
        };
    }
    // #endregion
    // #region Editing
    /**
     * `select` follows the spreadsheet convention: arriving on a cell from the keyboard
     * selects its whole value so typing replaces it, while clicking into one puts the
     * caret after the text so a typo can be fixed without retyping the cell.
     */
    startEditing(entry, column, options = {}) {
        if (!this.isCellEditable(entry, column)) {
            return;
        }
        const { initial, select = 'all' } = options;
        const original = this.cellValue(entry, column);
        this.editSession = {
            key: `${entry.id}|${column.id}`,
            entryId: entry.id,
            columnId: column.id,
            field: column.kind === 'note' ? 'note' : 'lang',
            code: column.code,
            original,
            draft: initial ?? original,
            committed: false,
            seeded: initial !== undefined,
            select,
            focused: false,
        };
        this.editingKey = this.editSession.key;
        this.pendingFocus = 'input';
        this.pendingFocusSession = this.editSession;
        // Park focus on the cell right now, before the render that creates the input.
        // Otherwise focus sits on the outgoing input (about to be removed) or falls to
        // <body> when it is, and anything typed in that gap lands where this component
        // can't hear it. On the cell, the grid handler buffers it into this session.
        this.cellElement(this.activeCell.row, this.activeCell.col)?.focus({ preventScroll: true });
    }
    /**
     * Saves a session at most once, and only when its value actually moved. Each
     * emit is a live `Edit_Setup` write plus a toast in the manager, so flagging
     * `committed` *before* emitting matters: the trailing `change`/`blur` from the
     * input this commit is about to replace lands right back here.
     */
    commitSession(session) {
        if (!session || session.committed) {
            return;
        }
        session.committed = true;
        if (session.draft === session.original) {
            return;
        }
        // Read the row back out rather than closing over it — the parent patches
        // `entries` optimistically on every commit, so a cell edited twice in a row
        // must build on the patched version, not the one this editor opened over.
        const entry = this.dragEntries.find(item => item.id === session.entryId);
        if (!entry) {
            return;
        }
        const newEntry = session.field === 'note' ? { ...entry, meta: { ...entry.meta, notes: session.draft } } : { ...entry, values: { ...entry.values, [session.code]: session.draft } };
        this.entryChange.emit(newEntry);
    }
    closeEditor(focusCell = true) {
        this.editSession = null;
        this.editingKey = null;
        this.pendingFocusSession = null;
        if (focusCell) {
            this.pendingFocus = 'cell';
        }
    }
    /** Escape: discard the draft, and make sure the trailing blur can't resurrect it. */
    cancelEditing(session) {
        session.committed = true;
        this.closeEditor();
    }
    handleEditorBlur(session) {
        this.commitSession(session);
        // Keyboard navigation has already pointed `editingKey` at the next cell by the
        // time this fires, so only a genuine focus-out should close the editor.
        if (this.editingKey === session.key) {
            this.editSession = null;
            this.editingKey = null;
        }
    }
    /**
     * The three keys that end an edit. Shared with the cell handler, because a fast
     * Enter-Enter or Tab-Tab can land before the next editor's input has taken focus
     * and those keystrokes have to keep working rather than falling on the floor.
     * Returns whether the key was one of them.
     */
    handleEditKey(event, session) {
        if (event.key === 'Escape') {
            event.preventDefault();
            this.cancelEditing(session);
            return true;
        }
        if (event.key === 'Enter') {
            event.preventDefault();
            this.commitSession(session);
            this.moveEditing(session, event.shiftKey ? -1 : 1, 0);
            return true;
        }
        if (event.key === 'Tab') {
            event.preventDefault();
            this.commitSession(session);
            this.moveEditing(session, 0, event.shiftKey ? -1 : 1);
            return true;
        }
        return false;
    }
    handleEditorKeyDown(event, session) {
        if (this.handleEditKey(event, session)) {
            // The cell below must not handle this a second time.
            event.stopPropagation();
        }
    }
    /**
     * Moves the open editor through the grid, wrapping across row ends so Tab walks
     * the whole table the way a spreadsheet does. Key/Actions columns and locked
     * rows are stepped over rather than stopped on, and running off either end
     * leaves focus parked on the cell it started from instead of on nothing.
     */
    moveEditing(session, rowDelta, colDelta) {
        const rows = this.visibleEntries;
        const columns = this.navColumns;
        const fromRow = rows.findIndex(entry => entry.id === session.entryId);
        const fromCol = columns.findIndex(column => column.id === session.columnId);
        if (fromRow === -1 || fromCol === -1) {
            this.closeEditor(false);
            return;
        }
        let row = fromRow;
        let col = fromCol;
        const stop = () => {
            this.activeCell = { row: fromRow, col: fromCol };
            this.closeEditor();
        };
        // Bounded by the grid size — a table where every cell is locked must not spin.
        for (let step = 0; step <= rows.length * columns.length; step++) {
            if (colDelta !== 0) {
                col += colDelta;
                if (col >= columns.length) {
                    col = 0;
                    row += 1;
                }
                else if (col < 0) {
                    col = columns.length - 1;
                    row -= 1;
                }
            }
            else {
                row += rowDelta;
            }
            if (row < 0 || row >= rows.length) {
                stop();
                return;
            }
            if (this.isCellEditable(rows[row], columns[col])) {
                this.activeCell = { row, col };
                this.startEditing(rows[row], columns[col]);
                return;
            }
        }
        stop();
    }
    // #endregion
    // #region Keyboard navigation
    /** Moves the grid's single tab stop, swapping `tabindex` on the DOM directly so no re-render is needed. */
    focusCell(row, col) {
        const target = this.cellElement(row, col);
        if (!target) {
            return;
        }
        const previous = this.cellElement(this.activeCell.row, this.activeCell.col);
        if (previous && previous !== target) {
            previous.tabIndex = -1;
        }
        this.activeCell = { row, col };
        target.tabIndex = 0;
        // focus() would scroll the cell to the middle of the container; `nearest` keeps
        // the grid still unless the cell is genuinely off-screen.
        target.focus({ preventScroll: true });
        target.scrollIntoView({ block: 'nearest', inline: 'nearest' });
        this.showTooltipFor(target.querySelector('[data-tooltip]'));
    }
    /** Click, or Shift+Tab back into the grid — whatever the browser focused becomes the tab stop. */
    handleCellFocus(row, col, td) {
        if (this.activeCell.row === row && this.activeCell.col === col) {
            return;
        }
        const previous = this.cellElement(this.activeCell.row, this.activeCell.col);
        if (previous && previous !== td) {
            previous.tabIndex = -1;
        }
        this.activeCell = { row, col };
        td.tabIndex = 0;
    }
    activateCell(entry, column, row, col) {
        this.activeCell = { row, col };
        if (column.kind === 'key') {
            this.editEntry.emit(entry);
            return;
        }
        if (column.kind === 'actions') {
            const dropdown = this.cellElement(row, col)?.querySelector('wa-dropdown');
            if (dropdown) {
                dropdown.open = true;
            }
            return;
        }
        this.startEditing(entry, column);
    }
    /** A key that should open a cell and become its first character, rather than being a command. */
    isPrintable(event) {
        return event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey;
    }
    handleGridKeyDown(event, row, col) {
        // While an editor is open it owns every key it cares about and stops those from
        // bubbling; anything that reaches here is meant for the text field.
        if (this.editingKey) {
            const pending = this.editSession;
            if (!pending || pending.focused) {
                return;
            }
            // The editor exists but its input is still a frame away from focus. Everything
            // typed in that gap belongs to it: without this, "Zed" would open the cell on
            // "Z" alone, and a fast Enter-Enter down a column would swallow the second one.
            if (this.handleEditKey(event, pending)) {
                return;
            }
            if (this.isPrintable(event)) {
                if (!pending.seeded) {
                    // Arriving on a cell from the keyboard selects its whole value, so the first
                    // character replaces it — exactly as it would with the input already focused.
                    pending.draft = pending.select === 'all' ? '' : pending.draft;
                    pending.seeded = true;
                }
                pending.draft += event.key;
                event.preventDefault();
            }
            return;
        }
        const rows = this.visibleEntries;
        const columns = this.navColumns;
        const entry = rows[row];
        const column = columns[col];
        if (!entry || !column) {
            return;
        }
        const lastRow = rows.length - 1;
        const lastCol = columns.length - 1;
        // Arrow keys are physical; the grid can be laid out either way (RTL languages,
        // RTL document), so the inline direction decides which one means "next column".
        const sign = direction.inlineSign();
        const jumpsToEdge = event.ctrlKey || event.metaKey;
        switch (event.key) {
            case 'ArrowRight':
                this.focusCell(row, clamp(col + sign, 0, lastCol));
                break;
            case 'ArrowLeft':
                this.focusCell(row, clamp(col - sign, 0, lastCol));
                break;
            case 'ArrowDown':
                this.focusCell(clamp(row + 1, 0, lastRow), col);
                break;
            case 'ArrowUp':
                this.focusCell(clamp(row - 1, 0, lastRow), col);
                break;
            case 'Home':
                this.focusCell(jumpsToEdge ? 0 : row, 0);
                break;
            case 'End':
                this.focusCell(jumpsToEdge ? lastRow : row, lastCol);
                break;
            case 'PageDown':
                this.focusCell(clamp(row + PAGE_ROWS, 0, lastRow), col);
                break;
            case 'PageUp':
                this.focusCell(clamp(row - PAGE_ROWS, 0, lastRow), col);
                break;
            case 'Enter':
            case 'F2':
            case ' ':
                this.activateCell(entry, column, row, col);
                break;
            default:
                // Typing over a cell opens it on that character, as a spreadsheet would.
                if (this.isPrintable(event) && this.isCellEditable(entry, column)) {
                    this.activeCell = { row, col };
                    this.startEditing(entry, column, { initial: event.key });
                    break;
                }
                // Tab is deliberately not handled: the grid is one tab stop, so Tab leaves it.
                return;
        }
        event.preventDefault();
    }
    handleCellClick(entry, column, row, col) {
        this.activeCell = { row, col };
        if (column.kind === 'key') {
            this.editEntry.emit(entry);
            return;
        }
        // The dropdown's own trigger handles this; a click inside the open editor must
        // not tear down the session it lands in.
        if (column.kind === 'actions' || this.editingKey === `${entry.id}|${column.id}`) {
            return;
        }
        this.startEditing(entry, column, { select: 'end' });
    }
    // #endregion
    handleRowAction(action, entry) {
        switch (action) {
            case 'edit':
                this.editEntry.emit(entry);
                break;
            case 'duplicate':
                this.duplicateEntry.emit(entry);
                break;
            case 'copy':
                navigator.clipboard?.writeText(entry.key);
                break;
            case 'copy-row':
                // The clipboard gets only the key so it pastes cleanly into the Key
                // field; the translations wait in memory for the form to pick up.
                utils.setCopiedEntry(entry);
                navigator.clipboard?.writeText(entry.key);
                utils$1.showToast({ type: 'success', title: 'Row copied — paste its key into a new entry to reuse its translations.' });
                break;
            case 'move':
                this.moveEntry.emit(entry);
                break;
            case 'delete':
                this.deleteEntry.emit(entry);
                break;
            case 'toggle-visibility':
                this.toggleVisibility.emit(entry);
                break;
        }
    }
    // #region Drag and drop
    handleDragStart = (event, entry) => {
        if (!this.reorderEnabled) {
            event.preventDefault();
            return;
        }
        this.draggingId = entry.id;
        event.dataTransfer?.setData('text/plain', entry.id);
        if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = 'move';
        }
        this.startAutoScroll();
    };
    /** Live-shifts the dragged row to the position of whichever row it's currently hovering. */
    handleDragOver = (event, overEntry) => {
        if (!this.reorderEnabled || !this.draggingId) {
            return;
        }
        event.preventDefault();
        this.dragClientY = event.clientY;
        if (this.draggingId === overEntry.id) {
            return;
        }
        const fromIndex = this.dragEntries.findIndex(entry => entry.id === this.draggingId);
        const toIndex = this.dragEntries.findIndex(entry => entry.id === overEntry.id);
        if (fromIndex === -1 || toIndex === -1 || fromIndex === toIndex) {
            return;
        }
        const next = [...this.dragEntries];
        const [moved] = next.splice(fromIndex, 1);
        next.splice(toIndex, 0, moved);
        this.dragEntries = next;
    };
    /** Catches dragover over the container's own padding/gaps (not just row cells) so the pointer Y stays fresh for auto-scroll. */
    handleContainerDragOver = (event) => {
        if (!this.reorderEnabled || !this.draggingId) {
            return;
        }
        event.preventDefault();
        this.dragClientY = event.clientY;
    };
    handleDragEnd = () => {
        const changed = this.dragEntries.length === this.entries.length && this.dragEntries.some((entry, index) => entry.id !== this.entries[index]?.id);
        if (changed) {
            this.reorderEntries.emit(this.dragEntries);
        }
        this.draggingId = null;
        this.stopAutoScroll();
    };
    /**
     * Native HTML5 drag has no scroll-follow of its own, so a row dragged past
     * the container's top/bottom edge would otherwise strand the user there —
     * nudge `.table--container`'s own scroll position each frame while the
     * pointer sits in either edge zone, faster the closer it is to the edge.
     */
    startAutoScroll() {
        if (this.autoScrollRaf !== null) {
            return;
        }
        const edgeZone = 48;
        const maxSpeed = 16;
        const tick = () => {
            if (!this.draggingId || this.dragClientY === null || !this.containerRef) {
                this.autoScrollRaf = null;
                return;
            }
            const rect = this.containerRef.getBoundingClientRect();
            let delta = 0;
            if (this.dragClientY < rect.top + edgeZone) {
                delta = -maxSpeed * Math.min(1, (rect.top + edgeZone - this.dragClientY) / edgeZone);
            }
            else if (this.dragClientY > rect.bottom - edgeZone) {
                delta = maxSpeed * Math.min(1, (this.dragClientY - (rect.bottom - edgeZone)) / edgeZone);
            }
            if (delta !== 0) {
                this.containerRef.scrollTop += delta;
            }
            this.autoScrollRaf = requestAnimationFrame(tick);
        };
        this.autoScrollRaf = requestAnimationFrame(tick);
    }
    stopAutoScroll() {
        if (this.autoScrollRaf !== null) {
            cancelAnimationFrame(this.autoScrollRaf);
            this.autoScrollRaf = null;
        }
        this.dragClientY = null;
    }
    renderDragHandle(entry) {
        const label = this.reorderEnabled ? `Reorder ${entry.key || 'key'}` : 'Clear filters to reorder';
        return (index.h("span", { class: `entries-table__drag-handle ${this.reorderEnabled ? '' : '--disabled'}`, draggable: this.reorderEnabled, "data-tooltip": label, "aria-label": label, onDragStart: (e) => this.handleDragStart(e, entry), onDragEnd: this.handleDragEnd }, index.h("wa-icon", { name: "grip-vertical", "aria-hidden": "true" })));
    }
    // #endregion
    renderValueCell(entry, column) {
        const isNote = column.kind === 'note';
        const language = isNote ? undefined : this.languages.find(item => item.code === column.code);
        const value = this.cellValue(entry, column);
        const session = this.editSession;
        const isEditing = !!session && session.key === `${entry.id}|${column.id}`;
        const ariaLabel = isNote ? `${entry.key} note` : `${language?.name} translation for ${entry.key || 'new entry'}`;
        const dir = !isNote && direction.isRtlLanguage(column.code) ? 'rtl' : 'ltr';
        if (entry.meta?.isUpdateable === false) {
            return (index.h("span", { class: "entries-table__cell-display --readonly" }, utils.hasValue(value) ? (index.h("span", { class: "entries-table__cell-text", "data-tooltip": value }, value)) : (index.h("span", { class: "entries-table__cell-missing" }, "Missing")), index.h("wa-icon", { name: "lock", class: "entries-table__cell-lock", "aria-hidden": "true" })));
        }
        if (isEditing) {
            return (index.h("wa-input", { size: "s", value: value, class: "entries-table__cell-input", label: ariaLabel, autocomplete: "off", spellcheck: false, ref: el => {
                    // Not a JSX `dir` prop: every wa-* element declares `dir` as a
                    // non-reflecting Lit property, so Stencil would assign the property
                    // and the attribute directionality reads from would never be set.
                    el?.setAttribute('dir', dir);
                }, oninput: (e) => (session.draft = e.target.value), onKeyDown: (e) => this.handleEditorKeyDown(e, session), onblur: () => this.handleEditorBlur(session),
                // `change` fires on Enter *and* on blur, and neither is guaranteed once
                // the input is torn down mid-render — committing is idempotent per
                // session, so wiring both simply means the save can't be missed.
                onchange: () => this.commitSession(session) }));
        }
        return (index.h("span", { class: `entries-table__cell-display ${utils.hasValue(value) ? '' : '--empty'}` }, utils.hasValue(value) ? (index.h("span", { class: "entries-table__cell-text", "data-tooltip": value }, value)) : (index.h("span", { class: "entries-table__cell-missing" }, "Missing"))));
    }
    /** The duplicate badge. Its tooltip rides the shared instance like every other hover target here. */
    renderDuplicateBadge(entry) {
        const duplicate = this.duplicates.get(entry.id);
        if (!duplicate) {
            return null;
        }
        // Other used tables only — the row's own table is never counted (see buildDuplicateMap).
        const tableCount = duplicate.tables.length;
        const rowCount = duplicate.siblings.length;
        const tables = duplicate.tables.join(', ');
        // Rows and tables diverge when a description repeats inside one table, which is
        // worth calling out rather than hiding behind a table count.
        const label = rowCount > tableCount
            ? `${rowCount} matching entries in ${tableCount} other ${tableCount === 1 ? 'table' : 'tables'} (${tables}) — language edits sync there`
            : `Also in ${tableCount} other ${tableCount === 1 ? 'table' : 'tables'} (${tables}) — language edits sync there`;
        return (index.h("span", { class: "entries-table__dup-badge", "data-tooltip": label, "aria-label": label,
            // The whole key cell opens the entry drawer — the badge is a hover target, not a way in.
            onClick: (event) => event.stopPropagation() }, index.h("wa-icon", { name: "clone", "aria-hidden": "true" }), tableCount));
    }
    renderKeyCell(entry) {
        const isHidden = entry.meta?.isVisible === false;
        return (index.h("div", { class: "entries-table__key-container" }, isHidden && (index.h("span", { class: "entries-table__key-hidden-mark", "data-tooltip": "Hidden from the app", "aria-label": `${entry.key || 'This key'} is hidden from the app` }, index.h("wa-icon", { name: "eye-slash", "aria-hidden": "true" }))), index.h("span", { class: "entries-table__key-text", "data-tooltip": entry.key }, entry.key), this.renderDuplicateBadge(entry), index.h("wa-icon", { class: "entries-table__key-icon", name: "pen-to-square" })));
    }
    renderLangHead(language) {
        return (index.h("span", { class: "entries-table__lang-head" }, index.h("abbr", { class: "entries-table__lang-code", "data-tooltip": language.name, "aria-label": language.name }, language.code.toUpperCase()), language.code === this.sourceCode && index.h("span", { class: "entries-table__lang-source" }, "source")));
    }
    renderActionsCell(entry) {
        return (index.h("wa-dropdown", { "onwa-select": (e) => this.handleRowAction(e.detail.item.value, entry) }, index.h("ir-custom-button", { slot: "trigger", appearance: "plain", variant: "neutral", iconBtn: true }, index.h("wa-icon", { name: "ellipsis", label: `Actions for ${entry.key || 'entry'}` })), index.h("wa-dropdown-item", { value: "edit", disabled: entry.meta?.isUpdateable === false }, index.h("wa-icon", { slot: "icon", name: "pen" }), "Edit all languages"), index.h("wa-dropdown-item", { value: "copy" }, index.h("wa-icon", { slot: "icon", name: "clipboard" }), "Copy key"), index.h("wa-dropdown-item", { value: "copy-row" }, index.h("wa-icon", { slot: "icon", name: "clone" }), "Copy row"), index.h("wa-dropdown-item", { value: "move", disabled: entry.meta?.isUpdateable === false }, index.h("wa-icon", { slot: "icon", name: "arrow-right-arrow-left" }), "Move to table\u2026"), index.h("wa-dropdown-item", { value: "toggle-visibility" }, index.h("wa-icon", { slot: "icon", name: entry.meta?.isVisible === false ? 'eye' : 'eye-slash' }), entry.meta?.isVisible === false ? 'Show in app' : 'Hide from app'), index.h("wa-dropdown-item", { value: "delete", variant: "danger" }, index.h("wa-icon", { slot: "icon", name: "trash-can" }), t.t('Lcz_Delete', { fallback: 'Delete' }))));
    }
    buildColumns() {
        const helper = useTable.createColumnHelper();
        return [
            helper.display({
                id: 'drag',
                header: () => index.h("span", { class: "entries-table__sr-only" }, "Reorder"),
                cell: info => this.renderDragHandle(info.row.original),
            }),
            helper.accessor('key', {
                id: 'key',
                header: () => 'Key',
                cell: info => this.renderKeyCell(info.row.original),
            }),
            ...(this.showNotes
                ? [
                    helper.display({
                        id: 'notes',
                        header: 'Notes',
                        cell: info => this.renderValueCell(info.row.original, { id: 'notes', kind: 'note' }),
                    }),
                ]
                : []),
            ...this.languages.map(language => helper.accessor(row => row.values[language.code] ?? '', {
                id: language.code,
                header: () => this.renderLangHead(language),
                cell: info => this.renderValueCell(info.row.original, { id: language.code, kind: 'lang', code: language.code }),
            })),
            helper.display({
                id: 'actions',
                header: () => index.h("span", { class: "entries-table__sr-only" }, t.t('Lcz_Actions', { fallback: 'Actions' })),
                cell: info => this.renderActionsCell(info.row.original),
            }),
        ];
    }
    /**
     * The language column pinned beside the key. Deliberately "whichever is
     * leftmost" rather than a lookup by source code — pinning a column from the
     * middle of the row would park it on top of its neighbours.
     */
    get pinnedLanguageCode() {
        return this.languages[0]?.code;
    }
    renderCell(cell, rowIndex) {
        const columnId = cell.column.id;
        const isLangColumn = this.languages.some(language => language.code === columnId);
        const columns = this.navColumns;
        const colIndex = columns.findIndex(column => column.id === columnId);
        const column = colIndex === -1 ? null : columns[colIndex];
        const entry = cell.row.original;
        const isActive = !!column && this.activeCell.row === rowIndex && this.activeCell.col === colIndex;
        const isLocked = entry.meta?.isUpdateable === false;
        return (index.h("td", { key: cell.id, class: {
                'entries-table__key': columnId === 'key',
                'entries-table__source-cell': isLangColumn && columnId === this.pinnedLanguageCode,
                'entries-table__value-cell': isLangColumn || columnId === 'notes',
                'entries-table__actions': columnId === 'actions',
                'entries-table__drag-cell': columnId === 'drag',
            },
            // The cell itself is the focus target, not the content inside it: one uniform
            // roving tab stop for Key, Notes, language and Actions cells, and no focusable
            // button nested inside a focusable gridcell.
            tabindex: column ? (isActive ? '0' : '-1') : undefined, "data-row": column ? rowIndex : undefined, "data-col": column ? colIndex : undefined, "aria-readonly": column && (column.kind === 'note' || column.kind === 'lang') && isLocked ? 'true' : undefined, onKeyDown: column ? (e) => this.handleGridKeyDown(e, rowIndex, colIndex) : undefined, onFocus: column ? (e) => this.handleCellFocus(rowIndex, colIndex, e.currentTarget) : undefined, onClick: column ? () => this.handleCellClick(entry, column, rowIndex, colIndex) : undefined }, useTable.flexRender(cell.column.columnDef.cell, cell.getContext())));
    }
    renderRow(row, rowIndex) {
        const entry = row.original;
        return (index.h("tr", { key: row.id, class: {
                'ir-table-row': true,
                'entries-table__row--dragging': this.draggingId === entry.id,
                'entries-table__row--reordered': this.changedEntryIds.has(entry.id),
                'entries-table__row--hidden': entry.meta?.isVisible === false,
                'entries-table__row--deleted': entry.meta?.isDeleted === true,
            }, onDragOver: (e) => this.handleDragOver(e, entry), onDrop: (e) => e.preventDefault() }, row.getVisibleCells().map(cell => this.renderCell(cell, rowIndex))));
    }
    // #region Table grouping
    toggleGroup(name) {
        const next = new Set(this.collapsedTables);
        if (next.has(name)) {
            next.delete(name);
        }
        else {
            next.add(name);
        }
        this.collapsedTables = next;
    }
    renderGroupHeader(name, count) {
        const collapsed = this.collapsedTables.has(name);
        return (index.h("tr", { key: `group:${name}`, class: "entries-table__group-row" }, index.h("td", { class: "entries-table__group-cell", colSpan: (this.showNotes ? 4 : 3) + this.languages.length }, index.h("button", { type: "button", class: "entries-table__group-toggle", "aria-expanded": collapsed ? 'false' : 'true', onClick: () => this.toggleGroup(name) }, index.h("wa-icon", { class: "entries-table__group-chevron", name: "chevron-down", "aria-hidden": "true" }), index.h("span", { class: "entries-table__group-name" }, name), index.h("span", { class: "entries-table__group-count" }, count, " key", count === 1 ? '' : 's')))));
    }
    /**
     * Opens a group header row each time the table name changes and drops the rows
     * of collapsed groups. Rows arrive already sorted by table, so one pass suffices
     * and a group can never be reopened further down the list.
     */
    renderGroupedRows(rows) {
        const counts = new Map();
        rows.forEach(row => {
            const name = row.original.tableName ?? '';
            counts.set(name, (counts.get(name) ?? 0) + 1);
        });
        const nodes = [];
        let currentGroup = null;
        // Counts only the rows that actually render, so `data-row` lines up with
        // `visibleEntries` — the list arrow keys walk.
        let visibleIndex = 0;
        rows.forEach(row => {
            const name = row.original.tableName ?? '';
            if (name !== currentGroup) {
                currentGroup = name;
                nodes.push(this.renderGroupHeader(name, counts.get(name) ?? 0));
            }
            if (!this.collapsedTables.has(name)) {
                nodes.push(this.renderRow(row, visibleIndex));
                visibleIndex += 1;
            }
        });
        return nodes;
    }
    // #endregion
    renderEmptyState() {
        if (this.languages.length === 0) {
            return index.h("ir-empty-state", { message: "Add a language before creating translation keys." });
        }
        if (this.filtered) {
            return (index.h("ir-empty-state", { message: "No keys match the current search and filters." }, index.h("ir-custom-button", { appearance: "outlined", variant: "neutral", onClickHandler: () => this.clearFilters.emit() }, "Clear filters")));
        }
        return index.h("ir-empty-state", { message: "No keys in this table yet \u2014 add one to get started." });
    }
    render() {
        if (this.dragEntries.length === 0 || this.languages.length === 0) {
            return index.h(index.Host, { class: "--empty" }, this.renderEmptyState());
        }
        this.clampActiveCell();
        const columns = this.buildColumns();
        const table = useTable.useTable({
            data: this.dragEntries,
            columns,
            getCoreRowModel: useTable.getCoreRowModel(),
        });
        // Fixed columns (drag handle, key, notes, actions) stay a constant width;
        // language columns split whatever's left in the container equally, with a
        // 200px floor below which the table falls back to its own horizontal
        // scroll instead of squeezing columns further.
        const notesColWidth = 180;
        const fixedColsWidth = 32 + 220 + 44 + (this.showNotes ? notesColWidth : 0);
        const minLangColWidth = 200;
        const langColWidth = Math.max(minLangColWidth, Math.floor((this.containerWidth - fixedColsWidth) / this.languages.length));
        const minWidth = fixedColsWidth + langColWidth * this.languages.length;
        return (index.h(index.Host, { class: this.compact ? '--compact' : '' }, index.h("div", { class: "table--container", ref: el => (this.containerRef = el), onDragOver: this.handleContainerDragOver, onMouseOver: this.handleTooltipOver, onMouseLeave: this.hideTooltip, onScroll: this.hideTooltip }, index.h("table", { role: "grid", class: "table data-table entries-table__table", style: { minWidth: `${minWidth}px` } }, index.h("colgroup", null, index.h("col", { class: "entries-table__col--drag" }), index.h("col", { class: "entries-table__col--key" }), this.showNotes && index.h("col", { class: "entries-table__col--notes", style: { width: `${notesColWidth}px` } }), index.h("col", { class: "entries-table__col--lang", span: this.languages.length, style: { width: `${langColWidth}px` } }), index.h("col", { class: "entries-table__col--actions" })), index.h("thead", null, table.getHeaderGroups().map(headerGroup => (index.h("tr", { key: headerGroup.id }, headerGroup.headers.map(header => (index.h("th", { key: header.id, scope: "col", class: {
                'entries-table__key-head': header.column.id === 'key',
                'entries-table__source-head': header.column.id === this.pinnedLanguageCode,
            } }, !header.isPlaceholder && useTable.flexRender(header.column.columnDef.header, header.getContext())))))))), index.h("tbody", null, this.groupByTable ? this.renderGroupedRows(table.getRowModel().rows) : table.getRowModel().rows.map((row, index) => this.renderRow(row, index)), index.h("tr", { class: 'last__row' }, index.h("td", { colSpan: 10 }))))), index.h("wa-tooltip", { class: "entries-table__tooltip", ref: el => (this.tooltipRef = el), trigger: "manual", placement: "top" })));
    }
    static get watchers() { return {
        "entries": [{
                "handleEntriesChange": 0
            }]
    }; }
};
IrTranslationsEntriesTable.style = irTranslationsEntriesTableCss();

const irTranslationsEntryDrawerCss = () => `.sc-ir-translations-entry-drawer-h{--ir-drawer-width:32rem}`;

const IrTranslationsEntryDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDrawer = index.createEvent(this, "closeDrawer");
        this.entrySaved = index.createEvent(this, "entrySaved");
    }
    open = false;
    formId = 'translations-entry-form';
    languages = [];
    /** The entry being edited. Null puts the drawer in create mode. */
    entry = null;
    /** Keys already used in the active table, for duplicate detection. */
    existingKeys = [];
    /** DISPLAY_ORDER a brand-new key should get — one past the highest order already in the table. */
    nextDisplayOrder = 0;
    tableName;
    ownerId;
    entryUserId;
    /** Passed through to the form — rows in other tables that share `entry`'s description. */
    duplicateSiblings = [];
    closeDrawer;
    entrySaved;
    saveDisabled = true;
    isSubmitting = false;
    render() {
        const isEditing = !!this.entry;
        return (index.h("ir-drawer", { key: 'c4051b7d1b2f6c1c238d7c3ce2d4c559b44295a2', label: isEditing ? 'Edit key' : 'New key', open: this.open, onDrawerHide: () => this.closeDrawer.emit() }, this.open && (index.h("ir-translations-entry-form", { key: '3122e5cb430ccc5b8bd01aa45831d3314e4626ed', formId: this.formId, languages: this.languages, entry: this.entry, existingKeys: this.existingKeys, nextDisplayOrder: this.nextDisplayOrder, tableName: this.tableName, ownerId: this.ownerId, entryUserId: this.entryUserId, duplicateSiblings: this.duplicateSiblings, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onEntrySaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.entrySaved.emit(e.detail);
                this.closeDrawer.emit();
            } })), index.h("div", { key: '9e350f1fce18f47bdebb5ab47c8ffedffd91129d', slot: "footer", class: "ir__drawer-footer" }, index.h("ir-custom-button", { key: '50f0b66431a51a2019b3da3bf6895b6dec96dcdb', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDrawer.emit() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '6be77204f60bd60aafed040e01d3e404fc299a1f', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
};
IrTranslationsEntryDrawer.style = irTranslationsEntryDrawerCss();

/**
 * Setup only has a fixed set of CODE_VALUE_* columns, so the manager cannot
 * offer arbitrary languages the way a purely local prototype could — every
 * language shown must map to one of these codes to be persisted.
 */
const SETUP_LANGUAGE_CODES = ['en', 'fr', 'ar', 'ru', 'el', 'he', 'pl', 'de', 'ua'];
function isSetupLanguageCode(code) {
    return SETUP_LANGUAGE_CODES.includes(code);
}
/**
 * Which languages this property actually wants translated, and their display
 * names, come from Get_Exposed_Languages — narrowed to the codes Setup can
 * actually persist, since a property may expose a language with no matching
 * CODE_VALUE_* column.
 */
function exposedLanguagesToTranslationLanguages(exposed) {
    return exposed
        .map(language => ({ code: language.code.toLowerCase(), name: language.description }))
        .filter((language) => isSetupLanguageCode(language.code))
        .map(language => ({ ...language, isSource: language.code === 'en' }));
}
function readSetupValue(entry, code) {
    switch (code) {
        case 'en':
            return entry.CODE_VALUE_EN ?? '';
        case 'fr':
            return entry.CODE_VALUE_FR ?? '';
        case 'ar':
            return entry.CODE_VALUE_AR ?? '';
        case 'ru':
            return entry.CODE_VALUE_RU ?? '';
        case 'el':
            return entry.CODE_VALUE_EL ?? '';
        case 'he':
            return entry.CODE_VALUE_HE ?? '';
        case 'pl':
            return entry.CODE_VALUE_PL ?? '';
        case 'de':
            return entry.CODE_VALUE_DE ?? '';
        case 'ua':
            return entry.CODE_VALUE_UA ?? '';
    }
}
/**
 * CODE_NAME is unique within a table but not across tables, so the local id is
 * table-qualified — the cross-table "missing translations" view holds rows from
 * several tables in one list and would otherwise collide on shared codes.
 */
function setupEntryToTranslationEntry(entry) {
    const values = {};
    for (const code of SETUP_LANGUAGE_CODES) {
        values[code] = readSetupValue(entry, code);
    }
    return {
        id: `${entry.TBL_NAME}::${entry.CODE_NAME}`,
        key: entry.CODE_NAME,
        tableName: entry.TBL_NAME,
        values,
        meta: {
            ownerId: entry.OWNER_ID ?? 0,
            isSystem: entry.ISSYSTEM,
            isDeleteable: entry.ISDELETEABLE,
            isUpdateable: entry.ISUPDATEABLE,
            isVisible: entry.ISVISIBLE,
            isDeleted: entry.ISDELETED,
            displayOrder: entry.DISPLAY_ORDER ?? 0,
            notes: entry.NOTES ?? '',
            invariantValue: entry.INVARIANT_VALUE,
            entryDate: entry.ENTRY_DATE,
        },
    };
}
/**
 * Builds a full Edit_Setup payload for creating or updating one entry.
 * Administrative flags fall back to "normal, fully-editable custom entry"
 * defaults when `meta` is absent (i.e. the entry is being created).
 */
function buildEditSetupParams(input) {
    const { meta } = input;
    return {
        // OWNER_ID: meta?.ownerId ?? input.ownerId,
        TBL_NAME: input.tableName,
        CODE_NAME: input.key,
        ISSYSTEM: meta?.isSystem ?? false,
        ISDELETEABLE: meta?.isDeleteable ?? true,
        ISUPDATEABLE: meta?.isUpdateable ?? true,
        ISVISIBLE: meta?.isVisible ?? true,
        ISDELETED: input.isDeleted ?? false,
        DISPLAY_ORDER: input.displayOrder ?? meta?.displayOrder ?? 0,
        CODE_VALUE_EN: input.values.en ?? '',
        CODE_VALUE_FR: input.values.fr ?? '',
        CODE_VALUE_AR: input.values.ar ?? '',
        CODE_VALUE_RU: input.values.ru ?? '',
        CODE_VALUE_EL: input.values.el ?? '',
        CODE_VALUE_HE: input.values.he ?? '',
        CODE_VALUE_PL: input.values.pl ?? '',
        CODE_VALUE_DE: input.values.de ?? '',
        CODE_VALUE_UA: input.values.ua ?? '',
        ENTRY_DATE: input.touch || !meta?.entryDate ? moment.hooks().toISOString() : meta.entryDate,
        // ENTRY_USER_ID: input.entryUserId,
        NOTES: meta?.notes ?? '',
        INVARIANT_VALUE: meta?.invariantValue ?? null,
    };
}

const EMPTY_PLAN = { params: [], entries: [] };
/**
 * Works out the writes that bring a description's rows in other used tables in step
 * with a language edit. The caller folds `params` into the *same* Edit_Setup_Many as
 * the row that was edited, so a synced edit costs one write however many tables it
 * touches.
 *
 * Siblings aren't in memory (only the active table's rows are loaded), so each is
 * fetched first — `buildEditSetupParams` without a row's own meta would reset its
 * flags, order and notes to defaults. Only the changed language values travel:
 * notes, keys and flags stay per-row. System-protected and soft-deleted siblings are
 * left alone, as is anything already holding the new values.
 */
async function planDuplicateSync(service, { siblings, changedValues, ownerId, entryUserId, touch, }) {
    const codes = Object.keys(changedValues);
    if (siblings.length === 0 || codes.length === 0) {
        return EMPTY_PLAN;
    }
    const rows = await Promise.all(siblings.map(sibling => service.getSetupEntryByCode({ TBL_NAME: sibling.tableName, CODE_NAME: sibling.key })));
    const entries = rows
        .filter((row) => row !== null)
        .map(setupEntryToTranslationEntry)
        .filter(sibling => sibling.meta?.isUpdateable !== false && sibling.meta?.isDeleted !== true)
        .filter(sibling => codes.some(code => (sibling.values[code] ?? '') !== changedValues[code]))
        .map(sibling => ({ ...sibling, values: { ...sibling.values, ...changedValues } }));
    const params = entries.map(sibling => buildEditSetupParams({
        tableName: sibling.tableName,
        key: sibling.key,
        values: sibling.values,
        meta: sibling.meta,
        touch,
    }));
    return { params, entries };
}

const irTranslationsEntryFormCss = () => `.sc-ir-translations-entry-form-h{display:block}.entry-form__body.sc-ir-translations-entry-form{display:flex;flex-direction:column;gap:1.25rem}.entry-form__field.sc-ir-translations-entry-form{display:flex;align-items:end}.entry-form__field.sc-ir-translations-entry-form>.entry-form__value-input.sc-ir-translations-entry-form{flex:1 1 0%}.entry-form__field.sc-ir-translations-entry-form:dir(rtl){flex-direction:row-reverse}.entry-form__field.sc-ir-translations-entry-form>.entry-form__value-copy.sc-ir-translations-entry-form{margin-bottom:0.5rem}.entry-form__key-input.sc-ir-translations-entry-form::part(input),.entry-form__key-input.sc-ir-translations-entry-form [part~="input"]{font-family:var(--wa-font-family-code, ui-monospace, SFMono-Regular, Menlo, monospace)}.entry-form__error.sc-ir-translations-entry-form{margin:-1rem 0 0;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-danger-on-quiet, #991b1b)}.entry-form__section.sc-ir-translations-entry-form{display:flex;flex-direction:column;gap:0.75rem;padding-top:1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.entry-form__section-header.sc-ir-translations-entry-form{display:flex;align-items:baseline;justify-content:space-between;gap:0.5rem}.entry-form__section-title.sc-ir-translations-entry-form{margin:0;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}.entry-form__section-meta.sc-ir-translations-entry-form{font-size:var(--wa-font-size-xs, 0.75rem);font-variant-numeric:tabular-nums;color:var(--wa-color-text-quiet)}.entry-form__ai-actions.sc-ir-translations-entry-form{display:flex;flex-wrap:wrap;gap:0.5rem}.entry-form__fields.sc-ir-translations-entry-form{display:flex;flex-direction:column;gap:0.85rem}.entry-form__field-label.sc-ir-translations-entry-form{display:inline-flex;align-items:center;gap:0.4rem}.entry-form__field-code.sc-ir-translations-entry-form{font-size:0.6875rem;font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-quiet)}.entry-form__field-source.sc-ir-translations-entry-form{padding:0.05rem 0.35rem;font-size:0.6875rem;font-weight:var(--wa-font-weight-normal, 400);color:var(--wa-color-brand-on-quiet);background:var(--wa-color-brand-fill-quiet);border-radius:var(--wa-border-radius-s)}`;

/** Every key the form creates starts with this — the Key field's mask prepends it. */
const KEY_PREFIX = 'Lcz_';
/** Pulls a `{ "code": "translation" }` object out of an AI reply, tolerating markdown fences and surrounding prose. */
function extractTranslationObject(text) {
    const trimmed = text?.trim();
    if (!trimmed) {
        return null;
    }
    const fenced = /```(?:json)?\s*([\s\S]*?)```/i.exec(trimmed);
    const candidate = fenced ? fenced[1] : trimmed;
    const start = candidate.indexOf('{');
    const end = candidate.lastIndexOf('}');
    if (start === -1 || end === -1 || end < start) {
        return null;
    }
    try {
        const parsed = JSON.parse(candidate.slice(start, end + 1));
        return parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : null;
    }
    catch {
        return null;
    }
}
const IrTranslationsEntryForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.entrySaved = index.createEvent(this, "entrySaved");
        this.submitDisabledChange = index.createEvent(this, "submitDisabledChange");
        this.isSubmittingChange = index.createEvent(this, "isSubmittingChange");
    }
    formId;
    languages = [];
    /** The entry being edited. Null puts the form in create mode. */
    entry = null;
    /** Keys already used in the active table, for duplicate detection. */
    existingKeys = [];
    /** DISPLAY_ORDER a brand-new key should get — one past the highest order already in the table. */
    nextDisplayOrder = 0;
    tableName;
    ownerId;
    entryUserId;
    /** Rows in other used tables sharing `entry`'s description — language changes are written to them in the same batch. */
    duplicateSiblings = [];
    /** Fired after the write lands, with what was saved — the manager propagates language changes to the row's duplicates from it. */
    entrySaved;
    submitDisabledChange;
    isSubmittingChange;
    key = '';
    values = {};
    isSubmitting = false;
    keyInputRef;
    setupService = new index$2.SetupService();
    /** Key the copied row was last applied for — so backspacing and retyping it doesn't re-fill and re-toast. */
    filledFromCopiedKey = null;
    componentWillLoad() {
        this.key = this.entry?.key ?? '';
        this.values = { ...(this.entry?.values ?? {}) };
        this.submitDisabledChange.emit(!this.isValid);
    }
    componentDidLoad() {
        requestAnimationFrame(() => this.keyInputRef?.focusInput());
    }
    get isEditing() {
        return !!this.entry;
    }
    get trimmedKey() {
        return this.key.trim();
    }
    get isDuplicateKey() {
        if (!this.trimmedKey) {
            return false;
        }
        if (this.isEditing && this.trimmedKey === this.entry.key) {
            return false;
        }
        return this.existingKeys.includes(this.trimmedKey);
    }
    get isValid() {
        return this.trimmedKey.length > 0 && !this.isDuplicateKey;
    }
    get translatedCount() {
        return this.languages.filter(language => utils.hasValue(this.values[language.code])).length;
    }
    get sourceLanguage() {
        return utils.getSourceLanguage(this.languages);
    }
    get targetLanguages() {
        const sourceCode = this.sourceLanguage?.code;
        return this.languages.filter(language => language.code !== sourceCode);
    }
    get missingLanguages() {
        return this.targetLanguages.filter(language => !utils.hasValue(this.values[language.code]));
    }
    get canCopyPrompt() {
        return utils.hasValue(this.values[this.sourceLanguage?.code]) && this.missingLanguages.length > 0;
    }
    get canPasteTranslations() {
        return this.targetLanguages.length > 0;
    }
    buildTranslationPrompt() {
        const source = this.sourceLanguage;
        const missing = this.missingLanguages;
        const targets = missing.map(language => `${language.name} (${language.code})`).join(', ');
        return [
            `Translate the following UI text from ${source.name} (${source.code}) into: ${targets}.`,
            '',
            'Text:',
            '"""',
            this.values[source.code],
            '"""',
            '',
            'Rules:',
            '- Preserve placeholders, variables, and HTML tags exactly (e.g. {0}, %s, {{name}}, <b>).',
            '- Keep the tone and length appropriate for a UI label, button, or short message.',
            '- Reply with ONLY a JSON object mapping each language code to its translation — no explanation, no markdown fences.',
            '',
            `Example shape: {${missing.map(language => `"${language.code}": "..."`).join(', ')}}`,
        ].join('\n');
    }
    handleCopyPrompt = async () => {
        if (!this.canCopyPrompt) {
            return;
        }
        try {
            await navigator.clipboard.writeText(this.buildTranslationPrompt());
            utils$1.showToast({ type: 'success', title: 'Prompt copied — paste it into your AI chatbot.' });
        }
        catch (error) {
            console.error(error);
            utils$1.showToast({ type: 'error', title: 'Unable to copy prompt to clipboard.' });
        }
    };
    handlePasteTranslations = async () => {
        let text;
        try {
            text = await navigator.clipboard.readText();
        }
        catch (error) {
            console.error(error);
            utils$1.showToast({ type: 'error', title: 'Unable to read clipboard — allow clipboard access and try again.' });
            return;
        }
        const parsed = extractTranslationObject(text);
        if (!parsed) {
            utils$1.showToast({ type: 'error', title: "Couldn't find a translation JSON object in the clipboard." });
            return;
        }
        const targetCodes = new Set(this.targetLanguages.map(language => language.code));
        const next = { ...this.values };
        let filled = 0;
        for (const [code, value] of Object.entries(parsed)) {
            const normalizedCode = code.trim();
            if (!targetCodes.has(normalizedCode) || typeof value !== 'string' || !utils.hasValue(value)) {
                continue;
            }
            next[normalizedCode] = value;
            filled++;
        }
        if (filled === 0) {
            utils$1.showToast({ type: 'error', title: 'No matching language codes found in the clipboard text.' });
            return;
        }
        this.values = next;
        utils$1.showToast({ type: 'success', title: `Filled ${filled} translation${filled === 1 ? '' : 's'} from clipboard.` });
    };
    handleKeyChange(value) {
        this.key = value ?? '';
        this.submitDisabledChange.emit(!this.isValid);
        this.fillFromCopiedEntry();
    }
    /**
     * The other half of the table's "Copy row": a new entry given the copied row's
     * key inherits its translations. Only blanks are filled, so anything already
     * typed into a language field stays.
     */
    fillFromCopiedEntry() {
        const copied = utils.getCopiedEntry();
        const key = this.trimmedKey;
        // The mask prepends KEY_PREFIX to whatever is pasted, so a row copied from a
        // table whose keys lack it ("001") arrives here as "Lcz_001" — still a match.
        const matches = !!copied && (key === copied.key || key === KEY_PREFIX + copied.key);
        if (this.isEditing || !key || !matches || this.filledFromCopiedKey === key) {
            return;
        }
        const next = { ...this.values };
        let filled = 0;
        for (const language of this.languages) {
            const value = copied.values[language.code];
            if (utils.hasValue(value) && !utils.hasValue(next[language.code])) {
                next[language.code] = value;
                filled++;
            }
        }
        this.filledFromCopiedKey = key;
        if (filled === 0) {
            return;
        }
        this.values = next;
        utils$1.showToast({ type: 'success', title: `Filled ${filled} translation${filled === 1 ? '' : 's'} from the copied row.` });
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        if (!this.isValid) {
            return;
        }
        const previous = this.entry;
        // CODE_NAME is the natural key Edit_Setup upserts on, so changing it
        // creates a brand-new row — the old one has to be soft-deleted explicitly,
        // otherwise it lingers behind as an orphaned duplicate.
        const keyChanged = !!previous && previous.key !== this.trimmedKey;
        // A brand-new row either way (fresh create, or the rename's replacement
        // row) — meta is dropped below for both, so it has no displayOrder to
        // inherit and would otherwise default to 0, jumping to the front.
        const isNewRow = !previous || keyChanged;
        this.isSubmitting = true;
        this.isSubmittingChange.emit(true);
        try {
            // Everything this save needs goes out as one Edit_Setup_Many: the soft-delete of
            // a renamed key, the row itself, and its duplicates in other tables. A plain
            // Edit_Setup is only used when there's nothing else to send.
            const writes = [];
            if (keyChanged) {
                writes.push(buildEditSetupParams({
                    tableName: this.tableName,
                    key: previous.key,
                    values: previous.values,
                    meta: previous.meta,
                    isDeleted: true,
                    touch: true,
                }));
            }
            writes.push(buildEditSetupParams({
                tableName: this.tableName,
                key: this.trimmedKey,
                values: this.values,
                meta: keyChanged ? undefined : previous?.meta,
                touch: true,
                displayOrder: isNewRow ? this.nextDisplayOrder : undefined,
            }));
            // Duplicates are keyed by the row as it was, so a rename still finds them. If they
            // can't be read the user's own save still goes out, just without them.
            let syncFailed = false;
            const sync = previous
                ? await planDuplicateSync(this.setupService, {
                    siblings: this.duplicateSiblings,
                    changedValues: utils.diffValues(previous.values, this.values),
                    ownerId: this.ownerId,
                    entryUserId: this.entryUserId,
                    touch: true,
                }).catch((error) => {
                    console.error(error);
                    syncFailed = true;
                    return { params: [], entries: [] };
                })
                : { params: [], entries: [] };
            writes.push(...sync.params);
            if (writes.length > 1) {
                await this.setupService.editSetupMany(writes);
            }
            else {
                await this.setupService.editSetup(writes[0]);
            }
            utils$1.showToast(syncFailed ? { type: 'error', title: 'Saved, but its duplicate rows could not be updated' } : { type: 'success', title: previous ? 'Key updated' : 'Key created' });
            this.entrySaved.emit({ tableName: this.tableName, key: this.trimmedKey, syncedCount: sync.entries.length });
        }
        finally {
            this.isSubmitting = false;
            this.isSubmittingChange.emit(false);
        }
    };
    render() {
        const total = this.languages.length;
        const translated = this.translatedCount;
        return (index.h("form", { key: '24a48d172a1bc5bd801bb77f5926a1f08a60342b', id: this.formId, class: "entry-form__body", onSubmit: this.handleSubmit, novalidate: true }, index.h("ir-input", { key: 'ab39e10263d8dff8f1d804bba1f25a44e95d3b43', label: "Key", readonly: this.isEditing, autocomplete: "off", mask: {
                mask: `{${KEY_PREFIX}}TEXT`,
                eager: true,
                blocks: {
                    TEXT: {
                        mask: '*', // Accept any character
                        repeat: Infinity, // Unlimited characters
                    },
                },
            }, spellcheck: false, class: "entry-form__key-input", value: this.key, placeholder: "e.g. Lcz_BookingConfirmed", "onText-change": e => this.handleKeyChange(e.detail), ref: el => (this.keyInputRef = el) }, index.h("wa-copy-button", { key: 'd0bb81755ef1c85f0338f15794c3a085697851d9', value: this.key ?? '', slot: "end" })), this.isDuplicateKey && (index.h("p", { key: '406019186c3aa6ce6a250e042c081f2cef9d3e4b', class: "entry-form__error", role: "alert" }, "This key already exists in this table.")), index.h("div", { key: '08a2371443da89441bb832d3002190948ff4edcb', class: "entry-form__section" }, index.h("div", { key: 'ac9634dcd46d00c269ffa2276b97d080f59eff9a', class: "entry-form__section-header" }, index.h("h3", { key: '4e0709b6777b67b80d8838c529dc4b1b180d8a99', class: "entry-form__section-title" }, "Translations"), index.h("span", { key: 'a66eb19d734d72bbe5cc74f250c30ae9a48aa2bb', class: "entry-form__section-meta" }, translated, " of ", total, " filled")), this.targetLanguages.length > 0 && (index.h("div", { key: '2aa63f784cd43b9b229e35f661122b32fc2789a4', class: "entry-form__ai-actions" }, index.h("ir-custom-button", { key: '6e1ced0b694e7cd8a13328dcb6a93a434060ac08', size: "s", appearance: "outlined", variant: "neutral", disabled: !this.canCopyPrompt, onClickHandler: this.handleCopyPrompt }, index.h("wa-icon", { key: '8238c5d8ac3ecd92ed37c4e5628d80288f9dd58c', name: "copy", slot: "start", "aria-hidden": "true" }), "Copy AI prompt"), index.h("ir-custom-button", { key: '29730d0acd5ee14f3a93e7a3a1a8a4911439e357', size: "s", appearance: "outlined", variant: "neutral", disabled: !this.canPasteTranslations, onClickHandler: this.handlePasteTranslations }, index.h("wa-icon", { key: 'b1657bce74a47c6ea632c128c919d7a8098472a4', name: "clipboard", slot: "start", "aria-hidden": "true" }), "Paste AI translations"))), total === 0 ? (index.h("ir-empty-state", { message: "No languages configured yet. Add one from Manage languages first." })) : (index.h("div", { class: "entry-form__fields" }, this.languages.map(language => (index.h("div", { class: "entry-form__field", key: language.code, dir: language.code === 'ar' ? 'rtl' : 'ltr' }, index.h("wa-textarea", { class: "entry-form__value-input", id: language.code, size: "s", rows: 2, resize: "auto", value: this.values[language.code] ?? '', placeholder: "Enter translation\u2026", oninput: (e) => (this.values = { ...this.values, [language.code]: e.target.value }) }, index.h("span", { slot: "label", class: "entry-form__field-label" }, language.name, index.h("span", { class: "entry-form__field-code" }, language.code.toUpperCase()), language.isSource && index.h("span", { class: "entry-form__field-source" }, t.t('Lcz_Source', { fallback: 'Source' })))), index.h("wa-copy-button", { class: "entry-form__value-copy", value: this.values[language.code] ?? '' })))))))));
    }
};
IrTranslationsEntryForm.style = irTranslationsEntryFormCss();

const irTranslationsManagerCss = () => `.sc-ir-translations-manager-h{display:block;height:100%}.tm__page-actions.sc-ir-translations-manager{display:flex;align-items:center;flex-wrap:wrap;gap:0.5rem 0.75rem}.translation-manager__page.sc-ir-translations-manager::part(body),.translation-manager__page.sc-ir-translations-manager [part~="body"]{height:100%}.tm__table-picker.sc-ir-translations-manager{display:flex;align-items:center;gap:0.35rem;min-width:0}.tm__table-select.sc-ir-translations-manager{flex:1 1 auto;min-width:0;width:15rem}.tm__table-select.sc-ir-translations-manager::part(label),.tm__table-select.sc-ir-translations-manager [part~="label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.tm__table-select.sc-ir-translations-manager::part(listbox),.tm__table-select.sc-ir-translations-manager [part~="listbox"]{max-height:300px;width:350px}.tm__search.sc-ir-translations-manager{flex:0 1 auto;min-width:0;width:14rem}.tm__missing-select.sc-ir-translations-manager{flex:0 1 auto;min-width:0;width:17rem;--tag-max-size:7ch}.tm__missing-select.sc-ir-translations-manager::part(tags),.tm__missing-select.sc-ir-translations-manager [part~="tags"]{flex-wrap:nowrap}.tm__search.sc-ir-translations-manager::part(label),.tm__search.sc-ir-translations-manager [part~="label"],.tm__missing-select.sc-ir-translations-manager::part(form-control-label),.tm__missing-select.sc-ir-translations-manager [part~="form-control-label"]{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}.tm__missing-select.sc-ir-translations-manager::part(listbox),.tm__missing-select.sc-ir-translations-manager [part~="listbox"]{max-height:300px}.tm__table-picker.sc-ir-translations-manager .tm__icon-btn.sc-ir-translations-manager,.tm__page-actions.sc-ir-translations-manager>.tm__icon-btn.sc-ir-translations-manager{flex:0 0 auto;--ir-c-btn-padding:0}@media (max-width: 575px){.tm__page-actions.sc-ir-translations-manager{width:100%}.tm__table-picker.sc-ir-translations-manager{flex:1 1 100%}.tm__table-select.sc-ir-translations-manager{width:auto}.tm__search.sc-ir-translations-manager,.tm__missing-select.sc-ir-translations-manager{flex:1 1 100%;width:auto}}.tm__loader-container.sc-ir-translations-manager{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.75rem;padding:3rem 1rem;color:var(--wa-color-text-quiet);font-size:var(--wa-font-size-s)}.tm__loader-container.sc-ir-translations-manager p.sc-ir-translations-manager{margin:0}.tm__confirm-text.sc-ir-translations-manager{margin:0}.tm__confirm-footer.sc-ir-translations-manager{display:flex;justify-content:flex-end;gap:0.5rem}`;

const IrTranslationsManager = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Auth ticket for the Setup API, following the same pattern as other feature roots. */
    ticket;
    /** Owning property id, sent as OWNER_ID on every write. */
    propertyid;
    /** Acting user id, sent as ENTRY_USER_ID on every write. */
    userId;
    tables = [];
    /** Every language this property exposes and Setup can persist — all of them are always shown. */
    languages = [];
    activeTableId = null;
    /** Hides setup tables nothing in this codebase reads. On by default — the full list is mostly noise. */
    usedTablesOnly = true;
    /** Text shown in the table picker — doubles as the option filter while typing. */
    tableQuery = '';
    entryDrawerOpen = false;
    entryDrawerEntry = null;
    tableDialogOpen = false;
    tableDialogMode = 'create';
    tableDialogTable = null;
    moveDialogOpen = false;
    moveDialogEntry = null;
    settingsDialogOpen = false;
    /** Non-source language codes pinned as columns. `null` means "not customized yet" — everything is pinned. */
    pinnedLanguageCodes = null;
    showNotesColumn = true;
    deleteTarget = null;
    /** True while the distinct table list is loading. */
    isLoading = false;
    /** True while the active table's keys are loading — set on every table switch. */
    isLoadingEntries = false;
    /** True while any write is in flight — guards against overlapping edits. */
    isMutating = false;
    /** True once a drag reorder is applied locally but not yet persisted. */
    orderDirty = false;
    /** Table the user picked while an order was still unsaved — held until they resolve the prompt. */
    pendingTableSwitchId = null;
    /** Entry ids in the active table's last-loaded (or last-saved) order — the yardstick `changedEntryIds` diffs against. */
    baselineOrderIds = [];
    /** Languages being audited for missing translations. Non-empty switches the page into the cross-table view. */
    missingLanguageCodes = [];
    /**
     * The debounced, long-enough-to-be-useful query actually driving the fetch.
     * Non-empty switches the page into the cross-table view. The field's live text is
     * deliberately *not* state — see `renderPageActions`.
     */
    appliedSearchQuery = '';
    /** Rows behind the cross-table view — the missing-language union, the search hits, or their intersection. */
    crossTableEntries = [];
    /** True while a cross-table query is in flight. */
    isLoadingCrossTable = false;
    /** Entry id (`TBL_NAME::CODE_NAME`) → the rows in other used tables sharing that row's description. Empty until the duplicate scan lands. */
    duplicates = new Map();
    deleteDialogRef;
    unsavedOrderDialogRef;
    apiClientService = new ApiClient.ApiClient();
    setupService = new index$2.SetupService();
    /** Every keystroke in the header search. Debounced downstream — typing shouldn't be a query per character. */
    search$ = new index$3.cjsExports.Subject();
    /** Re-runs the cross-table query at once — language changes and post-save refetches, neither of which wants the typing debounce. */
    refresh$ = new index$3.cjsExports.Subject();
    subscription;
    componentWillLoad() {
        const debouncedSearch$ = this.search$.pipe(index$3.cjsExports.debounceTime(600), index$3.cjsExports.map(value => value.trim()), 
        // A single character matches too much to be worth a round trip.
        index$3.cjsExports.map(value => (value.length >= 2 ? value : '')), index$3.cjsExports.distinctUntilChanged(), index$3.cjsExports.tap(value => (this.appliedSearchQuery = value)));
        this.subscription = index$3.cjsExports.merge(debouncedSearch$, this.refresh$)
            .pipe(index$3.cjsExports.tap(() => (this.isLoadingCrossTable = this.isCrossTableMode)), 
        // switchMap drops the response of any query a newer one has already superseded.
        index$3.cjsExports.switchMap(() => index$3.cjsExports.from(this.fetchCrossTableEntries()).pipe(index$3.cjsExports.catchError(() => index$3.cjsExports.of([])))))
            .subscribe(entries => {
            this.crossTableEntries = entries;
            this.isLoadingCrossTable = false;
        });
        if (this.ticket) {
            this.apiClientService.setApiClient(this.ticket);
            this.loadLanguages();
            this.loadTables();
            this.loadDuplicatedSetupEntriesAcrossTables();
        }
        this.usedTablesOnly = JSON.parse(localStorage.getItem(utils.USED_TABLES_LOCAL_STORAGE_NAME)) ?? true;
        const storedPinnedCodes = localStorage.getItem(utils.PINNED_LANG_LOCAL_STORAGE_NAME);
        this.pinnedLanguageCodes = storedPinnedCodes ? JSON.parse(storedPinnedCodes) : null;
        this.showNotesColumn = JSON.parse(localStorage.getItem(utils.SHOW_NOTES_LOCAL_STORAGE_NAME)) ?? true;
    }
    disconnectedCallback() {
        this.subscription?.unsubscribe();
    }
    handleTicketChange(newValue, oldValue) {
        if (newValue && newValue !== oldValue) {
            this.apiClientService.setApiClient(newValue);
            this.loadLanguages();
            this.loadTables();
            this.loadDuplicatedSetupEntriesAcrossTables();
        }
    }
    // #region Loading
    /**
     * Which languages this property actually wants translated, and their
     * display names, come from Setup's exposed-language catalog rather than a
     * hardcoded list — narrowed to the codes Setup can persist.
     */
    async loadLanguages() {
        try {
            this.languages = exposedLanguagesToTranslationLanguages(await this.setupService.getExposedLanguages());
        }
        finally {
        }
    }
    /**
     * One scan of every description shared by more than one setup table, flattened
     * into a per-row lookup (see `buildDuplicateMap`). Loaded once — it describes the
     * whole setup, not the table currently on screen — and refreshed after a drawer
     * save, since a key rename changes the id a row is filed under. A failure leaves
     * the badges off and edits un-propagated rather than taking the page down with it.
     */
    async loadDuplicatedSetupEntriesAcrossTables() {
        try {
            this.duplicates = utils.buildDuplicateMap(await this.setupService.getDuplicatedSetupEntriesAcrossTables());
        }
        catch (error) {
            console.error(error);
        }
    }
    /**
     * Only the distinct table names are fetched up front, to fill the picker —
     * a table's keys aren't loaded until it's actually selected.
     */
    async loadTables() {
        this.isLoading = true;
        try {
            const tableNames = await this.setupService.getDistinctSetupTables();
            this.tables = tableNames.map(name => ({ id: name, name, entries: [] }));
            this.setActiveTable(sessionStorage.getItem(utils.SESSION_CURRENT_TABLE) ?? this.visibleTables[0]?.id ?? null);
            // this.setActiveTable(this.tables.find(t => t.name === 'BLAbLA')?.id ?? null);
        }
        finally {
            this.isLoading = false;
        }
    }
    /**
     * Fetches one table's keys. Runs every time a table becomes active — including
     * a table that was just created locally and doesn't exist on the backend yet.
     * Skipped without a ticket so purely-local interactions (e.g. the demo page)
     * never fire a real, doomed-to-fail request.
     */
    async loadTableEntries(tableId) {
        if (!this.ticket) {
            return;
        }
        this.isLoadingEntries = true;
        try {
            const rows = await this.setupService.getSetupEntriesByTableName(tableId);
            const entries = utils.sortByDisplayOrder(rows.map(setupEntryToTranslationEntry));
            this.tables = this.tables.map(table => (table.id === tableId ? { ...table, entries } : table));
            // A fresh fetch is always the authoritative order — any pending local reorder is moot now.
            this.orderDirty = false;
            this.baselineOrderIds = entries.map(entry => entry.id);
        }
        finally {
            this.isLoadingEntries = false;
        }
    }
    /** Table-qualified id → entry, so two result sets can be intersected without re-deriving ids. */
    indexEntries(rows) {
        const byId = new Map();
        for (const row of rows) {
            const entry = setupEntryToTranslationEntry(row);
            if (!byId.has(entry.id)) {
                byId.set(entry.id, entry);
            }
        }
        return byId;
    }
    /**
     * The cross-table result set, from either header control or both.
     *
     * Get_Missing_Setup_Entries only takes one language, so the audited languages are
     * queried in parallel and *unioned* — a row missing AR *or* FR needs attention. The
     * search is a second, independent filter, so when both are set the two sets are
     * *intersected*: only rows that match the query and are still untranslated.
     */
    async fetchCrossTableEntries() {
        const query = this.appliedSearchQuery;
        const codes = this.missingLanguageCodes;
        if (!this.ticket || (codes.length === 0 && !query)) {
            return [];
        }
        const [missingRows, searchRows] = await Promise.all([
            codes.length > 0 ? Promise.all(codes.map(code => this.setupService.getMissingSetupEntries({ language: code.toUpperCase() }))) : Promise.resolve(null),
            query ? this.setupService.searchSetupByDescription({ query }) : Promise.resolve(null),
        ]);
        const missing = missingRows ? this.indexEntries(missingRows.flat()) : null;
        const found = searchRows ? this.indexEntries(searchRows) : null;
        const combined = missing && found ? new Map([...found].filter(([id]) => missing.has(id))) : (missing ?? found ?? new Map());
        // Sorted by table so the entries table can open a group header whenever the name changes.
        return [...combined.values()].sort((a, b) => (a.tableName ?? '').localeCompare(b.tableName ?? '') || (a.meta?.displayOrder ?? 0) - (b.meta?.displayOrder ?? 0));
    }
    // #endregion
    // #region Derived state
    get activeTable() {
        return this.tables.find(table => table.id === this.activeTableId);
    }
    get orderedLanguages() {
        return utils.orderLanguages(this.languages);
    }
    /**
     * Languages worth auditing for missing text. The source language is what
     * everything else is translated *from*, so "missing in English" is not a
     * question either filter should offer.
     */
    get auditableLanguages() {
        const sourceCode = utils.getSourceLanguage(this.languages)?.code;
        return this.languages.filter(language => language.code !== sourceCode);
    }
    /** True when a table survives the "used in this codebase" filter. */
    isTableAllowed(name) {
        return !this.usedTablesOnly || !name || utils.USED_SETUP_TABLE_SET.has(name);
    }
    /** The tables the picker offers — every one Setup reports, or only those the app reads. */
    get visibleTables() {
        return this.usedTablesOnly ? this.tables.filter(table => this.isTableAllowed(table.name)) : this.tables;
    }
    /** Cross-table results narrowed by the same filter, so search and audits can't surface a table the picker hides. */
    get allowedCrossTableEntries() {
        return this.usedTablesOnly ? this.crossTableEntries.filter(entry => this.isTableAllowed(entry.tableName)) : this.crossTableEntries;
    }
    /** Non-source language codes currently shown as columns. Defaults to every one until the user unpins something. */
    get effectivePinnedLanguageCodes() {
        if (this.pinnedLanguageCodes) {
            return this.pinnedLanguageCodes;
        }
        const sourceCode = utils.getSourceLanguage(this.languages)?.code;
        return this.languages.filter(language => language.code !== sourceCode).map(language => language.code);
    }
    /** True once either header control is engaged — the grid then shows rows from every table. */
    get isCrossTableMode() {
        return this.missingLanguageCodes.length > 0 || this.appliedSearchQuery.length > 0;
    }
    /** Whatever the entries panel is currently showing: the cross-table missing set, or the active table's keys. */
    get displayedEntries() {
        return this.isCrossTableMode ? this.allowedCrossTableEntries : (this.activeTable?.entries ?? []);
    }
    /**
     * Columns for the grid. The cross-table view narrows to the reference language
     * plus the ones being audited, so the missing cells are on screen without
     * scrolling past every other language.
     */
    get displayedLanguages() {
        // Only a language audit has columns worth narrowing to; a plain search says nothing about which ones matter.
        if (this.missingLanguageCodes.length === 0) {
            const pinned = new Set(this.effectivePinnedLanguageCodes);
            return this.orderedLanguages.filter(language => language.code === utils.getSourceLanguage(this.languages)?.code || pinned.has(language.code));
        }
        const source = utils.getSourceLanguage(this.languages);
        const audited = this.languages.filter(language => this.missingLanguageCodes.includes(language.code));
        const seen = new Set();
        return [...(source ? [source] : []), ...audited].filter(language => {
            if (seen.has(language.code)) {
                return false;
            }
            seen.add(language.code);
            return true;
        });
    }
    /** Names the control that came up empty, so the user knows which one to loosen. */
    get crossTableEmptyMessage() {
        const query = this.appliedSearchQuery;
        const hasLanguages = this.missingLanguageCodes.length > 0;
        if (query && hasLanguages) {
            return `No keys matching “${query}” are still missing a translation in the selected languages.`;
        }
        if (query) {
            return `No keys match “${query}” in any table.`;
        }
        return 'Nothing is missing a translation in the selected languages.';
    }
    /** Distinct tables represented in the missing set, in the order they appear — the panel's table filter options. */
    get crossTableNames() {
        return [...new Set(this.allowedCrossTableEntries.map(entry => entry.tableName).filter((name) => !!name))];
    }
    /** One past the highest DISPLAY_ORDER in the active table — where a brand-new key should land. */
    get nextDisplayOrder() {
        const entries = this.activeTable?.entries ?? [];
        return entries.reduce((max, entry) => Math.max(max, entry.meta?.displayOrder ?? 0), -1) + 1;
    }
    /** Ids of rows whose position no longer matches the last-loaded/saved order — empty unless a reorder is pending. */
    get changedEntryIds() {
        if (!this.orderDirty || !this.activeTable) {
            return new Set();
        }
        const changed = new Set();
        this.activeTable.entries.forEach((entry, index) => {
            if (this.baselineOrderIds[index] !== entry.id) {
                changed.add(entry.id);
            }
        });
        return changed;
    }
    /**
     * Options for the table picker. While the field still shows the selected
     * table's name the whole list is offered, so reopening the picker doesn't
     * narrow it down to the one table already chosen.
     */
    get filteredTables() {
        const tables = this.visibleTables;
        const query = this.tableQuery.trim().toLowerCase();
        if (!query || query === this.activeTable?.name.toLowerCase()) {
            return tables;
        }
        return tables.filter(table => table.name.toLowerCase().includes(query));
    }
    // #endregion
    updateActiveTable(update) {
        const activeId = this.activeTableId;
        this.tables = this.tables.map(table => (table.id === activeId ? update(table) : table));
    }
    /** The table a row is written back to — its own in the cross-table view, the active one otherwise. */
    tableNameFor(entry) {
        return entry.tableName ?? this.activeTable?.name;
    }
    /**
     * Writes back into whichever collection is on screen. `tableId` pins a table-mode
     * write to the table it started against, so a rollback landing after a table
     * switch can't corrupt the newly-selected one.
     */
    patchEntries(update, tableId) {
        if (this.isCrossTableMode) {
            this.crossTableEntries = update(this.crossTableEntries);
            return;
        }
        const targetId = tableId ?? this.activeTableId;
        this.tables = this.tables.map(table => (table.id === targetId ? { ...table, entries: update(table.entries) } : table));
    }
    /**
     * Selecting a table always re-labels the picker, so the field never drifts
     * from what's shown, and always (re)fetches that table's keys — there's no
     * per-table cache, so switching back to an already-seen table hits the API again.
     */
    setActiveTable(id) {
        this.activeTableId = id;
        this.tableQuery = this.tables.find(table => table.id === id)?.name ?? '';
        this.orderDirty = false;
        sessionStorage.setItem(utils.SESSION_CURRENT_TABLE, id);
        if (id) {
            this.loadTableEntries(id);
        }
    }
    /**
     * ir-autocomplete has no "closed without choosing" event, so abandoned search
     * text would otherwise sit in the field labelling the wrong table. Deferring a
     * frame lets a pending option click land first, which makes this a no-op.
     */
    restoreTableQuery() {
        setTimeout(() => {
            const name = this.activeTable?.name ?? '';
            if (this.tableQuery !== name) {
                this.tableQuery = name;
            }
        }, 0);
    }
    /** Picking a table from the header autocomplete goes through here so an unsaved drag reorder can't be silently discarded. */
    requestActiveTableChange(id) {
        if (this.orderDirty && id !== this.activeTableId) {
            this.pendingTableSwitchId = id;
            this.unsavedOrderDialogRef?.openModal();
            return;
        }
        this.setActiveTable(id);
    }
    discardOrderAndSwitchTable() {
        const target = this.pendingTableSwitchId;
        this.pendingTableSwitchId = null;
        this.unsavedOrderDialogRef?.closeModal();
        if (target) {
            this.setActiveTable(target);
        }
    }
    /** Saves the current table's order first — only switches once that write actually lands. */
    async saveOrderAndSwitchTable() {
        await this.handleSaveOrder();
        if (this.orderDirty) {
            // handleSaveOrder already toasted the failure — leave the prompt open so the user can retry or discard instead.
            return;
        }
        const target = this.pendingTableSwitchId;
        this.pendingTableSwitchId = null;
        this.unsavedOrderDialogRef?.closeModal();
        if (target) {
            this.setActiveTable(target);
        }
    }
    // #region Entry CRUD
    openCreateEntry() {
        this.entryDrawerEntry = null;
        this.entryDrawerOpen = true;
    }
    openEditEntry(entry) {
        this.entryDrawerEntry = entry;
        this.entryDrawerOpen = true;
    }
    /**
     * The entry form saved (and possibly soft-deleted/recreated) directly against Setup,
     * with the row's duplicates in the same batch — refetch to pick up the result. The
     * duplicate map is reloaded too: a key rename changes the id a row is filed under.
     */
    handleEntrySaved = (event) => {
        const { syncedCount } = event.detail;
        if (syncedCount > 0) {
            utils$1.showToast({ type: 'success', title: `Also updated ${syncedCount} duplicate ${syncedCount === 1 ? 'row' : 'rows'}` });
        }
        if (this.isCrossTableMode) {
            this.refresh$.next();
        }
        else if (this.activeTableId) {
            this.loadTableEntries(this.activeTableId);
        }
        this.loadDuplicatedSetupEntriesAcrossTables();
    };
    async handleEntryChange(updatedEntry) {
        const tableName = this.tableNameFor(updatedEntry);
        if (!tableName) {
            return;
        }
        const tableId = this.activeTableId;
        const previousEntries = this.displayedEntries;
        // Optimistic — the cell already shows the new value before the write lands.
        this.patchEntries(entries => entries.map(entry => (entry.id === updatedEntry.id ? updatedEntry : entry)), tableId);
        this.isMutating = true;
        try {
            const primary = buildEditSetupParams({
                tableName,
                key: updatedEntry.key,
                values: updatedEntry.values,
                meta: updatedEntry.meta,
                touch: false,
            });
            // A duplicated row's twins ride in the same Edit_Setup_Many as the row itself —
            // one write however many tables it touches. Only when the row has none, or its
            // twins can't be read, does it fall back to a plain Edit_Setup: the user's own
            // change must not be held hostage by a sibling lookup.
            const previous = previousEntries.find(entry => entry.id === updatedEntry.id);
            let syncFailed = false;
            const sync = await planDuplicateSync(this.setupService, {
                siblings: this.duplicates.get(updatedEntry.id)?.siblings ?? [],
                changedValues: utils.diffValues(previous?.values, updatedEntry.values),
                ownerId: this.propertyid,
                entryUserId: this.userId,
                touch: false,
            }).catch((error) => {
                console.error(error);
                syncFailed = true;
                return { params: [], entries: [] };
            });
            if (sync.params.length > 0) {
                await this.setupService.editSetupMany([primary, ...sync.params]);
            }
            else {
                await this.setupService.editSetup(primary);
            }
            const savedEntry = setupEntryToTranslationEntry(primary);
            this.patchEntries(entries => entries.map(entry => (entry.id === savedEntry.id ? savedEntry : entry)), tableId);
            // The cross-table view may have some of the synced rows on screen.
            const syncedById = new Map(sync.entries.map(entry => [entry.id, entry]));
            if (this.crossTableEntries.some(entry => syncedById.has(entry.id))) {
                this.crossTableEntries = this.crossTableEntries.map(entry => syncedById.get(entry.id) ?? entry);
            }
            const synced = sync.entries.length;
            if (syncFailed) {
                utils$1.showToast({ type: 'error', title: 'Saved, but its duplicate rows could not be updated' });
            }
            else {
                utils$1.showToast({
                    type: 'success',
                    title: synced > 0 ? `Saved — also updated ${synced} duplicate ${synced === 1 ? 'row' : 'rows'}` : t.t('Lcz_SavedSuccessfully', { fallback: 'Saved Successfully' }),
                });
            }
        }
        catch (error) {
            this.patchEntries(() => previousEntries, tableId);
        }
        finally {
            this.isMutating = false;
        }
    }
    /** Flips ISVISIBLE for one entry — a deliberate settings change, so it stamps a fresh ENTRY_DATE like any other content edit. */
    async handleToggleVisibility(entry) {
        const tableName = this.tableNameFor(entry);
        if (!tableName) {
            return;
        }
        const tableId = this.activeTableId;
        const nextVisible = !(entry.meta?.isVisible ?? true);
        const previousEntries = this.displayedEntries;
        this.patchEntries(entries => entries.map(item => (item.id === entry.id && item.meta ? { ...item, meta: { ...item.meta, isVisible: nextVisible } } : item)), tableId);
        this.isMutating = true;
        try {
            const saved = await this.setupService.editSetup(buildEditSetupParams({
                tableName,
                key: entry.key,
                values: entry.values,
                meta: entry.meta ? { ...entry.meta, isVisible: nextVisible } : entry.meta,
                touch: true,
            }));
            const savedEntry = setupEntryToTranslationEntry(saved);
            this.patchEntries(entries => entries.map(item => (item.id === savedEntry.id ? savedEntry : item)), tableId);
            utils$1.showToast({ type: 'success', title: nextVisible ? 'Key shown in app' : 'Key hidden from app' });
        }
        catch (error) {
            this.patchEntries(() => previousEntries, tableId);
        }
        finally {
            this.isMutating = false;
        }
    }
    /** A row drag finished — reindex every row's display order locally and flag it unsaved. */
    handleReorderEntries(orderedEntries) {
        // Order is a per-table concept — the cross-table view has no single table to reindex.
        if (this.isCrossTableMode) {
            return;
        }
        const reordered = orderedEntries.map((entry, index) => ({
            ...entry,
            meta: { ...entry.meta, displayOrder: index },
        }));
        this.updateActiveTable(current => ({ ...current, entries: reordered }));
        this.orderDirty = true;
    }
    /** Persists the locally-reindexed order — every row in the table is rewritten, matching the bulk-write shape used for table delete. */
    async handleSaveOrder() {
        const table = this.activeTable;
        if (!table || this.isCrossTableMode) {
            return;
        }
        this.isMutating = true;
        try {
            await this.setupService.editSetupMany(table.entries.map(entry => buildEditSetupParams({ tableName: table.name, key: entry.key, values: entry.values, meta: entry.meta })));
            this.orderDirty = false;
            this.baselineOrderIds = table.entries.map(entry => entry.id);
            utils$1.showToast({ type: 'success', title: 'Order saved' });
        }
        finally {
            this.isMutating = false;
        }
    }
    /** Drops the local reorder and refetches — the same "fresh fetch is authoritative" path `loadTableEntries` already resets order state through. */
    handleDiscardOrder() {
        if (this.activeTableId && !this.isCrossTableMode) {
            this.loadTableEntries(this.activeTableId);
        }
    }
    // private async handleDuplicateEntry(entry: TranslationEntry) {
    //   const table = this.activeTable;
    //   if (!table) {
    //     return;
    //   }
    //   const existingKeys = new Set(table.entries.map(item => item.key));
    //   let copyKey = `${entry.key}_copy`;
    //   let suffix = 2;
    //   while (existingKeys.has(copyKey)) {
    //     copyKey = `${entry.key}_copy_${suffix++}`;
    //   }
    //   this.isMutating = true;
    //   try {
    //     const saved = await this.setupService.editSetup(
    //       buildEditSetupParams({ ownerId: this.propertyid, entryUserId: this.userId, tableName: table.name, key: copyKey, values: entry.values }),
    //     );
    //     const savedEntry = setupEntryToTranslationEntry(saved);
    //     this.updateActiveTable(current => {
    //       const index = current.entries.findIndex(item => item.id === entry.id);
    //       const entries = [...current.entries];
    //       entries.splice(index + 1, 0, savedEntry);
    //       return { ...current, entries };
    //     });
    //   } catch (error) {
    //     console.error(error);
    //     showToast({ type: 'error', title: 'Unable to duplicate key' });
    //   } finally {
    //     this.isMutating = false;
    //   }
    // }
    requestDeleteEntry(entry) {
        this.deleteTarget = { type: 'entry', id: entry.id, label: entry.key || 'this key' };
        this.deleteDialogRef?.openModal();
    }
    openMoveEntry(entry) {
        // Same guard as the header search — a move refetches rows, which would silently drop an unsaved reorder.
        if (this.orderDirty) {
            utils$1.showToast({ type: 'error', title: 'Save or discard the pending order first' });
            return;
        }
        this.moveDialogEntry = { ...entry, tableName: this.tableNameFor(entry) };
        this.moveDialogOpen = true;
    }
    /** Move_Setup_Entry already re-homed the row — drop it from whatever is on screen and let the destination refetch when it's next selected. */
    handleEntryMoved({ entry }) {
        this.moveDialogOpen = false;
        this.moveDialogEntry = null;
        this.patchEntries(entries => entries.filter(item => item.id !== entry.id));
        if (this.isCrossTableMode) {
            // The row still matches the query — refetch so it reappears under its new table's header.
            this.refresh$.next();
        }
        // Duplicate badges are keyed by `TBL_NAME::CODE_NAME`, so the moved row's id just changed.
        this.loadDuplicatedSetupEntriesAcrossTables();
    }
    // #endregion
    // #region Table CRUD
    openCreateTable() {
        this.tableDialogMode = 'create';
        this.tableDialogTable = null;
        this.tableDialogOpen = true;
    }
    // private openEditTable(table: TranslationTable) {
    //   this.tableDialogMode = 'edit';
    //   this.tableDialogTable = table;
    //   this.tableDialogOpen = true;
    // }
    /** The table form saved (create, empty-table rename, or bulk rename) directly against Setup — reconcile local state with what it reports. */
    handleTableSaved = (saved) => {
        if (saved.mode === 'create') {
            const newTable = { id: saved.id, name: saved.name, entries: [] };
            this.tables = [...this.tables, newTable];
            this.setActiveTable(newTable.id);
            return;
        }
        const oldTable = this.tableDialogTable;
        if (!oldTable) {
            return;
        }
        this.tables = this.tables.map(t => (t.id === oldTable.id ? { id: saved.id, name: saved.name, entries: [] } : t));
        if (this.activeTableId === oldTable.id) {
            // Fetches the rows just written rather than trusting the write responses.
            this.setActiveTable(saved.id);
        }
    };
    /** The table form's bulk rename partially failed — reload everything rather than trust a half-applied local state. */
    handleTableSaveFailed = () => {
        this.loadTables();
    };
    // private async handleDuplicateTable(table: TranslationTable) {
    //   let name = `${table.name} (copy)`;
    //   let suffix = 2;
    //   while (this.tables.some(t => t.name === name)) {
    //     name = `${table.name} (copy ${suffix++})`;
    //   }
    //   if (table.entries.length === 0) {
    //     const copy: TranslationTable = { id: name, name, entries: [] };
    //     this.tables = [...this.tables, copy];
    //     this.setActiveTable(copy.id);
    //     return;
    //   }
    //   this.isMutating = true;
    //   try {
    //     await Promise.all(
    //       table.entries.map(entry =>
    //         this.setupService.editSetup(buildEditSetupParams({ ownerId: this.propertyid, entryUserId: this.userId, tableName: name, key: entry.key, values: entry.values })),
    //       ),
    //     );
    //     const copy: TranslationTable = { id: name, name, entries: [] };
    //     this.tables = [...this.tables, copy];
    //     // Fetches the rows just written rather than trusting the write responses.
    //     this.setActiveTable(copy.id);
    //     showToast({ type: 'success', title: 'Table duplicated' });
    //   } catch (error) {
    //     console.error(error);
    //     showToast({ type: 'error', title: 'Unable to duplicate table' });
    //   } finally {
    //     this.isMutating = false;
    //   }
    // }
    // private requestDeleteTable(table: TranslationTable) {
    //   const count = table.entries.length;
    //   this.deleteTarget = {
    //     type: 'table',
    //     id: table.id,
    //     label: table.name,
    //     detail: count > 0 ? `${count} key${count === 1 ? '' : 's'} will be deleted with it.` : undefined,
    //   };
    //   this.deleteDialogRef?.openModal();
    // }
    // #endregion
    async confirmDelete() {
        if (!this.deleteTarget) {
            return;
        }
        this.isMutating = true;
        try {
            if (this.deleteTarget.type === 'entry') {
                const entry = this.displayedEntries.find(item => item.id === this.deleteTarget.id);
                const tableName = entry ? this.tableNameFor(entry) : undefined;
                if (entry && tableName) {
                    await this.setupService.editSetup(buildEditSetupParams({
                        tableName,
                        key: entry.key,
                        values: entry.values,
                        meta: entry.meta,
                        isDeleted: true,
                        touch: true,
                    }));
                    this.patchEntries(entries => entries.filter(item => item.id !== entry.id));
                }
            }
            else {
                const table = this.tables.find(item => item.id === this.deleteTarget.id);
                if (table) {
                    await this.setupService.editSetupMany(table.entries.map(entry => buildEditSetupParams({
                        tableName: table.name,
                        key: entry.key,
                        values: entry.values,
                        meta: entry.meta,
                        isDeleted: true,
                    })));
                    this.tables = this.tables.filter(item => item.id !== table.id);
                    if (this.activeTableId === table.id) {
                        this.setActiveTable(this.tables[0]?.id ?? null);
                    }
                }
            }
            this.deleteDialogRef?.closeModal();
        }
        finally {
            this.isMutating = false;
        }
    }
    /**
     * Either header control takes the grid cross-table, so the table picker stops
     * selecting and the panel's own table filter takes over narrowing.
     */
    handleMissingLanguagesChange(codes) {
        this.missingLanguageCodes = codes;
        this.refresh$.next();
    }
    handleSearchQueryChange(query) {
        this.search$.next(query);
    }
    /** The settings dialog only ever reports its state on Save — apply the used-tables filter, pins, and notes visibility together. */
    handleSaveSettings(payload) {
        this.usedTablesOnly = payload.usedTablesOnly;
        localStorage.setItem(utils.USED_TABLES_LOCAL_STORAGE_NAME, String(payload.usedTablesOnly));
        this.pinnedLanguageCodes = payload.pinnedCodes;
        localStorage.setItem(utils.PINNED_LANG_LOCAL_STORAGE_NAME, JSON.stringify(payload.pinnedCodes));
        this.showNotesColumn = payload.showNotes;
        localStorage.setItem(utils.SHOW_NOTES_LOCAL_STORAGE_NAME, String(payload.showNotes));
        this.settingsDialogOpen = false;
        // Narrowing the list can strand the active table off it — fall back to the first one still on offer.
        if (this.usedTablesOnly && this.activeTable && !this.isTableAllowed(this.activeTable.name)) {
            this.setActiveTable(this.visibleTables[0]?.id ?? null);
        }
    }
    renderPageActions() {
        // const activeTable = this.activeTable;
        return (index.h("div", { slot: "page-header", class: "tm__page-actions" }, index.h("div", { class: "tm__table-picker" }, index.h("ir-autocomplete", { class: "tm__table-select", size: "s", label: "Table", placeholder: "Select table", value: this.isCrossTableMode ? 'All tables' : this.tableQuery, disabled: this.isCrossTableMode, emitOnSameValue: false, withClear: true, "onText-change": (e) => (this.tableQuery = e.detail ?? ''), "onCombobox-change": (e) => this.requestActiveTableChange(e.detail), onFocusout: () => this.restoreTableQuery() }, index.h("wa-icon", { name: "table", slot: "start" }), this.filteredTables.map(table => (index.h("ir-autocomplete-option", { key: table.id, label: table.name, value: table.id }, table.name))))), index.h("wa-input", { class: "tm__search", size: "s", "with-clear": true, label: "Search eng in all tables", placeholder: "Search eng in all tables\u2026", autocomplete: "off", spellcheck: false, disabled: this.orderDirty, title: this.orderDirty ? 'Save or discard the pending order first' : undefined, oninput: (e) => this.handleSearchQueryChange(e.target.value) }, index.h("wa-icon", { name: "magnifying-glass", slot: "start", "aria-hidden": "true" })), index.h("wa-select", { class: "tm__missing-select", size: "s", multiple: true, "with-clear": true, "max-options-visible": 1, label: "Missing language in all tables\u2026", placeholder: "Missing language in all tables\u2026", value: this.missingLanguageCodes, disabled: this.orderDirty, title: this.orderDirty ? 'Save or discard the pending order first' : undefined, onchange: (e) => this.handleMissingLanguagesChange([...(e.target.value ?? [])]) }, this.auditableLanguages.map(language => (index.h("wa-option", { key: language.code, value: language.code }, language.name)))), index.h("ir-custom-button", { class: "tm__icon-btn", appearance: "outlined", variant: "neutral", onClickHandler: () => (this.settingsDialogOpen = true) }, index.h("wa-icon", { name: "gear", label: "Table settings" }))));
    }
    render() {
        const activeTable = this.activeTable;
        const languages = this.orderedLanguages;
        const sourceCode = utils.getSourceLanguage(this.languages)?.code;
        // In the cross-table view the drawer follows the row being edited, not the picker.
        const drawerTableName = this.entryDrawerEntry?.tableName ?? activeTable?.name;
        return (index.h(index.Host, { key: '91cf249d79ad309c2fb48ef0c845ea41a56e65be' }, index.h("ir-page", { key: 'fbdab22220ff8331f0d52b005cce1e639ea7d4be', class: 'translation-manager__page', label: "Setup Entries" }, this.renderPageActions(), this.isLoading ? (index.h("div", { class: "tm__loader-container" }, index.h("ir-spinner", null), index.h("p", null, "Loading translation tables\u2026"))) : !activeTable && !this.isCrossTableMode ? (index.h("ir-empty-state", { message: "No translation tables yet \u2014 create one to start translating strings." }, index.h("ir-custom-button", { variant: "brand", appearance: "filled", onClickHandler: () => this.openCreateTable() }, "New table"))) : this.isCrossTableMode && !this.isLoadingCrossTable && this.allowedCrossTableEntries.length === 0 ? (index.h("ir-empty-state", { message: this.crossTableEmptyMessage })) : (index.h("ir-translations-entries-panel", { entries: this.displayedEntries, languages: this.displayedLanguages, sourceCode: sourceCode, isLoading: this.isLoadingEntries || this.isLoadingCrossTable, disableActions: this.isMutating, groupByTable: this.isCrossTableMode, tableNames: this.crossTableNames, disableCreate: this.isCrossTableMode, hasPendingOrder: this.orderDirty, changedEntryIds: this.changedEntryIds, duplicates: this.duplicates, showNotes: this.showNotesColumn, onCreateEntry: () => this.openCreateEntry(), onEditEntry: (e) => this.openEditEntry(e.detail),
            // onDuplicateEntry={(e: CustomEvent<TranslationEntry>) => this.handleDuplicateEntry(e.detail)}
            onMoveEntry: (e) => this.openMoveEntry(e.detail), onDeleteEntry: (e) => this.requestDeleteEntry(e.detail), onEntryChange: (e) => this.handleEntryChange(e.detail), onToggleVisibility: (e) => this.handleToggleVisibility(e.detail), onReorderEntries: (e) => this.handleReorderEntries(e.detail), onSaveOrder: () => this.handleSaveOrder(), onDiscardOrder: () => this.handleDiscardOrder() }))), index.h("ir-translations-entry-drawer", { key: '01250c953ed70e48c6c1df78172c45c3eea020d4', open: this.entryDrawerOpen, languages: languages, entry: this.entryDrawerEntry, duplicateSiblings: this.entryDrawerEntry ? (this.duplicates.get(this.entryDrawerEntry.id)?.siblings ?? []) : [], existingKeys: this.displayedEntries.filter(entry => entry.tableName === drawerTableName).map(entry => entry.key), nextDisplayOrder: this.nextDisplayOrder, tableName: drawerTableName, ownerId: this.propertyid, entryUserId: this.userId, onEntrySaved: this.handleEntrySaved, onCloseDrawer: () => {
                this.entryDrawerOpen = false;
                this.entryDrawerEntry = null;
            } }), index.h("ir-translations-move-dialog", { key: '5c69feba5af6ead58f4e2a47fb83169abc021c80', open: this.moveDialogOpen, entry: this.moveDialogEntry, tables: this.visibleTables, sourceCode: sourceCode, onEntryMoved: (e) => this.handleEntryMoved(e.detail), onCloseDialog: () => {
                this.moveDialogOpen = false;
                this.moveDialogEntry = null;
            } }), index.h("ir-translations-settings-dialog", { key: '6bb78b1f297eaaae9bc30be909d9fa9627e1cdd4', open: this.settingsDialogOpen, usedTablesOnly: this.usedTablesOnly, languages: this.languages, sourceCode: sourceCode, pinnedCodes: this.effectivePinnedLanguageCodes, showNotes: this.showNotesColumn, onSaveSettings: (e) => this.handleSaveSettings(e.detail), onCloseDialog: () => (this.settingsDialogOpen = false) }), index.h("ir-translations-table-dialog", { key: 'd4edd8271c8ccaddb55253666d929f3cd0be03d5', open: this.tableDialogOpen, mode: this.tableDialogMode, table: this.tableDialogTable, existingNames: this.tables.map(table => table.name), ownerId: this.propertyid, entryUserId: this.userId, onTableSaved: (e) => this.handleTableSaved(e.detail), onTableSaveFailed: this.handleTableSaveFailed, onCloseDialog: () => (this.tableDialogOpen = false) }), index.h("ir-dialog", { key: '663acc065729570355fef3a8e7fc8530bf47337a', label: this.deleteTarget?.type === 'table' ? 'Delete table' : 'Delete key', ref: el => (this.deleteDialogRef = el), onIrDialogAfterHide: () => (this.deleteTarget = null) }, index.h("p", { key: 'ed2c9fd2998f8623b9a4c3de5f4cac9117e2002c', class: "tm__confirm-text" }, t.t('Lcz_Delete', { fallback: 'Delete' }), index.h("strong", { key: '1dfa6a81fb3372e494dbfc7585ffe4c5b810a8b0' }, this.deleteTarget?.label), "? ", this.deleteTarget?.detail, " This cannot be undone."), index.h("div", { key: '4c1e7bb8e3764e075e7aeebca10febda6722d8c8', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '005cfb79390d0be8095f75429261a8fa493ec2fc', size: "m", appearance: "outlined", variant: "neutral", onClickHandler: () => this.deleteDialogRef?.closeModal() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '6149a7eab5643ef93b218b4f949b8e89b75f2086', size: "m", appearance: "accent", variant: "danger", loading: this.isMutating, onClickHandler: () => this.confirmDelete() }, t.t('Lcz_Delete', { fallback: 'Delete' })))), index.h("ir-dialog", { key: '47911609570f5cfe07a67e9cb7ec25294374b330', label: "Unsaved order", ref: el => (this.unsavedOrderDialogRef = el), onIrDialogAfterHide: () => {
                // Only true if neither Save nor Discard resolved it — i.e. the picker already
                // optimistically wrote the newly-clicked option's label straight into its own
                // input DOM node, bypassing our `value` prop. Since `tableQuery` itself never
                // actually changed, reassigning it wouldn't touch that DOM node — force a
                // real prop change (even momentarily) so ir-autocomplete's own value watcher fires.
                if (this.pendingTableSwitchId) {
                    this.tableQuery = '';
                    requestAnimationFrame(() => (this.tableQuery = this.activeTable?.name ?? ''));
                }
                this.pendingTableSwitchId = null;
            } }, index.h("p", { key: '50fdc6f0bc34d5a804394531e687224b9ab469fe', class: "tm__confirm-text" }, "You reordered keys in this table but haven't saved it yet. Save the new order, or discard it and switch tables?"), index.h("div", { key: '2834d618f75fe714ec6813e6dcc41ac90a068471', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '9c94655ed24396f7635764d3952c1df9c5ecdbbb', size: "m", appearance: "outlined", variant: "neutral", onClickHandler: () => this.unsavedOrderDialogRef?.closeModal() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'b691617ff07febe2bec2264e291320cf80de5d17', size: "m", appearance: "outlined", variant: "danger", disabled: this.isMutating, onClickHandler: () => this.discardOrderAndSwitchTable() }, "Discard"), index.h("ir-custom-button", { key: 'd3c3774b99961c2941a876c598063da688bc723b', size: "m", appearance: "accent", variant: "brand", loading: this.isMutating, onClickHandler: () => this.saveOrderAndSwitchTable() }, t.t('Lcz_Save', { fallback: 'Save' }))))));
    }
    static get watchers() { return {
        "ticket": [{
                "handleTicketChange": 0
            }]
    }; }
};
IrTranslationsManager.style = irTranslationsManagerCss();

const irTranslationsMoveDialogCss = () => `.sc-ir-translations-move-dialog-h{--ir-dialog-width:32rem}.move-dialog__body.sc-ir-translations-move-dialog{display:flex;flex-direction:column;gap:1.25rem}.move-dialog__summary.sc-ir-translations-move-dialog{display:flex;flex-direction:column;gap:0.25rem}.move-dialog__key.sc-ir-translations-move-dialog{align-self:flex-start;padding:0.15rem 0.4rem;border-radius:var(--wa-border-radius-s, 4px);background:var(--wa-color-neutral-fill-quiet, #f1f5f9);font-family:var(--wa-font-family-code, ui-monospace, SFMono-Regular, Menlo, monospace);font-size:var(--wa-font-size-s);color:var(--wa-color-text-normal)}.move-dialog__value.sc-ir-translations-move-dialog{margin:0;font-size:var(--wa-font-size-s);color:var(--wa-color-text-normal)}.move-dialog__hint.sc-ir-translations-move-dialog,.move-dialog__empty.sc-ir-translations-move-dialog{margin:0;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet)}.move-dialog__locked.sc-ir-translations-move-dialog{margin:0.25rem 0 0;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-danger-on-quiet, #b91c1c)}.move-dialog__tables.sc-ir-translations-move-dialog{display:flex;flex-direction:column;gap:0.6rem;padding-top:1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.move-dialog__list.sc-ir-translations-move-dialog{max-height:18rem;overflow-y:auto;padding-inline:0.25rem}`;

const IrTranslationsMoveDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDialog = index.createEvent(this, "closeDialog");
        this.entryMoved = index.createEvent(this, "entryMoved");
    }
    open = false;
    /** The row being moved. Its `tableName` is the source table. */
    entry = null;
    /** Candidate destinations — the tables the header picker shows. */
    tables = [];
    /** Language whose value is shown next to the key, so the user can tell rows with similar keys apart. */
    sourceCode;
    closeDialog;
    /** Emitted once the API confirmed the move. The parent owns closing the dialog and updating its rows. */
    entryMoved;
    query = '';
    targetId = null;
    isSubmitting = false;
    dialogRef;
    setupService = new index$2.SetupService();
    handleOpenChange(open) {
        if (open) {
            // Start clean every time — a destination picked for one row must not carry over to the next.
            this.query = '';
            this.targetId = null;
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    /** Every table but the one the row already lives in, narrowed by the search text. */
    get candidateTables() {
        const source = this.entry?.tableName;
        const query = this.query.trim().toLowerCase();
        return this.tables.filter(table => table.name !== source && (!query || table.name.toLowerCase().includes(query)));
    }
    /** Mirrors the Edit action's rule — a row Setup won't let us update can't be re-homed either. */
    get isLocked() {
        return this.entry?.meta?.isUpdateable === false;
    }
    handleMove = async () => {
        const entry = this.entry;
        const toTable = this.targetId;
        const fromTable = entry?.tableName;
        if (!entry || !fromTable || !toTable || this.isLocked) {
            return;
        }
        this.isSubmitting = true;
        try {
            // A code already used by the destination is a business exception — the interceptor toasts it and the dialog stays open.
            await this.setupService.moveSetupEntry({ old_tbl_name: fromTable, code_name: entry.key, new_tbl_name: toTable });
            utils$1.showToast({ type: 'success', title: `Moved ${entry.key} to ${toTable}` });
            this.entryMoved.emit({ entry, fromTable, toTable });
        }
        finally {
            this.isSubmitting = false;
        }
    };
    renderSummary() {
        const entry = this.entry;
        if (!entry) {
            return null;
        }
        const sourceValue = this.sourceCode ? entry.values[this.sourceCode] : undefined;
        return (index.h("section", { class: "move-dialog__summary" }, index.h("code", { class: "move-dialog__key" }, entry.key), sourceValue && index.h("p", { class: "move-dialog__value" }, sourceValue), index.h("p", { class: "move-dialog__hint" }, "Currently in ", index.h("strong", null, entry.tableName)), this.isLocked && (index.h("p", { class: "move-dialog__locked", role: "alert" }, "This key is locked by Setup and cannot be moved."))));
    }
    renderTableList() {
        const tables = this.candidateTables;
        return (index.h("section", { class: "move-dialog__tables" }, index.h("wa-input", { class: "move-dialog__search", size: "s", "with-clear": true, label: "Move to", placeholder: "Search tables\u2026", autocomplete: "off", spellcheck: false, oninput: (e) => (this.query = e.target.value ?? '') }, index.h("wa-icon", { name: "magnifying-glass", slot: "start", "aria-hidden": "true" })), tables.length === 0 ? (index.h("p", { class: "move-dialog__empty" }, "No tables match.")) : (index.h("wa-radio-group", { class: "move-dialog__list", size: "s", orientation: "vertical", value: this.targetId ?? '', onchange: (e) => (this.targetId = e.target.value || null) }, tables.map(table => (index.h("wa-radio", { key: table.id, value: table.id }, table.name)))))));
    }
    render() {
        return (index.h("ir-dialog", { key: '4b6544869f2a12dd0c5bf6e210c6373b4c121017', label: "Move key", ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, this.open && (index.h("div", { key: '4bd0967784a9fae4d551964a9119974fcae75d94', class: "move-dialog__body" }, this.renderSummary(), this.renderTableList())), index.h("div", { key: '392d12bc4ad7b44118bcad18ba55b4bd0e5f73ec', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '37e24d027c51570d5f2c93f71f133922e54967da', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDialog.emit() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: '8d545721f8d92e5d5ac6c7a6be22e251169d312d', size: "m", appearance: "accent", variant: "brand", disabled: !this.targetId || this.isLocked || this.isSubmitting, loading: this.isSubmitting, onClickHandler: this.handleMove }, "Move"))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrTranslationsMoveDialog.style = irTranslationsMoveDialogCss();

const irTranslationsSettingsDialogCss = () => `.sc-ir-translations-settings-dialog-h{--ir-dialog-width:42rem}.settings-dialog__body.sc-ir-translations-settings-dialog{display:flex;flex-direction:column;gap:1.25rem}.settings-dialog__section.sc-ir-translations-settings-dialog+.settings-dialog__section.sc-ir-translations-settings-dialog{padding-top:1rem;border-top:1px solid var(--wa-color-neutral-border-quiet, #e2e8f0)}.settings-dialog__section-title.sc-ir-translations-settings-dialog{margin:0 0 0.5rem;font-size:var(--wa-font-size-s);font-weight:var(--wa-font-weight-semibold, 600);color:var(--wa-color-text-normal)}.settings-dialog__section-hint.sc-ir-translations-settings-dialog{margin:0 0 0.6rem;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-text-quiet)}.settings-dialog__language-list.sc-ir-translations-settings-dialog{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.5rem;max-height:16rem;overflow-y:auto}.settings-dialog__language-code.sc-ir-translations-settings-dialog{color:var(--wa-color-text-quiet);font-size:0.9em}.settings-dialog__footer.sc-ir-translations-settings-dialog{display:flex;justify-content:flex-end}`;

const IrTranslationsSettingsDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.saveSettings = index.createEvent(this, "saveSettings");
        this.closeDialog = index.createEvent(this, "closeDialog");
    }
    open = false;
    /** Hides setup tables nothing in this codebase reads — the same filter the table pickers apply. */
    usedTablesOnly = true;
    /** Every language this property exposes; the pin list only ever applies to the non-source ones. */
    languages = [];
    sourceCode;
    /** Non-source language codes currently shown as columns. */
    pinnedCodes = [];
    showNotes = true;
    /** Emitted once, only when Save is clicked. */
    saveSettings;
    closeDialog;
    /** Working copies — edited freely, applied only on Save. */
    draftUsedTablesOnly = true;
    draftPinnedCodes = [];
    draftShowNotes = true;
    dialogRef;
    handleOpenChange(open) {
        if (open) {
            // Re-seed the draft from the live values every time it opens, so a
            // cancelled edit never leaks into the next time the dialog is used.
            this.draftUsedTablesOnly = this.usedTablesOnly;
            this.draftPinnedCodes = [...this.pinnedCodes];
            this.draftShowNotes = this.showNotes;
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    get pinnableLanguages() {
        return this.languages.filter(language => language.code !== this.sourceCode);
    }
    toggleDraftLanguage(code, pinned) {
        const current = new Set(this.draftPinnedCodes);
        if (pinned) {
            current.add(code);
        }
        else {
            current.delete(code);
        }
        this.draftPinnedCodes = [...current];
    }
    handleSave = () => {
        this.saveSettings.emit({ usedTablesOnly: this.draftUsedTablesOnly, pinnedCodes: this.draftPinnedCodes, showNotes: this.draftShowNotes });
    };
    renderUsedTablesSection() {
        return (index.h("section", { class: "settings-dialog__section" }, index.h("wa-checkbox", { defaultChecked: this.draftUsedTablesOnly, checked: this.draftUsedTablesOnly, onchange: (e) => (this.draftUsedTablesOnly = e.target.checked) }, "Only show tables used in the app")));
    }
    renderLanguagesSection() {
        const languages = this.pinnableLanguages;
        if (languages.length === 0) {
            return null;
        }
        const pinned = new Set(this.draftPinnedCodes);
        return (index.h("section", { class: "settings-dialog__section" }, index.h("p", { class: "settings-dialog__section-hint" }, "Pin the languages you want shown in the table."), index.h("ul", { class: "settings-dialog__language-list" }, languages.map(language => (index.h("li", { key: language.code, class: "settings-dialog__language-item" }, index.h("wa-checkbox", { defaultChecked: pinned.has(language.code), checked: pinned.has(language.code), onchange: (e) => this.toggleDraftLanguage(language.code, e.target.checked) }, language.name, " ", index.h("span", { class: "settings-dialog__language-code" }, "(", language.code.toUpperCase(), ")"))))))));
    }
    renderNotesSection() {
        return (index.h("section", { class: "settings-dialog__section" }, index.h("wa-checkbox", { defaultChecked: this.draftShowNotes, checked: this.draftShowNotes, onchange: (e) => (this.draftShowNotes = e.target.checked) }, "Show the notes column")));
    }
    render() {
        return (index.h("ir-dialog", { key: '067551419b8239609845ff740d6df6f4a7dbee00', label: "Table settings", ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, index.h("div", { key: 'd164b1112cf4fbbb1af6dc08d3fcd3333309f0b2', class: "settings-dialog__body" }, this.renderUsedTablesSection(), this.renderLanguagesSection(), this.renderNotesSection()), index.h("div", { key: 'd9e6889748b3465d14ca7cb38272bcdfc21e71ea', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: '759cb8ce6803709a6b49703aebcdbe6b6c85c6d0', appearance: "filled", size: "m", variant: "neutral", onClickHandler: () => this.closeDialog.emit() }, "Cancel"), index.h("ir-custom-button", { key: '61d5a1d890dd0e6d3f2d05b1b955222d5de5eeba', appearance: "accent", size: "m", variant: "brand", onClickHandler: this.handleSave }, "Save"))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrTranslationsSettingsDialog.style = irTranslationsSettingsDialogCss();

const irTranslationsTableDialogCss = () => `.sc-ir-translations-table-dialog-h{--ir-dialog-width:28rem}`;

const IrTranslationsTableDialog = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.closeDialog = index.createEvent(this, "closeDialog");
        this.tableSaved = index.createEvent(this, "tableSaved");
        this.tableSaveFailed = index.createEvent(this, "tableSaveFailed");
    }
    open = false;
    formId = 'translations-table-form';
    mode = 'create';
    table = null;
    /** Names of the other tables, for duplicate detection. */
    existingNames = [];
    ownerId;
    entryUserId;
    closeDialog;
    tableSaved;
    tableSaveFailed;
    saveDisabled = true;
    isSubmitting = false;
    dialogRef;
    handleOpenChange(open) {
        if (open) {
            this.dialogRef?.openModal();
        }
        else {
            this.dialogRef?.closeModal();
        }
    }
    render() {
        const isEditing = this.mode === 'edit';
        return (index.h("ir-dialog", { key: 'cca63cb0667cccea141dae6c13387b744b1569d0', label: isEditing ? 'Table details' : 'New table', ref: el => (this.dialogRef = el), onIrDialogHide: () => this.closeDialog.emit() }, this.open && (index.h("ir-translations-table-form", { key: 'b7e875d61314bf7ed27debd03a5695baff0e0063', formId: this.formId, mode: this.mode, table: this.table, existingNames: this.existingNames, ownerId: this.ownerId, entryUserId: this.entryUserId, onSubmitDisabledChange: (e) => (this.saveDisabled = e.detail), onIsSubmittingChange: (e) => (this.isSubmitting = e.detail), onTableSaved: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaved.emit(e.detail);
                this.dialogRef?.closeModal();
            }, onTableSaveFailed: (e) => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.tableSaveFailed.emit();
                this.dialogRef?.closeModal();
            } })), index.h("div", { key: '69dbad78b1cab2ea6c01e399b258e88cf3a3259b', slot: "footer", class: "ir-dialog__footer" }, index.h("ir-custom-button", { key: 'ac178c44072156d1582f743a2d5d8d6cd6003bb9', size: "m", appearance: "outlined", variant: "neutral", disabled: this.isSubmitting, onClickHandler: () => this.closeDialog.emit() }, t.t('Lcz_Cancel', { fallback: 'Cancel' })), index.h("ir-custom-button", { key: 'e7003eb22c535ea0feb059ae463ada0282e82b64', size: "m", appearance: "accent", variant: "brand", form: this.formId, type: "submit", disabled: this.saveDisabled || this.isSubmitting, loading: this.isSubmitting }, t.t('Lcz_Save', { fallback: 'Save' })))));
    }
    static get watchers() { return {
        "open": [{
                "handleOpenChange": 0
            }]
    }; }
};
IrTranslationsTableDialog.style = irTranslationsTableDialogCss();

const irTranslationsTableFormCss = () => `.sc-ir-translations-table-form-h{display:block}.table-form__body.sc-ir-translations-table-form{display:flex;flex-direction:column;gap:1rem}.table-form__error.sc-ir-translations-table-form{margin:-0.75rem 0 0;font-size:var(--wa-font-size-xs, 0.75rem);color:var(--wa-color-danger-on-quiet, #991b1b)}`;

const IrTranslationsTableForm = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.tableSaved = index.createEvent(this, "tableSaved");
        this.tableSaveFailed = index.createEvent(this, "tableSaveFailed");
        this.submitDisabledChange = index.createEvent(this, "submitDisabledChange");
        this.isSubmittingChange = index.createEvent(this, "isSubmittingChange");
    }
    formId;
    mode = 'create';
    table = null;
    /** Names of the other tables, for duplicate detection. */
    existingNames = [];
    ownerId;
    entryUserId;
    tableSaved;
    tableSaveFailed;
    submitDisabledChange;
    isSubmittingChange;
    name = '';
    isSubmitting = false;
    nameInputRef;
    setupService = new index$2.SetupService();
    componentWillLoad() {
        this.name = this.table?.name ?? '';
        this.submitDisabledChange.emit(!this.isValid);
    }
    componentDidLoad() {
        requestAnimationFrame(() => this.nameInputRef?.focusInput());
    }
    get isDuplicateName() {
        const name = this.name.trim().toLowerCase();
        if (!name) {
            return false;
        }
        return this.existingNames.some(existing => existing.toLowerCase() === name && existing !== this.table?.name);
    }
    get isValid() {
        return this.name.trim().length > 0 && !this.isDuplicateName;
    }
    handleNameChange(value) {
        this.name = value ?? '';
        this.submitDisabledChange.emit(!this.isValid);
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        if (!this.isValid) {
            return;
        }
        const newName = this.name.trim();
        if (this.mode === 'create' || !this.table || this.table.entries.length === 0) {
            this.tableSaved.emit({ id: newName, name: newName, mode: this.mode });
            return;
        }
        const table = this.table;
        this.isSubmitting = true;
        this.isSubmittingChange.emit(true);
        try {
            await Promise.all(table.entries.map(entry => this.setupService.editSetup(buildEditSetupParams({ tableName: newName, key: entry.key, values: entry.values, meta: entry.meta }))));
            await Promise.all(table.entries.map(entry => this.setupService.editSetup(buildEditSetupParams({
                tableName: table.name,
                key: entry.key,
                values: entry.values,
                meta: entry.meta,
                isDeleted: true,
            }))));
            utils$1.showToast({ type: 'success', title: 'Table renamed' });
            this.tableSaved.emit({ id: newName, name: newName, mode: 'edit' });
        }
        catch (error) {
            console.error(error);
            utils$1.showToast({ type: 'error', title: 'Rename may be incomplete — reloading tables' });
            this.tableSaveFailed.emit();
        }
        finally {
            this.isSubmitting = false;
            this.isSubmittingChange.emit(false);
        }
    };
    render() {
        return (index.h("form", { key: 'c0c9b7f1a41f95c069c97776fd379000ffad9c53', id: this.formId, class: "table-form__body", onSubmit: this.handleSubmit, novalidate: true }, index.h("ir-input", { key: '5a2bc3dc4769925ba7acc114fd65085e8a0f7048', label: t.t('Lcz_Name', { fallback: 'Name' }), autocomplete: "off", value: this.name, placeholder: "e.g. Booking emails", "onText-change": e => this.handleNameChange(e.detail), ref: el => (this.nameInputRef = el) }), this.isDuplicateName && (index.h("p", { key: '1f2ada860a27a78e01a93d9d5d46fd0c9b7faa35', class: "table-form__error", role: "alert" }, "A table with this name already exists."))));
    }
};
IrTranslationsTableForm.style = irTranslationsTableFormCss();

exports.ir_autocomplete = IrAutocomplete;
exports.ir_autocomplete_option = IrAutocompleteOption;
exports.ir_common = IrCommon;
exports.ir_custom_button = IrCustomButton;
exports.ir_dialog = IrDialog;
exports.ir_drawer = IrDrawer;
exports.ir_empty_state = IrEmptyState;
exports.ir_input = IrInput;
exports.ir_interceptor = IrInterceptor;
exports.ir_otp = IrOtp;
exports.ir_otp_modal = IrOtpModal;
exports.ir_page = IrPage;
exports.ir_spinner = IrSpinner;
exports.ir_toast = IrToast;
exports.ir_toast_item = IrToastItem;
exports.ir_toast_provider = IrToastProvider;
exports.ir_translations_entries_panel = IrTranslationsEntriesPanel;
exports.ir_translations_entries_table = IrTranslationsEntriesTable;
exports.ir_translations_entry_drawer = IrTranslationsEntryDrawer;
exports.ir_translations_entry_form = IrTranslationsEntryForm;
exports.ir_translations_manager = IrTranslationsManager;
exports.ir_translations_move_dialog = IrTranslationsMoveDialog;
exports.ir_translations_settings_dialog = IrTranslationsSettingsDialog;
exports.ir_translations_table_dialog = IrTranslationsTableDialog;
exports.ir_translations_table_form = IrTranslationsTableForm;
