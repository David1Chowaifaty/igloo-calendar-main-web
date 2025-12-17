'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const utils = require('./utils-9892967b.js');
const icons = require('./icons-b526f0f2.js');
require('./moment-1780b03a.js');
require('./index-8bb117a0.js');
require('./calendar-data-e7cdcfec.js');
require('./index-6299b0f7.js');
require('./locales.store-4eb57996.js');
require('./axios-6e678d52.js');

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}";
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
        return (index.h(index.Host, { key: '8cebe65d31edd34b92c84397b00082de9bcd73f7' }, index.h("nav", { key: '884685ee1a0f5766599dd779fdf507046f428d44', class: "modern-navbar" }, index.h("span", { key: '5d2f0e0742a0bd8fa00d813a51e3a82e2a43383a', class: "overdue-banner" }, "Overdue $300"), index.h("div", { key: '06de157e79f67453ffc15a977b79c5640344ea01', class: "navbar-container" }, index.h("div", { key: 'c98871d675dba3f3395a03a519fcdb88b261c055', class: "navbar-left" }, index.h("button", { key: 'f9d2b4ed244be9133ba5e114b179f259401be015', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, index.h("span", { key: '33fe784dd156602f22495f646672d306bca6b77c', class: "hamburger-icon" }, index.h("span", { key: '8768ff27ac622e3142b346d44c1c1c928669b9bd' }), index.h("span", { key: '770f59d0bd0ce28fa5841cf4518c55c42e27d7d4' }), index.h("span", { key: 'cffe5ccf7c334fc8388e13cf56fdf3204366c7ce' }))), index.h("div", { key: 'fb6e07e428b20341350ea939715c58c91c8b7232', class: "navbar-brand" }, "Logo"), index.h("div", { key: '4976be40a56b78b229676ed0b9f416a713e03f4b', class: "d-none d-md-flex " }, index.h("ir-m-combobox", { key: '51b6a6d6fc573a78c9678bce62cf0771aea138aa', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '5c1ce52cd92f4afcc19702d0cc60410f9d1fa309', class: "hotel-name d-none d-md-block" }, "Hotel Name"), index.h("div", { key: '70edbf38f531226f0db32f7097fa5dd6b1dfebc8', class: "ml-auto d-md-none" }, index.h("ir-notifications", { key: '66406b1a40907ee9bbfe992b39f97bfd47f59e9a', notifications: this.notifications }))), index.h("div", { key: '3cadfb6600095d9802a8ce5a635cb845c115fa59', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, index.h("ir-m-combobox", { key: '2accd4432059e1405f34312782bcf07725afd314', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: 'c8020574df352ddce343b09797251f2d9ecff4e2', class: "navbar-right" }, index.h("ul", { key: 'd0e1ca6364cf3a9c249bfb4b315265822b4ec82b', class: "nav-items d-none d-md-flex" }, index.h("li", { key: '5107093db5468f201206ffd37821eec1c2eb5a5b', class: "nav-item dropdown" }, index.h("a", { key: '975f0564520ba0d1037f821cbae3d996e7f1d87f', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), index.h("ul", { key: '126718d92168d6036af796b0343c49e79adc1cd0', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, index.h("li", { key: 'a78de05f75e0a0c1d9ebd8b2b2afc4cdbd37d6d3' }, index.h("ul", { key: '95071af00e92c807f5ca5d293018b2887374effe', class: "ir-mega-menu-column" }, index.h("li", { key: '6ba884a533b5186aefdd7f184367929b63afe8c8', class: "ir-mega-menu-row title" }, "Parameters"), index.h("li", { key: '768370e94c5683c900360bc501beceb949b5f796', class: "ir-mega-menu-row" }, index.h("a", { key: '5427a00b7e09f1d4a18b7502bce90b2a79c6c6bb', href: "userinline.aspx" }, "Users List")), index.h("li", { key: '39a60bf71b89ab155f70aff906bb4fce504e93f6', class: "ir-mega-menu-row" }, index.h("a", { key: '2c86b07ef5eee0b5640240c174ad8b087ecbe548', href: "languageinline.aspx" }, "System Languages")), index.h("li", { key: '206f8729905987b4036f703733389f6dbff3e704', class: "ir-mega-menu-row" }, index.h("a", { key: '77e22304f039059bb49493c3122dc89165c9314a', href: "countryinline.aspx" }, "Countries")), index.h("li", { key: '0b788d48e8db3c4e915e305e85c3638fef815e1f', class: "ir-mega-menu-row" }, index.h("a", { key: 'fda0f936dea59a6e04b251aacd55fc890eb93e6f', href: "level2inline.aspx" }, "Country Level 2")), index.h("li", { key: '67a86981321b5e333e96fc9474185d45a13f19fa', class: "ir-mega-menu-row" }, index.h("a", { key: 'f1c7b97eca714a0164acea15cd883c017685b05d', href: "cardinline.aspx" }, "Credit Cards")), index.h("li", { key: '4fea74330da3231e4f8993342a392ef4ed42d8b6', class: "ir-mega-menu-row" }, index.h("a", { key: 'b4d0456c9c68d86c70ed171af61a7a668c583e89', href: "hotel_chaininline.aspx" }, "Hotel Chains")), index.h("li", { key: 'a10eaf8bd6ececbaedbf5e5aab8e79b49a582884', class: "ir-mega-menu-row" }, index.h("a", { key: '599caefb5b6f5289613f0c83a70f9d836a06f865', href: "currencyinline.aspx" }, "Currencies")), index.h("li", { key: '8d60f22a7b16ade04aefff62a5970220581ef368', class: "ir-mega-menu-row" }, index.h("a", { key: '3c1f9442121b0ef0563b7d0cfdd2d1fc0ba1638d', href: "amenityinline.aspx" }, "Amenities")), index.h("li", { key: '8ed4d362004dff8af9dbe7f201ded228f862d5c5', class: "ir-mega-menu-row" }, index.h("a", { key: 'b29ef62e0244438d2093ee85adf4da7f85b52a73', href: "foodinline.aspx" }, "Food")), index.h("li", { key: '3efefa569d422207b9694f69d7d17492845f64f1', class: "ir-mega-menu-row" }, index.h("a", { key: 'd08b096f1b6c8c43e1e7ba276d5e979773aa564f', href: "beddinginline.aspx" }, "Bedding")), index.h("li", { key: 'f2d11db9d118bfa675c6baf1e412bc6533b688a7', class: "ir-mega-menu-row" }, index.h("a", { key: 'd9c1cbd9b46afbe50d586fbec8b2b9d5f7cb2ff9', href: "setupinline.aspx" }, "Setup Table")), index.h("li", { key: '5e25835e496d62159841ce555d6301baba7717df', class: "ir-mega-menu-row" }, index.h("a", { key: '3953cbe93198c4d28adef91d4f9cd52352c417d1', href: "gwedit.aspx" }, "Payment Gateways")), index.h("li", { key: '1b4ad4f52bc72352aa5aa5b23b5590fa571f4b3d', class: "ir-mega-menu-row" }, index.h("a", { key: 'b0b13c3a0617db7ea05b1d36c535dfbb26f82be2', href: "channelmanager.aspx" }, "Channel Manager")))), index.h("li", { key: '9660a7381936908bbb4d9f867c22f8c0e8790cca' }, index.h("ul", { key: '9e961914a71ce04982cc0580653747082c7001dd', class: "ir-mega-menu-column" }, index.h("li", { key: 'd88d010c8c9465d47ab89e201286fb851321949f', class: "ir-mega-menu-row title" }, "Main"), index.h("li", { key: 'b4d220498a9bb14ebc91195b7735fba8e71171da', class: "ir-mega-menu-row" }, index.h("a", { key: '5c0f222a8f1a75ec46f139226c814a7e2da88269', href: "mpolist.aspx" }, "MPOs")), index.h("li", { key: '4fb4e042b2bb9201c3d1fddb72de5a18ab840259', class: "ir-mega-menu-row" }, index.h("a", { key: '777c9f31d18afeba456dba5eb0d5db6a15a6d4df', href: "aclist.aspx" }, "Properties")), index.h("li", { key: '8c45e52c754305b5c1069a0c603f73b1408d9b93', class: "ir-mega-menu-row" }, index.h("a", { key: '2f9d5de28b41b897fc96493798c00cd22e153bcc', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), index.h("li", { key: 'f458c178fae475e5a6de049d5b08f68961d1f3d1', class: "ir-mega-menu-row" }, index.h("a", { key: 'f6063a623cf4f2a8ef750bd15f8b0a46a51dfb55', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), index.h("li", { key: '27d14b3f9e73df5e2ec946b965e4720d56d1a67b', class: "ir-mega-menu-row" }, index.h("a", { key: 'fabf657fc7000d41a87bac3506db8197ea1db94c', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), index.h("li", { key: '3dbf3945d390ddf1f8e2c596d2f8c3f447214296', class: "ir-mega-menu-row" }, index.h("a", { key: '7d8c48e37695e05fbb4e958d24123eb63725f822', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), index.h("li", { key: '532548a95c6b9055f83914456c71742ce742279e', class: "ir-mega-menu-row" }, index.h("a", { key: '322e084dd0b231e797e473d08af87d2a99e4fe0b', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), index.h("li", { key: '9c36bcdd8f76d7ec26ded22c8caa05c0d13c2f6f', class: "ir-mega-menu-row" }, index.h("a", { key: '4b08b0c5742daa4de28cb6a2abb2a285505ad9f4', href: "mpobillingreport.aspx" }, "MPO Billing Report")), index.h("li", { key: '32b6bd726c979c0d55c40ebb094c7d47ee05e38c', class: "ir-mega-menu-row" }, index.h("a", { key: '6fbed697d95fc3e494ad8115e9f058208ffb92a5', href: "Acmemberlist.aspx" }, "Guests")), index.h("li", { key: 'b4161c20aa4850bff027870f430162de5d9ec963', class: "ir-mega-menu-row" }, index.h("a", { key: '340cfbf393215d3fb332706beb7cfbb1ee8dedce', href: "acbookinglist.aspx" }, "Bookings")), index.h("li", { key: 'acf72b922d7e0eda93c18c05635e24b6986e4375', class: "ir-mega-menu-row" }, index.h("a", { key: 'dab3a6b7375a187f1d6a70f1b7ee21b859c20baa', href: "billing.aspx" }, "Billing")))), index.h("li", { key: '2e75f423a1fac28f227d62e7797c6b8aa75ef4b6' }, index.h("ul", { key: '5803f1c958f6f789d74c9c274d0c9b4b0b6e7ba7', class: "ir-mega-menu-column" }, index.h("li", { key: 'ac3dc087098338a14772bc4417b70fa92b897bec', class: "ir-mega-menu-row title" }, "Locations"), index.h("li", { key: '8dcbf9915c6b1989ba43f3f013988564c6bad38d', class: "ir-mega-menu-row" }, index.h("a", { key: 'fd6af0557886ea51658e49273454eae824dc7813', href: "poicategoriesinline.aspx" }, "Types")), index.h("li", { key: 'bac60eff0c8cfd0d49af82713d9b8efb2179f7e7', class: "ir-mega-menu-row" }, index.h("a", { key: 'e332d22621be4a07120e918f97e796fa1a8eecb2', href: "poilist.aspx" }, "List")))), index.h("li", { key: 'f48756d3f641ed090ce56fb584573b41d6cc6d71' }, index.h("ul", { key: '65cdabd39e1c72db99a09655e82b83de13317eae', class: "ir-mega-menu-column" }, index.h("li", { key: '0229ac70150d99980db73737ec4db648d643cfb7', class: "ir-mega-menu-row title" }, "Referrers"), index.h("li", { key: '319985c7f3501e85fc45fdb32f8e446497bd4784', class: "ir-mega-menu-row" }, index.h("a", { key: 'f49d88d0faae4b905aa4a77e4a22a6dbc1cc41ab', href: "affiliatelist.aspx" }, "Affiliates")), index.h("li", { key: '18ce67d3797f5376bad46291b6988682842a9653', class: "ir-mega-menu-row" }, index.h("a", { key: '5647a6137862d49ca4f0ffa7a287e8687bd3e2c7', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), index.h("li", { key: 'b097129a69578b1e72bc82352f5f5a36b3b622e8', class: "nav-item" }, index.h("a", { key: '83afa1e8297442def0d593b52851e0a60ee2899d', href: "#", class: "nav-link" }, "b")), index.h("li", { key: 'b3bbfcf604619d877751754d5df0430ff6a27216', class: "nav-item" }, index.h("a", { key: 'ceba3fe410b012affb17a82572d4130dd80e7145', href: "#", class: "nav-link" }, "c")), index.h("li", { key: '5516aa330d3aeb46e179ddb29d6452bbe03a741a', class: "nav-item" }, index.h("a", { key: '11322fe4244c2dc280a95ddb96cd8f293d4f020f', href: "#", class: "nav-link" }, "d")), index.h("li", { key: '218881867fa5d6ef6c601ee4debb9ee45b729fdb', class: "nav-item" }, index.h("div", { key: '2020ce1300cbbb687d1199b4f5ffd87564926862', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, index.h("ir-notifications", { key: '8179cea141f46b265fd06adde2703b3eb9d408e6', notifications: this.notifications }))))), index.h("div", { key: 'd3f155fd6992154c923e74f8dd857d0f50610fcc', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, index.h("div", { key: '07be6b6e9f3018e7438185d5c041fc8646b36719', class: "mobile-menu-header" }, index.h("div", { key: '21cdbd60ddfd4b1a295289114be380548e35092e', class: "hotel-name" }, "Hotel Name"), index.h("button", { key: '86975e5386900ceec426b553a4ea90840a53be36', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), index.h("div", { key: '1267e4c98ef49522d743c3e805dae898b932eed9', class: "mobile-search" }, index.h("ir-m-combobox", { key: 'ea08a3d30223e7c5366604f8602fa73f7a688b3b', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("ac-pages-menu", { key: '6a0aa20653e07d7965751c48e6c2aa62b441b881', location: "sheet", "onLink-clicked": async (e) => {
                await utils.sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), index.h("div", { key: '484202bb982dcb70997608beabf91880a8c9163a', class: "submenus d-none d-md-block" }, index.h("ac-pages-menu", { key: 'e871d6cdc99684637a6f0826401e825689a61534', pages: this.pages }))), index.h("section", { key: 'c573ac2be1c3cc7389ab504cb55c7eb4f220df30', class: "p-2" }, index.h("div", { key: '13a9125a62d102813a38f461478b4f139a6eb19f', class: "row g-3" }, index.h("div", { key: '0e4aa4573472716add90ddc317824b0927870ad0', class: "col-md-3" }, index.h("h5", { key: 'f3d0af62a71021b66e5b8de72cbce7264ab5cedd' }, "Static Options Example"), index.h("ir-m-combobox", { key: 'bf1a1851cf2bc4cf0cec6d5a5a3aea93c8e161bc', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, index.h("svg", { key: '22137fe81adff7e0cbced8bd623c458458125771', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: '451ef71e31c7d2b1d0c9721c3449dae9d824e36f', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && index.h("p", { key: '79004444a6c19194f806696b384018e3ff309ac4', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), index.h("div", { key: 'dfd14d7e4a4f468cd4f2e45528642a63e0f518e1', class: "col-md-3" }, index.h("h5", { key: '22d254c5129f3cd5deadaa505e3c07de9abc658a' }, "External API - Countries"), index.h("ir-m-combobox", { key: '72100e8fa280f9b902af949370908ea6fcc03071', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && index.h("p", { key: '16e80ee9508ef19aa2141a495fef3b86ee0cd67f', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), index.h("div", { key: '2721ea575e94f22d2243c0e45cb1d0cd0b4186df', class: "col-md-3" }, index.h("h5", { key: '92b4058a7d02363ec9b4bd4fe23e56133e339f9f' }, "Custom Dropdown Content"), index.h("ir-m-combobox", { key: 'a871eaf1940b0aa6fccb67bb6d4842622ac78797', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, index.h("div", { key: 'f40ef4e5ac09a8a5cb85de0926cc95d3166538a1', slot: "dropdown-content" }, this.isLoadingCustom && index.h("div", { key: 'ecb4f8e7a105cff5a8388849555e43e3d68669fc', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && index.h("div", { key: '7c19d650fd8c63341a6775cd61587921af304f3b', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index$1) => (index.h("div", { key: index$1, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, index.h("span", { class: "me-2" }, "\u2B50"), index.h("div", null, index.h("div", { class: "fw-bold" }, option.label), index.h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && index.h("p", { key: 'fbead9c70236d33c62b35a6aba59785caf794846', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), index.h("div", { key: '7fdb153a228c73195df566e72db1ebfcd0b8f681', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, index.h("button", { key: '22e23996b5c0a625d1abf98e2af0c6937b94fc24', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), index.h("button", { key: '3936632def27da728ec50f2aabd7e97fea1c3c76', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), index.h("ir-input-text", { key: '3734bc7d676351c7698a5e737d77df2fc767d615', variant: "floating-label", class: "my-text-input", label: "First name" }, index.h("svg", { key: '4d43d25ee836b23f063cde85848a078b3da4f990', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: '19d5666ea3c41342faf620f825e0b33879791297', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), index.h("svg", { key: '272b01030c01d7ccb4fd4679a0409a122c8742db', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { key: '7073ed081847fb1f6bc96f6870607c48091a112d', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), index.h("ir-select", { key: '6b827591a9e579c1c3e29ce18facc85ee78978a7', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: 'e6d57961d3c3bf5756452c53849e6950c15205f4', class: "my-2" }), index.h("ir-select", { key: '84c6bdae0626e5957808e5a06e151d61cebfdec3', label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: '2fa49a5edb1c5ca010f233a7a379417fff01e84b', class: "my-2" }), index.h("ir-select", { key: 'f03154066444c33145a204618ad34113609da141', data: [{ value: '1', text: '1' }] }), index.h("div", { key: '09f3623ee42e5a3979c9a3202b3c6b701bd96ebc', class: "card p-1" }, [
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