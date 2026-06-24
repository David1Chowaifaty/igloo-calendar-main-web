import { EventEmitter } from '../../../stencil-public-runtime';
/**
 * Which preview flow(s) to enable:
 * - `agent` — only the city-ledger fiscal-document preview.
 * - `guest` — only the guest invoice / credit-note preview.
 * - `all`   — both (needed when a list mixes agent and guest documents).
 */
export type FiscalDocumentPreviewMode = 'agent' | 'guest' | 'all';
/**
 * Fiscal Document Preview
 *
 * Thin wrapper that mounts the appropriate preview component(s). Both inner
 * previews are passive, window-event-driven listeners, so the host just needs
 * to render this once. `documentConverted` from the agent preview bubbles
 * through to the host.
 */
export declare class IrFiscalDocumentPreview {
    ticket: string;
    propertyId: number;
    /** Which preview flows to enable. Defaults to agent (city-ledger). */
    mode: FiscalDocumentPreviewMode;
    /** Re-emitted when the agent preview converts a draft into an invoice. */
    documentConverted: EventEmitter<void>;
    render(): any;
}
