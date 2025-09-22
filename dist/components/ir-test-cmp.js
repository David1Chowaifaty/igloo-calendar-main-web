import { proxyCustomElement, HTMLElement, h, Host } from '@stencil/core/internal/client';
import { N as sleep } from './utils.js';
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
        return (h(Host, { key: '9c4d28e3485c4747aa4b5dfa6d167e13da738893' }, h("nav", { key: 'f7b506ef791ae1c9945724470b926c6779dbb8f8', class: "modern-navbar" }, h("span", { key: '4f99e7de15e087a20aa73ed383da6cdca30b64be', class: "overdue-banner" }, "Overdue $300"), h("div", { key: '23924a4715c5e071b9d1ad531f61ed618bccc09e', class: "navbar-container" }, h("div", { key: 'b85c1d608551883cc2a38bcfa291136375a06b10', class: "navbar-left" }, h("button", { key: '24b51105c5ad4fc582207265b53464a7a0bcca77', class: "mobile-menu-toggle d-md-none", onClick: () => this.toggleMobileMenu() }, h("span", { key: 'd918ebbb95a374b3139908ab537979f52a9b6f95', class: "hamburger-icon" }, h("span", { key: '4aadf1e914717c42b51361435e0905619c913f73' }), h("span", { key: '43fcbf76fae2a5e0ccc98e689f589534476878ab' }), h("span", { key: '83ec895d8f33e45104b7501f613b6975f153a2ba' }))), h("div", { key: 'c1588645d64aa7332eadbdab0adc64c35203dbc5', class: "navbar-brand" }, "Logo"), h("div", { key: '47d5f64f1dfaf0b6129960afe1d879472bd5f5fa', class: "d-none d-md-flex " }, h("ir-m-combobox", { key: '60d0685d368d8bd5d0427342951be9f26ff458df', style: { '--ir-combobox-width': 'max-content' }, placeholder: "Find property", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'd232ac8bd940ca3bb73edc4f8e5237958c2a5f30', class: "hotel-name d-none d-md-block" }, "Hotel Name"), h("div", { key: 'e7893e96e3d0d4d18cefe0bbe9c23180ee4449ca', class: "ml-auto d-md-none" }, h("ir-notifications", { key: '61cf97369117af7b50b7e20bd62b4a261835ebf3', notifications: this.notifications }))), h("div", { key: '7b90eb2c992d697b5fb405f9c5371a87e70f2766', class: "navbar-center d-none d-md-flex flex-fill mx-auto" }, h("ir-m-combobox", { key: 'e46f82b45924f830dde8d986fc8a10b7b6dbe696', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("div", { key: 'debb6e44a6bb1d9d642dfa93b1bb55cf0f244975', class: "navbar-right" }, h("ul", { key: '665ae678436e0c343b1ff13fddba3c3c2e81d6cc', class: "nav-items d-none d-md-flex" }, h("li", { key: 'c824cc16031bbe61446fcffe1bfcdbccc1743be2', class: "nav-item dropdown" }, h("a", { key: 'f4f33fef30942fd5cd1e3b2412d5a0d6c47cfe7c', "data-reference": "parent", href: "#", role: "button", class: "nav-link", "data-toggle": "dropdown", "aria-expanded": "false" }, "a"), h("ul", { key: '2b34d3138d169c497219b449ee9ac44bfd7de752', class: `ir-mega-menu mx-auto dropdown-menu-right dropdown-menu    w-100 shadow-sm` }, h("li", { key: 'e34463167cb14fd07c4c34ec97fc31624a232a31' }, h("ul", { key: '0fa622e3e0b071cda7c8b4138f561514782f95ae', class: "ir-mega-menu-column" }, h("li", { key: 'c4b1114aa228218181bcd36a819117558f603b89', class: "ir-mega-menu-row title" }, "Parameters"), h("li", { key: 'f97ad165d1ee115fb18f17601b64bf5c05bbd077', class: "ir-mega-menu-row" }, h("a", { key: 'a8c9f50a615e00664c4074a6f8148c74bce0b485', href: "userinline.aspx" }, "Users List")), h("li", { key: '44481183da5c97cf82061da3491b06edc480ae47', class: "ir-mega-menu-row" }, h("a", { key: '76a25424d4037b045a8f1114f4593072778f43e2', href: "languageinline.aspx" }, "System Languages")), h("li", { key: 'a7a05f4041b986097d01e9168f331453e90ba7dd', class: "ir-mega-menu-row" }, h("a", { key: 'ae62ec49d520bf8a321fdc28f6f6ee5d6436a31a', href: "countryinline.aspx" }, "Countries")), h("li", { key: '92a6d8a7034cc99963d860057306bf0d6e0ba1da', class: "ir-mega-menu-row" }, h("a", { key: '401cb3c83fd876ee7d37815798fe3bd684210c2f', href: "level2inline.aspx" }, "Country Level 2")), h("li", { key: 'e65e5e95ff971351b45b6ab139201246266b413f', class: "ir-mega-menu-row" }, h("a", { key: '7bf1e9a73a661a54af6abcb75b1254167f429662', href: "cardinline.aspx" }, "Credit Cards")), h("li", { key: 'daf5e9f9d0278e64c0bb8a974747e2de9456408b', class: "ir-mega-menu-row" }, h("a", { key: 'f5251a65b51f9a73da126603a247e72e0ab5f28d', href: "hotel_chaininline.aspx" }, "Hotel Chains")), h("li", { key: '8d95553ae0884a749c56af5f82cb1f9fa9948625', class: "ir-mega-menu-row" }, h("a", { key: '8f2794bb768cfc4108838e5fb4e28437879c72f8', href: "currencyinline.aspx" }, "Currencies")), h("li", { key: 'c5eda00077f0d1f9882cff85b2d21d1c20fec0d5', class: "ir-mega-menu-row" }, h("a", { key: '63e2734da2d5ac03dea1f0e345fcb0ff260f484e', href: "amenityinline.aspx" }, "Amenities")), h("li", { key: '80ad51caa64bc822652d3d26347daef80cda16f1', class: "ir-mega-menu-row" }, h("a", { key: '88dced1ce575f10bb10361ee5b373765cda62d30', href: "foodinline.aspx" }, "Food")), h("li", { key: 'b4c96e0ec10219408edf3426c98c77ef5ee23cf0', class: "ir-mega-menu-row" }, h("a", { key: '8e6db0edc6e01c654101d0216c2c5dfbc18be1db', href: "beddinginline.aspx" }, "Bedding")), h("li", { key: 'ad34203a799252ac278bd3bda1c2cf50773aeafc', class: "ir-mega-menu-row" }, h("a", { key: '4247c263fffa5ea21a7bc0838ef77b1bc6517b0b', href: "setupinline.aspx" }, "Setup Table")), h("li", { key: 'd3a8922380f0ac6914ba22b66649ec7dddb94283', class: "ir-mega-menu-row" }, h("a", { key: '8487ca8b55d97146d82dc38f9f135782da05ef98', href: "gwedit.aspx" }, "Payment Gateways")), h("li", { key: '25050e56d4d1244635d44da5767838cffe891ea0', class: "ir-mega-menu-row" }, h("a", { key: '1ce8c90f22d4d5191b94ce603ba23986fe1a2e88', href: "channelmanager.aspx" }, "Channel Manager")))), h("li", { key: 'de545563a7f142cf3dc80b2224ac875edd9a32c8' }, h("ul", { key: '22fdc41bc0c211c2649d699fe91fdbced2d1c1b2', class: "ir-mega-menu-column" }, h("li", { key: '015599f99f987e1fa6cff57222b2188eefd73f3b', class: "ir-mega-menu-row title" }, "Main"), h("li", { key: 'd122e77042678be2acc13ff417160544990b8f10', class: "ir-mega-menu-row" }, h("a", { key: '75579320f1dc61bc8a7aca634a37d0f964ca022a', href: "mpolist.aspx" }, "MPOs")), h("li", { key: '4502b41709f842cbc37e460dd8725d90dc4eadb9', class: "ir-mega-menu-row" }, h("a", { key: '3832a307fbc221bf52047a4eda530f311ae78a2b', href: "aclist.aspx" }, "Properties")), h("li", { key: 'f4881d000743dc0e54d213ce5e4eabe8cce04631', class: "ir-mega-menu-row" }, h("a", { key: '914af3c05a0f4626f165f32df153478943ebd5ea', href: "acbookinglist.aspx?MODE=MPO" }, "Bookings")), h("li", { key: '1794aeb2cf9f7ad9234fe82b16c67a2fc24d3268', class: "ir-mega-menu-row" }, h("a", { key: 'f3eb2d05ec910246a6b1804e8901d361e5ba24ab', href: "mpoaffiliateproperties.aspx" }, "MPO Affiliate Properties")), h("li", { key: '60c0a78195375fbdda878776b76594a1bf4fb722', class: "ir-mega-menu-row" }, h("a", { key: '0e50a80d88b60dd1092998ffdd57663a9f4c0c87', href: "acratesallotment.aspx?VIEW_MODE=CV" }, "MPO Combined Inventory")), h("li", { key: '17d59e89dcd80811a858facc0fa00c9c1f45cc2c', class: "ir-mega-menu-row" }, h("a", { key: '91f5a8ffd4db356e765534ccd68cc8ed9751f78f', href: "acbookinglist.aspx?VIEW_MODE=CV" }, "MPO Combined Bookings")), h("li", { key: 'f9e6d66fa5428d73d706216111effa4f2379e0ea', class: "ir-mega-menu-row" }, h("a", { key: '1a2c51ca0e8993601777c7136becffd18356f76e', href: "Acmemberlist.aspx?VIEW_MODE=CV" }, "MPO Combined Guests")), h("li", { key: '13b6416cb4284b61f1874c709977455c8c654634', class: "ir-mega-menu-row" }, h("a", { key: 'eb59b57626d4c56af5597675acc6630c09f10108', href: "mpobillingreport.aspx" }, "MPO Billing Report")), h("li", { key: '7b6097c3616be650a9e76553945ca31fc360dd5b', class: "ir-mega-menu-row" }, h("a", { key: '8d573ca6f89ac8de771a2547c58435fb9ec5c343', href: "Acmemberlist.aspx" }, "Guests")), h("li", { key: '4cf0109628fc67fcf8734d93fec814513d663c71', class: "ir-mega-menu-row" }, h("a", { key: 'ac50f35db3ea2bd0276b821dbeb49d392328eb84', href: "acbookinglist.aspx" }, "Bookings")), h("li", { key: '0b1227dcbafc218a778bb95f411ceea7faae9c4b', class: "ir-mega-menu-row" }, h("a", { key: 'fa694c723f50da9bc455fde0f19b915ee151c630', href: "billing.aspx" }, "Billing")))), h("li", { key: 'b1832b17e7a170fae9dcd5fadc684cd9712c66ce' }, h("ul", { key: '932019bce478d299fabcb85826057fbe0c403b3b', class: "ir-mega-menu-column" }, h("li", { key: 'd47a8f54141291bb34eb6b16e55f066cced98aee', class: "ir-mega-menu-row title" }, "Locations"), h("li", { key: '9e6ee4a65505cfa95dd5d46515278b1828efa7cb', class: "ir-mega-menu-row" }, h("a", { key: '39d35147dc845c8a4e75e2d9bc27954ee31a64ae', href: "poicategoriesinline.aspx" }, "Types")), h("li", { key: '65a8a84d6e1c4be2e29e32bf1e9aca794093aab8', class: "ir-mega-menu-row" }, h("a", { key: '564e5d7ab5a7931cf14b4310380558805f4f2de7', href: "poilist.aspx" }, "List")))), h("li", { key: 'ea5fa7e5ea70feadb244b487dc796571f05f3870' }, h("ul", { key: '5da2a5ae7118058341b74f2e7d7fa31fbf9b431d', class: "ir-mega-menu-column" }, h("li", { key: 'dff7be8d4e408bbe1937a48a1b310b42e8b79d3d', class: "ir-mega-menu-row title" }, "Referrers"), h("li", { key: '39a4c828307bd1a72b68ae26f1abb94dcb598a25', class: "ir-mega-menu-row" }, h("a", { key: '614719d157d77df322fdf83a242bd5555b049c8c', href: "affiliatelist.aspx" }, "Affiliates")), h("li", { key: '331339f8279516fe6271122285d8b41dea1c767b', class: "ir-mega-menu-row" }, h("a", { key: '9433a81bd59087697e2b6ced4422d0b531df359e', href: "travelagentslist.aspx" }, "Travel Agents ...NOT USED")))))), h("li", { key: '8774db4e9dead0f3fdc3f7b1228b4bb1766d9aaf', class: "nav-item" }, h("a", { key: '890e87d9bbad68a01fd626094eb535fd64dd3f40', href: "#", class: "nav-link" }, "b")), h("li", { key: '2665e872d80ce48475c1cbbc3a414fd04f2dfc95', class: "nav-item" }, h("a", { key: '80885d089a81c751fb21b3a842aa560a321dec7a', href: "#", class: "nav-link" }, "c")), h("li", { key: 'e5776910e63625dc7b94b6b5ceb0494acc98717a', class: "nav-item" }, h("a", { key: 'f174eea7d725315447eb0283dbd3b25ce75c330a', href: "#", class: "nav-link" }, "d")), h("li", { key: '8990c08cb7c3ac7e288c77b82ecc36e90e6e5b10', class: "nav-item" }, h("div", { key: '44bc6034bfe63435fe8b556c386a4749cbff884c', class: "d-flex align-items-center justify-content-center", style: { marginTop: '2px' } }, h("ir-notifications", { key: '9619cbdfdf182bad09914586c0857e7b8831d447', notifications: this.notifications }))))), h("div", { key: 'd895bbf0cf594588bcd9f85cbed6de5c8bfbe1c5', class: `mobile-menu ${this.isMobileMenuOpen ? 'active' : ''}` }, h("div", { key: '02063a0685f2b0f8c11ae27b251d4ec91c5af1d1', class: "mobile-menu-header" }, h("div", { key: 'ead77e0851f00960d9376fb0324b231107c64397', class: "hotel-name" }, "Hotel Name"), h("button", { key: '094b1c61046001b456083f1f8616b1ee9de505af', class: "close-menu", onClick: () => this.toggleMobileMenu() }, "\u00D7")), h("div", { key: '0553e2ce9b326a7fbb122396e0fabc54d0440707', class: "mobile-search" }, h("ir-m-combobox", { key: '36041abf9e8d43ff499ead3aeff2a12af0c51daa', placeholder: "Search...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange })), h("ac-pages-menu", { key: 'f2e59b1cc82851e388af8ef116a2444703fa1832', location: "sheet", "onLink-clicked": async (e) => {
                await sleep(1000);
                window.location.href = e.detail.target.href;
            }, pages: this.pages }))), h("div", { key: '9f0f72a44121babfd62b00efe3333a38319e735f', class: "submenus d-none d-md-block" }, h("ac-pages-menu", { key: 'c13ee2c8edcf1ab09927c7ddae98b9d861546243', pages: this.pages }))), h("section", { key: '1a123693a3480f06a07015c4b64571062838ea57', class: "p-2" }, h("div", { key: 'e3fcf0e661975cecd079f8905cb1857dd7168196', class: "row g-3" }, h("div", { key: 'a3b0d0d8efeb007f08267dfdd2d4ed1057e4165f', class: "col-md-3" }, h("h5", { key: 'f0d2008b6f0019c342367e7408d77f33218dce25' }, "Static Options Example"), h("ir-m-combobox", { key: '20a5aab444fd47c9d6030e28867f838646073a7d', placeholder: "Select an option...", dataMode: "static", options: this.staticOptions, onOptionChange: this.handleStaticOptionChange }, h("svg", { key: '97ae35034eeb7e3103a591a3d72d357f2ad202ac', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: '32f6c15917451ed4652bb056b539d4157f7ab5cc', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" }))), this.selectedStaticOption && h("p", { key: '23645f22f6f72fa8239e5d69d9b66336a05cc202', class: "mt-2 text-muted" }, "Selected: ", this.selectedStaticOption.label)), h("div", { key: '45ef18b3d9f43a5ae0d94b0ed317617b1b634fbc', class: "col-md-3" }, h("h5", { key: 'cbc6676dcbf27f620100efee313f6504d2f1f439' }, "External API - Countries"), h("ir-m-combobox", { key: 'b593e5e19fa5b326d7118de6e7fc5fd0bcdeda0c', placeholder: "Search countries...", dataMode: "external", options: this.countryOptions, loading: this.isLoadingCountries, debounceDelay: 300, onSearchQuery: this.handleCountrySearch, onOptionChange: this.handleCountryChange }), this.selectedCountry && h("p", { key: '770f122e028df64ab8dfb5f59eb41c2f8681f1a3', class: "mt-2 text-muted" }, "Selected: ", this.selectedCountry.label)), h("div", { key: 'e64531cd1a00425fa9d3c269d1d92b3499793c17', class: "col-md-3" }, h("h5", { key: '33b813f52a2d7fe5dc166b0bc6453dbba7be36c9' }, "Custom Dropdown Content"), h("ir-m-combobox", { key: 'c3792b67821fb76892f0f3591b33ddcdb6474a06', class: "custom-width", ref: el => (this.customComboboxRef = el), placeholder: "Search with custom dropdown...", dataMode: "external", options: this.customOptions, loading: this.isLoadingCustom, useSlot: true, debounceDelay: 500, onSearchQuery: this.handleCustomSearch, onOptionChange: this.handleCustomOptionChange }, h("div", { key: '5a82654f97dd7e46941ee73fc983115f4a3a9566', slot: "dropdown-content" }, this.isLoadingCustom && h("div", { key: 'bb1a6da96df6a5ba561bee5a946eb9c3fc8c4122', class: "dropdown-item" }, "\uD83D\uDD04 Loading custom results..."), !this.isLoadingCustom && this.customOptions.length === 0 && h("div", { key: 'c6a9052284d75224e09deb945cdd9cd307efe859', class: "dropdown-item" }, "\uD83D\uDD0D Type to search..."), !this.isLoadingCustom &&
            this.customOptions.map((option, index) => (h("div", { key: index, class: "dropdown-item d-flex align-items-center", "data-option": option.value, "data-label": option.label, onClick: () => this.handleCustomOptionClick(option), onMouseEnter: e => {
                    const element = e.target;
                    const slotIndex = element.getAttribute('data-slot-index');
                    if (slotIndex && this.customComboboxRef) {
                        this.customComboboxRef.focusedIndex = parseInt(slotIndex);
                    }
                }, style: { cursor: 'pointer' } }, h("span", { class: "me-2" }, "\u2B50"), h("div", null, h("div", { class: "fw-bold" }, option.label), h("small", { class: "text-muted" }, "Custom option with ID: ", option.value))))))), this.selectedCustomOption && h("p", { key: 'c581d54ac4ca5ae77a663a586ef62c1ac4300d70', class: "mt-2 text-muted" }, "Selected: ", this.selectedCustomOption.label))), h("div", { key: '5a7c69e8c1825ae40efd90d8dc128d2a6b6c7f17', class: 'd-flex align-items-center my-1', style: { gap: '1rem' } }, h("button", { key: '6dd205f1d92a3cd12ae848aecd33bd256fb55fd4', class: "btn btn-primary", onClick: () => (this.notificationCount += 1) }, "+"), h("button", { key: 'be9442bf3b330d108adf83ea23b9b8e486ffdbaf', class: "btn btn-primary", onClick: () => (this.notificationCount -= 1) }, "-")), h("ir-input-text", { key: 'cb72944e3b7f19c309b743856ad1acd626091641', variant: "floating-label", class: "my-text-input", label: "First name" }, h("svg", { key: '5ad37b452110ace05e5193cab6c4021d08e90b80', xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640", slot: "prefix" }, h("path", { key: 'd6bfbb7aacfa989c7c93c40ed58965ef403a5911', d: "M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" })), h("svg", { key: '02667c861d074735ba548a13080ecf49230507f2', slot: "suffix", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 640" }, h("path", { key: '26b9f97e713b3332781d87dc55734d0d1832b9ff', d: "M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 544L432 544L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM480 160L480 544L512 544C547.3 544 576 515.3 576 480L576 224C576 188.7 547.3 160 512 160L480 160zM160 544L160 160L128 160C92.7 160 64 188.7 64 224L64 480C64 515.3 92.7 544 128 544L160 544z" }))), h("ir-select", { key: 'aab5a6f37f7901e037e1cabbacc22a2818a07489', "floating-label": true, label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '5176f08be1ac67f9cf0f14e29afe812c8df1986c', class: "my-2" }), h("ir-select", { key: '49037f34e19937e956c092f3137bf11bdeaf18d5', label: "Hello", data: [{ value: '1', text: '1' }] }), h("div", { key: '99881813a2787ca932c20800952afcb4e271d992', class: "my-2" }), h("ir-select", { key: '27bf5b08d49396a6c33cb5d3947e13708f31a190', data: [{ value: '1', text: '1' }] }), h("div", { key: '46e5f87d352b6b51162c7bfa0d10096513b8dca3', class: "card p-1" }, [
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