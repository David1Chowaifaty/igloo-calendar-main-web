import { r as registerInstance, h, H as Host } from './index-7e96440e.js';
import { y as sleep } from './utils-f0b70a36.js';
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
        return (h(Host, { key: '4b8f8be70dfcc917b1194e12fce85bdecc282401' }, h("nav", { key: 'd51236d57081504e59753012a0ba9fd57f32017d', class: "modern-navbar" }, h("span", { key: '250e25814c83bf9405a2e78d632348190a9f6229', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '81f7a05562229c0bcecba3b13e6add3f494dc9fd', class: "navbar-container" }, h("div", { key: '508af63a2710d27503e60cda7bef8d60c666011e', class: "navbar-left" }, h("button", { key: '4cb576773fcb1ea86033af1eeb04d9136cac85b8', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: '0535e0c597a0a784688e3e2b01b6475debec97c1', class: "hamburger-icon" }, h("span", { key: '5c6d6f0396162c3c13eda446a8326fd227f615a9' }), h("span", { key: '65cd281ebe80a949a29536a153ce967164f6c010' }), h("span", { key: '61f7d41ef882286dd462b4ea8186b6ab844fea75' }))), h("div", { key: '8e4dd314018a2c2c8c5647b3ecb32fcbe0a120b7', class: "navbar-brand" }, "Logo"), h("div", { key: '0ef968497a5270da50500c45c7a44b0c9b74c38b', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '4a99161c8baf2df9f22cc6535b7e48b3ef2d3479', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '339c81e9f8bffd70bea9f334f6dc834843704264', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'db91519e6b77de562c0fc760ef51221f3d52c6a0', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '223d4598d82893b4f0fd5dfa6f5361c433c5d43d' }))), h("div", { key: 'ea64e77ae00dae12af8494d958a65f05ec8898a6', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: '2c54a8bbf8df1628d9b779e6a7c1bd05bdfba80b', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '15845a8f895e32e5d600adbb54bc710b0640d0dc', class: "navbar-right" }, h("ul", { key: '2fd3e41e578cfe3556bac6baa16f2feb51797a88', class: "nav-items d-none d-md-flex" }, h("li", { key: '45da7f022106bc8941825248220e730e3d5c49ef', class: "nav-item dropdown" }, h("a", { key: 'c0927dabb1874f938a7bfae5b97c29304631d115', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'f480f9128cc8fd4207c26e5cdcefde838f8d9065', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '17576878460c83a2d9b050aefaa725f564fb6ed4' }, h("ul", { key: 'eada09688bed02684d10b47324d5b14e0c351078', class: "ir-mega-menu-column" }, h("li", { key: '2db5d490605d819bc6614226cc968b37b6be23fd', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '5c5d76e97ec11fe0de07a60710e1a5fa3fdc5345', class: "ir-mega-menu-row" }, h("a", { key: 'd3090814207592f579d43881fa0a4c20b7017d50', href: "userinline.aspx" }, "Users List")), h("li", { key: '3a10024eb94e8b2351525fb80de2631611002cb8', class: "ir-mega-menu-row" }, h("a", { key: '9a7c572bcaed957e6856bee74646041bcb08758e', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '5d70778a45b151b0119120af9d938cb36937d2d3', class: "ir-mega-menu-row" }, h("a", { key: '45af30d029176bb30fff3420b10aba19f5417ca9', href: "countryinline.aspx" }, "Countries")), h("li", { key: '6eab0737cea9b537303223ea9fb948197bba9b12', class: "ir-mega-menu-row" }, h("a", { key: '94863d6ea01c662792588df319b1d2a0fcb6e4ca', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: '477154fa315bf6ed0ad20636fe8c8cd25e2d058a', class: "ir-mega-menu-row" }, h("a", { key: 'e7f25c1a254ef43496bba4202efdb0182abfc506', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '52961c393298f1385c71eef1bfd4cd28efb25af0', class: "ir-mega-menu-row" }, h("a", { key: 'af1b1a34929c273bac3b4869469420efefee0afb', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'a93d07f805daa34d3534b70e905f113f1762aadf', class: "ir-mega-menu-row" }, h("a", { key: '7457b7f7208e3c975529be44eef9869c4abcc2f7', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: '00f3ae2545d8f4d28af25de401fd9956d5c0b0bd', class: "ir-mega-menu-row" }, h("a", { key: '427876a218f1a19931615468314d2293033364ba', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: 'e2b990b5de6ed1dc110fd424b31874c9a7b40827', class: "ir-mega-menu-row" }, h("a", { key: '12ed2e012d2037858fb32eaf119e25cf2df98d52', href: "foodinline.aspx" }, "Food")), h("li", { key: '9ba3f09cda930b8356851acc628f78395577e503', class: "ir-mega-menu-row" }, h("a", { key: '4c74fc7abc160b1f07f6ce1a950aaa3bd7f3f50b', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'a9584226bf81261d0328d37a3dac15cde2741198', class: "ir-mega-menu-row" }, h("a", { key: '800e45fa668f729dbc5ec25a490704f0ed5d9ffa', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '5843662549eedd22e62751e9194b956bffae5b1f', class: "ir-mega-menu-row" }, h("a", { key: '36542b314cf2281fc20f26bc29f614e0c8d484d4', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '9c5e21a889b60c9e9e395f881f7ede41f569aade', class: "ir-mega-menu-row" }, h("a", { key: '364107b4d1c32c58884d66979f72e0cdd80f4b63', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '824d284182e089adca8e89356cc029c2cb651625' }, h("ul", { key: '0d3833d27340f6dcb0d98c8bb93f29adf252dc10', class: "ir-mega-menu-column" }, h("li", { key: '7af232594a7fc9790f0c5b4e3da7b7f50070137f', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'f822e1e2ccfc65f861a4e650af2544438cb74590', class: "ir-mega-menu-row" }, h("a", { key: 'bc5655b2d1578b1abe3f03ee195ef33bb8b3ef87', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '78c333f8e1deea67f1935b7878c5d5450993894e', class: "ir-mega-menu-row" }, h("a", { key: 'b6c9aab9dbfd071989b78e905cb2f25a4504d806', href: "aclist.aspx" }, "Properties")), h("li", { key: '071e9984ba64d4417d17eae318780ed9759674f9', class: "ir-mega-menu-row" }, h("a", { key: '1899a6cc6695167a50058d583f86f5f461051df3', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '533e5b5115af423556b7217559163437dc9746a0', class: "ir-mega-menu-row" }, h("a", { key: '4cc4fbfd6bc05b77010e0ee26803ded317d74f29', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '3c1607ca1d97e41e252f966676269ad4763b58cb', class: "ir-mega-menu-row" }, h("a", { key: '3c941b7124cb43b940fb6ca0022fb08a3d71f3a7', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '2bd710e94d69e9b5955a005c25c0d4601ae720b0', class: "ir-mega-menu-row" }, h("a", { key: 'f29c518ba9fccf6b1e6dd36e7b29ba2aefb052af', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '8c6a3cedd356b7029e0c12cbf16fb464cd4f3bcf', class: "ir-mega-menu-row" }, h("a", { key: 'a0bd73cb172278e06d51ed2955739cb6b70f95f3', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '5e7939bb1bbe4b78874335343dfc7bdc1f40d227', class: "ir-mega-menu-row" }, h("a", { key: '7acc523b2158eb40f6540f67e7239a2b91df1364', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: 'f19acbc04a3d517dc1721e031d4d91535956edab', class: "ir-mega-menu-row" }, h("a", { key: '8edf61097eb9466277791f258bde2336865e268b', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '21fe1f066196349ce9823887067aee0eb164e241', class: "ir-mega-menu-row" }, h("a", { key: '216300ce2153ec1e32a7b5d5c510ac50c812a27c', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'dcdff34c7e0160bcb6a18a90b1ce052c9035a216', class: "ir-mega-menu-row" }, h("a", { key: '9d40722f79325571b0464e7bb355982f0bf1c4c5', href: "billing.aspx" }, "Billing")))), h("li", { key: '40ca9ec89d232f51047096f8314a1abac3067a04' }, h("ul", { key: '1dd55f14d138c2ff0012c507e05b8703f32ec9fc', class: "ir-mega-menu-column" }, h("li", { key: 'e92166024b3442a193440a610977dab97d8a0e1e', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '37ceca98b5500ca066ac036483ff1bb08a843f1f', class: "ir-mega-menu-row" }, h("a", { key: 'b81443b5d0b842c784eeecc7a36451665db82747', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '188ceddc96bf08cf38a39aa0b16f0752dd485d1f', class: "ir-mega-menu-row" }, h("a", { key: 'bd24e67fe7b6ec6a93de97b99851a48126c2c133', href: "poilist.aspx" }, "List")))), h("li", { key: '37effa361eab35914369038bbb4ba5e82752d0be' }, h("ul", { key: 'aae67f41851dc84d995c62b1b6b03502d1c2b5bc', class: "ir-mega-menu-column" }, h("li", { key: '19b93411ef8921c88f334bac341c4ab74c5ebfe1', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '24b890e32b5d464d313576c5d857c7dc70778fa2', class: "ir-mega-menu-row" }, h("a", { key: '76f55e10e626bfb0e9f3db295329efdb73afd951', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '3188d1b478fb8ad2b3192c31c2b914566cd91820', class: "ir-mega-menu-row" }, h("a", { key: '5017d632fffeec0685d20011255fb3cea880e597', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'ce25c4e7a7cd3714ee7201f81a66d0305a8fa3a0', class: "nav-item" }, h("a", { key: 'd967b39544434587fdda7272468f94ea48e4c4af', href: "#", class: "nav-link" }, "b")), h("li", { key: 'e7338c8cca6ce747b851d35764b7aac8c7123386', class: "nav-item" }, h("a", { key: '6a6e2d473baa726044692e06117510458f7ca754', href: "#", class: "nav-link" }, "c")), h("li", { key: '36c09a42ca3b1396a35d9c70bf134df36fcbc38a', class: "nav-item" }, h("a", { key: '54489bde0dbada374d41b4d459909f3998b9cb88', href: "#", class: "nav-link" }, "d")), h("li", { key: 'fcf9c4135f91a1a8a4204377f72f58d5662ea02b', class: "nav-item" }, h("div", { key: '72c4c782f6cc83a85b58a7392c7e57f2f91608b6', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '230514a492d199198d6b6999bbbcc5ff8c744bda' }))))), h("div", { key: 'db70eb566263e1faee1dc2c98bf6682cf0f05e1b', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '19985c4aa2b58026f46a3625feb46a87ad6ef627', class: "mobile-menu-header" }, h("div", { key: '116168fcc4611a72d6659ef7395ccf288eb774f2', class: "hotel-name" }, "Hotel Name"), h("button", { key: 'e9817dac4760a87e23a7dd97898a1f1573b172d5', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '640ffe15242fd4b72d232bd47fbaa855216a305c', class: "mobile-search" }, h("ir-m-combobox", { key: '62a517eb7e1b63b7e4cbb8380b0041eb7f4eaa27', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '0eecfa0194d4c2afdce1b66e967d47de7ca675e2', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: 'b2e0557f3354a6d7ccc5d562eb004c302955edb6', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '22402bec4b3c7a3ab2f10df5d8cd5bce78d11356', pages: this.pages }))), h("section", { key: '6c29cd4abb5ea83053044d3c08d4f699841f3af0', class: "p-2" }, h("div", { key: '98a29f95e9be9d5e585a6019c3541e47ea78d5fd', class: "row g-3" }, h("div", { key: '65bdf1cba38faa256e6076871867e8ac396f0fff', class: "col-md-3" }, h("h5", { key: '132124779e8797fbda7116ad686ff76820144368' }, "Static Options Example"), h("ir-m-combobox", { key: '57d33b43fb209c0c75f4ec534cc58206527483fa', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '5a4e4c8e4257ae12b2242dac880182372639a99a', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '21910946031eb8a48efe1ad8a2c3b4a7e810330c', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'a4f098bebe7893c1d326b66307090608a6f77fdc', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '7b0706e026310394f47537d794e897d493d389a0', class: "col-md-3" }, h("h5", { key: 'e1058d7d16d16bf133ff2c8bcda5c7702d905ca2' }, "External API - Countries"), h("ir-m-combobox", { key: 'bc5d9eba67537f398849e64b5aef870ec96a80e6', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '4de6cba0b872b2684db00fcacab6c802ad2e0729', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'e2738077f0e5ccaf438dafaa5577226b966e5d45', class: "col-md-3" }, h("h5", { key: 'ab18b8d21f37b688cbe89c209c58bad11ff28400' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: '8f038a757a14c50edd830c8a077cd78985784efc', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '2bae7475f7a4786d4dc031e4852dff2b5daa0c9d', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '0ac23980d4801c66af60deca1e481d01ef7dd5b7', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'c2cd026d5d2d29f2c56b5ac3478b4b759e2b2867', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'c915965f6a1980467720321593a051f5b304b97e', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '8bf604a879c8bf42b593c0a0f242425fbff714ad', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'c155232712168ed0837eefd91d95b0fdcaf849ac', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '675d3374f5b9759dc83c951ad474bed7bb0e7a47', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '119aa2dfdcd59fcecd5ddb0a68b80787473d6ede', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'f43791aee98d387d4abc2cafcab78e86021f6aa8', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'fc91d4226924d17a55400374bbc569c925e96e2a', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '1fc9a552d5ef98ed38bfa8a74b50ad4ebbec3496', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '931f0e5980b4b1d5eaed4217e5ed9dff2a6eb1c1', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '0e2e123c4276bbde5b0bd1e283c3c64f96926060', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '91ba7cb70ad8f3039c51ba2057d4c64870d61f3a', class: "my-2" }), h("ir-select", { key: 'eee7d40726fb7eae2c7147aedcdb7e2b01d40a9c', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '0ae2b981db5e80778de4b7a3eddfb2f0b81cb3e8', class: "my-2" }), h("ir-select", { key: '60d25a91af31fd3708871638500c3f1bf65b78ac', data: [{ value: '1', text: '1' }] }), h("div", { key: 'e2654c2c07d422a46dbab8b7d00213926d19323a', class: "card p-1" }, [
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