'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const v4 = require('./v4-9b297151.js');
const icons = require('./icons-751623e9.js');

const acPagesMenuCss = ":host{display:flex}.navigation-item{margin:0}.navigation-items{list-style:none}.navigation-items .dropdown-item{margin:0;padding:10px 20px !important;font-weight:400;font-size:1rem;line-height:1 !important}.navigation-item{margin:0;color:white !important}.navigation-link{display:block;padding:0.75rem 1rem;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.navigation-link:hover{background-color:rgba(255, 255, 255, 0.05);color:#1f2937;text-decoration:none}.mobile-nav-items{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item{margin:0}.navigation-item .dropdown-toggle::after{content:none !important}.mobile-nav-link{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (min-width: 768px){.navigation-items{display:flex;list-style:none;align-items:center;margin:0;padding:0}.navigation-link{display:flex;align-items:center;padding:0.8rem 0.6rem;color:white !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}}";
const AcPagesMenuStyle0 = acPagesMenuCss;

const AcPagesMenu = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.linkClicked = index.createEvent(this, "linkClicked", 7);
        this.pages = [];
        this.location = 'nav';
    }
    render() {
        const isSheet = this.location === 'sheet';
        if (isSheet) {
            return (index.h("ul", { class: "mobile-nav-items accordion", id: "mainMenuNavigation", "data-menu": "menu-navigation" }, this.pages.map(page => {
                var _a, _b;
                const id = (_a = page.id) !== null && _a !== void 0 ? _a : v4.v4();
                if (page.subMenus) {
                    const _collapseId = `collapse-${page.label.toLowerCase()}`;
                    return (index.h("li", { key: id, id: id, class: `mobile-nav-item ${page.className}` }, index.h("button", { class: "btn mobile-nav-link d-flex align-items-center justify-content-between", style: { width: '100%' }, "data-toggle": "collapse", "data-parent": "#mainMenuNavigation", "aria-expanded": "false", "data-target": `#${_collapseId}`, "aria-controls": _collapseId }, index.h("span", null, page.icon && index.h("i", { class: page.icon }), index.h("span", null, page.label)), index.h("ir-icons", { name: "angle-down" })), index.h("ul", { class: "collapse ", id: _collapseId }, page.subMenus.map(submenu => {
                        var _a, _b;
                        const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4.v4();
                        return (index.h("li", { key: menuId, id: menuId, class: `mobile-nav-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, index.h("a", { onClick: e => this.linkClicked.emit(e), class: "mobile-nav-link", href: submenu.href }, submenu.icon && index.h("i", { class: submenu.icon }), index.h("span", null, submenu.label))));
                    }))));
                }
                return (index.h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  mobile-nav-item` }, index.h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: "mobile-nav-link" }, page.icon && index.h("i", { class: page.icon }), index.h("span", null, page.label))));
            })));
        }
        return (index.h("ul", { class: "navigation-items", id: "main-menu-navigation", "data-menu": "menu-navigation" }, this.pages.map(page => {
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
                    }, "data-menu": "dropdown", class: `dropdown  navigation-item ac-menu-dropdown ${isSheet ? 'mobile-nav-item' : ''} ${page.className}` }, index.h("a", { class: "dropdown-toggle navigation-link", href: "#", "data-toggle": "dropdown" }, page.icon && index.h("i", { class: page.icon }), index.h("span", null, page.label)), index.h("ul", { class: "dropdown-menu " }, page.subMenus.map(submenu => {
                    var _a, _b;
                    const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4.v4();
                    return (index.h("li", { key: menuId, id: menuId, class: `navigation-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, index.h("a", { onClick: e => this.linkClicked.emit(e), class: "dropdown-item", href: submenu.href }, submenu.icon && index.h("i", { class: submenu.icon }), index.h("span", null, submenu.label))));
                }))));
            }
            return (index.h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  navigation-item` }, index.h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: `navigation-link` }, page.icon && index.h("i", { class: page.icon }), index.h("span", null, page.label))));
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
        return (index.h(index.Host, { key: '287b899fde462fc083975bfb05409be44a48f12b' }, index.h("slot", { key: 'c86630fb60b233d10ea0b8d4268fcfc6ac68e695' })));
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

const irMComboboxCss = ".sc-ir-m-combobox-h{position:relative;display:block}.dropdown.sc-ir-m-combobox{position:absolute;top:100%;left:0;z-index:1000;width:100%}.dropdown-menu.sc-ir-m-combobox{max-height:var(--ir-combobox-height, 200px);overflow-y:auto;min-width:100%;width:var(--ir-combobox-width, 100%) !important;scroll-behavior:smooth}.dropdown-item.loading.sc-ir-m-combobox,.dropdown-item.no-results.sc-ir-m-combobox{color:#6c757d;cursor:default;pointer-events:none}.dropdown-item.sc-ir-m-combobox{padding:0.5rem 1rem !important}.dropdown-item.active.sc-ir-m-combobox,.dropdown-item.focused.sc-ir-m-combobox{background-color:var(--blue, #1e9ff2) !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox [data-option].focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox [data-option].active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}";
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
        this.id = v4.v4();
        this.dropdownId = `dropdown-${this.id}`;
        this.handleDocumentClick = (event) => {
            if (!this.el.contains(event.target)) {
                this.closeDropdown();
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
        document.addEventListener('click', this.handleDocumentClick.bind(this));
        if (this.useSlot) {
            setTimeout(() => this.updateSlotElements(), 0);
        }
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleDocumentClick.bind(this));
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
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
        return (index.h(index.Host, { key: '1a0dc6258a77c8979b32fccb8c6b4fe4814f9ca2' }, index.h("input", { key: '1d102f9abcf02a11bb65a8de89bbbfb473e81ab7', ref: el => (this.inputRef = el), type: "text", class: "form-control", role: "combobox", id: this.id, value: ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.label) || '', placeholder: this.placeholder, "aria-expanded": String(this.isOpen), "aria-autocomplete": "list", "aria-controls": this.dropdownId, "data-reference": "parent", "aria-haspopup": "listbox", "aria-activedescendant": this.focusedIndex >= 0 ? `${this.dropdownId}-option-${this.focusedIndex}` : null, "aria-label": "Combobox", "aria-required": true, onKeyDown: this.handleKeyDown, onInput: this.handleInput }), index.h("div", { key: 'd558355677f1e269c96bfc2f3cdd9a668c196628', class: `dropdown ${this.isOpen ? 'show' : ''}` }, index.h("div", { key: '06fe4e23b37c7cc1ce3bca594ad7df6fe6928f10', ref: el => (this.dropdownRef = el), class: `dropdown-menu ${this.isOpen ? 'show' : ''}`, id: this.dropdownId, role: "listbox", "aria-expanded": String(this.isOpen) }, this.useSlot ? (index.h("slot", { name: "dropdown-content" })) : ([
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

const irNotificationsCss = ".sc-ir-notifications-h{display:block;box-sizing:border-box !important;width:fit-content;height:fit-content}.dropdown-menu.sc-ir-notifications,.dropdown-item.sc-ir-notifications,.dropdown.sc-ir-notifications{box-sizing:border-box !important}.notification-trigger.sc-ir-notifications{width:fit-content}.notification-trigger.sc-ir-notifications::after{content:attr(data-notifications);display:flex;align-items:center;justify-content:center;min-width:1.2rem;height:1.2rem;font-size:11px;font-weight:600;padding:0;margin:0;background-color:#dc3545;color:white;border-radius:50%;position:absolute;right:-6px;top:-8px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transform:scale(1);transition:all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);animation:badge-pulse 2s infinite}.notification-trigger.sc-ir-notifications:hover::after{transform:scale(1.1);box-shadow:0 4px 8px rgba(0, 0, 0, 0.2)}.notification-trigger[data-notifications='0'].sc-ir-notifications::after{display:none}.notification-trigger.badge-animate.sc-ir-notifications::after{animation:badge-bounce 0.6s ease-in-out}@keyframes badge-pulse{0%,70%,100%{transform:scale(1);opacity:1}35%{transform:scale(1.05);opacity:0.9}}@keyframes badge-bounce{0%{transform:scale(1)}25%{transform:scale(0.8) rotate(-5deg)}50%{transform:scale(1.2) rotate(5deg)}75%{transform:scale(0.95) rotate(-2deg)}100%{transform:scale(1) rotate(0deg)}}@keyframes badge-number-change{0%{transform:scale(1) translateY(0);opacity:1}50%{transform:scale(1.3) translateY(-5px);opacity:0.7}100%{transform:scale(1) translateY(0);opacity:1}}.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications{display:flex;align-items:center;gap:0.5rem;cursor:pointer}.notifications-dropdown.sc-ir-notifications .dropdown-menu.sc-ir-notifications{width:max-content !important;min-width:300px}.notifications-dropdown.sc-ir-notifications .dropdown-item.active.sc-ir-notifications,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:active,.notifications-dropdown.sc-ir-notifications .dropdown-item.sc-ir-notifications:focus{background-color:var(--blue)}";
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
        return (index.h(index.Host, { key: '23f40fe30c2ac67aec388c59a80e287c3e836681' }, index.h("div", { key: 'd7e426b80a40d034f3252efe5f451decf17f0c57', class: "dropdown notifications-dropdown" }, index.h("ir-button", { key: '132b98f31f2267d117a33042e30f8dc0a01b2074', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notificationCount.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "data-toggle": "dropdown", "aria-expanded": "false" }), index.h("div", { key: 'ede5a7197a6bf7955cca2d9451902857e4fd0d19', class: "dropdown-menu dropdown-menu-right" }, index.h("div", { key: '9ed570cf88bf7218452b6f222fe5ad6b459888cd', class: 'dropdown-item' }, index.h("ir-icons", { key: '82e6c1bde1f92f134829f2e840351a0c695bd002', name: "danger" }, " "), index.h("p", { key: '4c78466911591afd91bc934673b9c1ca48a6717c', class: 'p-0 m-0' }, "Something went wrong"))))));
    }
    get el() { return index.getElement(this); }
    static get watchers() { return {
        "notificationCount": ["handleNotificationCountChange"]
    }; }
};
IrNotifications.style = IrNotificationsStyle0;

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0;color:white !important}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer;color:white !important}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}";
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
        this.isMobileMenuOpen = true;
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
                    },
                    {
                        label: 'Sales by Country',
                        href: 'acsalesbycountry.aspx',
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
        return (index.h(index.Host, { key: '8ba08c54d2f7370655ab885518a2bdd4b53ca9e7' }, index.h("nav", { key: 'c40c6f9ebe52b935d214f7ea687e509152d318bb', class: "modern-navbar" }, index.h("span", { key: 'aa0c2e9f29738fb8afa1cc699681921889cbd976', class: "overdue-banner" }, "Overdue $300"), index.h("div", { key: '725a8021f693b5a311ca7c4880967c0236cd2bb0', class: "navbar-container" }, index.h("div", { key: '90eaf1757b7625636269a02c3c911cea85198b3b', class: "navbar-left" }, index.h("button", { key: 'c4e2ecdbe62fed7dd19fba07b15ddecf503e2d07', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, index.h("span", { key: '8f5e4c0d1f639414804d6ac005fba606df6a7ec2', class: "hamburger-icon" }, index.h("span", { key: 'd792b35b05c5a43dbf6d6f560e081b46e70528ab' }), index.h("span", { key: '47e902e2ae83d460197226abbfd4b571b77ed4a5' }), index.h("span", { key: '29e65d7d760bf8437dd2b12273806d0dfef4f765' }))), index.h("div", { key: '90b4c1e69393d7087d551f5fc2adf20972cd7007', class: "navbar-brand" }, "Logo"), index.h("div", { key: '96226995b61e5b873930a26753da1a682054779d', class: "d-none d-md-flex " }, index.h("ir-m-combobox", { key: 'fc2c0ece753f63c59d81e54c669f47289bf2e685', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '3ed9df20c2a003a74ca6304f46f6604fe77105e7', class: "hotel-name d-none d-md-block" }, "Hotel Name"), index.h("div", { key: '2294ae0c2eb625f5a62d4af38d4bebc696d0ef5c', class: "ml-auto d-md-none" }, index.h("ir-notifications", { key: 'd3f36c037a82102dc9600143fab7cd5c0b6027da', notificationCount: this.notificationCount }))), index.h("div", { key: 'b9d63d33dd3cdb7f21dc15c66a7255a1c9a16788', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, index.h("ir-m-combobox", { key: 'e4858f7258987872cbf3852e2068a3bf15ae743d', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: 'bc2aee35c77122cf6188073160454adc9d020d46', class: "navbar-right" }, index.h("ul", { key: 'e48fadbe7d3e3b6d945e10a5eb381944eba86d80', class: "nav-items d-none d-md-flex" }, index.h("li", { key: '6096b4932365fb3bc6b7cd777686992e6148d274', class: "nav-item" }, index.h("a", { key: '1d33a218e7dfa63d158a14271e85cb49cdcd9653', href: "#", class: "nav-link" }, "a")), index.h("li", { key: '8983f04f7c46ad5329c53f0bafc05821b3698532', class: "nav-item" }, index.h("a", { key: 'efab94ce58db387d2aa3f815777f724076f8f522', href: "#", class: "nav-link" }, "b")), index.h("li", { key: '865cc86a6559e15e96212a27e5cc075554a80248', class: "nav-item" }, index.h("a", { key: '08b9c974985f7577bf28c78df00d1c272227401f', href: "#", class: "nav-link" }, "c")), index.h("li", { key: 'b5e018ad4221ba7f07d9270b7c7028d9e2e9180b', class: "nav-item" }, index.h("a", { key: '7bb21ef0b82ffa6e0011737ae9c36291ce94dc61', href: "#", class: "nav-link" }, "d")), index.h("li", { key: 'e306d422031781dbbeaa57be6022cc048c02187b', class: "nav-item" }, index.h("div", { key: 'cb7a2f2e2c66af6e4f59ff1ccf11b7e7e28e9eb5', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, index.h("ir-notifications", { key: '603dcc0aa8759fe20b2f0c1583191867ea956799', notificationCount: this.notificationCount }))))), index.h("div", { key: '531d86f643cbfb56db073bc3fa9bedc564763940', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, index.h("div", { key: '093cb37ad3b34d0d6aeb59dd3ff617de7b4acb9e', class: "mobile-menu-header" }, index.h("div", { key: '4871b1a698b7709cd37aac4838852ea7991750d0', class: "hotel-name" }, "Hotel Name"), index.h("button", { key: '87582adf6d992d5ef7997ec369e952426df9cf30', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), index.h("div", { key: 'c56434afb36b3ce2fe5bc207a7e1f036df94c225', class: "mobile-search" }, index.h("ir-m-combobox", { key: '09a219a141bbad63e30504573a0556646b0b6685', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("ac-pages-menu", { key: '67f179851b3fb328a4cec2591a9558bc85a51227', location: "sheet", pages: this.pages }))), index.h("div", { key: 'b65849cdb0bcf82f595d565ced1c727883314401', class: "submenus d-none d-md-block" }, index.h("ac-pages-menu", { key: '92d87e8288127aebadfb27a8e5ac37e095617116', pages: this.pages }))), index.h("section", { key: 'dee5b6da0a8ebd7a7cea56018e9b9dc34422051a', class: "p-2" }, index.h("div", { key: '5bd8c01b8518e3e0b4b6f29221610d7e3fe93e96', class: "row g-3" }, index.h("div", { key: '1517e21c9fa8102f0066ab9bbb6ecc7419aed2e2', class: "col-md-3" }, index.h("h5", { key: 'a25d3a2eae0c097e2ac47a44a0c290ff351df7e5' }, "Static Options Example"), index.h("ir-m-combobox", { key: '216e13a8b4bce7c7927f96846f86ddcddb1ade3d', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }), this.selectedStaticOption && index.h("p", { key: 'c471897ab30e1d62ca9dca0f28585d130e1ddafc', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), index.h("div", { key: '9f5bda0b4f92c4b8ea383ef02d8e5bc92f2d875b', class: "col-md-3" }, index.h("h5", { key: '6ba6ed5b7f77c27d8d3d24ec6773e4660da2b8f0' }, "External API - Countries"), index.h("ir-m-combobox", { key: '2064f9a352999f613db9e8c07dedc0c09fd4403b', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && index.h("p", { key: '1d1a68ae855266d61499165a6ee9420aaee47fca', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), index.h("div", { key: '8d9241f3d57a4883fac0b4f4e4a5e3632a6d65f1', class: "col-md-3" }, index.h("h5", { key: '727b57e376f5cecb90da43460694ab2168e09164' }, "Custom Dropdown Content"), index.h("ir-m-combobox", { key: '31b13b4d661038d62789a220d1a3c47a59bc0e96', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, index.h("div", { key: '0e7103485cd6b22f8737209e4a4bddb8feff6d24', slot: "dropdown-content" }, this.isLoadingCustom && index.h("div", { key: '7e196b0b31e88a8553a33b22c9202db8ba8e3c6b', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && index.h("div", { key: 'fa4f287ad4e95d7efb86b3967a659364c6b35016', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index$1) => (index.h("div", { key: index$1, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, index.h("span", { class: "me-2" }, "\u2B50"), index.h("div", null, index.h("div", { class: "fw-bold" }, option.label), index.h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && index.h("p", { key: '907aecc376a020ce2eb7ca32f18faae54e79bd4e', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), index.h("div", { key: 'cbd092ca79f554c3c9ac12ded77b3cae32daa586', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, index.h("button", { key: '116ea431bbeb6caf26d7f67411e5a044f6439ca3', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), index.h("button", { key: '1e18b35ddb173838bc5c271cbf7940599e14fb52', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")))));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

exports.ac_pages_menu = AcPagesMenu;
exports.ir_button = IrButton;
exports.ir_common = IrCommon;
exports.ir_icons = IrIcons;
exports.ir_m_combobox = IrMCombobox;
exports.ir_notifications = IrNotifications;
exports.ir_test_cmp = IrTestCmp;

//# sourceMappingURL=ac-pages-menu_7.cjs.entry.js.map