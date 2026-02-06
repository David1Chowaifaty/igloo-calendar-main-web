import { getElement } from "@stencil/core";
/**
 * Call this function as soon as the click outside of annotated method's host is done.
 * @example
```
@ClickOutside()
callback() {
  // this will run when click outside of element (host component) is done.
}
```
 */
export function ClickOutside() {
    return (proto, methodName, descriptor) => {
        const originalConnected = proto.connectedCallback;
        const originalDisconnected = proto.disconnectedCallback;
        const originalDidUnload = proto.componentDidUnload;
        proto.connectedCallback = function (...args) {
            var _a;
            const host = getClickOutsideHost(this);
            if (host) {
                const callback = (_a = this[methodName]) === null || _a === void 0 ? void 0 : _a.bind(this);
                if (callback) {
                    registerClickOutside(this, host, callback);
                }
            }
            return originalConnected === null || originalConnected === void 0 ? void 0 : originalConnected.apply(this, args);
        };
        proto.disconnectedCallback = function (...args) {
            const host = getClickOutsideHost(this);
            if (host) {
                unregisterClickOutside(host);
            }
            return originalDisconnected === null || originalDisconnected === void 0 ? void 0 : originalDisconnected.apply(this, args);
        };
        proto.componentDidUnload = function (...args) {
            const host = getClickOutsideHost(this);
            if (host) {
                unregisterClickOutside(host);
            }
            return originalDidUnload === null || originalDidUnload === void 0 ? void 0 : originalDidUnload.apply(this, args);
        };
        return descriptor;
    };
}
/**
 * Register callback function for HTMLElement to be executed when user clicks outside of element.
 * @example
```
<span
    ref={spanEl => registerClickOutside(this, spanEl, () => this.test())}>
      Hello, World!
</span>;
```
 */
export function registerClickOutside(component, element, callback) {
    if (!element || !isDomAvailable())
        return;
    if (element.__irClickOutsideCleanup__)
        return;
    const handler = (event) => {
        if (isEventInsideHost(element, event)) {
            return;
        }
        callback.call(component, event);
    };
    window.addEventListener('click', handler, true);
    element.__irClickOutsideCleanup__ = () => {
        window.removeEventListener('click', handler, true);
    };
}
export function unregisterClickOutside(element) {
    var _a;
    if (!element || !isDomAvailable())
        return;
    (_a = element.__irClickOutsideCleanup__) === null || _a === void 0 ? void 0 : _a.call(element);
    delete element.__irClickOutsideCleanup__;
}
function getClickOutsideHost(instance) {
    if (!isDomAvailable())
        return null;
    try {
        return getElement(instance);
    }
    catch (_a) {
        return null;
    }
}
function isEventInsideHost(host, event) {
    var _a;
    if (!event)
        return false;
    const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
    if (Array.isArray(path) && path.includes(host)) {
        return true;
    }
    const target = event.target;
    if (!target)
        return false;
    if (host === target)
        return true;
    if (typeof host.contains === 'function' && host.contains(target))
        return true;
    return !!((_a = host.shadowRoot) === null || _a === void 0 ? void 0 : _a.contains(target));
}
function isDomAvailable() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}
//# sourceMappingURL=ClickOutside.js.map
