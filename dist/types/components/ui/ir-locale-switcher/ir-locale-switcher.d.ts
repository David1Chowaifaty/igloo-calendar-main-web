type DirectionMode = 'auto' | 'ltr' | 'rtl';
/**
 * A floating dev/QA panel for switching language, calendar system,
 * numbering system and text direction at runtime.
 *
 * All user-selected settings are persisted in localStorage and restored
 * automatically the next time the page is opened.
 */
export declare class IrLocaleSwitcher {
    el: HTMLElement;
    /**
     * Corner to pin the panel to.
     */
    placement: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    /**
     * Start collapsed to a single button when no saved state exists.
     */
    collapsed: boolean;
    /**
     * Sample date for the preview, YYYY-MM-DD.
     * Defaults to today.
     */
    sampleDate: string;
    open: boolean;
    direction: DirectionMode;
    /**
     * Read persisted switcher state.
     */
    private loadSettings;
    /**
     * Save the current switcher state.
     */
    private saveSettings;
    /**
     * Make sure a stored language is one that this switcher supports.
     */
    private isValidLanguage;
    /**
     * Validate persisted calendar values before applying them.
     */
    private isValidCalendar;
    /**
     * Validate persisted numbering-system values.
     */
    private isValidNumberingSystem;
    /**
     * Validate persisted direction values.
     */
    private isValidDirection;
    componentWillLoad(): void;
    /**
     * Publishes the language the same way RoomService.fetchLanguage does,
     * then pushes it onto every mounted component exposing a `language`
     * prop so their @Watch('language') handlers can update localized text.
     */
    private applyLanguage;
    /**
     * Apply calendar preference and persist it.
     */
    private applyCalendar;
    /**
     * Apply numbering-system preference and persist it.
     */
    private applyNumberingSystem;
    /**
     * Apply text direction.
     *
     * `auto` resolves according to the current language.
     */
    private applyDirection;
    /**
     * Open/collapse panel and persist that UI state too.
     */
    private setOpen;
    /**
     * Remove every locale-switcher preference and restore defaults.
     */
    private resetSettings;
    private get sample();
    private renderPreview;
    render(): any;
}
export {};
