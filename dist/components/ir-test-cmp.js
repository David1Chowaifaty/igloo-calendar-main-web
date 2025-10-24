import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { R as sleep } from './utils.js';
import { c as colorVariants, d as defineCustomElement$6 } from './ir-icons2.js';
import { d as defineCustomElement$8 } from './ac-pages-menu2.js';
import { d as defineCustomElement$7 } from './ir-button2.js';
import { d as defineCustomElement$5 } from './ir-input-text2.js';
import { d as defineCustomElement$4 } from './ir-m-combobox2.js';
import { d as defineCustomElement$3 } from './ir-notifications2.js';
import { d as defineCustomElement$2 } from './ir-select2.js';

const irTestCmpCss = ".sc-ir-test-cmp-h{display:block;height:100vh}.modern-navbar.sc-ir-test-cmp{background:#fff;box-shadow:0 2px 10px rgba(0, 0, 0, 0.1);position:sticky;top:0;z-index:1000;border-bottom:1px solid #e5e7eb}.overdue-banner.sc-ir-test-cmp{padding:0.5rem;background:var(--red);color:white;text-align:center;width:100%;display:block}.navbar-container.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:0.5rem 1rem;margin:0 auto}.submenus.sc-ir-test-cmp{background:#104064 !important;width:100%}.navbar-left.sc-ir-test-cmp{display:flex;align-items:center;gap:1rem;width:100%}.custom-width.sc-ir-test-cmp{width:240px}.navbar-brand.sc-ir-test-cmp{font-weight:700;font-size:1.5rem;color:#1f2937}.hotel-name.sc-ir-test-cmp{color:#6b7280;font-size:0.875rem;font-weight:500}.navbar-center.sc-ir-test-cmp{margin-inline:auto}.navbar-right.sc-ir-test-cmp{display:flex;align-items:center}.nav-items.sc-ir-test-cmp{display:flex;list-style:none;margin:0;padding:0;gap:0.5rem}.nav-item.sc-ir-test-cmp{margin:0}.nav-link.sc-ir-test-cmp{display:flex;align-items:center;padding:0.5rem 1rem;text-decoration:none;font-weight:500;border-radius:0.375rem;transition:all 0.2s ease;cursor:pointer}.nav-link.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#1f2937;text-decoration:none}.mobile-menu-toggle.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.mobile-menu-toggle.sc-ir-test-cmp:hover{background-color:#f3f4f6}.hamburger-icon.sc-ir-test-cmp{display:flex;flex-direction:column;width:1.25rem;height:1rem;justify-content:space-between}.hamburger-icon.sc-ir-test-cmp span.sc-ir-test-cmp{display:block;height:2px;width:100%;background-color:#374151;border-radius:1px;transition:all 0.3s ease}.mobile-menu.sc-ir-test-cmp{position:fixed;top:0;left:0;width:100%;height:100vh;background:#fff;transform:translateX(-100%);transition:transform 0.3s ease;z-index:1001;overflow-y:auto}.mobile-menu.active.sc-ir-test-cmp{transform:translateX(0)}.mobile-menu-header.sc-ir-test-cmp{display:flex;align-items:center;justify-content:space-between;padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-menu-header.sc-ir-test-cmp .hotel-name.sc-ir-test-cmp{font-size:1.125rem;font-weight:600;color:#1f2937}.close-menu.sc-ir-test-cmp{display:flex;align-items:center;justify-content:center;width:2.5rem;height:2.5rem;border:none;background:none;font-size:1.5rem;color:#6b7280;cursor:pointer;border-radius:0.375rem;transition:background-color 0.2s ease}.close-menu.sc-ir-test-cmp:hover{background-color:#f3f4f6;color:#374151}.mobile-search.sc-ir-test-cmp{padding:1rem;border-bottom:1px solid #e5e7eb}.mobile-nav-items.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem 0}.mobile-nav-item.sc-ir-test-cmp{margin:0}.mobile-nav-link.sc-ir-test-cmp{display:block;padding:0.75rem 1rem;color:#374151;text-decoration:none;font-weight:500;transition:all 0.2s ease;cursor:pointer}.mobile-nav-link.sc-ir-test-cmp:hover{background-color:#f9fafb;color:#1f2937;text-decoration:none}@media (max-width: 767.98px){.navbar-container.sc-ir-test-cmp{padding:0.5rem 1rem}.navbar-brand.sc-ir-test-cmp{font-size:1.25rem}}.nav-item.sc-ir-test-cmp{color:#1f2937 !important}.ir-mega-menu.sc-ir-test-cmp{list-style:none;margin:0;padding:1rem;grid-template-columns:repeat(4, 1fr) !important;gap:1.25rem;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem}.ir-mega-menu.show.sc-ir-test-cmp{display:grid !important;width:max-content !important}.ir-mega-menu.sc-ir-test-cmp>li.sc-ir-test-cmp{list-style:none}.ir-mega-menu-column.sc-ir-test-cmp{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:0.25rem}.ir-mega-menu-row.title.sc-ir-test-cmp{font-weight:700;color:#0f172a;margin-bottom:0.375rem;font-size:0.825rem;text-transform:uppercase;letter-spacing:0.02em;padding:0rem 0.75rem}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp{display:block;padding:0.5rem 0.75rem;color:#334155;text-decoration:none;line-height:1;transition:background-color 0.2s ease, color 0.2s ease}.ir-mega-menu-row.sc-ir-test-cmp a.sc-ir-test-cmp:hover{background-color:#f4f5fa;color:#1e2122;text-decoration:none}@media (min-width: 576px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(2, 1fr)}}@media (min-width: 992px){.ir-mega-menu.sc-ir-test-cmp{grid-template-columns:repeat(3, 1fr);padding:1.25rem 1.5rem;gap:1.5rem}}@media (min-width: 768px){.mobile-menu-toggle.sc-ir-test-cmp{display:none !important}.mobile-menu.sc-ir-test-cmp{display:none}.navbar-left.sc-ir-test-cmp{width:auto}}.ir-mega-menu.sc-ir-test-cmp{opacity:0;visibility:hidden;transform:translateY(-10px);transition:opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;pointer-events:none;position:absolute;top:100%;left:0;z-index:1000}.ir-mega-menu.show.sc-ir-test-cmp{opacity:1;visibility:visible;transform:translateY(0);pointer-events:auto;display:grid !important}.payment-item.sc-ir-test-cmp{position:relative;width:100%;display:flex;border-bottom:1px solid gainsboro;padding:0.5rem 0.5rem;align-items:center;min-height:3rem}.payment-item.sc-ir-test-cmp:last-child{border-bottom:0}.payment-item.sc-ir-test-cmp:hover{background:#f4f5fa}.payment-item.sc-ir-test-cmp p.sc-ir-test-cmp{padding:0;margin:0;box-sizing:border-box}.payment-item.sc-ir-test-cmp .payment-actions.sc-ir-test-cmp{display:none;background:#f4f5fa;gap:0.5rem;justify-content:flex-end;align-items:center}.payment-body.sc-ir-test-cmp{display:flex;flex-direction:column;gap:0.25rem;flex:1 1 0%}.payment-fields.sc-ir-test-cmp{display:flex;align-items:center;gap:0.5rem}.payment-item.sc-ir-test-cmp:hover .payment-actions.sc-ir-test-cmp{display:flex}.payment-amount.sc-ir-test-cmp{font-weight:700}.payment-amount.is-credit.sc-ir-test-cmp{color:#629a4c}.payment-amount.is-debit.sc-ir-test-cmp{color:#ff4961}.payment-reference.sc-ir-test-cmp{width:300px;font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@media (min-width: 640px){.payment-reference.sc-ir-test-cmp{width:350px}}@media (min-width: 768px){.payment-reference.sc-ir-test-cmp{width:400px}}@media (min-width: 1024px){.payment-reference.sc-ir-test-cmp{width:350px}}";
const IrTestCmpStyle0 = irTestCmpCss;

const IrTestCmp$1 = /*@__PURE__*/ proxyCustomElement(class IrTestCmp extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
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
        return (h(Host, { key: '14efefe0d055842b61ba68f1e2ac69146b93ec3f' }, h("nav", { key: '72bee5e7f457893f4ef861ca97c8ff33edd9f471', class: "modern-navbar" }, h("span", { key: '40df2f47edb5898d36916e069818e1188ea82d33', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '7c6e6b3677c6427b77a28d74f9fef260dd684e4c', class: "navbar-container" }, h("div", { key: '651c9b3f8e53d6aa4a16611afa5f64e5ecbcd0cd', class: "navbar-left" }, h("button", { key: '7e2ca0ea4624dbaab71fbf85f4b84fa6b6f2b07c', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'f613e20ff730f2b75729b18581f7e0faaa4a3199', class: "hamburger-icon" }, h("span", { key: '7ace687ddaabcade789a10cac204f7c45c652890' }), h("span", { key: '7530e666359ea37d46e70c51b75f32aaa0e97af5' }), h("span", { key: '8baa48146d1335d16a828e32f0dc77bb678d055e' }))), h("div", { key: '1f45c99b15e9e02100ea882ba81ea49736f9cecc', class: "navbar-brand" }, "Logo"), h("div", { key: '9aaed1f2faf6d66b85ebcdc6cf6696ded321645e', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '1a4ac1109d72f948b278f7b3e2c04ae269f81030', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: '8b54b0a31f6e6d19e2726b43fef5ff4a5ddf20a1', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: '458ed94f38ade4dbc42f718976de3ac77f0e27c2', class: "ml-auto d-md-none" }, h("ir-notifications", { key: 'c3130230d6ccb929a866ae69d265674f73da3329', notifications: this.notifications }))), h("div", { key: '6656fcf4f72970e6d3aae3c5f4657160aeb97336', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'bc6b8e8af0235588eacffaf2d141c8b4ff33d31e', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'b2bdd1dba95bf28570c664324c2c6e4eae00b754', class: "navbar-right" }, h("ul", { key: 'aab6ee30fc11bf13912e6fc0b71862511fe40b4a', class: "nav-items d-none d-md-flex" }, h("li", { key: '8878016b29cc3122da886a285b07574b8fb0c514', class: "nav-item dropdown" }, h("a", { key: 'a739f0f43b149849642ded074630bfa608751e80', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: 'a9f74bc581c0891994b2415844a96c0ef6c238b2', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: '17165e9d6f10fa8cb12c8dba93344969bfb716f4' }, h("ul", { key: '2b1e3b7ac7acfaf50986fbe9308b20b2500e333f', class: "ir-mega-menu-column" }, h("li", { key: '57aab2e96f7d81236696061bfba5f422440c7bf5', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: '6aea029daf86b9ce61fedada92ec4adec1309ba7', class: "ir-mega-menu-row" }, h("a", { key: '63ecba0f7eeb7e4f020bd34e01b0c6ca16a7abc0', href: "userinline.aspx" }, "Users List")), h("li", { key: '76914e1922ed0a56c227a9f619ca5f6dcbb54e52', class: "ir-mega-menu-row" }, h("a", { key: '0b90e85dacabbc99ec2ddf53733465141719a9bd', href: "languageinline.aspx" }, "System Languages")), h("li", { key: '5166d02673ebddabdb12acdad78aa59d794bc67b', class: "ir-mega-menu-row" }, h("a", { key: '29f9efdb1c36f90224456e843b6c4782b44f8ea5', href: "countryinline.aspx" }, "Countries")), h("li", { key: 'dada7ce8fbede945ffabf5b3601ca4d957c145f6', class: "ir-mega-menu-row" }, h("a", { key: '549d7ea95e14a2ff803f74df1abccfee726e8498', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'f95e29d5a4e318dabae63d73528348ec7e68cf9a', class: "ir-mega-menu-row" }, h("a", { key: '21aa80c1ab0c3686267a5a75cb429e00b0a042eb', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: '8ffc9725fe94298c1b8db900ff3e827f6419f7ff', class: "ir-mega-menu-row" }, h("a", { key: 'ee09da45751733815028cd9cd3c578666dfff64f', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: 'ff9e416d4df10bd3fd4f88719f0f32b66615281b', class: "ir-mega-menu-row" }, h("a", { key: '2b12a61dc9886b80c7c65d2ae88389f38283fb31', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'd64e03e249c47594d2e9bb1b25fbf8d7b996137b', class: "ir-mega-menu-row" }, h("a", { key: 'b74319a20b80c248572430a64d3acf914c493285', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '86b6332baaa0b667068c9703f215b5e8d0c84682', class: "ir-mega-menu-row" }, h("a", { key: '9a67176d02dcc28f0b093a3d7c024bb10ff38909', href: "foodinline.aspx" }, "Food")), h("li", { key: 'd730290ea9cb3e0f09df19aa58df7602296a34a2', class: "ir-mega-menu-row" }, h("a", { key: '59cbf5ff7b9f22cad29d79dddb163ea3a9a486f7', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'd744d0b6b70278ee49a3187e573d5ddcedc67e5d', class: "ir-mega-menu-row" }, h("a", { key: '3889ac46a66ae00ec68d6de85af17ed892f65d1f', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: '2620c00dc7ab046685adec022d3deb88f15f5cbc', class: "ir-mega-menu-row" }, h("a", { key: 'eb69de9d1818334b13930c204a1137e712658907', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: 'b6e4bacd89f3d121aa1e2d64bdcc9711014034df', class: "ir-mega-menu-row" }, h("a", { key: 'b1d8b31db95c0379a94c48a7132f66e65a600676', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: '1944927af6020effb7f06c5376c26c7832ec5627' }, h("ul", { key: 'a7626cd151679566423a752250c2f6a2b9a82b5b', class: "ir-mega-menu-column" }, h("li", { key: 'e907682d61e6610a04b1e237e739a818592573d2', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'a9dc81193e6da88b9249bf28894b2c5a3a842a98', class: "ir-mega-menu-row" }, h("a", { key: '6246a0f2d84fb9b7a41cac89ca3618b5eb3beb19', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '4bffe825faf33100ab9a9bce1a5eb521ff92f85b', class: "ir-mega-menu-row" }, h("a", { key: '188fac5a8d663ca2b5c6db1c0b3a5f01f8faa5e1', href: "aclist.aspx" }, "Properties")), h("li", { key: '3ab4982f8f31db48b4e368b24f664d44107632d3', class: "ir-mega-menu-row" }, h("a", { key: '67bf2ec123ba5b7b7802254ff5310b41347b6ba8', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '6c5124f825ef9a0cce0b136714ea726ae03b3fc0', class: "ir-mega-menu-row" }, h("a", { key: '417a7905d78cb12b6e9eeb46ad5d6aa3ddb233cd', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '4824dc90b5e9f22d7ee0fe87a9c501d8fe7eca5d', class: "ir-mega-menu-row" }, h("a", { key: 'ab073fb037ee442c314de4f30419695e66a8a018', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: 'b82ac46082eb6a2a01c1602a5ec43983aff6157c', class: "ir-mega-menu-row" }, h("a", { key: '7c56f9f74c74c618eff3f8f05db539caf17b47a8', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: '113cfe586025f0f58e88eb6df01bddb079527ff8', class: "ir-mega-menu-row" }, h("a", { key: '375022f1aba245b6a016e6762744722bcd2aae83', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '0fa008843a7d4e3ee572702c88795434f579ad9f', class: "ir-mega-menu-row" }, h("a", { key: '52903dfeb646686fc2005e29d5826a5be3a1f673', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '572a62b781b2da378e899e32a4738646fac15c49', class: "ir-mega-menu-row" }, h("a", { key: 'bd67e59019be16dd6b9148af3f7825701a8b2c07', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '52a928dc2eaa6a77eaa356cdce6832923b479f29', class: "ir-mega-menu-row" }, h("a", { key: '95f93e7b8f63fa6fafe106cf516cb453dda3bfd5', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: 'a7d2369182d4fde952c3dde7c9a0aa04b558a81d', class: "ir-mega-menu-row" }, h("a", { key: 'a507d9bb54f12327e34964b097dfd39c76ed3106', href: "billing.aspx" }, "Billing")))), h("li", { key: '811fed4c68213e8823da757a3f2b7df21f90d409' }, h("ul", { key: '95ebb288cd4951383ad60a0369aa4e431b7bf91f', class: "ir-mega-menu-column" }, h("li", { key: '018d2f274b77a5cb692747a6d05a187806eaa7ee', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '74a8cf7020a0152825cb6f655a776b4efa9f872b', class: "ir-mega-menu-row" }, h("a", { key: '9c2a56a5624707d49791d26b602184fc230e0a6a', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '500f154c66d3e8e5ad786bc7e41b02eb5ec21e42', class: "ir-mega-menu-row" }, h("a", { key: 'a6cc41d449feb45f9432a0605e44a7f073d202d9', href: "poilist.aspx" }, "List")))), h("li", { key: '7970edab9a37e3c51f0d5384b985bff88228780f' }, h("ul", { key: 'c894c6f92d7a968ad3298dd314f12960cb2c40b9', class: "ir-mega-menu-column" }, h("li", { key: 'a56fde9993386dc4d534e35c375f84972a31ebb1', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '377081f160295213054c3366df9ff5abcbc5dd13', class: "ir-mega-menu-row" }, h("a", { key: 'b4c70164bd9fc723e9bf46cf0249679a218a2f84', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '5bb553fcb6cc447e8b014d8cea1cd7841e9350b8', class: "ir-mega-menu-row" }, h("a", { key: '672a2e8da469d0693736188eb77f1b9836963170', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: 'bf244c6e3483950f7c93d0716b997693489bd964', class: "nav-item" }, h("a", { key: 'f484bd26904641c250677ac1397c27b74cea2044', href: "#", class: "nav-link" }, "b")), h("li", { key: '0c7580487bedccd653e11c3574d2fa185edd64f8', class: "nav-item" }, h("a", { key: '9dcb8d42d0cbe542133c7a8c1d7ce33ea130994a', href: "#", class: "nav-link" }, "c")), h("li", { key: 'a2fb0c102f0a248d088225e9201231206f4ab6be', class: "nav-item" }, h("a", { key: 'f53c6154988b505c7dc557fdac0bbcd15743e15d', href: "#", class: "nav-link" }, "d")), h("li", { key: '2e8c48f6eea9e1c39ba2ce052dc814e4d86e7698', class: "nav-item" }, h("div", { key: 'bd91475902cb4968ee5038ee5fb23c7985c01bea', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: 'd0ba0595d4fe629ff8783efc7a29d0f1a40d0c2f', notifications: this.notifications }))))), h("div", { key: 'a9274040760c58ae593b94b63d9f2a712cfc2ceb', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: 'e120465bbd12afd741cc1bac9b11e9118682c2c7', class: "mobile-menu-header" }, h("div", { key: '0de2fa45de20b48ab4f95ba8af35c17971bb6e5e', class: "hotel-name" }, "Hotel Name"), h("button", { key: '43500d8b6989d4a373ba1ff6899c56bdfe8efa6a', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '27a71d8729223cd5ca3d725076c8b2aac80ae285', class: "mobile-search" }, h("ir-m-combobox", { key: 'e7dd8a11c9403e1947cd90de13a42386b310d557', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: '9285f6a03e1bcac5fef158d8e6aebada0dd6d7b2', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '3ca3ffd0991dcffb3dedda9f4ad7db8e4b3027f1', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: '3f39534447363530498f0071792588b21f013109', pages: this.pages }))), h("section", { key: '8a63bc3aa2435d7c17a6530350de5c72d8ce7956', class: "p-2" }, h("div", { key: '6b6d21da9923819e801f8cb44448fc1fa90fe25c', class: "row g-3" }, h("div", { key: '22bf05712ab559c4b3b84bee290af8e9cda63a0f', class: "col-md-3" }, h("h5", { key: 'da0fd9e096bf4900ed603fe548ae832a95cb0bb3' }, "Static Options Example"), h("ir-m-combobox", { key: 'b6002429d6f4bd65ec639f3e3dd257348b0627ed', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: 'd8f9394202e287bcbc797214f68d63b24887fce3', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'cfb336e44ba0bb82304f954071c55c03d0b85bb3', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: 'f43900e4bb09f75ec1c24a721621762e207a22f4', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: 'ffc572ef52a639d3035cb7b7b1ac1270864441ab', class: "col-md-3" }, h("h5", { key: 'b941ee86d969ddb714352f386144aefd5160897a' }, "External API - Countries"), h("ir-m-combobox", { key: '3dee63fa169e8f8f8dc27361e1e773e7a7a38932', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '95344d7eff511b909a9b88a0e2e090e86f463312', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'e99c3230ff2dd9323c10767680146a1020368efa', class: "col-md-3" }, h("h5", { key: '6c3dbca0fc043c27d0e3637815ccd308e3235a69' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'e42120f9da8ef3e82c5f2558de9237569f93df73', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '24ebebebc37e2645c72ecb388fb129d2e0bfb373', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: '247daa9fec469f1555d41715cb4ae976a733d09e', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'b098b1e290abea87c1ba72c9c3133ba4d9ebded9', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'c4e48b2e08547fcc775f8c2a54309fd913813a02', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '4a177f122227f9387fa617d4299e820164b68aa8', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: 'd21a0aee856b8f5774e07998ea450c8c9d5ee86d', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: '5dc492eacf1ea23cf1774ed11d9ed91b3b2ab1c1', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: '643ba1648b23f4f6015091230feeaa2faf0786ca', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: 'f0e6519828f98810f17edd79a2937414bc283ff1', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '6d063164571068e06623b09cea80891b41079e9d', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '649811859c1b184aa74e91aa56afff7b2a395da8', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '22c67aff1e65371bbf3284269bffbc05607e6552', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: '2b9f953bbb7e308fd0faa55873d933f76d63569b', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '25f701936a506b7c6a0421dd62f8af82327e6a44', class: "my-2" }), h("ir-select", { key: 'dc99a3e89d9ae103561dacd829423366870a4d89', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: 'ef95b5db93c0c2a3e31cb48b73e67693693766b6', class: "my-2" }), h("ir-select", { key: '9895b4ee6fc5f73ce24bbe1483177af2840e0edf', data: [{ value: '1', text: '1' }] }), h("div", { key: 'd057b9be3b769c91340a46bc63980bc54b7d9de8', class: "card p-1" }, [
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
        ].map(row => (h("div", { key: row.id, class: 'payment-item' }, h("div", { class: "payment-body" }, h("div", { class: "payment-fields" }, h("p", null, h("b", null, row.cause)), h("p", { class: "text-muted" }, row.date)), row.reference && (h("p", { class: "payment-reference text-muted" }, h("b", null, "Ref: "), row === null || row === void 0 ? void 0 :
            row.reference))), h("div", { class: "d-flex align-items-center justify-content-between", style: { gap: '0.5rem' } }, h("p", { class: `payment-amount ${row.type === 'Credit' ? 'is-credit' : 'is-debit'}` }, row.type === 'Credit' ? '+' : '-', "$US ", row.amount), h("div", { class: "payment-actions" }, h("ir-button", { variant: "icon", icon_name: "save", style: colorVariants.secondary }), h("ir-button", { variant: "icon", style: colorVariants.danger, icon_name: "trash" }))))))))));
    }
    static get style() { return IrTestCmpStyle0; }
}, [2, "ir-test-cmp", {
        "dates": [32],
        "selectedStaticOption": [32],
        "selectedCountry": [32],
        "selectedCustomOption": [32],
        "countryOptions": [32],
        "customOptions": [32],
        "isLoadingCountries": [32],
        "isLoadingCustom": [32],
        "notificationCount": [32],
        "isMobileMenuOpen": [32],
        "showMegaMenu": [32]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ir-test-cmp", "ac-pages-menu", "ir-button", "ir-icons", "ir-input-text", "ir-m-combobox", "ir-notifications", "ir-select"];
    components.forEach(tagName => { switch (tagName) {
        case "ir-test-cmp":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, IrTestCmp$1);
            }
            break;
        case "ac-pages-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$8();
            }
            break;
        case "ir-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$7();
            }
            break;
        case "ir-icons":
            if (!customElements.get(tagName)) {
                defineCustomElement$6();
            }
            break;
        case "ir-input-text":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ir-m-combobox":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ir-notifications":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ir-select":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IrTestCmp = IrTestCmp$1;
const defineCustomElement = defineCustomElement$1;

export { IrTestCmp, defineCustomElement };

//# sourceMappingURL=ir-test-cmp.js.map