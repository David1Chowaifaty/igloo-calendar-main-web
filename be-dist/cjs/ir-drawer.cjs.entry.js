'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-ad166e1c.js');
const v4 = require('./v4-9b297151.js');

let activeModals = [];
class Modal {
    constructor(element, options) {
        this.element = element;
        this.options = options;
        this.handleFocusIn = this.handleFocusIn.bind(this);
    }
    activate() {
        activeModals.push(this.element);
        document.addEventListener('focusin', this.handleFocusIn);
    }
    deactivate() {
        activeModals = activeModals.filter(modal => modal !== this.element);
        document.removeEventListener('focusin', this.handleFocusIn);
    }
    isActive() {
        return activeModals[activeModals.length - 1] === this.element;
    }
    handleFocusIn(event) {
        var _a, _b;
        const target = event.target;
        const tagName = this.element.tagName.toLowerCase();
        if (this.isActive() && target.closest(tagName) !== this.element && typeof ((_a = this.options) === null || _a === void 0 ? void 0 : _a.onFocusOut) === 'function') {
            (_b = this.options) === null || _b === void 0 ? void 0 : _b.onFocusOut(event);
        }
    }
}

const locks = new Set();
//
// Prevents body scrolling. Keeps track of which elements requested a lock so multiple levels of locking are possible
// without premature unlocking.
//
function lockBodyScrolling(lockingEl) {
    locks.add(lockingEl);
    document.body.classList.add('six-scroll-lock');
}
//
// Unlocks body scrolling. Scrolling will only be unlocked once all elements that requested a lock call this method.
//
function unlockBodyScrolling(lockingEl) {
    locks.delete(lockingEl);
    if (locks.size === 0) {
        document.body.classList.remove('six-scroll-lock');
    }
}

//
//
// Determines whether an element has a slot. If name is specified, the function will look for a corresponding named
// slot, otherwise it will look for a "default" slot (e.g. a non-empty text node or an element with no slot attribute).
//
function hasSlot(el, name) {
    // Look for a named slot
    if (name != null && name !== '') {
        return el.querySelector(`[slot="${name}"]`) !== null;
    }
    // Look for a default slot
    return Array.from(el.childNodes).some(node => {
        var _a;
        if (node.nodeType === node.TEXT_NODE && ((_a = node.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== '') {
            return true;
        }
        if (node.nodeType === node.ELEMENT_NODE) {
            const el = node;
            if (!el.hasAttribute('slot')) {
                return true;
            }
        }
        return false;
    });
}

const irDrawerCss = "*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scroll-snap-strictness:proximity;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;}.fixed{position:fixed}.absolute{position:absolute}.block{display:block}.flex{display:flex}.hidden{display:none}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.outline{outline-style:solid}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}:host{--size:25rem;display:block}.drawer{height:100%;left:0;top:0;width:100%}.drawer,.drawer--visible{overflow:hidden;pointer-events:none}.drawer--visible{clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);height:1px;position:absolute;visibility:hidden;width:1px}.drawer--contained{position:absolute;z-index:auto}.drawer--fixed{position:fixed;z-index:999999}.drawer__panel{background-color:var(--background,#fff);box-shadow:1px 0 9px 4px rgba(0,0,0,.1);color:var(--gray-800);display:flex;flex-direction:column;max-height:100%;max-width:100%;overflow:auto;pointer-events:all;position:absolute;transition:transform .3s;z-index:2}.drawer__panel:focus{outline:none}.drawer--top .drawer__panel{bottom:auto;height:var(--size);left:0;right:auto;top:0;transform:translateY(-100%);width:100%}.drawer--right .drawer__panel{bottom:auto;height:100%;left:auto;right:0;top:0;transform:translate(100%);width:var(--size)}.drawer--open .drawer__panel{transform:none}.drawer__header{display:flex}.drawer__title{flex:1 1 auto;font-size:18;line-height:0;padding:10px}.drawer__close{align-items:center;display:flex;flex:0 0 auto;font-size:14px;padding:0 10px}.drawer__body{-webkit-overflow-scrolling:touch;flex:1 1 auto;overflow:auto;padding:10px}.drawer__footer{padding:10px;text-align:right}.drawer__footer ::slotted(six-button:not(:last-of-type)){margin-right:5px}.drawer:not(.drawer--has-footer) .drawer__footer{display:none}.drawer__overlay{background-color:rgba(0,0,0,.8);bottom:0;display:block;left:0;opacity:0;pointer-events:none;position:fixed;right:0;top:0;transition:opacity .3s}.drawer--contained .drawer__overlay{position:absolute}.drawer--open .drawer__overlay{opacity:.4}.visible{visibility:visible}.static{position:static}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}";
const IrDrawerStyle0 = irDrawerCss;

const IrDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.sixShow = index.createEvent(this, "six-drawer-show", 7);
        this.sixAfterShow = index.createEvent(this, "six-drawer-after-show", 7);
        this.sixHide = index.createEvent(this, "six-drawer-hide", 7);
        this.sixAfterHide = index.createEvent(this, "six-drawer-after-hide", 7);
        this.sixInitialFocus = index.createEvent(this, "six-drawer-initial-focus", 7);
        this.sixOverlayDismiss = index.createEvent(this, "six-drawer-overlay-dismiss", 7);
        this.componentId = `drawer-${v4.v4()}`;
        this.willShow = false;
        this.willHide = false;
        this.handleCloseClick = () => {
            this.hide();
        };
        this.handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                this.hide();
            }
        };
        this.handleOverlayClick = () => {
            const sixOverlayDismiss = this.sixOverlayDismiss.emit();
            if (!sixOverlayDismiss.defaultPrevented) {
                this.hide();
            }
        };
        this.handleSlotChange = () => {
            this.hasFooter = hasSlot(this.host, 'footer');
        };
        this.handleTransitionEnd = (event) => {
            const target = event.target;
            // Ensure we only emit one event when the target element is no longer visible
            if (event.propertyName === 'transform' && target.classList.contains('drawer__panel')) {
                this.resetTransitionVariables();
            }
        };
        this.hasFooter = false;
        this.isVisible = false;
        this.open = false;
        this.label = '';
        this.placement = 'right';
        this.contained = false;
        this.noHeader = false;
    }
    handleOpenChange() {
        this.open ? this.show() : this.hide();
    }
    connectedCallback() {
        this.modal = new Modal(this.host, {
            onFocusOut: () => { var _a; return (this.contained ? null : (_a = this.panel) === null || _a === void 0 ? void 0 : _a.focus()); },
        });
    }
    componentWillLoad() {
        this.handleSlotChange();
        // Show on init if open
        if (this.open) {
            this.show();
            // if the sidebar is open by default we need to manually reset the
            // transition variables since there will be no transition event
            this.resetTransitionVariables();
        }
    }
    disconnectedCallback() {
        unlockBodyScrolling(this.host);
    }
    async show() {
        if (this.willShow || this.modal == null || this.panel == null || this.drawer == null) {
            return;
        }
        const panel = this.panel;
        const sixShow = this.sixShow.emit();
        if (sixShow.defaultPrevented) {
            this.open = false;
            return;
        }
        this.willShow = true;
        this.isVisible = true;
        this.open = true;
        // Lock body scrolling only if the drawer isn't contained
        if (!this.contained) {
            this.modal.activate();
            lockBodyScrolling(this.host);
        }
        if (this.open) {
            // Wait for the next frame before setting initial focus so the dialog is technically visible
            requestAnimationFrame(() => {
                const sixInitialFocus = this.sixInitialFocus.emit();
                if (!sixInitialFocus.defaultPrevented) {
                    panel.focus({ preventScroll: true });
                }
            });
        }
    }
    async hide() {
        if (this.willHide || this.modal == null) {
            return;
        }
        const sixHide = this.sixHide.emit();
        if (sixHide.defaultPrevented) {
            this.open = true;
            return;
        }
        this.willHide = true;
        this.open = false;
        this.modal.deactivate();
        unlockBodyScrolling(this.host);
    }
    resetTransitionVariables() {
        this.isVisible = this.open;
        this.willShow = false;
        this.willHide = false;
        this.open ? this.sixAfterShow.emit() : this.sixAfterHide.emit();
    }
    render() {
        return (index.h("div", { key: 'f7da88f99fff6eaa0744e06694f4cc5d7fdd2a2a', ref: el => (this.drawer = el), part: "base", class: {
                'drawer': true,
                'drawer--open': this.open,
                'drawer--visible': this.isVisible,
                'drawer--top': this.placement === 'top',
                'drawer--right': this.placement === 'right',
                'drawer--bottom': this.placement === 'bottom',
                'drawer--left': this.placement === 'left',
                'drawer--contained': this.contained,
                'drawer--fixed': !this.contained,
                'drawer--has-footer': this.hasFooter,
            }, onKeyDown: this.handleKeyDown, onTransitionEnd: this.handleTransitionEnd }, index.h("div", { key: '625ffdb961cb16782bdbbeda2a0bad1f0edb49d9', part: "overlay", class: "drawer__overlay", onClick: this.handleOverlayClick, tabIndex: -1 }), index.h("div", { key: '90c91109ae929b81c9c4a821ab06e9f47357ab9a', ref: el => (this.panel = el), part: "panel", class: "drawer__panel", role: "dialog", "aria-modal": "true", "aria-hidden": this.open ? 'false' : 'true', "aria-label": this.noHeader ? this.label : null, "aria-labelledby": !this.noHeader ? `${this.componentId}-title` : null, tabIndex: 0 }, !this.noHeader && (index.h("header", { part: "header", class: "drawer__header" }, index.h("span", { part: "title", class: "drawer__title", id: `${this.componentId}-title` }, index.h("slot", { name: "label" }, this.label || String.fromCharCode(65279))), index.h("six-icon-button", { exportparts: "base:close-button", class: "drawer__close", name: "close", onClick: this.handleCloseClick }))), index.h("div", { key: '98998bae29fad01ad7b891c85c0337e304ad4deb', part: "body", class: "drawer__body" }, index.h("slot", { key: 'f2cc29246d362f08a5a51cd3ef53af4992715263' })), index.h("footer", { key: '38d994274e1e11aac9f9cb8c2c0eea22808f4149', part: "footer", class: "drawer__footer" }, index.h("slot", { key: '21bb22bf4aa9465b1c8f514b2154679077bf61bf', name: "footer", onSlotchange: this.handleSlotChange })))));
    }
    get host() { return index.getElement(this); }
    static get watchers() { return {
        "open": ["handleOpenChange"]
    }; }
};
IrDrawer.style = IrDrawerStyle0;

exports.ir_drawer = IrDrawer;

//# sourceMappingURL=ir-drawer.cjs.entry.js.map