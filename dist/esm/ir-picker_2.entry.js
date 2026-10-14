import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DKZeCK8T.js';
import { t } from './t-DTGA0v_q.js';
import { b as formatCount } from './number-COOjxK58.js';
import './locales.store-DsOXxI8k.js';
import './ir-date-CdNwD9PM.js';
import './language-observer-CHgzsZkY.js';
import './moment-Mki5YqAR.js';
import './_commonjsHelpers-BFTU3MAI.js';

const irPickerCss = () => `:host{display:block;width:100%}.menu{display:flex;flex-direction:column;min-width:max-content;margin:0px;padding:0.5rem 0;border:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);background-color:var(--wa-color-surface-raised);box-shadow:var(--wa-shadow-m);color:var(--wa-color-text-normal);text-align:start;user-select:none;overflow:auto;max-width:var(--auto-size-available-width) !important;max-height:var(--auto-size-available-height) !important}wa-input[aria-invalid='true']::part(base){border-color:var(--wa-color-danger-border-loud);outline-color:var(--wa-color-danger-border-loud);border-width:2px}.results{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;max-height:min(60vh, 24rem);overflow-y:auto}.group{display:flex;flex-direction:column;gap:0.35rem}.group__label{font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--wa-color-text-muted);margin:0 0.25rem}.group__options{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.option{display:flex;align-items:center;gap:0.75rem;padding:0.75rem;border-radius:var(--wa-border-radius-m);cursor:pointer;transition:background-color 120ms ease, box-shadow 120ms ease}.option__leading{color:var(--wa-color-text-muted);display:flex;align-items:center;justify-content:center;font-size:1rem}.option__leading wa-icon{font-size:1.15rem}.option__content{display:flex;flex-direction:column;gap:0.15rem;flex:1}.option__label{font-weight:600}.option__description{font-size:0.85rem;color:var(--wa-color-text-muted)}.option__suffix{margin-inline-start:auto;display:flex;align-items:center;gap:0.5rem}.option__meta{padding:0.15rem 0.45rem;border-radius:var(--wa-border-radius-pill, 999px);background-color:var(--wa-color-surface, rgba(255, 255, 255, 0.08));font-size:0.75rem;color:var(--wa-color-text-normal)}.option__shortcut{display:flex;gap:0.25rem}.option__shortcut kbd{border-radius:var(--wa-border-radius-s);border:1px solid var(--wa-color-surface-border);padding:0.15rem 0.35rem;font-size:0.75rem;font-family:inherit;background-color:var(--wa-color-surface, rgba(255, 255, 255, 0.04))}.option--active{background-color:var(--wa-color-surface-hover, rgba(255, 255, 255, 0.06));box-shadow:inset 0 0 0 1px var(--wa-color-surface-border)}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.35rem;padding:2rem 1rem;text-align:center;color:var(--wa-color-text-muted)}.empty-state wa-icon{font-size:1.25rem}.loading-state{display:flex;align-items:center;gap:0.5rem;padding:0.75rem 1rem;color:var(--wa-color-text-muted)}.loading-state p{margin:0;font-size:0.9rem}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}`;

const DEFAULT_ASYNC_DEBOUNCE = 300;
const IrPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.comboboxSelect = createEvent(this, "combobox-select");
        this.textChange = createEvent(this, "text-change");
        this.comboboxClear = createEvent(this, "combobox-clear");
        this.inputPickerBlurred = createEvent(this, "input-picker-blurred");
    }
    /** Selected value (also shown in the input when `mode="select"`). */
    value = '';
    loading = false;
    mode = 'default';
    pill = false;
    /** Placeholder shown inside the input when there is no query. */
    placeholder = '';
    /** Optional label applied to the text field. */
    label;
    /** The default value of the form control. Primarily used for resetting the form control. */
    defaultValue;
    /**
     * Whether to show a clear button inside the input.
     * When clicked, the input value is cleared and the `combobox-clear` event is emitted.
     *
     * @default false
     */
    withClear = false;
    /** The input's size. */
    size = 's';
    /** The input's visual appearance. */
    appearance;
    /** Delay (in milliseconds) before emitting the `text-change` event. Defaults to 300ms for async mode. */
    debounce = 0;
    static idCounter = 0;
    componentId = ++IrPicker.idCounter;
    listboxId = `ir-combobox-listbox-${this.componentId}`;
    listboxLabelId = `ir-combobox-label-${this.componentId}`;
    emptyStateId = `ir-combobox-empty-${this.componentId}`;
    inputRef;
    nativeInput;
    slotRef;
    debounceTimer;
    get hostEl() { return getElement(this); }
    isOpen = false;
    query = '';
    activeIndex = -1;
    filteredItems = [];
    liveRegionMessage = '';
    slottedPickerItems = [];
    isValid;
    /** Emitted when a value is selected from the combobox list. */
    comboboxSelect;
    /** Emitted when the text input value changes. */
    textChange;
    /** Emitted when the clear button is clicked and the combobox value is cleared. */
    comboboxClear;
    /** Emitted when the clear button is clicked and the combobox value is cleared. */
    inputPickerBlurred;
    componentWillLoad() {
        const hostItems = Array.from(this.hostEl?.querySelectorAll('ir-picker-item') ?? []);
        if (hostItems.length) {
            this.processPickerItems(hostItems);
        }
        else {
            this.updateLiveRegion(0);
        }
    }
    componentDidRender() {
        if (this.inputRef) {
            this.nativeInput = this.inputRef.input;
        }
        this.applyAriaAttributes();
    }
    disconnectedCallback() {
        if (this.debounceTimer) {
            window.clearTimeout(this.debounceTimer);
            this.debounceTimer = undefined;
        }
    }
    async focusInput() {
        this._focusInput();
    }
    async open() {
        if (this.isOpen) {
            this._focusInput();
            return;
        }
        this.isOpen = true;
        requestAnimationFrame(() => this._focusInput());
        if (this.filteredItems.length) {
            const selectedIndex = this.filteredItems.findIndex(item => item.value === this.value);
            if (selectedIndex >= 0) {
                const nextIndex = this.findNearestEnabledIndex(selectedIndex + 1, 1);
                if (nextIndex >= 0) {
                    this.activeIndex = nextIndex;
                }
                else {
                    this.focusEdgeItem('start');
                }
            }
            else if (this.activeIndex === -1) {
                this.focusEdgeItem('start');
            }
        }
        this.scrollSelectedIntoView();
    }
    async close() {
        this.isOpen = false;
    }
    handleKeyDown(e) {
        this.handleInputKeydown(e);
    }
    handleDocumentClick(event) {
        if (!this.isOpen)
            return;
        const path = event.composedPath ? event.composedPath() : [];
        if ((path.length && path.includes(this.hostEl)) || this.hostEl.contains(event.target))
            return;
        this.closeCombobox();
    }
    handleDocumentFocus(event) {
        if (!this.isOpen)
            return;
        if (this.hostEl.contains(event.target))
            return;
        this.closeCombobox();
    }
    handleActiveIndexChange() {
        this.updateActiveItemIndicators();
        this.applyAriaAttributes();
        this.scrollActiveOptionIntoView();
    }
    handleAriaInvalid(newValue) {
        this.isValid = newValue;
    }
    handleValueChange(newValue) {
        this.updateSelectedFromValue(newValue);
        this.syncQueryWithValue(newValue);
        if (['select-async', 'select'].includes(this.mode)) {
            this.applyFilter('', { updateQuery: false, emitEvent: false });
        }
    }
    async clearInput() {
        this.applyFilter('');
    }
    closeCombobox(options = {}) {
        this.isOpen = false;
        if (options.restoreFocus) {
            this._focusInput();
        }
    }
    handleInput = (event) => {
        const target = event.target;
        this.applyFilter(target?.value ?? '');
        this.open();
    };
    handleInputFocus = () => {
        if (!this.isOpen) {
            if (this.mode === 'select-async' && !this.query) {
                return;
            }
            this.open();
        }
    };
    handleInputKeydown = (event) => {
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                this.open();
                this.moveActiveIndex(1);
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.open();
                this.moveActiveIndex(-1);
                break;
            case 'Enter':
                if (!this.isOpen)
                    return;
                event.preventDefault();
                this.selectActiveItem();
                break;
            case 'Escape':
                if (!this.isOpen)
                    return;
                event.preventDefault();
                this.closeCombobox({ restoreFocus: true });
                break;
            case 'Home':
                if (!this.isOpen)
                    return;
                event.preventDefault();
                this.focusEdgeItem('start');
                break;
            case 'End':
                if (!this.isOpen)
                    return;
                event.preventDefault();
                this.focusEdgeItem('end');
                break;
            case 'Tab':
                this.closeCombobox();
                break;
        }
    };
    /** Applies the filter and optionally emits a debounced text-change event. */
    applyFilter(value, options = {}) {
        const { updateQuery = true, emitEvent = true } = options;
        if (updateQuery) {
            this.query = value;
        }
        const normalizedQuery = value.trim().toLowerCase();
        const items = this.slottedPickerItems;
        const filtered = normalizedQuery ? items.filter(item => this.matchesQuery(item, normalizedQuery)) : [...items];
        const previousActiveItem = this.activeIndex >= 0 ? this.filteredItems[this.activeIndex] : undefined;
        this.filteredItems = filtered;
        this.updateItemVisibility(filtered);
        let nextIndex = previousActiveItem ? filtered.indexOf(previousActiveItem) : -1;
        if (filtered.length === 0) {
            this.activeIndex = -1;
        }
        else {
            if (nextIndex === -1) {
                nextIndex = this.findNearestEnabledIndex(0, 1);
            }
            this.activeIndex = nextIndex;
        }
        this.updateActiveItemIndicators();
        const context = normalizedQuery ? `"${value.trim()}"` : undefined;
        this.updateLiveRegion(filtered.length, context);
        if (emitEvent) {
            this.emitTextChange(value);
        }
    }
    /** Emit the latest query value with a debounce suited for async searches. */
    emitTextChange(value) {
        const delay = this.getTextChangeDelay();
        if (this.debounceTimer) {
            window.clearTimeout(this.debounceTimer);
        }
        const emit = () => {
            this.textChange.emit(value);
        };
        if (delay > 0) {
            this.debounceTimer = window.setTimeout(emit, delay);
            return;
        }
        emit();
    }
    getTextChangeDelay() {
        if (typeof this.debounce === 'number' && this.debounce > 0) {
            return this.debounce;
        }
        if (this.mode === 'select-async') {
            return DEFAULT_ASYNC_DEBOUNCE;
        }
        return 0;
    }
    syncQueryWithValue(value, options = {}) {
        if (!['select', 'select-async'].includes(this.mode)) {
            return;
        }
        if (!value) {
            if (options.allowEmptyFallback !== false) {
                this.query = '';
            }
            return;
        }
        const match = this.slottedPickerItems.find(item => item.value === value);
        if (match) {
            this.query = this.getItemDisplayLabel(match);
        }
    }
    selectActiveItem() {
        if (this.activeIndex < 0)
            return;
        const selected = this.filteredItems[this.activeIndex];
        if (!selected || selected.disabled)
            return;
        this.handleSelection(selected);
    }
    handleSelection(item) {
        const detail = {
            value: item.value,
            label: this.getItemDisplayLabel(item),
            disabled: item.disabled,
        };
        this.value = item.value;
        this.updateSelectedFromValue();
        this.comboboxSelect.emit({ item: detail });
        this.closeCombobox({ restoreFocus: true });
        if (['select', 'select-async'].includes(this.mode)) {
            this.query = this.getItemDisplayLabel(item);
            this.applyFilter('', { updateQuery: false, emitEvent: false });
        }
        else {
            this.applyFilter('', { emitEvent: false });
        }
        this.activeIndex = -1;
    }
    _focusInput() {
        this.inputRef?.focus();
        this.nativeInput?.focus();
    }
    applyAriaAttributes() {
        if (!this.nativeInput)
            return;
        this.nativeInput.setAttribute('role', 'combobox');
        this.nativeInput.setAttribute('aria-autocomplete', 'list');
        this.nativeInput.setAttribute('aria-expanded', String(this.isOpen));
        this.nativeInput.setAttribute('aria-controls', this.listboxId);
        if (this.activeIndex >= 0) {
            const activeItem = this.filteredItems[this.activeIndex];
            if (activeItem?.id) {
                this.nativeInput.setAttribute('aria-activedescendant', activeItem.id);
            }
        }
        else {
            this.nativeInput.removeAttribute('aria-activedescendant');
        }
    }
    scrollActiveOptionIntoView() {
        if (this.activeIndex < 0)
            return;
        const item = this.filteredItems[this.activeIndex];
        if (!item)
            return;
        this.runAfterNextFrame(() => {
            item.scrollIntoView({ block: 'center' });
        });
    }
    scrollSelectedIntoView() {
        if (!this.isOpen || !this.value) {
            return;
        }
        const match = this.filteredItems.find(item => item.value === this.value) ?? this.slottedPickerItems.find(item => item.value === this.value);
        if (!match) {
            return;
        }
        this.runAfterNextFrame(() => {
            match.scrollIntoView({ block: 'center' });
        });
    }
    capturePickerItemsFromSlot(slot = this.slotRef) {
        if (!slot) {
            return;
        }
        const assigned = slot.assignedElements({ flatten: true });
        const pickerItems = assigned.filter((el) => el.tagName === 'IR-PICKER-ITEM');
        this.processPickerItems(pickerItems);
    }
    processPickerItems(pickerItems) {
        this.slottedPickerItems = [...pickerItems];
        this.ensureItemIds();
        this.applyFilter(this.query, { emitEvent: false });
        this.updateSelectedFromValue(this.value);
        this.syncQueryWithValue(this.value, { allowEmptyFallback: false });
        if (['select', 'select-async'].includes(this.mode) && this.value) {
            this.applyFilter('', { updateQuery: false, emitEvent: false });
        }
    }
    ensureItemIds() {
        this.slottedPickerItems.forEach((item, index) => {
            if (!item.id) {
                item.id = `${this.listboxId}-option-${index}`;
            }
        });
    }
    getItemDisplayLabel(item) {
        return item.label || item.textContent?.trim() || '';
    }
    matchesQuery(item, normalizedQuery) {
        const haystack = `${item.label ?? ''} ${item.value ?? ''}`.toLowerCase();
        return haystack.includes(normalizedQuery);
    }
    updateItemVisibility(visibleItems) {
        const visibleSet = new Set(visibleItems);
        this.slottedPickerItems.forEach(item => {
            const shouldShow = visibleSet.has(item);
            item.hidden = !shouldShow;
            if (shouldShow) {
                item.removeAttribute('aria-hidden');
            }
            else {
                item.setAttribute('aria-hidden', 'true');
            }
            item.active = false;
        });
    }
    updateSelectedFromValue(value = this.value) {
        if (!this.slottedPickerItems.length) {
            return;
        }
        this.slottedPickerItems.forEach(item => {
            item.selected = Boolean(value) && item.value === value;
        });
    }
    updateActiveItemIndicators() {
        this.slottedPickerItems.forEach(item => (item.active = false));
        if (this.activeIndex < 0) {
            return;
        }
        const activeItem = this.filteredItems[this.activeIndex];
        if (activeItem) {
            activeItem.active = true;
        }
    }
    findNearestEnabledIndex(startIndex, direction) {
        const items = this.filteredItems;
        const length = items.length;
        if (!length) {
            return -1;
        }
        let normalizedIndex = ((startIndex % length) + length) % length;
        let attempts = 0;
        while (attempts < length) {
            const candidate = items[normalizedIndex];
            if (candidate && !candidate.disabled) {
                return normalizedIndex;
            }
            normalizedIndex = (((normalizedIndex + direction) % length) + length) % length;
            attempts += 1;
        }
        return -1;
    }
    focusEdgeItem(edge) {
        if (!this.filteredItems.length) {
            this.activeIndex = -1;
            return;
        }
        const direction = edge === 'start' ? 1 : -1;
        const startIndex = edge === 'start' ? 0 : this.filteredItems.length - 1;
        this.activeIndex = this.findNearestEnabledIndex(startIndex, direction);
    }
    moveActiveIndex(direction) {
        const hasItems = this.filteredItems.length > 0;
        if (!hasItems) {
            this.activeIndex = -1;
            return;
        }
        if (this.activeIndex === -1) {
            this.focusEdgeItem(direction === 1 ? 'start' : 'end');
            return;
        }
        this.activeIndex = this.findNearestEnabledIndex(this.activeIndex + direction, direction);
    }
    findPickerItemFromEvent(event) {
        const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
        for (const target of path) {
            if (target && target.tagName === 'IR-PICKER-ITEM') {
                return target;
            }
        }
        return undefined;
    }
    handleResultsClick = (event) => {
        const item = this.findPickerItemFromEvent(event);
        if (!item || item.disabled) {
            return;
        }
        event.preventDefault();
        this.handleSelection(item);
    };
    handleResultsPointerDown = (event) => {
        const item = this.findPickerItemFromEvent(event);
        if (!item) {
            return;
        }
        event.preventDefault();
    };
    handleSlotChange = (event) => {
        const slot = event.target;
        this.slotRef = slot;
        this.capturePickerItemsFromSlot(slot);
    };
    render() {
        const hasResults = this.filteredItems.length > 0;
        const isAsyncMode = this.mode === 'select-async';
        const hasChildren = this.slottedPickerItems.length > 0;
        // In async mode avoid showing the empty state until loading finished and no results rendered.
        const showEmptyState = !this.loading && !hasResults && (!isAsyncMode || !hasChildren);
        const emptyDescriptionId = showEmptyState ? this.emptyStateId : undefined;
        return (h(Host, { key: 'bb7b342725ceae6bd2d1333212b0b4693b3d65a8' }, h("wa-popup", { key: '00dbc5f3c3addf9a1981433f4c6fb989e9981189', flip: true, shift: true, placement: "bottom", sync: "width", "auto-size": "vertical", "auto-size-padding": 10, active: this.isOpen }, h("wa-input", { key: 'b477d5a98c7df5e232f7e1e196daa922104317cb', slot: "anchor", class: "search-bar", "aria-invalid": this.isValid, withClear: this.withClear, size: this.size, value: this.query, defaultValue: this.defaultValue, ref: el => (this.inputRef = el), appearance: this.appearance, label: this.label, pill: this.pill, onblur: () => this.inputPickerBlurred.emit(), autocomplete: "nope", placeholder: this.placeholder || t('Lcz_Search', { fallback: 'Search' }), oninput: this.handleInput, onfocus: this.handleInputFocus, "onwa-clear": () => {
                this.applyFilter('');
                this.open();
                this.comboboxClear.emit();
            } }, this.loading && h("wa-spinner", { key: '7c70108b6821db8ac1c1600b9f63433bb74fcc37', slot: "end" }), h("wa-icon", { key: 'df47563afaf64e7fd79e55f96f8276f1b23b8333', slot: "start", name: "magnifying-glass", "aria-hidden": "true" }), h("slot", { key: '2cd076e3e125da56eb84d9fc2f3404e3a45d381d', name: "end", slot: "end" })), h("div", { key: 'a257b95a0497db03bb1799a7307d64735586be2a', class: "menu", role: "presentation" }, h("p", { key: '7fd35d0800ba2ae42c11ed3a9308a1ba219f2de7', class: "sr-only", id: this.listboxLabelId }, t('Lcz_AvailableSearchShortcuts', { fallback: 'Available search shortcuts' })), h("ul", { key: '8493dda3db595707a04ba7aef7e8af7b18de2749', class: "results", id: this.listboxId, role: "listbox", "aria-labelledby": this.listboxLabelId, "aria-describedby": emptyDescriptionId, "aria-busy": this.loading ? 'true' : undefined, onClick: this.handleResultsClick, onPointerDown: this.handleResultsPointerDown }, this.loading && (h("li", { key: '5dba756e4321e026578887560261b3aaab2a8942', class: "loading-state", role: "presentation" }, h("wa-spinner", { key: '943dce895a44078bf102d799e6d75e7c79985c80' }), h("p", { key: 'e565daa4df8615561beb6f5aa881ba25842020ff' }, t('Lcz_LoadingSuggestions', { fallback: 'Loading suggestions…' })))), h("slot", { key: 'cb41ec9249e2c65cc47556dbb1913e96bf6f1e1b', onSlotchange: this.handleSlotChange }), showEmptyState && (h("li", { key: '30c1bb7fc1beee91a8dc8a5e669b3bb05f3d17e2', class: "empty-state", role: "presentation", id: this.emptyStateId }, h("wa-icon", { key: '943b1acc98ae8b98bfbb1588a5e6c5bfca5d4f1a', name: "circle-info", "aria-hidden": "true" }), h("p", { key: 'e0ad43503ca8683ed62e9638a770d39f0c8837b2' }, t('Lcz_NoResultsFound', { fallback: 'No results found' }))))))), h("span", { key: 'abede9518600b9c6d0c28238737c81c090e7a339', class: "sr-only", "aria-live": "polite" }, this.liveRegionMessage)));
    }
    updateLiveRegion(resultCount, context) {
        if (!resultCount) {
            this.liveRegionMessage = context
                ? t('Lcz_NoResultsForContext', { fallback: `No results for ${context}`, params: [context] })
                : t('Lcz_NoResultsAvailable', { fallback: 'No results available' });
            return;
        }
        const plural = resultCount === 1 ? t('Lcz_ResultSingular', { fallback: 'result' }) : t('Lcz_ResultPlural', { fallback: 'results' });
        const count = formatCount(resultCount);
        this.liveRegionMessage = context
            ? t('Lcz_ResultsForContext', { fallback: '%1 %2 for %3', params: [count, plural, context] })
            : t('Lcz_ResultsAvailable', { fallback: '%1 %2 available', params: [count, plural] });
    }
    runAfterNextFrame(callback) {
        if (typeof requestAnimationFrame === 'function') {
            requestAnimationFrame(() => callback());
            return;
        }
        setTimeout(callback, 0);
    }
    static get watchers() { return {
        "activeIndex": [{
                "handleActiveIndexChange": 0
            }],
        "aria-invalid": [{
                "handleAriaInvalid": 0
            }],
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};
IrPicker.style = irPickerCss();

const irPickerItemCss = () => `:host{box-sizing:border-box !important}:host *,:host *::before,:host *::after{box-sizing:inherit !important;padding:0;margin:0}[hidden]{display:none !important}:host{box-sizing:border-box;display:block}:host([hidden]){display:none !important}.picker-item__container{all:unset;box-sizing:border-box;width:100%;color:var(--wa-color-text-normal);user-select:none;position:relative;display:flex;align-items:center;font-style:inherit;font-variant:inherit;font-weight:inherit;font-stretch:inherit;font-size:inherit;font-family:inherit;font-optical-sizing:inherit;font-size-adjust:inherit;font-kerning:inherit;font-feature-settings:inherit;font-variation-settings:inherit;padding:0;padding:0.5em 1em 0.5em 0.25em !important;line-height:var(--wa-line-height-condensed);transition:fill var(--wa-transition-normal) var(--wa-transition-easing);cursor:pointer;gap:0.5rem;scroll-margin:0.25rem}.picker-item__content{display:flex;align-items:center;gap:0.5rem}.picker-item__container:hover{background-color:var(--wa-color-neutral-fill-normal);color:var(--wa-color-neutral-on-normal)}.picker-item__check{opacity:0}:host([active]) .picker-item__container{background-color:var(--wa-color-brand-fill-loud);color:var(--wa-color-brand-on-loud);opacity:1}:host([selected]) .picker-item__container{font-weight:600}:host([selected]) .picker-item__check{opacity:1}:host([aria-disabled='true']) .picker-item__container,.picker-item__container:disabled{cursor:not-allowed;opacity:0.5}`;

const IrPickerItem = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    value;
    label;
    disabled = false;
    active = false;
    selected = false;
    render() {
        return (h(Host, { key: '933fc03fb29fa92dd1a6dc5ebda56a415ce4bc08', role: "option", "aria-selected": this.selected ? 'true' : 'false', "aria-disabled": this.disabled ? 'true' : 'false' }, h("button", { key: 'cac3c3817b97a5393591f11a9ad8d37dba02eaab', class: `picker-item__container`, type: "button", tabindex: "-1", disabled: this.disabled, part: "base" }, h("wa-icon", { key: '1d485c47d9225d6ecedaa7c6ff4538c8752b6565', class: "picker-item__check", name: "check" }), h("div", { key: 'c49851e8e54719f0a83fd1ab8eae5a1a258a4155', class: "picker-item__content", part: "content" }, h("slot", { key: 'cd390fd018ab6394772531874d97bcc0c89985b1' })))));
    }
};
IrPickerItem.style = irPickerItemCss();

export { IrPicker as ir_picker, IrPickerItem as ir_picker_item };
