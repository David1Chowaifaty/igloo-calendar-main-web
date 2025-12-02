export class UrlParamSync {
    component;
    configs;
    originalDisconnected;
    originalRender;
    restoreFns = {};
    constructor(component, configs) {
        this.component = component;
        this.configs = configs;
        // Initialize state from URL
        this.applyUrlToState();
        // Listen for browser navigation
        window.addEventListener('popstate', this.applyUrlToState);
        // Patch pushState/replaceState to detect external URL changes
        this.patchHistory();
        // Patch render to auto-sync state → URL
        this.patchRender();
        // Ensure cleanup
        this.patchDisconnected();
    }
    // --- State <-> URL ---
    applyUrlToState = () => {
        this.configs.forEach(({ key, param, defaultValue }) => {
            const raw = this.getParam(param);
            let val = defaultValue;
            if (raw !== null) {
                try {
                    val = JSON.parse(decodeURIComponent(raw));
                }
                catch {
                    val = raw; // fallback: plain string
                }
            }
            this.component[key] = val;
        });
    };
    getParam(param) {
        const params = new URLSearchParams(window.location.search);
        return params.get(param);
    }
    setParam(param, value, replace = true) {
        const url = new URL(window.location.href);
        if (value === undefined || value === null || value === '') {
            url.searchParams.delete(param);
        }
        else {
            const encoded = encodeURIComponent(JSON.stringify(value));
            url.searchParams.set(param, encoded);
        }
        if (replace) {
            window.history.replaceState({}, '', url.toString());
        }
        else {
            window.history.pushState({}, '', url.toString());
        }
    }
    updateAll() {
        this.configs.forEach(({ key, param, replace }) => {
            const value = this.component[key];
            this.setParam(param, value, replace ?? true);
        });
    }
    // --- Lifecycle Patching ---
    patchRender() {
        const self = this;
        this.originalRender = this.component.render;
        this.component.render = function () {
            self.updateAll();
            return self.originalRender?.apply(this, arguments);
        };
    }
    patchDisconnected() {
        const self = this;
        this.originalDisconnected = this.component.disconnectedCallback;
        this.component.disconnectedCallback = function () {
            window.removeEventListener('popstate', self.applyUrlToState);
            self.restoreHistory();
            self.originalDisconnected?.apply(this, arguments);
        };
    }
    // --- History Patching ---
    patchHistory() {
        if (!this.restoreFns.push) {
            this.restoreFns.push = history.pushState;
            this.restoreFns.replace = history.replaceState;
            const apply = this.applyUrlToState;
            history.pushState = function (...args) {
                const ret = this.restoreFns.push.apply(history, args);
                apply();
                return ret;
            }.bind(this);
            history.replaceState = function (...args) {
                const ret = this.restoreFns.replace.apply(history, args);
                apply();
                return ret;
            }.bind(this);
        }
    }
    restoreHistory() {
        if (this.restoreFns.push) {
            history.pushState = this.restoreFns.push;
            history.replaceState = this.restoreFns.replace;
            this.restoreFns = {};
        }
    }
}
//# sourceMappingURL=UrlParamSync.js.map
