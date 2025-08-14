'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const v4 = require('./v4-9b297151.js');
const icons = require('./icons-751623e9.js');
const index$1 = require('./index-e9a28e3e.js');

const acPagesMenuCss = ":host{display:flex}.navigation-item{margin:0}.navigation-items{list-style:none}.navigation-items .dropdown-item{margin:0;padding:10px 20px !important;font-weight:400;font-size:1rem;line-height:1 !important}.navigation-item{margin:0;color:white !important}.navigation-link{display:block;padding:0.75rem 1rem;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.navigation-link:hover{background-color:rgba(255, 255, 255, 0.05);color:#1f2937;text-decoration:none}.mobile-nav-items{list-style:none;margin:0;padding:1rem 0}.new-badge{margin-left:0.375rem;font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;min-width:2rem;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:10px !important;border-radius:4px}.mobile-nav-item{margin:0;list-style:none !important}.navigation-item .dropdown-toggle::after{content:none !important}.menu-icon-container{display:flex !important;align-items:center !important;gap:0.25rem}.mobile-nav-link{display:flex;align-items:center;justify-content:space-between;padding:0.75rem 1rem;color:#374151 !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (min-width: 768px){.navigation-items{display:flex;list-style:none;align-items:center;margin:0;padding:0}.navigation-link{display:flex;align-items:center;padding:0.8rem 0.6rem;color:white !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}}.ac-menu-dropdown .dropdown-menu{min-width:14rem}@media (min-width: 992px){.ac-menu-dropdown .dropdown-menu{left:0 !important;right:auto !important}}@media (max-width: 991.98px){.ac-menu-dropdown .dropdown-menu{right:0 !important;left:auto !important}}";
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
                    return (index.h("li", { key: id, id: id, class: `mobile-nav-item ${page.className}` }, index.h("button", { class: "btn mobile-nav-link menu-icon-container justify-content-between", style: { width: '100%' }, "data-toggle": "collapse", "data-parent": "#mainMenuNavigation", "aria-expanded": "false", "data-target": `#${_collapseId}`, "aria-controls": _collapseId }, index.h("div", { class: 'menu-icon-container' }, page.icon && this.Icon({ name: page.icon }), index.h("span", null, page.label)), index.h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, page.isNew && index.h("span", { class: "new-badge" }, "new"), index.h("ir-icons", { name: "angle-down" }))), index.h("ul", { class: "collapse ", id: _collapseId }, page.subMenus.map(submenu => {
                        var _a, _b;
                        const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4.v4();
                        return (index.h("li", { key: menuId, id: menuId, class: `mobile-nav-item menu-icon-container ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}`, style: { width: '100%' } }, index.h("a", { onClick: e => this.linkClicked.emit(e), class: "mobile-nav-link w-100", href: submenu.href }, index.h("div", { class: "menu-icon-container" }, submenu.icon && this.Icon({ name: submenu.icon }), index.h("span", null, submenu.label)), submenu.isNew && index.h("span", { class: "new-badge" }, "new"))));
                    }))));
                }
                return (index.h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  mobile-nav-item` }, index.h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: "mobile-nav-link" }, index.h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), index.h("span", null, page.label)), page.isNew && index.h("span", { class: "new-badge" }, "new"))));
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
                    }, "data-menu": "dropdown", class: `dropdown  navigation-item ac-menu-dropdown ${isSheet ? 'mobile-nav-item' : ''} ${page.className}` }, index.h("button", { class: "btn dropdown-toggle menu-icon-container navigation-link ", "data-toggle": "dropdown" }, index.h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), index.h("span", null, page.label)), page.isNew && index.h("span", { class: "new-badge" }, "new")), index.h("ul", { class: "dropdown-menu dropdown-menu-right dropdown-menu-lg-left" }, page.subMenus.map(submenu => {
                    var _a, _b;
                    const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4.v4();
                    return (index.h("li", { key: menuId, id: menuId, class: `navigation-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, index.h("a", { onClick: e => this.linkClicked.emit(e), class: "dropdown-item menu-icon-container", href: submenu.href }, index.h("div", { class: "menu-icon-container" }, submenu.icon && this.Icon({ name: submenu.icon }), index.h("span", null, submenu.label)), submenu.isNew && index.h("span", { class: "new-badge" }, "new"))));
                }))));
            }
            return (index.h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  navigation-item` }, index.h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: `navigation-link` }, index.h("div", { class: "menu-icon-container" }, page.icon && this.Icon({ name: page.icon }), index.h("span", null, page.label)), page.isNew && index.h("span", { class: "new-badge" }, "new"))));
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
        return (index.h(index.Host, { key: '768fa382372309d09033b3d52fa84921a7a8d278' }, index.h("slot", { key: '08a2961d201b6c9d2ae6d5009970f127e81acbdb' })));
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

const irMComboboxCss = ".sc-ir-m-combobox-h{position:relative;display:block}.input-wrapper.sc-ir-m-combobox{position:relative;width:100%}.prefix-container.sc-ir-m-combobox,.suffix-container.sc-ir-m-combobox{position:absolute;top:0;bottom:0;display:inline-flex;align-items:center;color:var(--ir-combobox-affix-color, #6c757d);pointer-events:none}.dropdown-item.sc-ir-m-combobox{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.prefix-container.sc-ir-m-combobox{left:0.5rem}.suffix-container.sc-ir-m-combobox{right:0.5rem}.sc-ir-m-combobox-s>[slot='prefix'],.sc-ir-m-combobox-s>[slot='suffix']{display:inline-flex;width:var(--ir-combobox-affix-size, 1rem);height:var(--ir-combobox-affix-size, 1rem)}.has-prefix.sc-ir-m-combobox-h input.form-control.sc-ir-m-combobox{padding-left:calc(0.75rem + var(--ir-combobox-affix-size, 1rem))}.has-suffix.sc-ir-m-combobox-h input.form-control.sc-ir-m-combobox{padding-right:calc(0.75rem + var(--ir-combobox-affix-size, 1rem))}.dropdown.sc-ir-m-combobox{position:absolute;top:100%;left:0;z-index:1000;width:100%}.dropdown-menu.sc-ir-m-combobox{max-height:var(--ir-combobox-height, 200px);overflow-y:auto;min-width:100%;width:var(--ir-combobox-width, 100%) !important;scroll-behavior:smooth}.dropdown-item.loading.sc-ir-m-combobox,.dropdown-item.no-results.sc-ir-m-combobox{color:#6c757d;cursor:default;pointer-events:none}.dropdown-item.sc-ir-m-combobox{padding:0.5rem 1rem !important}.dropdown-item.active.sc-ir-m-combobox,.dropdown-item.focused.sc-ir-m-combobox{background-color:var(--blue, #1e9ff2) !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox [data-option].focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox [data-option].active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}";
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
        this.id = v4.v4();
        this.dropdownId = `dropdown-${this.id}`;
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
        this.handleInput = (event) => {
            const target = event.target;
            const value = target.value;
            if (this.dataMode === 'external') {
                this.emitSearchQuery(value);
            }
            else {
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
    }
    componentDidLoad() {
        var _a, _b;
        document.addEventListener('click', this.handleDocumentClick.bind(this));
        if (this.useSlot) {
            setTimeout(() => this.updateSlotElements(), 0);
        }
        setTimeout(() => this.updateAffixPresence(), 0);
        (_a = this.prefixSlotRef) === null || _a === void 0 ? void 0 : _a.addEventListener('slotchange', this.updateAffixPresence);
        (_b = this.suffixSlotRef) === null || _b === void 0 ? void 0 : _b.addEventListener('slotchange', this.updateAffixPresence);
    }
    disconnectedCallback() {
        var _a, _b;
        document.removeEventListener('click', this.handleDocumentClick.bind(this));
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        (_a = this.prefixSlotRef) === null || _a === void 0 ? void 0 : _a.removeEventListener('slotchange', this.updateAffixPresence);
        (_b = this.suffixSlotRef) === null || _b === void 0 ? void 0 : _b.removeEventListener('slotchange', this.updateAffixPresence);
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
    initializeOptions() {
        this.filteredOptions = this.options.length > 0 ? this.options : [];
    }
    openDropdown() {
        this.isOpen = true;
        if (this.useSlot) {
            this.focusedIndex = -1;
            setTimeout(() => this.updateSlotElements(), 0);
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
    render() {
        var _a;
        return (index.h(index.Host, { key: '60c48946df0aad588d2559c5993b2a93ddaad3f9', class: { 'has-prefix': this.hasPrefix, 'has-suffix': this.hasSuffix } }, index.h("div", { key: '16b376c0362243bdea1d69a1e7feaa75ca01cdcf', class: "input-wrapper" }, index.h("span", { key: '31aa9253a7a428d45e87d38a9b3aea997f2989f5', class: "prefix-container", "aria-hidden": !this.hasPrefix }, index.h("slot", { key: 'f33764e86b96e550b90c2198c048786087b3a6f1', name: "prefix", ref: el => (this.prefixSlotRef = el) })), index.h("input", { key: 'ceab3da257d0c8aae6defec887c31031e10fcc0d', ref: el => (this.inputRef = el), type: "text", class: "form-control", role: "combobox", id: this.id, value: ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.label) || '', placeholder: this.placeholder, "aria-expanded": String(this.isOpen), "aria-autocomplete": "list", "aria-controls": this.dropdownId, "data-reference": "parent", "aria-haspopup": "listbox", "aria-activedescendant": this.focusedIndex >= 0 ? `${this.dropdownId}-option-${this.focusedIndex}` : null, "aria-label": "Combobox", "aria-required": true, onKeyDown: this.handleKeyDown, onInput: this.handleInput }), index.h("span", { key: '632fa017e092694677edf0aa7d8337dab5651736', class: "suffix-container", "aria-hidden": !this.hasSuffix }, index.h("slot", { key: 'cf45167c4f015d98f7305adc39075b20c54936be', name: "suffix", ref: el => (this.suffixSlotRef = el) }))), index.h("div", { key: 'e9ddd9b6a9de50b1725e501b9e26a9ee339cea61', class: `dropdown ${this.isOpen ? 'show' : ''}` }, index.h("div", { key: '85fedb8ccaa2e8fca44be0d6fb882c1bf157bd75', ref: el => (this.dropdownRef = el), class: `dropdown-menu ${this.isOpen ? 'show' : ''}`, id: this.dropdownId, role: "listbox", "aria-expanded": String(this.isOpen) }, this.useSlot ? (index.h("slot", { name: "dropdown-content" })) : ([
            this.loading && index.h("div", { class: "dropdown-item loading" }, "Loading..."),
            !this.loading && this.filteredOptions.length === 0 && index.h("div", { class: "dropdown-item no-results" }, "No results found"),
            !this.loading &&
                this.filteredOptions.map((option, index$1) => {
                    var _a;
                    return (index.h("button", { id: `${this.dropdownId}-option-${index$1}`, class: `dropdown-item ${this.focusedIndex === index$1 ? 'active' : ''}`, role: "option", "aria-selected": ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.value) === option.value ? 'true' : 'false', onClick: () => this.selectOption(option), onMouseEnter: () => (this.focusedIndex = index$1) }, option.label));
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

const irNotificationsCss = ".sc-ir-notifications-h{display:block;box-sizing:border-box !important;width:fit-content;height:fit-content}.dropdown-menu.sc-ir-notifications,.dropdown-item.sc-ir-notifications,.dropdown.sc-ir-notifications{box-sizing:border-box !important}.notification-trigger.sc-ir-notifications{width:fit-content}.notification-trigger.sc-ir-notifications::after{content:attr(data-notifications);display:flex;align-items:center;justify-content:center;min-width:1.2rem;height:1.2rem;font-size:11px;font-weight:600;padding:0;margin:0;background-color:#dc3545;color:white;border-radius:50%;position:absolute;right:-6px;top:-2px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transform:scale(1);transition:all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);animation:badge-pulse 2s infinite}.notification-trigger.sc-ir-notifications:hover::after{transform:scale(1.1);box-shadow:0 4px 8px rgba(0, 0, 0, 0.2)}.notification-trigger[data-notifications='0'].sc-ir-notifications::after{display:none}.notification-trigger.badge-animate.sc-ir-notifications::after{animation:badge-bounce 0.6s ease-in-out}@keyframes badge-pulse{0%,70%,100%{transform:scale(1);opacity:1}35%{transform:scale(1.05);opacity:0.9}}@keyframes badge-bounce{0%{transform:scale(1)}25%{transform:scale(0.8) rotate(-5deg)}50%{transform:scale(1.2) rotate(5deg)}75%{transform:scale(0.95) rotate(-2deg)}100%{transform:scale(1) rotate(0deg)}}@keyframes badge-number-change{0%{transform:scale(1) translateY(0);opacity:1}50%{transform:scale(1.3) translateY(-5px);opacity:0.7}100%{transform:scale(1) translateY(0);opacity:1}}.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications{display:flex;align-items:center;gap:0.5rem;cursor:pointer}.notifications-dropdown.sc-ir-notifications .dropdown-menu.sc-ir-notifications{width:max-content !important;min-width:300px}.notifications-dropdown.sc-ir-notifications .dropdown-item.active.sc-ir-notifications,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:active,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:focus{background-color:var(--blue)}";
const IrNotificationsStyle0 = irNotificationsCss;

const IrNotifications = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.notificationCount = 2;
    }
    handleNotificationCountChange(newValue, oldValue) {
        if (oldValue !== undefined && newValue !== oldValue) {
            this.animateNotificationChange();
        }
    }
    componentDidLoad() {
        this.updateNotificationBadge();
    }
    componentDidUpdate() {
        this.updateNotificationBadge();
    }
    updateNotificationBadge() {
        if (this.buttonRef) {
            this.buttonRef.setAttribute('data-notifications', this.notificationCount.toString());
        }
    }
    animateNotificationChange() {
        if (this.buttonRef) {
            // Add bounce animation class
            this.buttonRef.classList.add('badge-animate');
            // Remove the animation class after animation completes
            setTimeout(() => {
                this.buttonRef.classList.remove('badge-animate');
            }, 600);
        }
    }
    render() {
        return (index.h(index.Host, { key: 'c3598b5c5fb18c91c549a55609191a1c141a2cf8' }, index.h("div", { key: '49cd62897f93f70e3a22a89c4be5387be6a65a8a', class: "dropdown notifications-dropdown" }, index.h("ir-button", { key: '4a37bb2fb6e178a40cef3678060fa1895c378017', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notificationCount.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "data-toggle": "dropdown", "aria-expanded": "false" }), index.h("div", { key: '828fee4ab722ca144b7b5f38181622dc2e56cf0b', class: "dropdown-menu dropdown-menu-right" }, index.h("div", { key: '2cb74c45b70b21aad09aa27bc170f4f04a9a6055', class: 'dropdown-item' }, index.h("ir-icons", { key: '8248e8efd087f828e9aa3008c76916fd84391e25', name: "danger" }, " "), index.h("p", { key: '0cc7dff6d9e0834d5638c577ed18de79629e13a2', class: 'p-0 m-0' }, "Something went wrong"))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "notificationCount": ["handleNotificationCountChange"]
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
    }
    render() {
        return (index.h(index.Host, { key: '8fd41d1030daf99b7a9f37b381581e98fbf245dd' }, index.h("nav", { key: '39b6083a5341da356635d2bf45b2148983b02174', class: "modern-navbar" }, index.h("span", { key: '88ea7979e0bbefc022c7315afbf708417762c841', class: "overdue-banner" }, "Overdue $300"), index.h("div", { key: '4b0f88bbe1c3cf59f3e2a24c48bc67f79b17128a', class: "navbar-container" }, index.h("div", { key: 'ad8bfaaa26fe46f543735b20866b1b1c6312eee8', class: "navbar-left" }, index.h("button", { key: 'c73a034109370fb834a5eede54d8f37a1d5188d9', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, index.h("span", { key: '487c5245784da0770d17a9ec65673f1e299eb317', class: "hamburger-icon" }, index.h("span", { key: 'a73774f59afcd375edea231977bdf5881a802dad' }), index.h("span", { key: 'f767b53eeee3bce468fc9d4ae7ba4bd58781da9e' }), index.h("span", { key: '0bece551401c0097370305f13ae363a452989f90' }))), index.h("div", { key: 'd49d422cc1f3f99dfb4662182b760b5bef75a46b', class: "navbar-brand" }, "Logo"), index.h("div", { key: 'a8fb57bf7a3679588aab98296987b81e1c208fa7', class: "d-none d-md-flex " }, index.h("ir-m-combobox", { key: '636c8a816462a6c48c17e176f6953125fac2d239', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '3d6da712918194259f0770abcc9b39d2c8c9e005', class: "hotel-name d-none d-md-block" }, "Hotel Name"), index.h("div", { key: '9ff7c3f5e056cc96a0a703c49fe7642b8e7f0a9f', class: "ml-auto d-md-none" }, index.h("ir-notifications", { key: 'ceca3ef7fb58064422cc2b24da2604437015d1b3', notificationCount: this.notificationCount }))), index.h("div", { key: '9c5e68b703c159d10f3d05851d369afd18b04c8a', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, index.h("ir-m-combobox", { key: 'd04ff8b0510265c91d92d8302b87f893b6ccd3fe', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '36b10d2816a976ccb8c1d617dd9fc4acdc80c230', class: "navbar-right" }, index.h("ul", { key: '474aad4ad7478214864d80df470b87547a53d18b', class: "nav-items d-none d-md-flex" }, index.h("li", { key: '0d0d08c2298f688544fab53872de774f722045c1', class: "nav-item dropdown" }, index.h("a", { key: 'ce40bf94d3e64bba8bd9fffd06bc194a4cd309d4', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), index.h("ul", { key: 'e7ece12e6e0a8296556a037e7f2aae1e3f6605e3', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, index.h("li", { key: '423c7b1b8fc123471b14b60eb3a1645506dd1d09' }, index.h("ul", { key: 'a8b2310e8cae27d90cac7bc7dfa1a447169a7653', class: "ir-mega-menu-column" }, index.h("li", { key: '5793653a94d4dbd9ede43bbde15e6399e16a2baf', class: "ir-mega-menu-row title" }, "Parameters"), index.h("li", { key: '344b4d58a3268b906c45ef9206a1eff0752fe385', class: "ir-mega-menu-row" }, index.h("a", { key: 'abc1dd0a8010c83b74227773951aa09953f4f160', href: "userinline.aspx" }, "Users List")), index.h("li", { key: '1a85bf3d72543e40701ff2f097e040fe67212081', class: "ir-mega-menu-row" }, index.h("a", { key: '335192612d544efda7e29d8898ccc085eaa85187', href: "languageinline.aspx" }, "System Languages")), index.h("li", { key: '341c86273a580f918954d00d9b429179ffd5601e', class: "ir-mega-menu-row" }, index.h("a", { key: '8214de67d25dc4a529b496a121f4e57a5a210abd', href: "countryinline.aspx" }, "Countries")), index.h("li", { key: '43b05f88dc8adcbe4e75dcc46980193a9eac716e', class: "ir-mega-menu-row" }, index.h("a", { key: 'ab6a5e9a6f9bb006099986ec927c859fe5ab08e5', href: "level2inline.aspx" }, "Country Level 2")), index.h("li", { key: '476cfbcd1f25cbb2e3626fb3af247bb88e4b0a0d', class: "ir-mega-menu-row" }, index.h("a", { key: '6e05b9447cbe6c5eb4997aacc1c385f8fd3d98f0', href: "cardinline.aspx" }, "Credit Cards")), index.h("li", { key: 'cb6478a4574062e4e55ffd867dca2f85aa2949d2', class: "ir-mega-menu-row" }, index.h("a", { key: '244d3f2d1a161788e41304ca6737bc1a24a617ea', href: "hotel_chaininline.aspx" }, "Hotel Chains")), index.h("li", { key: '4fd38268859ca12cfd5ed96b85e7d17cfc135afd', class: "ir-mega-menu-row" }, index.h("a", { key: '05136605e5da8f9befe55ed08bcca0ef6ca43d93', href: "currencyinline.aspx" }, "Currencies")), index.h("li", { key: '5406cb71fb1faf0ff9ce3eecf8d773361afba4fa', class: "ir-mega-menu-row" }, index.h("a", { key: 'f70b3b8ddf9de49baa24216c7eb85ef383215288', href: "amenityinline.aspx" }, "Amenities")), index.h("li", { key: 'bd45ee8ca1f8e21db1da3e96ecb9443a77f5cf75', class: "ir-mega-menu-row" }, index.h("a", { key: '2a701111d39d8e247260b146d568469a3d5ad6f5', href: "foodinline.aspx" }, "Food")), index.h("li", { key: '0576544b49d13eb6466068612666905a7f0fdfee', class: "ir-mega-menu-row" }, index.h("a", { key: '734b5045c42a59d2486d5bb744cb13f63562b7dd', href: "beddinginline.aspx" }, "Bedding")), index.h("li", { key: 'e31fca410fb8cbb2de8e1ef31f9ba0e947f0615b', class: "ir-mega-menu-row" }, index.h("a", { key: '5a6bc3542a75b3cc3c17eb36c44290e5d4b03a82', href: "setupinline.aspx" }, "Setup Table")), index.h("li", { key: 'cf9217c16913bd69085c352b58b9960f6cfc0462', class: "ir-mega-menu-row" }, index.h("a", { key: '293f7fd7b8feba8ecb2b5dc19a26a4def7fff8cf', href: "gwedit.aspx" }, "Payment Gateways")), index.h("li", { key: 'deddfcc9482f6c936d5ead1dfa0255ae6cb4aa84', class: "ir-mega-menu-row" }, index.h("a", { key: 'c8bf1e2ebc2d3c4e10df7c4f7fc8343330129dfd', href: "channelmanager.aspx" }, "Channel Manager")))), index.h("li", { key: '683ae500f2746ed23d8900040796b32a5066e0d2' }, index.h("ul", { key: 'a46e6fbb6f1181a52f898f697873a62ab2875bc4', class: "ir-mega-menu-column" }, index.h("li", { key: '6ac95ac678fb95abade4bb4b8ff81a5414870e79', class: "ir-mega-menu-row title" }, "Main"), index.h("li", { key: 'e7115b0526be0e474521dd9c468720124e902cca', class: "ir-mega-menu-row" }, index.h("a", { key: 'fa866dc618dfdb9a46fca574f6f30917c0883ced', href: "mpolist.aspx" }, "MPOs")), index.h("li", { key: '4b7ba456905a1421584c885e362e5615c0d8fde7', class: "ir-mega-menu-row" }, index.h("a", { key: 'c2db3261105366e563966bd5074bee07ea92cbef', href: "aclist.aspx" }, "Properties")), index.h("li", { key: '5167619572d896c699940fb01904aae572ab132d', class: "ir-mega-menu-row" }, index.h("a", { key: '82cf0b179f2d61b480f4e85c0e9616742a653e3e', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), index.h("li", { key: '2fc165bb8dc3b6a79ecc5becd4f5737e4bac4e62', class: "ir-mega-menu-row" }, index.h("a", { key: 'acce7ba1c275a4a66995b343737807e33df8e4ed', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), index.h("li", { key: 'f09706a12b1898f9dda0a686baac8dfd98747be7', class: "ir-mega-menu-row" }, index.h("a", { key: '7a7fec8c282f7a51ae222f4328c632cf9869daff', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), index.h("li", { key: 'a671df9a459e70bd302b8373e4106e6becacee91', class: "ir-mega-menu-row" }, index.h("a", { key: '1c0c83cd42398b4d98b24bd4dfa7244f224ca30f', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), index.h("li", { key: '24aa4d85815444faa5fd86aced526e7ff4f7d565', class: "ir-mega-menu-row" }, index.h("a", { key: '8e383061203719e63a73aac4246f8d47788614be', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), index.h("li", { key: 'ae6cfdf70bef54dae3a92dccd0abc4119e7fe803', class: "ir-mega-menu-row" }, index.h("a", { key: '5fa694b61cae0901287183046e926ff36f14b3e7', href: "mpobillingreport.aspx" }, "MPO Billing Report")), index.h("li", { key: 'b322323ee25c2a94c69ec42dc9d7208038d499f6', class: "ir-mega-menu-row" }, index.h("a", { key: '3de95e8e74f2ecadf53887231559dca3f0ed74c9', href: "Acmemberlist.aspx" }, "Guests")), index.h("li", { key: '6388e38df82070b1fe126b613c679fe48da85905', class: "ir-mega-menu-row" }, index.h("a", { key: '207f04d0beab7571d7e2b241d35e0ee3e6929c00', href: "acbookinglist.aspx" }, "Bookings")), index.h("li", { key: 'f70bee42266bd9900748b1d918835aa1c8a4526b', class: "ir-mega-menu-row" }, index.h("a", { key: '960dafb56fbf761ea3633a70784798f8426678e9', href: "billing.aspx" }, "Billing")))), index.h("li", { key: 'f3041c93d8b0d3b73800401bb70be9b47b3b2fa6' }, index.h("ul", { key: '893b54d4135dba50f374642fae50c76d1ef1c634', class: "ir-mega-menu-column" }, index.h("li", { key: '48168daaa5c7788f6679ef15b289acfc01f7dc1d', class: "ir-mega-menu-row title" }, "Locations"), index.h("li", { key: 'a09c162f643cddd8533d3fd63ff0a6ea996e8e58', class: "ir-mega-menu-row" }, index.h("a", { key: 'daaeb6f4e441c852902b5f30623e81cda1948a9c', href: "poicategoriesinline.aspx" }, "Types")), index.h("li", { key: 'da28c7100be162941bae28082b788515b2841d52', class: "ir-mega-menu-row" }, index.h("a", { key: '5b86fe880aa163431b7b616eb1fa1f4b0de73b4a', href: "poilist.aspx" }, "List")))), index.h("li", { key: '3e9ede56c56148c3fde79870c7da1182ff0aa8c3' }, index.h("ul", { key: '70a46d553b3c51a7dfcaf672e850de3d07863f70', class: "ir-mega-menu-column" }, index.h("li", { key: '39b330930197ee5b171d0c3d553214b65a17f91d', class: "ir-mega-menu-row title" }, "Referrers"), index.h("li", { key: '7712eec6056345191e6eb7ce64f3c499c2da3bfa', class: "ir-mega-menu-row" }, index.h("a", { key: '3bf710c2f3c8a7439ea85849a616893400acf7e4', href: "affiliatelist.aspx" }, "Affiliates")), index.h("li", { key: 'aca6dfc4aa8c5610ca5703f199671a48e5536149', class: "ir-mega-menu-row" }, index.h("a", { key: '4c981148d94ddcbd3871bdc5475d7ae4ea2c0af2', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), index.h("li", { key: 'b1ddcaf02da78bc4c30a5d7ffab9b72b002f79f9', class: "nav-item" }, index.h("a", { key: '3a7776425d182c27c525176cc45ca47fa1e2b4b6', href: "#", class: "nav-link" }, "b")), index.h("li", { key: '42a75d828d9de0aaecf1feb54376a89464544d92', class: "nav-item" }, index.h("a", { key: '2f5e472c12a6fda58077e59b733e178ebcf8e9b7', href: "#", class: "nav-link" }, "c")), index.h("li", { key: '76c7cac71e621070a4ffa9449219c40ea5bea81c', class: "nav-item" }, index.h("a", { key: '1a85a34598f182fc9f3a502f3936980c3f85b3d3', href: "#", class: "nav-link" }, "d")), index.h("li", { key: '4c26964b634af10d3e6a74987197621b143e79ac', class: "nav-item" }, index.h("div", { key: '7399d63dba5fc8fe868c7e7ab7349377eee5de93', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, index.h("ir-notifications", { key: 'a60a68c1f5315fa92c2638d73910b6d02e00e27b', notificationCount: this.notificationCount }))))), index.h("div", { key: 'fb18f0ed42de68defa20e98237ede3db243d3837', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, index.h("div", { key: '2e6d2c9a4a0dcc5aaea49d49bdf68c816ae6f9f5', class: "mobile-menu-header" }, index.h("div", { key: '39ed7ad5497a52ae0ca0f2871329d6e017afe0fb', class: "hotel-name" }, "Hotel Name"), index.h("button", { key: 'fa5f77084aa641a34b5764d50c06e0279ff84681', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), index.h("div", { key: 'e044a942669192133be5c90c614f3fccb1ecbe0b', class: "mobile-search" }, index.h("ir-m-combobox", { key: '86eb09e3e9e1c9309751e43bb5e9e2ca5aa58373', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("ac-pages-menu", { key: '94979345879b16fe46470bdf267af672036dbda5', location: "sheet", pages: this.pages }))), index.h("div", { key: '64a6581edb1f43c36ce68f13a35a7e33cc148cdd', class: "submenus d-none d-md-block" }, index.h("ac-pages-menu", { key: '6501438774a8b3f9c291b042c77ae7e6cc59213f', pages: this.pages }))), index.h("section", { key: 'ad38714522f2c4fb99e1f099d83324b476528f46', class: "p-2" }, index.h("div", { key: '99e6f83cbf81b274cefd02919af46c0cfa761ae8', class: "row g-3" }, index.h("div", { key: '2b860687fc471373ccf4e10eef6cc8b26123b68a', class: "col-md-3" }, index.h("h5", { key: 'cb1bd847d04aa1ed644200419f5c4c649ae9ed5a' }, "Static Options Example"), index.h("ir-m-combobox", { key: '9e08b4ef88d5deb9f005d74c17c9fa45027aff60', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, index.h("svg", { key: 'c27ba81ab76f184ec6afbfc1c8820be0b6ea5b88', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: 'e4deaca620b7fe4d0bf620fba550ccf857ca3a11', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && index.h("p", { key: 'a252d79aa37b5a2e9874bbc9bceec701de60f39f', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), index.h("div", { key: 'd7f6f4f7e8b59525e609b8a05b6ebb941ae6722d', class: "col-md-3" }, index.h("h5", { key: '62cba5ebb4fa73418b9d08ae8eb054bcb1e09428' }, "External API - Countries"), index.h("ir-m-combobox", { key: 'e29318cc7c125ff15f46a70f8b3ab51f9b09fbb4', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && index.h("p", { key: '31ca254ea606d2266088fe4d02c53a4ef2e123e6', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), index.h("div", { key: '7547ace6db9e4b53cc142b4715d4884b401b8ef4', class: "col-md-3" }, index.h("h5", { key: '735a17c3f62b80aadba21ac0b1e75240cfc3c68b' }, "Custom Dropdown Content"), index.h("ir-m-combobox", { key: '54f1f80ca7cbd1f2fe8dab2f1f364ab9bf767f81', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, index.h("div", { key: 'a9e5e29bee35f1ec1e7ddb61c1f1f90b2475ca2b', slot: "dropdown-content" }, this.isLoadingCustom && index.h("div", { key: '672fba82ccd3483717dbf069a8378c6a3c573422', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && index.h("div", { key: '29e897c8055b0c99d6b903b592b6091d412dd2e4', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index$1) => (index.h("div", { key: index$1, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, index.h("span", { class: "me-2" }, "\u2B50"), index.h("div", null, index.h("div", { class: "fw-bold" }, option.label), index.h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && index.h("p", { key: '7fcd53e34156d20a2303c9881372b0373734030d', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), index.h("div", { key: 'a956d492e86d1d7d91606cb41966a2a4cbe6d358', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, index.h("button", { key: 'd0e3402e013a663f1792574406d6f5e3ba83dd78', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), index.h("button", { key: '1cf2b64a04cb1b711978170ef6fe072b3fd2b3d3', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), index.h("ir-input-text", { key: 'ab7f63b2c40d51a26bec3fa3c2d7272808788734', variant: "floating-label", class: "my-text-input", label: "First name", style: { '--ir-floating-input-height': '4rem' } }, index.h("svg", { key: 'feed05cd2371e4931cc34bfb43a4c1e31c479206', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: '16e7222f1674557d243af0003cd8905b18992e3e', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), index.h("svg", { key: 'abb156baf91308440c7114b549bea66d20df1eca', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { key: '2038759caa3e7bfb9d73a9b982274f0287594361', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))))));
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