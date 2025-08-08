class ReloadInterceptor {
    /**
     * @param onIntercept
     *   Called whenever a reload is intercepted (F5/Ctrl+R or beforeunload).
     * @param autoActivate
     *   If true, will immediately attach listeners.
     */
    constructor(options) {
        var _a;
        this.isActive = false;
        /** Native “Are you sure you want to leave?” dialog */
        this.handleBeforeUnload = (e) => {
            this.onIntercept();
            e.preventDefault();
            e.returnValue = '';
        };
        this.onIntercept = (_a = options.onIntercept) !== null && _a !== void 0 ? _a : (() => { });
        if (options.autoActivate) {
            this.activate();
        }
    }
    /** Begin intercepting reloads & navigations */
    activate() {
        if (this.isActive)
            return;
        window.addEventListener('beforeunload', this.handleBeforeUnload, { capture: true });
        this.isActive = true;
    }
    /** Stop intercepting reloads & navigations */
    deactivate() {
        if (!this.isActive)
            return;
        window.removeEventListener('beforeunload', this.handleBeforeUnload, { capture: true });
        this.isActive = false;
    }
}

export { ReloadInterceptor as R };

//# sourceMappingURL=ReloadInterceptor.js.map