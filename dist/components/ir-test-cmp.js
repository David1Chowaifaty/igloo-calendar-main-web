import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './ac-pages-menu2.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-m-combobox2.js';
import { d as defineCustomElement$2 } from './ir-notifications2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0;color:white !important}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer;color:white !important}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp$1 = /*@__PURE__*/ proxyCustomElement(class IrTestCmp extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '9c27303fb2fe1d7019e38b3a491a4ce8cb82c783' }, h("nav", { key: '1f9d1ed56910b318890fabf76905a0d36ef1f012', class: "modern-navbar" }, h("span", { key: '44892e948717f09c828e77a6b6a22e957ec03508', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '848db6a329e99503ee8ca08d6d4101d96b51433b', class: "navbar-container" }, h("div", { key: '45dc549698beee6c5c77031598b190860496e8e2', class: "navbar-left" }, h("button", { key: 'cebe55b84fbabad6e3d08f15cb47ab26f6b738b8', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '7071a9f17fe54c5da1cd7ca6c43b674553dc2cc5', class: "hamburger-icon" }, h("span", { key: '780d0fe27cc48ded8e25f6da6403f7d22023ca50' }), h("span", { key: '5676a0b0fc3baaf1f1928a2bed4c0d49b2598f02' }), h("span", { key: 'b45aa3e2acd11a6dadfe8b9bfcd32a42427c3e91' }))), h("div", { key: '72a624e0f0174b43e682a51031772debdaefd88b', class: "navbar-brand" }, "Logo"), h("div", { key: '37988593b41376e2a7ebcc2c9c573c7d42780805', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '3f994836fe3b54f267168232a81d37116f1367c3', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '8f26c593dc27311548763c721550fe9feb83c538', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'a7f5ae303a6124453dfb56d04676ebe4251f2d6a', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '4f08fcd240cb9d8bf24393c312aff84ce378e3c5', notificationCount: this.notificationCount }))), h("div", { key: '1fe50c7ae5197b5c66eb90b1ae0d46485234074a', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '8fcc2164e1ec75e5bcf0699664093f15d5f53fb0', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '3ce6318f97ca97ae586fe6b01ccc89ed1fca7667', class: "navbar-right" }, h("ul", { key: '8dc831fb41987534b8094b060c3181b3afcfc818', class: "nav-items d-none d-md-flex" }, h("li", { key: 'bb47afa02959b51df1c20070e7c9660fc898969e', class: "nav-item" }, h("a", { key: 'ba030276f43c150c35ba1a28b7e5b60cf2aea070', href: "#", class: "nav-link" }, "a")), h("li", { key: 'b59087e879c5acb1229f8a66c5e25da04d112024', class: "nav-item" }, h("a", { key: '86beab5ed598ce7f8fed1be0d5bf8a011cdae685', href: "#", class: "nav-link" }, "b")), h("li", { key: 'ef4c0eefc6856e83232da2fc9b118a2b7ca4abaa', class: "nav-item" }, h("a", { key: '8b6e858fe503c0e06e5021c13569ac3c9205bf41', href: "#", class: "nav-link" }, "c")), h("li", { key: 'e9ee44221a6e8733945933689c0b7792d1494828', class: "nav-item" }, h("a", { key: '9175e7de630e34df05a5bec5264ade09b9a0e232', href: "#", class: "nav-link" }, "d")), h("li", { key: '5fc90f90674bd4bf4046e2ece6b9cb02a68e9ef9', class: "nav-item" }, h("div", { key: '1ed634515726547c1017ff8066f97a0983b6ef93', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '902d735e5961a64f5fe2a4196447da0922b16c49', notificationCount: this.notificationCount }))))), h("div", { key: '75e2920038b10e31860d507ef20182b7c02c9f4a', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '69cd220ed2ddb0332bff047bfd51bf8cdb2042f9', class: "mobile-menu-header" }, h("div", { key: '9c22638a5392938fa74eec3e03ebdf9510d65800', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'edd412e40d628ec72704cc8bd3a86eacb721189f', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '25b4e3e5071aacc6b19435a44f6713a05f35e629', class: "mobile-search" }, h("ir-m-combobox", { key: '5d429c33ebc5b1173f84cabaf76bda54cd64b04d', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'f5be028856350cbfcebd717e81c4293509d96ce5', location: "sheet", pages: this.pages }))), h("div", { key: 'fc25d0a907e56e3197835c042f60d5bd6c913c5b', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '5bd227ad91346f86db9db09474fea25830a9144d', pages: this.pages }))), h("section", { key: '2d77b1bff342585d498e4fe0eac1b5ae1cb9b274', class: "p-2" }, h("div", { key: '3fcc8039b0d7955d3603a066a4584dc281d08ed7', class: "row g-3" }, h("div", { key: '4b2c88d43715585f77a763499e7e943bc67f5386', class: "col-md-3" }, h("h5", { key: 'f4ced15ec9ed004184bcf7149bcb6d9edc0dc439' }, "Static Options Example"), h("ir-m-combobox", { key: 'f97b299a81bdbc8d8572df5ca6c30d67d471dd1e', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }), this.selectedStaticOption && h("p", { key: 'd66503918c54d3a3bb239bf7d8c6d04536264947', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '5d414da915bbaa7a636bea0bef03aa18d1715c61', class: "col-md-3" }, h("h5", { key: 'ad93531cfcfb817a8988e237c901022e1bd74046' }, "External API - Countries"), h("ir-m-combobox", { key: 'f219485d04fd519241cdd7a50de5feb9e03d7071', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '3bcaec2a831550dc77cce3b3572500ac44d44758', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '8550cd1a587ed7cfdb45ff85024d6fa341f952ef', class: "col-md-3" }, h("h5", { key: '4214cf03df139a40f8126f40a16f38a2e19c2fb5' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'fb11e6bf115b304d0db4e8fd136c8e1b998f6d36', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'ec95a2dd9a343a10e4d3221338158dfdeb7eaac8', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '36abd8b60309eec1358d7b8276b64daeabb75a92', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'e2f15c68e024ef81fec797994be1ec393de12a70', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'c974652dd9ffa0a18b62b99204b03d26f8213be0', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'a90a1caf79861b36593b191e046ef9129fa6fd94', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '4b321898fbd903229a502658379c37ccfe4ce45c', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '86fa43f3a8579063de7037e04d1e07813f3ed29c', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")))));
    }
    static get style() { return IrTestCmpStyle0; }
}, [2, "ir-test-cmp", {
        "dates": [32],
        "selectedStaticOption": [32],
        "selectedCountry": [32],
        "selectedCustomOption": [32],
        "countryOptions": [32],
        "customOptions": [32],
        "isLoadingCountries": [32],
        "isLoadingCustom": [32],
        "notificationCount": [32],
        "isMobileMenuOpen": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-test-cmp", "ac-pages-menu", "ir-button", "ir-icons", "ir-m-combobox", "ir-notifications"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTestCmp$1);
            }
            break;
        case "ac-pages-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-m-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-notifications":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrTestCmp = IrTestCmp$1;
const defineCustomElement = defineCustomElement$1;

export { IrTestCmp, defineCustomElement };

//# sourceMappingURL=ir-test-cmp.js.map