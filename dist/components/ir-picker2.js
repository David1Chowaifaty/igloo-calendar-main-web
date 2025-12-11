import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';

const irPickerCss = ":host{display:block;width:100%}.menu{display:flex;flex-direction:column;min-width:max-content;margin:0px;padding:0.5rem 0;border:var(--wa-border-style) var(--wa-border-width-s) var(--wa-color-surface-border);border-radius:var(--wa-border-radius-m);background-color:var(--wa-color-surface-raised);box-shadow:var(--wa-shadow-m);color:var(--wa-color-text-normal);text-align:start;user-select:none;overflow:auto;max-width:var(--auto-size-available-width) !important;max-height:var(--auto-size-available-height) !important}.results{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;max-height:min(60vh, 24rem);overflow-y:auto}.group{display:flex;flex-direction:column;gap:0.35rem}.group__label{font-size:0.75rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--wa-color-text-muted);margin:0 0.25rem}.group__options{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.option{display:flex;align-items:center;gap:0.75rem;padding:0.75rem;border-radius:var(--wa-border-radius-m);cursor:pointer;transition:background-color 120ms ease, box-shadow 120ms ease}.option__leading{color:var(--wa-color-text-muted);display:flex;align-items:center;justify-content:center;font-size:1rem}.option__leading wa-icon{font-size:1.15rem}.option__content{display:flex;flex-direction:column;gap:0.15rem;flex:1}.option__label{font-weight:600}.option__description{font-size:0.85rem;color:var(--wa-color-text-muted)}.option__suffix{margin-inline-start:auto;display:flex;align-items:center;gap:0.5rem}.option__meta{padding:0.15rem 0.45rem;border-radius:var(--wa-border-radius-pill, 999px);background-color:var(--wa-color-surface, rgba(255, 255, 255, 0.08));font-size:0.75rem;color:var(--wa-color-text-normal)}.option__shortcut{display:flex;gap:0.25rem}.option__shortcut kbd{border-radius:var(--wa-border-radius-s);border:1px solid var(--wa-color-surface-border);padding:0.15rem 0.35rem;font-size:0.75rem;font-family:inherit;background-color:var(--wa-color-surface, rgba(255, 255, 255, 0.04))}.option--active{background-color:var(--wa-color-surface-hover, rgba(255, 255, 255, 0.06));box-shadow:inset 0 0 0 1px var(--wa-color-surface-border)}.empty-state{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0.35rem;padding:2rem 1rem;text-align:center;color:var(--wa-color-text-muted)}.empty-state wa-icon{font-size:1.25rem}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border:0}";
const IrPickerStyle0 = irPickerCss;

const IrPicker = /*@__PURE__*/ proxyCustomElement(class IrPicker extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.comboboxSelect = createEvent(this, "combobox-select", 7);
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
    /** The input's size. */
    size;
    /** The input's visual appearance. */
    appearance;
    static idCounter = 0;
    componentId = ++IrPicker.idCounter;
    listboxId = `ir-combobox-listbox-${this.componentId}`;
    listboxLabelId = `ir-combobox-label-${this.componentId}`;
    emptyStateId = `ir-combobox-empty-${this.componentId}`;
    inputRef;
    nativeInput;
    slotRef;
    get hostEl() { return this; }
    isOpen = false;
    query = '';
    activeIndex = -1;
    filteredItems = [];
    liveRegionMessage = '';
    slottedPickerItems = [];
    comboboxSelect;
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
    async open() {
        if (this.isOpen) {
            this.focusInput();
            return;
        }
        this.isOpen = true;
        requestAnimationFrame(() => this.focusInput());
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
    handleValueChange(newValue) {
        this.updateSelectedFromValue(newValue);
        this.syncQueryWithValue(newValue);
        if (this.mode === 'select') {
            this.applyFilter('', { updateQuery: false });
        }
    }
    closeCombobox(options = {}) {
        this.isOpen = false;
        if (options.restoreFocus) {
            this.focusInput();
        }
    }
    handleInput = (event) => {
        const target = event.target;
        this.applyFilter(target?.value ?? '');
        this.open();
    };
    handleInputFocus = () => {
        if (!this.isOpen) {
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
    applyFilter(value, options = {}) {
        const { updateQuery = true } = options;
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
    }
    syncQueryWithValue(value) {
        if (this.mode !== 'select') {
            return;
        }
        if (!value) {
            this.query = '';
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
        if (this.mode === 'select') {
            this.query = this.getItemDisplayLabel(item);
            this.applyFilter('', { updateQuery: false });
        }
        else {
            this.applyFilter('');
        }
        this.activeIndex = -1;
    }
    focusInput() {
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
        this.applyFilter(this.query);
        this.updateSelectedFromValue(this.value);
        this.syncQueryWithValue(this.value);
        if (this.mode === 'select' && this.value) {
            this.applyFilter('', { updateQuery: false });
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
        const emptyDescriptionId = hasResults ? undefined : this.emptyStateId;
        return (h(Host, { key: '9053fbe8e7fc13e7a8c309caf706cf225e9ef0c1' }, h("wa-popup", { key: '5a2aaef12589265593744f78e16b8bba857cfe8e', flip: true, shift: true, sync: "width", "auto-size": "vertical", "auto-size-padding": 10, active: this.isOpen }, h("wa-input", { key: '277aa2b64d676bae6e331e8eda2eb469fec600bb', slot: "anchor", class: "search-bar",
            // withClear
            size: this.size, value: this.query, ref: el => (this.inputRef = el), appearance: this.appearance, label: this.label, pill: this.pill, autocomplete: "off", placeholder: this.placeholder || 'Search', oninput: this.handleInput, onfocus: this.handleInputFocus, "onwa-clear": () => {
                this.applyFilter('');
                this.open();
            } }, this.loading && h("wa-spinner", { key: 'b872b831af31210909afbd8b267381b6ded77d7b', slot: "end" }), h("wa-icon", { key: '1d0088b32db6e72e5b3a95bfccb1b2a3072dec57', slot: "start", name: "magnifying-glass", "aria-hidden": "true" })), !this.loading && (h("div", { key: '550f9ee5dd32b0bda004877fba48bef03e305b4c', class: "menu", role: "presentation" }, h("p", { key: 'dd9be93053853fee7e28927c5782e2caf8693c00', class: "sr-only", id: this.listboxLabelId }, "Available search shortcuts"), h("ul", { key: '1f20e4da089f4e3849bdd888b5d9283d3e6ecf43', class: "results", id: this.listboxId, role: "listbox", "aria-labelledby": this.listboxLabelId, "aria-describedby": emptyDescriptionId, onClick: this.handleResultsClick, onPointerDown: this.handleResultsPointerDown }, h("slot", { key: 'b027f492fcc7198e88b47d41bea566424428a051', onSlotchange: this.handleSlotChange }), !hasResults && (h("li", { key: '5c7b8034cf9db480b26a05980ac17b662f8a1947', class: "empty-state", role: "presentation", id: this.emptyStateId }, h("wa-icon", { key: 'd20437dd5c5fba96214a347c1efd39ab0f5d01c7', name: "circle-info", "aria-hidden": "true" }), h("p", { key: '58409fb65e7de8551e5b5487c3861c73d8568341' }, "No results found"))))))), h("span", { key: '3f1cd7d7db661626b58dabec6103ea7669abe3e6', class: "sr-only", "aria-live": "polite" }, this.liveRegionMessage)));
    }
    updateLiveRegion(resultCount, context) {
        if (!resultCount) {
            this.liveRegionMessage = context ? `No results for ${context}` : 'No results available';
            return;
        }
        const plural = resultCount === 1 ? 'result' : 'results';
        this.liveRegionMessage = context ? `${resultCount} ${plural} for ${context}` : `${resultCount} ${plural} available`;
    }
    runAfterNextFrame(callback) {
        if (typeof requestAnimationFrame === 'function') {
            requestAnimationFrame(() => callback());
            return;
        }
        setTimeout(callback, 0);
    }
    static get watchers() { return {
        "activeIndex": ["handleActiveIndexChange"],
        "value": ["handleValueChange"]
    }; }
    static get style() { return IrPickerStyle0; }
}, [1, "ir-picker", {
        "value": [1537],
        "loading": [516],
        "mode": [1],
        "pill": [516],
        "placeholder": [1],
        "label": [1],
        "defaultValue": [513, "default-value"],
        "size": [513],
        "appearance": [513],
        "isOpen": [32],
        "query": [32],
        "activeIndex": [32],
        "filteredItems": [32],
        "liveRegionMessage": [32],
        "slottedPickerItems": [32],
        "open": [64],
        "close": [64]
    }, [[0, "keydown", "handleKeyDown"], [4, "click", "handleDocumentClick"], [4, "focusin", "handleDocumentFocus"]], {
        "activeIndex": ["handleActiveIndexChange"],
        "value": ["handleValueChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-picker"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-picker":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPicker);
            }
            break;
    } });
}

export { IrPicker as I, defineCustomElement as d };

//# sourceMappingURL=ir-picker2.js.map