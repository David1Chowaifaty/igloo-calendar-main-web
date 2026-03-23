'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-35d81173.js');
const utils = require('./utils-50cf36d8.js');
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
        return (index.h(index.Host, { key: '097527d387c6b48d141071aefcefd2bad2617e24' }, index.h("nav", { key: 'b5a40a608a36590d80193092b1ffdd1a8dbdbba9', class: "modern-navbar" }, index.h("span", { key: 'c9d3011cb60c55f5af99587ca0f89b2ebeef46c6', class: "overdue-banner" }, "Overdue $300"), index.h("div", { key: '773116de5d27e0e8c0563a8cc58ee555de96b8b3', class: "navbar-container" }, index.h("div", { key: 'f0412527591bdaba9dd60d846befe37665d5b590', class: "navbar-left" }, index.h("button", { key: '2d470b7df5f6a86779c78d15b518f208d77acf27', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, index.h("span", { key: '2fa0d314e2ba73a5e0db0af3188e0d399600fb92', class: "hamburger-icon" }, index.h("span", { key: 'e047d2d9e4b0484063a638b65dbfbda75c011a36' }), index.h("span", { key: '2d6428ecf564773ec0e98512ee02ca06014ddfe9' }), index.h("span", { key: 'fc8a0cf8f12d29c3176c73189dbf52875413a7d6' }))), index.h("div", { key: '8c4d580d5411ee73183f4b3003dd12dab69ff50e', class: "navbar-brand" }, "Logo"), index.h("div", { key: '57c8b3522215174a83aa5b5b9c71638e8ccaed39', class: "d-none d-md-flex " }, index.h("ir-m-combobox", { key: '3407f8feb9d4b5aa435a966eccf22ac6c253ea12', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: 'e9944dffb96eccf4297aeb0dcf6a620f89e22773', class: "hotel-name d-none d-md-block" }, "Hotel Name"), index.h("div", { key: 'f519cf99b2e8a1349791f2aabe450dda4becae74', class: "ml-auto d-md-none" }, index.h("ir-notifications", { key: 'c2d3cc2d33ad6ffb8e7c30185576e71cb29a1ff9' }))), index.h("div", { key: 'e2b0fff824e0d32185b21955d157c7ba9585510b', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, index.h("ir-m-combobox", { key: '58c2953c7d3dbfd36878f110c4f290078607de93', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("div", { key: 'a1d1c677856e6d741fc10d9f6011baed1ff6ddd7', class: "navbar-right" }, index.h("ul", { key: 'b914898eabd27882b2726842c526878053eeb77d', class: "nav-items d-none d-md-flex" }, index.h("li", { key: '3c945e92b8ee418422a0f1289f595a0637a48b3d', class: "nav-item dropdown" }, index.h("a", { key: '7e2192a9f959fbfd6a5419854e3bcefa009b4dda', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), index.h("ul", { key: 'ace8489eae88be5b1de2d5f28894bd7bb82a9fe3', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, index.h("li", { key: '53addf7543cfb38b2c71f30431ba57e017c2d8e5' }, index.h("ul", { key: '825f85785d8cee9d1300a9612c3c18793841b6e9', class: "ir-mega-menu-column" }, index.h("li", { key: '8618490686f64a9b12a72e8f4bee4d4baa1ec7fc', class: "ir-mega-menu-row title" }, "Parameters"), index.h("li", { key: 'a02c406a6195777ec2f93f44255b3d5725c9f07e', class: "ir-mega-menu-row" }, index.h("a", { key: '611413419059861c6fa1622535b55353f5825fdd', href: "userinline.aspx" }, "Users List")), index.h("li", { key: '74fd2c316f1328d06b322616c2aaea99733a7f36', class: "ir-mega-menu-row" }, index.h("a", { key: '6afa4c37ee7b8aa6a602be4240868c5dc6614b85', href: "languageinline.aspx" }, "System Languages")), index.h("li", { key: '1d42b10f7c60794c62d44b611dc092c05fc3f89b', class: "ir-mega-menu-row" }, index.h("a", { key: 'b31fc5577274329e4dc9dbd18e8b5e9713689213', href: "countryinline.aspx" }, "Countries")), index.h("li", { key: 'f85f9fc63441b9845b21d359178e16842b86f7a8', class: "ir-mega-menu-row" }, index.h("a", { key: 'c552368e80d20a705b59067ae88442723e895e30', href: "level2inline.aspx" }, "Country Level 2")), index.h("li", { key: 'b82c711d3d75f5ef72d4a2aeb25ae04384714b05', class: "ir-mega-menu-row" }, index.h("a", { key: '860dd78ad0c1c065a7084a77be35e0b1024f0dac', href: "cardinline.aspx" }, "Credit Cards")), index.h("li", { key: 'b78f5df723d55070c26bf1856b0309bdaa36a0e1', class: "ir-mega-menu-row" }, index.h("a", { key: 'cbe0dd9e2118e428f9544a4e42770617fbab4415', href: "hotel_chaininline.aspx" }, "Hotel Chains")), index.h("li", { key: '3af7296b5ddd263bc8735a5dc6e4ae8dbc194147', class: "ir-mega-menu-row" }, index.h("a", { key: '234e379dbcb5782287e72ae4adcaee6996794fda', href: "currencyinline.aspx" }, "Currencies")), index.h("li", { key: '9d2ce907885344c68c752a330839b50820207a24', class: "ir-mega-menu-row" }, index.h("a", { key: '62dd3245f81a8a0da8da2ea126de8d22496bf2de', href: "amenityinline.aspx" }, "Amenities")), index.h("li", { key: '139d4b5d075dd3eab8fd79dd905925f4879cda18', class: "ir-mega-menu-row" }, index.h("a", { key: 'c28ee49f37663c1a8a1941ba95c93bcb4a8b71eb', href: "foodinline.aspx" }, "Food")), index.h("li", { key: '6850f2dd381ffc247f811bb76c6b23344ca69ac8', class: "ir-mega-menu-row" }, index.h("a", { key: 'edeb2bee27a2bb4a969ed9562ac31856732114e6', href: "beddinginline.aspx" }, "Bedding")), index.h("li", { key: '011d47e170eb558109dad4aa8b49cf8fcb22fb7a', class: "ir-mega-menu-row" }, index.h("a", { key: '35c0f3ffceb5c4910f92d0d7b4f93e068c2f1ab5', href: "setupinline.aspx" }, "Setup Table")), index.h("li", { key: '6483617d29365a89e015655ad5e6e36613fe49c2', class: "ir-mega-menu-row" }, index.h("a", { key: '713c73aadfd2b254a101b338291cbb8e0e3ee0ee', href: "gwedit.aspx" }, "Payment Gateways")), index.h("li", { key: '4aef783e79e07e72970d758ba297c5c426123daf', class: "ir-mega-menu-row" }, index.h("a", { key: 'ece38593206e1a45e208da264a309d50a9efb51f', href: "channelmanager.aspx" }, "Channel Manager")))), index.h("li", { key: 'f77434b3d3df12130ec97ec32918e2bf854f2ce4' }, index.h("ul", { key: '675aab6f0b39198980f048cdc088be004cbdbb3c', class: "ir-mega-menu-column" }, index.h("li", { key: '0e1a5a70284092811fda15acc5cbc895c4e7a237', class: "ir-mega-menu-row title" }, "Main"), index.h("li", { key: '5dd231fdc6dea6ba573a1fe169358ca3decf8323', class: "ir-mega-menu-row" }, index.h("a", { key: 'ddb089dbc50d24b8c9fb88f2540b13a8f02fc2fd', href: "mpolist.aspx" }, "MPOs")), index.h("li", { key: '442bd3b91e8192e1a9c193795a169dab3798220b', class: "ir-mega-menu-row" }, index.h("a", { key: '98a0fd30e28b49f88c7f13d909c5051eda8b8672', href: "aclist.aspx" }, "Properties")), index.h("li", { key: 'e050f9e6ff5b35cb126a27920179f009e4714945', class: "ir-mega-menu-row" }, index.h("a", { key: 'f944073d270122bcc8ed0c5cf905200c5c2c8d08', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), index.h("li", { key: 'cde12dc89f1b86ec20dc77a200229963188af161', class: "ir-mega-menu-row" }, index.h("a", { key: 'f2dfb6bf23551c08ecc7e83adcf27e259fcc644d', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), index.h("li", { key: '82271276f2d32fbe2b5a6b21e44eeae58ce8a5ca', class: "ir-mega-menu-row" }, index.h("a", { key: '555c68b35e7007df21dda69cbc9b7e124841d422', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), index.h("li", { key: '0af4abbdccabc65cbdb7625bca2cc6e0d253f2db', class: "ir-mega-menu-row" }, index.h("a", { key: 'ab88106edb25f558b8ba50616b26386574e8cb4c', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), index.h("li", { key: '0b852fe15c02385f3e0a849147fc52e989ae0320', class: "ir-mega-menu-row" }, index.h("a", { key: '3be97a68e9b4aefafe3f45d3476ddafed7969208', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), index.h("li", { key: '471b4151edb43d95268d73974070b1c3dc6aceb2', class: "ir-mega-menu-row" }, index.h("a", { key: 'c9b3147a523bb8ff159ddd8a591ec5c3ed3a1826', href: "mpobillingreport.aspx" }, "MPO Billing Report")), index.h("li", { key: '0d71426936eef499b3bdeb3410af73b182824929', class: "ir-mega-menu-row" }, index.h("a", { key: 'ee1df6a475e5bdaf3ac2f2031e1d2d56f4047b94', href: "Acmemberlist.aspx" }, "Guests")), index.h("li", { key: '44cf714cad0c239609ee0d9fd9efb8bd733248c5', class: "ir-mega-menu-row" }, index.h("a", { key: 'c65a69fbf96e8eb4216f61e682015c067091753c', href: "acbookinglist.aspx" }, "Bookings")), index.h("li", { key: '046bf54086606e155747f9692ce5b9e353b0cc5e', class: "ir-mega-menu-row" }, index.h("a", { key: 'fee644d97836eabc61308bb575f789cf5cd4ed03', href: "billing.aspx" }, "Billing")))), index.h("li", { key: 'db7c34c9261a152f0f002e9456711509423c9e4f' }, index.h("ul", { key: '02c3e091203285f8dfb47c0dbad1a1a989e68cc7', class: "ir-mega-menu-column" }, index.h("li", { key: 'd09eef0ddf5ffaac19d5956d0094a46305e88b81', class: "ir-mega-menu-row title" }, "Locations"), index.h("li", { key: 'd16d5bc6bc2cd04a214e9cb6fc3d3388274d22ab', class: "ir-mega-menu-row" }, index.h("a", { key: '810ec9d57eaa6f5e552d9591f1012be135a87275', href: "poicategoriesinline.aspx" }, "Types")), index.h("li", { key: '3fd4099c9309d6b5635de03e906c8c8edf274ea0', class: "ir-mega-menu-row" }, index.h("a", { key: '92e4e30561ae0935d3c70b3be20c022eb43400cf', href: "poilist.aspx" }, "List")))), index.h("li", { key: '713d0c9bd2f2959c9e2bb4073fc09dbc9066f16d' }, index.h("ul", { key: '2543eb5de16d7f7ffd2b8b73b1e6d6c1e8f7bcc5', class: "ir-mega-menu-column" }, index.h("li", { key: 'c64c3afd19976a4dc609bb36925682506b92a51c', class: "ir-mega-menu-row title" }, "Referrers"), index.h("li", { key: 'adc06da0bedccdec517d565d4d59f52949858ff4', class: "ir-mega-menu-row" }, index.h("a", { key: 'aa7d0b72ce993fc2dc2c067425a616cb7dd0a88f', href: "affiliatelist.aspx" }, "Affiliates")), index.h("li", { key: '03610c44869734a1b056444d386c92f78f0cb933', class: "ir-mega-menu-row" }, index.h("a", { key: '3258ad8db754edd676ee45c6ea94efdc24b4f668', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), index.h("li", { key: '479171b5d10e87ac18f9a87c00e8313cb89038e7', class: "nav-item" }, index.h("a", { key: '728a84d58e5f846d553d513deef7cdf65c12e508', href: "#", class: "nav-link" }, "b")), index.h("li", { key: '570978923c45b9c67288362e91fb1c5737c7feb7', class: "nav-item" }, index.h("a", { key: '5b2af4d75e304bcc933b096456e167b2cad2ac14', href: "#", class: "nav-link" }, "c")), index.h("li", { key: 'cf4322852f7c4527dd9a0524b5c51ceb79baec65', class: "nav-item" }, index.h("a", { key: 'b6bcaa72d945e5adb7b4200bb0bae9719848ea6d', href: "#", class: "nav-link" }, "d")), index.h("li", { key: 'bb741f903901d471f472ba48d313e52b4a608b77', class: "nav-item" }, index.h("div", { key: 'c27d0d59cd19f633e0ed0fdc026b110f8fab18a6', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, index.h("ir-notifications", { key: '2cc717966638c890309fd921fd1a85da3bd54ae8' }))))), index.h("div", { key: 'aedad2abf45d55dacac7255607859a68caf6269e', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, index.h("div", { key: '0ab996e910e9a8610aadc2f537e1e33d2627b606', class: "mobile-menu-header" }, index.h("div", { key: '73a0ac7968c66ed73959113b1cb798b7a21b6fa9', class: "hotel-name" }, "Hotel Name"), index.h("button", { key: '096212faf223877c811469bb7d022f83b764b597', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), index.h("div", { key: '6651022d4d2277c9f3613868cbc1b5f0f08276b5', class: "mobile-search" }, index.h("ir-m-combobox", { key: '09a772b1786c4ede4375f8033e663e091c5e298e', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), index.h("ac-pages-menu", { key: 'e98268de973874c7d5bddc3e726682086224e15d', location: "sheet", "onLink-clicked": async (e) => {
                await utils.sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), index.h("div", { key: 'ea9d6ea2329af63026a65494cafa12f80343d2f9', class: "submenus d-none d-md-block" }, index.h("ac-pages-menu", { key: 'a6988a6e6a3fd9cb3715a51ebe3f10e6d4664471', pages: this.pages }))), index.h("section", { key: '492b99b6ddf098f33cf88df512b20722638ac2e2', class: "p-2" }, index.h("div", { key: '4031e2d8d3c13dce1ded36f3334b7f059ffad815', class: "row g-3" }, index.h("div", { key: '2be76793e5482de8e9b1f752a35ca64f744ceecc', class: "col-md-3" }, index.h("h5", { key: '6dbcad71da1f5253ca2e57c6b554b98d52338c32' }, "Static Options Example"), index.h("ir-m-combobox", { key: 'ab8360cd077e3109872beb5e3cb38249dd979469', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, index.h("svg", { key: 'cf093fb67ba189e064531f3e70272377fe7dc554', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: '1508b61e5c943c93390e15be91e4c63a7a392442', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && index.h("p", { key: 'f09875ffe829b773b41cdbf6f76a98d8d2d65a6b', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), index.h("div", { key: '9a470f9736ca8fa3df26eb2daffc69587012a748', class: "col-md-3" }, index.h("h5", { key: '7480f9fbe3381a9bb64263e023c8b05162143585' }, "External API - Countries"), index.h("ir-m-combobox", { key: '8909ad12aa4dc2e9a57c912b29e41dd50f234536', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && index.h("p", { key: '4bfdc40756094b1de71483b94b9c9c6c107fc01d', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), index.h("div", { key: 'ccffb1602ebeb9c2fbf383d9940fa7082b7bb4a0', class: "col-md-3" }, index.h("h5", { key: '1010613f0dc2e810b61ef9a346952b1cbc5a92c1' }, "Custom Dropdown Content"), index.h("ir-m-combobox", { key: '5522470d4bdc2aefdaa3e5974b26988d30e6cdc4', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, index.h("div", { key: 'b95a27fc53c03eedd43ef4b27d6ef72c2bfabce1', slot: "dropdown-content" }, this.isLoadingCustom && index.h("div", { key: '88ef5694331f4aaed6b6b50337b00f6e0672cd70', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && index.h("div", { key: 'a24f9c8ef9a82d40062f7b3a6ab2612559e4d891', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index$1) => (index.h("div", { key: index$1, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, index.h("span", { class: "me-2" }, "\u2B50"), index.h("div", null, index.h("div", { class: "fw-bold" }, option.label), index.h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && index.h("p", { key: '4571f1f0d95625bff209d49938fe02059f027f47', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), index.h("div", { key: 'fbbb8ac7e0818e895fd1c668239ea8efda4e72a8', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, index.h("button", { key: 'e08f8dab6534ca512327152b7063b9d324ad145b', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), index.h("button", { key: '0cf18c85285abe4b2c05c5d404dfcc90fe2becb5', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), index.h("ir-input-text", { key: '9418ece9c4ccaf101992a17e66654a87b4cc6d99', variant: "floating-label", class: "my-text-input", label: "First name" }, index.h("svg", { key: 'fc2ef9259b2bfa6027fb7e94733b9dacace85a3d', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, index.h("path", { key: 'bc788e3666261306eb0676adb87027ed2cbd20f0', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), index.h("svg", { key: '02b031a073d14c8b45489d7cd605d698ff495d72', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, index.h("path", { key: 'ac99d1259fd5b05226bb7ad415ba9faa8b1d6d0f', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), index.h("ir-select", { key: '2c8e2a5be066921d872eb162a6545086b1ea8285', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: '38d83b5fe1f2fe57232e1ad7e11b6ec6409c5dea', class: "my-2" }), index.h("ir-select", { key: '936c3612a80cf872417008fc9880d6f4ec9f425e', label: "Hello", data: [{ value: '1', text: '1' }] }), index.h("div", { key: 'df940df0a2fb26abc6a9a9c9c938d52589832988', class: "my-2" }), index.h("ir-select", { key: '3211b16fecc79c3861097c902a2b346dcc073160', data: [{ value: '1', text: '1' }] }), index.h("div", { key: '975b11c21ff519ff3081b1d51550a0d996983418', class: "card p-1" }, [
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