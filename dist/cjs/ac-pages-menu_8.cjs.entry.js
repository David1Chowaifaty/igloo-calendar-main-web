'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const v4 = require('./v4-9b297151.js');
const icons = require('./icons-751623e9.js');
const index$1 = require('./index-e9a28e3e.js');
const utils = require('./utils-bf9b1b25.js');
require('./moment-1780b03a.js');
require('./index-63734c32.js');
require('./calendar-data-960b69ba.js');
require('./index-7564ffa1.js');
require('./axios-6e678d52.js');
require('./locales.store-a1ac5174.js');

const acPagesMenuCss = ":host{display:flex}.navigation-item{margin:0}.navigation-items{list-style:none}.navigation-items .dropdown-item{margin:0;padding:10px 20px !important;font-weight:400;font-size:1rem;line-height:1 !important}.navigation-item{margin:0;color:white !important}.navigation-link{display:block;padding:0.75rem 1rem;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.navigation-link:hover{background-color:rgba(255, 255, 255, 0.05);color:#1f2937;text-decoration:none}.mobile-nav-items{list-style:none;margin:0;padding:1rem 0}.new-badge{font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;min-width:2rem;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:0.5rem !important;border-radius:4px}.mobile-nav-item{margin:0;list-style:none !important}.navigation-item .dropdown-toggle::after{content:none !important}.menu-icon-container{display:flex !important;align-items:center !important;gap:0.25rem}.mobile-nav-link{display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1rem;color:#374151 !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (min-width: 768px){.navigation-items{display:flex;list-style:none;align-items:center;margin:0;padding:0}.navigation-link{display:flex;align-items:center;padding:0.8rem 0.6rem;color:white !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}}.ac-menu-dropdown .dropdown-menu{min-width:14rem}@media (min-width: 992px){.ac-menu-dropdown .dropdown-menu{left:0 !important;right:auto !important}}@media (max-width: 991.98px){.ac-menu-dropdown .dropdown-menu{right:0 !important;left:auto !important}}";
const AcPagesMenuStyle0 = acPagesMenuCss;

const AcPagesMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.linkClicked = index.createEvent(this, "link-clicked", 7);
        this.pages = [];
        this.location = 'nav';
    }
    Icon({ name }) {
        return [index.h("i", { class: name })];
    }
    render() {
        const isSheet = this.location === 'sheet';
        if (isSheet) {
            return (index.h("ul", { class: "mobile-nav-items accordion", id: "mainMenuNavigation" }, this.pages.map(page => {
                var _a, _b;
                const id = (_a = page.id) !== null && _a !== void 0 ? _a : v4.v4();
                if (page.subMenus) {
                    const _collapseId = `collapse-${page.label.toLowerCase()}`;
                    return (index.h("li", { key: id, id: id, class: `mobile-nav-item ${page.className}` }, index.h("button", { class: "btn mobile-nav-link menu-icon-container justify-content-between", style: { width: '100%' }, "data-toggle": "collapse", "data-parent": "#mainMenuNavigation", "aria-expanded": "false", "data-target": `#${_collapseId}`, "aria-controls": _collapseId }, index.h("div", { class: 'menu-icon-container' }, page.icon && this.Icon({ name: page.icon }), index.h("span", null, page.label), page.isNew && (index.h("span", { class: "new-badge", id: page.badgeId }, "new"))), index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, index.h("ir-icons", { name: "angle-down" }))), index.h("ul", { class: "collapse ", id: _collapseId }, page.subMenus.map(submenu => {
                        var _a, _b;
                        const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4.v4();
                        return (index.h("li", { key: menuId, id: menuId, class: `mobile-nav-item menu-icon-container ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}`, style: { width: '100%' } }, index.h("a", { onClick: e => {
                                e.preventDefault();
                                this.linkClicked.emit(e);
                            }, class: "mobile-nav-link w-100", href: submenu.href }, index.h("div", { class: "menu-icon-container" }, submenu.icon && this.Icon({ name: submenu.icon }), index.h("span", null, submenu.label), submenu.isNew && (index.h("span", { id: submenu.badgeId, class: "new-badge" }, "new"))))));
                    }))));
                }
                return (index.h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  mobile-nav-item` }, index.h("a", { href: page.href, onClick: e => {
                        e.preventDefault();
                        this.linkClicked.emit(e);
                    }, class: "mobile-nav-link" }, index.h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), index.h("span", null, page.label), page.isNew && (index.h("span", { id: page.badgeId, class: "new-badge" }, "new"))))));
            })));
        }
        return (index.h("ul", { class: "navigation-items" }, this.pages.map(page => {
            var _a, _b;
            const id = (_a = page.id) !== null && _a !== void 0 ? _a : v4.v4();
            if (page.subMenus) {
                return (index.h("li", { key: id, id: id, onMouseEnter: e => {
                        if (window.innerWidth < 765) {
                            return;
                        }
                        e.target.classList.add('show');
                    }, onMouseLeave: e => {
                        if (window.innerWidth < 765) {
                            return;
                        }
                        e.target.classList.remove('show');
                    }, "data-menu": "dropdown", class: `dropdown  navigation-item ac-menu-dropdown ${isSheet ? 'mobile-nav-item' : ''} ${page.className}` }, index.h("button", { class: "btn dropdown-toggle menu-icon-container navigation-link ", "data-toggle": "dropdown" }, index.h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), index.h("span", null, page.label)), page.isNew && (index.h("span", { id: page.badgeId, class: "new-badge" }, "new"))), index.h("ul", { class: "dropdown-menu dropdown-menu-right dropdown-menu-lg-left" }, page.subMenus.map(submenu => {
                    var _a, _b;
                    const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4.v4();
                    return (index.h("li", { key: menuId, id: menuId, class: `navigation-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, index.h("a", { onClick: e => {
                            this.linkClicked.emit(e);
                        }, class: "dropdown-item menu-icon-container", href: submenu.href }, index.h("div", { class: "menu-icon-container mr-auto" }, submenu.icon && this.Icon({ name: submenu.icon }), index.h("span", null, submenu.label)), submenu.isNew && (index.h("span", { id: submenu.badgeId, class: "new-badge" }, "new")))));
                }))));
            }
            return (index.h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  navigation-item` }, index.h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: `navigation-link` }, index.h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), index.h("span", null, page.label), page.isNew && (index.h("span", { id: page.badgeId, class: "new-badge" }, "new"))))));
        })));
    }
};
AcPagesMenu.style = AcPagesMenuStyle0;

const irButtonCss = ".sc-ir-button-h{--icon-button-color:#6b6f82;--icon-button-hover-color:#104064}.button-icon.sc-ir-button{padding:0;margin-top:0}.button-icon[data-state='loading'].sc-ir-button{display:none}.button-text.sc-ir-button{padding:0 5px}.bounce-3.sc-ir-button{animation:bounce 1s 1}.btn-link.sc-ir-button{color:var(--blue, #1e9ff2)}.ir-button-class.sc-ir-button{display:inline-flex !important;justify-content:center;align-items:center;box-sizing:border-box}.btn-outline.sc-ir-button{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-button:hover,.btn-outline.sc-ir-button:active{background:#104064;color:white}.icon-button.sc-ir-button{all:unset;box-sizing:border-box;border-radius:0.25rem;display:inline-flex;align-items:center;justify-content:center;color:var(--icon-button-color);padding:0.2rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.icon-button.sc-ir-button:hover{color:var(--icon-button-hover-color)}.icon-button.sc-ir-button:hover.hovered_bg{background:var('--ir-icon-bg-hover', #f6f6f6)}.icon-button.sc-ir-button:disabled{pointer-events:none}.icon-loader.sc-ir-button{margin:0;padding:0;width:var(--icon-size, 1.25rem);height:var(--icon-size, 1.25rem);border-radius:50%;background:radial-gradient(farthest-side, var(--icon-button-color) 94%, #0000) top/2px 2px no-repeat, conic-gradient(#0000 30%, var(--icon-button-color));-webkit-mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);animation:l13 1s infinite linear}.btn_loader.sc-ir-button{width:15px;height:10px;--c:no-repeat linear-gradient(#ffffff 0 0);background:var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;background-size:20% 100%;animation:l1 1s infinite linear}@keyframes l13{100%{transform:rotate(1turn)}}@keyframes l1{0%{background-size:20% 100%, 20% 100%, 20% 100%}33%{background-size:20% 10%, 20% 100%, 20% 100%}50%{background-size:20% 100%, 20% 10%, 20% 100%}66%{background-size:20% 100%, 20% 100%, 20% 10%}100%{background-size:20% 100%, 20% 100%, 20% 100%}}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}@keyframes ping{75%,100%{transform:scale(1.2)}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrButtonStyle0 = irButtonCss;

const IrButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clickHandler = index.createEvent(this, "clickHandler", 7);
        /**
         * The color theme of the button.
         */
        this.btn_color = 'primary';
        /**
         * The size of the button.
         */
        this.size = 'md';
        /**
         * The size of the text inside the button.
         */
        this.textSize = 'md';
        /**
         * Whether the button should expand to the full width of its container.
         */
        this.btn_block = true;
        /**
         * Disables the button when set to true.
         */
        this.btn_disabled = false;
        /**
         * The button type attribute (`button`, `submit`, or `reset`).
         */
        this.btn_type = 'button';
        /**
         * Displays a loading indicator when true and disables the button.
         */
        this.isLoading = false;
        /**
         * A unique identifier for the button instance.
         */
        this.btn_id = v4.v4();
        /**
         * Visual variant of the button: either standard (`default`) or icon-only (`icon`).
         */
        this.variant = 'default';
        /**
         * If true, applies a visible background when hovered.
         */
        this.visibleBackgroundOnHover = false;
        /**
         * Position of the icon relative to the button text.
         */
        this.iconPosition = 'left';
        /**
         * If true, renders the text property as raw HTML inside the button.
         */
        this.renderContentAsHtml = false;
    }
    handleButtonAnimation(e) {
        if (!this.buttonEl || e.detail !== this.btn_id) {
            return;
        }
        e.stopImmediatePropagation();
        e.stopPropagation();
        this.buttonEl.classList.remove('bounce-3');
        this.buttonEl.classList.add('bounce-3');
    }
    /**
     * Triggers a bounce animation on the button.
     */
    async bounce() {
        this.buttonEl.classList.remove('bounce-3');
        this.buttonEl.classList.add('bounce-3');
    }
    render() {
        const disabled = this.btn_disabled || this.isLoading;
        if (this.variant === 'icon') {
            return (index.h("button", { id: this.btn_id, class: `icon-button ${this.btn_styles} ${this.visibleBackgroundOnHover ? 'hovered_bg' : ''}`, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), type: this.btn_type, disabled: disabled }, this.isLoading ? index.h("span", { class: "icon-loader" }) : index.h("ir-icons", { class: 'm-0 p-0', name: this.icon_name })));
        }
        let blockClass = this.btn_block ? 'btn-block' : '';
        return (index.h("button", { id: this.btn_id, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), class: `btn btn-${this.btn_color} ${this.btn_styles} ir-button-class  btn-${this.size} text-${this.textSize} ${blockClass}`, type: this.btn_type, style: this.btnStyle, disabled: disabled }, this.icon_name && this.iconPosition === 'left' && index.h("ir-icons", { name: this.icon_name, style: this.icon_style }), this.text &&
            (this.renderContentAsHtml ? (index.h("span", { class: "button-text m-0", innerHTML: this.text, style: this.labelStyle })) : (index.h("span", { style: this.labelStyle, class: "button-text m-0" }, this.text))), this.isLoading ? index.h("div", { class: "btn_loader m-0 p-0" }) : this.iconPosition === 'right' && index.h("ir-icons", { style: this.icon_style, name: this.icon_name })));
    }
};
IrButton.style = IrButtonStyle0;

const onlineResources = [
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/jquery.min.js",
    // },
    {
        isCSS: true,
        link: 'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i%7CQuicksand:300,400,500,700',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/bootstrap-extended.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/app-assets/css/colors.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/menu/menu-types/horizontal-menu.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/core/colors/palette-gradient.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/components.css',
    },
    { isCSS: true, link: 'https://x.igloorooms.com/assets/css/style.css' },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/icheck.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/vendors/css/forms/icheck/custom.css',
    },
    {
        isCSS: true,
        link: 'https://x.igloorooms.com/app-assets/css/pages/login-register.css',
    },
    // {
    //   isCSS: true,
    //   link: 'https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.css',
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/moment.min.js",
    // },
    // {
    //   isJS: true,
    //   link: "https://x.igloorooms.com/manage/micro/app-assets/required/assets/scripts/daterangepicker/daterangepicker.js",
    // },
];

const IrCommon = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.extraResources = '';
        this.resources = onlineResources;
    }
    componentWillLoad() {
        this.parseRefs();
    }
    componentDidLoad() {
        this.initializeStyles();
    }
    hrefsChanged() {
        this.parseRefs();
        this.initializeStyles();
    }
    parseRefs() {
        if (this.extraResources !== '')
            this.resources.push(JSON.parse(this.extraResources));
    }
    appendTag(tagName, attributes) {
        const tag = document.createElement(tagName);
        const selectorParts = [];
        Object.keys(attributes).forEach(attr => {
            tag.setAttribute(attr, attributes[attr]);
            selectorParts.push(`[${attr}="${attributes[attr]}"]`);
        });
        const selector = `${tagName}${selectorParts.join('')}`;
        const existingTag = document.querySelector(selector);
        if (!existingTag) {
            document.head.appendChild(tag);
        }
    }
    initializeStyles() {
        this.resources.forEach(res => {
            if (res.isCSS) {
                this.appendTag('link', {
                    href: res.link,
                    rel: 'stylesheet',
                    type: 'text/css',
                });
            }
            if (res.isJS) {
                this.appendTag('script', {
                    src: res.link,
                });
            }
        });
    }
    render() {
        return (index.h(index.Host, { key: '6d386635411f3f046e95ab76bae4f060f4f5aab6' }, index.h("slot", { key: '838ffc1881d63ccbf1d700f7c4d57a9eda8a33df' })));
    }
    static get watchers() { return {
        "extraResources": ["hrefsChanged"]
    }; }
};

const irIconsCss = ".sc-ir-icons-h{display:block;box-sizing:border-box;margin:0;padding:0}.icon.sc-ir-icons{height:var(--icon-size, 1.25rem);width:var(--icon-size, 1.25rem);margin:0;padding:0}";
const IrIconsStyle0 = irIconsCss;

const IrIcons = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        const svgPath = icons.icons[this.name] || null;
        if (!svgPath) {
            return null;
        }
        return (index.h("svg", { xmlns: "http://www.w3.org/2000/svg", color: this.color, viewBox: svgPath.viewBox, class: `icon ${this.svgClassName}` }, index.h("path", { fill: "currentColor", d: svgPath.d })));
    }
};
IrIcons.style = IrIconsStyle0;

const irInputTextCss = ".sc-ir-input-text-h{--ir-bg:#fff;--ir-primary:#1e9ff2;--ir-danger:#ff4961;--ir-border:#cacfe7;--ir-disabled-fg:#9aa1ac;--ir-readonly-bg:#f8f9fa;--ir-input-color:#3b4781;--ir-placeholder-color:#bbbfc6;--ir-floating-input-border:var(--ir-border);--ir-floating-input-border-radius:0.21rem;--ir-floating-input-height:2rem;--ir-focus-ring:none;--ir-focus-border-color:var(--ir-primary);--ir-floating-input-font-size:0.975rem;--ir-floating-input-line-height:1.45;--ir-floating-input-padding-y:0.75rem;--ir-floating-input-padding-x:1rem;--ir-floating-input-padding-x-with-affix:2rem;--ir-floating-label-fg:#6c757d;--ir-floating-label-fg-focus:#495057;--ir-floating-label-bg:#fff;--ir-floating-label-scale:0.88;--ir-floating-label-float-translateY:-70%;--ir-floating-label-resting-offset-inline:0.9rem;--ir-floating-label-resting-offset-inline-with-prefix:1.8rem;--ir-floating-input-affix-size:1rem;--ir-floating-input-affix-color:#6c757d;margin:0;padding:0;display:inline}.sc-ir-input-text-h{--blue:var(--ir-primary);--red:var(--ir-danger)}.border-theme.sc-ir-input-text{border:1px solid var(--ir-border)}.icon-container.sc-ir-input-text{color:#3b4781;border:1px solid var(--ir-border);font-size:var(--ir-floating-input-font-size);height:var(--ir-floating-input-height);background:var(--ir-bg);padding-right:0 !important;border-right:0;border-top-right-radius:0;border-bottom-right-radius:0;transition:border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}input.sc-ir-input-text:focus{border-color:var(--ir-primary) !important}.error-message.sc-ir-input-text{font-size:0.875rem;padding:0;margin:0.5rem 0 0;color:var(--ir-danger)}.ir-input[data-state='empty'].sc-ir-input-text{color:var(--ir-placeholder-color)}.input-container.sc-ir-input-text{display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;flex:1}.input-container.sc-ir-input-text input.sc-ir-input-text{padding-left:5px !important;padding-right:5px !important;border-left:0;border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.icon-container[data-state='focus'].sc-ir-input-text{border-color:var(--ir-primary)}.icon-container[data-disabled].sc-ir-input-text{background-color:#eceff1;border-color:rgba(118, 118, 118, 0.3)}.danger-border.sc-ir-input-text{border-color:var(--ir-danger)}.ir-floating-group.sc-ir-input-text{position:relative;display:block;border:1px solid var(--ir-floating-input-border);border-radius:var(--ir-floating-input-border-radius);background:var(--ir-bg);transition:border-color 120ms ease, box-shadow 120ms ease;padding:0}.ir-floating-group.sc-ir-input-text:focus-within{border-color:var(--ir-focus-border-color);box-shadow:var(--ir-focus-ring)}.ir-floating-group.has-error.sc-ir-input-text,.has-error.sc-ir-input-text .ir-floating-group.sc-ir-input-text{border-color:var(--ir-danger)}.ir-floating-group.is-disabled.sc-ir-input-text{background-color:#f1f3f5}.ir-floating-group.is-readonly.sc-ir-input-text{background-color:var(--ir-readonly-bg)}.ir-floating-input.sc-ir-input-text{width:100%;display:block;border:0;outline:0;background:transparent;color:var(--ir-input-color);font-size:var(--ir-floating-input-font-size);line-height:var(--ir-floating-input-line-height);border-radius:var(--ir-floating-input-border-radius);box-shadow:none;padding:var(--ir-floating-input-padding-y) var(--ir-floating-input-padding-x);height:var(--ir-floating-input-height)}.ir-floating-input.danger-border.sc-ir-input-text{box-shadow:none}.ir-floating-label.sc-ir-input-text{position:absolute;top:50%;transform:translateY(-50%);pointer-events:none;padding:0 0.4rem;color:var(--ir-floating-label-fg);background:transparent;transition:transform 120ms ease, color 120ms ease, top 120ms ease, background-color 120ms ease, opacity 120ms ease;opacity:0.95;line-height:1}.ir-floating-label.sc-ir-input-text:dir(rtl){right:var(--ir-floating-label-resting-offset-inline)}.ir-floating-label.sc-ir-input-text:dir(ltr){left:var(--ir-floating-label-resting-offset-inline)}.ir-floating-group.sc-ir-input-text:focus-within .ir-floating-label.sc-ir-input-text,.ir-floating-input.sc-ir-input-text:not(:placeholder-shown)+.ir-floating-label.sc-ir-input-text,.ir-floating-group[data-has-value='true'].sc-ir-input-text .ir-floating-label.sc-ir-input-text{top:0;transform:translateY(var(--ir-floating-label-float-translateY)) scale(var(--ir-floating-label-scale));background:var(--ir-floating-label-bg);color:var(--ir-floating-label-fg-focus);font-size:12px;padding:0}.ir-floating-group.has-error.sc-ir-input-text .ir-floating-label.sc-ir-input-text,.has-error.sc-ir-input-text .ir-floating-group.sc-ir-input-text .ir-floating-label.sc-ir-input-text{color:var(--ir-danger)}.ir-floating-group.is-disabled.sc-ir-input-text .ir-floating-label.sc-ir-input-text{color:var(--ir-disabled-fg)}@supports (-webkit-touch-callout: none){.ir-floating-input.sc-ir-input-text{border-radius:var(--ir-floating-input-border-radius)}}.prefix-container.sc-ir-input-text,.suffix-container.sc-ir-input-text{position:absolute;top:0;bottom:0;display:inline-flex;align-items:center;color:var(--ir-floating-input-affix-color);pointer-events:none}.prefix-container.sc-ir-input-text:dir(ltr){left:0.5rem}.suffix-container.sc-ir-input-text:dir(ltr){right:0.5rem}.prefix-container.sc-ir-input-text:dir(rtl){right:0.5rem}.suffix-container.sc-ir-input-text:dir(rtl){left:0.5rem}.sc-ir-input-text-s>[slot='prefix'],.sc-ir-input-text-s>[slot='suffix']{display:inline-flex;width:var(--ir-floating-input-affix-size);height:var(--ir-floating-input-affix-size)}.ir-floating-group[data-have-prefix='true'].sc-ir-input-text .ir-floating-input.sc-ir-input-text{padding:var(--ir-floating-input-padding-y) var(--ir-floating-input-padding-x-with-affix)}.ir-floating-group[data-have-prefix='true'].sc-ir-input-text .ir-floating-label.sc-ir-input-text:dir(ltr){left:var(--ir-floating-label-resting-offset-inline-with-prefix)}.ir-floating-group[data-have-prefix='true'].sc-ir-input-text .ir-floating-label.sc-ir-input-text:dir(rtl){right:var(--ir-floating-label-resting-offset-inline-with-prefix)}.no-slot.sc-ir-input-text{display:none}";
const IrInputTextStyle0 = irInputTextCss;

const IrInputText = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.textChange = index.createEvent(this, "textChange", 7);
        this.inputBlur = index.createEvent(this, "inputBlur", 7);
        this.inputFocus = index.createEvent(this, "inputFocus", 7);
        /** Additional inline styles for the input */
        this.inputStyles = '';
        /** Whether the input field is read-only */
        this.readonly = false;
        /** Input type (e.g., text, password, email) */
        this.type = 'text';
        /** Whether the form has been submitted */
        this.submitted = false;
        /** Whether to apply default input styling */
        this.inputStyle = true;
        /** Text size inside the input field */
        this.textSize = 'md';
        /** Position of the label: left, right, or center */
        this.labelPosition = 'left';
        /** Background color of the label */
        this.labelBackground = null;
        /** Text color of the label */
        this.labelColor = 'dark';
        /** Border color/style of the label */
        this.labelBorder = 'theme';
        /** Label width as a fraction of 12 columns (1-11) */
        this.labelWidth = 3;
        /** Variant of the input: default or icon or floating-label */
        this.variant = 'default';
        /** Whether the input is disabled */
        this.disabled = false;
        /** Whether the input has an error */
        this.error = false;
        /** Whether the input should auto-validate */
        this.autoValidate = true;
        this.inputFocused = false;
    }
    componentWillLoad() {
        if (this.el.id) {
            this.id = this.el.id;
        }
        else {
            this.id = v4.v4();
        }
        this.hasPrefixSlot = this.haveSlotPresent('prefix');
        this.hasSuffixSlot = this.haveSlotPresent('suffix');
    }
    componentDidLoad() {
        if (this.mask)
            this.initMask();
    }
    handleMaskChange() {
        this.initMask();
    }
    // @Watch('autoValidate')
    // handleMaskChange1() {
    //   console.log(this.autoValidate);
    // }
    // @Watch('error')
    // handleErrorChange(newValue: boolean, oldValue: boolean) {
    //   if (newValue !== oldValue) {
    //     if (this.autoValidate) {
    //       this.validateInput(this.value, true);
    //     }
    //   }
    // }
    handleValueChange(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.validateInput(this.value);
        }
    }
    initMask() {
        if (!this.mask || this.maskInstance) {
            return;
        }
        this.maskInstance = index$1.IMask(this.inputRef, this.mask);
        this.maskInstance.on('accept', () => {
            const isEmpty = this.inputRef.value.trim() === '' || this.maskInstance.unmaskedValue === '';
            if (isEmpty) {
                this.inputRef.value = '';
                this.textChange.emit(null);
            }
            else {
                this.inputRef.value = this.maskInstance.value;
                this.textChange.emit(this.maskInstance.value);
            }
        });
    }
    haveSlotPresent(name) {
        const slot = this.el.querySelector(`[slot="${name}"]`);
        console.log(slot);
        return slot !== null;
    }
    async validateInput(value, forceValidation = false) {
        if (!this.autoValidate && !forceValidation) {
            if (this.error) {
                this.updateErrorState(false);
            }
            return;
        }
        if (this.zod) {
            try {
                if (!this.asyncParse) {
                    this.zod.parse(this.wrapKey ? { [this.wrapKey]: value } : value);
                }
                else {
                    await this.zod.parseAsync(this.wrapKey ? { [this.wrapKey]: value } : value);
                }
                if (this.error) {
                    this.updateErrorState(false);
                }
            }
            catch (error) {
                console.log(error);
                this.updateErrorState(true);
            }
        }
    }
    handleInputChange(event) {
        const value = event.target.value;
        const isEmpty = value === '';
        if (this.maskInstance) {
            this.maskInstance.value = value;
        }
        const maskedValue = isEmpty ? null : this.maskInstance ? this.maskInstance.value : value;
        this.textChange.emit(maskedValue);
    }
    updateErrorState(b) {
        this.error = b;
        this.inputRef.setAttribute('aria-invalid', b ? 'true' : 'false');
    }
    handleBlur(e) {
        this.validateInput(this.value, this.submitted);
        this.inputFocused = false;
        this.inputBlur.emit(e);
    }
    renderFloatingLabel() {
        const labelText = this.label || this.placeholder || '';
        const hasValue = !!(this.value && String(this.value).length > 0);
        return (index.h("div", { class: "form-group", style: this.inputContainerStyle }, index.h("div", { class: `ir-floating-group ${this.error ? 'has-error' : ''} ${this.disabled ? 'is-disabled' : ''} ${this.readonly ? 'is-readonly' : ''}`, "data-has-value": String(hasValue), "data-focused": String(this.inputFocused), "data-have-prefix": String(this.hasPrefixSlot), "data-have-suffix": String(this.hasSuffixSlot), part: "form-group" }, index.h("span", { part: "prefix-container", class: { 'prefix-container': true, 'no-slot': !this.hasPrefixSlot } }, index.h("slot", { name: "prefix" })), index.h("input", { part: "input", "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, id: this.id, name: this.name, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input ir-floating-input ${this.inputStyles || ''} ${this.error ? 'danger-border' : ''} text-${this.textSize}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: " ", autoComplete: this.autoComplete, autocomplete: this.autoComplete, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled, "aria-invalid": String(this.error), "aria-required": String(this.required) }), index.h("label", { part: "label", htmlFor: this.id, class: "ir-floating-label" }, labelText, this.required ? ' *' : ''), index.h("span", { part: "suffix-container", class: { 'suffix-container': true, 'no-slot': !this.hasSuffixSlot } }, index.h("slot", { name: "suffix" }))), this.errorMessage && this.error && (index.h("p", { part: "error-message", class: "error-message" }, this.errorMessage))));
    }
    render() {
        if (this.variant === 'floating-label') {
            return this.renderFloatingLabel();
        }
        if (this.variant === 'icon') {
            return (index.h("fieldset", { class: "position-relative has-icon-left input-container" }, index.h("label", { htmlFor: this.id, class: "input-group-prepend bg-white m-0" }, index.h("span", { "data-disabled": this.disabled, "data-state": this.inputFocused ? 'focus' : '', class: `input-group-text icon-container bg-white ${this.error ? 'danger-border' : ''}`, id: "basic-addon1" }, index.h("slot", { name: "icon" }))), index.h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: `ir-input form-control bg-white pl-0 input-sm rate-input py-0 m-0 rateInputBorder ${this.error ? 'danger-border' : ''}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                    this.inputFocused = true;
                    this.inputFocus.emit(e);
                }, placeholder: this.placeholder, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled, autoComplete: this.autoComplete })));
        }
        return (index.h("div", { class: 'form-group', style: this.inputContainerStyle }, index.h("div", { class: "input-group row m-0" }, this.label && (index.h("div", { class: `input-group-prepend col-${this.labelWidth} p-0 text-${this.labelColor}` }, index.h("label", { htmlFor: this.id, class: `input-group-text ${this.labelPosition === 'right' ? 'justify-content-end' : this.labelPosition === 'center' ? 'justify-content-center' : ''} ${this.labelBackground ? 'bg-' + this.labelBackground : ''} flex-grow-1 text-${this.labelColor} border-${this.labelBorder === 'none' ? 0 : this.labelBorder} ` }, this.label, this.required ? '*' : ''))), index.h("input", { maxLength: this.maxLength, "data-testid": this.testId, style: this.inputForcedStyle, "data-state": !!this.value ? undefined : this.mask ? 'empty' : undefined, id: this.id, ref: el => (this.inputRef = el), readOnly: this.readonly, type: this.type, class: this.clearBaseStyles
                ? `${this.inputStyles}`
                : `${this.error ? 'border-danger' : ''} form-control text-${this.textSize} col-${this.label ? 12 - this.labelWidth : 12} ${this.readonly ? 'bg-white' : ''} ${this.inputStyles}`, onBlur: this.handleBlur.bind(this), onFocus: e => {
                this.inputFocused = true;
                this.inputFocus.emit(e);
            }, placeholder: this.placeholder, autoComplete: this.autoComplete, autocomplete: this.autoComplete, value: this.value, onInput: this.handleInputChange.bind(this), required: this.required, disabled: this.disabled })), this.errorMessage && this.error && index.h("p", { class: "error-message" }, this.errorMessage)));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "mask": ["handleMaskChange"],
        "value": ["handleValueChange"]
    }; }
};
IrInputText.style = IrInputTextStyle0;

const irMComboboxCss = ".sc-ir-m-combobox-h{position:relative;display:block}.input-wrapper.sc-ir-m-combobox{position:relative;width:100%}.prefix-container.sc-ir-m-combobox,.suffix-container.sc-ir-m-combobox{position:absolute;top:0;bottom:0;display:inline-flex;align-items:center;color:var(--ir-combobox-affix-color, #6c757d);pointer-events:none}.dropdown-item.sc-ir-m-combobox{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prefix-container.sc-ir-m-combobox{left:0.5rem}.suffix-container.sc-ir-m-combobox{right:0.5rem}.sc-ir-m-combobox-s>[slot='prefix'],.sc-ir-m-combobox-s>[slot='suffix']{display:inline-flex;width:var(--ir-combobox-affix-size, 1rem);height:var(--ir-combobox-affix-size, 1rem)}.has-prefix.sc-ir-m-combobox-h input.form-control.sc-ir-m-combobox{padding-left:calc(0.75rem + var(--ir-combobox-affix-size, 1rem))}.has-suffix.sc-ir-m-combobox-h input.form-control.sc-ir-m-combobox{padding-right:calc(0.75rem + var(--ir-combobox-affix-size, 1rem))}.dropdown.sc-ir-m-combobox{position:absolute;top:100%;left:0;z-index:1000;width:100%}.dropdown-menu.sc-ir-m-combobox{max-height:var(--ir-combobox-height, 200px);overflow-y:auto;min-width:100%;width:var(--ir-combobox-width, 100%) !important;scroll-behavior:smooth}.dropdown-item.loading.sc-ir-m-combobox,.dropdown-item.no-results.sc-ir-m-combobox{color:#6c757d;cursor:default;pointer-events:none}.dropdown-item.sc-ir-m-combobox{padding:0.5rem 1rem !important}.dropdown-item.active.sc-ir-m-combobox,.dropdown-item.sc-ir-m-combobox:active,.dropdown-item.focused.sc-ir-m-combobox{background-color:var(--blue, #1e9ff2) !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox [data-option].focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox [data-option].active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}";
const IrMComboboxStyle0 = irMComboboxCss;

const IrMCombobox = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.optionChange = index.createEvent(this, "optionChange", 7);
        this.searchQuery = index.createEvent(this, "searchQuery", 7);
        /**
         * Determines how the options are loaded into the component.
         * - 'static': Uses the options passed through the `options` prop or the default internal list.
         * - 'external': Emits search events for external handling, options updated via `options` prop.
         *
         * @default 'static'
         */
        this.dataMode = 'static';
        /**
         * List of available options for the combobox when using static data mode.
         * If empty, falls back to a default internal option list.
         */
        this.options = [];
        /**
         * Debounce delay in milliseconds for search events when using external data mode.
         * @default 300
         */
        this.debounceDelay = 300;
        /**
         * Whether to show loading state
         */
        this.loading = false;
        /**
         * Whether to use slot content for custom dropdown rendering
         */
        this.useSlot = false;
        this.isOpen = false;
        this.focusedIndex = -1;
        this.filteredOptions = [];
        this.slotElements = [];
        this.hasPrefix = false;
        this.hasSuffix = false;
        this.itemChildren = [];
        this.id = v4.v4();
        this.dropdownId = `dropdown-${this.id}`;
        this.mo = null;
        this.handleDocumentClick = (event) => {
            if (!this.el.contains(event.target)) {
                this.closeDropdown();
            }
        };
        this.updateAffixPresence = () => {
            try {
                const prefixAssigned = this.prefixSlotRef && this.prefixSlotRef.assignedElements
                    ? this.prefixSlotRef.assignedElements()
                    : Array.from(this.el.querySelectorAll('[slot="prefix"]'));
                const suffixAssigned = this.suffixSlotRef && this.suffixSlotRef.assignedElements
                    ? this.suffixSlotRef.assignedElements()
                    : Array.from(this.el.querySelectorAll('[slot="suffix"]'));
                this.hasPrefix = Array.isArray(prefixAssigned) ? prefixAssigned.length > 0 : false;
                this.hasSuffix = Array.isArray(suffixAssigned) ? suffixAssigned.length > 0 : false;
            }
            catch (e) {
                const prefixFallback = this.el.querySelector('[slot="prefix"]');
                const suffixFallback = this.el.querySelector('[slot="suffix"]');
                this.hasPrefix = !!prefixFallback;
                this.hasSuffix = !!suffixFallback;
            }
        };
        this.handleKeyDown = (event) => {
            const maxIndex = this.useSlot ? this.slotElements.length - 1 : this.filteredOptions.length - 1;
            switch (event.key) {
                case 'ArrowDown':
                    event.preventDefault();
                    if (!this.isOpen) {
                        this.openDropdown();
                    }
                    else {
                        this.focusedIndex = Math.min(this.focusedIndex + 1, maxIndex);
                        if (this.useSlot) {
                            this.focusSlotElement(this.focusedIndex);
                        }
                        else {
                            this.scrollToFocusedOption();
                        }
                    }
                    break;
                case 'ArrowUp':
                    event.preventDefault();
                    if (this.isOpen) {
                        this.focusedIndex = Math.max(this.focusedIndex - 1, 0);
                        if (this.useSlot) {
                            this.focusSlotElement(this.focusedIndex);
                        }
                        else {
                            this.scrollToFocusedOption();
                        }
                    }
                    break;
                case 'Enter':
                    event.preventDefault();
                    if (this.isOpen && this.focusedIndex >= 0) {
                        if (this.useSlot) {
                            this.selectSlotElement(this.focusedIndex);
                        }
                        else {
                            this.selectOption(this.filteredOptions[this.focusedIndex]);
                        }
                    }
                    else if (!this.isOpen) {
                        this.openDropdown();
                    }
                    break;
                case 'Escape':
                    event.preventDefault();
                    this.closeDropdown();
                    break;
                case 'Tab':
                    if (this.isOpen) {
                        this.closeDropdown();
                    }
                    break;
            }
        };
        // private handleInput = (event: Event) => {
        //   const target = event.target as HTMLInputElement;
        //   const value = target.value;
        //   if (this.dataMode === 'external') {
        //     this.emitSearchQuery(value);
        //   } else {
        //     const allOptions = this.options.length > 0 ? this.options : [];
        //     this.filteredOptions = value ? allOptions.filter(option => option.label.toLowerCase().includes(value.toLowerCase())) : allOptions;
        //   }
        //   this.focusedIndex = -1;
        //   if (!this.isOpen) {
        //     this.openDropdown();
        //   }
        // };
        this.handleInput = (event) => {
            const target = event.target;
            const value = target.value;
            if (this.dataMode === 'external' && !this.isCompositionMode) {
                this.emitSearchQuery(value);
            }
            else if (this.isCompositionMode) {
                // composition mode: filter child items
                this.filterComposition(value);
            }
            else {
                // static options mode (existing behavior)
                const allOptions = this.options.length > 0 ? this.options : [];
                this.filteredOptions = value ? allOptions.filter(option => option.label.toLowerCase().includes(value.toLowerCase())) : allOptions;
            }
            this.focusedIndex = -1;
            if (!this.isOpen) {
                this.openDropdown();
            }
        };
    }
    /**
     * Public method to select an option from external slot content
     */
    async selectOptionFromSlot(option) {
        this.selectOption(option);
    }
    get isCompositionMode() {
        return this.itemChildren.length > 0;
    }
    watchOptionsChanged(newOptions) {
        this.filteredOptions = newOptions || [];
        if (this.useSlot) {
            this.updateSlotElements();
        }
    }
    watchUseSlotChanged() {
        if (this.useSlot) {
            setTimeout(() => this.updateSlotElements(), 0);
        }
    }
    componentWillLoad() {
        this.initializeOptions();
        // discover items on first paint
        this.collectItemChildren();
        // watch DOM changes to children
        this.mo = new MutationObserver(() => this.collectItemChildren());
        this.mo.observe(this.el, { childList: true, subtree: true });
    }
    componentDidLoad() {
        var _a, _b;
        document.addEventListener('click', this.handleDocumentClick.bind(this));
        // existing stuff
        if (this.useSlot) {
            setTimeout(() => this.updateSlotElements(), 0);
        }
        setTimeout(() => this.updateAffixPresence(), 0);
        (_a = this.prefixSlotRef) === null || _a === void 0 ? void 0 : _a.addEventListener('slotchange', this.updateAffixPresence);
        (_b = this.suffixSlotRef) === null || _b === void 0 ? void 0 : _b.addEventListener('slotchange', this.updateAffixPresence);
    }
    disconnectedCallback() {
        var _a, _b, _c;
        document.removeEventListener('click', this.handleDocumentClick.bind(this));
        if (this.debounceTimeout)
            clearTimeout(this.debounceTimeout);
        (_a = this.prefixSlotRef) === null || _a === void 0 ? void 0 : _a.removeEventListener('slotchange', this.updateAffixPresence);
        (_b = this.suffixSlotRef) === null || _b === void 0 ? void 0 : _b.removeEventListener('slotchange', this.updateAffixPresence);
        (_c = this.mo) === null || _c === void 0 ? void 0 : _c.disconnect();
    }
    handleDocumentKeyDown(event) {
        var _a;
        if (!this.isOpen)
            return;
        if (event.key === 'Escape') {
            this.closeDropdown();
            (_a = this.inputRef) === null || _a === void 0 ? void 0 : _a.focus();
        }
    }
    handleComboboxItemSelect(ev) {
        ev.stopPropagation();
        console.log(ev.detail);
        this.selectOption(ev.detail);
    }
    handleComboboxItemRegister() {
        this.collectItemChildren();
    }
    handleComboboxItemUnregister() {
        this.collectItemChildren();
    }
    initializeOptions() {
        this.filteredOptions = this.options.length > 0 ? this.options : [];
    }
    // private openDropdown() {
    //   this.isOpen = true;
    //   if (this.useSlot) {
    //     this.focusedIndex = -1;
    //     setTimeout(() => this.updateSlotElements(), 0);
    //   } else {
    //     this.focusedIndex = this.selectedOption ? this.filteredOptions.findIndex(v => v.value === this.selectedOption.value) : -1;
    //   }
    // }
    openDropdown() {
        this.isOpen = true;
        if (this.isCompositionMode || this.useSlot) {
            this.focusedIndex = -1;
            setTimeout(() => (this.isCompositionMode ? this.updateSlotElementsForItems() : this.updateSlotElements()), 0);
        }
        else {
            this.focusedIndex = this.selectedOption ? this.filteredOptions.findIndex(v => v.value === this.selectedOption.value) : -1;
        }
    }
    emitSearchQuery(query) {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(() => {
            this.searchQuery.emit(query);
        }, this.debounceDelay);
    }
    closeDropdown() {
        this.isOpen = false;
        this.focusedIndex = -1;
        this.removeSlotFocus();
    }
    updateSlotElements() {
        if (!this.useSlot || !this.dropdownRef)
            return;
        const slotElement = this.dropdownRef.querySelector('slot[name="dropdown-content"]');
        if (slotElement) {
            const assignedElements = slotElement.assignedElements
                ? slotElement.assignedElements()
                : Array.from(this.el.querySelectorAll('[slot="dropdown-content"] [data-option]'));
            this.slotElements = assignedElements.length > 0 ? assignedElements : Array.from(this.dropdownRef.querySelectorAll('[data-option], .dropdown-item[style*="cursor"]'));
            this.slotElements.forEach((element, index) => {
                element.setAttribute('data-slot-index', index.toString());
                element.setAttribute('role', 'option');
                element.setAttribute('tabindex', '-1');
            });
        }
    }
    removeSlotFocus() {
        this.slotElements.forEach(element => {
            element.classList.remove('focused', 'active');
            element.removeAttribute('aria-selected');
        });
    }
    focusSlotElement(index) {
        this.removeSlotFocus();
        if (index >= 0 && index < this.slotElements.length) {
            const element = this.slotElements[index];
            element.classList.add('focused', 'active');
            element.setAttribute('aria-selected', 'true');
            element.scrollIntoView({ block: 'nearest' });
        }
    }
    selectSlotElement(index) {
        if (index >= 0 && index < this.slotElements.length) {
            const element = this.slotElements[index];
            element.click();
        }
    }
    selectOption(option) {
        this.selectedOption = option;
        this.optionChange.emit(option);
        this.closeDropdown();
        this.inputRef.focus();
    }
    scrollToFocusedOption() {
        if (this.focusedIndex < 0 || !this.dropdownRef || this.useSlot)
            return;
        const focusedElement = this.dropdownRef.querySelector(`#${this.dropdownId}-option-${this.focusedIndex}`);
        if (focusedElement) {
            focusedElement.scrollIntoView({ block: 'nearest' });
        }
    }
    collectItemChildren() {
        // find *direct or nested* items inside the dropdown container
        const items = Array.from(this.el.querySelectorAll('ir-m-combobox-item'));
        this.itemChildren = items;
        console.log(items);
        // when in composition mode, use slot-like navigation on the items
        if (this.isCompositionMode) {
            this.useSlot = true; // leverage your existing slot-based keyboard handling
            setTimeout(() => this.updateSlotElementsForItems(), 0);
        }
    }
    updateSlotElementsForItems() {
        // Treat the child items as "slot elements" for nav
        this.slotElements = this.itemChildren;
        // index and decorate for ARIA & focus handling
        this.slotElements.forEach((el, index) => {
            el.setAttribute('data-slot-index', String(index));
            el.setAttribute('role', 'option');
            el.setAttribute('tabindex', '-1');
        });
    }
    async filterComposition(query) {
        // Hide/show each child according to its own matching logic
        const results = await Promise.all(this.itemChildren.map(item => item.matchesQuery(query)));
        await Promise.all(this.itemChildren.map((item, i) => item.setHidden(query ? !results[i] : false)));
        // refresh slotElements (only visible items should be navigable)
        this.updateSlotElementsForItems();
    }
    render() {
        var _a;
        return (index.h(index.Host, { key: '1f15688e42b378dc7d3303f8b156f703b6fe988f', class: { 'has-prefix': this.hasPrefix, 'has-suffix': this.hasSuffix } }, index.h("div", { key: '859f7bc9f80bdd887e82ccca66f83595f46d2bee', class: "input-wrapper" }, index.h("span", { key: '4d5299e16f3836be571f37f3adddc709ae6be132', class: "prefix-container", "aria-hidden": !this.hasPrefix }, index.h("slot", { key: 'c7c0e5aad85fd89e57e53a840323f4f5e3121a06', name: "prefix", ref: el => (this.prefixSlotRef = el) })), index.h("input", { key: 'bd6b5e16dcac2413f7da9280279f97d5adbbc21a', ref: el => (this.inputRef = el), type: "text", class: "form-control", role: "combobox", id: this.id, value: ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.label) || '', placeholder: this.placeholder, "aria-expanded": String(this.isOpen), "aria-autocomplete": "list", "aria-controls": this.dropdownId, "data-reference": "parent", "aria-haspopup": "listbox", "aria-activedescendant": this.focusedIndex >= 0 ? `${this.dropdownId}-option-${this.focusedIndex}` : null, "aria-label": "Combobox", "aria-required": true, onKeyDown: this.handleKeyDown, onInput: this.handleInput }), index.h("span", { key: 'bade84c0e5aec785763ff0eb4b1c81f70b94a6c3', class: "suffix-container", "aria-hidden": !this.hasSuffix }, index.h("slot", { key: '27dd8ad303587813cc846fef8f60b0a88be5c6a3', name: "suffix", ref: el => (this.suffixSlotRef = el) }))), index.h("div", { key: '1e3043b06b1191cff8d8c20477c9ef6dd14579a7', class: `dropdown ${this.isOpen ? 'show' : ''}` }, index.h("div", { key: '643b485545de6e9b46e080f5b579e6a7a42539c6', ref: el => (this.dropdownRef = el), class: `dropdown-menu ${this.isOpen ? 'show' : ''}`, id: this.dropdownId, role: "listbox", "aria-expanded": String(this.isOpen) }, this.isCompositionMode ? (index.h("slot", null)) : this.useSlot ? (index.h("slot", { name: "dropdown-content" })) : ([
            this.loading && index.h("div", { class: "dropdown-item loading" }, "Loading..."),
            !this.loading && this.filteredOptions.length === 0 && index.h("div", { class: "dropdown-item no-results" }, "No results found"),
            !this.loading &&
                this.filteredOptions.map((option, index$1) => {
                    var _a;
                    return (index.h("button", { id: `${this.dropdownId}-option-${index$1}`, class: `dropdown-item ${this.focusedIndex === index$1 ? 'active' : ''}`, role: "option", "aria-selected": ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.value) === option.value ? 'true' : 'false', onClick: () => this.selectOption(option), onMouseEnter: () => (this.focusedIndex = index$1), innerHTML: option.html_content }, option.html_content ? null : option.label));
                }),
        ])))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "options": ["watchOptionsChanged"],
        "useSlot": ["watchUseSlotChanged"]
    }; }
};
IrMCombobox.style = IrMComboboxStyle0;

const irNotificationsCss = ".sc-ir-notifications-h{display:block;box-sizing:border-box !important;width:fit-content;height:fit-content}.dropdown-menu.sc-ir-notifications,.dropdown-item.sc-ir-notifications,.dropdown.sc-ir-notifications{box-sizing:border-box !important}.notification-trigger.sc-ir-notifications{width:fit-content}.notification-trigger.sc-ir-notifications::after{content:attr(data-notifications);display:flex;align-items:center;justify-content:center;min-width:1.2rem;height:1.2rem;font-size:11px;font-weight:600;padding:0;margin:0;background-color:#dc3545;color:white;border-radius:50%;position:absolute;right:-6px;top:-2px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transform:scale(1);transition:all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);animation:badge-pulse 2s infinite}.notification-trigger.sc-ir-notifications:hover::after{transform:scale(1.1);box-shadow:0 4px 8px rgba(0, 0, 0, 0.2)}.notification-trigger[data-notifications='0'].sc-ir-notifications::after{display:none}.notification-trigger.badge-animate.sc-ir-notifications::after{animation:badge-bounce 0.6s ease-in-out}@keyframes badge-pulse{0%,70%,100%{transform:scale(1);opacity:1}35%{transform:scale(1.05);opacity:0.9}}@keyframes badge-bounce{0%{transform:scale(1)}25%{transform:scale(0.8) rotate(-5deg)}50%{transform:scale(1.2) rotate(5deg)}75%{transform:scale(0.95) rotate(-2deg)}100%{transform:scale(1) rotate(0deg)}}@keyframes badge-number-change{0%{transform:scale(1) translateY(0);opacity:1}50%{transform:scale(1.3) translateY(-5px);opacity:0.7}100%{transform:scale(1) translateY(0);opacity:1}}.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications{display:flex;align-items:center;gap:0.5rem;cursor:pointer}.notifications-dropdown.sc-ir-notifications .dropdown-menu.sc-ir-notifications{width:max-content !important;min-width:300px}.notifications-dropdown.sc-ir-notifications .dropdown-item.active.sc-ir-notifications,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:active,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:focus{background-color:var(--blue)}.notification-item.sc-ir-notifications{display:flex;justify-content:space-between;align-items:center;gap:0.5rem}.notification-item.sc-ir-notifications p.sc-ir-notifications{padding:0;margin:0}.notification-item.sc-ir-notifications:active{background-color:#f4f5fa !important}";
const IrNotificationsStyle0 = irNotificationsCss;

const IrNotifications = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.notificationCleared = index.createEvent(this, "notificationCleared", 7);
        // Make notifications reactive;
        this.notifications = [];
        this.isOpen = false;
        this.onDocumentClick = (ev) => {
            if (!this.isOpen)
                return;
            const target = ev.target;
            if (target && !this.el.contains(target)) {
                this.isOpen = false;
            }
        };
        this.onDocumentKeydown = (ev) => {
            var _a, _b;
            if (!this.isOpen)
                return;
            if (ev.key === 'Escape' || ev.key === 'Esc') {
                this.isOpen = false;
                (_b = (_a = this.buttonRef) === null || _a === void 0 ? void 0 : _a.focus) === null || _b === void 0 ? void 0 : _b.call(_a);
            }
        };
    }
    componentDidLoad() {
        this.updateNotificationBadge();
        document.addEventListener('click', this.onDocumentClick, true);
        document.addEventListener('keydown', this.onDocumentKeydown, true);
    }
    componentDidUpdate() {
        this.updateNotificationBadge();
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.onDocumentClick, true);
        document.removeEventListener('keydown', this.onDocumentKeydown, true);
    }
    handleNotificationCountChange(newValue, oldValue) {
        if (oldValue && newValue.length !== oldValue.length) {
            this.animateNotificationChange();
        }
    }
    updateNotificationBadge() {
        if (this.buttonRef) {
            this.buttonRef.setAttribute('data-notifications', this.notifications.length.toString());
        }
    }
    animateNotificationChange() {
        if (this.buttonRef) {
            this.buttonRef.classList.add('badge-animate');
            setTimeout(() => {
                this.buttonRef.classList.remove('badge-animate');
            }, 600);
        }
    }
    dismissNotification(notification) {
        this.notificationCleared.emit(notification);
        this.notifications = this.notifications.filter(n => n.id !== notification.id);
    }
    render() {
        return (index.h(index.Host, { key: 'd6fb18bba3ab7c80fd754d23b0b79b0a46c92caf' }, index.h("div", { key: '0c86e8d9461078a42694dad31dbe5f2c643ccde3', class: `dropdown notifications-dropdown ${this.isOpen ? 'show' : ''}` }, index.h("ir-button", { key: '2d37d5c6d4c30ffffd81662e56dbfe52b501042d', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notifications.length.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "aria-expanded": String(this.isOpen), onClickHandler: () => (this.isOpen = !this.isOpen) }), index.h("div", { key: '8d4af0a6f0eddf8c2670d9da119a3b0f3e135a21', class: `dropdown-menu dropdown-menu-right ` }, this.notifications.length === 0 ? (index.h("p", { class: "m-0 dropdown-header" }, "All caught up.")) : (this.notifications.map(notification => (index.h("div", { class: `notification-item dropdown-item ${notification.type}`, key: notification.id }, index.h("div", { class: "notification-content" }, index.h("strong", null, notification.title), index.h("p", null, notification.message), notification.link && (index.h("a", { href: notification.link.href, target: notification.link.target || '_self' }, notification.link.text || 'View more'))), notification.dismissible && (index.h("ir-button", { onClickHandler: () => this.dismissNotification(notification), variant: "icon", btn_color: "light", icon_name: "xmark" }))))))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "notifications": ["handleNotificationCountChange"]
    }; }
};
IrNotifications.style = IrNotificationsStyle0;

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.countryOptions = [];
        this.customOptions = [];
        this.isLoadingCountries = false;
        this.isLoadingCustom = false;
        this.staticOptions = [
            { value: 'option1', label: 'Option 1' },
            { value: 'option2', label: 'Option 2' },
            { value: 'option3', label: 'Option 3 ajnajanjanjna janajnjanjan najnajnajn ajnaj' },
            { value: 'option4', label: 'Option 4' },
            { value: 'option5', label: 'Option 5' },
        ];
        this.handleStaticOptionChange = (event) => {
            this.selectedStaticOption = event.detail;
        };
        this.handleCountryChange = (event) => {
            this.selectedCountry = event.detail;
        };
        this.handleCustomOptionChange = (event) => {
            this.selectedCustomOption = event.detail;
        };
        this.handleCountrySearch = async (event) => {
            const query = event.detail;
            if (!query || query.length < 2) {
                this.countryOptions = [];
                return;
            }
            this.isLoadingCountries = true;
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${encodeURIComponent(query)}`);
                if (response.ok) {
                    const countries = await response.json();
                    this.countryOptions = countries
                        .map(country => ({
                        value: country.cca2,
                        label: country.name.common,
                    }))
                        .slice(0, 10); // Limit to 10 results
                }
                else {
                    this.countryOptions = [];
                }
            }
            catch (error) {
                console.error('Error fetching countries:', error);
                this.countryOptions = [];
            }
            finally {
                this.isLoadingCountries = false;
            }
        };
        this.handleCustomSearch = async (event) => {
            const query = event.detail;
            if (!query || query.length < 2) {
                this.customOptions = [];
                return;
            }
            this.isLoadingCustom = true;
            // Simulate API call with timeout
            setTimeout(() => {
                this.customOptions = [
                    { value: `custom-${query}-1`, label: `Custom Result 1 for "${query}"` },
                    { value: `custom-${query}-2`, label: `Custom Result 2 for "${query}"` },
                    { value: `custom-${query}-3`, label: `Custom Result 3 for "${query}"` },
                ];
                this.isLoadingCustom = false;
            }, 500);
        };
        this.handleCustomOptionClick = (option) => {
            if (this.customComboboxRef) {
                this.customComboboxRef.selectOptionFromSlot(option);
            }
        };
        this.notificationCount = 0;
        this.isMobileMenuOpen = false;
        this.toggleMobileMenu = () => {
            this.isMobileMenuOpen = !this.isMobileMenuOpen;
        };
        this.pages = [
            {
                label: 'Dashboard',
                href: 'acdashboard.aspx',
                id: 'Li_AcDashboard',
                icon: 'la la-dashboard',
                isNew: true,
            },
            {
                label: 'Frontdesk',
                href: 'frontdesk.aspx',
                id: 'Li_FrontDesk',
                icon: 'la la-calendar',
            },
            {
                label: 'Inventory',
                href: 'acratesallotment.aspx',
                id: 'Li_AcRatesAllotment',
                icon: 'la la-list',
            },
            {
                label: 'Marketing',
                id: 'Li_AcPromotions',
                icon: 'la la-rocket',
                href: '#',
                subMenus: [
                    {
                        label: 'Discounts',
                        href: 'acpromodiscounts.aspx',
                    },
                    {
                        label: 'Automated Emails',
                        href: 'acautomatedemails.aspx',
                        id: 'Li_AutomatedEmails',
                    },
                ],
            },
            {
                label: 'Bookings',
                href: 'acbookinglist.aspx',
                icon: 'la la-suitcase',
            },
            {
                href: '#',
                label: 'Settings',
                id: 'Li_AcSetup',
                icon: 'la la-building',
                isNew: true,
                subMenus: [
                    {
                        label: 'General Info',
                        href: 'acgeneral.aspx',
                    },
                    {
                        label: 'Facilities & Services',
                        href: 'acamenities.aspx',
                    },
                    {
                        label: 'Descriptions',
                        href: 'acdescriptions.aspx',
                        id: 'Li_AcDesc',
                    },
                    {
                        label: 'Policies',
                        href: 'acconcan.aspx',
                    },
                    {
                        label: 'Money Matters',
                        href: 'accommtax.aspx',
                    },
                    {
                        label: 'Rooms & Rate Plans',
                        href: 'acroomcategories.aspx',
                        className: 'Li_AcRooming anchor_AcRooming',
                    },
                    {
                        label: 'Housekeeping & Check-in Setup',
                        href: 'ACHousekeeping.aspx',
                        id: 'Li_Housekeeping',
                        isNew: true,
                    },
                    {
                        label: 'Agents and Groups',
                        href: 'actravelagents.aspx',
                    },
                    {
                        label: 'Image Gallery',
                        href: 'acimagegallery.aspx',
                        className: 'Li_AcRooming',
                    },
                    {
                        label: 'Pickup Services',
                        href: 'acpickups.aspx',
                    },
                    {
                        label: 'Integrations',
                        href: 'acintegrations.aspx',
                    },
                    {
                        label: 'iSPACE',
                        href: 'acthemingwebsite.aspx',
                    },
                    {
                        label: 'iCHANNEL',
                        href: 'acigloochannel.aspx',
                    },
                    {
                        label: 'iSWITCH',
                        href: 'iSwitch.aspx',
                        id: 'Li_iSwitch',
                    },
                ],
            },
            {
                href: '#',
                label: 'Reports',
                id: 'Li_AcAnalytics',
                icon: 'la la-bar-chart',
                isNew: true,
                subMenus: [
                    {
                        label: 'Housekeeping Tasks',
                        href: 'ACHousekeepingTasks.aspx',
                        id: 'Li_HousekeepingTasks',
                    },
                    {
                        label: 'Guests',
                        href: 'acmemberlist.aspx',
                    },
                    {
                        label: 'Sales Statistics',
                        href: 'acsalesstatistics.aspx',
                    },
                    {
                        label: 'Sales by Channel',
                        href: 'acsalesbychannel.aspx',
                        isNew: true,
                    },
                    {
                        label: 'Sales by Country',
                        href: 'acsalesbycountry.aspx',
                        isNew: true,
                    },
                    {
                        label: 'Daily Occupancy',
                        href: 'ACDailyOccupancy.aspx',
                        id: 'Li_DailyOccupancy',
                    },
                    {
                        label: 'Accounting Report',
                        href: 'acaccountingreport.aspx',
                    },
                ],
            },
        ];
        this.notifications = [
            {
                id: '1',
                type: 'info',
                title: 'Welcome!',
                message: 'Your account has been created successfully.',
                createdAt: Date.now(),
                read: false,
                dismissible: true,
            },
            {
                id: '2',
                type: 'warning',
                title: 'Storage Almost Full',
                message: 'You have used 90% of your storage. Please upgrade.',
                createdAt: Date.now(),
                read: false,
                dismissible: true,
                link: { href: '#', text: 'Upgrade now' },
            },
            {
                id: '3',
                type: 'success',
                title: 'Payment Received',
                message: 'Your invoice has been paid. Thank you!',
                createdAt: Date.now(),
                read: true,
                dismissible: true,
            },
        ];
    }
    render() {
        return (index.h(index.Host, { key: '4f2d375a90b93ae43ac7c582e9047fe21912dd9b' }, index.h("nav", { key: '6f4c3f95fcbc0c28bdad4576110769027f2e5e14', class: "modern-navbar" }, index.h("span", { key: '4a2d4e0bd5e67f6dee39e5f8006c788a6a9ccde9', class: "overdue-banner" }, "Overdue $300"), index.h("div", { key: '89b7a45062b17a5b81bd5daef060faf8ae6bec45', class: "navbar-container" }, index.h("div", { key: 'a5752da363e8376465bb8d8623ad74b6080962e1', class: "navbar-left" }, index.h("button", { key: 'a3657e0061d97bc673ba507955708fcfeb6f1e96', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, index.h("span", { key: '7d4e62c0ece0e9d038a8c2c8ce46d2c542f0039b', class: "hamburger-icon" }, index.h("span", { key: '39b08420a59d0954cc6b001fc280f545f612f3c6' }), index.h("span", { key: '2b0b703c81c46943030a3722a75393f4cd1be9c4' }), index.h("span", { key: '8d41e4343c63825ca8ebba548e9c0a1a9cfe5f91' }))), index.h("div", { key: '6dffe65c1f0a56bc85879cc9851ea54aa54f1940', class: "navbar-brand" }, "Logo"), index.h("div", { key: '09f0bb2aef879cc449bdfd3e4c093a167a656c7c', class: "d-none d-md-flex " }, index.h("ir-m-combobox", { key: 'a9eabc6ff98ea0810ed6578ffa76771fee8fa193', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '8f63ce61142decb19e3f69e603ab887a65a6b5bf', class: "hotel-name d-none d-md-block" }, "Hotel Name"), index.h("div", { key: '1a46c56e9f27fea62d3540f3f6ab0f58a10946c1', class: "ml-auto d-md-none" }, index.h("ir-notifications", { key: '1d184a19cca7b8e6e1b9943456a57c3f1673ec4b', notifications: this.notifications }))), index.h("div", { key: '5a83e78bf6cc7af0e28587c003e340d2156fdb97', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, index.h("ir-m-combobox", { key: 'd3d6c665eae852360788350fdfa2cee32fb5abe7', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: 'ee72fd9934a4f0425965a39fd8e0098828629eab', class: "navbar-right" }, index.h("ul", { key: '988aa44c85c4d2625bbdfc0f4f92293a8205babc', class: "nav-items d-none d-md-flex" }, index.h("li", { key: '0af6a0b24ba9db8b64c3dbda4dc913b660062b1f', class: "nav-item dropdown" }, index.h("a", { key: '9f2431205df8b206ce42bdf43e977f0baf4fedf2', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), index.h("ul", { key: '92d522178ecb7cb0ef75df09197353b730a4471e', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, index.h("li", { key: 'cc7a15f20311af4ded8517a9e144ce33e3b5d3ac' }, index.h("ul", { key: '09382847d40ee51346dff60228bd653098fa6883', class: "ir-mega-menu-column" }, index.h("li", { key: '10357ce52aa45cd06fe3aca21a90b8eb1caf82f0', class: "ir-mega-menu-row title" }, "Parameters"), index.h("li", { key: '3ab81907c5ca333a9c23f6db5dea262e1cdb4215', class: "ir-mega-menu-row" }, index.h("a", { key: '8694bb20c6d90b38693395e6e6ac973860693562', href: "userinline.aspx" }, "Users List")), index.h("li", { key: 'd22ea1988d6de21549a7ce9cd9fcc61ef596427b', class: "ir-mega-menu-row" }, index.h("a", { key: '648c1b728b5ff3af96ae3ba740ba59699477e595', href: "languageinline.aspx" }, "System Languages")), index.h("li", { key: 'd8136386bb5bebd6903f7e0f77d8fc569926ca0f', class: "ir-mega-menu-row" }, index.h("a", { key: '202a3b945aa13878789d51203cb08661cf9b8137', href: "countryinline.aspx" }, "Countries")), index.h("li", { key: '3a0a4322a2318669c7f9f0d9b9d8cf1653591f33', class: "ir-mega-menu-row" }, index.h("a", { key: 'c9d09e7fb9a6e39913f1119c34aa534571342421', href: "level2inline.aspx" }, "Country Level 2")), index.h("li", { key: '5a2d2c92d0fd48e2b6c85fb02e6141c18058c931', class: "ir-mega-menu-row" }, index.h("a", { key: 'dd5f6153d23ebbcb9a313bcc6a96ba42e1b898da', href: "cardinline.aspx" }, "Credit Cards")), index.h("li", { key: '5c608dfbedd654a4b0e1c207386773d13194691b', class: "ir-mega-menu-row" }, index.h("a", { key: '2ba7c763d8a9c5acee7d5faf0780778929ee7f39', href: "hotel_chaininline.aspx" }, "Hotel Chains")), index.h("li", { key: '5a701378889f6b49e81eaae59353e3b929df6de2', class: "ir-mega-menu-row" }, index.h("a", { key: '3df84e838fc6ec1d68ea07cdce225a1e2e6f7593', href: "currencyinline.aspx" }, "Currencies")), index.h("li", { key: '717df38650c0c47dbaec94f85d92b87f7622d769', class: "ir-mega-menu-row" }, index.h("a", { key: 'f01188d7a9f9810f5a8fce3d88fc398e2e1fb1d8', href: "amenityinline.aspx" }, "Amenities")), index.h("li", { key: 'cbcf949b829001487fcbfb32974fa9c0bd0412fb', class: "ir-mega-menu-row" }, index.h("a", { key: '7b2fffb967689939e9ac845ebc198d3d6407b840', href: "foodinline.aspx" }, "Food")), index.h("li", { key: '0724ac31a5caf7b7b0a0aca6a145fd918285d956', class: "ir-mega-menu-row" }, index.h("a", { key: 'ac985bd693f790add4a3285b23895153c865e029', href: "beddinginline.aspx" }, "Bedding")), index.h("li", { key: '4c15168ee99441c4e2d666d2449c8e959190deb8', class: "ir-mega-menu-row" }, index.h("a", { key: '9109df5a41f3e786b114398858db8f55e3cb8497', href: "setupinline.aspx" }, "Setup Table")), index.h("li", { key: '40d8abd156ce701be76c767c3c060074f49c4109', class: "ir-mega-menu-row" }, index.h("a", { key: '0c859a495dc567c6a9115f1c40435de8b98fca48', href: "gwedit.aspx" }, "Payment Gateways")), index.h("li", { key: '0c51be34526d2dc881fd4d85f384e2c57858328d', class: "ir-mega-menu-row" }, index.h("a", { key: '784fc3ab814819f7f205c04e7807fad20d327976', href: "channelmanager.aspx" }, "Channel Manager")))), index.h("li", { key: '18e1f451860033387f384c120d3f618dd3c37bff' }, index.h("ul", { key: 'ecd6a3ff3f09c253664efc599e9fe478f3cf0b5d', class: "ir-mega-menu-column" }, index.h("li", { key: '206c1381f90458eb9ed640ed2cdef21a9af39de2', class: "ir-mega-menu-row title" }, "Main"), index.h("li", { key: '2ae263b550d083d2f6d76875a7423cde53c8d9a2', class: "ir-mega-menu-row" }, index.h("a", { key: 'fad74bc6e64d40927ab2b4e18eab392637e39efa', href: "mpolist.aspx" }, "MPOs")), index.h("li", { key: '9d27637a5f240bcefa38c4c2ee7c42eafcb83f3a', class: "ir-mega-menu-row" }, index.h("a", { key: '43c339e236590a95e95672ae72874edf5765a19b', href: "aclist.aspx" }, "Properties")), index.h("li", { key: '5ba44bf704ae9b59eb3a00b1925ba0b83bdf2fec', class: "ir-mega-menu-row" }, index.h("a", { key: '61207e8e59f6d9d8f48dfee25223961d5993b45c', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), index.h("li", { key: 'd574874e9e8b1f6087180179a3161c70ad7b1565', class: "ir-mega-menu-row" }, index.h("a", { key: 'ce703ef252d6654e0bb45c57f72bb223353e876c', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), index.h("li", { key: 'dd11846997635a03a47ddaf150e07331653e37c2', class: "ir-mega-menu-row" }, index.h("a", { key: '2f53d3785cb6aef39db8a68acb84e4dd47b8840c', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), index.h("li", { key: '99d6c70c3aacf41ad08598c5d6a0c76d42402a21', class: "ir-mega-menu-row" }, index.h("a", { key: 'a43759ae3d7156ff2a1538d60bf00764a47d3dcc', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), index.h("li", { key: '259bf0094d68891c65fd9a1877ec83a3cced7737', class: "ir-mega-menu-row" }, index.h("a", { key: '07acbb7e8238cf0f98bea0cf3849f11c8fe6b81d', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), index.h("li", { key: 'e5cbfd1134a397d6f938160da44f83a522e3fefe', class: "ir-mega-menu-row" }, index.h("a", { key: '5de2e2b1ccdc5f7a6606e63ee0b48abd99bf4a91', href: "mpobillingreport.aspx" }, "MPO Billing Report")), index.h("li", { key: '76cafb1302e566e7dfd31555c667e766e3c2f3a8', class: "ir-mega-menu-row" }, index.h("a", { key: 'feb1284db147dfb8c80d3b9a8817d3ba8f93cb40', href: "Acmemberlist.aspx" }, "Guests")), index.h("li", { key: 'e1010c64c577f4f396cbd4cd011e700541966751', class: "ir-mega-menu-row" }, index.h("a", { key: '43ff7e8a3ef52896baff00faddd4fd92b205ede0', href: "acbookinglist.aspx" }, "Bookings")), index.h("li", { key: 'd3ddf08f607246baac93928eb7aeb0c347030d14', class: "ir-mega-menu-row" }, index.h("a", { key: '926c662a27f490bf5dcb738028884acde48a977d', href: "billing.aspx" }, "Billing")))), index.h("li", { key: '2d6338520b3cc8bd573b92de8c6445a0f17a2223' }, index.h("ul", { key: '9da13b10bbbbc035a325804cb6f24db011c49f0a', class: "ir-mega-menu-column" }, index.h("li", { key: 'e09bd4ffcf6489c459f09c46fa1aa1747075eadf', class: "ir-mega-menu-row title" }, "Locations"), index.h("li", { key: '827d286b202cf01e419a437c842ec293a20568cb', class: "ir-mega-menu-row" }, index.h("a", { key: '4aefaef3b6e22af2ca6cd728f2e321cc208804c8', href: "poicategoriesinline.aspx" }, "Types")), index.h("li", { key: '305d4abe81112f0d5b5fc48b641916da4be7d440', class: "ir-mega-menu-row" }, index.h("a", { key: '16744f8268c8a7fa071c2b74a568f1ee9c8578fd', href: "poilist.aspx" }, "List")))), index.h("li", { key: '18ff2eaf724be9075937a59ff7909c375a60f1f7' }, index.h("ul", { key: '352489bb8990da32725ce9a92ee7a491ea4ca947', class: "ir-mega-menu-column" }, index.h("li", { key: '264347b283aeda7779018d83b63dcc63e9d3b401', class: "ir-mega-menu-row title" }, "Referrers"), index.h("li", { key: '0f970cfeaf4d7950431ebc2e9ea13cf2ec8674c7', class: "ir-mega-menu-row" }, index.h("a", { key: '53289a519ec15c0409dc796b609ff295411919ba', href: "affiliatelist.aspx" }, "Affiliates")), index.h("li", { key: '91440fae543361828986ada3223fa600b0007a69', class: "ir-mega-menu-row" }, index.h("a", { key: '1ea188f7b05d2be187919aa2c60cee4a93d142c9', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), index.h("li", { key: 'ffab5f55d1ac8a549afed3acdacc75e55ec39cda', class: "nav-item" }, index.h("a", { key: '1f186d263abadcfce474c9c040a19a816925d66f', href: "#", class: "nav-link" }, "b")), index.h("li", { key: '32283eea7894ddd2f4d48a7402e5fa6212d32f54', class: "nav-item" }, index.h("a", { key: 'fabf462b71a16af656d8269a90430e9a668854f4', href: "#", class: "nav-link" }, "c")), index.h("li", { key: 'b6da35060b75d56c4c6047e5027d2397b60df478', class: "nav-item" }, index.h("a", { key: 'e8d2dcb293c3e6c440b6429ebeadd31adb1de11e', href: "#", class: "nav-link" }, "d")), index.h("li", { key: '4c83c870ac72bcbe4fb01f80dc1ee17284f52a0e', class: "nav-item" }, index.h("div", { key: 'e28cf8954a8d80d0d46f4f399e495d02a1917020', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, index.h("ir-notifications", { key: 'c1b59a899e7eaa0436b4754e0ff05a07185e670e', notifications: this.notifications }))))), index.h("div", { key: 'f5e250511890b3e3a34347946a02d788ac496abf', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, index.h("div", { key: 'b21c6c1628d99619c85660bd5895e1a5fb6ca06a', class: "mobile-menu-header" }, index.h("div", { key: 'd7b1db746cf3c0af0e1ad16a5bbebc1f64f6fd45', class: "hotel-name" }, "Hotel Name"), index.h("button", { key: '2569930d9ff83d3fb5fa8f1a0074a0d7f0d576d6', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), index.h("div", { key: '0a3c4589a781073f4dcd274e7609143533f0c1b1', class: "mobile-search" }, index.h("ir-m-combobox", { key: '3127902e7b009c5070f27a3ab073d82039853cab', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("ac-pages-menu", { key: 'e3d39da0c3ff0ebb2e7632e2b5558320a6e1cef6', location: "sheet", "onLink-clicked": async (e) => {
                await utils.sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), index.h("div", { key: '2cdfbc012c66365ba4bcb24a47c138e786063734', class: "submenus d-none d-md-block" }, index.h("ac-pages-menu", { key: '89859963fb3cb33f3e15086616c9ac5d51f8be57', pages: this.pages }))), index.h("section", { key: '176d8b4abd30f72f1bcd5668b646988e6087a97b', class: "p-2" }, index.h("div", { key: '0c798cafebf55c60bed1f07a7758a40ffc6c945e', class: "row g-3" }, index.h("div", { key: 'd04f5d2faea16c5b0aec5074b32dfd1e2c140fb0', class: "col-md-3" }, index.h("h5", { key: 'e562d9ea4ba14f9e292dcc960b27ef1f3d7402f3' }, "Static Options Example"), index.h("ir-m-combobox", { key: '534c436c1d95180c5b2e2417180082ca1cce881d', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, index.h("svg", { key: '14224550c6ab5b74632f382b65b6ce8989870299', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: 'c29ed8bd1a71a89fd3997979c2a4c1208b9bb16d', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && index.h("p", { key: '485a162739c93a81092ad3b8e6a2df02526a914a', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), index.h("div", { key: 'c2d4b4a8656ec625056359f55569d9b4747ac522', class: "col-md-3" }, index.h("h5", { key: '8bf108c4c82a222087cdb7b303f3e5833fd3b9b7' }, "External API - Countries"), index.h("ir-m-combobox", { key: '4b3f01132f2d32487fe1695c4fee63aaea5a638e', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && index.h("p", { key: 'b2ff4f97e9296818e671749ca4fc9c98b85adff8', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), index.h("div", { key: '84d90d3a6831a84a97b2a19a5ecf4a98bf120496', class: "col-md-3" }, index.h("h5", { key: 'e2420b5141fc58e7a679e7f5e141434deea4146c' }, "Custom Dropdown Content"), index.h("ir-m-combobox", { key: 'b2d5cc765f1233f943b728d48c820f5e721d33cc', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, index.h("div", { key: 'bd4fe0ad78a015d7bc24c88e31c9d47ea6f4e1ab', slot: "dropdown-content" }, this.isLoadingCustom && index.h("div", { key: '4a0b84748de7a4bc349ffd60add96f872d2dc110', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && index.h("div", { key: '994c307dc6e4840afebdefc1d18bab9a6065868b', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index$1) => (index.h("div", { key: index$1, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, index.h("span", { class: "me-2" }, "\u2B50"), index.h("div", null, index.h("div", { class: "fw-bold" }, option.label), index.h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && index.h("p", { key: '0bc09d721be823fbc7b7d3bd68f3e1c401472053', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), index.h("div", { key: '5e5a548442a53906a48d3548fcd3f989f5b9d5f4', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, index.h("button", { key: '357eac1bebd60c0b1e80d01515fc0f678fa0e78a', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), index.h("button", { key: '894daf3f9d601672b7e496c5d8b1cd0fb09eb8e2', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), index.h("ir-input-text", { key: '0b2bcff5ef23e6997f96de39274ccc3a8ee33184', variant: "floating-label", class: "my-text-input", label: "First name", style: { '--ir-floating-input-height': '4rem' } }, index.h("svg", { key: 'dcef2ab5f28f91c3706bff8dfe5a043641fb5182', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: '4c38a4c1cd2b26ba0d1ea39dc91ed2b76ffc99d6', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), index.h("svg", { key: 'e3cf0bcf41e82f2eac4c94b7419a67b78ff196a4', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { key: '41082284a2c8c1f15f11af8cfb86b8e1d6f09c05', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))))));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

exports.ac_pages_menu = AcPagesMenu;
exports.ir_button = IrButton;
exports.ir_common = IrCommon;
exports.ir_icons = IrIcons;
exports.ir_input_text = IrInputText;
exports.ir_m_combobox = IrMCombobox;
exports.ir_notifications = IrNotifications;
exports.ir_test_cmp = IrTestCmp;

//# sourceMappingURL=ac-pages-menu_8.cjs.entry.js.map