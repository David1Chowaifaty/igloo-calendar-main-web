import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { d as defineCustomElement$6 } from './ac-pages-menu2.js';
import { d as defineCustomElement$5 } from './ir-button2.js';
import { d as defineCustomElement$4 } from './ir-icons2.js';
import { d as defineCustomElement$3 } from './ir-m-combobox2.js';
import { d as defineCustomElement$2 } from './ir-notifications2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0;color:white !important}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer;color:white !important}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}.hotel-name.sc-ir-test-cmp{display:none !important}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.d-none.sc-ir-test-cmp{display:none !important}.d-md-none.sc-ir-test-cmp{display:block !important}.d-md-block.sc-ir-test-cmp{display:none !important}.d-md-flex.sc-ir-test-cmp{display:none !important}@media (min-width: 768px){.d-md-none.sc-ir-test-cmp{display:none !important}.d-md-block.sc-ir-test-cmp{display:block !important}.d-md-flex.sc-ir-test-cmp{display:flex !important}}";
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
        return (h(Host, { key: '04c3bf8191d1d509acc2d7e6b4d1c502fd0a8cd5' }, h("nav", { key: 'c63e577663b73c3638f4c0be0be295eab8e28037', class: "modern-navbar" }, h("span", { key: '8288dce702447974c094e7e02b0a2ca2ac23b800', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'b2f2e68da9160a0fdedb814a9840ddc21be724d9', class: "navbar-container" }, h("div", { key: '15ed3b1f37f3145b58096922470ba88fb28b8993', class: "navbar-left" }, h("button", { key: 'a0af5231e7d89557afb35ae0cfefe2fa82639836', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'e647e15de35ed549a51fc3fb61fa42c240465938', class: "hamburger-icon" }, h("span", { key: '448c10460f4db6986df201a7988b057ab107740b' }), h("span", { key: 'a0824400f6c464facf9a8e296c71a0d33b7fad60' }), h("span", { key: '8a3baf1fef7c4afcec7cc77a55cad9af93f40ee4' }))), h("div", { key: '0214472bb10246a69b51093b5cbbb7c527ff4523', class: "navbar-brand" }, "Logo"), h("div", { key: '97c403da774a1948b227913f86908d66721dbc1f', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '7bdb402ffdaaf4c755d821c23e103301e921db83', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'd8514caad1458b757495e73019af230c2a7f7902', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '4fac998e9c46cca2f829a72292101591a9d60784', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'd9e3b9cfe62d5ed47db442ec203d4b63db45fcb5', notificationCount: this.notificationCount }))), h("div", { key: '4bccd4c53455382dc68d240ee7d9413cfe6b6339', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '4db638046c3d86795551aae4cb5dd0ee74c3822a', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '0c563a8a229931e4ef797b8bc8fbbdd9144ea8d4', class: "navbar-right" }, h("ul", { key: 'f92b848209190f253e2035632568c1c9789b881c', class: "nav-items d-none d-md-flex" }, h("li", { key: '44a08df62825d09546de97c4bbf4f5c207452c81', class: "nav-item" }, h("a", { key: '86095070f939b9318ddbb0a63af03784e0f697dd', href: "#", class: "nav-link" }, "a")), h("li", { key: 'ee63e23d696d335bc9af35a20e63c2d84bb933d5', class: "nav-item" }, h("a", { key: 'c441727ec8e2b4e5e60fc40122114f7103e90dd7', href: "#", class: "nav-link" }, "b")), h("li", { key: 'd1f4938da2c1f0ecdbb083aa6988c34f4d6bce53', class: "nav-item" }, h("a", { key: 'a707053a4973a3a79a3e8b56c269634f6bdbd249', href: "#", class: "nav-link" }, "c")), h("li", { key: '41c7aaa4e2ce2215ada4278876d73bf78f4769cf', class: "nav-item" }, h("a", { key: '55dd7e7a0ee44b1399292eb4f204414f319f9cee', href: "#", class: "nav-link" }, "d")), h("li", { key: 'c67d4d28752fbd04be561bb93b7007ffb630a6fe', class: "nav-item" }, h("div", { key: '086432b0f439edd21cffdc3fb133de850921f911', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'bd4ab7fccdb234bc71253290620a79f41a34c890', notificationCount: this.notificationCount }))))), h("div", { key: 'a52574106560cf03c5839047474006927eddc839', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '380c0dc828f9169e0c401261fbaf2632d12cd288', class: "mobile-menu-header" }, h("div", { key: 'dba651d2e1b2472d9458d798fd5c55d9810d75d5', class: "hotel-name" }, "Hotel Name"), h("button", { key: '7d13bc404dd5bb87d52891599a38d4ce3f3cf3a4', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'bdd41e468ba30be2a119f91e548dcbec1598f6ad', class: "mobile-search" }, h("ir-m-combobox", { key: '78f67b0de0844b42b842e82fcd97bcc0430a4783', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ul", { key: '878fbbf201b22b9169eac0fd248ccd0bb8b024e4', class: "mobile-nav-items" }, h("li", { key: '96a79c82849e691e7f9aea064f3c36b7e8247fbd', class: "mobile-nav-item" }, h("a", { key: 'b3360f30947602196dcbefd12f556b19753d4c3d', href: "#", class: "mobile-nav-link" }, "a")), h("li", { key: 'b087980eab121c0b148cb388227c6a7f802f9ab6', class: "mobile-nav-item" }, h("a", { key: '0f980d3e4e29bffaaf18d4c1bdade6eeb21a4d6d', href: "#", class: "mobile-nav-link" }, "b")), h("li", { key: '65c7a7c0c7a3a7c18de1896289b05bdf564c370c', class: "mobile-nav-item" }, h("a", { key: '5d1b27fa1e0d939a3e2ef339100f67a726db641c', href: "#", class: "mobile-nav-link" }, "c")), h("li", { key: 'e4edd3f1348541e853f48c46abc5162e98a8a7d5', class: "mobile-nav-item" }, h("a", { key: 'be989401fab8e824f8b61ebbe95cbe3a3f122dcb', href: "#", class: "mobile-nav-link" }, "d"))), h("ac-pages-menu", { key: '23be50d8af2d37bbf25a000e2bd154c0e94aa9f7', location: "sheet", pages: this.pages }))), h("div", { key: '94c7b59084a531e8daa7814f9cffcb09226c5da4', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'dece12bf085dc41b95cad9329e39a0d7978532d6', pages: this.pages }))), h("section", { key: 'c693a67297e8981c77270b94bedc7291c8b42e1e', class: "p-2" }, h("div", { key: 'eeabdea6df04ae9c2f055e78b405177b6f194161', class: "row g-3" }, h("div", { key: '29bb8e60d0fea73cac1ece088f47e54580bed7a5', class: "col-md-3" }, h("h5", { key: 'edd811f6320b6caa952fc5450635185be8619740' }, "Static Options Example"), h("ir-m-combobox", { key: '6f44c21954591e2599a2641c5fbb344433a6efa8', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }), this.selectedStaticOption && h("p", { key: 'bd0389bb01e0827915f0e6e132c713ab14274046', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '3f7890026588bc628b571ff3859980dc91c8ba0e', class: "col-md-3" }, h("h5", { key: '695cb085c77bd60e7ff66ef7bb62ee3f72444318' }, "External API - Countries"), h("ir-m-combobox", { key: '9991aea6bd7040bc03ee0417d045df094d22bf5b', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '58fa2e18c2cc67c1faaac1fdffca3671b67b8dad', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '5108b9db133ec3c846f3b59c99631883b09030b3', class: "col-md-3" }, h("h5", { key: '4511fd495758658e0ae457109729a92c5af6e0c4' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '4c92bad8a0949032dd7a22e3ede9aa84e97d1a20', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: 'b91d43aeabb893fbf5b82b9d8ecb0fcd596c9bfe', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '8023c01c0fa02530cafdd885a0b820719433e801', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '8178d8d31f477a20520d8087ef41f14726bd9f6f', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '346a8118725613b24df68a1f69e99ed7ce3fa6da', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '02b18777ec3768dc270d883227a5b3336ba8dac2', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '08388a27a78432ad6ba99ddc9f7234fec9444942', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'a83d873a44a03cab2012940f207fa6b3585ddeaf', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")))));
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