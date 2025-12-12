import { h, Host } from "@stencil/core";
const DEFAULT_ASYNC_DEBOUNCE = 300;
export class IrPicker {
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
    size = 'small';
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
    hostEl;
    isOpen = false;
    query = '';
    activeIndex = -1;
    filteredItems = [];
    liveRegionMessage = '';
    slottedPickerItems = [];
    /** Emitted when a value is selected from the combobox list. */
    comboboxSelect;
    /** Emitted when the text input value changes. */
    textChange;
    /** Emitted when the clear button is clicked and the combobox value is cleared. */
    comboboxClear;
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
        if (['select-async', 'select'].includes(this.mode)) {
            this.applyFilter('', { updateQuery: false, emitEvent: false });
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
        const showEmptyState = !this.loading && !hasResults;
        const emptyDescriptionId = showEmptyState ? this.emptyStateId : undefined;
        return (h(Host, { key: '90faaefa3a2030ab777518910fe20811d1eac771' }, h("wa-popup", { key: '9570ef8e57acadf4be60f3c05488441cbbd0d928', flip: true, shift: true, placement: "bottom", sync: "width", "auto-size": "vertical", "auto-size-padding": 10, active: this.isOpen }, h("wa-input", { key: '2e2386e9b55708fdd252836a921c2957e8b39371', slot: "anchor", class: "search-bar", withClear: this.withClear, size: this.size, value: this.query, defaultValue: this.defaultValue, ref: el => (this.inputRef = el), appearance: this.appearance, label: this.label, pill: this.pill, autocomplete: "off", placeholder: this.placeholder || 'Search', oninput: this.handleInput, onfocus: this.handleInputFocus, "onwa-clear": () => {
                this.applyFilter('');
                this.open();
                this.comboboxClear.emit();
            } }, this.loading && h("wa-spinner", { key: '11597a749cf33c9d09c44439a3eee3861ac99a8d', slot: "end" }), h("wa-icon", { key: 'e39e254b85d58bfeda288273d1a56e7dafd1d90f', slot: "start", name: "magnifying-glass", "aria-hidden": "true" })), h("div", { key: '58465c8369946122b99095ee52e25374a1ef4b30', class: "menu", role: "presentation" }, h("p", { key: 'eb5d7104952c286bf06dc194a70aa2496a5e4cbc', class: "sr-only", id: this.listboxLabelId }, "Available search shortcuts"), h("ul", { key: '4532998f41ee11709b7cf916fdc999355cce7e05', class: "results", id: this.listboxId, role: "listbox", "aria-labelledby": this.listboxLabelId, "aria-describedby": emptyDescriptionId, "aria-busy": this.loading ? 'true' : undefined, onClick: this.handleResultsClick, onPointerDown: this.handleResultsPointerDown }, this.loading && (h("li", { key: 'b26317688d974c399990612f7663c6f0a240cbb7', class: "loading-state", role: "presentation" }, h("wa-spinner", { key: 'dd6a23922e95c86788713ff767487ccf5ecc42f0' }), h("p", { key: '0c4896267a803e54f1b1cce3e8518b683d3f18ff' }, "Loading suggestions\u2026"))), h("slot", { key: 'ddd8a74d2233fce12f2ca65b0faf451aa37561a3', onSlotchange: this.handleSlotChange }), showEmptyState && (h("li", { key: 'dbe2baa7b850fbcd1437a22b50cde70dfd7db6d8', class: "empty-state", role: "presentation", id: this.emptyStateId }, h("wa-icon", { key: 'd1ec99b78ea2e34566631c534b2c53ce2aaed245', name: "circle-info", "aria-hidden": "true" }), h("p", { key: '9ec21ff25e348ac1e8437f874a14462708d3e065' }, "No results found")))))), h("span", { key: 'cb19ef7404a495d7ac702cfaabcf0ffd8a605239', class: "sr-only", "aria-live": "polite" }, this.liveRegionMessage)));
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
    static get is() { return "ir-picker"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-picker.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-picker.css"]
        };
    }
    static get properties() {
        return {
            "value": {
                "type": "string",
                "mutable": true,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Selected value (also shown in the input when `mode=\"select\"`)."
                },
                "getter": false,
                "setter": false,
                "attribute": "value",
                "reflect": true,
                "defaultValue": "''"
            },
            "loading": {
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
                "attribute": "loading",
                "reflect": true,
                "defaultValue": "false"
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'select' | 'default' | 'select-async'",
                    "resolved": "\"default\" | \"select\" | \"select-async\"",
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
                "attribute": "mode",
                "reflect": false,
                "defaultValue": "'default'"
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
                "attribute": "pill",
                "reflect": true,
                "defaultValue": "false"
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
                    "text": "Placeholder shown inside the input when there is no query."
                },
                "getter": false,
                "setter": false,
                "attribute": "placeholder",
                "reflect": false,
                "defaultValue": "''"
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
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": "Optional label applied to the text field."
                },
                "getter": false,
                "setter": false,
                "attribute": "label",
                "reflect": false
            },
            "defaultValue": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['defaultValue']",
                    "resolved": "string",
                    "references": {
                        "NativeWaInput": {
                            "location": "import",
                            "path": "../ir-input/ir-input",
                            "id": "src/components/ui/ir-input/ir-input.tsx::NativeWaInput"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The default value of the form control. Primarily used for resetting the form control."
                },
                "getter": false,
                "setter": false,
                "attribute": "default-value",
                "reflect": true
            },
            "withClear": {
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
                    "tags": [{
                            "name": "default",
                            "text": "false"
                        }],
                    "text": "Whether to show a clear button inside the input.\nWhen clicked, the input value is cleared and the `combobox-clear` event is emitted."
                },
                "getter": false,
                "setter": false,
                "attribute": "with-clear",
                "reflect": false,
                "defaultValue": "false"
            },
            "size": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "NativeWaInput['size']",
                    "resolved": "\"large\" | \"medium\" | \"small\"",
                    "references": {
                        "NativeWaInput": {
                            "location": "import",
                            "path": "../ir-input/ir-input",
                            "id": "src/components/ui/ir-input/ir-input.tsx::NativeWaInput"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The input's size."
                },
                "getter": false,
                "setter": false,
                "attribute": "size",
                "reflect": true,
                "defaultValue": "'small'"
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
                            "id": "src/components/ui/ir-input/ir-input.tsx::NativeWaInput"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "The input's visual appearance."
                },
                "getter": false,
                "setter": false,
                "attribute": "appearance",
                "reflect": true
            },
            "debounce": {
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
                    "text": "Delay (in milliseconds) before emitting the `text-change` event. Defaults to 300ms for async mode."
                },
                "getter": false,
                "setter": false,
                "attribute": "debounce",
                "reflect": false,
                "defaultValue": "0"
            }
        };
    }
    static get states() {
        return {
            "isOpen": {},
            "query": {},
            "activeIndex": {},
            "filteredItems": {},
            "liveRegionMessage": {},
            "slottedPickerItems": {}
        };
    }
    static get events() {
        return [{
                "method": "comboboxSelect",
                "name": "combobox-select",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when a value is selected from the combobox list."
                },
                "complexType": {
                    "original": "IrComboboxSelectEventDetail",
                    "resolved": "IrComboboxSelectEventDetail",
                    "references": {
                        "IrComboboxSelectEventDetail": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ui/ir-picker/ir-picker.tsx",
                            "id": "src/components/ui/ir-picker/ir-picker.tsx::IrComboboxSelectEventDetail"
                        }
                    }
                }
            }, {
                "method": "textChange",
                "name": "text-change",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the text input value changes."
                },
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                }
            }, {
                "method": "comboboxClear",
                "name": "combobox-clear",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Emitted when the clear button is clicked and the combobox value is cleared."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
    static get methods() {
        return {
            "open": {
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
                    "text": "",
                    "tags": []
                }
            },
            "close": {
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
                    "text": "",
                    "tags": []
                }
            }
        };
    }
    static get elementRef() { return "hostEl"; }
    static get watchers() {
        return [{
                "propName": "activeIndex",
                "methodName": "handleActiveIndexChange"
            }, {
                "propName": "value",
                "methodName": "handleValueChange"
            }];
    }
    static get listeners() {
        return [{
                "name": "keydown",
                "method": "handleKeyDown",
                "target": undefined,
                "capture": false,
                "passive": false
            }, {
                "name": "click",
                "method": "handleDocumentClick",
                "target": "document",
                "capture": false,
                "passive": false
            }, {
                "name": "focusin",
                "method": "handleDocumentFocus",
                "target": "document",
                "capture": false,
                "passive": false
            }];
    }
}
//# sourceMappingURL=ir-picker.js.map
