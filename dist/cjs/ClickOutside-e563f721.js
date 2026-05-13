'use strict';

const index = require('./index-35d81173.js');

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
function ClickOutside() {
    return (proto, methodName, descriptor) => {
        const originalConnected = proto.connectedCallback;
        const originalDisconnected = proto.disconnectedCallback;
        const originalDidUnload = proto.componentDidUnload;
        proto.connectedCallback = function (...args) {
            const host = getClickOutsideHost(this);
            if (host) {
                const callback = this[methodName]?.bind(this);
                if (callback) {
                    registerClickOutside(this, host, callback);
                }
            }
            return originalConnected?.apply(this, args);
        };
        proto.disconnectedCallback = function (...args) {
            const host = getClickOutsideHost(this);
            if (host) {
                unregisterClickOutside(host);
            }
            return originalDisconnected?.apply(this, args);
        };
        proto.componentDidUnload = function (...args) {
            const host = getClickOutsideHost(this);
            if (host) {
                unregisterClickOutside(host);
            }
            return originalDidUnload?.apply(this, args);
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
function registerClickOutside(component, element, callback) {
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
function unregisterClickOutside(element) {
    if (!element || !isDomAvailable())
        return;
    element.__irClickOutsideCleanup__?.();
    delete element.__irClickOutsideCleanup__;
}
function getClickOutsideHost(instance) {
    if (!isDomAvailable())
        return null;
    try {
        return index.getElement(instance);
    }
    catch {
        return null;
    }
}
function isEventInsideHost(host, event) {
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
    return !!host.shadowRoot?.contains(target);
}
function isDomAvailable() {
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}

exports.ClickOutside = ClickOutside;

//# sourceMappingURL=ClickOutside-e563f721.js.map