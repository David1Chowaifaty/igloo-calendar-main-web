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
        return (index.h(index.Host, { key: 'd491bb1b4bceec2ed79c408e400b77b26fc4f293' }, index.h("nav", { key: '9195134990fe53398a4013a90fd642f1092affb3', class: "modern-navbar" }, index.h("span", { key: '291a0f00c68c79995b7e67e789567bbae2d1e0f7', class: "overdue-banner" }, "Overdue $300"), index.h("div", { key: 'be0927fde4dfe0546e1bbcb01613fb161c55c792', class: "navbar-container" }, index.h("div", { key: 'f2c332486b2b2030f67fe1129583fcc5a20478eb', class: "navbar-left" }, index.h("button", { key: '9bddf3c9861744be2f3bf0b8a10ddf591062171f', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, index.h("span", { key: 'fea939ee87edf9268c3fd200f894720fd355fad1', class: "hamburger-icon" }, index.h("span", { key: 'c42b00670cbffdfbd234c40546bb4313e435e9d2' }), index.h("span", { key: '8a3b854caa49c4810f02ec85dddcb5a452eea85e' }), index.h("span", { key: '74bfbabebe7be9de72f514eb143dc4c7c73dbe93' }))), index.h("div", { key: '6ec294814a762fff4d3a44f31095e9b091bce842', class: "navbar-brand" }, "Logo"), index.h("div", { key: 'cf58315807f224196a2c618d8fcd248e74d51dff', class: "d-none d-md-flex " }, index.h("ir-m-combobox", { key: 'f23a1ba98f6e42c00bb88260aee2bb10e1d6a233', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '52e4c133b07fe3cac24bae9e33297c76967564b5', class: "hotel-name d-none d-md-block" }, "Hotel Name"), index.h("div", { key: '9cf00ef94e7b3c1f2f8e724105d0011c35d0e92a', class: "ml-auto d-md-none" }, index.h("ir-notifications", { key: '7814ee9e6daafce77a0058a1570776c0771ac8ff', notifications: this.notifications }))), index.h("div", { key: '940eb4173b3960ab93710fcf2e337500eb03990e', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, index.h("ir-m-combobox", { key: '489fb60828d714aef3e67aa82433cebf5826d912', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '452815d68453cdf4950ce632586e0f41fe78bafc', class: "navbar-right" }, index.h("ul", { key: 'd5cad2c3c925a88bc5df95a23b801457a4a065f7', class: "nav-items d-none d-md-flex" }, index.h("li", { key: '1436d5b6e302f43b61f62b8860f5f216edbdcb4e', class: "nav-item dropdown" }, index.h("a", { key: '9420f06cce7cdf309aa9daf01a0f885142639794', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), index.h("ul", { key: 'b975917dd2f12e8ceee509cfa597c9a257a1acea', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, index.h("li", { key: '79e3b030510c12b4b3a55cf870ae824a9cad34f0' }, index.h("ul", { key: '5ee9cc441c884f7da76ef44944cf6d2960242fcd', class: "ir-mega-menu-column" }, index.h("li", { key: '9df6985147cadf8a424d1580e77be6ffde43fd8d', class: "ir-mega-menu-row title" }, "Parameters"), index.h("li", { key: '01c6884445ca93245788f9410ca7ce03b0b39902', class: "ir-mega-menu-row" }, index.h("a", { key: '8f4d82aae5577e797d5b2d04441a633edd45a991', href: "userinline.aspx" }, "Users List")), index.h("li", { key: '49fcf8c69aaed4b7b515a8df0b036ae6045b4e1f', class: "ir-mega-menu-row" }, index.h("a", { key: '30d69de3be03f5d4325dfa8517545e88b6d19aeb', href: "languageinline.aspx" }, "System Languages")), index.h("li", { key: '9da0133dce01ac610bf23ab16ef1b9f8a7afb7c3', class: "ir-mega-menu-row" }, index.h("a", { key: 'acc27693fd53c875987ab5b89b04ecd25c814189', href: "countryinline.aspx" }, "Countries")), index.h("li", { key: '014f5ee26d112183e858329c5d372858467c469e', class: "ir-mega-menu-row" }, index.h("a", { key: '94cac8c3e50ae69b62b59e7d60ddaaced2995ca5', href: "level2inline.aspx" }, "Country Level 2")), index.h("li", { key: 'bf4f9d61d29150ce333865bb5b031141ded43868', class: "ir-mega-menu-row" }, index.h("a", { key: '375bd7bd3edf0bccb7ac7f614fc786cc8aa86c2e', href: "cardinline.aspx" }, "Credit Cards")), index.h("li", { key: '0f31482b0a4b41082d1afab413f27d148b1df4ca', class: "ir-mega-menu-row" }, index.h("a", { key: 'f2e3fd1af5acdc999bbd13c905c8ee5dae303537', href: "hotel_chaininline.aspx" }, "Hotel Chains")), index.h("li", { key: '7180b432323160cb03b6cd08ccd013822ab3e32f', class: "ir-mega-menu-row" }, index.h("a", { key: 'b855cc1345b87c725a42c65912a7a3ceec9f8815', href: "currencyinline.aspx" }, "Currencies")), index.h("li", { key: '7b3b3a485c39ecfc4f0c5fe635b8414367fc935e', class: "ir-mega-menu-row" }, index.h("a", { key: 'dc52fd26ab0d4a6d25aee2e8ad4c440546a0cf45', href: "amenityinline.aspx" }, "Amenities")), index.h("li", { key: 'd75581e29841eaf8f82db030072cd2d1f327989d', class: "ir-mega-menu-row" }, index.h("a", { key: '02ae1eb884b73e2b4c0089c131c06ee1556cf991', href: "foodinline.aspx" }, "Food")), index.h("li", { key: '7e1890419c0bca9540288975487300950fa19e37', class: "ir-mega-menu-row" }, index.h("a", { key: 'f0dd6443977cf665b5aa8d841b97f4de571b7d26', href: "beddinginline.aspx" }, "Bedding")), index.h("li", { key: '7c095065bd7fd9da4dddd77999628add9f611a7e', class: "ir-mega-menu-row" }, index.h("a", { key: '0721697a8eac60e39c81c1a07c5edf002a0a2a3a', href: "setupinline.aspx" }, "Setup Table")), index.h("li", { key: '23d46cf6402ebecaa2032aa44cbf07df5b3a4e40', class: "ir-mega-menu-row" }, index.h("a", { key: '8ddaa2bf3ce4eb8b355be3df5bc3d23064bf9ef7', href: "gwedit.aspx" }, "Payment Gateways")), index.h("li", { key: 'f8887b356588096f10bb0e2fa553f3d7b72dbcf4', class: "ir-mega-menu-row" }, index.h("a", { key: '1fafc30c7b89799400d4a3e56ff999d1620ad1a4', href: "channelmanager.aspx" }, "Channel Manager")))), index.h("li", { key: '99ad958338f32ba6ace65f0c8ea84630728c569d' }, index.h("ul", { key: '2375c6ffdc050c447942616f91e4dc25b3b4d617', class: "ir-mega-menu-column" }, index.h("li", { key: '1bd8d477aa385cd2f0f8bf292c4d0f2eb36a05c6', class: "ir-mega-menu-row title" }, "Main"), index.h("li", { key: '941c5c793339dd9c7959c678e3db7db93960c9a4', class: "ir-mega-menu-row" }, index.h("a", { key: '32066ddd31a43982b07cb4f2d28ceffa271ff1c0', href: "mpolist.aspx" }, "MPOs")), index.h("li", { key: 'e40450bfce6eeed822a6b8802ed3f8a6ffc074e0', class: "ir-mega-menu-row" }, index.h("a", { key: 'b0514b01bc7805b2c3320aff5559cc2bf6424331', href: "aclist.aspx" }, "Properties")), index.h("li", { key: '28595ba44e9fb7db5fa5ef6819517bd408114f66', class: "ir-mega-menu-row" }, index.h("a", { key: '49e7b751ce80386deaa4fafe78dc1ba339c04246', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), index.h("li", { key: '413540d58cb7aa00b4f80adcecde2380dba62493', class: "ir-mega-menu-row" }, index.h("a", { key: 'a72388cdd74c580f5e9dda273a97d6fbfed30721', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), index.h("li", { key: '4929ee86adf6135a28a6318cc9931c3c27467a5c', class: "ir-mega-menu-row" }, index.h("a", { key: '7685cdadc752a2ca834756e0a821dc15bbf3d9cd', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), index.h("li", { key: 'dba55440f2b392b718359657117fd2908c141bec', class: "ir-mega-menu-row" }, index.h("a", { key: 'ace6895cc2bb5872a34b365b046104be5781a6f9', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), index.h("li", { key: '386910b101eec547a7833f23331025d28349794b', class: "ir-mega-menu-row" }, index.h("a", { key: '192e154ed71660ec9200e3a80bd7e6959f3f818d', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), index.h("li", { key: '66e4ecc1fda77d791da7b4bb20ad6990e2593b75', class: "ir-mega-menu-row" }, index.h("a", { key: '7655773d8367caaf19fc3145975fa7c89b587eed', href: "mpobillingreport.aspx" }, "MPO Billing Report")), index.h("li", { key: 'da1ed130a82be47e40debdaa1f80b6f1f11a6da6', class: "ir-mega-menu-row" }, index.h("a", { key: 'de581f16e8af3f530016f0d328281cb045356403', href: "Acmemberlist.aspx" }, "Guests")), index.h("li", { key: 'e448373c525b4a74191e5dffbf2c1ef7ca400523', class: "ir-mega-menu-row" }, index.h("a", { key: 'f8f12564b5638435bed84d29294bac7a95246782', href: "acbookinglist.aspx" }, "Bookings")), index.h("li", { key: 'e6dbc062b36354fbb5c3c4c1b27e96cafb0ccfc0', class: "ir-mega-menu-row" }, index.h("a", { key: 'cebaa5e2bbf86b9dd9a5c317f1c0ecf1b6e5c373', href: "billing.aspx" }, "Billing")))), index.h("li", { key: '1ecd2940ac5c4600d30f85cfac83af1d53a74630' }, index.h("ul", { key: '08b7bbbbb507988b32a8868e6a8696e9f4605eba', class: "ir-mega-menu-column" }, index.h("li", { key: '5f67ec420017e660fdef15850f43fb5790bb5ee2', class: "ir-mega-menu-row title" }, "Locations"), index.h("li", { key: '3263d369d79b6cd7d937a68d20657046d7e4fc71', class: "ir-mega-menu-row" }, index.h("a", { key: '43cff444ebe6be028adb22830e57874c40830617', href: "poicategoriesinline.aspx" }, "Types")), index.h("li", { key: '0d65739db384cffdc15ab1de566f872a6f236ddc', class: "ir-mega-menu-row" }, index.h("a", { key: '0dc16be8e16b6e417e5cb09acedf629237e62ac5', href: "poilist.aspx" }, "List")))), index.h("li", { key: '9bdf98e19c06dadb1264548da9a2ddf099f5a624' }, index.h("ul", { key: '47ef5276b8caec3df8ac99268eca532f04d8a867', class: "ir-mega-menu-column" }, index.h("li", { key: '974aa99999c4c421249745e9789709558d3c5013', class: "ir-mega-menu-row title" }, "Referrers"), index.h("li", { key: '799fcdd48c9ea9e5632409b9ac0a356d96c13687', class: "ir-mega-menu-row" }, index.h("a", { key: 'a6d61c9eaeb27861524cc1b861bc8e9c81500285', href: "affiliatelist.aspx" }, "Affiliates")), index.h("li", { key: '46a79c6c880f6c7834f1a2086866b25cfd4479fd', class: "ir-mega-menu-row" }, index.h("a", { key: '268ad11cd89586256c799b918237a9176a51984f', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), index.h("li", { key: '7fa7b23e797639574eb26f519af3d07158233d81', class: "nav-item" }, index.h("a", { key: '3bf58a30addaa8ad80e8cfa43466355562ede353', href: "#", class: "nav-link" }, "b")), index.h("li", { key: '90e5798ae9e0886a0688b4d00438c020637b3afc', class: "nav-item" }, index.h("a", { key: 'a4a0a3b2ad3d8e1cd7a794e2c37ebf13e1cbde5d', href: "#", class: "nav-link" }, "c")), index.h("li", { key: 'f1b7a82c6b938319cbafc9dd41c04755a61deb43', class: "nav-item" }, index.h("a", { key: '516c0a2d1058c48cc2b9217a49dafec27359ee20', href: "#", class: "nav-link" }, "d")), index.h("li", { key: 'e69ee13398d50911325baa90f2dd87afe1ad5df5', class: "nav-item" }, index.h("div", { key: 'e79d534047e5b18b73f5909384db3e1474073194', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, index.h("ir-notifications", { key: 'dd193d29d6ce14e8200776e5e8a7d68cd49ad059', notifications: this.notifications }))))), index.h("div", { key: '8519b943525791680e3ec4bff05bb7aa028e5319', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, index.h("div", { key: 'f756c67ca91644aff060eeaf0531d6535d23dc1d', class: "mobile-menu-header" }, index.h("div", { key: 'd012e5657abe9fddd02c30ada49035d5c7824156', class: "hotel-name" }, "Hotel Name"), index.h("button", { key: '9fe98bf42ba9e942ff278c6814961786a262a937', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), index.h("div", { key: 'cce869e7eceb2d2f973d8a3c460c5e7b1988b5fc', class: "mobile-search" }, index.h("ir-m-combobox", { key: 'd32d9d552412a5226bfed741a7743fa026edde6f', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("ac-pages-menu", { key: '9a9da173a9fa135f363856bdc3bce54eaced7cb4', location: "sheet", "onLink-clicked": async (e) => {
                await utils.sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), index.h("div", { key: '213df48f8ef8c033490744d946f0c51bb81dde51', class: "submenus d-none d-md-block" }, index.h("ac-pages-menu", { key: 'da3195e4be112ade1b70d93f8435e4c10963fc7f', pages: this.pages }))), index.h("section", { key: '9634553a1575fb55fa0f33a903201366715e8f3d', class: "p-2" }, index.h("div", { key: '63a0c37a185840a2f4b55e094afbf888c75927aa', class: "row g-3" }, index.h("div", { key: '89fc55f5fd6a132b5d9a124ddc209f272023384c', class: "col-md-3" }, index.h("h5", { key: 'bad8e8fdbcdd08eb472682e6183ccc9e772e1e82' }, "Static Options Example"), index.h("ir-m-combobox", { key: '117691542ec6a922d90bbf997995c996a4f65800', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, index.h("svg", { key: '843707be5e03c89eaf035d777d590db5d03736f0', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: 'c26b918777e125837c047cf9b0a597b043acca7e', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && index.h("p", { key: '2d777961ef1440a9b5e1ae0a32bf5f68cf251dc9', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), index.h("div", { key: 'd48788af3e5f63b7593bebe75c5593ae4ff00fef', class: "col-md-3" }, index.h("h5", { key: 'e0b483daf2cf548144bb133f72b7a858347713fa' }, "External API - Countries"), index.h("ir-m-combobox", { key: 'aa98decae737fd02a477ee613b7901433b948895', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && index.h("p", { key: '95b75df2050fb49434896c3364587025c3501efb', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), index.h("div", { key: 'ad713b646aed9362eb33e9ea35376ccc77e570f1', class: "col-md-3" }, index.h("h5", { key: '4d2f43f75f22b812f403d65585640804806b37c8' }, "Custom Dropdown Content"), index.h("ir-m-combobox", { key: '7c1c00a4c9d8001856953c53bdb833298441f96b', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, index.h("div", { key: 'a34cbd94c008233e547b53a596a97563c3c5806e', slot: "dropdown-content" }, this.isLoadingCustom && index.h("div", { key: '84c6bb7f868e79b5b62450bdd4089b5e127a3c75', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && index.h("div", { key: 'bbbaf0878720c589a5b4f7a357136f43000e7c46', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index$1) => (index.h("div", { key: index$1, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, index.h("span", { class: "me-2" }, "\u2B50"), index.h("div", null, index.h("div", { class: "fw-bold" }, option.label), index.h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && index.h("p", { key: '023beb4ba736eb0e130415f1681f14fc0ba0dfcb', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), index.h("div", { key: '40f93023dc6e919529ac8d1c35c2d02fee661259', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, index.h("button", { key: '3113ff69fe09180b0ce5bf78d8b92e9c380e460e', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), index.h("button", { key: 'a247d8237679761e8482a2b354e972dba2400ddf', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), index.h("ir-input-text", { key: 'ead4501080d9cfa94639b8079c11a3ff02fb1f77', variant: "floating-label", class: "my-text-input", label: "First name" }, index.h("svg", { key: 'cd828c31ddbfb542a4d8b89d79ded0de90fafe5e', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: '09e959b1d12a77f18be1fed7992b4928e178b089', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), index.h("svg", { key: 'a62d3376940c24aec0b2145bc4bf0c21560e9db9', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { key: '0bb13dc7cf1729796c8a73280bd94dd9fb195d13', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), index.h("ir-select", { key: 'c5a7977b846b0275488f46d3bfc0225ac295bb7d', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: '67987c5c8c3fc1b2ded2b16c40b8169865d171a4', class: "my-2" }), index.h("ir-select", { key: '4d976b3541b074dfc17f28056cf4e3ca5bfbc7d6', label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: '263b27090547fd74b9be3d7cf890f14b03963ce5', class: "my-2" }), index.h("ir-select", { key: 'b6ea89742d0ae88e0fbc7835a727ff2d6abbb47b', data: [{ value: '1', text: '1' }] }), index.h("div", { key: 'cb3c0817842ba5ab6b1dc9b3eec67ec9f22b5e46', class: "card p-1" }, [
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