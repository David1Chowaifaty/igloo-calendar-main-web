import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$1 } from './ir-toast-item2.js';

const irToastsProviderCss = ":host{display:none}";
const IrToastsProviderStyle0 = irToastsProviderCss;

// Each ir-toast-item is its own top-layer entry via popover="manual".
// This is necessary because Chrome does not exempt *descendants* of a
// popover element from modal-dialog blocking — only the popover element
// itself is unblocked. Giving each item its own popover entry sidesteps
// that limitation entirely.
const EDGE_PADDING = 16; // px from screen edges
const ITEM_GAP = 8; // px between toasts
const IrToastsProvider = /*@__PURE__*/ proxyCustomElement(class IrToastsProvider extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
    }
    get el() { return this; }
    items = [];
    positionCache = new Map();
    connectedCallback() {
        document.addEventListener('keydown', this.handleKeyDown);
    }
    disconnectedCallback() {
        document.removeEventListener('keydown', this.handleKeyDown);
        for (const { el } of this.items) {
            el.hidePopover?.();
            el.remove();
        }
        this.items = [];
    }
    /** Creates a toast and adds it to the stack. Returns the toast id. */
    async create(message, options) {
        const opts = { variant: 'neutral', duration: 5000, allowHtml: false, ...options };
        const id = `toast-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        const item = document.createElement('ir-toast-item');
        item.setAttribute('variant', opts.variant);
        item.setAttribute('duration', String(opts.duration));
        // Each item is its own popover so it enters the top layer directly.
        item.setAttribute('popover', 'manual');
        // Override UA popover defaults (inset:0, margin:auto, etc.).
        // Hidden until repositionItems() places it correctly.
        Object.assign(item.style, {
            position: 'fixed',
            insetInlineEnd: `${EDGE_PADDING}px`,
            insetInlineStart: 'auto',
            top: '0',
            bottom: 'auto',
            margin: '0',
            padding: '0',
            border: 'none',
            background: 'transparent',
            minWidth: '20rem',
            maxWidth: '28rem',
            visibility: 'hidden',
        });
        if (opts.icon) {
            const icon = document.createElement('wa-icon');
            icon.setAttribute('slot', 'icon');
            icon.setAttribute('name', typeof opts.icon === 'string' ? opts.icon : opts.icon.name);
            if (typeof opts.icon === 'object') {
                if (opts.icon.library)
                    icon.setAttribute('library', opts.icon.library);
                if (opts.icon.variant)
                    icon.setAttribute('variant', opts.icon.variant);
            }
            item.appendChild(icon);
        }
        if (opts.allowHtml) {
            const span = document.createElement('span');
            span.innerHTML = message;
            item.appendChild(span);
        }
        else {
            item.appendChild(document.createTextNode(message));
        }
        item.addEventListener('irDismiss', () => this.removeItem(item));
        document.body.appendChild(item);
        item.showPopover();
        this.items.unshift({ id, el: item });
        // Wait one frame so Stencil renders the shadow DOM and we get real heights.
        requestAnimationFrame(() => {
            this.repositionItems();
            item.style.visibility = '';
        });
        return id;
    }
    handleKeyDown = async (e) => {
        await new Promise(resolve => setTimeout(resolve));
        if (e.key === 'Escape' && !e.defaultPrevented && this.items.length > 0) {
            e.preventDefault();
            this.removeItem(this.items[0].el);
        }
    };
    removeItem(item) {
        if (!item.parentElement)
            return;
        this.capturePositions();
        item.hidePopover?.();
        item.remove();
        this.items = this.items.filter(i => i.el !== item);
        requestAnimationFrame(() => {
            this.repositionItems();
            this.animatePositions();
        });
    }
    repositionItems() {
        let top = EDGE_PADDING;
        for (const { el } of this.items) {
            el.style.top = `${top}px`;
            top += el.getBoundingClientRect().height + ITEM_GAP;
        }
    }
    capturePositions() {
        this.positionCache.clear();
        for (const { el } of this.items) {
            this.positionCache.set(el, el.getBoundingClientRect());
        }
    }
    animatePositions() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            this.positionCache.clear();
            return;
        }
        for (const { el } of this.items) {
            const oldRect = this.positionCache.get(el);
            if (!oldRect)
                continue;
            const newRect = el.getBoundingClientRect();
            const deltaY = oldRect.top - newRect.top;
            if (Math.abs(deltaY) > 1) {
                el.animate([{ transform: `translateY(${deltaY}px)` }, { transform: 'translateY(0)' }], {
                    duration: 200,
                    easing: 'cubic-bezier(0.2, 0, 0, 1)',
                });
            }
        }
        this.positionCache.clear();
    }
    render() {
        return h(Host, { key: '368847ca99b10df0264cdd32e0d7614a31786d4c' });
    }
    static get style() { return IrToastsProviderStyle0; }
}, [1, "ir-toasts-provider", {
        "create": [64]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-toasts-provider", "ir-toast-item"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-toasts-provider":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrToastsProvider);
            }
            break;
        case "ir-toast-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$1();
            }
            break;
    } });
}

export { IrToastsProvider as I, defineCustomElement as d };

//# sourceMappingURL=ir-toasts-provider2.js.map