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
        return (index.h(index.Host, { key: '7f0be423b1a328bf4b84537381ae04982c0121f4' }, index.h("nav", { key: 'e5fc1bcfd201c01b61e13db98513632f990f324e', class: "modern-navbar" }, index.h("span", { key: '68a032650125520094ac2b4f5ba888d946aee6b8', class: "overdue-banner" }, "Overdue $300"), index.h("div", { key: '81482f9f4527cd9b2860c4dc03184678a057fcc6', class: "navbar-container" }, index.h("div", { key: '896118aa2eedadebb1a25c8279dc6ec10637b065', class: "navbar-left" }, index.h("button", { key: 'b073a7caac0e9be8362b61de47de08acf35bb33d', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, index.h("span", { key: '1b4aa43392bb2d335a3081eb1e654d901218efa8', class: "hamburger-icon" }, index.h("span", { key: '3a487f10384e4786b38fbcb8e4dcb56498b0a2df' }), index.h("span", { key: 'e17771eb66bad589e8c40666b0a0eb4371312b50' }), index.h("span", { key: '1b9b3f2468121a8db001e71ddd1e618cddec971a' }))), index.h("div", { key: '80cac4e6b353d79d26cc31ec23f1c5cfd52702ae', class: "navbar-brand" }, "Logo"), index.h("div", { key: 'e2d399750b0f46078e1a59ae64c4ac7cf5d1efb2', class: "d-none d-md-flex " }, index.h("ir-m-combobox", { key: '89be05aa1e6c43bbb4763b09e069d5fcf3fbf8db', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: 'ecd175e51fb2429bc5355b541ca4da011918e132', class: "hotel-name d-none d-md-block" }, "Hotel Name"), index.h("div", { key: '60ecad054ecccb74a90fc4c11c9f3c06e40b3577', class: "ml-auto d-md-none" }, index.h("ir-notifications", { key: '239d8fb195b0dc63647c961f8403a2506cfde78b', notifications: this.notifications }))), index.h("div", { key: '8bd2a760eeaa0dd23028db7fd5ae244664969904', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, index.h("ir-m-combobox", { key: '39ef9ea26ea31e26c635c38cd6b744efbd0bdfcb', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: '9210b4eb7991dbd1f16675664d68b7a1c171229a', class: "navbar-right" }, index.h("ul", { key: 'fccf99d29bc1802c66b14ecd68da85ef828e5cc0', class: "nav-items d-none d-md-flex" }, index.h("li", { key: '550ee45bcd37c734c01ad690f1be283c890594aa', class: "nav-item dropdown" }, index.h("a", { key: 'a4cac3a76ce03804382da02941b74cdc6a32a605', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), index.h("ul", { key: 'bd3f938fa2c6c049c379b2c677f09c6f3314d9fd', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, index.h("li", { key: '1fbc8a5c0ad02e6d8e14e40c207247a4cf32a5de' }, index.h("ul", { key: 'a23876adc1ba87b4a63fb71a51210b381bc29dab', class: "ir-mega-menu-column" }, index.h("li", { key: '65401da70b6b9607884e015cc8e906ae23ed7ebf', class: "ir-mega-menu-row title" }, "Parameters"), index.h("li", { key: '4b8fd7d6128f44765b824f83a243829a49c23529', class: "ir-mega-menu-row" }, index.h("a", { key: 'a0595177b09182fc10dab983f5886050d72e00cf', href: "userinline.aspx" }, "Users List")), index.h("li", { key: '40573a124ad0541e049854cccc1c15c8a3c2091c', class: "ir-mega-menu-row" }, index.h("a", { key: 'c7cfc920561f0ef09cc6a7327a166bb6a215f481', href: "languageinline.aspx" }, "System Languages")), index.h("li", { key: '6efba6735854ad8cf05d11bd80d94acdd4e1583e', class: "ir-mega-menu-row" }, index.h("a", { key: 'd14c6a7245c1a638aba07474310d0e264605d788', href: "countryinline.aspx" }, "Countries")), index.h("li", { key: '09a02a5a02a45915c573c93aaca99219d6179ad6', class: "ir-mega-menu-row" }, index.h("a", { key: 'af52bcbbe60383670d5fb98e90b7e5f1ff68dd2b', href: "level2inline.aspx" }, "Country Level 2")), index.h("li", { key: 'dec29f2ce618267423febf88516513ad331b66d5', class: "ir-mega-menu-row" }, index.h("a", { key: '040abcbf9bc49eede572e2569b7f9ac911293090', href: "cardinline.aspx" }, "Credit Cards")), index.h("li", { key: '2917e4a03f02d1c2edf04fc91f8391f3b288bd2d', class: "ir-mega-menu-row" }, index.h("a", { key: '251b78e89a8d8e8bc165424f4c06d3115bcea43a', href: "hotel_chaininline.aspx" }, "Hotel Chains")), index.h("li", { key: '708e396623840d29c48066adc4c476454420f851', class: "ir-mega-menu-row" }, index.h("a", { key: '4e76c6f66ba9c99de0701a0ee969832f2749b786', href: "currencyinline.aspx" }, "Currencies")), index.h("li", { key: '78598c7ed3dafba0797d8ea81b29a54b315ffba3', class: "ir-mega-menu-row" }, index.h("a", { key: '5d7264bc0d0aea1071844d19a4233bc19e864e60', href: "amenityinline.aspx" }, "Amenities")), index.h("li", { key: '3c29ef6f05a3d6bc0f9aacd33a90189a2deb66e9', class: "ir-mega-menu-row" }, index.h("a", { key: 'e52d19b136f0eb64b996c562fdc9d94e79695f8c', href: "foodinline.aspx" }, "Food")), index.h("li", { key: 'f30289d92aadb6795d12bee88d7496d86212bcfd', class: "ir-mega-menu-row" }, index.h("a", { key: 'c15b1855fdc9cbc346dd7721f1125fbf347cc3d0', href: "beddinginline.aspx" }, "Bedding")), index.h("li", { key: 'f9da64301f5318b1c88ca4940ae6119757812d3d', class: "ir-mega-menu-row" }, index.h("a", { key: 'bfaa43e57b37823a7f0aaaa256e46841a0d50d37', href: "setupinline.aspx" }, "Setup Table")), index.h("li", { key: '97caa649748f4e20b22379a1487e4429be80b96a', class: "ir-mega-menu-row" }, index.h("a", { key: '5bb2bec4ef4ebe810d9601cd64af2193aa90b2d1', href: "gwedit.aspx" }, "Payment Gateways")), index.h("li", { key: 'ba1112dc189157c3e55abc41f5c60dd1d3818d94', class: "ir-mega-menu-row" }, index.h("a", { key: '0d5525ad76f955d8c2708927ffbbf33f53103afa', href: "channelmanager.aspx" }, "Channel Manager")))), index.h("li", { key: '0403f1a6c1bef33661235192d2d5461feff74933' }, index.h("ul", { key: 'a4de1b1b31f2a3ed18d23b8a5ca533589b2f5c44', class: "ir-mega-menu-column" }, index.h("li", { key: '14a28a4e966fcb8eba6e5422843d3a223f470e26', class: "ir-mega-menu-row title" }, "Main"), index.h("li", { key: '808bfe3afc5592bec797a3850d1be1f6a1dce131', class: "ir-mega-menu-row" }, index.h("a", { key: '0bb84ca8f373917fb7ba82c208966bbc3d8bcbcf', href: "mpolist.aspx" }, "MPOs")), index.h("li", { key: '8e6321bfe33264720344ee0f16e8ade4aa00a8b1', class: "ir-mega-menu-row" }, index.h("a", { key: 'f91871bc2ebb56e114edb1890492f512604b531a', href: "aclist.aspx" }, "Properties")), index.h("li", { key: '672f50aad9805e7e6442f24cee65d014b84ec8ba', class: "ir-mega-menu-row" }, index.h("a", { key: 'a671329813222a12b76e13f1f56564a29dedff9c', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), index.h("li", { key: '80c2fe55c21bd18b6cf506f5693ed2c8d92cc8d8', class: "ir-mega-menu-row" }, index.h("a", { key: '9d0e9e399974a18a5bd67ebb60c4a12b5c39b87f', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), index.h("li", { key: '2fe7d8ee2541a3a754be99ef02fa587942b20112', class: "ir-mega-menu-row" }, index.h("a", { key: 'a2dbc5cfef425e1df448b24430252a80f3a9b2f3', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), index.h("li", { key: 'c0843cf1c02badebef5dcf9294f0f5d610a9900c', class: "ir-mega-menu-row" }, index.h("a", { key: '8cc37b93b7d0f7b1fbb2b184eef7d51385cabbbc', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), index.h("li", { key: '8cdcea9939c15675a64e347b79e5ad53d8ad4f10', class: "ir-mega-menu-row" }, index.h("a", { key: 'adbb0eb2683059b1ff1207ca25c229d88755880b', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), index.h("li", { key: 'daf82372bab6025b04d779cfd019a56bca7e0040', class: "ir-mega-menu-row" }, index.h("a", { key: '1f9d9e138cd12a16f5354c34239ed954f72c39ab', href: "mpobillingreport.aspx" }, "MPO Billing Report")), index.h("li", { key: '4ed551cc0749ca9998fc7c367f0521cb3ae57236', class: "ir-mega-menu-row" }, index.h("a", { key: 'efd9fead0545f260b63ffb8dfb3938410bcee216', href: "Acmemberlist.aspx" }, "Guests")), index.h("li", { key: 'f22123064aa6f4917a99e748ab86c358b3fa31d2', class: "ir-mega-menu-row" }, index.h("a", { key: 'e3bdb97598755a4b0c7d7fcc6684c817d79a198c', href: "acbookinglist.aspx" }, "Bookings")), index.h("li", { key: '7b2ea15630da07953f64c37ac4727b9f51792502', class: "ir-mega-menu-row" }, index.h("a", { key: 'af8f229588c91e5dc375cd613f33102eb8eba9ef', href: "billing.aspx" }, "Billing")))), index.h("li", { key: '70d25a572c1a73f2793a3875954d336e5c735356' }, index.h("ul", { key: 'ad4857548415f09cf2b93d41b5db08a9c228c7d4', class: "ir-mega-menu-column" }, index.h("li", { key: 'ddf1fcf92ffc2840d51e49e580bb26a70c96bb06', class: "ir-mega-menu-row title" }, "Locations"), index.h("li", { key: 'fe6500c441fa82f60a3261a14b5702ddb8da4538', class: "ir-mega-menu-row" }, index.h("a", { key: 'c6c9c459c901aabde372a604ee5497dcf7e02338', href: "poicategoriesinline.aspx" }, "Types")), index.h("li", { key: '8fc1bc5c963b4363b24b04d566cab6d6be22404b', class: "ir-mega-menu-row" }, index.h("a", { key: '23ed1433715163d078e0fe02ae50c7ff4e349096', href: "poilist.aspx" }, "List")))), index.h("li", { key: 'e9fe407824e6bef131c184e9086a3fa4cc0926ae' }, index.h("ul", { key: 'ba070ee7f29609dc4a254d85a00a0f9d8fbcb352', class: "ir-mega-menu-column" }, index.h("li", { key: '49c634aaf4de5a1eb531c97777c03a62a6e10ac0', class: "ir-mega-menu-row title" }, "Referrers"), index.h("li", { key: '33b19e93bfeb18ce09994999ef43079eec9b60f1', class: "ir-mega-menu-row" }, index.h("a", { key: '58d78ca3e94a185fa7a2e758485920d55e225495', href: "affiliatelist.aspx" }, "Affiliates")), index.h("li", { key: '46ff4f29d86cccfb80f044ffa35afa7078a297d7', class: "ir-mega-menu-row" }, index.h("a", { key: 'ca2d3205575aedd333998fda358f3b6efc520efb', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), index.h("li", { key: '9ae146875c92f960e913e72c27b35c98f6eb2d43', class: "nav-item" }, index.h("a", { key: 'f7158f29933ed2075e1a08a6a52daf2537f7a39f', href: "#", class: "nav-link" }, "b")), index.h("li", { key: '7c9757dad82f911d3c52e7cf1d3bae2747b52d98', class: "nav-item" }, index.h("a", { key: 'b4cbd4eb6047828fb164cadbdb6cd8f4f733fc75', href: "#", class: "nav-link" }, "c")), index.h("li", { key: '7588c30f89e7192c20f10ecfbd4b4660312ac878', class: "nav-item" }, index.h("a", { key: 'bf0e03adb37ece88a4cc390c46948cbe1060108b', href: "#", class: "nav-link" }, "d")), index.h("li", { key: 'a1d3b36c240008118a31d2bade075bb84ffb7b6f', class: "nav-item" }, index.h("div", { key: 'bfa42b6b1b308641bfc66d79f779605c868afc6e', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, index.h("ir-notifications", { key: '8bd56bc87e93a559ad4d6ad22ad9087b8deb1e8f', notifications: this.notifications }))))), index.h("div", { key: 'f608fb0462d88a36f13803f8c27ec3eb3a78dd6c', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, index.h("div", { key: 'dc5ee1c9b2dfbd2e2fb3cae9b2aed6761cdc17ff', class: "mobile-menu-header" }, index.h("div", { key: '4507f767afb1b8e62356d6f4d61a919268de8b0d', class: "hotel-name" }, "Hotel Name"), index.h("button", { key: 'f8c9141c5db6cfaefae9325207ed73f915eaf6dd', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), index.h("div", { key: '9fce554147eb2c1af248943016f54f9ab7ed13a8', class: "mobile-search" }, index.h("ir-m-combobox", { key: 'b7df56d91bfcf8d314d69d0863b023114911c2e9', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("ac-pages-menu", { key: 'f6a1531e6616535d93edb1c7bd34851210941fa8', location: "sheet", "onLink-clicked": async (e) => {
                await utils.sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), index.h("div", { key: '5d42d6be7e40a82d26ce7047ab8fb2823770533f', class: "submenus d-none d-md-block" }, index.h("ac-pages-menu", { key: '866bc9bca833629d12475931eacc43ef26f6ac2b', pages: this.pages }))), index.h("section", { key: 'c410fb7861fca7a0271cf02afdb8c8f1df0cd8f2', class: "p-2" }, index.h("div", { key: '9cbc69c082a69f9e6915df4dfc665dd0f25595af', class: "row g-3" }, index.h("div", { key: '3fcfdef1f5cc93f7994bc4a2f0b3d2a72f40179e', class: "col-md-3" }, index.h("h5", { key: '6f4971e5c7d9efc549c21cad801caabe0a9548c4' }, "Static Options Example"), index.h("ir-m-combobox", { key: '5490daa64a82f08d22c39982581ab20ace65ef38', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, index.h("svg", { key: '272ef197fdc2d6a3c4cf85fdaed30af37ab6c807', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: 'ecdf3cf2e0e7cfe19cf40dbc3e52568edfd0fa5b', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && index.h("p", { key: 'f9b3e85acd0a74571c12e0e51cd499a1b253289f', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), index.h("div", { key: '1776ba6c8aad89fbdc2a8c6fff11e052a2225005', class: "col-md-3" }, index.h("h5", { key: '971507ef6efc98fce06c0c095ac8f372e034797a' }, "External API - Countries"), index.h("ir-m-combobox", { key: '09877abdd62beea102302a8ed044d8ff72fa4b48', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && index.h("p", { key: 'f0f1986bde0c7ca993a3afcf2a46f8ef336f4804', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), index.h("div", { key: '4f0fb915c9d8fb2a7a017b9b0fa712ec667a3e33', class: "col-md-3" }, index.h("h5", { key: '59922da553d8c666005d1011b8466ee2cbf5fcde' }, "Custom Dropdown Content"), index.h("ir-m-combobox", { key: '644ebc626dc095e2701be6f415f3f9f42884b2c1', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, index.h("div", { key: '0ebe5233a72166db743796e4387c06dfe4ae76e9', slot: "dropdown-content" }, this.isLoadingCustom && index.h("div", { key: 'f650a2aca29291138d8888736449fe5b8535c5e5', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && index.h("div", { key: '9388e3ac8c5da41a51baa36c73e4b5d4c5c19d42', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index$1) => (index.h("div", { key: index$1, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, index.h("span", { class: "me-2" }, "\u2B50"), index.h("div", null, index.h("div", { class: "fw-bold" }, option.label), index.h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && index.h("p", { key: 'dc42612d1a1d577fb128b77b8d3e8f1c37c1856f', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), index.h("div", { key: 'e4b628f8bb798945ef2adc50e9fbd58ebeee95f1', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, index.h("button", { key: '23639d8986c9da719f09e1c043fb977a6f5c2e13', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), index.h("button", { key: '851a85f2c2adbb7e6b41f25bb059aad2781c36be', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), index.h("ir-input-text", { key: 'd1fe66277b4e705cd0d619770692195213d5f95e', variant: "floating-label", class: "my-text-input", label: "First name" }, index.h("svg", { key: '675b67caf4f2f571b7faa7b54619c92fa6818333', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: '9fcc2201ed074b6390115c5da1401c835de2d319', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), index.h("svg", { key: '1b2b7e36c6516f4533b041b2b3800e743a91d21f', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { key: '0dff50c803371ecc70ecdb7417e2a0801e0622fe', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), index.h("ir-select", { key: '3aecc8e9760d9fc0004da9991229445e82f3cd60', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: 'fe5ebb1b5b5384bf0bdda8825aee292c729f4f65', class: "my-2" }), index.h("ir-select", { key: '89973a4cdfb71174824aa5849820a01d9ecba5fe', label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: '75d389f37901485e2cff14f4771ed3d470f68e5a', class: "my-2" }), index.h("ir-select", { key: 'e6aa4568d80690435e595eb8a636f4dfd1285af3', data: [{ value: '1', text: '1' }] }), index.h("div", { key: 'daf82b18d96cd6504452743c0f79924101dd4fb1', class: "card p-1" }, [
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