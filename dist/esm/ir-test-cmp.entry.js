import { r as registerInstance, h, H as Host } from './index-b3dce66a.js';
import { s as sleep } from './utils-bb2f2deb.js';
import { c as colorVariants } from './icons-5bea2cc2.js';
import './moment-ab846cee.js';
import './index-6ecc32cd.js';
import './calendar-data-8a36a1b2.js';
import './index-a124d225.js';
import './locales.store-f4150353.js';
import './axios-aa1335b8.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    dates;
    selectedStaticOption;
    selectedCountry;
    selectedCustomOption;
    countryOptions = [];
    customOptions = [];
    isLoadingCountries = false;
    isLoadingCustom = false;
    customComboboxRef;
    staticOptions = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3 ajnajanjanjna janajnjanjan najnajnajn ajnaj' },
        { value: 'option4', label: 'Option 4' },
        { value: 'option5', label: 'Option 5' },
    ];
    handleStaticOptionChange = (event) => {
        this.selectedStaticOption = event.detail;
    };
    handleCountryChange = (event) => {
        this.selectedCountry = event.detail;
    };
    handleCustomOptionChange = (event) => {
        this.selectedCustomOption = event.detail;
    };
    handleCountrySearch = async (event) => {
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
    handleCustomSearch = async (event) => {
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
    handleCustomOptionClick = (option) => {
        if (this.customComboboxRef) {
            this.customComboboxRef.selectOptionFromSlot(option);
        }
    };
    notificationCount = 0;
    isMobileMenuOpen = false;
    toggleMobileMenu = () => {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    };
    pages = [
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
    notifications = [
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
    showMegaMenu;
    render() {
        return (h(Host, { key: '6edaf6598ae72c3622e2ba64ae590a43f4f0cda9' }, h("nav", { key: '2a6eaf56db2026c211693f8588d138ea27cbadae', class: "modern-navbar" }, h("span", { key: '30b3d108737c3c9cf9eb46994d1e4b4eea5faa35', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '13ffc0c44156af5a64ff5b21c5c3963e456b3812', class: "navbar-container" }, h("div", { key: 'a04da4e5fe32c379a85fd277e1aa3cb41141c322', class: "navbar-left" }, h("button", { key: '915b3f09262d982f6a3686f16720533ba24984a7', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '648085acc7376bdd011ab070cffa5c8a6c1977b9', class: "hamburger-icon" }, h("span", { key: 'bdba034f8112f3962b03433969906968f4e554ec' }), h("span", { key: '7a4a28624d4d84af3c6c51416e0c259352aec155' }), h("span", { key: '8e88ae6c8361459b00f557dff5db476951da56f2' }))), h("div", { key: 'f63b66691bca983abd311b0a27317b0ee2b5fea9', class: "navbar-brand" }, "Logo"), h("div", { key: '63672e34c2ab681f4f2f0791fc4a0b5bd8cd1229', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '45a48d785d5d9f6a3f211ac31e06fe4b7844f669', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'e3d96573736a47e2fb30fcfd2bf947bd9fbc272f', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '26028bebe4919d151c63cfaf9a8b5c047860f26e', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '2df4142e0d49056a4412b551883bfc34a38082cf', notifications: this.notifications }))), h("div", { key: '078ef15642002c2b94a3902f90704cb02c0b5657', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '374ccc6d2f91e5ba042773b3f4aea1e27adf3372', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '04546ad339bcab1b88bfa75511b39335c5f55015', class: "navbar-right" }, h("ul", { key: '3624618248a87c9ea994bdc25d6755176a0f7083', class: "nav-items d-none d-md-flex" }, h("li", { key: '0bc689418c11baa21c7c855ed8e49b3c9252becf', class: "nav-item dropdown" }, h("a", { key: 'badf236ee5ab50b1a564309b8bba84fb847bde2f', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'a9e080b34c61d97c6a650f120dc12ff79b2b024c', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'ff462be933d80b2810746d9e4691e64294a219d5' }, h("ul", { key: '2b2c1b245a8e0e2dc07e27cce9c262374f552db6', class: "ir-mega-menu-column" }, h("li", { key: '117f54bb2bf7ade8e34808c80f3a0e9d85b409f1', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'f3730d54c920173ea4433474e7987ff57bea25e7', class: "ir-mega-menu-row" }, h("a", { key: '92d94fa58f8f7e662a67ff0d641cb20cb3698f66', href: "userinline.aspx" }, "Users List")), h("li", { key: '617a6bb93c42d3c884d7db0450b3d64b1025a81a', class: "ir-mega-menu-row" }, h("a", { key: '4996a32bd2ba90933dc4b74bff3b89fc72bb79f2', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '7b6dae04a927b0658890136c4bf1060d515c9444', class: "ir-mega-menu-row" }, h("a", { key: '8e876ad0f5b097cd6224f1e9ddb2ca686eee95e4', href: "countryinline.aspx" }, "Countries")), h("li", { key: '3a7b3419ba342ffd505a391d336cd19a8e38f7ad', class: "ir-mega-menu-row" }, h("a", { key: '6a22a272313ab4855f145bd344613ad5eeb394f0', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'c8a38e8e1031b383ce2fcbd2ab35d0d08b5a6bce', class: "ir-mega-menu-row" }, h("a", { key: '08306160650d2f93d4991228d849e8dda2af85ed', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'd914117aa35279352c0e7169bc327d8a2bf3888f', class: "ir-mega-menu-row" }, h("a", { key: 'c46bc382d7c649abc67d0850ceee7bc5aec09a44', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '8a6f44fa4341e9f39a8307025d58216e05ee4d64', class: "ir-mega-menu-row" }, h("a", { key: 'e1b114a03a939b1e3420555b2e79e0f3f5a649ed', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '179c052d280df7354b4c1e3b215ac23f3e6b6054', class: "ir-mega-menu-row" }, h("a", { key: 'a0852841b5bee64918ea287b1e47cfe9f22506c2', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '88db57b74a7b93ea172eb88307b8159e8866f335', class: "ir-mega-menu-row" }, h("a", { key: '63aafede72872fc8f5dbe744cca23fbc9917ef76', href: "foodinline.aspx" }, "Food")), h("li", { key: '2ad78a4238ba388b43a24ce399f50ad316353fed', class: "ir-mega-menu-row" }, h("a", { key: '3d33aaf9765d33a73c0f00618341cf2e94c1b6c4', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '08aa33b58411249d6dfdb207a6ca2e2f6b82e78d', class: "ir-mega-menu-row" }, h("a", { key: 'c07130d289c3a86b95ecc041324f01b02ba55b4c', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '6a8ae0462dea854e2290273564306898a20bc85a', class: "ir-mega-menu-row" }, h("a", { key: '23505e4173c0979cb59b65081b61c6b38fa3e6e5', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '8bf393c3ed19929bb6649292ac12fc7ed9afc69e', class: "ir-mega-menu-row" }, h("a", { key: 'e3f904712afa0330dbfd947493e6be3fedfba612', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '1bcf23a751d7bdde3b5e416ff11f67a3325731f0' }, h("ul", { key: '6c45af7dd37dfa97b3202e8a797524db5c6ace21', class: "ir-mega-menu-column" }, h("li", { key: 'f7f583f6c7f58c9ee18e2d06d9c6ad67ad507d84', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'f9f42c60de338a78a43afd16fc90fe845a94d811', class: "ir-mega-menu-row" }, h("a", { key: 'b9990f51c6eade87487de0fe0a40c5961eb16a88', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '0a422986aeafc7ee37d736b00f22e0df9bb6d3b2', class: "ir-mega-menu-row" }, h("a", { key: 'e6b30b37083b3774e3feb3994f61262730e566f5', href: "aclist.aspx" }, "Properties")), h("li", { key: '6f04fca88b191665c00b786a1d13402e5a4f98fb', class: "ir-mega-menu-row" }, h("a", { key: 'c56a9634e9340ed87da8016763822a0fb4a9eb99', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'a62410c74262838ee69e9aacc29ac9fea305ee60', class: "ir-mega-menu-row" }, h("a", { key: '7224acafe9c2733094daa07e64d432ce9b307e3d', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'bce8b7a78230ceb3b11742fb30172483a5e694e4', class: "ir-mega-menu-row" }, h("a", { key: '851b7265b2ce338e0e1eb5a8244f1d3d8282dfde', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '15824583fdcc600eb1ed117a00e3c05fbdb629ca', class: "ir-mega-menu-row" }, h("a", { key: '5423ac10f01622c908cf92ee58e54a226a197f11', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '9246f6327c7063f2626b852c608d94ae199581f7', class: "ir-mega-menu-row" }, h("a", { key: '25ad6bb8c56f4abad1734b8fc100d214802ba40c', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '7561256a42ac1cff099eb50de7ca63a7092f1984', class: "ir-mega-menu-row" }, h("a", { key: '656c83797365a43597adbaa2ba7c76ccd28d1b88', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'b5cd5b9555d3923964f9a6d37198a3dc083d22f1', class: "ir-mega-menu-row" }, h("a", { key: 'af6be6a3311d18c921b80fb8247d14e0c424cfe4', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'bc0d62814371dddb4656de031d7431978757fa9b', class: "ir-mega-menu-row" }, h("a", { key: '923522e019d84dd2586172981d033ad65746a0b2', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '6cb4ed1e8bb9baa22dd0da4c7c2048c34507f866', class: "ir-mega-menu-row" }, h("a", { key: '8f5965a5c92323a08a0cf8240eb7fe7001cd34a0', href: "billing.aspx" }, "Billing")))), h("li", { key: '3c25a44c53b7af3225a9108ab3b3612b1b464308' }, h("ul", { key: 'e1b5b9439b1ef57f251271af36b76369a36b6f58', class: "ir-mega-menu-column" }, h("li", { key: '18ee90c0976eed00f23703642052853cdca39379', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: 'bdda60250a27c006259f412bb2702908f95e5442', class: "ir-mega-menu-row" }, h("a", { key: '6e9f5eefcce0b7bca44ed60e149bc8d8d62b3de4', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '6aa12127a01973f85520188a7b8d0d3db877184f', class: "ir-mega-menu-row" }, h("a", { key: '559653157ff4dac2a548cd472edb6d75a4da2b06', href: "poilist.aspx" }, "List")))), h("li", { key: '55199c74aee7b53614e7997252d458a89feb2bad' }, h("ul", { key: 'd28d9a4eb38c364d870e3285466cb4c5e3741d61', class: "ir-mega-menu-column" }, h("li", { key: '7dfdf8fcb732ce336885bb3e606547a462ab22a6', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'e656ee447e194840e913838a2bf90a5834fd124f', class: "ir-mega-menu-row" }, h("a", { key: '1183a674037a7a5c813bc2b0ad462748224fba34', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '2c3e8418d777f69f11365a1f86c4491ceeba204a', class: "ir-mega-menu-row" }, h("a", { key: '264a27acc71fd8dfea6f1a4b7912d51533afa003', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '3f2cfc809bd756ec1a9e7bf0543a8bd28a464629', class: "nav-item" }, h("a", { key: 'cbed8bfa4898d89aaff962d9229e6f968219d05d', href: "#", class: "nav-link" }, "b")), h("li", { key: '86d389aec649250c1442c605c7a9f3b120cf5dbf', class: "nav-item" }, h("a", { key: '621e315d4ac37f6d835065f54eb565b05290ba2e', href: "#", class: "nav-link" }, "c")), h("li", { key: '39c06a682479ddc49ec98d951355bb578097ff46', class: "nav-item" }, h("a", { key: '9df64e21e7d5bd7eb9d37ef771d65504c34d3f2f', href: "#", class: "nav-link" }, "d")), h("li", { key: '1b60123cebe3c1d6ca1e8e552e381e75d87aa88c', class: "nav-item" }, h("div", { key: '881face5fd89388aff496026c6d0b10660953d97', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '04ffa6834da94bbcea03a7087cc08db807c9e784', notifications: this.notifications }))))), h("div", { key: 'bf70226c783a0804fadd426036c94ae2f74c5324', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'bc69b739c32f5710c2eef9caa07dae7703e63d9a', class: "mobile-menu-header" }, h("div", { key: '42c70165951b6dcc6e591aa88091290282a60daa', class: "hotel-name" }, "Hotel Name"), h("button", { key: '94e9a0633519199050d7f6133e41a2c8aa63e0ca', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'faf8fa17b2e0c00817d1624114aed9dc9ce782b8', class: "mobile-search" }, h("ir-m-combobox", { key: '96b075f565b4ed75e4c3dc3d380ae9cd9deec502', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'f34b4580f035af3e858b8fe0fafdb74aea2ad41b', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'b29877d60fdd4a2fa5c9aca64ffcf036fd68b018', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '207576655386c363d14c8719551a8055b8d8a549', pages: this.pages }))), h("section", { key: '3f6c49a39c7767199d903602c14580a9f34c474c', class: "p-2" }, h("div", { key: '167ab8d88625731fcf78cf6ab2b555920dd123c4', class: "row g-3" }, h("div", { key: '365e5d7c8d20ea9393922450099e36a817a9eb48', class: "col-md-3" }, h("h5", { key: 'a2f6a9718add3c7788e8151f818cfdec62ee7a87' }, "Static Options Example"), h("ir-m-combobox", { key: 'a6626cfb486ea8a3f3ac8502ddb0b3f2bf13b2e3', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '7a59fe20ec58f1f4e6e2fad9387ce104c15cde69', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '792b45539ac07755fd82d967dd132c59b85f17aa', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '2224d1ccab2d55f833c1bb07a5246cda958fbf6e', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '81a66d6975acc37b60f0a4b6bdfb782165452e2a', class: "col-md-3" }, h("h5", { key: '7d8ace875b91136ceae3002e492c021b4155709b' }, "External API - Countries"), h("ir-m-combobox", { key: '9c6b81ea6179e4e06d465f4a36ba8f248fba4f4c', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '3a5ee6e007d5a3d70b735dfc87d82e09007240bf', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'fe99aac4dd84fab7df1237794cf8614fa71c884b', class: "col-md-3" }, h("h5", { key: 'a90bebcb678c86853eab679ddb96003872795dd4' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '6688a5982fda9fd2b10f0788842490f37cb7f2ae', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '59d7e06adc72f3803bdffb4e9140157d46d223cf', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '9a45e2bf7dabf586ccb6252eb96b2bde31bf4109', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'bebb23228cf8cf5f660d2d0ffbe0a46618423f8c', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: '0d9092028e7beecf3cb9aaf5061b3b3de9822111', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: 'a0eddf6245ceac4c6792bc8a532e8c394171c443', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '53a168e9010d2f523842bf176450bd614721c402', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'e9a5b70ed9ddd7053e8a9c3ccbc70dca0b669e24', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'd349e24073f80d36904b989e8a951ee2198143a1', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '6b176cd2dde20f6a3a11e9a6bd6b359e5483f479', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'ba5107b2f9035a60703258f6dfda4658fc03382d', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '1cd60c142674b358fdba36d6332fd49c11956dd2', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: 'b6bbb67dee7caf474a03bd0e639df8b90d60d312', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'b5129c520c99c39afdb4ec97d1649c1803dede48', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '3a059080d79f39f58168b651ee3104a04dd3be37', class: "my-2" }), h("ir-select", { key: '85ccc8f5640f99e4ed7f418f0ea208152953fc4e', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '11807f4253788e0d5e73207f3d2f98fcb778e8ed', class: "my-2" }), h("ir-select", { key: 'bfddd1eb1dccf8bec05ea6e35396633e4e32a8c2', data: [{ value: '1', text: '1' }] }), h("div", { key: '528fb3eecb68d2669ebba8a13f1bd30887f0532e', class: "card p-1" }, [
            { id: 'REQ1000', cause: 'Reservation deposit', amount: 363.02, type: 'Credit', date: '2025-08-12', reference: 'INV-2025-0812-001' },
            { id: 'REQ1001', cause: 'Housekeeping fee', amount: 355.45, type: 'Debit', date: '2025-08-16' },
            { id: 'REQ1002', cause: 'Mini-bar', amount: 360.49, type: 'Debit', date: '2025-08-08', reference: 'RM120-MB-8842' },
            { id: 'REQ1003', cause: 'Refund – canceled tour', amount: 294.34, type: 'Credit', date: '2025-08-16' },
            { id: 'REQ1004', cause: 'Late checkout', amount: 80.97, type: 'Credit', date: '2025-08-04', reference: 'CHKO-2025-0804' },
            { id: 'REQ1005', cause: 'Airport pickup', amount: 346.6, type: 'Credit', date: '2025-08-17' },
            { id: 'REQ1006', cause: 'Room service', amount: 430.52, type: 'Credit', date: '2025-08-05', reference: 'RSV-7421' },
            { id: 'REQ1007', cause: 'City tax', amount: 89.39, type: 'Credit', date: '2025-08-09' },
            { id: 'REQ1008', cause: 'Laundry', amount: 49.93, type: 'Credit', date: '2025-07-30', reference: 'LND-20541' },
            { id: 'REQ1009', cause: 'Spa treatment', amount: 469.32, type: 'Credit', date: '2025-08-13' },
        ].map(row => (h("div", { key: row.id, class: 'payment-item' }, h("div", { class: "payment-body" }, h("div", { class: "payment-fields" }, h("p", null, h("b", null, row.cause)), h("p", { class: "text-muted" }, row.date)), row.reference && (h("p", { class: "payment-reference text-muted" }, h("b", null, "Ref: "), row?.reference))), h("div", { class: "d-flex align-items-center justify-content-between", style: { gap: '0.5rem' } }, h("p", { class: `payment-amount ${row.type === 'Credit' ? 'is-credit' : 'is-debit'}` }, row.type === 'Credit' ? '+' : '-', "$US ", row.amount), h("div", { class: "payment-actions" }, h("ir-button", { variant: "icon", icon_name: "save", style: colorVariants.secondary }), h("ir-button", { variant: "icon", style: colorVariants.danger, icon_name: "trash" }))))))))));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

export { IrTestCmp as ir_test_cmp };

//# sourceMappingURL=ir-test-cmp.entry.js.map