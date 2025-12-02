'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3978a3f8.js');
const utils = require('./utils-3b96f8e3.js');
const icons = require('./icons-b526f0f2.js');
require('./moment-1780b03a.js');
require('./index-63734c32.js');
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
        return (index.h(index.Host, { key: '29109d096f75b3c333b904bab60450aae7d7ff1d' }, index.h("nav", { key: '35e0301deac420717439e22c83c6b01127c4f4b9', class: "modern-navbar" }, index.h("span", { key: 'f0992377a55524d8ec2071066688bebd4eaaaa57', class: "overdue-banner" }, "Overdue $300"), index.h("div", { key: '91b167c5f17eed99ed46bd70599120b6d09c3cc4', class: "navbar-container" }, index.h("div", { key: '4548711b1f1ee87005f56e16d7d17f1c743f83fb', class: "navbar-left" }, index.h("button", { key: '225b237355ace9db332d83bcebf1dca0cfc66661', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, index.h("span", { key: 'a091b878a8839afd5a598394ed3ea0fc27a9cc73', class: "hamburger-icon" }, index.h("span", { key: 'a12ff23b396f979db54632dd2134593326fddc81' }), index.h("span", { key: '40ef595d30be18d0d0b17c523bc3729637c0f116' }), index.h("span", { key: 'bbf78a89b77bbe6a8078ff3051be29048616ce91' }))), index.h("div", { key: '83962416a1ab2d84e1428a1a8c545002a585b5ef', class: "navbar-brand" }, "Logo"), index.h("div", { key: 'af0d2bacd1a6c0fa2286a50b2e6252bb5f5d5e7e', class: "d-none d-md-flex " }, index.h("ir-m-combobox", { key: '3a7f7474986f1e9c48a91f1690dd840d98437fd0', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: 'df5b3928faca78cfd682e1d87cfceb5d59da98be', class: "hotel-name d-none d-md-block" }, "Hotel Name"), index.h("div", { key: '585e775ebe801c23fbd38a160113d1cd6adf2f18', class: "ml-auto d-md-none" }, index.h("ir-notifications", { key: '7b452ef9d8fd3ac2c4de5f655bf834c106b866ca', notifications: this.notifications }))), index.h("div", { key: '707c2a65bc5a166dad9df8c7fb20ee836b02cb82', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, index.h("ir-m-combobox", { key: '3baa952dbbc790269c642cb4d3beb58eb34aec3c', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: 'eb0cc70c6498d8e132490560997f047aa4419e29', class: "navbar-right" }, index.h("ul", { key: 'e40c0d30d38bf29e8faed613253608d608a5396f', class: "nav-items d-none d-md-flex" }, index.h("li", { key: '705a7ed18ae3c5212184104e98226eb96bfaa87f', class: "nav-item dropdown" }, index.h("a", { key: 'f6843265308bdd3f9a5d109d6db2325f44219090', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), index.h("ul", { key: 'd4b53ae0bdf78e387d4aa36b677457a267e3f0c1', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, index.h("li", { key: '3c4fbe475d795fe0e8c78604f5d3a51675f5dfc2' }, index.h("ul", { key: '9bc925590d35a2afb224e884407989426b7d89d7', class: "ir-mega-menu-column" }, index.h("li", { key: 'a2af2210073bd12a3c17156e7ecf0ceeb2616c25', class: "ir-mega-menu-row title" }, "Parameters"), index.h("li", { key: '5197967619b17a73b7a81df436a7fb36a689e781', class: "ir-mega-menu-row" }, index.h("a", { key: 'bd00d185c4e79d10f31cf0f804dfeedfda03de30', href: "userinline.aspx" }, "Users List")), index.h("li", { key: 'f3e3128af43702f094c081fd0eb6ece052a92ca2', class: "ir-mega-menu-row" }, index.h("a", { key: '14ce53de48544cf1a14bef34fd2295779d18b50d', href: "languageinline.aspx" }, "System Languages")), index.h("li", { key: 'ec8670c2a09978f06965cce68003658a6d3acbf3', class: "ir-mega-menu-row" }, index.h("a", { key: 'd8c2ef0c215b04cc31539872b02ff57e94c95caf', href: "countryinline.aspx" }, "Countries")), index.h("li", { key: '20de8d0b8c5d5197c4f3442933f4402a3d354a3f', class: "ir-mega-menu-row" }, index.h("a", { key: '9eaa0cf147738f2b654a701ed5e836eda1b2de47', href: "level2inline.aspx" }, "Country Level 2")), index.h("li", { key: '0449b1035b7e69bda4a2d34270e2b4a0888455cc', class: "ir-mega-menu-row" }, index.h("a", { key: '9c324fd6a272155d27b6793d9a084d10679c230f', href: "cardinline.aspx" }, "Credit Cards")), index.h("li", { key: 'f8b5d6d5b83cd0e8ca3a66f2794f9470616caffd', class: "ir-mega-menu-row" }, index.h("a", { key: 'e897e0b433547efaa2d55c59da67fda794843ef1', href: "hotel_chaininline.aspx" }, "Hotel Chains")), index.h("li", { key: '15aed60c206a581345781cc4a447e8cc34fa1f29', class: "ir-mega-menu-row" }, index.h("a", { key: '90d4c7a07a6cd7d70fb81ac4b38be5e0ab35b6e5', href: "currencyinline.aspx" }, "Currencies")), index.h("li", { key: '2070c2873668a3d6e5259ae7fab56fe586aee68f', class: "ir-mega-menu-row" }, index.h("a", { key: '5d9e47454df3f3e60ed87969003fd6700c131285', href: "amenityinline.aspx" }, "Amenities")), index.h("li", { key: 'c789c3878439774611a55a21157839e35dd32db7', class: "ir-mega-menu-row" }, index.h("a", { key: 'b5c50a6a8604da0c71451c92d2a7c98745f492ed', href: "foodinline.aspx" }, "Food")), index.h("li", { key: '6a5ce08dd9726a0be36cb18fcbdfa9216c3f4cd9', class: "ir-mega-menu-row" }, index.h("a", { key: '8f08f5940fb5894c8e5c0bd78eac844e30b021c0', href: "beddinginline.aspx" }, "Bedding")), index.h("li", { key: '878ed2e0475c836c5d0d8c6b1b4b5b69b2bf05e3', class: "ir-mega-menu-row" }, index.h("a", { key: '7216f648b31f58145e63e72d464d29d50113fea4', href: "setupinline.aspx" }, "Setup Table")), index.h("li", { key: '5b0fa2224eeb2829bff1c994b264cf50b24bc237', class: "ir-mega-menu-row" }, index.h("a", { key: 'bbb591075ac3f01080ebaefc32c7d9c4591c92ce', href: "gwedit.aspx" }, "Payment Gateways")), index.h("li", { key: '28bf57f86a9ddc4d590f27d8ab03e747816737b3', class: "ir-mega-menu-row" }, index.h("a", { key: 'b6f5cfb7c60b79f9c17c58dd133cb7e77d514671', href: "channelmanager.aspx" }, "Channel Manager")))), index.h("li", { key: '0dca924cf61df7ec5e94ee4d81227d3ebd93707c' }, index.h("ul", { key: '9c661f67a164a74fa4bbda4ba9212e19beeac79f', class: "ir-mega-menu-column" }, index.h("li", { key: 'c2a70fa9b6dededc83dc623d1763d58384f55ecb', class: "ir-mega-menu-row title" }, "Main"), index.h("li", { key: '100ef5e1d5f5c44ddbed22f6541a566f6c29f851', class: "ir-mega-menu-row" }, index.h("a", { key: '833acc85df566df73613050baa2b01743ddde4fa', href: "mpolist.aspx" }, "MPOs")), index.h("li", { key: '65e284caf4ffa461dd018d87c71c57dddb225e03', class: "ir-mega-menu-row" }, index.h("a", { key: '6e895d4ff956282038fafbd12e57cb3fb3ee0e5c', href: "aclist.aspx" }, "Properties")), index.h("li", { key: '4047a3a068ce823b9707ff4d577450089bc5a762', class: "ir-mega-menu-row" }, index.h("a", { key: '06debff5e97009cb810aeed1f5ce5181cb29f351', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), index.h("li", { key: '6ff642bcc7681d532a20986cfacf196b6e70f8ad', class: "ir-mega-menu-row" }, index.h("a", { key: '6b4d43f272bb3a94d83d3939170ed85c20b4136b', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), index.h("li", { key: '25db9d08f676285e0cbbf1321725291a11aed518', class: "ir-mega-menu-row" }, index.h("a", { key: 'aedba5cbf26ad45273bbf516ceee28653e597b95', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), index.h("li", { key: 'cea04bae20d884e67e3033fc985971e3a5ac0a7e', class: "ir-mega-menu-row" }, index.h("a", { key: 'c2871b657c250c405357634e4d592e552da12f6a', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), index.h("li", { key: 'fec9430bbcfcb567a0bba25d9aa06663c939ddd0', class: "ir-mega-menu-row" }, index.h("a", { key: 'eb2a41436ac36fb056940058967212c6f5e95bac', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), index.h("li", { key: 'a7c311eb74f0cddc093f496f4eacb3dadcd3a50f', class: "ir-mega-menu-row" }, index.h("a", { key: 'd836671100e1062e1e9aefb0b9c98a5f4c73fd3e', href: "mpobillingreport.aspx" }, "MPO Billing Report")), index.h("li", { key: '0debd7216ab90f445a3eca3033f67f74e5a475e4', class: "ir-mega-menu-row" }, index.h("a", { key: '36e18a90c16951eaf54372408fae20e28e1fb122', href: "Acmemberlist.aspx" }, "Guests")), index.h("li", { key: '6326454967972583e0326227c46eb9ac33cafa06', class: "ir-mega-menu-row" }, index.h("a", { key: 'ce8c173516a4f8e27976ac1b356f7f18834c5047', href: "acbookinglist.aspx" }, "Bookings")), index.h("li", { key: 'f737bf0dcdea4224049b3722689e53c773a8f22a', class: "ir-mega-menu-row" }, index.h("a", { key: 'bce4302517192a44f6c94bc6ceca19297a4e6fac', href: "billing.aspx" }, "Billing")))), index.h("li", { key: 'cde0557c64223e16955b95bb525f46b21567dea3' }, index.h("ul", { key: 'b3c588d6d045f3e293a52622dfd70ed9b6a88990', class: "ir-mega-menu-column" }, index.h("li", { key: '3f7ebf0dd326a07cba40e43ed4ef86d0499efbf2', class: "ir-mega-menu-row title" }, "Locations"), index.h("li", { key: 'a4500310f839ddebf47e2f9245993478eeab4844', class: "ir-mega-menu-row" }, index.h("a", { key: '289d2904e8c419bdaa46e2fa89a07f8c94fb2c7f', href: "poicategoriesinline.aspx" }, "Types")), index.h("li", { key: 'be16388a192fd817fcfe39523ceda89127f05675', class: "ir-mega-menu-row" }, index.h("a", { key: 'ec45987a7550901a323cab1761cbe2f01c5443ff', href: "poilist.aspx" }, "List")))), index.h("li", { key: 'a59da0635260c9701bd8176b68b956d188cbd3e7' }, index.h("ul", { key: 'eaa5fdaaba55a5b44d355cab2c73717c50a297ed', class: "ir-mega-menu-column" }, index.h("li", { key: 'e09754daebf065be60984a4ff96bc497e0c9756d', class: "ir-mega-menu-row title" }, "Referrers"), index.h("li", { key: 'a658e999c01b87ae31244e2baa7d2201915b2424', class: "ir-mega-menu-row" }, index.h("a", { key: 'ccfbadadc63221c929800abacd6877b5d6fb5b6d', href: "affiliatelist.aspx" }, "Affiliates")), index.h("li", { key: 'b1dc4bb165f96332cbf8739d25342f2c5d0d86cb', class: "ir-mega-menu-row" }, index.h("a", { key: '7c091aa8ae9c1ae1b973d329f4b8a22b19253d5a', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), index.h("li", { key: '2eab858fd53aff11c1888ac01ddd896ea0b69894', class: "nav-item" }, index.h("a", { key: '8477f911c8488642440bdd9d27f4f279d8db6aea', href: "#", class: "nav-link" }, "b")), index.h("li", { key: '38c7e43e7c515870f93ecf166d1adec5210f8b74', class: "nav-item" }, index.h("a", { key: 'c3da80bfc81fdf9676bbfa4bc7dc9848ddf5191a', href: "#", class: "nav-link" }, "c")), index.h("li", { key: '6c1a22eacab8cf5ece12d7ab7ce7bc755fbae585', class: "nav-item" }, index.h("a", { key: '702400c652693f5a693728b5a5f9d6be13ec3b93', href: "#", class: "nav-link" }, "d")), index.h("li", { key: '4e0ffe6429000458faa4b9c7d00c3460057e38c2', class: "nav-item" }, index.h("div", { key: '9766db175fb4e65a590cb55301000027b9c2c55a', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, index.h("ir-notifications", { key: 'a02f84ab834afd2e3c267740dbacf38a52b4eadf', notifications: this.notifications }))))), index.h("div", { key: '5b0da3183bac8c2e487fd02c123c2f9fbaa0fcad', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, index.h("div", { key: '852afe50a4fbe358d3264710603021cc039bed94', class: "mobile-menu-header" }, index.h("div", { key: 'bb88424f9d096c4bbda83bcdd294bec830bdc3a1', class: "hotel-name" }, "Hotel Name"), index.h("button", { key: '75bc6b6c68533d4bae6b7a6846516bb3936eb6ae', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), index.h("div", { key: 'f2fbe1ac780c8961824ff85c12bc335b2362b554', class: "mobile-search" }, index.h("ir-m-combobox", { key: '630528878bd10667dd411f7fa8acf9c9d89eb947', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("ac-pages-menu", { key: 'e0e1c3163dafc44859e332949bd238b3b09742ff', location: "sheet", "onLink-clicked": async (e) => {
                await utils.sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), index.h("div", { key: 'e36ad0e9a3bec2797255c914701bc676f6243e81', class: "submenus d-none d-md-block" }, index.h("ac-pages-menu", { key: 'a337fcd7aacd1fc3cb4cec8a3fcb88fd9763177a', pages: this.pages }))), index.h("section", { key: 'd71b428c6c5bdb8deef73b067e45dc22aaf07562', class: "p-2" }, index.h("div", { key: '0f6d0ee9690e7b7442757870caca3bf794c04b5c', class: "row g-3" }, index.h("div", { key: 'bbd955807120f22f29c01fbc978dcf376c3986db', class: "col-md-3" }, index.h("h5", { key: 'e04c2171e3bde3e67bb1aa581003723095ae4460' }, "Static Options Example"), index.h("ir-m-combobox", { key: '1d3f98bd9e47fd5bb5ab9d9091c310449577ee54', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, index.h("svg", { key: '64a2536b3d0f45f9b082dcfbe468e253561602b1', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: 'e5d2ca06efc6e407bc27d5900a0aaad26f6c0a75', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && index.h("p", { key: 'a9100972e9cceff1afe74e317f6963e0113872c9', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), index.h("div", { key: 'ab0133db53ff697086bd867840c0144bb9fade0f', class: "col-md-3" }, index.h("h5", { key: 'eca77b18eac82032a6b8d87fdebfcdae4ef285d4' }, "External API - Countries"), index.h("ir-m-combobox", { key: 'ca68b53bc63ce4a60d9d714171c0a517cf5cc0fe', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && index.h("p", { key: '3df151468ac3ba69a09be4be3952f817709e6639', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), index.h("div", { key: 'd6a6f99ee5f727dd2409955ff5c147080b5c19e3', class: "col-md-3" }, index.h("h5", { key: 'aff516d3a6b67606c86de66b7c89dc61e53ca68b' }, "Custom Dropdown Content"), index.h("ir-m-combobox", { key: '945c5d52f7498c44531fe97d2511bd40320985bb', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, index.h("div", { key: '44ab657dae9902f42c33a5036de4fd67837c39eb', slot: "dropdown-content" }, this.isLoadingCustom && index.h("div", { key: '51f8eb275897ea949db32703633ebee35d39d231', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && index.h("div", { key: '31362093b7dfaafafa4a21fa682bbd2f90af456b', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index$1) => (index.h("div", { key: index$1, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, index.h("span", { class: "me-2" }, "\u2B50"), index.h("div", null, index.h("div", { class: "fw-bold" }, option.label), index.h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && index.h("p", { key: 'f74fa068f12b09ec3f73eddc08fc0b2b36c957c1', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), index.h("div", { key: '64a891f6cccc6dca4ec75588087b4241d3301a94', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, index.h("button", { key: '173f013b4645ca42abf9f2aec4d808fa7a0bc712', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), index.h("button", { key: 'b5bac542f8602b6c4b790d33ad5a779f6b16abe1', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), index.h("ir-input-text", { key: '47dcc8b0d85497383b50f9802060f3bc13454bc5', variant: "floating-label", class: "my-text-input", label: "First name" }, index.h("svg", { key: '0455be688fbf6f7c48ac2d255f08031fe93c85c0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: 'ee0d367419c7c18e1ca46aff97f52feaec8bd8d9', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), index.h("svg", { key: '8710f0c3fa604a5c3399e6ce01a04b5a945295dd', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { key: 'f0da582ff9c30788bdff76562df90b0d17a7d93d', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), index.h("ir-select", { key: '970a5e9282ce6736ed316de987e0d2476306cb37', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: '2fd42a6f416afb26fc662838899c4d79b4cc45e5', class: "my-2" }), index.h("ir-select", { key: '71e89cbf5269781b396fbf252c56a935a6584f6b', label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: 'c29e14427dee4002e8b525fb3c17940840b01b8c', class: "my-2" }), index.h("ir-select", { key: '72ac2bb2a4c2901ce51114cc9c34c6b5f9f2ae13', data: [{ value: '1', text: '1' }] }), index.h("div", { key: 'd8ac28e324bc728c97d9fc6b1d66c88a05548f70', class: "card p-1" }, [
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