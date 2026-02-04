import { r as registerInstance, h, H as Host } from './index-7e96440e.js';
import { x as sleep } from './utils-a9a216b5.js';
import { c as colorVariants } from './icons-5bea2cc2.js';
import './moment-ab846cee.js';
import './calendar-data-2ae53dc9.js';
import './index-f100e9d2.js';
import './locales.store-cb784e95.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}.menu-footer.sc-ir-test-cmp{display:flex;flex-direction:column;box-sizing:border-box;width:100%;text-align:start}.menu-footer.sc-ir-test-cmp h4.sc-ir-test-cmp{font-family:var(--wa-font-family-heading);font-weight:var(--wa-font-weight-heading);line-height:var(--wa-line-height-condensed);text-wrap:balance;font-size:var(--wa-font-size-m)}";
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
    // private notifications = [
    //   {
    //     id: '1',
    //     type: 'info',
    //     title: 'Welcome!',
    //     message: 'Your account has been created successfully.',
    //     createdAt: Date.now(),
    //     read: false,
    //     dismissible: true,
    //   },
    //   {
    //     id: '2',
    //     type: 'warning',
    //     title: 'Storage Almost Full',
    //     message: 'You have used 90% of your storage. Please upgrade.',
    //     createdAt: Date.now(),
    //     read: false,
    //     dismissible: true,
    //     link: { href: '#', text: 'Upgrade now' },
    //   },
    //   {
    //     id: '3',
    //     type: 'success',
    //     title: 'Payment Received',
    //     message: 'Your invoice has been paid. Thank you!',
    //     createdAt: Date.now(),
    //     read: true,
    //     dismissible: true,
    //   },
    // ];
    showMegaMenu;
    render() {
        return (h(Host, { key: '0faa0d2c3649fbb57703912b492f8fbdc114baed' }, h("nav", { key: '41838b950b47607609d725b55e78965f54b4bbb9', class: "modern-navbar" }, h("span", { key: 'c0d5a3cfaebc5474c0353a8d8e65b4256505afcc', class: "overdue-banner" }, "Overdue $300"), h("div", { key: 'd0002557bc9ba58aef5897d1287a3d9d4d2a286f', class: "navbar-container" }, h("div", { key: '52c59fbd71d4125265278fb29c9711b3a32e8a60', class: "navbar-left" }, h("button", { key: '59dfd108ef1a0941a89eb2515842c8e01200fac5', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '2aadea69be471fdb5c7fa1b22fc7b77d3e4ffd54', class: "hamburger-icon" }, h("span", { key: 'b78ec3e300bf35d8b576c453be087cad495a28d0' }), h("span", { key: '8d923b9bbee8a3b3c3df38094214c0a9664f76fe' }), h("span", { key: '2a9e2db01ee45e52d219c40aad488eb6df9f6831' }))), h("div", { key: '183c6cbcf4d478862d1afa7e2845636b22804c5d', class: "navbar-brand" }, "Logo"), h("div", { key: '0d55d5a38dcfb7b2c212eecb97b3fa80326acca8', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: 'f3a713e0efa3d3709c3583f5b002aaa0bac4a0bd', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '66cdcf56135f3263c6cb5a430b078e0c45813717', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '58359b6f323443b8eda9acf7b33566d339809d4e', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '6b7e01f7ed52bddf8147a5b18df11599cfb50fa5' }))), h("div", { key: 'dfbd8095fb9c2ef790803bad0e997236a45c0bbc', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'e6865f064cae238041156c9f77521ec1646f25c7', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '857b241c3b447dde680301299bec03f2230f8ef6', class: "navbar-right" }, h("ul", { key: '835519bd7f9160166fd41841ad60105f5deb3a4d', class: "nav-items d-none d-md-flex" }, h("li", { key: '70bb04d4875a32eed37b25417cb6e40f9f0546ef', class: "nav-item dropdown" }, h("a", { key: 'e1169fd1053cb3b9ee0b119e169c5080191721ca', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '0771f948193c7ce2f597a7664e3d3120241d96dd', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'd9559278a0b23cbec6c408160217b052b243ab53' }, h("ul", { key: '2e7f06457ef69b58d7b4e3ae082bfef573816923', class: "ir-mega-menu-column" }, h("li", { key: 'dc818643097dd908ce62604d51c9810e81d3342d', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '952aa1117370167162bd72355788ef9e88c5c727', class: "ir-mega-menu-row" }, h("a", { key: 'f5d795a15065aca22f85a012bdf0473b7f304e00', href: "userinline.aspx" }, "Users List")), h("li", { key: '596139184f1273f1c2d91581614dd49fe250e306', class: "ir-mega-menu-row" }, h("a", { key: 'a4ccb58f40c480e757e5de502715823f51e39a81', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'efeba05c15a38bc6417690e322705180f65744a6', class: "ir-mega-menu-row" }, h("a", { key: '35d284ef1cf1e2149f415e75895d3bf691316c26', href: "countryinline.aspx" }, "Countries")), h("li", { key: '523c9f558c2cd13788803d2e83135860f7487c95', class: "ir-mega-menu-row" }, h("a", { key: 'cbe69234fdfcec8b7b1ecdb81011551e30cd31a1', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '1340d6e2f8bac600dd3a07bbd1c56639ef1db2f7', class: "ir-mega-menu-row" }, h("a", { key: '1bda634b71a87ad7ca71c32376d989edf4324c7e', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '3cac6a9e4cb3086c3b03ed5c9670dd0058571d9c', class: "ir-mega-menu-row" }, h("a", { key: 'ef14fa0cf421610c201e32ec8f654c18bc17b2a0', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'ea1138db55af9f7407f391a9b8dce07f7be350fa', class: "ir-mega-menu-row" }, h("a", { key: 'ad8664e318d4d62d9d9cf8cc3ca66fc5282ca4f0', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'c507e6ff65600acb9374de7cb668be83b726cccf', class: "ir-mega-menu-row" }, h("a", { key: 'dcd23b0bc1c5252c1d85ab31a822523bd89eba36', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '2a238d2bf2ce5da11f0368ab0a9f5272eb43d550', class: "ir-mega-menu-row" }, h("a", { key: '714c345c853681e4e2ad6c213986277204306884', href: "foodinline.aspx" }, "Food")), h("li", { key: '7f88abdae6751556ddbedcaabba5e68522d8692c', class: "ir-mega-menu-row" }, h("a", { key: 'db2715b07b7caec32e9aaeca6233a017d1be1c95', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: '32890c2c5fa09f152677389c893e1afc1dae0c04', class: "ir-mega-menu-row" }, h("a", { key: '1059c4c65ca60686a0444f97a2c4f91a622aad8c', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '0e4f5b23af30d6a9d868aef7a90522a0a59f19be', class: "ir-mega-menu-row" }, h("a", { key: 'd6811a5ea1043254b998d1d25c41279612bad4e7', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '48fd9ff6001440f4c06313f3945855c2b2b38ce4', class: "ir-mega-menu-row" }, h("a", { key: 'f3d09d5aa947177838597027d049a01ee93d0f91', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'a96315e3bd92a416931e650a7fec3a26defc06a5' }, h("ul", { key: '77db5f620415e8e8ed533c22fb6da2ef3da5741f', class: "ir-mega-menu-column" }, h("li", { key: '32ac2dbf9073dcb01e2a0c9a50dfeab317ceee8b', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'a5c264607115565cb73e890344ab99531e900e13', class: "ir-mega-menu-row" }, h("a", { key: '2b101d958f174d7044e8b6892403fec4b77dbea1', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '400e77b8115fd3381eb1139c707fbf582549d02a', class: "ir-mega-menu-row" }, h("a", { key: '243e44b14271183361df0462aa48b9471d89ce44', href: "aclist.aspx" }, "Properties")), h("li", { key: '9e059542ce7037ab10cc88110648df812a6c4e6d', class: "ir-mega-menu-row" }, h("a", { key: 'c2beb27a06029b70822baf4a9b09f3559a1a4b23', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: 'c2a2e889112136b6bac62ae90b53c050348eef92', class: "ir-mega-menu-row" }, h("a", { key: '9a404238a88e004c4b73a7b2bc8f65b56bff832c', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: 'dc111ac1c0719e26e3307e6be10b89fafb478e0c', class: "ir-mega-menu-row" }, h("a", { key: '774e5e2395c9bb34ccbe91089a7967043ea6e1c8', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '09fd2e2d32fbaa9819c3083e79a3005454d739f6', class: "ir-mega-menu-row" }, h("a", { key: 'f39b24cb7f724dab76f4a5ff41ecb59f4fb3ebc9', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '55632547161bbb4e88c37438e2989730aa1d3532', class: "ir-mega-menu-row" }, h("a", { key: 'cb972b870469a18151208610001904e904ef0358', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '2cb54a1cca321990e571bbba1707fd0c1144c09c', class: "ir-mega-menu-row" }, h("a", { key: 'badd42b25209ca27ad38441bd6d2e006c7fa91d5', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'c2d394d7e8110cab8d3ae9dbcec7fa5e9e7fb610', class: "ir-mega-menu-row" }, h("a", { key: 'c3b1e7c21bc2e8e1b13d20a526353f435ac596ec', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: 'd13c4c27d54ca3a2b3eff56b68655bdcf21cdd90', class: "ir-mega-menu-row" }, h("a", { key: '7c8d1661345818272addad27f4c25952dacd1573', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '4829d13a7028b73748acbab461c413db7300783e', class: "ir-mega-menu-row" }, h("a", { key: 'c194d0f7e77baea8d67afa9781082fca7f7a59be', href: "billing.aspx" }, "Billing")))), h("li", { key: 'c11de59e481f1cb6295fc59e2ddc5268cdba8fb8' }, h("ul", { key: 'bf64b678707c0237281d9aa76aab287968fe84e6', class: "ir-mega-menu-column" }, h("li", { key: 'bd1e369d66f621d093b34e0c63bf9ab09dc48787', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '2eb42ebebb5d3f91512d0f69c0ca58e22d78c410', class: "ir-mega-menu-row" }, h("a", { key: '86f7b7eb8fa1e1a8d0226df65ea2bfbb54ac828a', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '4680a89786caff9c94853d3f5fdc302fe2ced30d', class: "ir-mega-menu-row" }, h("a", { key: '43de4051326404fbc16e836efcaa8f6390cc61b0', href: "poilist.aspx" }, "List")))), h("li", { key: '928e75111155b6be57e9374c1031c4cc0eb11687' }, h("ul", { key: '91469d3d8b3d7ac35efc1299ac2dd49574175fab', class: "ir-mega-menu-column" }, h("li", { key: '41823f4047dec94dc4d72bc098e58eea3d7200fb', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: 'a3abe3c2d9d1d5178c4586975fb0ae025a6a0c4e', class: "ir-mega-menu-row" }, h("a", { key: '0ffa0331c0c65bf577901a5c39f22933c9319bf6', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: 'a79f8a790a063a65b11bb91aacdf2f74c086241a', class: "ir-mega-menu-row" }, h("a", { key: '35c1fdd0ac52a9e504e50f6aab6bf26727b19210', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '454bb48743f61facb4278abaa3e4b58e44c7dac3', class: "nav-item" }, h("a", { key: '70c9f5e1f3a356ab97f7a829c5580cd0bb77edaf', href: "#", class: "nav-link" }, "b")), h("li", { key: 'c0a944f63a8eda7a82d6106a4a3c7ded8f722826', class: "nav-item" }, h("a", { key: '1bfe5686645d78722d124387e0352450d508a1d7', href: "#", class: "nav-link" }, "c")), h("li", { key: 'a02f66b40e3b56988d6d99a0ae4bfa71b004f0a1', class: "nav-item" }, h("a", { key: 'e3b0a6ffcc8fafe8af865dc518cd455a0608ef8e', href: "#", class: "nav-link" }, "d")), h("li", { key: '5f8a5dee2b10b6fdddc0c465c14329c29915acf7', class: "nav-item" }, h("div", { key: 'e0e5d9b1e0dce717d3af8dae83dfe0c5d4c746e0', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '1be0c06e8fc0820ba1c582e60e627522ec7dd824' }))))), h("div", { key: '8b98a1b587de1d10bb108f58a11790f6f4d5e2b9', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'ed6d1a3c5804ad6009ff76298bfb29fa54b79c13', class: "mobile-menu-header" }, h("div", { key: '22041bafdd07821cc66db0dae5f231eee7906e73', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'd3dd8a9a90dc9a6f4d3478e9f1f24876a2d964c8', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: 'f76c74ae88fcd01165a7bb4343c78342e84021c5', class: "mobile-search" }, h("ir-m-combobox", { key: '25c23c2eb0f9449f89a2c3851aeca864e9e0797d', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '3f67bac245a68f39846803a9ce86630471d3be51', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '74171f6779e6c8bf8819057ba33ec38cf13c29d2', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '1ac90919f3cab14bac901ae9d93a34362f3a82a2', pages: this.pages }))), h("section", { key: '7d189049e5bb7aa58940efd6bbac436c7ba089be', class: "p-2" }, h("div", { key: '477ecaa33e0e2ea51ee6d74f4b3298ba1097b8e9', class: "row g-3" }, h("div", { key: 'e9261c094b734a7816cb83d47f66e2c2982280c8', class: "col-md-3" }, h("h5", { key: '94b66b41553c889eb0a227bb385d24e47ff4668f' }, "Static Options Example"), h("ir-m-combobox", { key: '37c657f814520791f3930883d835b1067c925d24', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'ec0e9ede9648751cdcdeab1a9db65bef49681ac4', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '2f889289c6bad1fc395c5e32d03dbd9c2c0dff17', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '3b9629393e48ecf36113ac2ac9a626c067381351', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'f68b9d42713772293113e7040d82daab1c690657', class: "col-md-3" }, h("h5", { key: 'c5dc91c12b64f0f8ac3e8c196ce3fb76250be344' }, "External API - Countries"), h("ir-m-combobox", { key: '10d13c8458866f2313e6d01bc9b354a0f40373d0', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: 'dfbaa2a9ea8b42d45b008067971eb6f6f9439c05', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'debaa10b76e56b81963ee789b6f54df96490479a', class: "col-md-3" }, h("h5", { key: 'a93f0ed54db512fe071ae6d29579249872c28a0f' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '63f6e12001ad9f4943160d9131349bca14a7fb2e', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '3e412fe410eb8eccf9880a37d8772d56aa8d7d86', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '73b8cc3e82a61491a7b8f82d01c27aa1c636103a', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: '71325adf968e05133c95835d8ebd0f89776ed6c8', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'f590790223f4e162dfe0a1dba7f96e23c28de6d6', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '9bc1518123e3fe3e8ee8a1158160d77bc5dc9da6', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '2376c54a6a0d40bc7e1ff49e619e8984b34c5cec', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '237988a2a0ce38a1ae7201851bafb16f49962abf', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'dee27fe231649e54fd7b356d906c06628c5fc1f2', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'fbe5e7b8d558d29511e920a7e7e368cf2063dec3', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'eda409e2ca108580fb24cbccc73d41132a862d22', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '7dbc5ee63953dfe4976d9591ce6c8d414828a688', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '9602fbaf36fd47f82c719bca737da930ffd45138', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '8fb6e040cf4c0f367c965bc81b4c513413644892', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '927c45a453550eb499a06cb0405a57351ff2c210', class: "my-2" }), h("ir-select", { key: 'bf6626ccf290c672a52fba1c51b413efc060732a', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'e131356f2d5a28cdb9480e3e1ba2c29988685407', class: "my-2" }), h("ir-select", { key: '8ed6503e63023d02ba481de950b7ecab8622160d', data: [{ value: '1', text: '1' }] }), h("div", { key: '671d41e400d89da30e5f9b85e2f41938911e22ab', class: "card p-1" }, [
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