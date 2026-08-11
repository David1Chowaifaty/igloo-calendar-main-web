import type Quill from 'quill';
/**
 * Makes a Quill instance functional inside a shadow root. Quill dispatches document-level
 * `selectionchange`/`mousedown`/`mouseup`/`click` events to instances it finds via
 * `document.querySelectorAll('.ql-container')`, which never sees shadow DOM, and its
 * selection/focus checks use `document.getSelection()`/`document.activeElement`, which stop
 * at the shadow boundary. All overrides are instance-level (own properties), never on
 * prototypes. Returns a teardown function that removes the added listeners.
 */
export declare function patchQuillForShadowDom(quill: Quill, host: HTMLElement): () => void;
