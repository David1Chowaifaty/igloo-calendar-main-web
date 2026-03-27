import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { T as Token } from './Token.js';
import { a as axios } from './axios.js';
import { d as defineCustomElement$4 } from './ir-dialog2.js';
import { d as defineCustomElement$3 } from './ir-input2.js';
import { d as defineCustomElement$2 } from './ir-property-switcher-dialog-content2.js';
import { d as defineCustomElement$1 } from './ir-spinner2.js';

const irPropertySwitcherCss = ".sc-ir-property-switcher-h{display:block}.property-switcher__trigger.sc-ir-property-switcher{width:200px;padding:0;margin:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:start}.property-switcher__dialog.sc-ir-property-switcher::part(dialog){margin:0;max-width:100%;height:100%;max-height:100%;border-radius:0}.property-switcher__dialog.sc-ir-property-switcher::part(body){padding:0}.property-switcher__trigger-btn.sc-ir-property-switcher{width:100%}.property-switcher__trigger-btn.sc-ir-property-switcher::part(start){display:none}.property-switcher__trigger-btn.sc-ir-property-switcher::part(base){justify-content:space-between;width:100%}.property-switcher__loader.sc-ir-property-switcher,.property-switcher__dropdown-loader.sc-ir-property-switcher{display:flex;align-items:center;justify-content:center;gap:8px;padding:12px;min-width:100px}.property-switcher__loader.sc-ir-property-switcher{min-height:150px}@media (min-width: 640px){.property-switcher__dialog.sc-ir-property-switcher::part(dialog){margin:auto;inset:0;max-width:100%;border-radius:var(--wa-panel-border-radius);height:fit-content}.property-switcher__dialog.sc-ir-property-switcher::part(header){display:none}}";
const IrPropertySwitcherStyle0 = irPropertySwitcherCss;

const IrPropertySwitcher = /*@__PURE__*/ proxyCustomElement(class IrPropertySwitcher extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.propertyChange = createEvent(this, "propertyChange", 7);
    }
    get el() { return this; }
    mode = 'dialog';
    ticket;
    baseUrl;
    // NEW: Allow external property binding
    propertyId;
    selectedLinkedPropertyId;
    open = false;
    isLinkedLoading = false;
    linkedLoaded = false;
    hasPool = false;
    propertyState = {
        selected: null,
        linked: [],
        source: 'storage',
    };
    displayMode = 'read-only';
    token = new Token();
    /** Single unified event - emitted when dialog confirms selection OR dropdown selects linked property */
    propertyChange;
    storagePoller;
    userInfoPoller;
    lastSelectedAcRaw = null;
    lastUserInfoRaw = null;
    isUpdating = false; // Prevent circular updates
    async componentWillLoad() {
        if (this.baseUrl)
            this.token.setBaseUrl(this.baseUrl);
        if (this.ticket) {
            this.token.setToken(this.ticket);
            await this.init();
        }
        window.addEventListener('storage', this.handleStorageEvent);
    }
    disconnectedCallback() {
        this.stopPolling();
        window.removeEventListener('storage', this.handleStorageEvent);
    }
    async handleTicketChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.token.setToken(newValue);
            await this.init();
        }
    }
    // NEW: React to external property ID changes
    async handlePropertyIdChange(newId) {
        if (this.isUpdating)
            return;
        if (newId && newId !== this.propertyState.selected?.PROPERTY_ID) {
            // External changes don't emit propertyChange event
            await this.loadPropertyById(newId, 'external', undefined, false);
        }
    }
    handleLinkedPropertyIdChange(newId) {
        // Validate that the linked property exists
        if (newId && !this.propertyState.linked.find(p => p.property_id === newId)) {
            console.warn(`Linked property ${newId} not found in available properties`);
        }
    }
    async init() {
        await this.pollSelectedAcStorage();
        this.pollUserInfoStorage();
        if (!this.propertyState.selected) {
            this.startPolling();
        }
    }
    startPolling() {
        if (this.storagePoller)
            return;
        this.storagePoller = window.setInterval(() => {
            this.pollSelectedAcStorage();
            this.pollUserInfoStorage();
        }, 300);
    }
    stopPolling() {
        if (this.storagePoller) {
            clearInterval(this.storagePoller);
            this.storagePoller = undefined;
        }
        if (this.userInfoPoller) {
            clearInterval(this.userInfoPoller);
            this.userInfoPoller = undefined;
        }
    }
    handleStorageEvent = () => {
        this.startPolling();
    };
    pollSelectedAcStorage = async () => {
        const selectedAcRaw = localStorage.getItem('_Selected_Ac');
        if (selectedAcRaw === this.lastSelectedAcRaw)
            return;
        this.lastSelectedAcRaw = selectedAcRaw;
        if (!selectedAcRaw)
            return;
        let selectedAc;
        try {
            selectedAc = JSON.parse(selectedAcRaw);
        }
        catch {
            return;
        }
        await this.updatePropertyState(selectedAc, null, 'storage');
        this.stopPolling();
    };
    pollUserInfoStorage = () => {
        const userInfoRaw = localStorage.getItem('UserInfo_b');
        if (userInfoRaw === this.lastUserInfoRaw)
            return;
        this.lastUserInfoRaw = userInfoRaw;
        if (!userInfoRaw)
            return;
        this.resolveDisplayMode();
        if (this.userInfoPoller) {
            clearInterval(this.userInfoPoller);
            this.userInfoPoller = undefined;
        }
    };
    // NEW: Unified state update method
    async updatePropertyState(selectedAc, linkedProperty, source, emitEvent = false) {
        this.isUpdating = true;
        const selected = {
            A_NAME: selectedAc.My_User?.USERNAME ?? '',
            COUNTRY_CODE: selectedAc.COUNTRY_ID,
            COUNTRY_NAME: selectedAc.My_Country?.L1_NAME_REF ?? '',
            PROPERTY_ID: selectedAc.AC_ID,
            PROPERTY_NAME: selectedAc.NAME,
        };
        const hasPool = Boolean(selectedAc.POOL);
        const sameProperty = this.propertyState.selected?.PROPERTY_ID === selectedAc.AC_ID;
        const keepLinked = sameProperty && this.linkedLoaded && hasPool;
        const linked = keepLinked ? this.propertyState.linked : [];
        // Update state atomically
        this.propertyState = {
            selected,
            linked,
            source,
        };
        this.hasPool = hasPool;
        this.linkedLoaded = keepLinked;
        if (!keepLinked) {
            this.isLinkedLoading = false;
        }
        // Sync external props
        this.propertyId = selected.PROPERTY_ID;
        this.selectedLinkedPropertyId = linkedProperty?.property_id;
        this.resolveDisplayMode();
        // Only emit event when explicitly requested (user selection from dialog)
        if (emitEvent) {
            this.propertyChange.emit({
                property: selectedAc,
                linkedProperty,
                allLinkedProperties: linked,
            });
        }
        if (this.open) {
            this.ensureLinkedPropertiesLoaded();
        }
        this.isUpdating = false;
    }
    async ensureLinkedPropertiesLoaded() {
        if (!this.hasPool || this.linkedLoaded || this.isLinkedLoading)
            return;
        if (!this.propertyState.selected?.PROPERTY_ID)
            return;
        this.isLinkedLoading = true;
        const linked = await this.fetchLinkedProperties(this.propertyState.selected.PROPERTY_ID);
        this.propertyState = {
            ...this.propertyState,
            linked,
        };
        this.linkedLoaded = true;
        this.isLinkedLoading = false;
    }
    async fetchLinkedProperties(acId) {
        try {
            const { data } = await axios.post(`${this.baseUrl ?? ''}/Fetch_Linked_Properties`, {
                property_id: acId,
            });
            if (data.ExceptionMsg) {
                throw new Error(data.ExceptionMsg);
            }
            return Array.isArray(data.My_Result) ? data.My_Result : [];
        }
        catch (error) {
            console.error('Failed to fetch linked properties', error);
            return [];
        }
    }
    resolveDisplayMode() {
        const userInfoRaw = localStorage.getItem('UserInfo_b');
        let userInfo = null;
        try {
            if (userInfoRaw)
                userInfo = JSON.parse(userInfoRaw);
        }
        catch {
            /* noop */
        }
        const userTypeCode = String(userInfo?.USER_TYPE_CODE ?? '');
        if (userTypeCode === '1' || userTypeCode === '4') {
            this.displayMode = 'dialog';
            return;
        }
        if (!this.propertyState?.selected || !this.hasPool) {
            this.displayMode = 'read-only';
            return;
        }
        this.displayMode = 'dropdown';
    }
    handlePropertySelected = async (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        // This is the ONLY place where propertyChange event is emitted
        // Only fired when dialog content confirms selection
        await this.loadPropertyById(event.detail, 'user-selection', undefined, true);
    };
    handleDropdownSelect = async (selectedProperty) => {
        const selectedId = Number(selectedProperty);
        const linkedProperty = this.propertyState.linked.find(p => p.property_id === selectedId);
        if (!linkedProperty)
            return;
        // Dropdown selection also emits propertyChange with linkedProperty context
        await this.loadPropertyById(linkedProperty.property_id, 'user-selection', linkedProperty, true);
    };
    // NEW: Consolidated loading method
    async loadPropertyById(propertyId, source, linkedProperty, emitEvent = false) {
        if (this.isUpdating)
            return;
        this.open = false;
        try {
            const { data } = await axios.post(`${this.baseUrl ?? ''}/Get_Ac_By_AC_ID_Adv`, {
                AC_ID: propertyId,
                Bypass_Caching: true,
                IS_BACK_OFFICE: true,
            });
            if (data.ExceptionMsg) {
                throw new Error(data.ExceptionMsg);
            }
            await this.updatePropertyState(data.My_Result, linkedProperty ?? null, source, emitEvent);
        }
        catch (error) {
            console.error('Failed to fetch selected property details', error);
        }
    }
    renderReadOnly() {
        return h("p", { class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME ?? 'Property');
    }
    trigger() {
        return (h("wa-button", { size: "small", withCaret: true, class: "property-switcher__trigger-btn", variant: "neutral", appearance: "outlined", onClick: () => {
                this.open = !this.open;
                if (this.open) {
                    this.ensureLinkedPropertiesLoaded();
                }
            } }, h("p", { class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME ?? 'Select property')));
    }
    render() {
        return (h(Host, { key: 'acef115874b55d0324b0838a8529c143bc067cd8' }, this.displayMode === 'read-only' && this.renderReadOnly(), this.displayMode === 'dropdown' && (h("wa-dropdown", { key: '735fa4961aed2b9aeeeca597f6745eab885c5dad', "onwa-show": () => {
                this.ensureLinkedPropertiesLoaded();
            }, "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.handleDropdownSelect(Number(e.detail.item.value));
            } }, h("wa-button", { key: '699205aeab7553cb4197a4589547dcb0963c02aa', size: "small", class: "property-switcher__trigger-btn", slot: "trigger", withCaret: true, variant: "neutral", appearance: "outlined" }, h("p", { key: '8f94334f9df0a9150e7ee2576ad370aac9266c45', class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME)), this.isLinkedLoading && (h("wa-dropdown-item", { key: 'fd1371a18fc5bed278ac49fbb2893ed6323d6705', disabled: true, class: "property-switcher__dropdown-loader" }, h("wa-spinner", { key: '01819de521271d6f032b1ca26023a29cd5cdf24b' }))), this.propertyState.linked?.map(property => (h("wa-dropdown-item", { value: property.property_id?.toString(), key: `dropdown-item-${property.property_id}` }, property.name))))), this.displayMode === 'dialog' && (h("div", { key: 'b395908235230c093ded963fbb31ed3b28665b21' }, this.trigger(), h("ir-dialog", { key: '46e2aaeec4f61dd3be2d989a397d958f098dc64c',
            // withoutHeader
            open: this.open, label: "Search", class: "property-switcher__dialog", style: { '--ir-dialog-width': '40rem' }, onIrDialogAfterHide: e => {
                e.stopImmediatePropagation();
                e.stopPropagation();
                this.open = false;
            } }, this.open &&
            (this.isLinkedLoading ? (h("div", { class: "property-switcher__loader" }, h("ir-spinner", null))) : (h("ir-property-switcher-dialog-content", { onLinkedPropertyChange: e => {
                    e.stopImmediatePropagation();
                    e.stopPropagation();
                    this.handleDropdownSelect(Number(e.detail.property_id));
                }, open: this.open, selectedPropertyId: this.propertyState.selected?.PROPERTY_ID, properties: this.propertyState.linked, onPropertySelected: this.handlePropertySelected }))))))));
    }
    static get watchers() { return {
        "ticket": ["handleTicketChange"],
        "propertyId": ["handlePropertyIdChange"],
        "selectedLinkedPropertyId": ["handleLinkedPropertyIdChange"]
    }; }
    static get style() { return IrPropertySwitcherStyle0; }
}, [2, "ir-property-switcher", {
        "mode": [1],
        "ticket": [1],
        "baseUrl": [1, "base-url"],
        "propertyId": [1026, "property-id"],
        "selectedLinkedPropertyId": [1026, "selected-linked-property-id"],
        "open": [32],
        "isLinkedLoading": [32],
        "linkedLoaded": [32],
        "hasPool": [32],
        "propertyState": [32],
        "displayMode": [32]
    }, undefined, {
        "ticket": ["handleTicketChange"],
        "propertyId": ["handlePropertyIdChange"],
        "selectedLinkedPropertyId": ["handleLinkedPropertyIdChange"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-property-switcher", "ir-dialog", "ir-input", "ir-property-switcher-dialog-content", "ir-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-property-switcher":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrPropertySwitcher);
            }
            break;
        case "ir-dialog":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-input":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-property-switcher-dialog-content":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
        case "ir-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrPropertySwitcher as I, defineCustomElement as d };

//# sourceMappingURL=ir-property-switcher2.js.map