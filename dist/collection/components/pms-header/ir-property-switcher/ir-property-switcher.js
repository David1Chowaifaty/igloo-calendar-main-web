import { Host, h } from "@stencil/core";
import Token from "../../../models/Token";
import axios from "axios";
export class IrPropertySwitcher {
    el;
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
        return (h(Host, { key: '877ff24aedf15c6a67c8b2b5b0627b77f4521b18' }, this.displayMode === 'read-only' && this.renderReadOnly(), this.displayMode === 'dropdown' && (h("wa-dropdown", { key: '695adc630c5ad4aeb64945eb8383b3c4bf492b1c', "onwa-show": () => {
                this.ensureLinkedPropertiesLoaded();
            }, "onwa-hide": e => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }, "onwa-select": (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this.handleDropdownSelect(Number(e.detail.item.value));
            } }, h("wa-button", { key: 'd6a19caffec71401fd263d15ecd07d46535398b7', size: "small", class: "property-switcher__trigger-btn", slot: "trigger", withCaret: true, variant: "neutral", appearance: "outlined" }, h("p", { key: '4ada93115a30dcb502e035c3adfb5731dec0c434', class: "property-switcher__trigger" }, this.propertyState.selected?.PROPERTY_NAME)), this.isLinkedLoading && (h("wa-dropdown-item", { key: 'e2e6892ac8cfa1e44a0110dfb178718112b8a7ce', disabled: true, class: "property-switcher__dropdown-loader" }, h("wa-spinner", { key: '4c727681ae989a35f2a3fe9c66750ceea38ccfa6' }))), this.propertyState.linked?.map(property => (h("wa-dropdown-item", { value: property.property_id?.toString(), key: `dropdown-item-${property.property_id}` }, property.name))))), this.displayMode === 'dialog' && (h("div", { key: '55f003717b43f4046145139c5e24a06125f243b6' }, this.trigger(), h("ir-dialog", { key: '52a7533bacebf4f3097743767744f337f55347a1',
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
    static get is() { return "ir-property-switcher"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-property-switcher.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-property-switcher.css"]
        };
    }
    static get properties() {
        return {
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "'dropdown' | 'dialog'",
                    "resolved": "\"dialog\" | \"dropdown\"",
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
                "defaultValue": "'dialog'"
            },
            "ticket": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "ticket",
                "reflect": false
            },
            "baseUrl": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "base-url",
                "reflect": false
            },
            "propertyId": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "property-id",
                "reflect": false
            },
            "selectedLinkedPropertyId": {
                "type": "number",
                "mutable": true,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": true,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "attribute": "selected-linked-property-id",
                "reflect": false
            }
        };
    }
    static get states() {
        return {
            "open": {},
            "isLinkedLoading": {},
            "linkedLoaded": {},
            "hasPool": {},
            "propertyState": {},
            "displayMode": {}
        };
    }
    static get events() {
        return [{
                "method": "propertyChange",
                "name": "propertyChange",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Single unified event - emitted when dialog confirms selection OR dropdown selects linked property"
                },
                "complexType": {
                    "original": "{\n    property: GetACByACID;\n    linkedProperty: LinkedProperty | null;\n    allLinkedProperties: LinkedProperty[];\n  }",
                    "resolved": "{ property: GetACByACID; linkedProperty: LinkedProperty; allLinkedProperties: LinkedProperty[]; }",
                    "references": {
                        "GetACByACID": {
                            "location": "import",
                            "path": "./legacy.types",
                            "id": "src/components/pms-header/ir-property-switcher/legacy.types.ts::GetACByACID"
                        },
                        "LinkedProperty": {
                            "location": "import",
                            "path": "@/services/property.service",
                            "id": "src/services/property.service.ts::LinkedProperty"
                        }
                    }
                }
            }];
    }
    static get elementRef() { return "el"; }
    static get watchers() {
        return [{
                "propName": "ticket",
                "methodName": "handleTicketChange"
            }, {
                "propName": "propertyId",
                "methodName": "handlePropertyIdChange"
            }, {
                "propName": "selectedLinkedPropertyId",
                "methodName": "handleLinkedPropertyIdChange"
            }];
    }
}
//# sourceMappingURL=ir-property-switcher.js.map
