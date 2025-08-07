import { r as registerInstance, h, H as Host } from './index-60982d00.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0;color:white !important}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer;color:white !important}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}.hotel-name.sc-ir-test-cmp{display:none !important}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.d-none.sc-ir-test-cmp{display:none !important}.d-md-none.sc-ir-test-cmp{display:block !important}.d-md-block.sc-ir-test-cmp{display:none !important}.d-md-flex.sc-ir-test-cmp{display:none !important}@media (min-width: 768px){.d-md-none.sc-ir-test-cmp{display:none !important}.d-md-block.sc-ir-test-cmp{display:block !important}.d-md-flex.sc-ir-test-cmp{display:flex !important}}";
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
        return (h(Host, { key: 'a987eceba392e1635f50b18242c3fb371a0f8e9a' }, h("nav", { key: '1bca348600d837f5496a937d58dde24f39cf0a53', class: "modern-navbar" }, h("span", { key: '51578adfddb9f831d3ffe68ce4e31bd23971f7ad', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'ada649ed83b7fa793b644c21b112c1cd989f3eb7', class: "navbar-container" }, h("div", { key: 'b1fe22110db5404a75e302b11387a9ba0a9c5f2c', class: "navbar-left" }, h("button", { key: 'b70b42b23219e22dd9ad6be103f011ddaf47865e', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '3067f7d9745b5934c315369754c45311f05be712', class: "hamburger-icon" }, h("span", { key: '5cf4b072092557a6eb28e3369243dec1fcd2ddb6' }), h("span", { key: '1e76980fbd0490b43005f8d0ba6ea6636e6b572d' }), h("span", { key: '11ed934d5a8d855f15774a3130fc4e83b324c45b' }))), h("div", { key: '4e9711a0813a1c02b85348acdda308eefb5192ce', class: "navbar-brand" }, "Logo"), h("div", { key: 'a5df1f18596662029ba501847b24d389ac680244', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '0ece69ddf823427659ac79abc1024d75bc36c76f', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'd7f193500d21c0863468ea1fd219f19faa1ff21c', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'e2e2031695e417e49dd97f976b1d1389410e6d94', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '97a5daf436823710d3d52997af3aed76e46ba0f1', notificationCount: this.notificationCount }))), h("div", { key: '7db5e7f8ebcbf1d368fa25e3a2807740f64a4a98', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'b6f1fcf4731b3981690775df675ec877baec0a67', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '039cac3af120202c1096182e022952332718d48c', class: "navbar-right" }, h("ul", { key: 'e4e646c0bd0a011250b03cd4093a0d99024de1e6', class: "nav-items d-none d-md-flex" }, h("li", { key: '5d78ea60fc151efb37152b13ea4485dd22d25080', class: "nav-item" }, h("a", { key: 'cd66d74650c7def1bd628949236cf11b22a196cf', href: "#", class: "nav-link" }, "a")), h("li", { key: '37df70052020fd1b9d9d0e2cb92dd31d9fb83a00', class: "nav-item" }, h("a", { key: 'f55296b366fbf436e0fc8b9b6963d4056ee37436', href: "#", class: "nav-link" }, "b")), h("li", { key: '278ee10521019e1d8009ccda6c27ba38ea284ba7', class: "nav-item" }, h("a", { key: '547073923fcf392b1031c8181bec212bcf2d631b', href: "#", class: "nav-link" }, "c")), h("li", { key: '8e00c215a2da5f05a30c3dc569892f2375ac170d', class: "nav-item" }, h("a", { key: '1f0c064732a86a1ba2e5c9ada31b4f600c9f118a', href: "#", class: "nav-link" }, "d")), h("li", { key: '63774ecb8b02e8b6b29807201a38ac88d6e11e87', class: "nav-item" }, h("div", { key: '712a621fa0bd2244f4d2bff5a31016ab85e38a49', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '97ace1f297b0df6cc41794f314d078be0bbf2e75', notificationCount: this.notificationCount }))))), h("div", { key: '566673f17a281f273e1b38bb2b4ee25818d5d274', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '1ca5bf17d75148488e341925f566122ef45380d5', class: "mobile-menu-header" }, h("div", { key: 'a377a12fff2dba8e8f3476e3f69a5bad75e7340d', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'd42e45fc49f0171ec9f1c0234837a4731b52983a', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'ebd0fefe703f37762ce1dd372bf04b8dd758b0bc', class: "mobile-search" }, h("ir-m-combobox", { key: '46f8e560f827e154e583ba5d42e5b19a82d27bb1', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ul", { key: 'ff080ae4c34b2a2a5a6782adbb6c18de3e1f56a8', class: "mobile-nav-items" }, h("li", { key: '4ce41b2bcd19194c3a507a8cf8d60f7849506e5c', class: "mobile-nav-item" }, h("a", { key: '62b5eab17c2c2ffd9ed4e03fb3e8b181acb1e1d4', href: "#", class: "mobile-nav-link" }, "a")), h("li", { key: '7ff54e43f93014642a4962f6bcc577f65839735e', class: "mobile-nav-item" }, h("a", { key: '7ef92406517d1fa2cc38f05cdc1bdf2625e05249', href: "#", class: "mobile-nav-link" }, "b")), h("li", { key: '56d507c174c81813b384751334c5f69c7ae526bf', class: "mobile-nav-item" }, h("a", { key: '0c293aa2f6389f03be0b1491410b2ea544c2a590', href: "#", class: "mobile-nav-link" }, "c")), h("li", { key: '86416dd92c3bf5a5c012b126fa89ece1f2d704e8', class: "mobile-nav-item" }, h("a", { key: '9c7346c67d5b26fd24693c4dd4644252dbf7f7b0', href: "#", class: "mobile-nav-link" }, "d"))), h("ac-pages-menu", { key: '45cda0a099b7deb5a0886eb3dbadc1c8a3130ae4', location: "sheet", pages: this.pages }))), h("div", { key: '64526ca3baaaf2b8b5c3dec46c1d6277d313ebef', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '73d695b7166ec5d82f1cf4701d5161eca935f45c', pages: this.pages }))), h("section", { key: 'a7c2e394ac0624b00cc62ca1b578b036456fdafe', class: "p-2" }, h("div", { key: '0519e61b7de792ffa69dfff6d572c5499acbcb07', class: "row g-3" }, h("div", { key: '370145249df18b28c001cf25cb0123714350a1da', class: "col-md-3" }, h("h5", { key: '80ea31d01a6e912165ffe88cf4e2b2cbaed909f8' }, "Static Options Example"), h("ir-m-combobox", { key: '3f5f1203150ebd7448298c73e464fc74465122be', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }), this.selectedStaticOption && h("p", { key: 'bfe6e60dd85d93dbd000ba7a0ae099fea1c416b9', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '0b3eae7402c99722b76a45266fa1cd7388d519c3', class: "col-md-3" }, h("h5", { key: '9b00cc9b0f6301cd47a205a30a8cc9c5b205ca58' }, "External API - Countries"), h("ir-m-combobox", { key: 'a6e07eeeffd90761ab85664590f8ec08f007b821', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '2e0338fde0a62d62408b5274e5d5ab8bd80239d1', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: '1d39ec8fedee89c030b23c24c13766a509855af4', class: "col-md-3" }, h("h5", { key: 'c102f3298fb0a07da2ab557dc2530a43cde5996b' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '9e6ece05968b03ba0ca7858b374412d8a3685d78', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '4f7097e82281592be57866b00002493224a1e0ec', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'cbcb6acede41f879401ba6b188c52b8497d32567', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '1129384e3619642c12be75b02c2117b8a123038d', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'b3916b89fe21d4120e949810b9de7640d5e8c95c', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '0a8b70a642710c82fe59ad30f94896665d23924e', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '690b17f91d2056cdcb60ea4d6e5991cf3afc4d3e', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'b0b6cca3e517371b99062316d22dd9062c7da2de', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")))));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

export { IrTestCmp as ir_test_cmp };

//# sourceMappingURL=ir-test-cmp.entry.js.map