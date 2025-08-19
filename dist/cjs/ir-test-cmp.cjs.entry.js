'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-7a66eda1.js');
const utils = require('./utils-96623242.js');
require('./moment-1780b03a.js');
require('./index-63734c32.js');
require('./calendar-data-960b69ba.js');
require('./index-7564ffa1.js');
require('./axios-6e678d52.js');
require('./locales.store-a1ac5174.js');

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}";
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
    }
    render() {
        return (index.h(index.Host, { key: 'ad8c434ffc7edfe3744d9d38bb889917d86326a9' }, index.h("nav", { key: '9d229c1d571d54ea1f1d31b33e848928a9788555', class: "modern-navbar" }, index.h("span", { key: '7ba9f989b26792c2a47ad70dda6f239eadc52acc', class: "overdue-banner" }, "Overdue $300"), index.h("div", { key: 'b586df93a84c6c7d37e34edd8790771899029522', class: "navbar-container" }, index.h("div", { key: '1ab46b98f40d8df30d2c9f8d334b916f920a9979', class: "navbar-left" }, index.h("button", { key: '01ace1df6f919ea19d57ce2ad2801c3a31eaa0c4', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, index.h("span", { key: '58d6566c90c64f80ad986b12e6e5031980ccc34a', class: "hamburger-icon" }, index.h("span", { key: 'd6ff63491234f66b4ace2c04d0fe615219faab42' }), index.h("span", { key: '9503e7535ed09225128e4ca88738c6daa72eecdc' }), index.h("span", { key: '88fa50bab74bcac3928a92263f3975f759d75071' }))), index.h("div", { key: '6635e79255f66789c0333de89eede9364074ff27', class: "navbar-brand" }, "Logo"), index.h("div", { key: '59f08644210e6e924087ec0f662f5c0084b96282', class: "d-none d-md-flex " }, index.h("ir-m-combobox", { key: '1d3ac1966f309006321f6e19b10b119742dd3fe9', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '69e2e42fd1ccacaec451f9e136623b65a3068028', class: "hotel-name d-none d-md-block" }, "Hotel Name"), index.h("div", { key: '2499bb0304a6e989503a72606cc2c6b71bcba57c', class: "ml-auto d-md-none" }, index.h("ir-notifications", { key: '3f4d7c4a6d2d68b6f29476e5ec79c12eced14f0e', notificationCount: this.notificationCount }))), index.h("div", { key: 'ba8bbd3637695ac5792b8568d22c0425e5881556', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, index.h("ir-m-combobox", { key: '4bf8f0dbd11584640ae28efc152ea12c9141be2e', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '6fb0e8c81349af36fccb1a6548e69d33a97c0750', class: "navbar-right" }, index.h("ul", { key: '278db27eda7b49e5818b0e975176757936fa7a06', class: "nav-items d-none d-md-flex" }, index.h("li", { key: '51fd951b017fa4a9f03c00dcaa4bff55a0ad19cb', class: "nav-item dropdown" }, index.h("a", { key: 'eeb508046a496ce4b88f9468d2d817335ccb39b1', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), index.h("ul", { key: '9b4ff9cc745f1b67911c8b3b27f891a20cc4dd1b', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, index.h("li", { key: 'f9d4cc8a176d5ef79a4d566a94887207b2d1fe57' }, index.h("ul", { key: 'c5e74b9cdb8946b416d83c8f328df29cf48cc155', class: "ir-mega-menu-column" }, index.h("li", { key: '2aed7a967bbd8165cdb08237a85221a9e2be4059', class: "ir-mega-menu-row title" }, "Parameters"), index.h("li", { key: 'e27d3ca94e2daa662a77de0e6762bd2992ad4de7', class: "ir-mega-menu-row" }, index.h("a", { key: '92b5a86dfd15776c06ec5934156fd28d2c6bdfaf', href: "userinline.aspx" }, "Users List")), index.h("li", { key: '9a3e155545b9764b96c3fc928f3713b9cc7d725b', class: "ir-mega-menu-row" }, index.h("a", { key: '86cedfef927a069bd1722ce2744e2ab170b993a5', href: "languageinline.aspx" }, "System Languages")), index.h("li", { key: '62f936df291db6a218849c4d8d9f6f8c3170a344', class: "ir-mega-menu-row" }, index.h("a", { key: '42f8a18a16096d69a33faf11047d733f73de0cfc', href: "countryinline.aspx" }, "Countries")), index.h("li", { key: 'c2d4ba915649e0915b3d941248a2dd8ca433c722', class: "ir-mega-menu-row" }, index.h("a", { key: 'ad3d55525ae9e0e21e190836b1adfbabee363389', href: "level2inline.aspx" }, "Country Level 2")), index.h("li", { key: '2fd5718347e91de2245c6ad4c97e1cf24bf97a8b', class: "ir-mega-menu-row" }, index.h("a", { key: '507aa5ae1da30d987c3539e1320823aff54afc8c', href: "cardinline.aspx" }, "Credit Cards")), index.h("li", { key: '1ccf6207bcd4be5ed7e4f1cdef2f5bf9c9459555', class: "ir-mega-menu-row" }, index.h("a", { key: 'a49246a80ffbd5ca640ec1b230c8b2fb940c9579', href: "hotel_chaininline.aspx" }, "Hotel Chains")), index.h("li", { key: 'e7b7fb587a842773ed66da4728ddefa0688c2562', class: "ir-mega-menu-row" }, index.h("a", { key: '9c417c77055f4d9ddc00a721b5dc9be921934c4c', href: "currencyinline.aspx" }, "Currencies")), index.h("li", { key: '2381fff5a72f7025002c0c15055297884cc450d1', class: "ir-mega-menu-row" }, index.h("a", { key: 'b9b913c0f091091f05088f99c82331ccdacf9d44', href: "amenityinline.aspx" }, "Amenities")), index.h("li", { key: '028f687b6480a370dea3138175f1d0275fd63d19', class: "ir-mega-menu-row" }, index.h("a", { key: '5b0cdb789109f5e73553923f273d5a38c9f4cfa1', href: "foodinline.aspx" }, "Food")), index.h("li", { key: 'e0b794dbaaf5929494b1b4f31ffa15e11727a6e0', class: "ir-mega-menu-row" }, index.h("a", { key: 'bf6b82e035948516b2045359259e86fcdc470353', href: "beddinginline.aspx" }, "Bedding")), index.h("li", { key: 'dd8af3374104093f3080a5095cb50dfd30a6a7d6', class: "ir-mega-menu-row" }, index.h("a", { key: '6e2a748d2e447469ae651b2caa684c41d1c3bc83', href: "setupinline.aspx" }, "Setup Table")), index.h("li", { key: 'b93bb314bf06cc00a922e566f71a86edcec59aaf', class: "ir-mega-menu-row" }, index.h("a", { key: '8998aaea79b33305d0aef05157d53403e799522e', href: "gwedit.aspx" }, "Payment Gateways")), index.h("li", { key: '16483492e2127ec3e0075e4e3145afbf45a9f131', class: "ir-mega-menu-row" }, index.h("a", { key: 'e0d193fd2c38bf5cb3db33fce2ab8b13e0f70f4b', href: "channelmanager.aspx" }, "Channel Manager")))), index.h("li", { key: 'e90ab2f80160528f201794fd444c1752248b9d49' }, index.h("ul", { key: 'e4782093e9c6044b1f502f191d8f77f777384fd5', class: "ir-mega-menu-column" }, index.h("li", { key: '620455bd0994df0d75a653fceb03d4ca7568011b', class: "ir-mega-menu-row title" }, "Main"), index.h("li", { key: 'e287337a801a58d52588a84649cf7cf96898238a', class: "ir-mega-menu-row" }, index.h("a", { key: 'd282f8a74ef351a61a233025b784da3ad24a7780', href: "mpolist.aspx" }, "MPOs")), index.h("li", { key: '8a0c8fd2bf203ab79ff4d96fe0d9e07010ce5122', class: "ir-mega-menu-row" }, index.h("a", { key: '1aa8c2f380595173fe9160addd6b9bf4a0b54611', href: "aclist.aspx" }, "Properties")), index.h("li", { key: '232d42b145297cb05ef233bc7a445eb318e452cd', class: "ir-mega-menu-row" }, index.h("a", { key: 'f9dbea3ca8bbe8ab97036a3738121931e2085aa2', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), index.h("li", { key: '6b14f20ad9fe069389751ba6df422f4685622bc2', class: "ir-mega-menu-row" }, index.h("a", { key: 'f6d449123ab012e473b61f6dc98dc45087f70463', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), index.h("li", { key: 'c25d27f197a5ba4aee44bc6d033a493023839cdb', class: "ir-mega-menu-row" }, index.h("a", { key: '5c1d30ceb4297b1b68bb9efdf7e76189c4bfb197', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), index.h("li", { key: '4435575d20e4fde29809f296713b146b41d1dc03', class: "ir-mega-menu-row" }, index.h("a", { key: '2a02dc64fb5f2e7cde24d46d10e23dc56072a888', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), index.h("li", { key: '12c513203c68e5c3b6c3e44282fd79a29109b01f', class: "ir-mega-menu-row" }, index.h("a", { key: 'c4e0bbeb8e44893faf18658b6d4278a8f5f34ad7', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), index.h("li", { key: '00056f789274784cf9bf10f0a844a8e6bbee64ed', class: "ir-mega-menu-row" }, index.h("a", { key: '89af6e346f164a5aa21dcc7579dd4314a8787f0b', href: "mpobillingreport.aspx" }, "MPO Billing Report")), index.h("li", { key: '16daac54a895f0c6e197d60d54330a6bb6c43621', class: "ir-mega-menu-row" }, index.h("a", { key: '7ae9defa13db7d7e1753befba2d69fdd62d5fd63', href: "Acmemberlist.aspx" }, "Guests")), index.h("li", { key: 'f65600a85e0abdf51e5f94036d82780e80da80f7', class: "ir-mega-menu-row" }, index.h("a", { key: 'e54cda39d280624ac93a21217185cf0079d97957', href: "acbookinglist.aspx" }, "Bookings")), index.h("li", { key: '88a9c2772d7d112d26f08368fb26e6b6440aabcb', class: "ir-mega-menu-row" }, index.h("a", { key: 'a9ec52a890f10baf024b0c89f23ac13d7d472872', href: "billing.aspx" }, "Billing")))), index.h("li", { key: '9f4174fae552e88a31eb1b448327d365a3664953' }, index.h("ul", { key: '7e9e308ffa452132f081bdac5090feb5d0697dfe', class: "ir-mega-menu-column" }, index.h("li", { key: 'e70959de9e533d45768596c4e868d4a28acbd9b3', class: "ir-mega-menu-row title" }, "Locations"), index.h("li", { key: '72be7852c6506acd966ffa3b381942ee5ce64d89', class: "ir-mega-menu-row" }, index.h("a", { key: '3bd744ba6483686306d473a46f8c0e3286a5d1db', href: "poicategoriesinline.aspx" }, "Types")), index.h("li", { key: '072b5cf99f6de661d524daf1eb2030e9d8d6c93b', class: "ir-mega-menu-row" }, index.h("a", { key: 'cc2c5a8a4f6225b9099ec8afca303e7ba448b5b2', href: "poilist.aspx" }, "List")))), index.h("li", { key: '2ffe5974b0710f60739083efb512911a7b742d08' }, index.h("ul", { key: 'c435ad20cb4ce87c5b2448374d6d65549058e899', class: "ir-mega-menu-column" }, index.h("li", { key: '2bdba0954bda34ed1efb4769bb0f85259763bdf9', class: "ir-mega-menu-row title" }, "Referrers"), index.h("li", { key: '1d5e25ee202fb2b26f88fa7df01cb915573362ae', class: "ir-mega-menu-row" }, index.h("a", { key: '35926f688150c69282a951ee14ef24ef51dff86b', href: "affiliatelist.aspx" }, "Affiliates")), index.h("li", { key: 'b0b3ca70386918d11cddfb353b711f95704076d0', class: "ir-mega-menu-row" }, index.h("a", { key: '2784bb8ef81d644cc85f9fbcb94541e21f2286c3', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), index.h("li", { key: '2d89278156e3121b61d569ba7345ddd23d101f9d', class: "nav-item" }, index.h("a", { key: '4bee2bde0f053aa4037025743cd639869be4f02e', href: "#", class: "nav-link" }, "b")), index.h("li", { key: 'e38c0fc10dd6d3192fa03e54b57681a0cf4cb8a2', class: "nav-item" }, index.h("a", { key: '608ab51ceb837dae17b6c84caf9a0ac62d797a30', href: "#", class: "nav-link" }, "c")), index.h("li", { key: 'd78a1dae617f7bc1cad4f496f0f14f970932a7fd', class: "nav-item" }, index.h("a", { key: 'a793b22d32774346afd1e1f957172e67b91770b8', href: "#", class: "nav-link" }, "d")), index.h("li", { key: '4515c2f781664457c5740d9cab9f549a6d3042f2', class: "nav-item" }, index.h("div", { key: '2b1e02e19c0d5d507743d099d579509a45198d94', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, index.h("ir-notifications", { key: 'ae9f98dffc16995b805fd28421c4b468fb985d24', notificationCount: this.notificationCount }))))), index.h("div", { key: '49db6b48f55a60c07223df9a1e21b1b7387d6626', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, index.h("div", { key: '92ad87095091bbc324275300386cf3e63d18cb08', class: "mobile-menu-header" }, index.h("div", { key: '8004b7e36e73b79497cb336e5af4227ecfdb3e93', class: "hotel-name" }, "Hotel Name"), index.h("button", { key: '5b5f4385465d4ce466b439ff7733cbdc870b74c7', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), index.h("div", { key: 'f4e999b70fb797868291459d578117fc4a172def', class: "mobile-search" }, index.h("ir-m-combobox", { key: 'b6b1220c9b2ba5fb0f8d76863818f0fc8679edda', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("ac-pages-menu", { key: 'e72918000234f4f9a5b06d488b21335d43abe5fc', location: "sheet", "onLink-clicked": async (e) => {
                await utils.sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), index.h("div", { key: '0cb6342bd4d924f2d263fdb96f74b9c7799bf2aa', class: "submenus d-none d-md-block" }, index.h("ac-pages-menu", { key: '90c0adabd9ea8969f0e3a99a93ca93d01a6af690', pages: this.pages }))), index.h("section", { key: 'f4620c9cb903534402acd610b04f840672fb80a3', class: "p-2" }, index.h("div", { key: '469539d6fe8418c78f304fb8328d202099594894', class: "row g-3" }, index.h("div", { key: '42edadf004c50744cf3cfaf97f215629e0f80f12', class: "col-md-3" }, index.h("h5", { key: 'd7ad71cf556fef0d157c692853a8b14fdcebff8d' }, "Static Options Example"), index.h("ir-m-combobox", { key: '11d30554b1dcdb50fa9a9409c3886e672e628cb9', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, index.h("svg", { key: '7de1f570011e517eb5d9010c33bfbb396ce08680', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: 'a49eb11efc1352cad071fad401c5fdeb4eeedecb', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && index.h("p", { key: '8be7267b50e6f179d423909279ac5dc31247554f', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), index.h("div", { key: '190285199c9a0e12dbe0b48e9b7d4ea852011787', class: "col-md-3" }, index.h("h5", { key: 'e086d07d4260c3a9cb6369329d405714f5bd97ea' }, "External API - Countries"), index.h("ir-m-combobox", { key: '042d08679735ee88aca0f13bdadd54b41140ad78', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && index.h("p", { key: '7b70718c3218f13d7c1d1c27300d3ef1f480775f', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), index.h("div", { key: '6e53575c14fb8fd50a6a28c144b5eb260e8d95bf', class: "col-md-3" }, index.h("h5", { key: 'b3779a05e64b657a32d019ee8ebba4316aa4fc1b' }, "Custom Dropdown Content"), index.h("ir-m-combobox", { key: '3833c42567e49378b779665674696073ad7f71b2', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, index.h("div", { key: '0143047098d01ce81b24ddc1eea853dcbd985106', slot: "dropdown-content" }, this.isLoadingCustom && index.h("div", { key: 'c36b710a2e50c68727f995217b8fe8c157205c58', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && index.h("div", { key: '90adc330c29a782f7aa5b12009323a0a9117d6a1', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index$1) => (index.h("div", { key: index$1, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, index.h("span", { class: "me-2" }, "\u2B50"), index.h("div", null, index.h("div", { class: "fw-bold" }, option.label), index.h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && index.h("p", { key: 'e636992bfcaf73ca268fbbfa7993393e636b33e8', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), index.h("div", { key: '61a52f03e82b0ac7f74b42234b93c8bc7fc20d19', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, index.h("button", { key: 'd77f1228576084d09899b8dbb78d711a189f504b', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), index.h("button", { key: '71c306a5fb97181b70e76e938c6d15e48b2c1fa9', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), index.h("ir-input-text", { key: '14b84e2e6ce3922e90cb8472d312d9751104ab53', variant: "floating-label", class: "my-text-input", label: "First name", style: { '--ir-floating-input-height': '4rem' } }, index.h("svg", { key: '00284628ce659c8d850740fdf618843ef311dd33', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: '4ec40bf7fd7a24aabbf6ebcca8afb84583f3ad75', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), index.h("svg", { key: '320f54183dafb1b62b28e6432f463a66aebb2438', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { key: 'db2c2ddae915d75a1090428e61bd1191ba084d8a', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))))));
    }
};
IrTestCmp.style = IrTestCmpStyle0;

exports.ir_test_cmp = IrTestCmp;

//# sourceMappingURL=ir-test-cmp.cjs.entry.js.map