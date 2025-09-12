'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const utils = require('./utils-bf9b1b25.js');
const icons = require('./icons-751623e9.js');
require('./moment-1780b03a.js');
require('./index-63734c32.js');
require('./calendar-data-960b69ba.js');
require('./index-7564ffa1.js');
require('./axios-6e678d52.js');
require('./locales.store-a1ac5174.js');

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        this.notifications = [
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
    }
    render() {
        return (index.h(index.Host, { key: '862ad15ea14f35d97620a0934c359f73db659b42' }, index.h("nav", { key: '0c3aee2512df618363a317bc9a70c0155e7b6bdf', class: "modern-navbar" }, index.h("span", { key: '96ea1cce97ba683fd57cb75222742a2aa1013652', class: "overdue-banner" }, "Overdue $300"), index.h("div", { key: '33329b666c42d4ecabbce90a9ebdbd8e8690e1c2', class: "navbar-container" }, index.h("div", { key: '8342e9e8c361b87254c294742df8fb7cc5f93aba', class: "navbar-left" }, index.h("button", { key: '28f9370778915b855ead822afe26b1da460fae28', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, index.h("span", { key: '1399821ca36866f9481327a8e8f999ed284d74d8', class: "hamburger-icon" }, index.h("span", { key: '75940f3c42588fe1c82bd6b91c038e736a7d9220' }), index.h("span", { key: 'e0360fb24c11f34e1f717b3dae6a998692349898' }), index.h("span", { key: 'fe247c4001afcabf6d34082e34eac81b28cb1dc3' }))), index.h("div", { key: '4149ee83d6e41494db39249e7f08d4aef9748c07', class: "navbar-brand" }, "Logo"), index.h("div", { key: 'bb5c606630935b76bc80e983f285f941410564a8', class: "d-none d-md-flex " }, index.h("ir-m-combobox", { key: '84a10f661a829f47b7d1747c027d3ce39f56df4b', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '20ed2eb0c162396ee38ec0acdefe80755c96037b', class: "hotel-name d-none d-md-block" }, "Hotel Name"), index.h("div", { key: '8447f3e73187373a9e565473ec90012c06c451af', class: "ml-auto d-md-none" }, index.h("ir-notifications", { key: '573d68693578b65078ca5eaf6987e603901a1a8e', notifications: this.notifications }))), index.h("div", { key: '651f94762c568da31fe373880ec42148f6d4fd4a', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, index.h("ir-m-combobox", { key: 'fe3f02ce457ee77c65ce0886bbb021ab8f634733', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '68a0875325e7e747553de7d229ee12372379fdcf', class: "navbar-right" }, index.h("ul", { key: '62c0997d5c5934358f21bcc0c9bef38dd7c3e0d6', class: "nav-items d-none d-md-flex" }, index.h("li", { key: 'fa5ef7bcb742579bbab75ffee42ac673dacb764b', class: "nav-item dropdown" }, index.h("a", { key: '8d4fe0f980e0ad884220aff5592eb27ad5401bf0', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), index.h("ul", { key: '2bde69f14650c94b91309064bb4b7e1cfd06c9e1', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, index.h("li", { key: '886d43e58efea44ebd1f9a470f5bb6cc3381b739' }, index.h("ul", { key: '4d34adbe2efc7f8a9eb7b2329cf61e12d17bddcc', class: "ir-mega-menu-column" }, index.h("li", { key: '7f88eaa4c32d57a0b88a76b32f53a5918049b5c1', class: "ir-mega-menu-row title" }, "Parameters"), index.h("li", { key: '6bab08fc98f2532f1c26e71cbae2d4c2f26eb084', class: "ir-mega-menu-row" }, index.h("a", { key: '846750a3651aa75b114c43a42233014bfc0e1720', href: "userinline.aspx" }, "Users List")), index.h("li", { key: 'e94d9c941e84104d70c10af3c54d9ac5cfcedb47', class: "ir-mega-menu-row" }, index.h("a", { key: '345ede5f1a732a93b443f9628d56e7f1fd10c252', href: "languageinline.aspx" }, "System Languages")), index.h("li", { key: '5fc392fcfca1648dcfa2c21c868a39b30e5d59f6', class: "ir-mega-menu-row" }, index.h("a", { key: 'd38548af4c92d59d9bdf7c75e7751f0da91f79e3', href: "countryinline.aspx" }, "Countries")), index.h("li", { key: '4b30f099ac159f4ab29a5d7bedcd2eeffafbfc25', class: "ir-mega-menu-row" }, index.h("a", { key: '026dafe1fdaef05387f8c12e8a37052db7e4b096', href: "level2inline.aspx" }, "Country Level 2")), index.h("li", { key: '1b223aebc9104170f3ab75509a998f95f5244937', class: "ir-mega-menu-row" }, index.h("a", { key: '994fe87d7ae37de8883ee904944856032986ae8e', href: "cardinline.aspx" }, "Credit Cards")), index.h("li", { key: 'c75d75b529ac7da991d753dc247ad6d8d7e5e384', class: "ir-mega-menu-row" }, index.h("a", { key: '9d6b060254150ad87e47fe046e7759d15132949a', href: "hotel_chaininline.aspx" }, "Hotel Chains")), index.h("li", { key: '5018cf6bb9df908d1029c414660605ec1c4bf7ec', class: "ir-mega-menu-row" }, index.h("a", { key: 'ad9a5708ca8616530f6ae5a864b889310994a1c6', href: "currencyinline.aspx" }, "Currencies")), index.h("li", { key: 'fae8be8dca47af38eb64a7a026927ff905eb19f7', class: "ir-mega-menu-row" }, index.h("a", { key: 'c5b1170a9177f01c5539e7951ab73b1421c1d996', href: "amenityinline.aspx" }, "Amenities")), index.h("li", { key: '75c4fef041e8d6f955704ff878d3b78efa3d5303', class: "ir-mega-menu-row" }, index.h("a", { key: '43194e752df250ffbaa837a0b36854e3744289ff', href: "foodinline.aspx" }, "Food")), index.h("li", { key: '5e8606e143c784f562180f8a330ffc5af09273df', class: "ir-mega-menu-row" }, index.h("a", { key: '2b4f25c8e342ae5212a4dc611e5e22ac8374d0c0', href: "beddinginline.aspx" }, "Bedding")), index.h("li", { key: '6865e4c6e38ae8549b8ac18946f8d8c449f2f0b7', class: "ir-mega-menu-row" }, index.h("a", { key: 'd09283f8de2147b1244d89292d098a82e61b0fc0', href: "setupinline.aspx" }, "Setup Table")), index.h("li", { key: '59317aa1d1bb6ed90fed51470a048c018e5c9411', class: "ir-mega-menu-row" }, index.h("a", { key: '70afb2f8e7b8fbeb8117bf6e485c861b86f28302', href: "gwedit.aspx" }, "Payment Gateways")), index.h("li", { key: 'acab9eade6fde0aef4b4ab672ac075c38180399b', class: "ir-mega-menu-row" }, index.h("a", { key: '7d100b34cea9bcd28374aee5b6ed01935b3696a8', href: "channelmanager.aspx" }, "Channel Manager")))), index.h("li", { key: '0beaf6f1ba14243b68c668dc746be1af3bcc8953' }, index.h("ul", { key: '3d223cfe480448295a55b7a5ab75c664f517710b', class: "ir-mega-menu-column" }, index.h("li", { key: 'cc6bc5499ba3fdeac8e93ee42b7410358e2bb82f', class: "ir-mega-menu-row title" }, "Main"), index.h("li", { key: '67d3b36956e6766edab5b2bba95a4062197300da', class: "ir-mega-menu-row" }, index.h("a", { key: '640ad8879ab13a26c7514a2e511f8707d9747f36', href: "mpolist.aspx" }, "MPOs")), index.h("li", { key: 'be69ca5cb4b64a44043c370e999c191932c859c7', class: "ir-mega-menu-row" }, index.h("a", { key: '5a90c55687d5b628824e7d517ac86fb82eb16867', href: "aclist.aspx" }, "Properties")), index.h("li", { key: '4a1863ef91538d70baccfaf7f0b0481689aca49a', class: "ir-mega-menu-row" }, index.h("a", { key: '20854f3048971b2376a4d3fba2276e11d05e3f54', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), index.h("li", { key: '94e6f467a96bed4e1f5244aa458d3d64e3b078d2', class: "ir-mega-menu-row" }, index.h("a", { key: 'e30cac4f1a512d9ea0b23eb36b385b66ff8f52c7', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), index.h("li", { key: '50f94e6e94df8c9d2d4a95c9803590d07b77837d', class: "ir-mega-menu-row" }, index.h("a", { key: 'cc54bb7b3b5622259ef43ace2aa6e7c0babe770e', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), index.h("li", { key: '7144b6ca78ceb43b80eca17b4642fafba25aa152', class: "ir-mega-menu-row" }, index.h("a", { key: '2a7f0c179af06b3780dfb1bd74a9adaf6e0af419', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), index.h("li", { key: '3e86f44d75d92980865039730925be850864d007', class: "ir-mega-menu-row" }, index.h("a", { key: '936fbf26143c3ec3fb719fe080c8a908964c33fd', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), index.h("li", { key: '0e631618a4980df2d6d7db092cf85d5c8b0380b4', class: "ir-mega-menu-row" }, index.h("a", { key: '8081b8a4350cb71813b81654874f578bbf16988c', href: "mpobillingreport.aspx" }, "MPO Billing Report")), index.h("li", { key: '24332f500a102394ae0239cd98f0eb408ac93234', class: "ir-mega-menu-row" }, index.h("a", { key: '6309c4c2452cabeca7c6a94c2039506215ba11a9', href: "Acmemberlist.aspx" }, "Guests")), index.h("li", { key: '87dfb82456e4297e058c9a8f85a31fe09a8718fd', class: "ir-mega-menu-row" }, index.h("a", { key: 'a9a221ace34a7d3d4d7d2bb238ea44672366fcb7', href: "acbookinglist.aspx" }, "Bookings")), index.h("li", { key: 'acbd651a9090647a508b79192bc9298cfca9ae75', class: "ir-mega-menu-row" }, index.h("a", { key: '73bc7df2da0744293bb199497ec8bbbd4774e30e', href: "billing.aspx" }, "Billing")))), index.h("li", { key: '2c5dfa1bd7a6439bdee4223ec8af5079b44e73a8' }, index.h("ul", { key: '5cfdbe198090396ca47e4bfb1843cf86510d4437', class: "ir-mega-menu-column" }, index.h("li", { key: 'cfd3f2da500d0d5d6c6d299af5c47051f9aa2ace', class: "ir-mega-menu-row title" }, "Locations"), index.h("li", { key: 'd484d5ab9178eee133953d744335137b9861e8fb', class: "ir-mega-menu-row" }, index.h("a", { key: '79baeda3666a9418cd314abe3254a788a9ad997a', href: "poicategoriesinline.aspx" }, "Types")), index.h("li", { key: 'b1650324c9390061ee4b3557afc3cd9437f7b7f7', class: "ir-mega-menu-row" }, index.h("a", { key: '1170459a0bbf06cd8f21799c7045fc3d3367e0a7', href: "poilist.aspx" }, "List")))), index.h("li", { key: 'b70065a61cf211e684fcf854415d98fca826b664' }, index.h("ul", { key: '02bf141aa6ec32d8b381bbbf9ef5ddb3834a879a', class: "ir-mega-menu-column" }, index.h("li", { key: '623ca5718b89fcf890b49507ea72b9214e60bf87', class: "ir-mega-menu-row title" }, "Referrers"), index.h("li", { key: 'a1519ebfafa6b9090f2212f318003cf64f4d91cf', class: "ir-mega-menu-row" }, index.h("a", { key: '697ef8fcb37562a7eddf004d9c104a6ceed123ed', href: "affiliatelist.aspx" }, "Affiliates")), index.h("li", { key: '72265d2743041411f24ffa237a120a337447a23a', class: "ir-mega-menu-row" }, index.h("a", { key: '22ec681352ad25d533ba53b62ef0eb6111200a0d', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), index.h("li", { key: 'fab262bcce0360cbd37314f7bc28d7d85ff2a0eb', class: "nav-item" }, index.h("a", { key: '627ab72a2bd6182a9be53aa442c43752b1f98954', href: "#", class: "nav-link" }, "b")), index.h("li", { key: '6a0740e72a043cb3bc76614f6e73732be45488b0', class: "nav-item" }, index.h("a", { key: '3cbba42bb8ffdd2939224e0c9a67ed4ecd15b65a', href: "#", class: "nav-link" }, "c")), index.h("li", { key: '14aba05c57ffeb154a706b1cce8db982f443dc88', class: "nav-item" }, index.h("a", { key: 'c34978996c5b5707fa57a9e75e163dc8eb723feb', href: "#", class: "nav-link" }, "d")), index.h("li", { key: '20d26cb825461dc507802de195ea82d3f54b91fd', class: "nav-item" }, index.h("div", { key: '78ee1f823273370bf95a76e6922b73cb1fc67989', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, index.h("ir-notifications", { key: '36b0756f25b15420ec690cb33e3bcbeba218b3bb', notifications: this.notifications }))))), index.h("div", { key: '8abc48c3e5b41a6d6518e93b52315632a6ca6155', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, index.h("div", { key: 'ec7aeef2e3bff0a9cb31d7295c83bb7bd841813a', class: "mobile-menu-header" }, index.h("div", { key: '379db92377ed06028f57c570e9c581730a23ea23', class: "hotel-name" }, "Hotel Name"), index.h("button", { key: '47839dfa32c4ab512e499d54a1a4a0cedca9acd6', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), index.h("div", { key: '1f116f181b75b06704784716c4fc7d35ecb4454b', class: "mobile-search" }, index.h("ir-m-combobox", { key: '211f1288971b13fa327ee9a218f9d3dddbfe8bf6', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("ac-pages-menu", { key: '6f03315d4b5a447bb3192c84f869aec02ab35edb', location: "sheet", "onLink-clicked": async (e) => {
                await utils.sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), index.h("div", { key: 'f58ce5c4210c630c9151f30d1baa3c8e352ccf08', class: "submenus d-none d-md-block" }, index.h("ac-pages-menu", { key: '24d7401ab0da3d7ec53db1ceb2107f9784ed1c77', pages: this.pages }))), index.h("section", { key: '3486be424271c99b2523794690ffc4b6751075ac', class: "p-2" }, index.h("div", { key: '4333fd8311cc78486bbe72a63e948e5ce003ae58', class: "row g-3" }, index.h("div", { key: 'c29ab1b7d9266bafe17f9c2d97ee6b25231024ef', class: "col-md-3" }, index.h("h5", { key: '87143b9ab6d830596bff04de3033cba3278b53ca' }, "Static Options Example"), index.h("ir-m-combobox", { key: '380cd116f999d6d24d1f78fa8abe146cb311501b', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, index.h("svg", { key: '661227962608c82daf29c7ad0e4985039312bb07', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: '0dc7336138ec671e2613564950aa8fd9a52229b3', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && index.h("p", { key: 'af47e27daf5e4ff9547a3dcfc3241edfd7f3b6d1', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), index.h("div", { key: 'e666d62966ab926d76f6f40209d5e533749ed79a', class: "col-md-3" }, index.h("h5", { key: '5687b4ca57aa3fff332fce63a172bacc9426bc30' }, "External API - Countries"), index.h("ir-m-combobox", { key: '127e3932d5172aeac597228a55ccc7c434665c0c', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && index.h("p", { key: '35e80ffa5a417137475947d3f395c1309b1507e6', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), index.h("div", { key: 'db4b015e55b25922fc6fc8fbe690797cda93f706', class: "col-md-3" }, index.h("h5", { key: '3dca4a06980a05c86dc3595c9e791fc415128b54' }, "Custom Dropdown Content"), index.h("ir-m-combobox", { key: '0b892d403ef1fbf3f16056c773d437a14c0fa557', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, index.h("div", { key: '2f9305106b0556141663588a21390513982be47d', slot: "dropdown-content" }, this.isLoadingCustom && index.h("div", { key: 'af6f8feb44dfe72eb5f286f5a2233cc7c56cd990', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && index.h("div", { key: '8e441b14539cb2e95694883c03e318c1e4bd8555', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index$1) => (index.h("div", { key: index$1, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, index.h("span", { class: "me-2" }, "\u2B50"), index.h("div", null, index.h("div", { class: "fw-bold" }, option.label), index.h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && index.h("p", { key: '17d68cd61ae6acdfea7d947363ed62480d1d5325', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), index.h("div", { key: '46ebc72471bc51285db7f161c9b468ef956328c1', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, index.h("button", { key: '47eecc52ddead3e55db900e5c3c16262ab66d1d4', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), index.h("button", { key: '4ba2d105765ef454ff1dcc50d8aab035e6a9d417', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), index.h("ir-input-text", { key: '83d0549d4cad8f5e00b6c21e2a64f8fe24cce865', variant: "floating-label", class: "my-text-input", label: "First name" }, index.h("svg", { key: '369061d09e32238c30c45c166adf862df00d47d0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: '509dc01e7dfc0c6fd2c007fc0627dab2b5d4441a', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), index.h("svg", { key: '628d01cd4f6c264cf19065794522bec2274363aa', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { key: '236150aafb4b592b73b5e08f1a182939166795c5', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), index.h("ir-select", { key: '084069a5dbce1b883ec012136a2b7619f071e3d3', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: '33cbf86bd59cc80702d1f585635033c86459a591', class: "my-2" }), index.h("ir-select", { key: '1a4a9d6369a82afa01e1df8d7d4ea40e85b57074', label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: 'fd95c1bff67897d4719b19e9e93541a08fe32b50', class: "my-2" }), index.h("ir-select", { key: 'aeab761aee0a8dead167dc04c06b9af0eb5726a9', data: [{ value: '1', text: '1' }] }), index.h("div", { key: 'e605f62270b93cabff0f5020b50929d975c32e47', class: "card p-1" }, [
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
        ].map(row => (index.h("div", { key: row.id, class: 'payment-item' }, index.h("div", { class: "payment-body" }, index.h("div", { class: "payment-fields" }, index.h("p", null, index.h("b", null, row.cause)), index.h("p", { class: "text-muted" }, row.date)), row.reference && (index.h("p", { class: "payment-reference text-muted" }, index.h("b", null, "Ref: "), row === null || row === void 0 ? void 0 :
            row.reference))), index.h("div", { class: "d-flex align-items-center justify-content-between", style: { gap: '0.5rem' } }, index.h("p", { class: `payment-amount ${row.type === 'Credit' ? 'is-credit' : 'is-debit'}` }, row.type === 'Credit' ? '+' : '-', "$US ", row.amount), index.h("div", { class: "payment-actions" }, index.h("ir-button", { variant: "icon", icon_name: "save", style: icons.colorVariants.secondary }), index.h("ir-button", { variant: "icon", style: icons.colorVariants.danger, icon_name: "trash" }))))))))));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

exports.ir_test_cmp = IrTestCmp;

//# sourceMappingURL=ir-test-cmp.cjs.entry.js.map