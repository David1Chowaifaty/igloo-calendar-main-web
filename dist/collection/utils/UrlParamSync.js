export class UrlParamSync {
    constructor(component, configs) {
        this.restoreFns = {};
        // --- State <-> URL ---
        this.applyUrlToState = () => {
            this.configs.forEach(({ key, param, defaultValue }) => {
                const raw = this.getParam(param);
                let val = defaultValue;
                if (raw !== null) {
                    try {
                        val = JSON.parse(decodeURIComponent(raw));
                    }
                    catch (_a) {
                        val = raw; // fallback: plain string
                    }
                }
                this.component[key] = val;
            });
        };
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
            this.setParam(param, value, replace !== null && replace !== void 0 ? replace : true);
        });
    }
    // --- Lifecycle Patching ---
    patchRender() {
        const self = this;
        this.originalRender = this.component.render;
        this.component.render = function () {
            var _a;
            self.updateAll();
            return (_a = self.originalRender) === null || _a === void 0 ? void 0 : _a.apply(this, arguments);
        };
    }
    patchDisconnected() {
        const self = this;
        this.originalDisconnected = this.component.disconnectedCallback;
        this.component.disconnectedCallback = function () {
            var _a;
            window.removeEventListener('popstate', self.applyUrlToState);
            self.restoreHistory();
            (_a = self.originalDisconnected) === null || _a === void 0 ? void 0 : _a.apply(this, arguments);
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
