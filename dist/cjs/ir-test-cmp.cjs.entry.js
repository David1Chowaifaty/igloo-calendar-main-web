'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const utils = require('./utils-54f6f6b7.js');
const icons = require('./icons-b526f0f2.js');
require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./calendar-data-0598de26.js');
require('./index-fbf1fe1d.js');
require('./locales.store-32782582.js');

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}.menu-footer.sc-ir-test-cmp{display:flex;flex-direction:column;box-sizing:border-box;width:100%;text-align:start}.menu-footer.sc-ir-test-cmp h4.sc-ir-test-cmp{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '5db772b3182b0dee647ff3831103a229d587ae08' }, index.h("nav", { key: 'd05952009411a44e0338fd3521492dae7039c604', class: "modern-navbar" }, index.h("span", { key: 'a5a52fd02134775ccb53e819d404fd14fc0384db', class: "overdue-banner" }, "Overdue $300"), index.h("div", { key: 'b63625ba4abef9ffc9d6f7ef87d9e8328afdaae4', class: "navbar-container" }, index.h("div", { key: '3d90b792d34a72fcdaddfab9bab03ef9370e5023', class: "navbar-left" }, index.h("button", { key: 'ea528c25f13c96c023f6cdb895974117736d3c6b', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, index.h("span", { key: 'b1aa977163d4255a508d34f464d083c850b0487b', class: "hamburger-icon" }, index.h("span", { key: '5ad7a1a118c2530377d46de76ff7f1f56c831ab5' }), index.h("span", { key: '8647664f740a71897e1d877e3cece8b377b38115' }), index.h("span", { key: '3809cd0f8166a102b9d92fd067f1300cf8ed0c87' }))), index.h("div", { key: '24d10993615801ff673f65dea21da47cde5cd420', class: "navbar-brand" }, "Logo"), index.h("div", { key: '9685cda29c079f4112e0ded0d3122e2cea75ef36', class: "d-none d-md-flex " }, index.h("ir-m-combobox", { key: '10cf4da984c8c5a08969f2d0041581158363b5d6', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: 'f871971cd710fc4d4ba7023c9aefe3924d1fac2e', class: "hotel-name d-none d-md-block" }, "Hotel Name"), index.h("div", { key: '365fc94c60dbb4670f726bdb22c80f5066eb9756', class: "ml-auto d-md-none" }, index.h("ir-notifications", { key: '02e763b38c4e9544714f2ebe14176cdefd3f3212', notifications: this.notifications }))), index.h("div", { key: '183c1b5e018145731508db230903f3f4983cefb4', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, index.h("ir-m-combobox", { key: 'c920c4d641ef6e2e84de4ed5bcbc6df2907fef80', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '984b733c935425bb1647db47008bf545decf13ed', class: "navbar-right" }, index.h("ul", { key: 'abb23228d6a2900e66502152cfe76623474b9d14', class: "nav-items d-none d-md-flex" }, index.h("li", { key: '21cb4cf9ff8514faed3be5f9e2ddb4ad18bd8590', class: "nav-item dropdown" }, index.h("a", { key: 'e3860aad96d7c8347055ac4368b110997d06bc46', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), index.h("ul", { key: '8b300636184e3cab97525619b6ff2510b67dc10c', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, index.h("li", { key: '4f22c3f13c83280175069b41fa57e4fbe62b1910' }, index.h("ul", { key: '23dfc55973a9918b4af21cb57e785f68d0455b46', class: "ir-mega-menu-column" }, index.h("li", { key: '34e859bf6af5ec0b5e46c29370c2450577c21af1', class: "ir-mega-menu-row title" }, "Parameters"), index.h("li", { key: 'ac27cdf199d8cbfbb4a4e592e91050bc24542b1f', class: "ir-mega-menu-row" }, index.h("a", { key: '677b53c7d3d2146107b903032c169809f551fb15', href: "userinline.aspx" }, "Users List")), index.h("li", { key: '5fccbc46373127f534edc6c1542b696a6147c776', class: "ir-mega-menu-row" }, index.h("a", { key: 'b30529a525b200a6073c4205114fbedcacf5ae1c', href: "languageinline.aspx" }, "System Languages")), index.h("li", { key: '2f171301fc839081074f9e057eb07220ffa6f01f', class: "ir-mega-menu-row" }, index.h("a", { key: 'ef35b42f4c3019c042769762de54b743955e81e8', href: "countryinline.aspx" }, "Countries")), index.h("li", { key: '55475e7e5cb76a1e572a75c4ff135a5674d5ccf7', class: "ir-mega-menu-row" }, index.h("a", { key: '9e9aa553a68fff724bd4e20a7078be3eb61107ca', href: "level2inline.aspx" }, "Country Level 2")), index.h("li", { key: '2b79f202c666e08c5e25854eb9ed9d3b5f1a8f22', class: "ir-mega-menu-row" }, index.h("a", { key: '7f02e784afa88f816f88e686aa72e83bdb0c0c9f', href: "cardinline.aspx" }, "Credit Cards")), index.h("li", { key: '39bab55f8abd07bb4a7a1a1e9b1b2f8443fdc738', class: "ir-mega-menu-row" }, index.h("a", { key: '291e307fbf2c03eb1836ef161a00147c9d21799e', href: "hotel_chaininline.aspx" }, "Hotel Chains")), index.h("li", { key: '4190f56e041992622fcea6417a3490bf19c78be7', class: "ir-mega-menu-row" }, index.h("a", { key: '814bf4852f0d70fd6c9af836ad8f18efeb934c7e', href: "currencyinline.aspx" }, "Currencies")), index.h("li", { key: '98cd92ff2d2a0e7aa3b1c20d2bd9605e375e7675', class: "ir-mega-menu-row" }, index.h("a", { key: '623c56ae3dcabfd31d5fd049331695dfbad53119', href: "amenityinline.aspx" }, "Amenities")), index.h("li", { key: '96b1d7b28d592bb0f012bcf01ad792494b75a0a4', class: "ir-mega-menu-row" }, index.h("a", { key: 'ad3028c4362dbc59304d6b4bb600b5cb2bded721', href: "foodinline.aspx" }, "Food")), index.h("li", { key: '5c5eb2b4019d1229170558a668bf9d0629efc1b3', class: "ir-mega-menu-row" }, index.h("a", { key: 'e8dc9e129ae8055bbfaf46e542fbf5bd49f65038', href: "beddinginline.aspx" }, "Bedding")), index.h("li", { key: '47987d4adf38735bd3b0df285a76cb33059e7b68', class: "ir-mega-menu-row" }, index.h("a", { key: '35e71858b87219047736700cea9b630c959688cf', href: "setupinline.aspx" }, "Setup Table")), index.h("li", { key: 'fafc35e4d29e91a3cc78968ef4e3f6ef97d5ebf3', class: "ir-mega-menu-row" }, index.h("a", { key: '1146f5847e8b172994fbfaf2ecd92c5ace99beb1', href: "gwedit.aspx" }, "Payment Gateways")), index.h("li", { key: '296c91eb300fb6690b4e4b4d481a4fba479fbe9b', class: "ir-mega-menu-row" }, index.h("a", { key: 'e7f4f250e1a1a3933cbaf1f8a459d33180527280', href: "channelmanager.aspx" }, "Channel Manager")))), index.h("li", { key: '84ea459e68f8eefea8c5086d1101636bf081ca3a' }, index.h("ul", { key: '8d357cd5a87c3c5cd73ac9d3752a20f23ead0046', class: "ir-mega-menu-column" }, index.h("li", { key: '9ddad1b190027c728b66bf8c61aa5e2efac2932c', class: "ir-mega-menu-row title" }, "Main"), index.h("li", { key: 'eb2b155ec7d169cec477b316ca2c7d770c4b4799', class: "ir-mega-menu-row" }, index.h("a", { key: '8649a54d2575b660ac4c1d77d86107890acd4a64', href: "mpolist.aspx" }, "MPOs")), index.h("li", { key: 'fa8a57b1abf0463eebf964a943204b77eff2ad4b', class: "ir-mega-menu-row" }, index.h("a", { key: '0e35b5355d9b6a32c2037c9fe0ea49e014be7fd8', href: "aclist.aspx" }, "Properties")), index.h("li", { key: 'b7d313b272a120183bbe335f18a6a226f8b0bd74', class: "ir-mega-menu-row" }, index.h("a", { key: '66db0e928b95b8c4921164e2ba21616e3a36e88f', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), index.h("li", { key: '46cdd0e04bb5b4da995339fa6d1ff290e480a87c', class: "ir-mega-menu-row" }, index.h("a", { key: '06c5633eb4fdde8bac52e040a68b602dae696f6a', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), index.h("li", { key: '7a5c452ebea31ff70a94a80c6c944f11d1edb733', class: "ir-mega-menu-row" }, index.h("a", { key: '8b17c9b265c22408c5e71d021d14bdba0881afb3', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), index.h("li", { key: 'df6d27667497b5f87f181902808e6090ee230c2c', class: "ir-mega-menu-row" }, index.h("a", { key: '6c451887a88cc54d1e9c0f39b1c277ff2ec98e0a', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), index.h("li", { key: '49d9e611839737d57433c85093baeb468fb2ea8d', class: "ir-mega-menu-row" }, index.h("a", { key: '08ffb37774116204fd74daa3f4f212f46ee1e9b9', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), index.h("li", { key: '382afb0808acb7a07fdc9fcfb8b84e055099d014', class: "ir-mega-menu-row" }, index.h("a", { key: '08a3b3eceb6c8983fc4c11344221a6183564fb1f', href: "mpobillingreport.aspx" }, "MPO Billing Report")), index.h("li", { key: 'a9c75243d85c15ac13a5be916ae936149dd9a2ba', class: "ir-mega-menu-row" }, index.h("a", { key: '022091027999c5a05d35b25ce8f46ee6a4a0bb27', href: "Acmemberlist.aspx" }, "Guests")), index.h("li", { key: '8c6ae676b1df5aaac11c468ae2e52c517a0eec3b', class: "ir-mega-menu-row" }, index.h("a", { key: '0d985bd0c904f0bf74abf63a3fc017b25146a050', href: "acbookinglist.aspx" }, "Bookings")), index.h("li", { key: 'c0354bc41b17a6966c581108eee2b12f7cc08fec', class: "ir-mega-menu-row" }, index.h("a", { key: '1c9f7dafe6652421c31cddb16bfbe4230b78e292', href: "billing.aspx" }, "Billing")))), index.h("li", { key: '778df9540c2a852c520bdfaeb48bb243e80ab451' }, index.h("ul", { key: '4707eb0c9cbe4183629948efd44f25ee3721fc53', class: "ir-mega-menu-column" }, index.h("li", { key: '09b2886be556c61a2fa514bd49f30dc1fe9e5277', class: "ir-mega-menu-row title" }, "Locations"), index.h("li", { key: '47e86b23a63df767d8f6cc372afbf14ae07bbd1b', class: "ir-mega-menu-row" }, index.h("a", { key: 'a263aa3f42195b5bac07d7489cfdcefdf064bba7', href: "poicategoriesinline.aspx" }, "Types")), index.h("li", { key: 'df9e317d70f0f24b6b781eae28ca9d498a51aa84', class: "ir-mega-menu-row" }, index.h("a", { key: 'e6b0ab178dc590fe0d56518fdc1c80eff648b362', href: "poilist.aspx" }, "List")))), index.h("li", { key: '0fc273aa15089a0d629614d1ef52cf69b67205eb' }, index.h("ul", { key: 'b980649fae45a01c3d8dc58586aaffca21c48ffa', class: "ir-mega-menu-column" }, index.h("li", { key: '06964fb87833d00d7fdc50006b70711a624f9ed5', class: "ir-mega-menu-row title" }, "Referrers"), index.h("li", { key: '08c79e07d84dddf0deb475e824c370273c3fa47f', class: "ir-mega-menu-row" }, index.h("a", { key: '789277ee5e796f770a3d514217804806fc1396ed', href: "affiliatelist.aspx" }, "Affiliates")), index.h("li", { key: '4c5d4acdce4c37ff5fa3824e60745e40418fd971', class: "ir-mega-menu-row" }, index.h("a", { key: '1c52000a8950b6b523d908865c75410e4c40acf9', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), index.h("li", { key: '704f0b14a89103cca11cdfd21aeeb7233fee5a11', class: "nav-item" }, index.h("a", { key: 'a9c42b2674cf8fd014b11121538ca8fc18deac2b', href: "#", class: "nav-link" }, "b")), index.h("li", { key: '96a25e33397b919b0a32100babbe17d262dd4c3d', class: "nav-item" }, index.h("a", { key: '3932b57a9c5f850221015f106b6277ddb582e84c', href: "#", class: "nav-link" }, "c")), index.h("li", { key: '13b558620b72158945b89c118bdc09ec05465186', class: "nav-item" }, index.h("a", { key: 'a0ea903a5c8d3f1ec36437060cca1a60b9527e92', href: "#", class: "nav-link" }, "d")), index.h("li", { key: '22c6af7f6425a4bdd9f6903cbe65068599ad4258', class: "nav-item" }, index.h("div", { key: 'ae172b16551ecadc0cc597315ff4e667e3cf5365', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, index.h("ir-notifications", { key: '121900e58abb6f60dc16561073df5ac38aa841db', notifications: this.notifications }))))), index.h("div", { key: '3d4d8de0a90ff066eac15900d49d070faff78833', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, index.h("div", { key: '4b9823bba8b965f83cd4a7f3171b3fa5dce6dc2c', class: "mobile-menu-header" }, index.h("div", { key: '793214c46b8119f797d467f98d8d26bef8963d37', class: "hotel-name" }, "Hotel Name"), index.h("button", { key: '155a9a93d3ff01c791b90a78541b46c1f9304ffe', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), index.h("div", { key: 'f473dae0ce05d744e97aee55a7ed640ec22240b1', class: "mobile-search" }, index.h("ir-m-combobox", { key: '14701ccf122cecfbc2653e83c1fdccb2fe157260', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("ac-pages-menu", { key: '59dfac0e2b77ef44d623e05f5cf040151782610a', location: "sheet", "onLink-clicked": async (e) => {
                await utils.sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), index.h("div", { key: '20c7bb7f0b50a4b3a5e0311ae515163d45cab14f', class: "submenus d-none d-md-block" }, index.h("ac-pages-menu", { key: '5ebc3ce7b78479e21a0537b552ba99260af0f140', pages: this.pages }))), index.h("section", { key: 'daf644c0eb751ed76f631f97f6ad996e0c8b4651', class: "p-2" }, index.h("div", { key: 'b91e4367d17029532f436dbaeb5fc446439d8b64', class: "row g-3" }, index.h("div", { key: '10a10e30941b8c15fdbbd0cb289e231a381d6788', class: "col-md-3" }, index.h("h5", { key: '4b451b48732e3fdeca6b40a097eec5529120ac9e' }, "Static Options Example"), index.h("ir-m-combobox", { key: 'e04c7969a171c51cddcff3d9d755793d0b702b7d', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, index.h("svg", { key: 'cdcfb1529544a16f48962e573632c8cbf64401f7', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: 'ab0dd64e6c1b2c4c8244ca4f82e14c4ecbb024b6', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && index.h("p", { key: 'feb593e03ffcb5139d151601e90d6a3ea130b4e1', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), index.h("div", { key: '74875fbb4ce9fabbb14b9cd08d7e6994847a5b76', class: "col-md-3" }, index.h("h5", { key: '6aad6c6f197d6e8111f51c5df78627b36a35d441' }, "External API - Countries"), index.h("ir-m-combobox", { key: '49a66dd193d08be80be60ed145142c6b19a427d3', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && index.h("p", { key: '420e4740248f7deb4b0dcea1f18e8feed4f623fd', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), index.h("div", { key: 'ae915fcd1870bc3e8e6d87fce39e4994a77a7dfd', class: "col-md-3" }, index.h("h5", { key: '9a48da5971de61dfdd21fe3306611ecabf15a288' }, "Custom Dropdown Content"), index.h("ir-m-combobox", { key: '61b602e4186c6a028e722f38fa0d8ab8f2add0c2', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, index.h("div", { key: '2ab1658cabf1168d1f1759e09ee1be6307b65894', slot: "dropdown-content" }, this.isLoadingCustom && index.h("div", { key: '703b1437263383d3447884ad8c7b1ee572cdf52b', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && index.h("div", { key: '0db19092f506de82211119727d2351f583262791', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index$1) => (index.h("div", { key: index$1, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, index.h("span", { class: "me-2" }, "\u2B50"), index.h("div", null, index.h("div", { class: "fw-bold" }, option.label), index.h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && index.h("p", { key: '1fe21a429e66578d593b4bb75248f4d77726d5a5', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), index.h("div", { key: '4038e9c87d64f20764db94b83939a0a11abb441e', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, index.h("button", { key: '7d7bc49071caad8460b1a2abe6e82dc53339fa71', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), index.h("button", { key: '50a96ae19132cfe08c23e181f867da184ec13499', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), index.h("ir-input-text", { key: 'd729318460f865b39bd37ee6e4d99cf4e7e00302', variant: "floating-label", class: "my-text-input", label: "First name" }, index.h("svg", { key: 'ba4e43d9c63d40e78d001f3b35f3bb27c1807479', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: 'bdcd5df9a909154e1e5ea9742ce2e506e89326f3', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), index.h("svg", { key: 'bf10e2abd12fb7cef25716fa9147939a0da96862', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { key: 'cc1ad2b412eb33fdedcd63c2b2c78e447b2c6684', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), index.h("ir-select", { key: 'c7101f8e1319f429a22ee751e62e7ad03e32ed96', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: '92e2f9963f3abe7939e26a99dc9a92b931135769', class: "my-2" }), index.h("ir-select", { key: '300c33f4c9144bf06f2cb2a19b51cf8ec27729d9', label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: 'b802c55f3fe29106c721d9534f8f1585f29e0c9b', class: "my-2" }), index.h("ir-select", { key: '1e4b9d3558629a70e076502301790034ff75bc4a', data: [{ value: '1', text: '1' }] }), index.h("div", { key: '62a00a4d5cd155c6b9c2c6056e9c1972a0c9d793', class: "card p-1" }, [
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
        ].map(row => (index.h("div", { key: row.id, class: 'payment-item' }, index.h("div", { class: "payment-body" }, index.h("div", { class: "payment-fields" }, index.h("p", null, index.h("b", null, row.cause)), index.h("p", { class: "text-muted" }, row.date)), row.reference && (index.h("p", { class: "payment-reference text-muted" }, index.h("b", null, "Ref: "), row?.reference))), index.h("div", { class: "d-flex align-items-center justify-content-between", style: { gap: '0.5rem' } }, index.h("p", { class: `payment-amount ${row.type === 'Credit' ? 'is-credit' : 'is-debit'}` }, row.type === 'Credit' ? '+' : '-', "$US ", row.amount), index.h("div", { class: "payment-actions" }, index.h("ir-button", { variant: "icon", icon_name: "save", style: icons.colorVariants.secondary }), index.h("ir-button", { variant: "icon", style: icons.colorVariants.danger, icon_name: "trash" }))))))))));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

exports.ir_test_cmp = IrTestCmp;

//# sourceMappingURL=ir-test-cmp.cjs.entry.js.map