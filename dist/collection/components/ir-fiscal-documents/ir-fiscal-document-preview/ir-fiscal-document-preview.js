import { Host, h } from "@stencil/core";
/**
 * Fiscal Document Preview
 *
 * Thin wrapper that mounts the appropriate preview component(s). Both inner
 * previews are passive, window-event-driven listeners, so the host just needs
 * to render this once. `documentConverted` from the agent preview bubbles
 * through to the host.
 */
export class IrFiscalDocumentPreview {
    ticket;
    propertyId;
    /** Which preview flows to enable. Defaults to agent (city-ledger). */
    mode = 'agent';
    /** Re-emitted when the agent preview converts a draft into an invoice. */
    documentConverted;
    render() {
        const showAgent = this.mode === 'agent' || this.mode === 'all';
        const showGuest = this.mode === 'guest' || this.mode === 'all';
        return (h(Host, { key: '67b05099b92f6e7db4ed653b0ff30b8879b368db' }, showAgent && (h("ir-cl-fiscal-document-preview", { key: '3f9d0e723a1e66d78e3a0f688d3c68dde9eeabd9', ticket: this.ticket, propertyId: this.propertyId, onDocumentConverted: (e) => {
                // Stop the inner (bubbling) event and re-emit from the wrapper so
                // the host only sees a single, typed `documentConverted`.
                e.stopPropagation();
                this.documentConverted.emit();
            } })), showGuest && h("ir-guest-document-preview", { key: '56424922586bdb333c28c1e0ce61694f14fe1777', ticket: this.ticket, propertyId: this.propertyId })));
    }
    static get is() { return "ir-fiscal-document-preview"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() {
        return {
            "$": ["ir-fiscal-document-preview.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["ir-fiscal-document-preview.css"]
        };
    }
    static get properties() {
        return {
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
                "reflect": false,
                "attribute": "ticket"
            },
            "propertyId": {
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
                "attribute": "property-id"
            },
            "mode": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "FiscalDocumentPreviewMode",
                    "resolved": "\"agent\" | \"all\" | \"guest\"",
                    "references": {
                        "FiscalDocumentPreviewMode": {
                            "location": "local",
                            "path": "/Users/davidchowaifaty/code/igloorooms/modified-ir-webcmp/src/components/ir-fiscal-documents/ir-fiscal-document-preview/ir-fiscal-document-preview.tsx",
                            "id": "src/components/ir-fiscal-documents/ir-fiscal-document-preview/ir-fiscal-document-preview.tsx::FiscalDocumentPreviewMode"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Which preview flows to enable. Defaults to agent (city-ledger)."
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "mode",
                "defaultValue": "'agent'"
            }
        };
    }
    static get events() {
        return [{
                "method": "documentConverted",
                "name": "documentConverted",
                "bubbles": true,
                "cancelable": true,
                "composed": true,
                "docs": {
                    "tags": [],
                    "text": "Re-emitted when the agent preview converts a draft into an invoice."
                },
                "complexType": {
                    "original": "void",
                    "resolved": "void",
                    "references": {}
                }
            }];
    }
}
