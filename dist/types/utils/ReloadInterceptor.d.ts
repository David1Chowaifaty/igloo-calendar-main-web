export declare class ReloadInterceptor {
    private isActive;
    private readonly onIntercept;
    /**
     * @param onIntercept
     *   Called whenever a reload is intercepted (F5/Ctrl+R or beforeunload).
     * @param autoActivate
     *   If true, will immediately attach listeners.
     */
    constructor(options: {
        onIntercept?: () => void;
        autoActivate: boolean;
    });
    /** Begin intercepting reloads & navigations */
    activate(): void;
    /** Stop intercepting reloads & navigations */
    deactivate(): void;
    /** Native “Are you sure you want to leave?” dialog */
    private handleBeforeUnload;
}
