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
        return (h(Host, { key: '8ba08c54d2f7370655ab885518a2bdd4b53ca9e7' }, h("nav", { key: 'c40c6f9ebe52b935d214f7ea687e509152d318bb', class: "modern-navbar" }, h("span", { key: 'aa0c2e9f29738fb8afa1cc699681921889cbd976', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '725a8021f693b5a311ca7c4880967c0236cd2bb0', class: "navbar-container" }, h("div", { key: '90eaf1757b7625636269a02c3c911cea85198b3b', class: "navbar-left" }, h("button", { key: 'c4e2ecdbe62fed7dd19fba07b15ddecf503e2d07', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '8f5e4c0d1f639414804d6ac005fba606df6a7ec2', class: "hamburger-icon" }, h("span", { key: 'd792b35b05c5a43dbf6d6f560e081b46e70528ab' }), h("span", { key: '47e902e2ae83d460197226abbfd4b571b77ed4a5' }), h("span", { key: '29e65d7d760bf8437dd2b12273806d0dfef4f765' }))), h("div", { key: '90b4c1e69393d7087d551f5fc2adf20972cd7007', class: "navbar-brand" }, "Logo"), h("div", { key: '96226995b61e5b873930a26753da1a682054779d', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'fc2c0ece753f63c59d81e54c669f47289bf2e685', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '3ed9df20c2a003a74ca6304f46f6604fe77105e7', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '2294ae0c2eb625f5a62d4af38d4bebc696d0ef5c', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'd3f36c037a82102dc9600143fab7cd5c0b6027da', notificationCount: this.notificationCount }))), h("div", { key: 'b9d63d33dd3cdb7f21dc15c66a7255a1c9a16788', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'e4858f7258987872cbf3852e2068a3bf15ae743d', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'bc2aee35c77122cf6188073160454adc9d020d46', class: "navbar-right" }, h("ul", { key: 'e48fadbe7d3e3b6d945e10a5eb381944eba86d80', class: "nav-items d-none d-md-flex" }, h("li", { key: '6096b4932365fb3bc6b7cd777686992e6148d274', class: "nav-item" }, h("a", { key: '1d33a218e7dfa63d158a14271e85cb49cdcd9653', href: "#", class: "nav-link" }, "a")), h("li", { key: '8983f04f7c46ad5329c53f0bafc05821b3698532', class: "nav-item" }, h("a", { key: 'efab94ce58db387d2aa3f815777f724076f8f522', href: "#", class: "nav-link" }, "b")), h("li", { key: '865cc86a6559e15e96212a27e5cc075554a80248', class: "nav-item" }, h("a", { key: '08b9c974985f7577bf28c78df00d1c272227401f', href: "#", class: "nav-link" }, "c")), h("li", { key: 'b5e018ad4221ba7f07d9270b7c7028d9e2e9180b', class: "nav-item" }, h("a", { key: '7bb21ef0b82ffa6e0011737ae9c36291ce94dc61', href: "#", class: "nav-link" }, "d")), h("li", { key: 'e306d422031781dbbeaa57be6022cc048c02187b', class: "nav-item" }, h("div", { key: 'cb7a2f2e2c66af6e4f59ff1ccf11b7e7e28e9eb5', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '603dcc0aa8759fe20b2f0c1583191867ea956799', notificationCount: this.notificationCount }))))), h("div", { key: '531d86f643cbfb56db073bc3fa9bedc564763940', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '093cb37ad3b34d0d6aeb59dd3ff617de7b4acb9e', class: "mobile-menu-header" }, h("div", { key: '4871b1a698b7709cd37aac4838852ea7991750d0', class: "hotel-name" }, "Hotel Name"), h("button", { key: '87582adf6d992d5ef7997ec369e952426df9cf30', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'c56434afb36b3ce2fe5bc207a7e1f036df94c225', class: "mobile-search" }, h("ir-m-combobox", { key: '09a219a141bbad63e30504573a0556646b0b6685', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '67f179851b3fb328a4cec2591a9558bc85a51227', location: "sheet", pages: this.pages }))), h("div", { key: 'b65849cdb0bcf82f595d565ced1c727883314401', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '92d87e8288127aebadfb27a8e5ac37e095617116', pages: this.pages }))), h("section", { key: 'dee5b6da0a8ebd7a7cea56018e9b9dc34422051a', class: "p-2" }, h("div", { key: '5bd8c01b8518e3e0b4b6f29221610d7e3fe93e96', class: "row g-3" }, h("div", { key: '1517e21c9fa8102f0066ab9bbb6ecc7419aed2e2', class: "col-md-3" }, h("h5", { key: 'a25d3a2eae0c097e2ac47a44a0c290ff351df7e5' }, "Static Options Example"), h("ir-m-combobox", { key: '216e13a8b4bce7c7927f96846f86ddcddb1ade3d', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }), this.selectedStaticOption && h("p", { key: 'c471897ab30e1d62ca9dca0f28585d130e1ddafc', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '9f5bda0b4f92c4b8ea383ef02d8e5bc92f2d875b', class: "col-md-3" }, h("h5", { key: '6ba6ed5b7f77c27d8d3d24ec6773e4660da2b8f0' }, "External API - Countries"), h("ir-m-combobox", { key: '2064f9a352999f613db9e8c07dedc0c09fd4403b', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '1d1a68ae855266d61499165a6ee9420aaee47fca', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '8d9241f3d57a4883fac0b4f4e4a5e3632a6d65f1', class: "col-md-3" }, h("h5", { key: '727b57e376f5cecb90da43460694ab2168e09164' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '31b13b4d661038d62789a220d1a3c47a59bc0e96', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '0e7103485cd6b22f8737209e4a4bddb8feff6d24', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '7e196b0b31e88a8553a33b22c9202db8ba8e3c6b', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'fa4f287ad4e95d7efb86b3967a659364c6b35016', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '907aecc376a020ce2eb7ca32f18faae54e79bd4e', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'cbd092ca79f554c3c9ac12ded77b3cae32daa586', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '116ea431bbeb6caf26d7f67411e5a044f6439ca3', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '1e18b35ddb173838bc5c271cbf7940599e14fb52', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")))));
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