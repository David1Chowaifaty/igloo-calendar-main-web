import { r as registerInstance, c as createEvent, h, H as Host, g as getElement } from './index-60982d00.js';
import { v as v4 } from './v4-964634d6.js';
import { i as icons } from './icons-f8664e4a.js';

const acPagesMenuCss = ":host{display:flex}.navigation-item{margin:0}.navigation-items{list-style:none}.navigation-items .dropdown-item{margin:0;padding:10px 20px !important;font-weight:400;font-size:1rem;line-height:1 !important}.navigation-item{margin:0;color:white !important}.navigation-link{display:block;padding:0.75rem 1rem;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.navigation-link:hover{background-color:rgba(255, 255, 255, 0.05);color:#1f2937;text-decoration:none}.mobile-nav-items{list-style:none;margin:0;padding:1rem 0}.new-badge{margin-left:0.375rem;font-weight:400;text-align:center;vertical-align:middle !important;text-transform:uppercase;letter-spacing:0.02em;line-height:1;display:inline-flex;align-items:center;justify-content:center;min-width:2rem;white-space:nowrap;background:#ff4961;color:white;padding:0.2rem 0.3rem;font-size:10px !important;border-radius:4px}.mobile-nav-item{margin:0}.navigation-item .dropdown-toggle::after{content:none !important}.mobile-nav-link{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (min-width: 768px){.navigation-items{display:flex;list-style:none;align-items:center;margin:0;padding:0}.navigation-link{display:flex;align-items:center;padding:0.8rem 0.6rem;color:white !important;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}}";
const AcPagesMenuStyle0 = acPagesMenuCss;

const AcPagesMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.linkClicked = createEvent(this, "linkClicked", 7);
        this.pages = [];
        this.location = 'nav';
    }
    render() {
        const isSheet = this.location === 'sheet';
        if (isSheet) {
            return (h("ul", { class: "mobile-nav-items accordion" }, this.pages.map(page => {
                var _a, _b;
                const id = (_a = page.id) !== null && _a !== void 0 ? _a : v4();
                if (page.subMenus) {
                    const _collapseId = `collapse-${page.label.toLowerCase()}`;
                    return (h("li", { key: id, id: id, class: `mobile-nav-item ${page.className}` }, h("button", { class: "btn mobile-nav-link d-flex align-items-center justify-content-between", style: { width: '100%' }, "data-toggle": "collapse", "data-parent": "#mainMenuNavigation", "aria-expanded": "false", "data-target": `#${_collapseId}`, "aria-controls": _collapseId }, h("div", { class: 'd-flex align-items-center', style: { gap: '0.25rem' } }, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), h("div", { class: 'd-flex align-items-center', style: { gap: '0.5rem' } }, page.isNew && h("span", { class: "new-badge" }, "new"), h("ir-icons", { name: "angle-down" }))), h("ul", { class: "collapse ", id: _collapseId }, page.subMenus.map(submenu => {
                        var _a, _b;
                        const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4();
                        return (h("li", { key: menuId, id: menuId, class: `mobile-nav-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, h("a", { onClick: e => this.linkClicked.emit(e), class: "mobile-nav-link", href: submenu.href }, submenu.icon && h("i", { class: submenu.icon }), h("span", null, submenu.label)), submenu.isNew && h("span", { class: "new-badge" }, "new")));
                    }))));
                }
                return (h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  mobile-nav-item` }, h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: "mobile-nav-link" }, h("span", null, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), page.isNew && h("span", { class: "new-badge" }, "new"))));
            })));
        }
        return (h("ul", { class: "navigation-items" }, this.pages.map(page => {
            var _a, _b;
            const id = (_a = page.id) !== null && _a !== void 0 ? _a : v4();
            if (page.subMenus) {
                return (h("li", { key: id, id: id, onMouseEnter: e => {
                        if (window.innerWidth < 765) {
                            return;
                        }
                        e.target.classList.add('show');
                    }, onMouseLeave: e => {
                        if (window.innerWidth < 765) {
                            return;
                        }
                        e.target.classList.remove('show');
                    }, "data-menu": "dropdown", class: `dropdown  navigation-item ac-menu-dropdown ${isSheet ? 'mobile-nav-item' : ''} ${page.className}` }, h("button", { class: "btn dropdown-toggle navigation-link", "data-toggle": "dropdown" }, h("span", null, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), page.isNew && h("span", { class: "new-badge" }, "new")), h("ul", { class: "dropdown-menu " }, page.subMenus.map(submenu => {
                    var _a, _b;
                    const menuId = (_a = submenu.id) !== null && _a !== void 0 ? _a : v4();
                    return (h("li", { key: menuId, id: menuId, class: `navigation-item ${(_b = submenu.className) !== null && _b !== void 0 ? _b : ''}` }, h("a", { onClick: e => this.linkClicked.emit(e), class: "dropdown-item", href: submenu.href }, h("span", null, submenu.icon && h("i", { class: submenu.icon }), h("span", null, submenu.label)), submenu.isNew && h("span", { class: "new-badge" }, "new"))));
                }))));
            }
            return (h("li", { key: id, id: id, class: `${(_b = page.className) !== null && _b !== void 0 ? _b : ''}  navigation-item` }, h("a", { href: page.href, onClick: e => this.linkClicked.emit(e), class: `navigation-link` }, h("span", null, page.icon && h("i", { class: page.icon }), h("span", null, page.label)), page.isNew && h("span", { class: "new-badge" }, "new"))));
        })));
    }
};
AcPagesMenu.style = AcPagesMenuStyle0;

const irButtonCss = ".sc-ir-button-h{--icon-button-color:#6b6f82;--icon-button-hover-color:#104064}.button-icon.sc-ir-button{padding:0;margin-top:0}.button-icon[data-state='loading'].sc-ir-button{display:none}.button-text.sc-ir-button{padding:0 5px}.bounce-3.sc-ir-button{animation:bounce 1s 1}.btn-link.sc-ir-button{color:var(--blue, #1e9ff2)}.ir-button-class.sc-ir-button{display:inline-flex !important;justify-content:center;align-items:center;box-sizing:border-box}.btn-outline.sc-ir-button{background:transparent;border:1px solid #104064;color:#104064}.btn-outline.sc-ir-button:hover,.btn-outline.sc-ir-button:active{background:#104064;color:white}.icon-button.sc-ir-button{all:unset;box-sizing:border-box;border-radius:0.25rem;display:inline-flex;align-items:center;justify-content:center;color:var(--icon-button-color);padding:0.2rem;transition:color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out}.icon-button.sc-ir-button:hover{color:var(--icon-button-hover-color)}.icon-button.sc-ir-button:hover.hovered_bg{background:var('--ir-icon-bg-hover', #f6f6f6)}.icon-button.sc-ir-button:disabled{pointer-events:none}.icon-loader.sc-ir-button{margin:0;padding:0;width:var(--icon-size, 1.25rem);height:var(--icon-size, 1.25rem);border-radius:50%;background:radial-gradient(farthest-side, var(--icon-button-color) 94%, #0000) top/2px 2px no-repeat, conic-gradient(#0000 30%, var(--icon-button-color));-webkit-mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);mask:radial-gradient(farthest-side, #0000 calc(100% - 2px), var(--icon-button-color) 0);animation:l13 1s infinite linear}.btn_loader.sc-ir-button{width:15px;height:10px;--c:no-repeat linear-gradient(#ffffff 0 0);background:var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%;background-size:20% 100%;animation:l1 1s infinite linear}@keyframes l13{100%{transform:rotate(1turn)}}@keyframes l1{0%{background-size:20% 100%, 20% 100%, 20% 100%}33%{background-size:20% 10%, 20% 100%, 20% 100%}50%{background-size:20% 100%, 20% 10%, 20% 100%}66%{background-size:20% 100%, 20% 100%, 20% 10%}100%{background-size:20% 100%, 20% 100%, 20% 100%}}@keyframes bounce{0%,100%{transform:scale(1);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}50%{transform:scale(1.2);animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}}@keyframes ping{75%,100%{transform:scale(1.2)}}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}";
const IrButtonStyle0 = irButtonCss;

const IrButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.clickHandler = createEvent(this, "clickHandler", 7);
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
        this.btn_id = v4();
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
            return (h("button", { id: this.btn_id, class: `icon-button ${this.btn_styles} ${this.visibleBackgroundOnHover ? 'hovered_bg' : ''}`, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), type: this.btn_type, disabled: disabled }, this.isLoading ? h("span", { class: "icon-loader" }) : h("ir-icons", { class: 'm-0 p-0', name: this.icon_name })));
        }
        let blockClass = this.btn_block ? 'btn-block' : '';
        return (h("button", { id: this.btn_id, ref: el => (this.buttonEl = el), onClick: () => this.clickHandler.emit(), class: `btn btn-${this.btn_color} ${this.btn_styles} ir-button-class  btn-${this.size} text-${this.textSize} ${blockClass}`, type: this.btn_type, style: this.btnStyle, disabled: disabled }, this.icon_name && this.iconPosition === 'left' && h("ir-icons", { name: this.icon_name, style: this.icon_style }), this.text &&
            (this.renderContentAsHtml ? (h("span", { class: "button-text m-0", innerHTML: this.text, style: this.labelStyle })) : (h("span", { style: this.labelStyle, class: "button-text m-0" }, this.text))), this.isLoading ? h("div", { class: "btn_loader m-0 p-0" }) : this.iconPosition === 'right' && h("ir-icons", { style: this.icon_style, name: this.icon_name })));
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
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '501d8b95014cff3cd3ee715f0501c1ddb0069afa' }, h("slot", { key: 'a91f581927b1410fc270bd4cd80ebb5a1d2c5d8c' })));
    }
    static get watchers() { return {
        "extraResources": ["hrefsChanged"]
    }; }
};

const irIconsCss = ".sc-ir-icons-h{display:block;box-sizing:border-box;margin:0;padding:0}.icon.sc-ir-icons{height:var(--icon-size, 1.25rem);width:var(--icon-size, 1.25rem);margin:0;padding:0}";
const IrIconsStyle0 = irIconsCss;

const IrIcons = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        const svgPath = icons[this.name] || null;
        if (!svgPath) {
            return null;
        }
        return (h("svg", { xmlns: "http://www.w3.org/2000/svg", color: this.color, viewBox: svgPath.viewBox, class: `icon ${this.svgClassName}` }, h("path", { fill: "currentColor", d: svgPath.d })));
    }
};
IrIcons.style = IrIconsStyle0;

const irMComboboxCss = ".sc-ir-m-combobox-h{position:relative;display:block}.dropdown.sc-ir-m-combobox{position:absolute;top:100%;left:0;z-index:1000;width:100%}.dropdown-menu.sc-ir-m-combobox{max-height:var(--ir-combobox-height, 200px);overflow-y:auto;min-width:100%;width:var(--ir-combobox-width, 100%) !important;scroll-behavior:smooth}.dropdown-item.loading.sc-ir-m-combobox,.dropdown-item.no-results.sc-ir-m-combobox{color:#6c757d;cursor:default;pointer-events:none}.dropdown-item.sc-ir-m-combobox{padding:0.5rem 1rem !important}.dropdown-item.active.sc-ir-m-combobox,.dropdown-item.focused.sc-ir-m-combobox{background-color:var(--blue, #1e9ff2) !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox .dropdown-item.active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}[slot='dropdown-content'].sc-ir-m-combobox [data-option].focused.sc-ir-m-combobox,[slot='dropdown-content'].sc-ir-m-combobox [data-option].active.sc-ir-m-combobox{background-color:#1e9ff2 !important;color:white !important}";
const IrMComboboxStyle0 = irMComboboxCss;

const IrMCombobox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.optionChange = createEvent(this, "optionChange", 7);
        this.searchQuery = createEvent(this, "searchQuery", 7);
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
        this.id = v4();
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
        return (h(Host, { key: '29cb183ba4efcef8aa53ebfca88330601bdb5f0c' }, h("input", { key: 'e13080674e061abaad24fcee9bee317e54d6f923', ref: el => (this.inputRef = el), type: "text", class: "form-control", role: "combobox", id: this.id, value: ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.label) || '', placeholder: this.placeholder, "aria-expanded": String(this.isOpen), "aria-autocomplete": "list", "aria-controls": this.dropdownId, "data-reference": "parent", "aria-haspopup": "listbox", "aria-activedescendant": this.focusedIndex >= 0 ? `${this.dropdownId}-option-${this.focusedIndex}` : null, "aria-label": "Combobox", "aria-required": true, onKeyDown: this.handleKeyDown, onInput: this.handleInput }), h("div", { key: '740aea94d33cf99453a0c71f60a05f784fefc850', class: `dropdown ${this.isOpen ? 'show' : ''}` }, h("div", { key: 'ba9b88e92e5921bcc661ea1179c5e501e5f5f43c', ref: el => (this.dropdownRef = el), class: `dropdown-menu ${this.isOpen ? 'show' : ''}`, id: this.dropdownId, role: "listbox", "aria-expanded": String(this.isOpen) }, this.useSlot ? (h("slot", { name: "dropdown-content" })) : ([
            this.loading && h("div", { class: "dropdown-item loading" }, "Loading..."),
            !this.loading && this.filteredOptions.length === 0 && h("div", { class: "dropdown-item no-results" }, "No results found"),
            !this.loading &&
                this.filteredOptions.map((option, index) => {
                    var _a;
                    return (h("button", { id: `${this.dropdownId}-option-${index}`, class: `dropdown-item ${this.focusedIndex === index ? 'active' : ''}`, role: "option", "aria-selected": ((_a = this.selectedOption) === null || _a === void 0 ? void 0 : _a.value) === option.value ? 'true' : 'false', onClick: () => this.selectOption(option), onMouseEnter: () => (this.focusedIndex = index) }, option.label));
                }),
        ])))));
    }
    get el() { return getElement(this); }
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
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '1851878dc5d3e7b1e4c8dcdd9b328a05cd0aa3a4' }, h("div", { key: '0af044571210171588fa69b4df21868720dd4bb2', class: "dropdown notifications-dropdown" }, h("ir-button", { key: '975b3943ba6a45ad9f4c1d9a5fe8f6c94ccdcb37', ref: el => (this.buttonRef = el), variant: "icon", icon_name: "bell", "data-notifications": this.notificationCount.toString(), class: "notification-trigger", btn_type: "button", "data-reference": "parent", "data-toggle": "dropdown", "aria-expanded": "false" }), h("div", { key: '58924e41bbcda3615f288db2353341ffe7d95da3', class: "dropdown-menu dropdown-menu-right" }, h("div", { key: '1381951c05d113bf3806bfdfcfcc4dd327035a51', class: 'dropdown-item' }, h("ir-icons", { key: '83d158e253158cacbbf77b25ce10279577130914', name: "danger" }, " "), h("p", { key: '6104a2abe93d1b94cbf410d1bca858e751c669d7', class: 'p-0 m-0' }, "Something went wrong"))))));
    }
    get el() { return getElement(this); }
    static get watchers() { return {
        "notificationCount": ["handleNotificationCountChange"]
    }; }
};
IrNotifications.style = IrNotificationsStyle0;

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h(Host, { key: '28d16b445522377e83d5b94bc07b83804fe3114d' }, h("nav", { key: '95c1553db0a8bf24615c18d873608b6788cc90b9', class: "modern-navbar" }, h("span", { key: '1ddb9486974f45d0ca1366c190552450d7ed646f', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '3659aa411a387f728a5f29f1bcc65214ff8597ac', class: "navbar-container" }, h("div", { key: 'e80db4ab7173f45d71cf666fd9fdc239e49d534e', class: "navbar-left" }, h("button", { key: '859723e4ce776b6ddef622bc4537cb0e2cbb2648', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '7fe40579031f7c75cc7e8a515a9b080de2415a4f', class: "hamburger-icon" }, h("span", { key: '0d4323d3e4f50136eab8241fdf4e5f59801178e9' }), h("span", { key: '78c175bb99cf25da9d4ef3f3635570915a1a2b24' }), h("span", { key: 'eec5a4116dabde1cb6901fb64b1af924e000edef' }))), h("div", { key: 'd379ff4fe38b941ea782c139021c6ed8fc9c2c4b', class: "navbar-brand" }, "Logo"), h("div", { key: 'c88e56f9ab4000ea8e526f7779ff68f104a5afed', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'e9d27d4b81ef7050c549545d03889d45437bf9eb', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'ef6e365dfca34a2dc18114303f03bbbb0e2d1354', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '57857e18b24c5d1fee24bd86c2bcbf01945e86ec', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'b38063bc97d85b44228c7aa65eb1e9da37e6f2a7', notificationCount: this.notificationCount }))), h("div", { key: '2f82fcb3292d19b8bfc7c78adf35f89fb9816b72', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '1b3ec5c7d87969a06396397316904050a919d9b9', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'e3a87d9942fb83e84c402634d543dd62d93739c8', class: "navbar-right" }, h("ul", { key: 'e326f6ebddcfac4cfd4c588dcf4266ff213a3916', class: "nav-items d-none d-md-flex" }, h("li", { key: '6a3cca081f5fc648dbab83191b8791c8292757e0', class: "nav-item dropdown" }, h("a", { key: 'a63620d04efbdb11796095a1e49f6b4ed27b3295', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '3ce72c544fe551dcfe3fdaae6fed3b1857244c04', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '816f654a2b49795bfe1974e8a6b521d91a15cf03' }, h("ul", { key: '48fdbf911e125eee20ce77a7ed64c7c683e8203b', class: "ir-mega-menu-column" }, h("li", { key: '5a3736aa54d75eea77890aab545d9f576ba00602', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '8e7855df74478089b3685af713ff41768a2c6508', class: "ir-mega-menu-row" }, h("a", { key: 'db25c2739e883c959585cf9754fe5c980ec7d8e4', href: "userinline.aspx" }, "Users List")), h("li", { key: 'ae8203ccbddc073db3900f44c6245f70cee984e0', class: "ir-mega-menu-row" }, h("a", { key: '49028ade772e9f38a2389d79a5c2f60c63675f47', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '752768a98d21eb8a976a5b7f3dc4b1c320911c3c', class: "ir-mega-menu-row" }, h("a", { key: '62f9baf7666d4246dd37e3d1c0df2c8832e16c59', href: "countryinline.aspx" }, "Countries")), h("li", { key: '3b54ca6f858f555dbd880f1f738fc29f5d6d2e72', class: "ir-mega-menu-row" }, h("a", { key: '7d8886fe4380eb8e66e706e8ad808aa37d76cb4d', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'e3bb42aabcd57b20e0af11245b7606aa44b8287d', class: "ir-mega-menu-row" }, h("a", { key: '3bed2ed956800f352a2383b39a31143f8701a47d', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'f6d0c07770d956c9ac724c2de5f26c9bbd1d85db', class: "ir-mega-menu-row" }, h("a", { key: '9a66c9b947d38edfc2e7260e49587d057c3b3895', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'c76c6d5bb8bc393cb36047232c369121f96cc20e', class: "ir-mega-menu-row" }, h("a", { key: '6413ba7fd57000ca170f7f76bf28c1cc508db478', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '5b2721be1d829609ae8e0cf981da5d1c54ece17f', class: "ir-mega-menu-row" }, h("a", { key: '2b23edb1adcdc5c280fc217970282cca2ad59de4', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '4d4e8bafbd127854ee2972199d76075a2e68f60b', class: "ir-mega-menu-row" }, h("a", { key: '5e7c9716f20753a8b6ac953e7002f2c2b3d85a56', href: "foodinline.aspx" }, "Food")), h("li", { key: '243eaf8a064884d4eeb0e55721d80de60b4636ce', class: "ir-mega-menu-row" }, h("a", { key: '9e99eaeada5741d01aaf0d9252e9255ea6909b71', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '13ca7c9b8da1146fbcf1085eab8383220b0e097e', class: "ir-mega-menu-row" }, h("a", { key: '42c8d7ef667d28c7ccb22a83868c931893e23e64', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '4d76f146aaf211fcad92603bf3e0a84766bd3c14', class: "ir-mega-menu-row" }, h("a", { key: 'cf7017104efdcbbfa7b07ab5baba75d870478b80', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '81861bcbd3efd3c351bf80165416e356b85bcaa9', class: "ir-mega-menu-row" }, h("a", { key: '958fdc1cb31102b35c52304c075e150b665d9641', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '3456cb433cf52c7d23f61f1da169a6e1efc337d1' }, h("ul", { key: '418856220598bd28e15d8f3998e167162c9f8e62', class: "ir-mega-menu-column" }, h("li", { key: '79fa7fc102554c84b1bdec86cb2ac4a590666c92', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'd711fafd4f8823f73e6d21ca010c1dfaf638de8f', class: "ir-mega-menu-row" }, h("a", { key: 'f838f97d036bfd7def5285561ac6822b5b5967a0', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '1c3701d0cfc44f0b1696c8d4dbb84138118400c6', class: "ir-mega-menu-row" }, h("a", { key: '38bb67cfb5ec0499fb64470f7b28b9bd8fe76ce4', href: "aclist.aspx" }, "Properties")), h("li", { key: 'ad33bf0bbcb30c64665d6153540a07f36880aac2', class: "ir-mega-menu-row" }, h("a", { key: '01e6a4e12bc93c55a809cbcf0bb2eec1b8763325', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '3f775b99a03c91ca5ee78e7405ae1195c29e8ab2', class: "ir-mega-menu-row" }, h("a", { key: '1e7ca5ad2291cdfc7d5ac5dd7b98ea57147444e8', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '317d3f8cfc905112ed2bb71ebd546e24bf2dc356', class: "ir-mega-menu-row" }, h("a", { key: '04fd4b216096d0dcd5874ebdfcad4e268889922e', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '8837ac9d370a318e1ac92d892ae62f2940a1ac0d', class: "ir-mega-menu-row" }, h("a", { key: 'd3f707d0ab572bef1025da8994fee37a2a9ff75c', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '907f0cf1a46f30ae7886331b03b3c95c59fa87ae', class: "ir-mega-menu-row" }, h("a", { key: 'f0efef28f40557177dbccf33f7e72a69ccacb0d3', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '2fd40cb779350741034193c82d0633f044da9f77', class: "ir-mega-menu-row" }, h("a", { key: '936afadf2bf07d794c1549462b46cd6a8dbc6bf2', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'fe675b8a39a8ed366875144c1d847e2ad3dbc23f', class: "ir-mega-menu-row" }, h("a", { key: 'efc707cd9682304a19617592a10d7c70c85bebab', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'd099293684a3f605689f24e8ae8affee16598492', class: "ir-mega-menu-row" }, h("a", { key: '2c9d397290bfa23fb36dfb385b4fa417ae1dddde', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '94bf1e4a7be728136a9666fb3c77e043bfc18349', class: "ir-mega-menu-row" }, h("a", { key: 'fdf270db9147b1ea2b91bb360d9757b7948ee042', href: "billing.aspx" }, "Billing")))), h("li", { key: '3007e8a75ecffd01df03af9cfa7cb21ad67efb2d' }, h("ul", { key: '40b352a20999abd602fb0325dbe91080e9de0a03', class: "ir-mega-menu-column" }, h("li", { key: '4bddee054f6f9fe9382885bd51e9b39f523e1a4e', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '3783cd28d9075567368812be54a2bb42b2962369', class: "ir-mega-menu-row" }, h("a", { key: 'fec177e39b26a3fdfffc4b366b83876902e7b65f', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: 'ba9447a32d0fc38d2acca177556e769adc80f385', class: "ir-mega-menu-row" }, h("a", { key: '598c9a29fe6192e09aa360c3eb6891113bd00b16', href: "poilist.aspx" }, "List")))), h("li", { key: '1308ba00877937642979e6e63efba13c9751e5c6' }, h("ul", { key: 'f8eba78cfba4969a8b75d99401a2bf26f7a93166', class: "ir-mega-menu-column" }, h("li", { key: '59131c00f426f602b67346f0f38ee22133ddf24d', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '86c67f18e5fb223a51acc575647f152d61575a4c', class: "ir-mega-menu-row" }, h("a", { key: '1ce9b12b963fc9c3c2a5b0ae7f629aed3ad06276', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'bf68de16fa2b81b8f56184007a9410658a055425', class: "ir-mega-menu-row" }, h("a", { key: '7a0e2e5bd3225bd2f655dfed7ec4e61d8fde502c', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'e9bf244c7110c21df78030bc8c4bf12d27bafce3', class: "nav-item" }, h("a", { key: '9dbc77e8ec0bada491933cfa7c4fdfaa3fe8d398', href: "#", class: "nav-link" }, "b")), h("li", { key: '8b4fa0aedfd1670be1a6e6cd7e9567b36f5c395b', class: "nav-item" }, h("a", { key: 'd501907e4fe0dafacb8c2dbdbae48deacc866da6', href: "#", class: "nav-link" }, "c")), h("li", { key: '5a925807859a56a15a9a76d19d408a61ba15ea27', class: "nav-item" }, h("a", { key: 'bd560b5c0777d2b3403422fc303079eb9a3c05f1', href: "#", class: "nav-link" }, "d")), h("li", { key: '7841aa182eae2d8a5b40b7e0723b2cc0d3845bd5', class: "nav-item" }, h("div", { key: '060f9ffd69d416de4e229c5a0cca8add8ff62f3e', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '75fcc2b8522b020050f0be3541a52af8dc9f5b63', notificationCount: this.notificationCount }))))), h("div", { key: 'dcac3f72b444fc5b010f54806ed4c04264821696', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '59807326bbde686367faef78c3b5948369636be3', class: "mobile-menu-header" }, h("div", { key: '8caad4abdadbc85306814f60bd1455f089db513f', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'ac600925e143e63633438465f71850564df51724', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '22006e1c8564df3a04ad57657af616c9bb685672', class: "mobile-search" }, h("ir-m-combobox", { key: 'd55d9c1c33e26d6b79fbc9a701703863b173ff28', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'c2e43d2124ce4e75a2620e4247f473e6ac968e62', location: "sheet", pages: this.pages }))), h("div", { key: 'ce473760ffcc127834927dab1ac22aaea6746901', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '567abbf7d2f481a858937afd5740976f7a7999b0', pages: this.pages }))), h("section", { key: '93e32cae430ccb0e2dca10b007656c150837b134', class: "p-2" }, h("div", { key: '9d11dd91e58c9c690d47b2b0d600d3901c9ec24f', class: "row g-3" }, h("div", { key: '39029c616b394ff08fb0c937669cb1f1746e2a6e', class: "col-md-3" }, h("h5", { key: '3b2f53cf37b3fcb7e97866d66ffe418c3f73f2b6' }, "Static Options Example"), h("ir-m-combobox", { key: '925348e57916f39c39881bd2f3069d553575315d', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }), this.selectedStaticOption && h("p", { key: 'fbe49b331136f0d1337a2392d31aab6469c8c308', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '6458af9abbabddbf85dc05645bf5a4724b753fcf', class: "col-md-3" }, h("h5", { key: '268ce49c4a27f615389ab17149fb5aace31fc7a5' }, "External API - Countries"), h("ir-m-combobox", { key: '704fb53137142eaeb64e44aec11b0f2f521da9b6', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '63daa9facff9f8777856595065d306937a09983e', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '0333c9b0b1b05b42eb79391a62a0fe3a023881a5', class: "col-md-3" }, h("h5", { key: 'dc979c1dd1bb197cad725ba7e397faa9ad653d0d' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '26cf39486cd49b78b2d93419a9259408707dda35', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '5b2562e8c12c6bd23ea542155ba6aced486ff26b', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'c6c7d998c0d04efeb54115b351342ff69af08c9a', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '61853a0a3773cd4a342ddac33f07d2db20f66157', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '1fb139932e081363b736e494d9a35251670e7a6f', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '09a2a5dd8476ca8ce5fbf275b1eecbdfe99a49e5', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'b268e4fc2e58f214488b89cd93844f579b58fadf', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'd24458d64b5136b68fb8a90ba213de45329c1a7b', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")))));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

export { AcPagesMenu as ac_pages_menu, IrButton as ir_button, IrCommon as ir_common, IrIcons as ir_icons, IrMCombobox as ir_m_combobox, IrNotifications as ir_notifications, IrTestCmp as ir_test_cmp };

//# sourceMappingURL=ac-pages-menu_7.entry.js.map