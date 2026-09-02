type DirectionMode = 'auto' | 'ltr' | 'rtl';
/**
 * A floating dev/QA panel for switching language, calendar system and text direction at runtime,
 * with a live preview of how dates render under the current combination.
 *
 * Drop it anywhere on a page:
 *
 *   <ir-locale-switcher></ir-locale-switcher>
 *
 * Nothing else needs wiring. Language and calendar both live in `@stencil/store` stores, and
 * `@stencil/store` tracks reads via `getRenderingRef()` at any call depth — so every component
 * that calls `formatDate()` inside its `render()` re-renders on its own when this panel changes
 * something. Values formatted once into `@State` during `componentWillLoad` are the exception;
 * those refresh on that component's next natural re-render.
 *
 * This is a development tool, not a customer-facing setting. Keep it out of production pages.
 */
export declare class IrLocaleSwitcher {
    el: HTMLElement;
    /** Corner to pin the panel to. */
    placement: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    /** Start collapsed to a single button. */
    collapsed: boolean;
    /** Sample date for the preview, `YYYY-MM-DD`. Defaults to today. */
    sampleDate: string;
    open: boolean;
    direction: DirectionMode;
    componentWillLoad(): void;
    /**
     * Publishes the language the same way `RoomService.fetchLanguage` does, then pushes it onto
     * every mounted component exposing a `language` prop so their `@Watch('language')` refetches
     * the `Lcz_*` strings. Without that second step only the dates would switch.
     */
    private applyLanguage;
    private applyCalendar;
    private applyNumberingSystem;
    private applyDirection;
    private get sample();
    private renderPreview;
    render(): any;
}
export {};
